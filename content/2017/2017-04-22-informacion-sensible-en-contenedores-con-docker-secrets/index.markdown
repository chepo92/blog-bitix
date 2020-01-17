---
pid: 227
type: "post"
title: "Información sensible en los contenedores con Docker Secrets"
url: "/2017/04/informacion-sensible-en-los-contenedores-con-docker-secrets/"
aliases: ["/2017/04/informacion-sensible-en-contenedores-con-docker-secrets/"]
date: 2017-04-22T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:docker.svg"
tags: ["blog", "planeta-codigo"]
series: ["docker"]
summary: "Parte de la información que usan los contenedores de Docker se debe proteger de accesos no deseados. Anteriormente en algunos casos se usaban variables de entorno para lanzar los contenedores lo que no es seguro si se listan los procesos del sistema con sus parámetros, incluir archivos en las imágenes de los contenedores tampoco es recomendable. Docker Secrets permite proporcionar y mantener segura la información sensible que usen los contenedores."
---

{{% post %}}

{{< logotype image1="docker.svg" title1="Docker" width1="200" >}}

Los contenedores de [Docker][docker] necesitan acceder a algunos datos sensibles desde el punto de vista de la seguridad como usuarios y contraseñas, certificados SSL, claves privadas SSH o cualquier otra información de acceso restringido. Algunos de estos datos en Docker se proporcionan mediante variables de entorno al lanzar los contenedores, esto es inseguro ya que al hacer un listado de los procesos con sus parámetros de invocación los relativos a Docker mostrarán esta información, lo que es un posible problema de seguridad.

Con [Docker Secrets][docker-secrets] se puede gestionar esta información que se necesita en tiempo de ejecución pero que no se quiere almacenar en la imagen de Docker o en el repositorio de código fuente. Algunos ejemplos de información sensible son:

* Nombres de usuario y contraseñas.
* Certificados TLS y claves.
* Claves SSH.
* Otra información sensible como el nombre de una base de datos o el nombre de un servidor interno.

Los secretos de Docker se proporcionan a los contenedores que los necesitan y se transmiten de forma cifrada al nodo en el que se ejecuten. Los secretos se montan en el sistema de archivos en la ruta _/run/secrets/\<secret\_name\>_ de forma descifrada al que el servicio del contenedor puede acceder.

Algunos comandos para manejar los secretos son los siguientes:

* _docker secret create secreto_: crea un secreto.
* _docker secret inspect secreto_: muestra los detalles de un secreto.
* _docker secret ls_: lista los secretos creados.
* _docker secret rm secreto_: elimina un secreto.
* Se usa el parámetro _\-\-secret_ para _docker service create_ y _\-\-secret-add_ y _\-\-secret-rm flags_ para _docker service update_.

Usando un _stack_ de servicios con un archivo de [Docker Compose][docker-compose] en la sección _secrets_ de los servicios se indica cuales usa, en la sección _secrets_ se definen los secretos de los servicios con sus nombres y su contenido referenciando archivos que pueden ser binarios o de text no superior a 500 KiB.

Al servicio de [nginx][nginx] la clave privada y certificado para configurar el acceso mediante el protocolo seguro HTTPS se le proporciona a través de secretos que son referenciados en el archivo de configuración del servidor web _nginx.conf_.

{{< code file="docker-compose-stack-app.yml" language="YAML" options="" >}}
{{< code file="nginx.conf" language="plaintext" options="" >}}

Por otra parte la aplicación Java con [Spring Boot][spring-boot] lista el contenido de los secretos incorporados en el contenedor cuando se solicita en la URL _https\://192.168.99.100/system/info/_, esto no se debe hacer porque se pierde la seguridad que proporcionan los secretos pero sirve a modo de muestra en el ejemplo.

{{< code file="HostInfoContributor.java" language="java" options="" >}}
{{< code file="info.json" language="json" options="" >}}

{{< image
    gallery="true"
    image1="image:message.png" optionsthumb1="300x200" title1="Contenido del archivo message.txt"
    caption="Contenido del archivo message.txt" >}}

Para probar el ejemplo hay que ejecutar varios comandos, la secuencia completa es la siguiente:

{{< code file="run.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/DockerSwarm" >}}

{{% /post %}}
