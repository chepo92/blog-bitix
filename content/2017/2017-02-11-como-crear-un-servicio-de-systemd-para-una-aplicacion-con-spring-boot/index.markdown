---
pid: 209
type: "post"
title: "Cómo crear un servicio de systemd para una aplicación con Spring Boot"
url: "/2017/02/como-crear-un-servicio-de-systemd-para-una-aplicacion-con-spring-boot/"
date: 2017-02-11T10:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:linux.svg"
tags: ["gnu-linux", "java", "planeta-codigo"]
summary: "La mayoría de distribuciones Linux ya usan systemd como gestor y supervisor de los servicios del sistema.  Creando un descriptor podremos gestionar un servicio propio con los mismos comandos de systemd que usamos para cualquier otro servicio del sistema."
---

{{% post %}}

{{< logotype image1="linux.svg" image2="java.svg" >}}

Habiendo creado una aplicación o microservicio, por ejemplo con [Spring Boot][spring-boot], necesitaremos que se inicie con el sistema y una forma de gestionarlo para detenerlo, reiniciarlo y que se reinicie en caso de salida abrupta.

[systemd][systemd] es el gestor de servicios que han adoptado la mayoría de distribuciones importantes como [Debian][debian], [CentOS][centos], [RHEL][rhel], [openSUSE][opensuse], incluso [Ubuntu][ubuntu] después de abandonar su propio gestor de servicios [Upstart][upstart]. Podemos usar systemd para que gestione como servicio una aplicación propia. Para ello deberemos crear un archivo _unit_ que describa el servicio y sus dependencias con otros servicios para que se inicie correctamente, él y sus dependencias.

Los servicios se definen en archivos de texto denominados _unit_ que tienen un formato similar a los archivos _.desktop_ que a su vez están inspirados en los archivos _.ini_ de Windows. En la [documentación de los archivos _unit_ de systemd](http://www.freedesktop.org/software/systemd/man/systemd.unit.html) se detalla con amplitud los archivos _unit_ de systemd, tienen tres secciones:

* [Unit]: contiene información genérica independiente del tipo de servicio como descripción, requerimientos, deseos o orden de inicio.
* [Service]: define el tipo de servicio, los comandos de preinicio, inicio, postinicio, parada, postparada, condiciones reinicio y más parámetros comentados en la [documentación de los sevicios de systemd](http://www.freedesktop.org/software/systemd/man/systemd.service.html).
* [Install]: esta sección es usada al habilitar o deshabilitar un servicio en el sistema con el comando `systemctl`, pudiendo por ejemplo que se inicie este servicio cuando otro se inicie siendo otra forma de declarar dependencias. De este modo se puede indicar que un servicio tiene otros como dependencia pero también se puede indicar que un servicio se inicie cuando otro lo haga.

Usando la aplicación del [Ejemplo de API REST en Java con JAX-RS y Spring Boot][blogbitix-178], crearé un archivo _unit_ de systemd para que se inicie con el sistema y se reinicie en caso de fallo. Primeramente deberemos crear los archivos que definen el servicio para systemd y sus dependencias si las tienen. En los siguientes ejemplos _spring-boot-jaxrs.service_ es una aplicación de [Spring Boot][spring-boot] con una interfaz REST que simplemente devuelve el mensaje indicado por parámetro con la fecha en la dirección _http\://localhost:8080/message?message=Hola_. _spring-boot-jaxrs-postgres.service_ es el mismo servicio pero que tiene una dependencia sobre un contenedor de [Docker][docker] con una base [PostgreSQL][postgresql], aunque la aplicación Spring Boot no hace uso de la base de datos PostgreSQL sirve para observar que si se inicia el servicio de la aplicación Java también se inicia el servicio de la base de datos si no estuviera ya en ejecución. _postgres.service_ es el servicio de la base de datos PostgreSQL en un contenedor de Docker y que tiene como dependencia el servicio de Docker.

{{< code file="spring-boot-jaxrs.service" language="systemd" options="" >}}
{{< code file="spring-boot-jaxrs-postgres.service" language="systemd" options="" >}}
{{< code file="postgres.service" language="systemd" options="" >}}

{{< asciinema id="102785" caption="Servicio de systemd para una aplicación con Spring Boot" >}}

La instalación de la aplicación y de los servicios de systemd en el sistema se realizan copiando archivos, cambiando algunos permisos y usando los comandos de systemd para gestionar los servicios. Los mensajes de salida que emite el servicio se obtienen con el comando `journalctl -u spring-boot-jaxrs.service`.

Los archivos _unit_ propios deben ser ubicados en el directorio _/etc/systemd/system/_, siendo el directorio _/usr/lib/systemd/system/_ donde se ubican los instalados por los paquetes del sistema. Iniciado el servicio con el comando `sudo systemctl start spring-boot-jaxrs.service`, si queremos habilitarlo con el inicio del sistema usamos el comando `sudo systemctl enable spring-boot-jaxrs.service`. Para ver el estado del servicio usamos el comando `sudo systemctl status spring-boot-jaxrs.service`.

{{< code file="install.sh" language="bash" options="" >}}
{{< code file="manage.sh" language="bash" options="" >}}

En los enlaces de referencia hay documentación más detallada tanto para gestionar los servicios con systemd como también documentación de sus archivos _unit_.

{{< sourcecode git="blog-ejemplos/tree/master/SpringBootJaxrs" command="sudo systemctl start spring-boot-jaxrs.service" >}}

{{< reference >}}
* [Understanding Systemd Units and Unit Files](https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files)
* [systemd unit](http://www.freedesktop.org/software/systemd/man/systemd.unit.html)
* [systemd service](http://www.freedesktop.org/software/systemd/man/systemd.service.html)
* [Docker host integration](https://docs.docker.com/engine/admin/host_integration/)
* [Installing Spring Boot applications](https://docs.spring.io/spring-boot/docs/1.5.1.RELEASE/reference/htmlsingle/#deployment-install)
* [Systemd (Arch Linux Wiki)](https://wiki.archlinux.org/index.php/Systemd)
{{< /reference >}}
