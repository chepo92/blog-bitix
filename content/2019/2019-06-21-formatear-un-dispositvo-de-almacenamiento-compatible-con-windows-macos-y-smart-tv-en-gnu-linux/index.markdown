---
pid: 413
type: "post"
title: "Formatear un dispositivo de almacenamiento compatible con Windows, macOS y Smart TV en GNU/Linux"
url: "/2019/06/formatear-un-dispositivo-de-almacenamiento-compatible-con-windows-macos-y-smart-tv-en-gnu-linux/"
date: 2019-06-21T19:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Los dispositivos de almacenamiento se han de formatear con un sistema de archivos. Algunos de los sistemas de archivos están mejor soportados y son compatibles con una mayor número de sistemas y dispositivos, por tanto al formatear un dispositivo de almacenamiento ha de elegirse como sistema de archivos uno compatible, dependiendo del uso es más adecuado uno u otro. Para los dispositivos extraíbles la opción recomendable es exFAT o en su defecto NTFS o FAT."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" image3="gnome.svg" title3="GNOME" width3="200" >}}

Cada sistema operativo posee uno o varios formatos de sistemas de archivos que soporta de forma nativa. Así por ejemplo [Windows][windows] como sistema de archivos para el sistema se utiliza [NTFS](https://es.wikipedia.org/wiki/NTFS) y [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table), [FAT32](https://fr.wikipedia.org/wiki/FAT32) o [exFAT](https://es.wikipedia.org/wiki/ExFAT) para los medios extraíbles. En [GNU][gnu]/[Linux][linux] para el sistema se suele utilizar [ext4](https://en.wikipedia.org/wiki/Ext4). Y en [macOS][macos] se utiliza [HFS+](https://en.wikipedia.org/wiki/HFS_Plus) o [APFS](https://en.wikipedia.org/wiki/Apple_File_System). Cada unos posee unas propiedades y los más antiguos para evitar sus limitaciones han sido sustituidos por unos sistemas de archivos más modernos.

Los sistemas de archivos más compatibles son los que tradicionalmente se han utilizado por [Microsoft][microsoft] dada su amplia cuota de mercado en los sistemas de escritorio, estos son FAT y FAT32. Sin embargo, estos poseen unas limitaciones que no los hacen adecuados si el tamaño de los archivos superan los 4 GiB o la capacidad del sistemas de almacenamiento supera los 2 TiB, que son precisamente los límites máximos de FAT32. Para superar estas limitaciones Microsoft ha desarrollado exFAT como nuevo sistema de archivos para los medios extraíbles con unos límites de 16 EiB (16 x 1024 PiB x 1024 TiB, 16.6M TiB) para los tamaños de archivo y 64 ZiB (64 x 1024 EiB, 65536 EiB) para el sistema de alamcenamiento son unos límites varios órdenes de magnitud más grandes (y considerarse infinitos) que las capacidades de la tecnología actual (aunque al ritmo del avance de la tecnología puede que se llegue a ellos dentro de unas décadas).

En GNU/Linux puede utilizarse FAT32, NTFS y exFAT tanto en modo lectura como escritura, pero Windows solo permite sus propios formatos nativos y ha de utilizarse alguno de los anteriores, macOS soporta FAT en modo lectura y escritura, NTFS en modo lectura y para exFAT soporta también lectura y escritura. Otros dispositivos como _Smart TV_ suelen soportar alguno de los sistemas de archivos de Microsoft ya sea FAT32, NTFS y exFAT. Salvo que se quiera la máxima compatibilidad con FAT32 para con versiones antiguas de Windows o dispositivos con algunos años la opción más recomendable a usar es exFAT.

{{< youtube video="_h30HBYxtws" >}}

En GNU/Linux para formatear y utilizar particiones en NTFS hay que instalar el paquete [ntfs-3g](https://www.archlinux.org/packages/extra/x86_64/ntfs-3g/) y para exFAT el paquete [exfat-utils](https://www.archlinux.org/packages/community/x86_64/exfat-utils/), estos son los paquetes para [Arch Linux][archlinux] otras distribuciones tienen un paquete equivalente.

Para formatear una unidad ya sea una memoria USB o disco duro externo con formato exFAT en GNU/Linux con el entorno de escritorio [GNOME][gnome] se realiza con el programa _Discos_, aunque también es posible realizarlo desde la linea de comandos.

En la parte izquierda se encuentra los dispositivos conectados y reconocidos por el sistema. En mi caso el disco del sistema, un Samsung 970 EVO de 500 GB, un disco duro externo USB de 500 GB y una memoria USB de 16 GB sin ningún formato.

{{< image
    gallery="true"
    image1="image:gnome-disks-1.png" optionsthumb1="300x200" title1="Dispositivos de almacenamiento del sistema"
    caption="Unidades del sistema" >}}

Primero es importante identificar correctamente la unidad que se quiere formatear para no perder los datos al elegir por error otra. Se introduce el nombre del volumen que identifica al dispositivo y se elige el sistema de archivos, como opciones más comunes se ofrece ext4, NTFS y FAT pero pulsando en _Otro_ aparecen más, entre ellos exFAT. Pulsando el botón _Siguiente_ al cabo de unos segundos la partición queda formateada con exFAT y lista para usarse tanto en GNU/Linux como en Windows, macOS o un Smart TV.

{{< image
    gallery="true"
    image1="image:gnome-disks-2.png" optionsthumb1="200x150" title1="Formatear dispositivo de almacenamiento"
    image2="image:gnome-disks-3.png" optionsthumb2="200x150" title2="Formatear dispositivo de almacenamiento"
    image3="image:gnome-disks-4.png" optionsthumb3="200x150" title3="Formatear dispositivo de almacenamiento"
    caption="Formatear dispositivo de almacenamiento" >}}

No está de más recordar que en el caso de desechar un dispositivo de almacenamiento es recomendable hacerle un formateo completo para que los datos que contenga no sean accedidos por la persona a la que se le entregue el dispositivo ya que incluso se pueden [recuperar datos previamente eliminados incluso en una unidad corrupta][blogbitix-125]. Por otro lado en GNU/Linux si se desea mayor seguridad se puede cifrar la partición con la opción LUKS.

{{% /post %}}
