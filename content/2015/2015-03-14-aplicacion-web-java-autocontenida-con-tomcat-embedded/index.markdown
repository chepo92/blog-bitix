---
pid: 71
type: "post"
title: "Aplicación web Java autocontenida con Tomcat Embedded"
url: "/2015/03/aplicacion-web-java-autocontenida-con-tomcat-embedded/"
date: 2015-03-14T10:32:20+01:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

La tendencia de las aplicaciones es que sean construidas como múltiples servicios pequeños que colaboran entre si en vez de consistir en una aplicación grande desplegada en un servidor de aplicaciones. La aparición de [nuevas tecnologías como Docker][blogbitix-50] facilitan la construcción y despliegue de los microservicios. Los microservicios con su máxima de bajo acoplamiento y alta cohesión tratan de incluir todo lo necesario para funcionar evitando las dependencias de cualquier tipo de elemento fuera de su ámbito no incluyendo el uso de otros servicios. Con [Docker][docker] es posible desplegarlos en cualquier máquina que disponga del servicio, esto evita problemas de configuración al pasar la aplicación de un entorno de desarrollo a uno de producción ya que las características del entorno de desarrollo y el de producción pueden ser idénticos.

Los microservicios pueden ser autocontenidos de tal forma que incluyen todo lo necesario para prestar su servicio evitando por ejemplo sin depender de un servidor de aplicaciones en el que desplegar la aplicación que ha de ser instalado previamente, para ello pueden incluir un servidor embebido de [Tomcat][tomcat], de [Jetty][jetty] o usando [Spring Boot][spring-boot]. Esto evita malos funcionamiento por diferencias en la configuración o de versiones de los servidores en cada uno de los entornos, además hace más fácil el despliegue en una nueva máquina siendo lo único necesario el microservicio, sin necesidad de disponer previamente un servidor externo. Por otra parte si usamos Docker para el microservicio evitamos que configurar la máquina física o virtual directamente, todo lo que necesite el microservicio estará en la imagen Docker, nuevamente evitamos problemas de configuración entre entornos.

Para hacer cualquier aplicación autocontenida sin necesidad de instalar el servidor de aplicaciones como entorno en el que desplegar la aplicación podemos usar Tomcat Embedded o mejor y con el mismo efecto [usar Spring Boot con la posibilidad de usar Tomcat, Jetty o Undertow][blogbitix-103], realmente Spring Boot usa las versiones embebibles del servidor que se use y además se encarga de inicializar el contenedor IoC de [Spring][spring]. En este caso usando Tomcat Embedded directamente disponiendo del archivo _.war_ típico de una aplicación web en Java podemos desplegarlo en el servidor embebido, el inicio de la aplicación será como cualquier otra aplicación Java, con su método _public static void main_(String[] args), usando la API ofrecida por Tomcat podemos iniciar el servidor de forma programática y realizar el despliegue de la aplicación _.war_.

Para la demostración usaré la aplicación con los ejemplos que hice para el [libro PulgIn Tapestry][blogbitix-12] que trataba del el _framework_ de desarrollo [Apache Tapestry][tapestry]. Primeramente deberemos añadir al proyecto la dependencia de tomcat-embedded de forma que podamos importar las clases y paquetes de Tomcat a usar en la clase que iniciará la aplicación.

{{< code file="build.gradle" language="groovy" options="" >}}

Posteriormente crearemos una clase Java con su método main que inicie el servidor de aplicaciones embebido con la aplicación web desplegada en él, podemos indicar el puerto que queremos que escuche y las configuraciones que necesitemos tal como si lo configurásemos el archivo _server.xml_ o _context.xml_ pero usando código Java, usaremos la API ofrecida por las clases incluidas en las dependencias anteriores (_org.apache.catalina.startup.Tomcat_).

{{< code file="Main.java" language="java" options="" >}}

Generamos el war de la aplicación que queremos desplegar embebida, e iniciamos la aplicación con la clase que contiene el método main con [Gradle][gradle] o desde la linea de comandos con java, necesitaremos descargar las librerías de Tomcat Embedded y en este ejemplo copiarlas al directorio _lib/_ junto con la librería _TomcatEmbedded-0.1.jar_ que contiene la clase _Main_ construida con el comando <code>gradlew build</code>:

{{< code file="startup.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:tomcat-embedded-comando.png" optionsthumb1="300x200" title1="Iniciando TomcatEmbedded"
    image2="image:tomcat-embedded-app.png" optionsthumb2="300x200" title2="TomcatEmbedded iniciado" >}}
{{< image
    gallery="true"
    image1="image:app.png" optionsthumb1="300x200" title1="Aplicación web en TomcatEmbedded" >}}

La tendencia actual es que las aplicaciones evolucionen hacia microservicios por varias características deseables que ofrecen como al ser más pequeñas las funcionalidades sean más manejables, sean reemplazables, posibilidad de usar la tecnología más adecuada según el servicio desde lenguaje de programación al sistema de persistencia (relacional o noSQL), facilidad de despliegue, .... Si te interesan los microservicios un libro muy interesante y recomendable es [Building Microservices](https://amzn.to/2MTStSv). Proporciona una visión detallada de los diferentes aspectos que deben tratar las aplicaciones construidas según esta arquitectura.

{{< amazon
    linkids="ba7a81c43f55a67e1268c7b9969806b1"
    asins="1491950358" >}}

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/TomcatEmbedded) y el [código fuente de la aplicación web](https://github.com/picodotdev/elblogdepicodev/tree/master/PlugInTapestry) usada los puedes encontrar en mi repositorio de GitHub. Finalmente he de decir que la aplicación usada aunque es un ejemplo no es simple (usa [Tapestry][tapestry], [Spring][spring], [Hibernate][hibernate], [Shiro][shiro], [H2][h2]) y a pesar de ello no he tenido ninguna excepción extraña que haya tenido que resolver, con esto quiero decir que usar Tomcat Embedded me ha resultado totalmente fiable.

{{< reference >}}
* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Arquitectura orientada a servicios](https://es.wikipedia.org/wiki/Arquitectura_orientada_a_servicios)
* [Not Your Father's Java: An Opinionated Guide to Modern Java Development, Part 1](http://blog.paralleluniverse.co/2014/05/01/modern-java/)
* [An Opinionated Guide to Modern Java, Part 2: Deployment, Monitoring & Management, Profiling and Benchmarking](http://blog.paralleluniverse.co/2014/05/08/modern-java-pt2/)
* [An Opinionated Guide to Modern Java, Part 3: Web Development](http://blog.paralleluniverse.co/2014/05/15/modern-java-pt3/)
{{< /reference >}}

{{% /post %}}
