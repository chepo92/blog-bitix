---
pid: 91
type: "post"
title: "Cambiar la ruta raíz del entorno de Docker"
url: "/2015/07/cambiar-la-ruta-raiz-del-entorno-de-docker/"
date: 2015-07-24T20:00:00+02:00
updated: 2015-11-14T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "Cambiando la ruta raíz del entorno de ejecución de docker, dónde guarda las imágenes de los contenedores, los datos de los contenedores y otros metadatos, podemos almacenar esta información en un disco duro externo o memoria USB."
---

{{% post %}}

{{< logotype image="docker.svg" title="Docker" width="200" >}}

Por defecto el directorio donde se guardan las imágenes y los contenedores junto con otros metadatos de [Docker][docker] es _/var/lib/docker_. En mi caso hace un tiempo me compre un [disco de estado sólido Samsung 840 EVO de 250 GiB][blogbitix-18] y comenté en el artículo del anterior enlace. Aunque probablemente un disco SSD sea suficientemente fiable como para que antes de que falle cambiémos de ordenador porque ya es antiguo, yo trato de evitar hacer muchas escrituras al disco. Al trabajar con Docker ya sea descargando imágenes, [construyendo imágenes propias con archivos Dockerfile][blogbitix-51] y al arrancar contenedores cuyos procesos escriben en disco prefiero externalizar esas escrituras en una unidad USB ya sea un pendrive o un disco duro. En este artículo comentaré como modificar Docker para que las imágenes y los contenedores estén almacenados en una memoria USB o en otra localización de la por defecto.

En Arch Linux el proceso de docker se arranca con un servicio de systemd:

{{< code file="docker-start.sh" language="bash" options="" >}}

En la definición del servicio de docker se establecen los parámetros de inicio del demonio de docker y deberemos cambiarlo para cambiar la localización de las imágenes y contenedores. En la información de ayuda del comando de docker podemos ver que si queremos cambiar la localización por defecto de las imágenes y contenedores de docker debemos emplear la opción _-g "/var/lib/docker"_.

{{< code file="docker-help.sh" language="bash" options="" >}}

En Arch Linux el servicio de systemd de docker se guarda en _/usr/lib/systemd/system/docker.service_. Modificando el parámetro _ExecStart_ de la sección _[Service]_ para añadir el parámetro _-g_ nos quedaría algo como:

{{< code file="docker.service" language="systemd" options="" >}}

Iniciando ahora el servicio de Docker veremos que en el directorio que hayamos elegido se crean los metadatos y si hacemos un _pull_ de una imagen se guardará en esta localización.

{{< image
    gallery="true"
    image1="image:docker-root.png" optionsthumb1="300x200" title1="Directorio raíz de docker"
    caption="Directorio raíz de docker" >}}

{{% warning %}}

Cada vez que se actualice el paquete de docker el archivo del servicio de systemd se sobreescribirá y perderemos la configuración, de modo que en cada actualización de docker deberemos realizar de nuevo la modificación.
{{% /warning %}}

Este artículo es uno de otros que he publicado, en otros artículos he escrito sobre otras cosas relacionadas con docker.

{{% /post %}}
