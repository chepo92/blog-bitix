---
pid: 156
type: "post"
title: "Comandos básicos de GNU/Linux"
url: "/2016/07/comandos-basicos-de-gnu-linux/"
date: 2016-07-03T12:00:00+02:00
updated: 2016-07-10T10:00:00+02:00
expiryDate: 2020-06-02T23:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
series: ["terminal"]
summary: "Conociendo los comandos y sus opciones podemos realizar una tarea que nos ahorre una gran cantidad de tiempo si lo hubiésemos hecho manualmente o con una interfaz gráfica. La parte GNU de las mayoría distribuciones Linux proporcionan una buena cantidad de comandos útiles interesantes de conocer que están a nuestra disposición para cuando los necesitemos."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

El proyecto <abbr title="GNU Is Not Unix">[GNU][gnu]</abbr> promovido por la <abbr title="Free Software Foundation">[FSF][fsf]</abbr> y que se usa en la mayoría de las distribuciones Linux proporciona muchos comandos útiles. Las más modernas interfaces gráficas no superan a la línea de comandos para realizar las tareas de forma rápida, directa y con la posibilidad de automatización. Conociendo las [combinaciones de teclas de nuestro emulador de terminal y del intérprete de comandos][blogbitix-150] dominaremos aún más el uso de la consola, también mejoraremos si conocemos las posibilidades que ofrece un [intérprete de comandos como bash](https://www.gnu.org/software/bash/manual/bashref.html).

En la colección de [utilidades que forman el núcleo de GNU](https://www.gnu.org/software/coreutils/manual/coreutils.html) hay una lista completa junto con su documentación. A continuación una lista no exhaustiva de algunos comandos que disponemos pero son de los más utilizados (algunos más que otros) que tengamos que usar directamente o en _scripts_ de bash. En orden alfabético.

* `apropos`: muestra una lista de comandos relacionados con una palabra.
* `at`: programa una tarea a una determinada hora.
* `cal`: emite en la terminal un calendario.
* `cat`: concatena archivos y emite sus contenidos en la salida.
* `cd`: cambia el directorio de trabajo actual de la terminal.
* `chgrp`: cambia el grupo propietario del archivo.
* `chmod`: cambia los permisos del archivo.
* `chown`: cambia el usuario propietario del archivo.
* `cp`: copia el contenido de un fichero a otro nuevo o sobrescribiendo uno existente.
* `date`: muestra la fecha del sistema.
* `df`: muestra el uso del disco.
* `du`: estima el espacio usado por los archivos.
* `echo`: emite un mensaje en la salida.
* `find`: busca archivos en la jerarquía de directorios.
* `free`: muestra el estado de la memoria del sistema.
* `grep`: aplica expresiones regulares al contenido y filtra las que que no la cumplen.
* `head`: muestra el principio del contenido.
* `history`: lista el historial de comandos introducidos con anterioridad.
* `htop`: monitor de procesos similar a _top_ un poco más avanzado y más personalizable.
* `kill`: envía una señal a un proceso, por ejemplo de terminación.
* `less`: permite el movimiento adelante y atrás del contenido a visualizar cuando es más grande que el tamaño de la terminal.
* `ln`: crea enlaces simbólicos.
* `lsblk`: lista los dispositivos de bloques.
* `ls`: lista ficheros y directorios del sistema de ficheros. Con diferentes opciones podremos visualizar además de los nombres más información como permisos, fecha de última modificación y tamaño.
* `man`: muestra la página de manual de un comando. En las páginas de manual incluye una descripción de lo que hace el comando, sus opciones, parámetros y en algunos casos ejemplos de uso.
* `md5sum`: calcula el _hash_ _md5_ de un contenido.
* `mkdir`: crea un directorio opcionalmente con toda la ruta de carpetas hasta él si no existen.
* `mv`: renombra un archivo y/ lo cambia de directorio.
* `printf`: formatea un mensaje y lo emite en la salida.
* `ps`: lista los procesos del sistema e información relacionada.
* `pwd`: emite en la salida el directorio actual de trabajo.
* `rmdir`: elimina un directorio
* `sha1sum`: calcula el _hash_ _sh1_ de un contenido.
* `shuf`: emite las líneas de entrada en la salida de forma aleatoria.
* `sort`: ordena líneas de texto.
* `tail`: muestra el final del contenido pudiendo verlo en tiempo real cuando se añade más. Útil para monitorizar la salida de un archivo de trazas.
* `tar`: guarda varios archivos en uno solo.
* `tmux`: permite ver varias terminales dividiendo el área disponible verticalmente u horizontalmente, desconectarse de una terminal sin dejar de ejecutar los comandos que estuviesen corriendo y volver a conectarse de nuevo.
* `top`: monitor de procesos del sistema. Muestra el uso de cada núcleo del procesador, memoria usada, libre, procesos del sistema y su consumo de recursos de CPU y memoria. Un poco más básico que _htop_.
* `touch`: cambia la fecha de acceso y modificación a la actual del sistema, opcionalmente si el fichero no existe se crea con contenido vacío.
* `uniq`: informa o emite las ocurrencias repetidas.
* `vim`: es un editor de texto avanzado.
* `xargs`: construye comandos y los ejecuta con las líneas de la entrada.
* `yes`: repite indefinidamente el mensaje _yes_ en la salida hasta que se finaliza. Útil para ejecutar comandos de forma desatendida que requieren la intervención del usuario.
* `zip`: crea un archivador comprimiendo el contenido de los archivos.

En sus respectivas páginas de manual, `man [comando]`, podemos conocer las opciones que permite cada uno de ellos junto con algunos ejemplos de uso. Estos comandos se pueden combinar haciendo que la salida de un comando sea la entrada del siguiente mediante tuberías, por ejemplo, para ordenar un fichero de texto y mostrar las 5 primeras líneas con los comandos _sort_ y _head_ usaríamos `sort fichero.txt | head -5`. Precisamente el comando `sort` es lo que he utilizado para ordenar alfabéticamente la lista de comandos anterior.

{{< image
    gallery="true"
    image1="image:comandos-gnu-linux.png" optionsthumb1="300x200" title1="Uso de comandos GNU/Linux"
    image2="image:man-grep.png" optionsthumb2="300x200" title2="Página de manual de grep"
    caption="Uso de comandos GNU/Linux y página del manual de grep" >}}

{{< reference >}}
* [Manual GNU Coreutils](https://www.gnu.org/software/coreutils/manual/coreutils.html)
* [Manual de referencia bash](https://www.gnu.org/software/bash/manual/bashref.html)
* [20 Useful Commands for Linux Newbies](http://www.tecmint.com/useful-linux-commands-for-newbies/)
{{< /reference >}}

{{% /post %}}
