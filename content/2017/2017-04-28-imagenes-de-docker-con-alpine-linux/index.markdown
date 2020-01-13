---
pid: 228
type: "post"
title: "Imágenes de Docker con Alpine Linux"
url: "/2017/04/imagenes-de-docker-con-alpine-linux/"
date: 2017-04-28T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:docker.svg"
tags: ["blog", "planeta-codigo"]
series: ["docker"]
---

{{% post %}}

{{< logotype image1="docker.svg" title1="Docker" width1="200" image2="alpinelinux.svg" title2="Alpine Linux" width2="350" >}}

En el repositorio de imágenes [Docker Hub][docker-hub] de [Docker][docker] hay múltiples versiones de cada software _contenirizado_, alguna de las versiones están etiquetadas con la palabra _alpine_. Las imágenes de Docker etiquetadas con _alpine_ hacen referencia a que usan como base la distribución [Alpine Linux][alpine-linux] y la razón de usar Alpine Linux es que al ser una distribución minimalista basada en [busybox][busybox] y [musl-libc][musl-libc] hace que las imágenes ocupen bastante menos que una imagen equivalente por ejemplo basada en [Ubuntu][ubuntu] o [Debian][debian], seguramente porque no contienen una buena cantidad de cosas innecesarias.

Por ejemplo, la [imagen de Docker que contiene en JDK](https://hub.docker.com/_/openjdk/) de Java basada en Debian ocupa 643 MiB y la imagen de Java basada en Alpine Linux ocupa 101 MiB, una diferencia significativa de casi 500 MiB. Con la capacidad de los discos duros actuales no es tanto por lo que ocupan en disco sino por el tiempo que las imágenes tardan en descargarse desde el repositorio e iniciarse los contenedores como es el caso en un [cluster de contenedores Docker][blogbitix-216].

{{< image
    gallery="true"
    image1="image:imagenes-docker.png" optionsthumb1="300x200" title1="Imágenes de Docker con su tamaño. Ver imágenes openjdk, Ubuntu y Alpine. Linux"
    caption="Imágenes de Docker con su tamaño. Ver imágenes openjdk, Ubuntu y Alpine Linux." >}}

El tiempo de descarga solo se emplea la primera vez que se hace uso de una imagen pero como las imágenes se van actualizando hay que tener en cuenta que en cada nueva versión que se use hay que descargar una nueva imagen, cuanto más pequeñas sean las imágenes menos tiempo se emplea en descargarlas y más rápidamente se iniciarán los contenedores.

La [imagen base de Ubuntu](https://hub.docker.com/_/ubuntu/) con la que crear nuevas ocupa 117 MiB y la [imagen base de Alpine Linux](https://hub.docker.com/_/alpine/) únicamente 3.98 MiB. Si creamos imágenes propias basadas en Alpine Linux deberemos saber que esta distribución usa su propio gestor de paquetes _apk_ y su propio [repositorio de paquetes](https://pkgs.alpinelinux.org/packages). Para [crear una imagen de Docker][blogbitix-51] hay que usar los archivos _Dockerfile_ que contienen las instrucciones para construir la imagen del contenedor.

{{% /post %}}
