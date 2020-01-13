---
pid: 70
type: "post"
title: "Datos de sesión externalizados con Spring Session"
url: "/2015/03/datos-de-sesion-externalizados-con-spring-session/"
date: 2015-03-07T09:05:06+01:00
updated: 2019-03-17T15:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Por defecto los datos de la sesión de una aplicación web Java se guardan en el servidor de aplicaciones y en memoria, esto produce que al reiniciar el servidor por un despliegue los datos de la sesión se pierdan y provoque en los usuarios alguna molestia como tener que volver a iniciar sesión. En [Tomcat][tomcat] existe la posibilidad de que los datos de las sesiones sean persistidas en disco con la opción _saveOnRestart_ del [elemento de configuración _Manager_](https://tomcat.apache.org/tomcat-8.0-doc/config/manager.html) que evita que los datos de las sesiones se pierdan en los reinicios, al menos para los servicios formados por una única instancia. Para evitar que los usuarios perciban los reinicios o caídas del servidor hay varias soluciones algunas tratando de diferentes formas externalizar las sesiones del servidor de aplicaciones. Con estas soluciones se pueden hacer despliegues sin caídas, sin que las perciban los usuarios, siendo útil para hacer actualizaciones frecuentemente, continuos, y en cualquier momento cuando tengamos una nueva versión de la aplicación.

Las soluciones más comentadas son:

* _Cluster_ de servidores: para evitar las caídas podemos formar un _cluster_ de máquinas de forma que si una se reinicia las peticiones sean atendidas por el resto de servidores del _cluster_. Añadiendo una poca configuración se puede formar un [_cluster_ de servidores Tomcat](https://tomcat.apache.org/tomcat-8.0-doc/cluster-howto.html). Si el _cluster_ está formado por unos pocos servidores esta solución es válida pero si el _cluster_ es grande (¿media docena de máquinas?) el tráfico que se genera para sincronizar los datos de sesión en todas las máquinas puede ser significativo, momento en el cual se opta por otras soluciones.
* Sesión en base de datos relacional: los datos de la sesión se pueden guardar en una base de datos relacional, al llegar una petición al servidor se recupera de la base de datos la sesión con una consulta y al finalizar la petición se lanza otra consulta de actualización. En las aplicaciones la base de datos suele ser un cuello de botella prefiriéndose guardar la sesión en otro servidor que no sea el servidor de base de datos para no generarle más carga.
* Caché externa: en esta opción los datos se guardan en un servidor externo al servidor de aplicaciones de forma que todos los servidores del _cluster_ las compartan pero no en la base de datos relacional, algunas opciones que se pueden utilizar son [memcached][memcached] o [Redis][redis] que almacenan los datos en memoria y son muy rápidas. Esta opción añade una pieza más a la infraestructura de la aplicación que hay que mantener. En este artículo pondré un ejemplo usando esta opción utilizando Spring Session y un servidor Redis.
* Sesión en _cookie_: para no añadir una pieza más a la infraestructura del servidor se puede externalizar la sesión en el cliente mediante una _cookie_. Como la _cookie_ es enviada por el navegador cliente en cada petición el servidor puede recuperar los datos de la sesión. Sin embargo, como los datos son guardados en el cliente los datos de la _cookie_ han de ser cifrados y firmados digitalmente para evitar problemas de seguridad ante modificaciones de los datos. También deberemos evitar guardar muchos datos y tendremos cierta limitación para que la _cookie_ no sea grande, el tamaño recomendado no exceder es 4096 bytes si lo hacemos puede que ocasionemos errores con el mensaje _400 bad request, request header or cookie too large_ y consuma mucho ancho de banda, hay que tener en cuenta que las _cookies_ son enviadas en cada petición al servidor origen no solo para las peticiones dinámicas sino también para los recursos estáticos como imágenes u hojas de estilos, si las _cookies_ son grandes y el número de usuarios también el ancho de banda consumido por las _cookies_ puede ser significativo, en estos últimos casos [empleando un CDN][blogbitix-34] puede aliviarse el tráfico generado. En la siguiente página están recogidos [los límites de las cookies para cada navegador y el número máximo por dominio](http://browsercookielimits.squawky.net/).

Usando [Spring Session][spring-session] se puede externalizar los datos de la sesión en un servidor Redis usándolo como caché externa. Para demostrar y enseñar el código necesario he creado una pequeña aplicación web con [Spring Boot][spring-boot]. El controlador no tiene nada especial, obtiene la sesión y guarda los datos enviados en un formulario en la sesión, luego esta transparentemente se serializa en Redis. Usando la anotación _@SpringBootApplication_ con la autoconfiguración se activa la infraestructura necesaria en el contenedor de Spring para guardar los datos de la sesión en Redis incluida la conexión a Redis. Por supuesto hay que añadir las dependencias necesarias al proyecto entre ellas el cliente Java de Redis.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="SessionController.java" language="java" options="" >}}
{{< code file="docker-compose.yml" language="Yaml" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Descargado el [código fuente de la aplicación de ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/SpringSession) y utilizando [Docker][docker] para iniciar el servidor Redis se puede iniciar la aplicación con el comando:

{{< code file="docker-compose.sh" language="bash" options="" >}}
{{< code file="gradlew.sh" language="bash" options="" >}}

Lanzando una petición se puede ver como el Redis se guardan los datos de la sesión. Derteniendo la aplicación e iniciándolo de nuevo los datos de la sesión no se pierden al estar persistidos en Redis, el navegador envía la _cookie_ de sesión que contiene únicamente su identificativo y la aplicación recupera los datos de Redis.

{{< image
    gallery="true"
    image1="image:dato-en-sesion.png" optionsthumb1="300x200" title1="Dato en sesión"
    image2="image:cookie-navegador.png" optionsthumb2="300x200" title2="Cookie de sesión en el navegador" >}}

Examinando los datos en Redis se puede ver que se ha creado una clave con el mismo identificativo de la cookie de sesión, en la clave están guardados los valores serializados entre ellos el nombre del atributo y su valor y otros datos como la fecha de creación, el último acceso y el intervalo máximo de inactividad antes de la expiración.

{{< image
    gallery="true"
    image1="image:contenido-sesion-redis.png" optionsthumb1="300x200" title1="Contenido sesión en redis" >}}

En el momento de escribir este artículo Spring Session es un proyecto reciente y solo soporta la opción de Redis como caché externa pero seguramente con nuevas versiones soporte otras opciones como _memcached_, guardar la sesión en una _cookie_ o en una base de datos relacional. La solución propuesta por Spring Session es válida para cualquier servidor de aplicaciones ya que se basa en crear un filtro en la aplicación que proporciona una versión modificada de [HttpSession](https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSession.html) mediante el cual se guardan los datos de forma externa.

Otras posibilidades ofrecidas por Spring Session son múltiples sesiones en la misma instancia del navegador y soporte para aplicaciones REST y WebSocket. Para aumentar la seguridad se puede [aumentar el tamaño del identificativo de la sesión almacenada en su _cookie_][blogbitix-397].

{{< reference >}}
* [Spring Session][spring-session]
* [Simple Session-Sharing in Tomcat Cluster Using the Session-in-Cookie](https://shinesolutions.com/2012/12/18/simple-session-sharing-in-tomcat-cluster-using-the-session-in-cookie-pattern/)
* [Tomcat Cluster](http://tomcat.apache.org/tomcat-8.0-doc/cluster-howto.html)
* [Memcached Session Manager](https://code.google.com/p/memcached-session-manager/)
{{< /reference >}}

{{% /post %}}
