---
pid: 483
type: "post"
title: "Introducción y uso básico de la distribución GNU/Linux Fedora Silverblue"
url: "/2020/05/introduccion-y-uso-basico-de-la-distribucion-gnu-linux-fedora-silverblue/"
date: 2020-05-15T16:00:00+02:00
updated: 2020-05-15T18:45:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imageHead: "image:fedora-silverblue-neofetch.png"
imagePost: "image:fedora-silverblue-neofetch.png"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Fedora Silbervlue es una distribución innovadora es su forma de sistema base usando OSTree e instalar aplicaciones gráficas con Flatpak y de paquetes de linea de comandos con Toolbox. Todas estas tecnologías le permiten considerarse una distribución _rolling-release_ tanto en el sistema como aplicaciones y paquetes. Estas tecnologias y forma de actualizar el sistema hace que sea mucho menos propenso a errores que los tradicionales en las distribuciones GNU/Linux de actualización de paquetes, ¿la siguiente generación de distribuciones serán como Fedora Silverblue?."
---

{{% post %}}

{{< logotype image1="fedora.svg" >}}

Distribuciones [GNU][gnu]/[Linux][linux] hay muchas con diferencias en algunos aspectos, el más cercano al usuario es entorno de escritorio entre los más populares [GNOME][gnome], [KDE][kde], [XFCE][xfce], [MATE][mate] o [Cinnamon][cinnamon] entre otros pero hay otros aspectos relevantes entre ellos el gestor de paquetes que utiliza, el modelo de actualización, en que otra distribución está basada, cual es su periodo de publicación de nuevas versiones, su popularidad, tiempo de vida o si está respaldada por una empresa.

A pesar de estas diferencias la mayoría de las distribuciones para los usuarios son parecidas en muchos aspectos. Tradicionalmente cada distribución tiene su repositorio de paquetes y su comando gestor de paquetes con el que es posible instalar y desinstalar paquetes. La mayoría usa [systemd] como sistema de inicio para controlar los procesos y servicios. El entorno de escritorio GNOME o KDE es el mismo en cada distribución si no se tiene en cuenta que las versiones puedan ser diferentes.

* [Elegir una distribución GNU/Linux según el usuario, uso o equipo][blogbitix-190]
* [Descargar e instalar la distribución Ubuntu de GNU/Linux paso a paso desde cero][blogbitix-232]

Las distribuciones GNU/Linux han cambiado en algunos aspectos importantes como la sustitución del sistema de inicio de SysV a systemd o cambiado el servidor gráfico [Xorg][xorg] por [Wayland][wayland] y van a hacerlo más en el futuro con el nuevo sistema para crear VPNs con [WireGuard][wireguard] o el sistema multimedia para sonido y vídeo [PipeWire][pipewire].

* [Sobre el futuro de las distribuciones GNU/Linux y los sistemas operativos][blogbitix-479]

En mi caso utilizo [Arch Linux][archlinux] desde hace ya casi una década y estoy contento con ella. Los motivos que tengo para preferir esta distribución son su modelo de actualizaciones _rolling-release_ en el que cada actualización todos los paquetes se actualizan a la última versión, su gestor de paquetes _pacman_ que es muy rápido, los paquetes tiene pocas modificaciones realizadas por los mantenedores, es altamente personalizable y también no menos importante casi como todo lo anterior su [documentación wiki][archlinux-wiki] con información muy útil para cualquier usuario de GNU/Linux.

* [De Arch Linux a Arch Linux][blogbitix-36]

Arch Linux es una de las distribuciones más populares pero no proporciona ningún asistente automatizado de instalación sino que después de arrancar el medio de inicio hay que introducir los comandos manualmente uno a uno hasta completar la instalación. Esto la hace difícil para los usuarios recién llegados a GNU/Linux o para los usuarios que no desean invertir tiempo en conocer cómo instalarla. También incluso para los usuarios expertos es que ya conocen como instalarla pero que el hecho de hacerlo manualmente es un tiempo que a veces no se dispone además de repetitivo.

Por esos motivos creé un _script_ de instalación de Arch Linux completamente automatizado y desatendido con cierto grado de personalización en las opciones más comunes, es un simple _script_ bash con todos los comandos que componen el proceso de instalación y que simplemente revisarlo sirve como documentación que además si se desea se puede ejecutar.

* [Script para instalar Arch Linux fácil, rápido, desatendido, automatizado y personalizable][blogbitix-204]

Pero a pesar de todo Arch Linux se basa en los principios básicos de los que hasta hoy han estado basadas las distribuciones. Gestor de paquetes, repositorio de paquetes y actualizaciones frágiles. Es muy posible que las distribuciones cambien tal y como las hemos conocido hasta ahora, ya se está produciendo cambios con Flatpak como sistema de instalar aplicaciones independientemente de la distribución y mantenidos por los propios desarrolladores del software y no los mantenedores de la distribución.

* [Flatpak, distribución e instalación de programas de escritorio en las distribuciones GNU/Linux][blogbitix-362]

Una distribución que se basa en principios diferentes que pueden ser el futuro próximo es [Fedora Silverblue][fedora-silverblue].

{{< image
    gallery="true"
    image1="image:fedora-silverblue-neofetch.png" optionsthumb1="650x450" title1="Fedora Silverblue"
    caption="Fedora Silverblue" >}}

### La distribución Fedora Silverblue

Una de las mayores fuentes de problemas de las distribuciones y de los sistemas operativos son las actualizaciones que por los cambios que introducen con nuevas versiones del software en ocasiones hace que algunas partes dejen de funcionar. Son solucionables desactualizando un paquete o en los casos más graves hace que el sistema ni siquiera se inicie correctamente llegando incluso a tener que reinstalar el sistema o peor aún provocando pédida de datos.

Otro problema es que algunas distribuciones tienen como principio la estabilidad del software y dado que las nuevas versiones de los programas son una fuente de inestabilidades optan por únicamente proporciona actualizaciones para errores de seguridad. Esto proporciona una mayor estabilidad pero hace que los programas no estén actualizados a las últimas versiones con lo que no se benefician de mejoras en nuevas características, mejoras de soporte de hardware, de rendimiento o incluso de seguridad.

Fedora Silverblue adopta varios principios para solucionar esos problemas. Uno es utilizar una base inmutable igual para todos los sistemas en los que se instala de modo que no haya diferencias ni errores por variaciones en el software del sistema. Es posible volver a una versión anterior en caso de algún error de modo que el sistema nunca quede completamente roto. Las aplicaciones de usuario y paquetes se instalan independientemente del sistema base inmutable lo que hace que no afecten a la estabilidad del sistema.

{{< image
    gallery="true"
    image1="image:fedora-silverblue-1.png" optionsthumb1="200x150" title1="Fedora Silverblue"
    image2="image:fedora-silverblue-2.png" optionsthumb2="200x150" title2="Fedora Silverblue"
    image3="image:fedora-silverblue-3.png" optionsthumb3="200x150" title3="Fedora Silverblue"
    caption="Fedora Silverblue" >}}

Las tecnologías que permiten adoptar esos principios a Fedora Silverblue son [OSTree][ostree] para el sistema base inmutable, [Flatpak][flatpak] para las aplicaciones de usuario gráficas y [Toolbox][toolbox] para instalar software de línea de comandos en contenedores.

OSTree es un proyecto que combina un modelo parecido a git para establecer y descargar árboles de sistemas de archivos de arranque, junto con una capa para disponerlos y gestionarlos con la configuración de arranque. OSTree es usado por _rmp-ostree_, un sistema híbrido de paquete e imágenes que usa Silverblue. Replica de forma atómica un sistema operativo base que permite al usuario añadir capas de paquetes RPM tradicionales encima del sistema base si se necesita.

* [What is Silverblue?](https://fedoramagazine.org/what-is-silverblue/)
* [A beginner's guide to Silverblue](https://www.redhat.com/sysadmin/beginners-guide-silverblue)
* [Getting Started](https://docs.fedoraproject.org/en-US/fedora-silverblue/getting-started/)
* [Updates, Upgrades & Rollbacks](https://docs.fedoraproject.org/en-US/fedora-silverblue/updates-upgrades-rollbacks/)
* [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/)
* [Frequently Asked Questions (FAQ)](https://docs.fedoraproject.org/en-US/fedora-silverblue/faq/)

#### Instalación

La instalación se realiza con un asistente gráfico después de haber descargado el medio de instalación y haberlo grabado en una memoria USB para inciar el sistema con él. Es necesario poco más que seleccionar la distribución del teclado, el particionado y la clave del superusuario _root_ para realizar la instalación.

{{< image
    gallery="true"
    image1="image:installation-1.png" optionsthumb1="200x150" title1="Instalación de Fedora Silverblue"
    image2="image:installation-2.png" optionsthumb2="200x150" title2="Instalación de Fedora Silverblue"
    image3="image:installation-3.png" optionsthumb3="200x150" title3="Instalación de Fedora Silverblue" >}}
{{< image
    gallery="true"
    image1="image:installation-4.png" optionsthumb1="200x150" title1="Instalación de Fedora Silverblue"
    image2="image:installation-5.png" optionsthumb2="200x150" title2="Instalación de Fedora Silverblue"
    image3="image:installation-6.png" optionsthumb3="200x150" title3="Instalación de Fedora Silverblue" >}}
{{< image
    gallery="true"
    image1="image:installation-7.png" optionsthumb1="200x150" title1="Instalación de Fedora Silverblue"
    caption="Instalación de Fedora Silverblue" >}}

#### Primer inicio

Al iniciar el sistema por primera vez un nuevo asistente permite crear la cuenta de usuario compuesto de nombre y contraseña con la que iniciar sesión en el sistema.

{{< image
    gallery="true"
    image1="image:initial-setup-1.png" optionsthumb1="200x150" title1="Primer inicio"
    image2="image:initial-setup-2.png" optionsthumb2="200x150" title2="Primer inicio"
    image3="image:initial-setup-3.png" optionsthumb3="200x150" title3="Primer inicio" >}}
{{< image
    gallery="true"
    image1="image:initial-setup-4.png" optionsthumb1="200x150" title1="Primer inicio"
    image2="image:initial-setup-5.png" optionsthumb2="200x150" title2="Primer inicio"
    image3="image:initial-setup-6.png" optionsthumb3="200x150" title3="Primer inicio" >}}
{{< image
    gallery="true"
    image1="image:initial-setup-7.png" optionsthumb1="200x150" title1="Primer inicio"
    caption="Primer inicio" >}}

Al usar GNOME como entorno de escritorio no se diferencia a cualquier otro sistema con GNOME. La mayor diferencia está en que las aplicaciones preinstaladas son muy pocas, reduciéndose a las básicas como el navegador [Firefox][firefox], la terminal, el explorador de archivos y editor de texto. Este permite al usuario tener instaladas únicamente las aplicaciones que desee o no tener que desinstalar las aplicaciones que no desea. Las aplicaciones que se deseen se deben instalar con Flatpak.

* [Las aplicaciones integradas del entorno de escritorio GNOME][blogbitix-464]

#### Administración del sistema, actualización

El software que compone el sistema base se puede actualizar, los siguientes comandos permiten conocer cuales son las actualizaciones disponibles. Las actualizaciones están integradas con el programa Software de GNOME que muestra notificaciones cuando hay alguna actualización disponible.

Pero también puede realizarse desde la línea de comandos. El siguiente comando realiza la operación de actualización.

{{< code file="rpm-ostree-upgrade.sh" language="bash" options="" >}}

Para simplemente comprobar que actualizaciones hay disponibles sin instalarlas.

{{< code file="rpm-ostree-status.sh" language="bash" options="" >}}

Para actualizar entre versiones mayores, de la 32 a posteriores, de Foedora Silverblue se utilizan los siguientes comandos en los que cambiará el número de la versión.

{{< code file="rpm-ostree-rebase.sh" language="bash" options="" >}}

La mayoría del software de usuario se instala con Flatpak y Toolbox siendo la forma recomendada de hacerlo. Sin embargo, algunos programas ha de instalarse modificando la instalación de Silverblue utilizando _package layering_, como un intérprete de comandos distinto a bash. La mayoría de paquetes RMP es posible instalarlos, aún así este método debe usarse en casos excepcionales que no sea posible hacerlo con Flatpak o Toolbox ya que podría comprometer la estabilidad del sistema.

{{< code file="rpm-ostree-install.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:upgrade-1.png" optionsthumb1="200x150" title1="Actualización"
    image2="image:upgrade-2.png" optionsthumb2="200x150" title2="Actualización"
    image3="image:upgrade-3.png" optionsthumb3="200x150" title3="Actualización"
    caption="Actualización" >}}

En caso de que una actualización produzca algún error se puede volver a la versión anterior con el siguiente comando.

{{< code file="rpm-ostree-rollback.sh" language="bash" options="" >}}

#### Instalación de programas gráficos

Las aplicaciones de usuario gráficas se instalan con Flatpak y en el caso de GNOME con la aplicación Software. A medida que pasa el tiempo hay más programas disponibles en esta forma de distribuir software y muchos de los programas más comunes está disponibles como la colección ofimática [LibreOffice][libreoffice], el reproductor multimedia [VLC][vlc], el editor de texto avanzado [Visual Studio Code][microsoft-visual-studio-code] o el entorno de desarrollo integrado [IntelliJ][intellij].

Con la aplicación de software es posible encontrar todo este software, instalarlo y desinstalarlo con un clic en un botón. Lo único necesario es añadir el repositorio [Flathub][flathub] como fuente de programas.

{{< image
    gallery="true"
    image1="image:flathub-1.png" optionsthumb1="200x150" title1="Repositorio Flathub"
    image2="image:flathub-2.png" optionsthumb2="200x150" title2="Repositorio Flathub"
    caption="Repositorio Flathub" >}}

{{< image
    gallery="true"
    image1="image:software-1.png" optionsthumb1="200x150" title1="Instalación de software"
    image2="image:software-2.png" optionsthumb2="200x150" title2="Instalación de software"
    image3="image:software-3.png" optionsthumb3="200x150" title3="Instalación de software" >}}
{{< image
    gallery="true"
    image1="image:software-4.png" optionsthumb1="200x150" title1="Instalación de software"
    caption="Instalación de software" >}}

Dos programas instalados como paquetes Flatpak.

{{< image
    gallery="true"
    image1="image:intellij.png" optionsthumb1="200x150" title1="Intellij IDEA"
    image2="image:visual-studio-code.png" optionsthumb2="200x150" title2="Visual Studio Code"
    caption="Programas instalados como Flatpak" >}}

También es posible instalar el paquetes Flatpak desde la linea de comandos.

#### Uso de Toolbox, programas de línea de comandos en contenedores

El resto de paquetes de línea de comandos se pueden instalar en contenedores con [Toolbox][toolbox] basados en [podman][podman] que es una alternativa compatible de [Docker][docker]. Lo especial de estos contenedores es que tiene acceso a la carpeta personal o directorio _home_ del usuario de modo que pueden crear archivos o modificar los existentes en esta ubicación.

Destro de estos componentes se instalan los paquetes con el gestor de paquetes _dnf_.

{{< code file="toolbox-package-install.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:toolbox-1.png" optionsthumb1="200x150" title1="Instalación de programas de línea de comandos"
    image2="image:toolbox-2.png" optionsthumb2="200x150" title2="Instalación de programas de línea de comandos"
    image3="image:toolbox-3.png" optionsthumb3="200x150" title3="Instalación de programas de línea de comandos"
    caption="Instalación de programas de línea de comandos" >}}

Para no modificar el sistema base de Silverblue otra forma de instalar Java es con la utilidad [sdkman][sdkman] que además permite cambiar entre versiones fácilmente y tener acceso a diferentes implementaciones del JDK, entre otras utilidades instalables con esta herramienta.

{{< code file="sdk-usage.sh" language="bash" options="" >}}

### Conclusión

Si tuviese que probar o usar otra distribución diferente Arch Linux probablemente la que elegiría sería Fedora Silverblue por los principios innovadores en las que está basada que proporcionan varias mejoras en puntos importantes sobre las distribuciones como las hemos conocido tradicionalmente. Igualmente permite tener el software actualizado, es también _rolling-release_ y mejora la fiabilidad de las actualizaciones.

En estos vídeos se proporciona una introducción sobre esta distribución que quizá marque el camino de aquí en adelante para otras.

{{< youtube
    video="BkrGij4LNC0" >}}
{{< youtube
    video="8b9sTXdQK5k" >}}

{{% reference %}}
* [Fedora Silverblue 31 review (after 3 months)](https://xermansoto.wordpress.com/2020/04/10/fedora-silverblue-31-review-after-3-months/)
* [A little collection of ‘How to do X with Toolbox on Fedora Silverblue’](http://harrymichal.undo.it/posts/2020/a-little-collection-of-how-to-do-x-with-toolbox-on-fedora-silverblue/)
{{% /reference %}}
