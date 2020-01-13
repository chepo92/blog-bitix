---
pid: 22
type: "post"
title: "Anexo a la guía de instalación y del principiante de Arch Linux"
url: "/2014/05/anexo-a-la-guia-de-instalacion-y-del-principiante-de-arch-linux/"
date: 2014-05-02T19:09:56+02:00
updated: 2015-05-25T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux", "planeta-codigo", "software", "software-libre"]
summary: "Arch Linux es una distribución que deja al usuario decidir en gran medida los componentes que quiere usar. Desde el sistema de arranque, el entorno de escritorio hasta los programas. Para ello no proporciona un instalador ni en modo texto ni con interfaz gráfica que guíe al usuario en diferentes pasos en la instalación de la distribución, en vez de eso proporciona una guía con la información relevante que el usuario necesita conocer para el mismo mediante comandos instale y configure el sistema con los componentes que desee. Este anexo complementa y reune los comandos que sigo para instalar Arch Linux desde la imagen de instalación hasta el entorno de escritorio GNOME."
note: "<strong>Nota</strong>: Si quieres [instalar Arch Linux de forma desatendida, automatizada y personalizable](https://picodotdev.github.io/blog-bitix/2017/01/script-de-instalacion-de-arch-linux-desatendido-automatizado-y-personalizable/) te recomiendo usar un _script_ en bash que he desarrollado. La instalación que realiza el _script_ no es distinta de la que harías tu introduciendo los comandos uno detrás de otro pero si mucho más fácil, rápida y probada."
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" >}}

Antes de migrar a una distribución como [Arch Linux](https://www.archlinux.org/) es recomendable ver si esta distribución GNU/Linux es la adecuada para nosotros en función de su [filosofía (The Arch Way)](https://wiki.archlinux.org/index.php/The_Arch_Way), sus [principales características](https://wiki.archlinux.org/index.php/Arch_Linux) y las [preguntas frecuentes](https://wiki.archlinux.org/index.php/FAQ). Arch Linux es una distribución orientada a personas que no les importa dedicar un tiempo a aprender como instalarla y posteriormente mantenerla actualizada, esto tampoco debe asustarnos, la [wiki de arch](https://wiki.archlinux.org/) es de las mejores fuentes de información que hay para cualquier cosa que necesitemos. Si la wiki no es suficiente ayuda en los [foros](https://bbs.archlinux.org/) muy posiblemente encontraremos la solución. Pero para alguien que vaya a [migrar de Windows o Mac a Linux](https://elblogdepicodev.blogspot.com.es/2010/03/de-windows-arch-linux.html) creo que es más recomendable empezar con alguna distribución que lo pone más fácil para empezar con unos pocos clics, las más conocidas son [Ubuntu](http://www.ubuntu.com/), [Fedora](https://fedoraproject.org/), [Debian](http://www.debian.org/), [openSUSE][opensuse], o al menos primeramente probarla en un máquina virtual como [VirtualBox](https://www.virtualbox.org/).

Dado que Arch Linux es una distribución [«rolling release»](https://en.wikipedia.org/wiki/Rolling_release) hacer una guía de instalación detallada para ella haría que se quedase obsoleta en ciertos aparatados al cabo de un tiempo. Por ello y aunque a continuación escribiré una guía de instalación es muy recomendable leer la [guía oficial de Arch Linux](https://wiki.archlinux.org/index.php/Beginners%27_Guide) y la [guía de principiante](https://wiki.archlinux.org/index.php/Beginners%27_Guide) más detallada y en cualquier caso entendamos las acciones que estamos haciendo con cada comando.

Arch Linux no tiene un asistente de instalación y la misma se hace desde la terminal introduciendo comandos, además no hay una guía oficial única que sirva para todos los sistemas ya que algunas cosas cambian dependiendo de las características de nuestro sistema o preferencias, deberemos dedicar algo de tiempo a leer las guías oficiales y alguna otra guía en alguna bitácora como esta, quizá también alguna sección de la wiki. A cambio de este tiempo tendremos un sistema tal y como nosotros queremos y no como los desarrolladores del instalador quisieron. Una vez sabemos que pasos hay que realizar y que comandos hay que introducir y en que orden la instalación no es complicada, lo difícil está en que comandos son dependiendo de nuestro sistema, si tiene BIOS o EFI, si tiene una gráfica AMD, Intel o NVIDIA, si tiene un disco mecánico o SSD, y de nuestras preferencias si queremos una partición swap, el formato de las particiones (ext4, btrfs, ...) y tamaño para cada una.

A pesar de que la guía oficial de Arch Linux está muy bien hay que leer varias páginas de la wiki y hay algunas cosas importantes que hay que tener en cuenta. Lo que aportará esta guía sobre la oficial son esos pequeños detalles a tener en cuenta y mi experiencia con la instalación en mi ordenador.

## 1. Instalación base

Sin más, comencemos con la guía. Lo primero que deberemos hacer es [descargar el medio de instalación](https://www.archlinux.org/download/) de algún espejo de la red. Los medios con la coletilla -dual nos servirán tanto para sistemas de x86 (32 bits) como para sistemas x86_64 (64 bits). Una vez descargado deberemos grabarlo en un CD o más recomendable en una memoria USB.

Para grabarlo en una memoria USB deberemos usar el comando dd reemplazando /dev/sdx por el dispositivo de la memoria USB en la que queramos grabar el medio cosa que en linux podemos conocer usando el comando lsblk:

{{< code file="script-0.sh" language="bash" options="" >}}

Una vez disponemos del CD o memoria USB deberemos iniciar el sistema con él. La forma de hacerlo cambiará según la marca de nuestro ordenador pero normalmente es usando alguna tecla de entre ESC, F2, F8, F10, F10, en el caso de mi Sony Vaio es usando la tecla ASSIST y con el sistema apagado.

{{< image
    gallery="true"
    image1="image:instalacion-arch-linux.png" optionsthumb1="300x200" title1="Menú instalación Arch Linux"
    image2="image:instalacion-arch-linux-prompt.png" optionsthumb2="300x200" title2="Inicio instalación Arch Linux" >}}

Una vez estemos en el prompt inicial de la instalación deberemos cargar el mapa según nuestro teclado, para un teclado español usaremos normalmente:

{{< code file="script-1.sh" language="bash" options="" >}}

Modificamos también el archivo locale.gen y descomentamos el dato es_ES.UTF-8 UTF-8, finalmente lo exportamos para el shell:

{{< code file="script-2.sh" language="bash" options="" >}}

### 1.1 Particionar el disco

El siguiente paso es particionar el disco duro y antes de hacerlo deberemos asegurarnos de que hemos hecho una copia de seguridad de los datos ya que en el siguiente paso se perderá el contenido del disco duro o SSD. Usaremos el siguiente comando para hacer el [particionado usando GPT](https://wiki.archlinux.org/index.php/GUID_Partition_Table). En función de si nuestro sistema tiene BIOS o EFI las particiones son distintas, si es un ordenador de unos dos años o menos o venía con Windows 8 preinstalador probablemente tenga EFI.

{{< code file="script-3.sh" language="bash" options="" >}}

#### 1.1.1 Para un sistema con BIOS

En un sistema BIOS usando GPT el esquema de particiones será el siguiente:

{{< code file="script-42.txt" language="plaintext" options="" >}}

#### 1.1.2 Para un sistema con EFI

En un sistema EFI las particiones deberán ser las siguientes:

{{< code file="script-43.txt" language="plaintext" options="" >}}

Si tenemos un sistema con 8 GiB o más de memoria probablemente podamos prescindir de la partición de swap. Sino podemos crear una tal que:

{{< code file="script-44.txt" language="plaintext" options="" >}}

### 1.2 Formatear las particiones

Una vez tenemos las particiones creados deberemos formatearlas, sustituimos sdaX por lo que corresponda según el orden en que hemos creado las particiones:

{{< code file="script-4.sh" language="bash" options="" >}}

Y si tenemos partición de swap:

{{< code file="script-5.sh" language="bash" options="" >}}

### 1.3 Montar las particiones

Lo siguiente que haremos es montar las particiones para empezar a usarlas, primero la partición root (/), que en esta guía es sda2 y luego la partición boot (/boot):

{{< code file="script-6.sh" language="bash" options="" >}}

Si nuestro sistema tiene EFI hacemos:

{{< code file="script-7.sh" language="bash" options="" >}}

Si tenemos un disco SSD montamos las particiones usando las opciones de montaje adecuados para que se use TRIM:

{{< code file="script-8.sh" language="bash" options="" >}}

### 1.4 Establecer el mirror

Debemos seleccionar un espejo del que se descargarán los paquetes del sistema base, modificamos el archivo /etc/pacman.d/mirrrorlist y ponemos el primero el que deseemos, yo suelo usar:

Server = http\://mirrors.kernel.org/archlinux/$repo/os/$arch

{{< code file="script-9.sh" language="bash" options="" >}}

### 1.5 Instalar paquetes del sistema base

Lo siguiente será instalar los archivos del sistema base el siguiente comando que descargará del espejo de paquetes que hayamos elegido los paquetes del sistema base:

{{< code file="script-10.sh" language="bash" options="" >}}

### 1.6 Generar de fstab

Generamos el archivo fstab que contendrá las características de nuestras particiones y opciones de montaje:

{{< code file="script-11.sh" language="bash" options="" >}}

Si usamos un disco SSD revisaremos el archivo asegurándonos que contiene las opciones noatime y discard.

### 1.7 Chroot y configuración de sistema base

Hacemos un chroot para cambiar el directorio root que estamos usando para configurar nuestro sistema.

{{< code file="script-12.sh" language="bash" options="" >}}

Editamos /etc/locale.gen, lo generamos y exportamos las variables:

{{< code file="script-13.sh" language="bash" options="" >}}

Editamos el archivo /etc/vconsole.conf para cambiar el mapa de teclas de las terminales TTY:

{{< code file="script-14.sh" language="bash" options="" >}}

Introducimos el siguiente contenido:

{{< code file="script-15.txt" language="plaintext" options="" >}}

### 1.8 Establecer la zona horaria

Establecemos la zona horaria de nuestro sistema:

{{< code file="script-16.sh" language="bash" options="" >}}

### 1.9 Modificar el nombre de nuesta máquina

{{< code file="script-17.sh" language="bash" options="" >}}

### 1.10 Instalar el gestor de redes

NetworkManager puede servirnos, lo instalamos con el gestor de paquetes de arch pacman y activamos el servicio:

{{< code file="script-18.sh" language="bash" options="" >}}

### 1.11 Cambiar la contraseña de root

{{< code file="script-19.sh" language="bash" options="" >}}

### 1.12 Instalar el gestor de arranque

Este es el punto más delicado y que más problemas puede dar, ya que si no lo hacemos bien probablemente nuestro sistema no arrancará y por desgracia está al final de todo el proceso.

Para un sistema con BIOS:

{{< code file="script-20.sh" language="bash" options="" >}}

Para un sistema con EFI:

En mi equipo que es un Sony Vaio SVE con EFI aún no he conseguido que GRUB me arranque correctamente (al inicial parece que se queda con la pantalla en negro y aparentemente bloqueado aunque puedo reiniciarlo con ctrl-alt-supr) y he tenido que usar [rEFInd](https://wiki.archlinux.org/index.php/REFInd). Aún así también tengo instalado Grub que iniciandolo a través de rEFInd si funciona bien.

{{< code file="script-21.sh" language="bash" options="" >}}

Posteriormente instalo rEFInd:

{{< code file="script-22.sh" language="bash" options="" >}}

Edito el archivo /boot/FI/refind/refind.conf modificando el timeout y la opción seleccionada por defecto:

{{< code file="script-23.txt" language="plaintext" options="" >}}

También debemos modificar el archivo /boot/refind_linux.conf

{{< code file="script-24.sh" language="bash" options="" >}}

En el archivo sustituiremos los PARTUUID por los que correspondan en nuestro sistema, con el comando blkid los habremos añadido al final del archivo, el contenido debe quedarnos algo como:

{{< code file="script-25.txt" language="plaintext" options="" >}}

Además, con rEFInd hemos de crear el gestor de arranque con el comando efobootmgr. Pero en mi caso para que funcione primero he de borrar todos los que ya existen sino parece que en mi caso se recrea y usa el gestor de arranque EFI de Windows y al inicial el sistema me sale el mensaje «Operating System Not Found», podemos ver los gestores de arranque con:

{{< code file="script-26.sh" language="bash" options="" >}}

Los borramos con el siguiente comando, donde xxxx se corresponde con el número de gestor de arranque:

{{< code file="script-27.sh" language="bash" options="" >}}

Finalmente, creamos el gestor de arranque para rEFInd:

{{< code file="script-28.sh" language="bash" options="" >}}

### 1.13 Finalizar la instalación

Finalmente, salimos del entorno enjaulado, desmontamos las particiones y reiniciamos el sistema:

{{< code file="script-29.sh" language="bash" options="" >}}

## 2. Post instalación base

Ya tenemos el sistema base pero para usarlo seguramente queramos un entorno gráfico, un usuario propio para no usar el usuario root y los programas que solemos usar habitualmente. Para ellos continuaremos en la postinstalación.

### 2.1 Creación de usuario

Creamos un usuario para no usar el usuario root, sustituimos picodotdev por el nuestro:

{{< code file="script-30.sh" language="bash" options="" >}}

Permitirmos a los usuarios del grupo wheel usar el comando sudo:

{{< code file="script-31.sh" language="bash" options="" >}}

Descomentamos la siguiente linea:

{{< code file="script-32.txt" language="plaintext" options="" >}}

Editamos el archivo pacman.conf según nuestras preferencias, por ejemplo, para permitir el color en la terminal y para mostrar el progreso global.

{{< code file="script-33.sh" language="bash" options="" >}}

### 2.2 Instalar el entorno gráfico

Instalamos los paquetes básicos del entorno gráfico, en este caso los controladores para una tarjeta gráfica intel:

{{< code file="script-34.sh" language="bash" options="" >}}

### 2.3 Instalar el entorno de escritorio

Instalamos el entorno de escritorio según nuestras preferencias, en mi caso GNOME:

{{< code file="script-35.sh" language="bash" options="" >}}

Habilitamos el servicio del gestor de escritorio GDM:

{{< code file="script-36.sh" language="bash" options="" >}}

### 2.4 Instalación de yaourt

Si pretendemos usar algún paquete de [AUR](https://wiki.archlinux.org/index.php/Arch_User_Repository) deberemos instalar la herramienta yaourt:

{{< code file="script-37.sh" language="bash" options="" >}}

Añadimos su repositorio:

{{< code file="script-38.txt" language="plaintext" options="" >}}

Lo instalamos con:

{{< code file="script-39.sh" language="bash" options="" >}}

A partir de este momento podemos usar el comando yaourt en vez de pacman.

### 2.5 Instalar de programas

Los programas que instalaremos cambiarán según nuestras preferencias, estos son casi todos los que suelo utilizar:

{{< code file="script-40.sh" language="bash" options="" >}}

### 2.6 Activar el servicio de sincronización de hora

Para mantener la hora de nuestro sistema correctamente podemos usar un servicio que se encargue de mantenerla con un servicio a través de la red.

{{< code file="script-41.sh" language="bash" options="" >}}

El resultado de la instalación y usando GNOME es el siguiente:

{{< image
    gallery="true"
    image1="image:escritorio-gnome.jpg" optionsthumb1="300x200" >}}

{{% /post %}}
