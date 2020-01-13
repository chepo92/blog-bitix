---
pid: 403
type: "post"
title: "Crear de forma sencilla y rápida máquinas virtuales de VirtualBox con Vagrant"
url: "/2019/05/crear-de-forma-sencilla-y-rapida-maquinas-virtuales-de-virtualbox-con-vagrant/"
date: 2019-05-10T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:vagrant.svg"
tags: ["planeta-codigo", "programacion", "software"]
series: ["hashicorp"]
---

{{% post %}}

{{< logotype image1="vagrant.svg" title1="Vagrant" width1="200" image2="hashicorp.svg" title2="HashiCorp" width2="200" >}}

[VirtualBox][virtualbox] es una de las herramientas que permiten virtualizar un sistema operativo completo y sus aplicaciones dentro de otra máquina. Como es un sistema operativo completo requiere que el sistema que la alberga tenga RAM suficiente para sí mismo y RAM suficiente para el sistema virtualizado, se puede configurar la cantidad de RAM y almacenamiento persistente de la máquina virtual. En el proceso de virtualización se pierde algo de rendimiento por la sobrecarga que añade virtualizar un sistema operativo completo, los procesadores modernos ofrecen soporte para que el rendimiento sea lo mayor posible pero no es igual a ejecutar el sistema de forma nativa en el sistema, sobre todo en el aspecto de interfaces gráficas y aceleración 2D y 3D.

La virtualización es una buena forma de probar una distribución [GNU][gnu]/[Linux][linux] para evaluarla o ejecutar [Windows][windows] en un Linux. Hay otras herramientas de virtualización como [QEMU][qemu] y [KVM][kvm] pero la virtud de VirtualBox es que es muy sencilla y está disponible para Windows, GNU/Linux y [macOS][macos].

{{< image
    gallery="true"
    image1="image:virtualbox.png" optionsthumb1="300x200" title1="VirtualBox"
    caption="VirtualBox" >}}

Para tener una máquina virtual el proceso se puede hacer desde el principio desde el medio de instalación ofrecido siguiendo los de su instalador. Pero para hacer alguna prueba de desarrollo y si se necesitan virtualizar varias máquinas el proceso manual es incómodo además de repetitivo. [Vagrant][vagrant] es una de las herramientas ofrecidas por [HashiCorp][hashicorp] que permite automatizar la creación y aprovisionamiento de máquinas virtuales en VirtualBox mediante la especificación de un archivo de configuración. Permite replicar entornos y crear un cluster de máquinas que resulta muy útil al desarrollar o probar cierto software.

En este ejemplo se configura una máquina virtual usando como sistema operativo base Ubuntu 18.04, y se aprovisiona configurando ella [Docker][docker]. El aprovisionamiento se realiza mediante una serie de comandos y archivos que se añaden del _host_ al sistema virtualizado tal como se hace en un sistema Ubuntu desde su estado de instalación inicial. Entre las opciones de configuración permitidas están el nombre de la máquina virtual, su sistema operativo, la cantidad de memoria que se le asigna, propiedades de red, asignar direcciones IP estáticas, ...

{{< code file="Vagrantfile" language="java" options="" >}}

Se puede crear un archivo inicia con comentarios para empezar a configurar la máquina virtual.

{{< code file="vagrant-init.sh" language="bash" options="" >}}

Definido el archivo de configuración para Vagrant se inician las máquina virtual con un comando. Y se detienen con otro. Si hay necesidad en el mismo archivo se pueden definir varias máquinas virtuales.

{{< code file="vagrant-up.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:virtualbox-vagrant-vm.png" optionsthumb1="300x200" title1="VirtualBox Vagrant VM"
    caption="VirtualBox Vagrant VM" >}}

Una vez iniciada la máquina virtual Vagrant configura SSH para tener acceso a su terminal, hay que especificar el nombre de la máquina virtual.

{{< code file="vagrant-ssh.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:vagrant-ssh.png" optionsthumb1="300x200" title1="Vagrant SSH"
    caption="Vagrant SSH" >}}

La máquina en el ejemplo ha sido aprovisionada con Docker mediante un _script_ con los comandos para instalarlo y un archivo de [Docker Compose][docker-compose] con un servicio del servidor web [nginx][nginx]. Desde la terminal de la máquina virtual se inicia el servicio con Docker que queda accesible tanto desde la pripia máquina virtual como desde el _host_ indicando la dirección IP que se le ha asignado.

{{< image
    gallery="true"
    image1="image:docker-compose-up.png" optionsthumb1="300x200" title1="docker-compose up y curl (desde la MV)"
    image2="image:curl.png" optionsthumb2="300x200" title2="curl (desde el host)"
    image3="image:firefox.png" optionsthumb3="300x200" title3="Página devuelta por nginx"
    caption="docker-compose up y curl desde la MV y desde el host" >}}

Vagrant tiene un [repositorio de imágenes](https://app.vagrantup.com/boxes/search) entre las que elegir para el sistema, están las más populares como [Ubuntu][ubuntu], [Fedora][fedora], [Debian][debian] y [CentOS][centos]. Es un repositorio en donde los usuarios pueden subir sus propias imágenes aunque por defecto es mejor usar las oficiales de cada sistema.

Posee varias [páginas de documentación](https://www.vagrantup.com/docs/index.html) bastante completas donde conocer los todos los detalles de uso de Vagrant.

* [Vagrantfile](https://www.vagrantup.com/docs/vagrantfile/)
* [Commands](https://www.vagrantup.com/docs/cli/)
* [Networking](https://www.vagrantup.com/docs/networking/)
* [Provisioning](https://www.vagrantup.com/docs/provisioning/)
* [Multi-machine](https://www.vagrantup.com/docs/multi-machine/)
* [Providers](https://www.vagrantup.com/docs/providers/)
* [Synced folders](https://www.vagrantup.com/docs/synced-folders/)

{{% sourcecode git="blog-ejemplos/tree/master/Vagrant" command="vagrant up" %}}

{{% /post %}}
