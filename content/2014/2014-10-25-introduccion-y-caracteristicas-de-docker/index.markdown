---
pid: 49
type: "post"
title: "Introducción y características de Docker"
url: "/2014/10/introduccion-y-caracteristicas-de-docker/"
date: 2014-10-25T10:52:34+02:00
updated: 2017-05-02T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "Los contenedores no son una tecnología nueva pero Docker ha reunido las características necesarias para hacerla sencilla y popular en Linux. Suponen un cambio en la infraestructura de las aplicaciones con algunas ventajas sobre la virtualización y la instalación de los servicios directamente en el sistema."
---

{{% post %}}

{{< logotype image="docker.svg" title="Docker" width="200" >}}

[Docker][docker] es una de las herramientas de la que se está hablando mucho, esto es así ya que tiene varios aspectos interesantes que [cambian la forma de desarrollar aplicaciones](https://www.javaworld.com/article/2685223/java-app-dev/four-ways-docker-fundamentally-changes-application-development.html). Docker es una forma de ejecutar procesos de forma aislada pero también se compone de herramientas para construir imágenes y un repositorio para compartirlas.

Al contrario de la virtualización Docker no emula o virtualiza una máquina y su sistema operativo con lo que los procesos son mucho más ligeros y hace que el hardware pueda ser aprovechado más al poder aumentar la densidad de los servicios en una misma máquina. Los contenedores y servicios incluidos en ellos inician muy rápidamente, en pocos segundos. Además, no es necesario el sistema de archivos completo del sistema operativo invitado con lo que docker usa una fracción de espacio de almacenamiento necesario en la virtualización.

La tecnología de contenedores no es nueva y también está disponible en otros sistemas operativos como [OpenVZ][openvz] también en Linux, [FreeBSD Jails](http://www.freebsd.org/doc/handbook/jails.html) o los [contenedores de Solaris](https://www.oracle.com/technetwork/server-storage/solaris/containers-169727.html).

{{< image
    gallery="true"
    image1="image:virtual-machines.png" optionsthumb1="300x200" title1="Máquinas virtuales"
    image2="image:docker.png" optionsthumb2="300x200" title2="Docker" >}}

Docker tiene varias características interesantes. Es ligero ya que no hay virtualización aprovechándose mejor el hardware y únicamente necesitando el sistema de archivos mínimo para que funcionen los servicios. Los contenedores son autosuficientes (aunque pueden depender de otros contenedores, por ejemplo, un wordpress que necesita una base de datos mysql) no necesitando nada más que la imagen del contenedor para que funcionen los servicios que ofrece. Las imágenes de docker son portables entre diferentes plataformas el único requisito es que en el sistema huésped esté disponible docker. Es seguro, pudiendo hacer que los contenedores se comuniquen por un túnel solo disponible para ellos, los contenedores están aislados en el sistema mediante namespaces y control groups.

Para los desarrolladores tiene las siguientes ventajas:

* Podemos disponer de un entorno de desarrollo (devbox) o servicio en varios minutos/horas en vez de algún día. Esto es así porque la configuración y los servicios necesarios están automatizados en la construcción de las imágenes de los contenedores mediante [Dockerfiles](https://docs.docker.com/reference/builder/).
* Al estar los servicios en contenedores no hace falta instalarlos en la máquina en la que son alojados, de forma que podemos disponer de los servicios y después eliminarlos de forma sencilla sin "ensuciar" el sistema huésped.
* Nos permite tener versiones más parecidas o iguales a las usadas en producción. Por ejemplo, en Arch Linux nos permite tener un mysql de la distribución [Ubuntu][ubuntu] usando la misma versión.

El [registro de contenedores de Docker](https://registry.hub.docker.com/) es una forma colaborativa de ofrecer imágenes. Hay disponibles multitud de contenedores con los servicios más populares: [MySql][mysql], [PostgreSQL][postgresql], [Redis][redis], [Nginx][nginx], [WordPress][wordpress], ...

Para los administradores de sistemas tiene las siguientes ventajas:

* Pueden proporcionar entornos similares o iguales a los entornos de pruebas, QA o producción independientemente de la distribución que se use.
* Es posible desplegar un contenedor en cualquier infraestructura Linux.
* La creación de los contenedores puede ponerse bajo un sistema de control de versiones.

En la siguiente presentación muy completa están ampliados muchas de sus posibilidades y funcionalidades.

{< speakerdeck id="c02e6030ee52013165c72a37516b560d" >}}

Una vez conocidos los aspectos básicos y en que se diferencia docker de la virtualización así como el caso de uso de por ejemplo un devbox o disponer de entornos similares a los de producción de una aplicación, en el siguiente artículo comentaré [cómo instalar docker, cómo empezar a usarlo, cómo obtener imágenes de servicios y pararlos y administrarlos][blogbitix-50]. En la siguiente [lista de enlaces sobre Docker](http://www.nkode.io/2014/08/24/valuable-docker-links.html) se puede encontrar mucha información reunida dispersa en la red, desde introducciones, opiniones, como usarlo, como empaquetar las aplicaciones, como monitorizar o como usarlo en microservicios.

{{< amazon
    linkids="9d344246cd59cd65a952305379c2556a"
    asins="1633430235" >}}

{{< reference >}}
* [Inicio básico de Docker][blogbitix-50]
* [Cómo crear una imagen para Docker usando un Dockerfile][blogbitix-51]
* [Docker][docker]
* [Introducción a Ansible][blogbitix-52]
* [Integración entre Ansible y Docker][blogbitix-53]
* [Introducción a Bitnami][blogbitix-54]
* [Seguridad Docker](https://docs.docker.com/articles/security/)
* [Four ways Docker fundamentally changes application development](https://www.javaworld.com/article/2685223/java-app-dev/four-ways-docker-fundamentally-changes-application-development.html)
* [Docker, qué es y sus principales características](https://openwebinars.net/docker-que-es-sus-principales-caracteristicas/)
{{< /reference >}}

{{% /post %}}
