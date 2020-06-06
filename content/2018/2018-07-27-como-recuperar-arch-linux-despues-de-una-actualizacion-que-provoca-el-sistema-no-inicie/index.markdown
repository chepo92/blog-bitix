---
pid: 335
type: "post"
title: "Como recuperar Arch Linux después de una actualización que provoca el sistema no inicie"
url: "/2018/07/como-recuperar-arch-linux-despues-de-una-actualizacion-que-provoca-el-sistema-no-inicie/"
date: 2018-07-27T16:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
summary: "Instalar un sistema GNU/Linux es sencillo y está muy bien, también es importante saber como intentar recuperarlo cuando una actualización de software provoca que el sistema no se inicie con normalidad hasta el entorno de escritorio gráfico, el motivo puede ser incluso un _kernel panic_. El objetivo de la recuperación es corregir el problema del inicio, si no es posible, recuperar los valiosos documentos, imágenes, vídeos u otros archivos antes de finalmente llegar al punto de reinstalar el sistema para devolverlo a un estado correcto aunque quizá perdiendo los datos que tuviese."
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" >}}

Estás contento con [Arch Linux][archlinux] y en gran medida despreocupado de las versiones de las aplicaciones ya que sabes que al ser una distribución _rolling release_, siempre tienes la última versión de todos los paquetes cada vez que haces una actualización completa del sistema. Un día realizas la periódica actualización o has visto una nueva versión de un paquete ya sea una nueva versión del [kernel](https://www.archlinux.org/packages/core/x86_64/linux/) o [mesa](https://www.archlinux.org/packages/extra/x86_64/mesa/) que pueden contener importante mejoras en el sistema gráfico que quieres aprovechar o una nueva versión de una aplicación con nuevas características relevantes como podría se [LibreOffice](https://www.archlinux.org/packages/extra/x86_64/libreoffice-fresh/) o [VLC](https://www.archlinux.org/packages/extra/x86_64/vlc/). Inicias la actualización del sistema como tantas otras veces has hecho. Termina aparentemente bien con todos los paquetes actualizados y sin ningún mensaje de error. Reinicias el equipo para que la actualización de algunos paquetes tengan efecto como el caso del _kernel_. Sin embargo, ¡sorpresa! el sistema no inicia como normalmente, no llega al inicio de sesión del entorno de escritorio ni siquiera tienes acceso a una terminal basada en consola, el error parece un [_kernel panic_](https://es.wikipedia.org/wiki/Kernel_panic). Reinicias una segunda vez, el mismo error. Parece que está todo perdido, piensas en los importantes archivos que tienes en el sistema de almacenamiento persistente, disco duro o SSD, ¡no tienes una copia completamente reciente!, el corazón te empieza a latir con fuerza.

Por suerte, habiendo estado usando Arch Linux de forma ininterrumpida durante los 8 años esto solo me ha pasado una vez y por culpa mía después de actualizar [Grub](https://www.archlinux.org/packages/core/x86_64/grub/) al ejecutar un comando erróneo, durante todos esos años he tenido importantes actualizaciones como varias versiones de [GNOME](https://www.archlinux.org/groups/x86_64/gnome/), [systemd](https://www.archlinux.org/packages/core/x86_64/systemd/) y el _kernel_. El caso era el que he descrito anteriormente, el sistema no iniciaba dado que Grub es de las primeras cosas necesarias para iniciar el sistema cualquier problema en él origina esta situación. Otros paquetes de especial importancia son el _kernel_, los controladores gráficos, _mesa_, systemd, una nueva versión del entorno de escritorio, ... Por una actualización a una nueva versión de VLC el sistema no va a dejar de iniciarse al lo sumo será VLC el que no inicie y es de más sencillo de solucionar volviendo a una versión anterior correcta con [un simple _downgrade_ de paquete][blogbitix-66].

Antes de una actualización conviene revisar los paquetes que se van a actualizar y fijarse en los especialmente sensibles como he comentado, también conviene estar suscrito al [_feed_ de noticias de Arch][archlinux-feed-news], a veces la actualización del sistema requiere una intervención manual y en ese _feed_ siempre comentan los detalles y en qué consiste la intervención manual incluso ponen los comandos necesarios a ejecutar. Para que el daño sea el menor posible en caso de completo desastre es imprescindible hacer copias de seguridad de forma regular, una cosa es un fallo de software otra es un fallo de hardware que si se produce en la unidad de almacenamiento los datos es muy posible que queden irrecuperables. Los fallos en el hardware no son tan extraños, el hardware es reemplazable por un módico precio pero los datos no, por todo ¡haz copias de seguridad regularmente! Avisado estás.

De modo que saber cómo recuperar el sistema es algo necesario llegado el caso. En Arch Linux la forma que conozco es usando una imagen de instalación de Arch Linux y montar el sistema de archivos para hacer las modificaciones necesarias para recuperar el sistema que es probable que consistan en desactualizar paquetes por versiones anteriores. Dependiendo de los mensajes de error que proporcione el sistema en el inicio fallido las acciones a realizar para arreglarlo serán unas u otras, seguramente en los [foros de Arch Linux][archlinux-forums] otros usuarios ya hayan pedido ayuda con el mismo o parecido error.

Los comandos concretos para montar el sistema de archivos depende de la configuración propia: de las particiones creadas, de si se está utilizando LVM o de si se está usando cifrado. Cuando escribí el [Script para instalar Arch Linux fácil, rápido, desatendido, automatizado y personalizable][blogbitix-204] pensé al mismo tiempo en el caso de uso de una hipotética recuperación, escribí un [_script_ para iniciar la recuperación](https://github.com/picodotdev/alis/blob/master/alis-recovery.sh).

Una vez iniciado el sistema con la imagen ISO de instalación de Arch Linux este _script_ contiene los comandos para iniciar la recuperación, los pasos de su uso son los siguientes:

{{< code file="alis-recovery-start.sh" language="bash" options="" >}}

En el paso _vim alis-recovery.conf_ se modifica la configuración según el sistema a recuperar. Básicamente se dice en qué unidad está el sistema de archivos de Arch Linux, si utiliza LVM y está cifrado. El _script_ de recuperación está adaptado al propio _script_ de instalación, no cubre la infinidad de casos personalizados que cada usuario por su cuenta puede realizar o existir pero sirve en cualquier caso como guía de cómo iniciar la recuperación.

El contenido completo del propio _script_ de recuperación es el siguiente, no es más que un _script_ de [bash][bash] con los mismos comandos que serían necesarios para realizar la recuperación manualmente de forma interactiva.

{{< code file="alis-recovery.sh" language="bash" options="" >}}

{{< sourcecode git="alis/tree/master/" >}}

{{% /post %}}
