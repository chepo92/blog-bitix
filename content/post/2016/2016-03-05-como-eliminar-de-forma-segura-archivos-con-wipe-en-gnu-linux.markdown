---
pid: 130
title: "Cómo eliminar de forma segura archivos con wipe y dd en GNU/Linux"
url: "/2016/03/como-eliminar-de-forma-segura-archivos-con-wipe-y-dd-en-gnu-linux/"
date: 2016-03-05T12:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
tags: ["blog-stack", "gnu-linux", "planeta-codigo", "planeta-linux", "seguridad", "software-libre"]
summary: "Eliminar archivos del sistema de ficheros no basta para destruir la información que contuvieran. Con herramientas como _Foremost_ su contenido puede ser recuperado, por ello cuando desechamos una unidad de almacenamiento (disco duro, memoria USB, targeta SD, SSD) conviene hacer un borrado seguro de la unidad, si trabajamos con información sensible quizá queramos hacer un borrado seguro de los archivos que eliminemos. Con el comando <code>wipe</code> podemos borrar archivos individuales y con el comando <code>dd</code> una unidad completa."
---

{{% post %}}
{{< links >}}
{{< postslinks >}}

{{< logotype image1="gnu.svg" title1="GNU" width1="200" image2="linux.svg" title2="Linux" wdth2="200">}}

Aunque los eliminemos su contenido permanece en el sistema de archivos que con herramientas como [Foremost](https://wiki.archlinux.org/index.php/Foremost) pueden recuperarse. Esto es debido a que cuando se elimina un archivo realmente lo que se hace es liberar el espacio ocupado, el contenido mientras no se sobreescriba por el de otro nuevo archivo sigue estando presente en el dispositivo de almacenamiento. Para eliminar de forma segura tal que no sea posible recuperar ni con herramientas como Foremost un archivo del sistema de almacenamiento hay que hacer un borrado seguro del archivo o de la unidad completa, proceso que consiste en sobreescribir la información con datos aleatorios.

Esto es necesario o recomendable si trabajamos con información sensible como datos personales, contraseñas, claves, ... o si nos deshacemos de la unidad de almacenamiento USB, tarjeta de memoria, disco duro o SSD. En el artículo [Cómo recuperar archivos con Foremost][blogbitix-125] explico cómo recuperar información que podríamos considerar destruida, en mi experiencia aún habiendo eliminado los archivos usando las facilidades del propio entorno de escritorio se puede recuperar el contenido completo de bastantes de los archivos originales sobre todo si la unidad tiene bastante espacio libre y no ha tenido un uso excesivo.

En GNU/Linux para eliminar archivos de forma segura disponemos del [comando <code>wipe</code>](http://linux.die.net/man/1/wipe) que en [Arch Linux][archlinux] su [paquete](https://www.archlinux.org/packages/extra/x86_64/wipe/) se encuentra en el repositorio Extra. Su uso es el siguiente, la opción _-r_ hace un borrado recursivo de un directorio por lo que hay que usarla con cuidado y la opción _-q_ hace un borrado rápido sobreescribiendo únicamente 4 veces el contenido del archivo con datos aleatorios, finalmente se indica la ruta del archivo o directorio a eliminar de forma segura. Con otras opciones se puede afinar el comportamiento de borrado.

{{< gist picodotdev 82d1ae97b6f784740de5 "wipe.sh" >}}

Para destruir la información de forma completa con datos aleatorios de una unidad de almacenamiento podemos usar el [comando <code>dd</code>](http://linux.die.net/man/1/dd), deberemos sustituir la _X_ por el identificador adecuado asignado a la unidad que podemos obtener con el comando <code>blkid</code>:

{{< gist picodotdev 82d1ae97b6f784740de5 "dd.sh" >}}

Como se indica en la [documentación de _wipe_](http://manpages.ubuntu.com/manpages/lucid/man1/wipe.1.html) todavía puede ser posible recuperar archivos por el sistema de registro o _journaling_ de los sistemas de archivos modernos en los que algunos datos pueden escribirse en el sistema de registro, también se comenta alguna noción más a tener en cuenta en cuanto a la seguridad.

Hacer una eliminación segura con el comando <code>wipe</code> o uno similar dificulta la recuperación de información pero no es infalible. Una solución recomendada es [cifrar completamente el sistema de archivos][blogbitix-128]. Aún no cifrando completamente el sistema de archivos podemos [usar _encfs_ para cifrar determinados archivos][blogbitix-126] para proteger la información.

Aunque si queremos asegurarnos de que la información sea verdaderamente irrecuperable de una unidad otro buen método es usar un martillo como saben en alguna organización política.

{{% reference %}}
{{< links >}}
{{< postslinks >}}
* [Cómo recuperar archivos eliminados o de una unidad corrupta en GNU/Linux][blogbitix-125]
* [Cifrar archivos con EncFS en GNU/Linux][blogbitix-126]
* [Cifrar unidad USB completamente con dm-crypt y LUKS en GNU/Linux][blogbitix-128]
* [comando <code>wipe</code>](http://linux.die.net/man/1/wipe)
* [comando <code>dd</code>](http://linux.die.net/man/1/dd)
* [Securely wipe disk](https://wiki.archlinux.org/index.php/Securely_wipe_disk)
* [Disk encryption](https://wiki.archlinux.org/index.php/Disk_encryption)
{{% /reference %}}

{{% /post %}}
