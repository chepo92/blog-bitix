---
pid: 125
type: "post"
title: "Cómo recuperar archivos eliminados o de una unidad corrupta en GNU/Linux"
url: "/2016/02/como-recuperar-archivos-eliminados-o-de-una-unidad-corrupta-en-gnu-linux/"
date: 2016-02-12T19:30:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "seguridad", "software-libre"]
summary: "Muchos archivos y su contenido son recuperables aún después de eliminados y liberado su espacio ocupado del sistema de archivos. Herramientas como Foremost son capaces de recuperar el contenido de un archivo si no ha sido sobreescrito accediendo a bajo nivel a los datos de la unidad, ya esté corrupta y de algún error al montarla o funcione perfectamente. Pudiendo extraer una imagen de la unidad seremos capaces de recuperar gran cantidad de archivos motivo por el cual al deshacernos de una unidad de almacenamiento es recomendable hacer un borrado seguro para evitar que información personal o confidencial sea obtenida con cualquier propósito."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Hace un tiempo me ocurrió que una memoria USB por algún motivo no se montaba bien ni en un sistema Windows ni tampoco en un sistema Linux. El _pendrive_ estaba formateado con el sistema de archivos NTFS y quizá por haberlo desmontado mal se corrompió.

Por suerte en GNU/Linux disponemos de cantidad de herramientas y programas que nos ayudan en prácticamente cualquier cosa. En este caso de una memoria que no se dejaba montar buscando algún enlace en la [wiki de Arch Linux][archlinux-wiki] relacionado con la recuperación de datos encontré en poco tiempo el artículo sobre [Foremost](https://wiki.archlinux.org/index.php/Foremost), siendo un programa que puede ayudarnos a recuperar al menos parte de los datos que tuviésemos guardados. Si la unidad no está dañada físicamente y podemos extraer una imagen de la misma Foremost puede acceder a bajo nivel a las estructuras de datos de la imagen de la unidad. Foremost puede trabajar directamente sobre la unidad dañada o con una imagen, esto último es lo recomendable para evitar corromper los datos y dañar más gravemente la unidad al usarla. Si podemos extraer una imagen de la unidad es buen síntoma de que la unidad no ha dejado de funcionar completamente y tal vez se trate solo de un error lógico en la unidad y no físico pudiendo tal vez recuperarla con un formateo.

El error en concreto al montarlo en mi sistema [Arch Linux][archlinux] era el siguiente:

{{< code file="error.log" language="plaintext" options="" >}}

Podemos extraer una imagen de una unidad con el comando <code>dd</code>, el parámetro _if_ será la unidad de entrada y el parámetro _of_ la imagen que se creará en un archivo:

{{< code file="dd.sh" language="bash" options="" >}}

Una vez que disponemos de la imagen en un archivo en un sistema libre de fallos usaremos Foremost para que intente recuperar los archivos que no han sido completamente corrompidos por el error. Indicamos la imagen del archivo extraída con el parámetro _-i_ y la carpeta donde dejará los archivos recuperados con el parámetro _-o_ agrupados en directorios por tipo, con el parámetro _-t_ indicamos los tipos de archivos que queremos recuperar de entre todos los que pueda (doc, docx, pdf, jpg, png, txt, ...).

{{< code file="foremost.sh" language="bash" options="" >}}

Si tenemos suerte con Foremost recuperaremos gran parte de ellos y evitaremos perderlos para siempre. En la wiki de Arch Linux hay una [guía con consejos y explicaciones de como proceder en la recuperación de archivos](https://wiki.archlinux.org/index.php/file_recovery).

Una vez que recuperé los archivos y viendo que pude extraer una imagen de la unidad probablemente en mi caso el error sería que se corrompió la unidad quizá por no extraerla de forma segura desde Windows. Por lo tanto la volví a formatear e hice algunas pruebas copiando varios archivos, se copiaron sin dar ningún error así que al final conseguí recuperar incluso la unidad.

Esto mismo es aplicable a una unidad que funcione correctamente, un archivo y su contenido es recuperable aún después de ser eliminado incluido de la papelera, con más probabilidad si la unidad no tiene muchas escrituras o una buena cantidad de espacio libre ya que por defecto únicamente se elimina de las estructuras del sistema de archivos y el contenido sigue estando presente simplemente no referenciado.

Para hacer irrecuperable el contenido de un archivo hay que hacer un [borrado seguro de un archivo con el comando <code>wipe</code> o de una unidad con <code>dd</code>][blogbitix-130] que consiste en sobreescribir el contenido del archivo con datos aleatorios, otra alternativa es [cifrar el sistema de archivos][blogbitix-128]. Es recomendable hacerlo cuando sustituyamos y nos deshagamos un disco duro o unidad de almacenamiento porque muchos de los archivos son recuperables incluido después de un formateo rápido de la unidad.

Te sorprenderá la cantidad de archivos que son recuperados por Foremost: documentos, imágenes, archivos de texto, ...

{{< reference >}}
* [Cifrar archivos con EncFS en GNU/Linux][blogbitix-126]
* [Cifrar unidad USB completamente con dm-crypt y LUKS en GNU/Linux][blogbitix-128]
* [Cómo eliminar de forma segura archivos con wipe en GNU/Linux][blogbitix-130]
* [Foremost](https://wiki.archlinux.org/index.php/Foremost)
* [File recovery](https://wiki.archlinux.org/index.php/file_recovery)
* [Wipe](http://linux.die.net/man/1/wipe)
* [Securely Wipe Disk](https://wiki.archlinux.org/index.php/Securely_wipe_disk)
* [Disk encryption](https://wiki.archlinux.org/index.php/Disk_encryption)
{{< /reference >}}

{{% /post %}}
