---
pid: 87
type: "post"
title: "Aplicaciones multicontenedor con Docker Compose"
url: "/2015/07/aplicaciones-multicontenedor-con-docker-compose/"
date: 2015-07-03T16:00:00+02:00
updated: 2015-07-18T21:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "Continuando la serie de artículos sobre Docker, otra de las herramientas disponibles en el ecosistema y que nos facilitará enormemente el administrar aplicaciones compuestas por varios contenedores relacionados entre sí es Docker Compose. Definiendo en un archivo los contenedores que forman parte de una aplicación podemos iniciarlos, pararlos, eliminarlos o ver su estado como si de una unidad se tratara."
---

{{% post %}}

{{< logotype image="docker.svg" title="Docker" width="200" >}}

Una vez que ya sabemos que nos puede proporcionar una de las herramientas de la que más se está hablando con la [introducción a docker][blogbitix-49], conocemos [como empezar a usar docker][blogbitix-50] y sabemos [cómo crear nuestras propias imágenes de docker][blogbitix-51] para los propósitos específicos que necesitemos nos resultará interesante algunas de las nuevas herramientas que proporciona docker. El ecosistema de docker ya no solo se compone del entorno de ejecución de los contenedores, explicadas de forma básica son:

* [Docker][docker]: el sistema de contenedores (_runtime_, imágenes, ...).
* [Docker Hub][docker-hub]: el repositorio de imágenes que las diferentes herramientas de forma oficial o a través de usuarios construyen y comparten imágenes que cualquiera puede usar.
* [Docker Compose][docker-compose]: permite describir un conjunto de contenedores que se relacionan entre ellos.
* [Docker Machine][docker-machine]: permite construir máquinas virtuales para alojar contenedores. Similar a lo que hace [Vagrant][vagrant], al igual que el anterior también permite construir máquinas que ejecuten contenedores con [VirtualBox][virtualbox] o diferentes sistemas de computación en en la nube como [Amazon EC2][amazon-ec2], [Digital Ocean][digital-ocean] u otros. Docker Machine puede ser la forma de usar docker en Windows o Mac OS hasta que funcione de forma nativa como en GNU/Linux.
* [Docker Swarm][docker-swarm]: permite construir un _cluster_ de máquinas al que se puede enviar contenedores docker para su ejecución.

Continuando la [serie de artículos sobre docker][blogbitix-serie-docker] que escribí hace unos meses escribiré sobre cada una de estas nuevas herramientas, empezando en este artículo con Docker Compose en el que explicaré de qué forma nos puede servir, como instalarlo y el descriptor de contenedores con un ejemplo.

### Introducción a Docker Compose

Las aplicaciones basadas en microservicios se prestan a usar múltiples contenedores cada uno con un servicio, uno puede contener la base de datos [postgresql][postgresql], otro una base de datos clave/valor [redis][redis] o de documentos como [elasticsearch][elasticsearch] para hacer búsquedas, otro un sistema de mensajería como [rabbitmq][rabbitmq], otro [tomcat][tomcat] o [wildfly][wildfly] que use los anteriores y un servidor web como [Nginx][nginx]. Teniendo múltiples contenedores usar el comando `docker run` para cada uno de ellos nos resultará incómodo.

En este punto entra Docker Compose que es una herramienta que permite definir nuestra aplicación multicontenedor en un archivo de texto con las mismas propiedades que indicaríamos con el comando `docker run` individualmente. Con un único comando podremos iniciar todos los contenedores y en el orden que los especifiquemos.

El archivo descriptor nos puede servir no solo como forma de iniciar los contenedores en un entorno de desarrollo sino como de documentación de la aplicación en la que veremos qué contenedores, imágenes, volúmenes, enlaces y demás propiedades tienen.

### Instalar Docker Compose

Tenemos varias formas de instalar Docker Compose. La que más me gusta y la que recomiendo por ser sencilla es [descargar el binario de docker compose](https://github.com/docker/compose/releases) según nuestra plataforma GNU/Linux o Mac.  Descargando el binario de Docker Compose deberemos darle permisos de ejecución y si nos interesa colocarlo en la variable de entorno _PATH_ del sistema:

{{< code file="permisos.sh" language="bash" options="" >}}
{{< code file="bashrc" language="plaintext" options="" >}}

Con el siguiente comando veremos que Docker Compose funciona correctamente y la versión del mismo.

{{< code file="docker-compose-version.sh" language="bash" options="" >}}

### El descriptor de contenedores

El descriptor de los contenedores a usar con Docker Compose es un archivo de texto con [formato yaml][yaml] en la que especificamos los diferentes contenedores y sus propiedades, básicamente podemos indicar las mismas propiedades que indicamos arrancando los contenedores individualmente con el comando `docker run`. En el siguiente ejemplo vemos varios contenedores, dos contenedores de datos para redis y postgresql, los contenedores de redis y postgresql y un contenedor para la aplicación usando tomcat enlazado con los contenedores de redis y postgresql definidos previamente.

{{< code file="docker-compose.yml" language="YAML" options="" >}}

La imagen de los contenedores se indica con la propiedad _image_, los contenedores de datos, _redisdb_ y _posgresqldb_, usan la propiedad _volumes_ con los datos que guardarán y la imagen de _busybox_ (se suele usar esta para los contenedores de datos porque es muy pequeña), con la propiedad _hostname_ podemos indicar el nombre de la máquina que al usar la propiedad _link_ docker hará visible al contenedor que los usen, con _volumes\_from_ podemos usar volúmenes, con _links_ enlazar contenedores y con _ports_ asociar puertos entre los contenedores y la propia máquina anfitrión, en el ejemplo he usado los puertos por defecto de cada uno de los servicios.

La [descripción completa del formato del archivo de Docker Compose](https://docs.docker.com/compose/yml/) nos da una idea de las opciones que podemos usar, está bastante bien explicado y con ejemplos que nos resultará sencillo entender conociendo los parámetros que usamos con _docker run_.

### Iniciar los contenedores con Docker Compose

Escrito el archivo de los contenedores y llamándolo _docker-compose.yml_ podemos iniciar los contenedores con el comando `docker-compose up` estando en el mismo directorio de trabajo donde esté ubicado del archivo yml (y previamente habiendo iniciado el servicio de docker). Con _docker-compose ps_ podremos ver el estado de los contenedores y de cuales está compuesta la aplicación. Con la opción _\-\-help_ podemos ver la lista completa de comandos que podemos usar.

{{< code file="docker-compose-up.sh" language="YAML" options="" >}}

{{< image
    gallery="true"
    image1="image:docker-compose.png" optionsthumb1="300x200" title1="Docker Compose"
    caption="Docker Compose" >}}

docker-compose inicia los contenedores en el orden que hemos indicado en el archivo de definición, las trazas emitidas de los servicios de los contenedores aparecerán en la terminal si iniciamos los contenedores en primer plano y con _Ctrl+C_ se pararán los contenedores. Indicando la opción _-d_ los contenedores se iniciarán en segundo plano, con _docker-compose stop_ podremos pararlos, con _docker-compose restart_ reiniciarlos, _docker-compose rm_ para eliminar completamente los contenedores y con _docker-compose logs_ veremos las trazas emitidas por los servicios que nos serán de utilizar si iniciamos los contenedores en segundo plano.

{{< asciinema id="23602" caption="Comandos básicos de Docker Compose" >}}

{{< amazon
    linkids="9d344246cd59cd65a952305379c2556a"
    asins="1633430235" >}}

En las siguientes semanas publicaré más artículos sobre esta serie de Docker comentando [Docker Hub][docker-hub], [Docker Machine][docker-machine] y explicaré de qué forma nos pueden ser útiles estas otras herramientas.

{{< reference >}}
* [Introducción a elasticsearch][blogbitix-21]
{{< /reference >}}

{{% /post %}}
