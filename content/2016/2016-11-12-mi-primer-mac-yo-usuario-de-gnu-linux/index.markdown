---
pid: 193
type: "post"
title: "Mi primer Mac, yo usuario de GNU/Linux"
url: "/2016/11/mi-primer-mac-yo-usuario-de-gnu-linux/"
date: 2016-11-12T10:00:00+01:00
updated: 2016-11-25T22:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:apple.svg"
tags: ["apple", "gnu-linux", "planeta-codigo"]
summary: "Hace ya más de un lustro pase de usar Windows a usar GNU/Linux incluso en el trabajo, ahora por motivos laborales no me queda opción que usar un Mac, el primer Mac que usaré. En casa a nivel personal seguiré usando la distribución Arch Linux y antes de empezar a usar un Mac seguirá siendo así, ¿usar un Mac me hará cambiar de opinión y usaré un producto de Apple incluido a nivel personal en un futuro?"
---

{{% post %}}

{{< logotype image1="apple.svg" title1="Apple" width1="200" image2="macos.svg" title2="macOS" width2="300" >}}

Hasta el momento en el trabajo podía usar GNU/Linux como sistema operativo, concretamente la distribución [Arch Linux][archlinux] con [GNOME][gnome] y [Docker][docker] para el entorno de desarrollo. Sin embargo, algunos cambios han hecho que tuviese que elegir entre [Windows][windows] que no uso desde hace ya más de un lustro o [macOS][macos] que usaría por primera vez. Dado que macOS es más similar a [GNU][gnu]/[Linux][linux] por seguir ambos la filosofía Unix al final opté por un Mac como prácticamente la totalidad de mis compañeros de trabajo. Una razón es que muchas de las herramientas y comandos que están disponibles en GNU/Linux lo están también en macOS.

Usar un Mac por primera vez es algo relevante desde el punto de vista tecnológico para alguien que le gusta la tecnología. Este artículo lo escribo para mi yo futuro de dentro de unos años para ver si la preferencia del software libre y GNU/Linux que tengo ahora no se ve doblegada en parte por Apple y morderé la manzana más después de escribir cosas como [Sobre los ínfimos impuestos que paga Apple][blogbitix-175] o [Como sería si Microsoft, Apple y Linux... ][elblogdepicodev-85].

Nunca he usado un producto de Apple salvo tocarlos un poco en las tiendas y es que convencido del software libre y el alto precio que tienen nunca he estado atraído por la marca de la manzana mordida, así que comienzo completamente desde cero empezando por tener que aprender de nuevo muchos de los atajos de teclado y combinaciones de teclas. Simplemente por curiosidad conseguí [usar macOS en una máquina virtual con VirtualBox][blogbitix-181] que es posible tanto en Windows como en GNU/Linux.

Una de las cosas que me gustaba de Arch Linux es su modelo _rolling release_ de modo que en cada actualización del sistema con `pacman -Syu` tenía las últimas versiones de cada programa y paquete, esto hace que no necesite reinstalar cada nueva versión ni tuviese que preocuparme de las versiones de los programas, lo único que sabía es que siempre tenía la última versión. Hasta ahora iba por 3 años desde que instalé Arch Linux por última vez. Por lo poco que me he informado en los Mac existe [Homebrew][homebrew] y [Homebrew Cask][homebrew-cask] que es un gestor de paquetes similar a la forma de distribuir software con los gestores de paquetes de las distribuciones GNU/Linux. Casi todo el software que he necesitado está disponible en Homebrew incluyendo Java 8, Java 7, Firefox, Google Chrome, MySQL, Docker, VirtualBox, Git o atom incluidos programas como vim, gimp, cmus o meld.

El Mac que usaré no es de los últimos con panel táctil en la parte superior del teclado ese que ha eliminado una tecla física tan importante también para los desarrolladores como la tecla escape. El precio del modelo de principios de 2015 está valorado en unos $2000 junto con otros $120 en adaptadores y periféricos, tiene buenas especificaciones siendo un producto de gama alta con sobre todo SSD, pantalla y _touchpad_ y aunque 16 GiB son suficientes es extraño que en ningún modelo de [MacBook Pro](http://www.apple.com/es/macbook-pro/) aún no haya opción de instalar 32 GiB para los usuarios más exigentes. Aún así por ese precio uno adquiere varios portátiles como los [Slimbook][slimbook] y el último pasados unos años tendrá mejores especificaciones en varios aspectos que cualquier Mac actual.

En mis primeras horas de uso de un Mac destacaré la pantalla retina, su gran resolución de 2560x1600 hace que el texto y las imágenes se vean muy bien sin notar los píxeles, teniendo un monitor de 23" con resolución 1920x1080 o una pantalla de portátil de 14" de resolución 1600x900 las diferencias son claras. Aún así esto es a costa de que la resolución equivalente en un PC sea aproximadamente de 1280x800 en la configuración por defecto haciendo que parezca que entran pocas cosas en la pantalla, otras resoluciones equivalentes seleccionables son 1680x1050, 1440x900, 1280x800 y 1024x640. El _touchpad_ también parece ser otra característica diferenciadora y destacable aunque aún no conozco muchos de los gestos que permite. La interfaz de escritorio de macOS y de GNOME es similar en muchos aspectos con la barra superior, el lanzador de aplicaciones _Launchpad_, la vista de ventanas _Dashboard_ y la vista de actividades de GNOME.

Yo futuro, ¿habrás caído en la tentación? ¡Resiste! No olvides y piensa [por que empezaste a usar GNU/Linux][elblogdepicodev-15] y [por que seguiste usando Arch Linux][blogbitix-36]... por aprender, por el software libre, por la privacidad, por no pagar costosas licencias de software privativo o usar _cracks_, por no tener software espía, por ser el dueño del equipo y no de la marca cuando decida dejar de darle soporte...

Por lo menos ahora podré hablar con un poco más de criterio cuando lo haga sobre Apple y sus productos, como macOS, los MacBook, los adaptadores y periféricos como el [Magic Mouse](http://www.apple.com/es/shop/product/MLA02ZM/A/magic-mouse-2). El siguiente paso es [cómo instalar software en macOS con Homebrew][blogbitix-195].

{{< image
    gallery="true"
    image1="image:macos.png" optionsthumb1="300x200" title1="Información del sistema macOS"
    image2="image:macos-sierra-desktop.jpg" optionsthumb2="300x200" title2="Escritorio de macOS"
    caption="Información del sistema y escritorio de macOS" >}}

{{% /post %}}
