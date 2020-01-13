---
pid: 204
type: "post"
title: "Script de instalación de Arch Linux desatendido, automatizado y personalizable"
url: "/2017/01/script-de-instalacion-de-arch-linux-desatendido-automatizado-y-personalizable/"
date: 2017-01-13T00:00:00+01:00
updated: 2018-07-26T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
summary: "Arch Linux es una de las distribuciones más personalizables de GNU/Linux pero cuya instalación requiere leer una buena cantidad de documentación para saber que comandos ejecutar en el _prompt_ del sistema en el que te deja se medio de instalación. Algunos usuarios eligen una distribución como Antergos, KaOS o Manjaro con un instalalador gráfico y guiado simplemente por el hecho de no enfrentarse al instalador de Arch Linux. Ejecutar un comando y esperar a que termine para introducir otro es lento y requiere de atención. "
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" image2="linux.svg" >}}

Hace tiempo que instalar una distribución [GNU][gnu]/[Linux][linux] no tiene más dificultad que instalar un sistema operativo como [Windows][windows], que consiste en descargar la imagen ISO del CD o DVD, grabarla en un CD, DVD o memoria USB e iniciar el sistema con el medio. Las [distribuciones aconsejadas para usuarios que provienen de Windows o macOS][blogbitix-190] o no tiene muchos conocimientos informáticos poseen instaladores gráficos o basados en texto y guiados en varios pasos hasta completar la instalación en menos de una hora. Distribuciones como [Ubuntu][ubuntu], [elementary OS][elementary] o [Linux Mint][linuxmint] hacen que la instalación no requiera muchos conocimientos y sea completada con éxito por cualquier usuario.

{{< image
    gallery="true"
    image1="image:debian-installer-text.png" optionsthumb1="300x200" title1="Instalador de Debian en modo texto"
    image2="image:debian-installer-graphics.png" optionsthumb2="300x200" title2="Instalador de Debian en modo gráfico"
    caption="Instalación guíada de Debian basada en texto y gráfica" >}}

Otras distribuciones basadas en principios diferentes y usuarios a los que está destinadas con otras necesidades o preferencias puede que requieran algo más de conocimientos a cambio de realizar configuraciones más avanzadas como el particionado del disco, cifrado del disco o software que se instala. Algunas distribuciones como [Arch Linux][archlinux] incluso no proporcionan ningún instalador.

> It is targeted at the proficient GNU/Linux user, or anyone with a do-it-yourself attitude who is
> willing to read the documentation, and solve their own problems.

En Arch Linux con su [forma de hacer las cosas](https://wiki.archlinux.org/index.php/Arch_Linux) deja al usuario el poder de personalizar el sistema completamente a sus necesidades y preferencias únicamente limitado por su determinación de conseguirlo. Solo proporciona [el medio con el que iniciar la instalación][archlinux-download] que comienza con una terminal y un _prompt_ del sistema, una [guía de instalación][archlinux-install-guide] junto con las [recomendaciones generales][archlinux-general-recomendations] y [una de las mejores fuentes de información en GNU/Linux][archlinux-wiki] además de completa de cada aspecto que necesitemos en la instalación. Después de haber leído las páginas relevantes de la wiki de Arch Linux, seguramente más de una y dos veces, hasta comprenderla en su mayor parte se empieza a realizar la receta que contenga los comandos necesarios hasta completar la instalación.

En multitud de blogs y vídeos de YouTube hay guías que contienen los comandos y las explicaciones necesarias. Cualquier usuario de Arch Linux con un blog seguramente ha publicado un artículo con su guía de instalación (sí, [yo también publiqué la mía][blogbitix-22]). Un usuario que quiera instalar Arch Linux debe leer varios de esos artículos además de la guía oficial de instalación. Según la filosofía de Arch Linux este proceso de aprendizaje se considera necesario y permite una mayor compresión del sistema. Pero saber los comandos que hay que introducir para realizar la instalación de Arch Linux no evita tener que teclearlos uno de tras de otro y esperar a que termine el anterior para introducir el siguiente. Tampoco todas las personas tienen el tiempo para realizarlo. Varias [distribuciones derivadas de Arch Linux](https://wiki.archlinux.org/index.php/Arch-based_distributions) como [Antergos][antergos], [KaOS][kaos] o [Manjaro][manjaro] ofrecen los instaladores gráficos y guiados más amigables que atraen a algunos usuarios buscando usar Arch Linux pero no pasar por su poco amigable proceso de instalación. Por fortuna al ser una distribución _rolling release_ (en constante actualización) solo hay que hacer una única instalación por equipo en principio durante toda su vida de uso. Pero incluso para los usuarios de Arch Linux realizar una segunda instalación en un nuevo equipo es cansina.

Hace unos meses conocí [arch-anywhere][arch-anywhere] que básicamente es un _script_ de bash, con un instalador guiado y basado en texto que hace menos laboriosa la instalación de Arch Linux de forma similar a las existentes en otras distribuciones más amigables. Sin embargo, hay un dos cosas que no me convencen de _arch-anywhere_, una es que no es desatendido requiriendo contestar a varias preguntas de forma interactiva, esperar a que termine ejecute algún comando según la contestación anterior y contestar a la siguiente pregunta. Por lo demás, ofrece un buen nivel de personalización cubriendo las necesidades más comunes de los usuarios como personalizar el particionado, elegir el sistema de archivos, si se quiere LVM, cifrado, el entorno de escritorio (GNOME, KDE, XFCE, ...), kernel, cargador de arranque (GRUB) y programas a instalar. Otra cosa que no me convence es que usa una imagen ISO propia y no la original de Arch Linux.

Basándome en _arch-anywhere_ y dedicando un poco de tiempo he creado un _script_ en [bash][bash] para instalar Arch Linux de forma automatizada, desatendida y personalizable hasta cierto punto aunque siendo útil para los casos de configuraciones más comunes. Algunas de las funcionalidades que soporta son:

* BIOS con [particionado](https://wiki.archlinux.org/index.php/Partitioning) GPT
* [UEFI](https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface)
* [LVM](https://wiki.archlinux.org/index.php/LVM) y no LVM
* Partición _root_ [cifrada](https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_an_entire_system) y sin cifrar
* [Sistemas de archivos](https://wiki.archlinux.org/index.php/File_systems) ext4, btrfs (sin swap) o xfs
* [swap](https://wiki.archlinux.org/index.php/Swap) con archivo
* Instalación con [red WIFI](https://wiki.archlinux.org/index.php/Wireless_network_configuration) WPA
* [Soporte TRIM](https://wiki.archlinux.org/index.php/Solid_State_Drives) para discos SSD
* Utilidades como invitado de [VirtualBox](https://wiki.archlinux.org/index.php/VirtualBox)
* [Microcódigo](https://wiki.archlinux.org/index.php/Microcode) para procesadores Intel
* Creación de usuario
* Instalación de utilidad para AUR (aurman, yay)
* Instalación de paquetes
* Instalación de entorno de escritorio ([GNOME](https://wiki.archlinux.org/index.php/GNOME), [KDE](https://wiki.archlinux.org/index.php/KDE), [Xfce](https://wiki.archlinux.org/index.php/Xfce), [Mate](https://wiki.archlinux.org/index.php/MATE), [Cinnamon](https://wiki.archlinux.org/index.php/Cinnamon), [LXDE](https://wiki.archlinux.org/index.php/LXDE)) y gestor de sesiones ([gdm](https://wiki.archlinux.org/index.php/GDM), [sddm](https://wiki.archlinux.org/index.php/SDDM), [lightdm](https://wiki.archlinux.org/index.php/LightDM), [lxdm](https://wiki.archlinux.org/index.php/LXDM))
* Instalación base sin entorno de escritorio
* Instalación de [kernels](https://wiki.archlinux.org/index.php/Kernels) adicionales (linux-lts, linux-grsec, linux-zen)
* Instalación de controlador gráfico (intel, nvidia, amd)
* Cargador de arranque con [GRUB](https://wiki.archlinux.org/index.php/GRUB)
* Grabar la instalación con [asciinema][asciinema] y archivo de _log_
* Reinicio después de la instalación y posibilidad de abortar el reinicio
* Script para entrar en modo recuperación

La forma aconsejada de instalar Arch Linux es aprendiendo cuales son los comandos a ejecutar y que hace cada uno de ellos, primero lee la guía oficial de instalación de Arch Linux y comprende que hacen los comandos del _script_. Este _script_ no es oficial y por ello en el [foro de Arch Linux en español][archlinux-forums-es] o [en inglés][archlinux-forums] no podrán darte soporte aunque yo en los comentarios de este artículo te ayudaré si preguntas. Ten en cuenta que de momento solo lo he probado en [VirtualBox][virtualbox] no en un sistema real y que este _script_ elimina toda la información del dispositivo de instalación. Si lo pruebas deja un comentario al final de artículo.

Iniciado el sistema con la imagen ISO de Arch Linux de instalación, hay que descargar el _script_, editar algunas variables de entorno para la configuración de alis e iniciar el proceso de instalación. Dependiendo del entorno de escritorio preferido, si se desea LVM, el tipo del sistema de archivos, si se desea cifrar el sistema de archivos y paquetes a instalar los valores de las variables variarán según las preferencias que inicialmente tienes unos valores comunes. Dos variables que hay que modificar al menos son _USER\_NAME_ y _USER\_PASSWORD_ con el nombre del usuario y su contraseña que vaya a utilizar el sistema.

El tiempo requerido de instalación varía según el ancho de banda de la conexión y del tipo de almacenamiento, en mi caso con ADSL con una descarga de 1.2 MiB/s y SSD la instalación del sistema base sin entorno de escritorio me tarda aproximandamente 20 minutos. Con una conexión de fibra tardará sensiblemente menos tiempo. El _script_ de instalación contiene con los mismos comandos que serían necesarios para realizar la instalación manualmente de forma interactiva.

{{< code file="alis-install.sh" language="bash" options="" >}}
{{< code file="alis.conf" language="bash" options="" >}}

Estas son algunas capturas de pantalla con diferentes entornos de escritorio que he probado con VirtualBox y un vídeo grabado con asciinema con el proceso completo de instalación.

{{< image
    gallery="true"
    image1="image:archlinux-gnome.jpg" optionsthumb1="300x200" title1="GNOME"
    image2="image:archlinux-kde.jpg" optionsthumb2="300x200" title2="KDE"
    caption="Entornos de escritorio GNOME y KDE" >}}
{{< image
    gallery="true"
    image1="image:archlinux-xfce.jpg" optionsthumb1="300x200" title1="XFCE"
    image2="image:archlinux-cinnamon.jpg" optionsthumb2="300x200" title2="Cinnamon"
    caption="Entornos de escritorio Xfce y Cinnamon" >}}
{{< image
    gallery="true"
    image1="image:archlinux-lxde.jpg" optionsthumb1="300x200" title1="LXDE"
    image2="image:archlinux-mate.jpg" optionsthumb2="300x200" title2="Mate"
    caption="Entornos de escritorio LXDE y Mate" >}}
{{< image
    gallery="true"
    image1="image:archlinux-root-password.png" optionsthumb1="300x200" title1="Solicitud de contraseña para descifrar partición root"
    caption="Solicitud de contraseña para descifrar partición root" >}}

{{< asciinema id="192880" caption="Instalación de sistema base de Arch Linux con alis" >}}

El código del instalador no es muy complicado y mucho más sencillo que el [código de AnarchyLinux](https://github.com/AnarchyLinux/installer) al no estar mezclado con los mensajes interactivos que hacen preguntas y esperan respuestas, además despues de configurar las variables e iniciado el proceso de instalación la misma se realiza de forma desatendida hasta completarse sin requerir que el usuario intruduzca más datos de forma interactiva. Los comandos que he recopilado de la receta son los que ejecutaríamos uno detrás de otro con únicamente el medio de instalación de Arch Linux. La función _main_ contiene los pasos en los que consiste la instalación, desde el paticionado y cifrado del disco hasta el reinicio una vez completada la instalación, el resto de las funciones los comandos de ese paso de la instalación.

{{< code file="alis.sh" language="bash" options="" >}}

{{< sourcecode git="alis/tree/master/" >}}

{{% /post %}}
