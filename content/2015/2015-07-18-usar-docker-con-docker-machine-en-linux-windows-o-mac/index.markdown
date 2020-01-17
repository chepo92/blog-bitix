---
pid: 89
type: "post"
title: "Usar docker con Docker Machine en Linux, Windows o Mac"
url: "/2015/07/usar-docker-con-docker-machine-en-linux-windows-o-mac/"
date: 2015-07-18T12:00:00+02:00
updated: 2015-07-18T21:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "Aunque no usemos Linux podemos hacer uso de docker a través de una máquina virtual de VirtualBox y con Docker Machine. Docker Machine permite crear un sistema con la misión de albergar contenedores de docker, puede ser en VirtualBox pero también en Amazon EC2 o Digital Ocean además de otras muchas opciones."
---

{{% post %}}

{{< logotype image="docker.svg" title="Docker" width="200" >}}

[Docker][docker] ha dejado de ser únicamente una tecnología de contenedores formando un ecosistema alrededor de docker más completo, [Docker Compose][docker-compose] que permite [definir un grupo de contenedores en un archivo][blogbitix-51], por supuesto parte importante de este ecosistema es [Docker Hub][docker-hub] para [compartir imágenes de contenedores][blogbitix-88] y [Docker Swarm][docker-swarm] que permite formar un _cluster_ de máquinas. En este artículo comentaré cómo usar [Docker Machine][docker-machine] y dejaré para un futuro [Docker Swarm][docker-swarm] (ya que por el momento las pruebas que he hecho no han sido exitosas).

Antes de nada decir que tanto Docker Machine en el momento de escribir este artículo están en las fases iniciales de desarrollo y pueden cambiar significativamente antes de lanzar una versión 1.0, ahora Docker Machine está en las version 0.3.0. La combinación de Docker Machine y Docker Swarm en algunos puntos son parecidos a los que se ofrecen en [CoreOS][coreos].

Si has usado [Vagrant][vagrant] te resultará Docker Machine muy similar ya que permite crear máquinas virtuales en diferentes proveedores en una máquina anfitrión con [VirtualBox][virtualbox] hasta [Amazon EC2][amazon-ec2] o [Digital Ocean][digital-ocean], la [lista de controladores soportados](https://docs.docker.com/machine/#drivers) es bastante amplia. Estas máquinas que creamos con Docker Machine están destinadas como único objetivo a albergar contenedores docker usando el sistema operativo [boot2docker][boot2docker].

Para usar Docker Machine debemos [descargar el binario](https://github.com/docker/machine/releases), darle permisos de ejecución y si queremos añadirlo a la variable _PATH_ del sistema.

{{< code file="docker-machine-version.sh" language="bash" options="" >}}

Con los siguientes comandos podemos crear una máquina virtual para los contenedores docker, listar las máquinas virtuales creadas, hacer SSH a ella, ejecutar un contenedor en ella, parala y eliminar una máquina virtual además de obtener la _IP_ asignada.

{{< code file="docker-machine-create.sh" language="bash" options="" >}}

Estableciendo las variables de entorno de la máquina virtual podemos usar el comando docker como si de la máquina anfitrión fuera, todos los comandos de docker que lancemos se ejecutarán contra el contenedor docker de la máquina virtual. En el siguiente caso se ejecuta el contenedor de _busybox_ en la máquina virtual _dev_. Con _\-\-unset_ podemos reiniciar la configuración a la máquina anfitrión.

{{< code file="docker-machine-run.sh" language="bash" options="" >}}

Podemos detener, volver a iniciar, hacer SSH y eliminar la máquina virtual con:

{{< code file="docker-machine-manage.sh" language="bash" options="" >}}
{{< asciinema id="23600" caption="Comandos y uso de Docker Machine en una máquina virtual" >}}

El directorio por defecto donde se guardarán los archivos de las máquinas virtuales es _~/.docker/machine_, si queremos cambiarlo podemos utilizar el parámetro _\-\-storage-path_ en cada uno de los comandos anteriores de la siguiente forma, el orden de los parámetros es importante:

{{< code file="docker-machine-storage-path.sh" language="bash" options="" >}}

En el administrador de VirtualBox veremos que se ha creado la máquina virtual _dev_ además de poder cambiar la configuración de memoria y otros parámetros de la máquina virtual.

{{< image
    gallery="true"
    image1="image:virtualbox.png" optionsthumb1="300x200" title1="Máquina de Docker Machine ne VirtualBox"
    caption="Máquina de Docker Machine en VirtualBox" >}}

Dado que los contenedores se ejecutan en una máquina virtual de VirtualBox y VirtualBox está disponible en Windows y Mac OS además del binario de Docker Machine para estas plataformas podemos usar docker en cualquiera de estos. Aunque no sea de forma nativa como en Linux para un entorno de desarrollo donde las personas trabajan con cualquiera de estos sistemas operativos puede sernos de utilidad.

Como nota final diré que después de crear una máquina virtual las siguientes veces al crear una nueva Docker Machine se me quedaba indefinidamente en el mensaje _Starting VM..._, algún problema con Docker Machine o VirtualBox que en una futura versión podría solucionarse, la única forma de resolverlo que se es reiniciando el ordenador pero seguro que hay alguna mejor.

{{< reference >}}
* [Docker Machine](https://docs.docker.com/machine/)
{{< /reference >}}

{{% /post %}}
