---
pid: 36
type: "post"
title: "De Arch Linux a Arch Linux"
url: "/2014/08/de-arch-linux-a-arch-linux/"
date: 2014-08-09T00:07:58+02:00
updated: 2015-04-10T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux", "opinion", "software", "software-libre"]
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" >}}

Ya llevo usando algo más de 4 años [Arch Linux][archlinux] de forma continuada desde que definitivamente hice el paso desde Windows según comentaba en [mi camino de Windows a Arch Linux][elblogdepicodev-de-windows-arch-linux] como sistema de mi ordenador personal. Pasé un poco de tiempo usando [Debian][debian] y evaluando [Ubuntu][ubuntu], [Fedora][fedora], y [openSUSE][opensuse] pero al final la distribución que elegí fue Arch Linux.

La razón de elegir Arch Linux fue que me dio muchos menos problemas configurar todos los dispositivos, por ser una [distribución rolling release][rollingrelease] con lo que en todo momento tenía las últimas versiones de cada programa y disponía en poco tiempo las nuevas mejoras que se iban incorporando a ellos evitando a los pocos meses estar con la sensación de tener programas que han quedado superados con nuevas versiones y no tener que esperar al siguiente iteración de una nueva versión para disponer de ellas (o usar para cada programa un PPA), además tenía los programas que yo decidía y no los que los desarrolladores de la distribución preinstalaban por mi. Cualquier otra distribución linux de las que he mencionado son de gran calidad y son usadas por mucha gente, simplemente en mi caso Arch Linux se adaptaba mejor a lo que buscaba y no era yo el que me adaptaba a la distribución. También me gustaba [su filosofía](https://wiki.archlinux.org/index.php/Arch_Linux) y su [«Arch way»](https://wiki.archlinux.org/index.php/The_Arch_Way) de una configuración simple no oculta, los paquetes lo normal es que no lleven modificaciones sobre lo que proporcionan sus desarrolladores aparte de tenerla actualizada en el momento que decidiese.

Durante este tiempo he estado tan a gusto con esta distribución que ahora incluso la uso como distribución para el ordenador con el que trabajo y nunca me ha entrado el gusanillo del «distro hopping». Alguna vez me ha dado algún problema como cargarme el sistema por actualizar GRUB mal por error mío con desenlace fatal que me obligo a reinstalarla y alguna otra vez algún fallo menor en los iconos de [GNOME][gnome], pero al contrario de lo que pensaba inicialmente por ser Arch Linux una distribución con los paquetes en constante actualización rara vez da problemas y cuando hay alguno se encuentra en poco tiempo la solución o al menos la pregunta y poco más tarde en los [foros de Arch Linux](https://bbs.archlinux.org/). Si no hubiese sido por este error de GRUB que me obligó a reinstalar ahora tendría un Arch Linux que hubiese instalado hace cuatro años y durante este tiempo ha habido cambios importantes como la migración de SysVinit o las diferentes actualizaciones desde GNOME 3.0 a 3.12, el servidor de las X y otros muchos paquetes vitales del sistema. En el momento que hay que hacer alguna intervención manual al hacer una actualización se publica en la web de Arch Linux con los pasos a realizar, siguiéndolos no suele haber problemas.

También es la distribución que uso para una [Raspberry Pi][raspberrypi] desde que dispongo de ella y suelo utilizar como sistema para descargar mediante torrent o para escuchar música. La Raspberry Pi es un sistema con procesador ARM a pesar de lo cual no hay diferencia alguna en la administración con al [distribución de Arch Linux para procesadores ARM][archlinuxarm]. Es otro punto interesante ya que Arch Linux en su versión ARM también esta disponible para multitud de otros SoC como la Raspberry Pi, la distribución es la misma y lo mismo que nos sirve para nuestro ordenador personal x86_64 nos sirve para cualquiera de estos sistemas ARM.

Alguna gente se ve intimidada por [instalar Arch Linux paso a paso y desde la terminal][blogbitix-22], es un proceso manual pero siguiendo la wiki y alguna guía para cualquier usuario con cierto tiempo usando Linux no debería ser ningún problema. A veces no todas las personas disponen de este poco de tiempo para investigar y hacer la instalación y se opta por otras distribuciones que tienen asistentes y guías en el proceso pero una vez hecho el pequeño esfuerzo se ve compensado por en teoría no tener que volverla a reinstalar nunca más.

Después de todo este tiempo creo que lo mejor de Arch Linux no es que sea una distribución «rolling release» con siempre las últimas versiones de cada programa, que sea un sistema cuya configuración es simple que no se oculta al usuario, que tenga los programas que yo elija, su comunidad y foros, que también son muy buenos, sino lo mejor me parece que es la wiki. La [wiki de Arch Linux][archlinux-wiki] tiene cantidad de información oficial actualizada sobre cantidad de temas, fáciles de encontrar y rápidamente, sin ser necesario buscar esta información en foros con google que no siempre tienen la solución, no son exactamente lo que buscamos o no tienen la respuesta correcta además de consumir mucho tiempo hasta encontrar la respuesta y si la encontramos. La wiki de Arch Linux es algo que no he encontrado en otras distribuciones y me parece de lo mejor que tiene incluso puede ser útil para quien no use Arch Linux. Finalmente, comentaré también que a pesar de ser una distribución que está a la última puede ser una muy buena opción para instalar en un sistema antiguo, en otro artículo comentaré la expiencia que tuve al [instalar un sistema operativo en un Acer Aspire 2000][blogbitix-37] (i686 con 1 GiB de RAM) viejuno, probé muchas opciones Windows XP, [Linux Mint][linuxmint], [gNewSense][gnewsense], [trisquel][trisquel] y al final Arch Linux fué la que mejor resultado me ofreció con un portátil antiguo pero con software completamente actualizado.

Aún así Arch Linux puede que no sea lo más adecuado para todo o todas las personas según sus preferencias o requerimientos. Una de las cosas a las que me refiero es a un entorno de servidor donde lo más importante es la seguridad, la estabilidad y el soporte. Con estas necesidades probablemente sea mejor [Debian][debian], [Ubuntu][ubuntu], [RHEL][rhel] o [CentOS][centos]. Sin embargo para uso personal, Arch Linux mientras mantenga la misma calidad como hasta ahora seguirá siendo la distribución que use.

¡Larga vida a Linux y a Arch Linux!

{{< reference >}}
* [De Windows a Arch Linux][elblogdepicodev-de-windows-arch-linux]
* [Experiencia instalando sistema operativo a ordenador viejo][blogbitix-37]
* [Anexo a la guía de instalación de Arch Linux][blogbitix-22]
* [Guía instalación Raspberry Pi con Arch Linux ARM (Parte I, instalación base)][elblogdepicodev-guia-instalacion-raspberry-pi-con-arch]
{{< /reference >}}

{{% /post %}}
