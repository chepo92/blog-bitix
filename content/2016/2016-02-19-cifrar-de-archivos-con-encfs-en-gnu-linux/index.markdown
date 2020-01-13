---
pid: 126
type: "post"
title: "Cifrar archivos con EncFS en GNU/Linux"
url: "/2016/02/cifrar-archivos-con-encfs-en-gnu-linux/"
aliases: ["/2016/02/cifrado-de-archivos-con-encfs-en-gnu-linux/"]
date: 2016-02-19T20:00:00+01:00
updated: 2016-02-22T21:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "seguridad", "software-libre"]
summary: "Hacer copias de seguridad es una buena práctica para evitar perder información en caso de que por ejemplo un disco duro se nos estropee. Cifrar la información o al menos parte de ella como las contraseñas (si las guardamos en un archivo de texto) también es una buena práctica por si perdemos una memoria USB, nos roban en un lugar público o en nuestro domicilio un disco duro o un portátil o los extraviamos en algún viaje. Una forma sencilla para proteger su contenido cifrando múltiples archivos es EncFS."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Nuestros datos es una de las cosas más importantes que podemos perder o nos pueden robar, más que el dispositivo que los contiene ya que este es fácilmente reemplazable no así los datos. La pérdida de datos puede ser porque se nos ha estropeado el disco duro y ha quedado completamente inaccesible, para evitar la pérdida de datos conviene [realizar copias de seguridad][elblogdepicodev-156] regularmente de las que recuperar los datos perdidos en caso de necesidad. También nos puede ocurrir que perdamos una memoria USB o peor aún nos roben en nuestro propio domicilio y nos extraigan entre otras cosas el portátil o un disco duro. Los productos de electrónica son objetivos apreciados por los ladrones por su valor, por su demanda que los hacen fácilmente colocables en el mercado y por su poco volumen.

En GNU/Linux podemos proteger nuestros datos de múltiples formas de una memoria USB, de un portátil o disco duro externo. Una de ellas es [cifrando completamente el sistema de archivos][blogbitix-128] con lo que todos los datos que contuviese estarán protegidos. Otra forma es [cifrar ciertos archivos con información sensible con GPG][elblogdepicodev-181] como contraseñas, una solución menos invasiva y más compatible con otros sistemas que cifrar completamente el sistema de archivos, no muy complicada pero en la que debemos cifrar cada archivo individualmente. Para evitar cifrar/descifrar cada archivo individualmente y manualmente con GPG podemos usar [EncFS](https://wiki.archlinux.org/index.php/EncFS). EncFS es un sistema de archivos que podemos montar y cifrará el contenido de todos los archivos que incluyamos en él.

Con EncFS el contenido de los archivos y sus nombres serán cifrados aunque su tamaño, fechas de modificación y estructura de carpetas seguirá siendo visible. Aunque sin sus nombres originales el tamaño, fechas y estructura de carpetas ya es algo indicativo y por tanto para algunas necesidades no es suficiente la seguridad que proporciona.

Para usar EncFS debemos instalar su paquete, en [Arch Linux][archlinux] con:

{{< code file="pacman.sh" language="bash" options="" >}}

Instalado el paquete y con el comando <code>encfs</code> indicamos el directorio donde se almacenará el sistema de archivos cifrado y el directorio donde EncFS montará el sistema de archivos sin cifrar, la primera vez que lo usemos nos pedirá la contraseña con la que el sistema de archivos se cifrará que deberemos recordar ya que nos la pedirá cada vez que montemos el sistema de archivos cifrado.

{{< code file="encfs.sh" language="bash" options="" >}}
{{< asciinema id="36852" caption="Inicialización y montaje de un sistema de archivos cifrado para su uso con EncFS" >}}

Montado el sistema de archivos veremos que en el explorador de archivos se ha montado una unidad con el nombre del directorio sin cifrar que hemos indicado, como se aprecia en el caso de Nautilus.

{{< image
    gallery="true"
    image1="image:sistema-archivos-descifrados.png" optionsthumb1="300x200" title1="Sistema de archivos montado y descifrado" >}}

La opción _-f_ sirve para usar EncFS en primer plano, si lo usamos de esta forma se quedará esperando hasta que lo finalicemos con _Ctrl-C_ momento en el que desmontará automáticamente la unidad. Cuando queramos desmontar el sistema de archivos otra opción es el siguiente comando:

{{< code file="fusermount.sh" language="bash" options="" >}}

Montado el sistema de archivos en primer o segundo plano podremos trabajar con los archivos normalmente y EncFS irá cifrando su contenido y nombres de archivos de forma transparente en el directorio de archivos cifrados. Añadiendo algún archivo este podría ser el contenido del directorio de archivos cifrados.

{{< image
    gallery="true"
    image1="image:sistema-archivos-cifrados.png" optionsthumb1="300x200" title1="Sistema de archivos cifrado" >}}

Por supuesto, el contenido de un archivo cifrado será completamente ininteligible consiguiendo nuestro objetivo de que nuestros datos estén a salvo y protegidos.

{{< image
    gallery="true"
    image1="image:contenido-archivo-descifrado.png" optionsthumb1="300x200" title1="Contenido de un archivo de texto"
    image2="image:contenido-archivo-cifrado.png" optionsthumb2="300x200" title2="Contenido del archivo de texto cifrado" >}}

En el [artículo de EncFS de la wiki de Arch Linux](https://wiki.archlinux.org/index.php/EncFS) está muy bien explicado con alguna información más sobre esta forma de proteger la preciada información personal que poseemos en diversas formas de documentos, imágenes, fotos, vídeos, música y otros formatos.

{{< reference >}}
* [Cómo recuperar archivos eliminados o de una unidad corrupta en GNU/Linux][blogbitix-125]
* [Cifrar unidad USB completamente con dm-crypt y LUKS en GNU/Linux][blogbitix-128]
* [Cómo eliminar de forma segura archivos con wipe en GNU/Linux][blogbitix-130]
* [Artículo de EncFS de la wiki de Arch Linux](https://wiki.archlinux.org/index.php/EncFS)
{{< /reference >}}

{{% /post %}}
