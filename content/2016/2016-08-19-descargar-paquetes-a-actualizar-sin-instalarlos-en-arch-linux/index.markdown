---
pid: 171
type: "post"
title: "Descargar paquetes a actualizar sin instalarlos en Arch Linux"
url: "/2016/08/descargar-paquetes-a-actualizar-sin-instalarlos-en-arch-linux/"
date: 2016-08-19T17:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux"]
summary: "Arch Linux al ser una distribución de GNU/Linux _rolling release_ las actualizaciones de los paquetes del sistema son tan frecuentes como deseemos, una vez a la semana, una vez al mes, una vez al día, ... Si solo queremos descargar los paquetes y actualizarlos en el momento que deseemos podemos hacerlo con un opción del gestor de paquetes de Arch."
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" image2="linux.svg" >}}

Al actualizar los paquetes de la distribución _rolling release_ [Arch Linux][archlinux] puede interesarnos actualizar las bases de datos de paquetes y descargar los paquetes que estén desactualizados pero sin instalarlos. Descargando los paquetes sin instalarlos nos permite realizar la actualización en el momento que deseemos como por ejemplo en el momento que dejemos de usar el ordenador, descargar los paquetes mientras seguimos usando la computadora y hacer la actualización en el momento que deseemos sin tener que esperar a descargar los paquetes.

Algunos de los paquetes del sistema como el _kernel linux_, el gestor de arranque como _grub_ o _refind_ o el gestor del sistema como _systemd_ requieren realizar un reinicio del sistema para usar las nuevas versiones. Puede que solo queramos reiniciar el sistema al finalizar la sesión pero sin tener que esperar a que se descarguen la mayoría de los paquetes del repositorio que usemos. Dependiendo de la frecuencia con que actualicemos el sistema el tamaño de la descarga variará, en mi caso que suelo hacer una actualización cada dos semanas el tamaño total de la descarga ronda entre los 300 y 500 MiB.

Para descargar las bases de datos de paquetes usamos la opción `-y` y para realizar la actualización completa de los paquetes desactualizados que tengamos instalados con la opción `-u`. Poniendo el comando completo usando `pacman` o la alternativa `yaourt`:

{{< code file="pacman-update.sh" language="bash" options="" >}}

Si queremos actualizar las bases de datos de paquetes y descargar los paquetes a actualizar pero sin realizar la actualización añadimos simplemente la opción `-w` de tal forma que los comandos anteriores nos quedarían:

{{< code file="pacman-download.sh" language="bash" options="" >}}

Esta opción puede ayudarnos a ahorrarnos algo de tiempo cada vez que hagamos una actualización al evitarnos esperar a la descarga de los paquetes. En la página de [manual de pacman](https://www.archlinux.org/pacman/pacman.8.html) podemos ver la multitud de opciones que tenemos disponibles aunque como usuarios las anteriores serán las que más usemos.

{{< code file="pacman-man.sh" language="bash" options="" >}}

Si te interesa conocer cómo instalar Arch Linux recomiendo hacerlo antes en una máquina virtual con [VirtualBox][virtualbox] leyendo antes y siguiendo el [manual oficial](https://wiki.archlinux.org/index.php/Installation_guide), la [guía para principiantes](https://wiki.archlinux.org/index.php/Beginners'_guide) y para completarlo un artículo que escribí como [anexo a las guías oficiales][blogbitix-22] anteriores.

{{< reference >}}
* [Anexo a la guía de instalación y del principiante de Arch Linux][blogbitix-22]
* [De Windows a Arch Linux][elblogdepicodev-15]
* [De Arch Linux a Arch Linux][blogbitix-36]
{{< /reference >}}

{{% /post %}}
