---
pid: 477
type: "post"
title: "50+ comandos básicos y útiles de GNU/Linux"
url: "/2020/04/50-plus-comandos-basicos-y-utiles-de-gnu-linux/"
date: 2020-04-24T16:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Desde la línea de comandos hay disponibles una colección de comandos útiles para realizar ciertas tareas de forma rápida y sencilla. Los comandos se pueden incluir en _scripts_ de bash o pequeños programas para el intérprete de comandos y componer la entrada de unos comandos con la salida de otros a través de tuberías dándoles más versatilidad."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

La parte de GNU de [GNU][gnu]/[Linux][linux] proporciona una colección de comandos con numerosas funcionalidades ejecutables desde la línea de comandos. Aún con las interfaces gráficas actuales la línea de comandos sigue siendo una potente herramienta que permite ejecutar una tarea de forma sencilla y rápida conociendo los parámetros necesarios del comando y además automatizable con un script de bash.

* [Guía básica del intérprete de comandos Bash][blogbitix-158]

Hay multitud de comandos, las listas a continuación son solo una pequeña parte de todos los programas que ofrecen una interfaz de línea de comandos, algunos programas con interfaz gráfica ofrecen también posibilidades de ejecutarlos mediante línea de comandos. Utilizando tuberías la salida de un comando se convierte en la entrada de otro y en conjunto ofrecer una funcionalidad compuesta por dos comandos individuales.

Algunos ejemplos de lo que es posible realizar desde la línea de comandos son estas funcionalidades:

* [Cambiar el formato de archivos de música o audio en GNU/Linux][blogbitix-134]
* [Cambiar el formato de archivos de vídeo o películas en GNU/Linux][blogbitix-135]
* [Comando para convertir imágenes a WebP con menor tamaño desde JPEG y PNG][blogbitix-447]

### Sistema de archivos

Esta colección de comandos permiten navegar el sistema de archivos, cambiar de directorio actual, copiar, mover y eliminar archivos, crear enlaces simbólicos, crear directorios y eliminar directorios así como cambiar [los permisos del sistema de archivos][blogbitix-455].

Los comandos suelen recibir como parámetros de entrada archivos, los archivos se indican con su nombre completo o con expresiones _glob_ que seleccionan múltiples archivos con una expresión regular limitada.

* `pwd`: imprime el directorio actual de trabajo. Los comandos en su entorno de funcionamiento tiene un directorio actual de trabajo que se toma del directorio actual desde donde se ejecuta el comando. Este directorio puede ser en el que se busquen los archivos de entrada o donde se generen los archivos de salida del comando.
* `cd`: permite cambiar el directorio de trabajo a otro del sistema de archivos.
* `ls`: muestra en la salida un listado de archivos y directorios contenido en un directorio.
* `cp`, `mv`, `rm`: permiten copiar, mover y eliminar archivos. El comando de eliminación no usa una papelera de reciclaje como en las interfaces gráficas, la eliminación de un archivo es definitiva.
* `mkdir`, `rmdir`: permiten crear nuevos directorios y eliminar directorios.
* `ln`: este comando crea enlaces simbólicos, son archivos que apuntan a otro archivo o directorio.
* `chmod`, `chown`: estos comandos permiten cambiar los permisos de lectura, escritura y ejecución de los archivos, el segundo cambia el usuario y grupo del propietario del archivo.

### Intérprete bash

Los comandos son procesados por un intérprete de comandos algunos están relacionados con el intérprete.

* `alias`: permite definir un sinónimo más corto para un comando con la posibilidad de incluir parte de los argumentos.
* `history`: muestra el historial de comandos ejecutados con anterioridad. Usado junto con el comando _grep_ se puede filtrar en todo en historial. El historial se guarda en _~/.bash\_history_.
* `echo`: imprime un texto en la salida de la consola.
* `whatis`: muestra una descripción de el comando indicado.
* `locate`: muestra la ubicación en el sistema de archivos del comando indicado.
* `man`: páginas de manual y uso de un comando. Incluye la descripción de un comando, sus parámetros y opciones que posee.

### Comunicaciones por red

* `ping`: suele utilizarse para comprobar si la red funciona correctamente. Por ejemplo, comprobando si se puede conectar con el _host_ _google.es_.
* `ip`: muestra la dirección IP asociada al equipo, suele ser necesario conocer la dirección IP para las comunicaciones en la red local.
* `traceroute`: muestra los host por los que pasan los paquetes TCP/IP hasta llegar al destino.
* `wget`: permite realizar descargas de páginas y archivos accesibles mediante el protocolo HTTP.
* `curl`: permite realizar peticiones del protocolo HTTP a un servidor.

### Tratamiento de archivos

* `cut`, `sed`, `awk`, `jq`: permiten manipular cadenas de texto de la entrada y devolverlas transformadas en la salida. _jq_ es para ,manipular cadenas en formato JSON.
* `grep`: permite buscar coincidencias aplicando expresiones regulares en la entrada de texto.
* `find`: permite recorrer una jerarquía del árbol de directorios y buscar archivos coincidentes según los criterios indicados en para el comando.
* `xargs`: construye y ejecuta líneas de comando desde la entrada estándar del sistema.
* `diff`: muestra las diferencias entre dos archivos de texto.
* `sort`, `uniq`, `seq`. `shuf`: ordena ascendentemente o descendentemente las líneas de un archivo. _seq_ genera una secuencia de números, _shuf_ ordena de forma aleatoria las líneas de entrada.
* `head`, `tail`, `less`: muestran las primeras o últimas líneas de un archivo de texto. _less_ permite paginar para navegar archivos de texto en la terminal.
* `wc`: cuenta palabras, líneas, caracteres o bytes de un archivo.

### Editores de texto

* `nano`: editor de texto básico y sencillo de usar basado en consola.
* `vim`: editor de texto potente y versátil pero que requiere un periodo de aprendizaje para conocer todas sus combinaciones de teclas.
* `emacs`: otro editor de texto potente y versátil pero también con un periodo de aprendizaje mayor que _nano_.

### Monitorización y sistema

* `top`: monitor de los procesos del sistema en ejecución, en el se muestra el tiempo de CPU que están usando y la memoria que están consumiendo.
* `iotp`: monitor de procesos del sistema para la entrada/salida a almacenamiento persistente, disco duro o SSD.
* `watch`: permite ejecutar un comando cada pocos segundos mostrando en la pantalla su salida.
* `uname`: muestra la versión del kernel que está usando el sistema.
* `systemctl`: comando para administrar y ver el estado de los servicios del sistema del sistema de inicio _systemd_.
* `mount`: permite montar un nuevo sistema de archivos en un punto del sistema de archivos del sistema.
* `kill`: permite matar la ejecución de un proceso del sistema para aquellos casos que no termina correctamente.
* `sudo`: ejecuta un comando con los permisos de superusuario. Hay que usarlo con precaución ya que su uso incorrecto por poder realizar cualquier cosa en el sistema puede posibilitar acciones indeseadas y fallos en el sistema.
* `ssh`: permite conectarse a otra máquina de forma segura.

### Fechas y programación de tareas

* `date`: muestra la fecha y hora del sistema actual.
* `cal`: muestra un calendario en la consola.
* `at`: permite programar una tarea para que se ejecuta a una hora determinada.
* `crontab`: permite programar tareas para ejecutarse en los momentos indicados por las expresiones _cron_.

### Compresión de archivos y directorios

* `tar`, `gzip`, `unzip`: permiten realizar operaciones de compresión sobre archivos para reducir su tamaño y agrupar múltiples archivos en uno solo.

{{% /post %}}
