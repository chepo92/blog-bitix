---
pid: 195
type: "post"
title: "Instalar programas con Homebrew en macOS"
url: "/2016/11/instalar-programas-con-homebrew-en-macos/"
date: 2016-11-19T12:00:00+01:00
updated: 2016-11-25T22:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:apple.svg"
tags: ["apple", "planeta-codigo"]
summary: "Para no tener que descargar binarios e instalarlos manualmente y estar pendiente de nuevas versiones que se publiquen en un futuro en macOS está Homebrew. Homebrew es un gestor de paquetes similar a los existentes en las distribuciones GNU/Linux con el que podremos buscar software, instalar, actualizar, ver que hemos instalado, cuales están desactualizados, iniciar y parar servicios y desinstalar los paquetes o programas. Esta es una guía básica sobre como instalar software en macOS con Homebrew y como instalar iTerm2 que es una mejor terminal que la propia del sistema con iterm."
---

{{% post %}}

{{< logotype image1="apple.svg" title1="Apple" width1="200" image2="macos.svg" title2="macOS" width2="300" >}}

Como nuevo usuario de [mi primer mac][blogbitix-193] he tenido que empezar instalando los programas que voy a usar. Una de las cosas buenas de las distribuciones [GNU][gnu]/[Linux][linux] es la forma de obtener e instalar programas. Cada distribución de GNU/Linux tiene su repositorio de paquetes y programas de los que el gestor de paquetes obtiene e instala. Los gestores paquetes se encargan de instalar, actualizar y desinstalar cada paquete junto las dependencias que requiera. Con el gestor de paquetes y desde la terminal es posible instalar múltiples programas rápidamente con un comando. En [Windows][windows] y [macOS][macos] los programas se instalan descargando un binario y ejecutándolo que inicia un asistente. Instalar programas de esta forma en Windows y macOS tiene los inconvenientes de que hay que hay que ir a la página oficial de programa y descargar el último binario disponible, además cuando se publique una nueva versión hay que descargar el nuevo binario y volverlo a instalar, también es una fuente de introducción de virus si se descarga e instala el software de fuentes no confiables. En GNU/Linux el gestor de paquetes se encarga de actualizar los paquetes y programas que estén desactualizados cuando haya nuevas versiones.

En macOS existe un gestor de paquetes similar a los existentes en GNU/Linux, [Homebrew][homebrew] se define así mismo como el gestor de paquetes que le falta a macOS. Con Homebrew podemos instalar los programas y mantenerlos actualizados sin tener que estar observando cuando se publica una nueva versión de cada programa. Con Homebrew también podremos instalar muchos de los comandos que están disponibles en GNU/Linux como wget, cmus, gimp, ... [Hombrew Cask][homebrew-cask] es un añadido que proporciona los mismo para los binarios de los programas de macOS. Con estas dos herramientas podemos instalar y mantener actualizado la mayor parte del software que utilicemos.

{{< image
    gallery="true"
    image1="image:homebrew.png" optionsthumb1="300x200" title1="Homebrew" >}}

Para instalar Hombrew ejecutamos el siguiente comando en la terminal:

{{< code file="homebrew.sh" language="bash" options="" >}}

El siguiente comando nos permitirá instalar versiones anteriores a las últimas, por ejemplo, Java 7:

{{< code file="brew-versions.sh" language="bash" options="" >}}

Lo siguiente será buscar los programas que queramos:

{{< code file="brew-search.sh" language="bash" options="" >}}

Para instalar Firefox, Google Chrome, VirtualBox, Docker, Java 8 y Java 7, Atom e iTerm2:

{{< code file="brew-cask-install.sh" language="bash" options="" >}}

Algunos otros programas que podemos instalar si programamos son:

{{< code file="brew-install.sh" language="bash" options="" >}}

Con jenv podemos cambiar entre las versiones de Java 8 y Java 7:

{{< code file="jenv.sh" language="bash" options="" >}}

Los servicios como MySQL o Redis podemos iniciarlos y pararlos, además de ver cuales hemos instalado:

{{< code file="brew-services.sh" language="bash" options="" >}}

También podemos listar que paquetes y programas tenemos instalados:

{{< code file="brew-list.sh" language="bash" options="" >}}

Para ver que programas y paquetes tenemos desactualizados:

{{< code file="brew-outdated.sh" language="bash" options="" >}}

Para actualizar todos los paquetes desactualizados o actualizar uno individualmente:

{{< code file="brew-upgrade.sh" language="bash" options="" >}}

Si queremos mantener desactualizado un paquete podemos fijar la versión que tengamos instalada:

{{< code file="brew-pin.sh" language="bash" options="" >}}

Y para desinstalar paquetes:

{{< code file="brew-uninstall.sh" language="bash" options="" >}}

La terminal incluida de serie en macOS es muy básica por ello mucha gente suele instalar una más avanzada como [iTerm2](http://iterm2.com/). iTerm2 añade funcionalidades como pestañas y podemos dividir una terminal horizontal y verticalmente. También se puede instalar [oh-my-zsh](https://ohmyz.sh/) que permite gestionar la configuración del intérprete de comandos [zsh][zsh] pudiendo añadir temas para modificar el _prompt_ del sistema o cambiarlo según la información del directorio actual, por ejemplo, si estamos en un directorio de git veremos en que rama estamos y si hay cambios realizados.

{{< code file="oh-my-zsh.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:iterm2.png" optionsthumb1="300x200" title1="iTerm2"
    caption="Terminal iTerm2" >}}

{{% /post %}}
