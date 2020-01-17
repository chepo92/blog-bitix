---
pid: 367
type: "post"
title: "Monitorizar procesos que realizan lectura o escritura al almacenamiento en GNU/Linux"
url: "/2018/12/monitorizar-procesos-que-realizan-lectura-o-escritura-al-almacenamiento-en-gnu-linux/"
date: 2018-12-17T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" image3="firefox.svg" >}}

Hoy día los precios de los SSD son asequibles y a cada mes que pasa su coste por GB se reduce de forma significativa, son mucho más rápidos que un disco duro mecánico y es una de las mejores mejoras que se le pueden hacer a un ordenador para aumentar el rendimiento si el problema es la tasa de transferencia del almacenamiento. El sistema se inicia mucho más rápido, en segundos en vez de minutos, y las aplicaciones también tardan mucho menos en cargarse. Cambiar a un SSD significa aumentar el rendimiento notablemente y parecer que se tiene equipo nuevo.

Aunque los SSD son muchísimo más rápidos que los discos duros mecánicos tradicionales tanto en lectura como en escritura adolecen de un tiempo de vida de unos 1000 ciclos de escritura por cada celda. Aunque 1000 ciclos de escritura pueden parecer pocos son más que suficientes para que el disco SSD y equipo se quede obsoleto antes de que pueda fallar según el ritmo al que avanza la tecnología. Aunque en un principio no debamos preocuparnos demasiado de la fiabilidad no está demás cuidarlo en lo posible.

Según Samsung la cantidad de datos que se pueden escribir en un [860 EVO](https://www.samsung.com/semiconductor/minisite/ssd/product/consumer/860evo/) y [970 EVO](https://www.samsung.com/es/memory-storage/ssd-970-evo/MZ-V7E500BW/) son según la capacidad 250, 500 GB y 1 TB de 150 TBW, 300 y 600 respectivamente (TBW = Terabytes escritos, 1 TB = 1000 GB). La esperanza de vida estimada antes de que se empiecen a producir fallos para el SSD de 250 GB es de de unos 20 años estimando unos 20 GB de escritura al día (150 TBW * 1000 GB/TB / (20 GB * 365 dias/año), en ese tiempo el equipo se quedará obsoleto y el coste del almacenamiento se habrá reducido significativamente.

Para cuidar el SSD hay que conocer la cantidad de datos que se están escribiendo en la unidad. En [GNU][gnu]/[Linux][linux] es sencillo, el siguiente comando da la cantidad de datos en megabytes leídos y escritos desde que que se ha encendido el sistema.

{{< code file="awk-uptime-writes.sh" language="bash" options="" >}}

En este caso se han escrito 326 MB en el dispositivo _nvme0n1p2_ que corresponde a la partición _root_ en una hora de actividad del sistema realizando tareas ofimáticas y de navegación.

{{< image
    gallery="true"
    image1="image:awk.png" optionsthumb1="300x200" title1="Datos escritos al almacenamiento desde el inicio del sistema"
    caption="Datos escritos al almacenamiento desde el inicio del sistema" >}}

También es interesante conocer los datos escritos en la unidad en total desde su instalación, en realidad lo siguiente nos dará los GiB escritos desde la creación de la partición, si se han hecho varios particionados no será el total del tiempo de vida de la unidad. Al usar LVM on LUKS el nombre que Linux le a la unidad en mi caso es _dm-1_, según la configuración del sistema otro nombre que se le asigna es _sda2_. En esta captura de 129 GB.

{{< code file="awk-lifetime-writes.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:awk-lifetime.png" optionsthumb1="300x200" title1="Datos escritos a una partición"
    caption="Datos escritos a una partición" >}}

Después de [comprar un Intel NUC junto con SSD][blogbitix-363] e instalarle [Arch Linux][archlinux] me he dado cuenta que de forma periódica, cada 5 o 10 segundos, parpadea la luz de actividad del disco duro (o simplemente almacenamiento al tener un SSD) sin hacer ninguna actividad salvo tener algunas aplicaciones abietas. He instalado _iotop_ para descubrir el origen de esta actividad y he encontrado dos. Por un lado [Firefox][firefox], varios procesos de él, y otro proceso del sistema _jdb2-dm-1-8_ que corresponde al _journaling_ del sistema de archivos. La opción _-a_ de iotop muestra la cantidad de E/S en la sesión por proceso y la opción _\-\-only_ solo aquellos que han realizado E/S.

{{< code file="iotop.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:iotop.png" optionsthumb1="300x200" title1="Datos escritos por procesos del sistema"
    caption="Datos escritos por procesos del sistema" >}}

Investigando sobre los motivos de escritura de Firefox he encotrado algunos artículos y tres recomendaciones a cambiar en la configuración de Firefox para optimizar su uso en unidades SSD.

* [Firefox writes megabytes of data per minute to disk, why?](https://superuser.com/questions/399473/firefox-writes-megabytes-of-data-per-minute-to-disk-why)
* [Optimizar Firefox para SSD](https://pringao.com/optimizar-firefox-para-ssd/)

Las opciones a cambiar en la configuración son:

* _browser.sessionstore.interval_: para recuperar las pestañas abiertas en caso de cierre inesperado Firefox las guarda en disco cada cierto tiempo, por defecto 15000 ms o 15 segundos que es un tiempo muy bajo y que ocasiona escrituras al disco constantemente.
* _browser.cache.disk.enable_: para no realizar tŕafico de red en un futuro los recursos ya descargados como imágenes, archivos de estilo o _javascript_ los almacena en una caché en el disco. Evita tráfico de red y mejora el rendimiento pero la caché ocupa espacio en disco y ocasiona escrituras. Cambiando el valor de esta propiedad a _false_ se inhabilita la cache y las escrituras.
* _browser.cache.memory.capacity_: para no perder la funcionalidad de la cache al menos en una sesión si se dispone de memoria RAM suficiente se puede activar una cache en memoria. Esta opción indica en KiB el espacio reservado para esa caché. Un valor de 307200 (300 * 1024) corresponde a 300 MiB de caché en memoria. Aún teniendo una cache de sesión y en memoria no he notado diferencia velocidad de carga en las páginas al navegar aún usando ADSL. Esa opción se ha de crear de tipo entero.

Estas opciones se cambian el la sección de configuración de Firefox introduciendo _about:config_ en la barra de direcciones.

{{< image
    gallery="true"
    image1="image:firefox-config-1.png" optionsthumb1="300x200" title1="Configuración de Firefox optimizado para SSD"
    image2="image:firefox-config-2.png" optionsthumb2="300x200" title2="Configuración de Firefox optimizado para SSD"
    caption="Configuración de Firefox optimizado para SSD" >}}

Con la configuración por defecto y cambiando estas opciones esta es la diferencia de los procesos de Firefox que causan E/S después de un tiempo de uso. Por defecto se observa que hay un proceso relacionado que debe estar relacionado con la caché a raíz de su nombre que escribe en el almacenamiento y cambiadas las opciones solo los procesos _mozStorage_ escriben, estos procesos están relacionados con las _cookies_ y almacenamiento local o bases de datos que los navegadores ofrecen a las páginas web pero los procesos relacionados con la caché han desaparecido. La cantidad de datos escritos con las opciones por defecto y cambiadas son significativamente menores en el mismo periodo de tiempo.

Dado que la caché ocasiona escrituras en el almacenamiento el proceso de _journaling_ del sistema también realiza escrituras amplificando el problema. Con Firefox optimizado para SSD el proceso _firefox [Cache2 I/O]_ desaparece y al escribir la sesión no cada 15 segundos Firefox deja de escribir de forma regular. [Google Chrome][google-chrome] no ofrece estas opciones de personalización.

{{< image
    gallery="true"
    image1="image:firefox-default.png" optionsthumb1="300x200" title1="Entrada y salida con las opciones de Firefox por defecto"
    image2="image:firefox-ssd.png" optionsthumb2="300x200" title2="Entrada y salida con opciones de Firefox optimizadas para SSD"
    caption="Entrada y salida de Firefox por defecto y optimizado para SSD" >}}

En el entorno de escritorio [GNOME][gnome] con la aplicación _Monitor del sistema_ es posible ver la cantidad de datos escritos por un proceso en total y en tiempo real.

{{< image
    gallery="true"
    image1="image:gnome-monitor-del-sistema.png" optionsthumb1="300x200" title1="Monitor del sistema de GNOME"
    caption="Monitor del sistema de GNOME" >}}

Dado que los SSD no hacen ruido no se ha pedido la alerta sonora del «rascar» del disco cuando algún programa está escribiendo o leyendo de forma intensiva y por ello quizá no nos demos cuenta de que algún programa está teniendo un mal comportamiento y esté escribiendo muchos datos al SSD, peor aún si el sistema ni siquiera dispone de este LED de actividad.

Para visualizar el uso del disco de forma constante [en GNOME hay una extensión que hace de monitor del sistema](https://extensions.gnome.org/extension/120/system-monitor/) que agregará en la barra superior un área de estado visible en todo momento en la que se puede ver la información del estado del sistema, entre esa información se puede visualizar la cantidad de lectura y escritura que está realizando al almacenamiento.

{{< image
    gallery="true"
    image1="image:gnome-extension-system-monitor.png" optionsthumb1="300x200" title1="Extensión de GNOME de monitor del sistema"
    caption="Extensión de GNOME de monitor del sistema" >}}

{{% /post %}}
