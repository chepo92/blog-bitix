---
pid: 156
type: "post"
title: "Comandos básicos de GNU/Linux"
url: "/2016/07/comandos-basicos-de-gnu-linux/"
date: 2016-07-03T12:00:00+02:00
updated: 2016-07-10T10:00:00+02:00
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

* _apropos_: muestra una lista de comandos relacionados con una palabra.
* _at_: programa una tarea a una determinada hora.
* _cal_: emite en la terminal un calendario.
* _cat_: concatena archivos y emite sus contenidos en la salida.
* _cd_: cambia el directorio de trabajo actual de la terminal.
* _chgrp_: cambia el grupo propietario del archivo.
* _chmod_: cambia los permisos del archivo.
* _chown_: cambia el usuario propietario del archivo.
* _cp_: copia el contenido de un fichero a otro nuevo o sobrescribiendo uno existente.
* _date_: muestra la fecha del sistema.
* _df_: muestra el uso del disco.
* _du_: estima el espacio usado por los archivos.
* _echo_: emite un mensaje en la salida.
* _find_: busca archivos en la jerarquía de directorios.
* _free_: muestra el estado de la memoria del sistema.
* _grep_: aplica expresiones regulares al contenido y filtra las que que no la cumplen.
* _head_: muestra el principio del contenido.
* _history_: lista el historial de comandos introducidos con anterioridad.
* _htop_: monitor de procesos similar a _top_ un poco más avanzado y más personalizable.
* _kill_: envía una señal a un proceso, por ejemplo de terminación.
* _less_: permite el movimiento adelante y atrás del contenido a visualizar cuando es más grande que el tamaño de la terminal.
* _ln_: crea enlaces simbólicos.
* _lsblk_: lista los dispositivos de bloques.
* _ls_: lista ficheros y directorios del sistema de ficheros. Con diferentes opciones podremos visualizar además de los nombres más información como permisos, fecha de última modificación y tamaño.
* _man_: muestra la página de manual de un comando. En las páginas de manual incluye una descripción de lo que hace el comando, sus opciones, parámetros y en algunos casos ejemplos de uso.
* _md5sum_: calcula el _hash_ _md5_ de un contenido.
* _mkdir_: crea un directorio opcionalmente con toda la ruta de carpetas hasta él si no existen.
* _mv_: renombra un archivo y/ lo cambia de directorio.
* _printf_: formatea un mensaje y lo emite en la salida.
* _ps_: lista los procesos del sistema e información relacionada.
* _pwd_: emite en la salida el directorio actual de trabajo.
* _rmdir_: elimina un directorio
* _sha1sum_: calcula el _hash_ _sh1_ de un contenido.
* _shuf_: emite las líneas de entrada en la salida de forma aleatoria.
* _sort_: ordena líneas de texto.
* _tail_: muestra el final del contenido pudiendo verlo en tiempo real cuando se añade más. Útil para monitorizar la salida de un archivo de trazas.
* _tar_: guarda varios archivos en uno solo.
* _tmux_: permite ver varias terminales dividiendo el área disponible verticalmente u horizontalmente, desconectarse de una terminal sin dejar de ejecutar los comandos que estuviesen corriendo y volver a conectarse de nuevo.
* _top_: monitor de procesos del sistema. Muestra el uso de cada núcleo del procesador, memoria usada, libre, procesos del sistema y su consumo de recursos de CPU y memoria. Un poco más básico que _htop_.
* _touch_: cambia la fecha de acceso y modificación a la actual del sistema, opcionalmente si el fichero no existe se crea con contenido vacío.
* _uniq_: informa o emite las ocurrencias repetidas.
* _vim_: es un editor de texto avanzado.
* _xargs_: construye comandos y los ejecuta con las líneas de la entrada.
* _yes_: repite indefinidamente el mensaje _yes_ en la salida hasta que se finaliza. Útil para ejecutar comandos de forma desatendida que requieren la intervención del usuario.
* _zip_: crea un archivador comprimiendo el contenido de los archivos.

En sus respectivas páginas de manual, <code>man [comando]</code>, podemos conocer las opciones que permite cada uno de ellos junto con algunos ejemplos de uso. Estos comandos se pueden combinar haciendo que la salida de un comando sea la entrada del siguiente mediante tuberías, por ejemplo, para ordenar un fichero de texto y mostrar las 5 primeras líneas con los comandos _sort_ y _head_ usaríamos <code>sort fichero.txt | head -5</code>. Precisamente el comando <code>sort</code> es lo que he utilizado para ordenar alfabéticamente la lista de comandos anterior.

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
