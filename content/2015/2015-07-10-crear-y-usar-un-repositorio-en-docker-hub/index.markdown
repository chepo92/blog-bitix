---
pid: 88
type: "post"
title: "Crear y usar un repositorio en Docker Hub"
url: "/2015/07/crear-y-usar-un-repositorio-en-docker-hub/"
date: 2015-07-10T20:00:00+02:00
updated: 2015-07-11T01:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "¿Por qué se habla tanto de Docker y despierta tanto interes si la tecnología ya existía desde hace tiempo tanto en otros sistemas operativos como en Linux? Uno de los éxitos que ha contribuido a ellos es Docker Hub, un repositorio de imágenes en el que cualquiera puede contribuir con las suyas. Esto hace que pueda encontrarse cualquier herramienta de las populares y empezar a usarlas en muy pocos minutos."
---

{{% post %}}

{{< logotype image="docker.svg" title="Docker" width="200" >}}

Probablemente uno de los éxitos de Docker más que la propia tecnología de contenedores sea [Docker Hub][docker-hub] que permite a los usuarios compartir las imágenes construidas, se podría decir que es el [GitHub][github] de los contenedores docker y quizá por ello el paralelismo en el nombre entre ambos. Docker Hub permite subir imágenes o usar las imágenes oficiales de [postgresql][postgresql], [redis][redis], [mysql][mysql], [ubuntu][ubuntu], [rabbitmq][rabbitmq], ... y otra [multitud de proyectos](https://registry.hub.docker.com/).

El [archivo Dockerfile con el que construimos una imagen][blogbitix-51] podemos hospedarlo en un repositorio de GitHub y que Docker Hub lo obtenga para construir la imagen. Docker Hub ofrece repositorios públicos en los que colocar las imágenes que cualquier otro usuario puede acceder y usar o repositorios privados con cierto coste según el número de repositorios privados, el primer repositorio privado es gratuito.

### Otros artículos sobre Docker

Este artículo forma parte de otros artículos sobre Docker que ya he escrito si quieres empezar por el principio puedes leer primero la [Introducción y características sobre Docker][blogbitix-49], el [Inicio básico de Docker][blogbitix-50], [Como crear una imagen con un Dockerfile][blogbitix-51] o [Como usar docker con Docker Compose][blogbitix-87]. En siguientes artículos hablaré de otras herramientas como Docker Machine y Docker Swarm.

A continuación explicaré como crear un repositorio en Docker Hub que obtenga los Dockerfile de un repositorio de GitHub y construya las imágenes de los Dockerfile de forma automática cuando haya cambios en los archivos dockerfile de GitHub.

### Crear una cuenta en Docker Hub

Primero necesitaremos crear una cuenta en Docker Hub. El nombre de usuario determinará el nombre de las imágenes, siendo mi nombre de usuario _picodotdev_ al usar las imágenes debería usar:

{{< code file="docker-run.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:dockerhub.png" optionsthumb1="300x200" title1="Docker Hub"
    caption="Docker Hub" >}}

### Subir el archivo Dockerfile a un repositorio de GitHub

Posteriormente deberemos crear un repositorio en GitHub para alojar los archivos Dockerfile que usará Docker Hub para construir las imágenes de Docker. En el ejemplo usaré el [repositorio blog-ejemplos](https://github.com/picodotdev/blog-ejemplos/tree/master/DockerHub) y dentro de este los dockerfiles los he [ubicado dentro de una carpeta](https://github.com/picodotdev/blog-ejemplos/tree/master/DockerHub/postgres/9.4).

Una vez que tenemos el repositorio de GitHub subimos un [Dockerfile para el ejemplo](https://github.com/picodotdev/blog-ejemplos/blob/master/DockerHub/postgres/9.4/Dockerfile), usaré el proporcionado de forma [oficial de posgresql](https://registry.hub.docker.com/_/postgres/), y creamos en Docker Hub una _build_ automatizada, se nos solicitará permisos en la cuenta de GitHub para que Docker Hub pueda acceder a nuestros repositorios.

### Crear el repositorio en DockerHub y la _build_ automática

En la creación del repositorio en Docker Hub con _build_ automatizada seleccionamos el repositorio de GitHub que contiene los repositorios y el archivo DockerFile para el que queremos hacer la build automatizada. Le asignamos un nombre al repositorio y un _tag_ a la _build_ que podremos usar al hacer el _pull_ de la imagen.

{{< image
    gallery="true"
    image1="image:dockerhub-automated-build.png" optionsthumb1="300x200" title1="Docker Hub"
    caption="Build automatizada de Docker Hub" >}}

Docker Hub se encargará de obtener el archivo Dockerfile y construir la imagen, en el proceso podremos ver las trazas generadas.

{{< reference >}}
* [Get started with Docker Hub](https://docs.docker.com/userguide/dockerrepos/)
* [The Dockerfile and Automated Builds](http://docs.docker.com/docker-hub/builds/#the-dockerfile-and-automated-builds)
{{< /reference >}}

{{% /post %}}
