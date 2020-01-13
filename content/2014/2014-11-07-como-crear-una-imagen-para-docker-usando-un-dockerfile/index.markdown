---
pid: 51
type: "post"
title: "Cómo crear una imagen para Docker usando un Dockerfile"
url: "/2014/11/como-crear-una-imagen-para-docker-usando-un-dockerfile/"
date: 2014-11-07T19:50:17+01:00
updated: 2015-05-26T20:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "Podemos usar los contenedores disponibles en Docker Hub, donde están disponibles las aplicaciones de bases de datos, servidores de aplicaciones de mútiples lenguages, servidores web más populares y entre otras muchas. Pero también podemos definir nuestras propias imágenes personalizadas con las necesidades que tengamos. Lo que necesitamos es escribir un archivo que contenga la receta para construir la imagen del contenedor, este archivo es el Dockerfile."
---

{{% post %}}

{{< logotype image="docker.svg" title="Docker" width="200" >}}

Las imágenes de [docker] son el sistema de archivos que usa el proceso o procesos que se arrancan en los contenedores. Si nos convencen las [características de docker][blogbitix-49] y estamos decididos a usarlo y ya sabemos [como administrar de forma básica los contendores][blogbitix-50] si queremos disponer de una imagen adaptada a los servicios que necesitamos para iniciar contenedores tendremos que crearla, en este artículo explicaré cómo crear una imagen para docker personalizada.

Antes de crear una imagen para docker podemos buscar en el [registro de imágenes de docker](https://registry.hub.docker.com/) que han creado otros usuarios y los han compartido por si hay alguna que ya se adapte a nuestras necesidades, si nos sirve alguna y es algo popular nos evitaremos tener que modificarla nosotros mismos según salgan nuevas versiones de los servicios que use. El registro de imágenes de docker es un servicio en el que los usuarios comparten y colaboran en la creación de las imágenes. Para los servicios más conocidos dispondremos ya de las imágenes como podrían ser: [mysql](https://registry.hub.docker.com/_/mysql/), [redis](https://registry.hub.docker.com/_/redis/), [postgresql](https://registry.hub.docker.com/_/postgres/), [ubuntu](https://registry.hub.docker.com/_/ubuntu/), [wordpress](https://registry.hub.docker.com/_/wordpress/), [nginx](https://registry.hub.docker.com/_/nginx/), [mongodb](https://registry.hub.docker.com/_/mongo/), ...

Si no hay ninguna que se adapte totalmente a nuestras necesidades, no nos gusta como están construidas las existes o no confiamos en el mantenimiento que puedan tener esas imágenes podemos crear las nuestras propias. Para crear una imagen de docker se necesita una receta en forma de [archivo Dockerfile](http://docs.docker.com/reference/builder/) que contiene la descripción e instrucciones para construir la imagen. Para crear un dockerfile podemos basarnos en los de las imágenes del registro de docker.

Este podría ser el contenido y la receta de un dockerfile si quisiésemos crear una imagen de docker para mysql, lo paso a explicar después.

{{< code file="Dockerfile-base" language="plaintext" options="" >}}
{{< code file="Dockerfile-mysql" language="plaintext" options="" >}}

Los Dockerfile tienen algunas instrucciones:

* FROM: indica la imagen base a partir de la cual crearemos la imagen que construirá el Dockerfile.
* MAINTAINER: documenta el creador de la imagen.
* ENV HOME: establece el directorio HOME que usarán los comandos RUN.
* RUN: permite ejecutar una instrucción en el contenedor, por ejemplo, para instalar algún paquete mediante el gestor de paquetes (apt-get, yum, rpm, ...).
* ADD: permite añadir un archivo al contenedor, en muchas ocasiones se utiliza para proporcionar la configuración de los servicios (ssh, mysql, ...).
* VOLUME: establece puntos de montaje que al usar el contenedor se pueden proporcionar, los volúmenes son al forma de externalizar un determinado directorio y proporcionar persistencia (las imágenes de docker son de solo lectura y no almacenan datos entre diferentes ejecuciones).
* EXPOSE: indica los puertos TCP/IP por los que se pueden acceder a los servicios del contenedor, los típicos son 22 (SSH), 80 (HTTP) y en este caso el puerto por defecto de mysql 3306.
* CDM: establece el comando del proceso de inicio que se usará si no se indica uno al iniciar un contenedor con la imagen.

El Dockerfile-base crea una imagen base que usaremos posteriormente en la imagen de mysql, configura el color del prompt, la contraseña de root y expone el puerto 22 para poder hacer ssh.

En este ejemplo en vez de usar una imagen propia de Ubuntu en la directiva FROM he usado una imagen especial, [phusion/baseimage](https://registry.hub.docker.com/u/phusion/baseimage/):0.9.15. La imagen phusion/baseimage proporciona un sistema init adaptado al funcionamiento de los contenedores de docker al contrario de las imágenes de ubuntu que emplean upstart. Si usásemos alguna imagen de ubuntu y quisiésemos iniciar varios procesos en el contenedor deberíamos usar un servicio como punto de entrada como [supervisord](http://supervisord.org/), con la imagen phusion/baseimage no sería necesario ya que ya ofrece esta funcionalidad de forma más sencilla.

Con las instrucciones RUN y ADD instalamos el paquete de mysql y el cliente de mysql y añadimos la configuración de mysql en el archivo my.cnf. En /etc/service/mysql/run dejamos el comando del servicio que iniciará el proceso de mysql como espera el sistema init de la imagen phusion. Con VOLUME ["/var/lib/mysql"] establecemos un punto de montaje para poder externalizar y persistir los datos de las bases de datos de mysql.

Una vez tenemos el Dockerfile y los archivos de configuración a incluir con los comandos ADD contruimos la imagen con:

{{< code file="docker-build.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:docker-mysql.png" optionsthumb1="300x200" title1="docker-mysql" >}}

Para proporcionar la persistencia a la imagen de mysql podemos crear un contenedor específico que contenga los datos. Con el siguiente comando creamos un contenedor de datos, uso la imagen busybox ya que es una de las más pequeñas:

{{< code file="docker-run-1.sh" language="bash" options="" >}}

Posteriormente podemos iniciar y parar el contenedor de msql con:

{{< code file="docker-run-2.sh" language="bash" options="" >}}

En los siguientes artículos comentaré la herramienta de automatización [ansible][ansible] y como sacarle provecho para iniciar los contenedores en una máquina de desarrollo (devbox). También en algún otro artículo comentaré la opción de [bitnami][bitnami] que dentro de poco ofrecerá soporte para docker y como con esta opción podemos usar un servicio «out-of-the-box» si tener que crear ni siquiera un Dockerfile o tener que documentarnos para instalar un servicio (que en algunos casos pueden tener cierta complejidad) aunque sea usando virtualización con [virtualbox][virtualbox] o computación en la nube.

{{< amazon
    linkids="9d344246cd59cd65a952305379c2556a"
    asins="1633430235" >}}

{{< reference >}}
* [Introducción a Docker][blogbitix-49]
* [Guía de inicio básico de Docker][blogbitix-50]
* [Lista de enlaces sobre Docker](http://www.nkode.io/2014/08/24/valuable-docker-links.html)
* [Introducción a Ansible][blogbitix-52]
* [Integración entre Ansible y Docker][blogbitix-53]
* [Introducción a Bitnami][blogbitix-54]
{{< /reference >}}

{{% /post %}}
