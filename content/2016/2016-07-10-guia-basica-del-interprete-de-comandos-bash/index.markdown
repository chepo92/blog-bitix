---
pid: 158
type: "post"
title: "Guía básica del intérprete de comandos Bash"
url: "/2016/07/guia-basica-del-interprete-de-comandos-bash/"
date: 2016-07-10T11:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
series: ["terminal"]
summary: "La línea de comandos sigue siendo una poderosa herramienta que aunque menos intuitiva que una interfaz gráfica permite hacer las tareas de forma más sencilla, directa y que se puede automatizar. Conocer las opciones del intérprete de comandos es básico para aprovechar su máximo potencial. Desde las combinaciones de teclas hasta los _scripts_ o archivos de lotes. Tuberías y redirecciones, comandos con ejecución condicional, variables, interpolación de cadenas, _scrtips_, argumentos, funciones, _for_, _switch_, _if_, comparaciones, ..."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Automatizar las tareas que realizamos permite ahorrarnos el tiempo de tener que hacerlo manualmente y evita los errores que se puede producir. En [GNU][gnu]/[Linux][linux] el uso de la terminal no es algo extraño y muchas tareas son realizadas más fácil y rápido con un comando que con un programa con interfaz gráfica, además tiene la ventaja de que puede automatizarse creando un _script_ [Bash][bash].

El intérprete de comandos Bash junto con la combinación de otros programas proporcionados por la parte GNU de los sistemas Linux presentes en la mayoría de las distribuciones por defecto es suficiente para automatizar la mayor parte de tareas que necesitemos conociendo que hacen [50 comandos útiles de línea de comandos][blogbitix-477]. Para aumentar la productividad es necesario aprender [las combinaciones de teclas del intérprete Bash y del emulador de la terminal][blogbitix-152].

### Tuberías y redirecciones

Al ejecutar un comando podemos querer encadenar la salida de un comando con la entrada de otro, mediante una tubería. Uno de los puntos de la filosofía de los programas de los sistemas Unix es que realicen una o pocas tareas pero que lo hagan muy bien. Usando varios programas especializados en una tarea podemos juntarlos como si fuese piezas de Lego para realizarla tarea compleja que necesitamos, encadenando la salida de un comando como la entrada del siguiente.

Una de las cosas buenas de Bash es que está presente por defecto en la mayoría de las distribuciones Linux y si no es este intérprete de comandos será otro similar por lo que no necesitamos instalar nada más adicional para usarlo. Aún así si necesitaremos algo más potente que Bash como lenguaje de programación podemos optar por un lenguaje de programación como [Python] para realizar los _scripts_ aunque necesitaremos instalar su paquete y las dependencias que los _scripts_ usen.

Por ejemplo, dada una lista de concursantes habilitados en un sorteo podemos obtener 3 ganadores de forma aleatoria con la combinación de los siguientes comandos. El comando `grep` permite aplicar una expresión regular a cada línea de un fichero que si la cumple es enviada a la salida, `shuf` reordena las líneas de forma aleatoria y con la opción `-n 3` emite las 3 primeras. Los comandos proporcionados por GNU en los sistemas Linux proporcionan multitud de comandos como estos muy útiles, combinándolos conseguimos tareas más capaces que lo que son los comandos individualmente.

{{< code file="sorteo-1.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:sorteo.png" optionsthumb1="300x200" title1="Sorteo implementado con dos comandos de GNU/Linux"
    caption="Sorteo implementado con dos comandos de GNU/Linux" >}}

Por defecto la salida estándar de un comando es la terminal pero podemos redirigirla a un fichero con la opción `>`.

{{< code file="sorteo-2.sh" language="bash" options="" >}}

Además de la salida estándar los programas tienen la salida de errores que podemos redirigir con `2>`, si queremos redirigir la salida estándar y la de error podemos usar la redirección `&>`. Tanto la opción `>` y `2>` crean un fichero con la salida redirigida, si en vez de sobreescribir el contenido del archivo queremos añadirlo al final podemos hacer la redirección con `>>`.

{{< code file="sorteo-3.sh" language="bash" options="" >}}

### Múltiples comandos

Si necesitamos ejecutar dos comandos seguidos podemos introducirlos en la misma línea en vez de individualmente, ejecutar un comando si el anterior se ha ejecutado correctamente con `&&` o al contrario ejecutar un comando si el anterior ha fallado con `||`. Si en la ubicación de trabajo que estamos existe un directorio no se podrá crear otro con el mismo nombre, dependiendo de las opciones de encadenamiento según el resultado del comando anterior se ejecutará o no el siguiente comando.

{{< code file="multiples-comandos.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:multiples-comandos.png" optionsthumb1="300x200" title1="Múltiples comandos en la misma línea"
    caption="Múltiples comandos en la misma línea" >}}

### Variables e interpolación de cadenas

Podemos definir variables locales en el _script_ o exportarlas para que estén accesibles en otros procesos e incluso interpolarlas en cadenas de la siguiente forma:

{{< code file="variables-1.sh" language="bash" options="" >}}

También podemos interpolar la salida de un comando dentro de una cadena:

{{< code file="variables-2.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:variables.png" optionsthumb1="300x200" title1="Interpolación en cadenas de variables y comandos"
    caption="Interpolación en cadenas de variables y comandos" >}}

### Invocaciones de comandos anteriores

Con el comando `history` podemos ver el historial completo de comandos que hemos ejecutado con anterioridad. Al lado de cada comando vemos un identificador numérico que podemos usar para ejecutarlo de nuevo con `![identificador]`. Con el siguiente historial podemos ejecutar el comando con identificador 512 indicando una exclamación y el identificador, `!512`. Si queremos ejecutar el último comando introducido podemos usar la doble exclamación `!!`. Si queremos ejecutar el último comando completo de cierto comando podemos usar `![comando]` en vez de su identificador.

{{< image
    gallery="true"
    image1="image:history.png" optionsthumb1="300x200" title1="Historial de comandos"
    caption="Historial de comandos" >}}

Hay más [formas de ejecutar comandos del historial](http://www.softpanorama.org/Scripting/Shellorama/bash_command_history_reuse.shtml). Si quisieramos invocar un comando del historial cambiando algún argumento podemos hacer una búsqueda en orden inverso con <kbd>Ctrl+r</kbd>.

### Scripts

Los _scritps_ son archivos de texto con permisos de ejecución interpretados por Bash u otro intérprete que ejecuta los comandos del _script_, es la forma de automatizar varios comandos. Al inicio de los _scripts_ se suele incluir el [shebang](https://es.wikipedia.org/wiki/Shebang) donde se indica el programa encargado de interpretar el _script_, puede ser Bash o un programa escrito en un lenguaje de programación como [Python][python]. Se puede indicar de varias formas pero las preferidas son las siguientes:

{{< code file="scripts-1.sh" language="bash" options="" >}}

Una vez escrito el _script_ antes de ejecutarlo debemos darle permisos de ejecución con el comando `chmod`:

{{< code file="scripts-2.sh" language="bash" options="" >}}

### Argumentos

Al igual que los comandos pueden recibir opciones y argumentos los _scripts_ también, hacer uso de ellos son mediante las siguientes variables:

* $0: contiene nombre del _script_.
* $1: primer argumento, $2 segundo argumento, ...
* $#: número de argumentos al invocar el _script_.
* $\*: todos los argumentos al invocar el _script_.
* $?: valor del estado de salida del último comando ejecutado. Normalmente se usa _0_ para los comandos ejecutados correctamente y _1_ para los que han terminado incorrectamente.

### Funciones, _for_, _switch_, _if_, comparaciones

En los _scripts_ Bash se pueden definir funciones para reutilizar parte del _script_. Pueden incluir argumentos.

{{< code file="funciones-1.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:opciones.png" optionsthumb1="300x200" title1="Opciones de un script"
    caption="Opciones de un script" >}}

{{< code file="funciones-2.sh" language="bash" options="" >}}

Los _scripts_ de Bash suelen manejar ficheros y disponemos de una buena cantidad de opciones para comparar:

* [ -a FILE ]: verdadero si el fichero existe.
* [ -d FILE ]: verdadero si el fichero existe y es un directorio.
* [ -e FILE ]: verdadero si el fichero existe.
* [ -f FILE ]: verdadero si el fichero existe y es un fichero regular.
* [ -h FILE ]: verdadero si el fichero existe y es un enlace simbólico.
* [ -r FILE ]: verdadero si el fichero existe y se puede leer.
* [ -s FILE ]: verdadero si el fichero existe y su tamaño es mayor que cero.
* [ -w FILE ]: verdadero si el fichero existe y se puede escribir.
* [ -x FILE ]: verdadero si el fichero existe y se puede ejecutar.
* [ -N FILE ]: verdadero si el fichero existe y ha sido modificado desde la última lectura.

* [ FILE1 -nt FILE2 ]: verdadero si _FILE1_ ha sido modificado más recientemente que _FILE2_ o si _FILE1_ existe y _FILE2_ no.
* [ FILE1 -ot FILE2 ]: verdadero si _FILE2_ ha sido modificado más recientemente que _FILE1_ o si _FILE2_ existe y _FILE1_ no.
* [ FILE1 -ef FILE2 ]: verdadero si _FILE1_ y _FILE2_ se refieren al mismo dispositivo y número de inodo.

Y otros menos comunes:

* [ -S FILE ]: verdadero si el fichero existe y es un _socket_.
* [ -b FILE ]: verdadero si el fichero existe y es un fichero especial de bloques.
* [ -c FILE ]: verdadero si el fichero existe y es un fichero especial de caracteres.
* [ -g FILE ]: verdadero si el fichero existe y su bit _SGID_ está establecido.
* [ -k FILE ]: verdadero si el fichero existe y su bit _sticky_ está establecido.
* [ -p FILE ]: verdadero si el fichero existe y es una tubería con nombre (FIFO).
* [ -t FD ]: verdadero si el descriptor de fichero está abierto y refiere a una terminal.
* [ -u FILE ]: verdadero si el fichero existe y su bit _SUID_ está establecido.
* [ -O FILE ]: verdadero si el fichero existe y el ID del usuario efectivo es su propietario.
* [ -G FILE ]: verdadero si el fichero existe y el ID del grupo efectivo es su propietario.
* [ -L FILE ]: verdadero si el fichero existe y es un enlace simbólico.

Y algunos otros:

* [ -o OPTIONNAME ]: verdadero si la copión _OPTIONNAME_ está activa.
* [ -z STRING ]: verdadero si la longitud de _STRING_ es cero.
* [ -n STRING ] o [ STRING ]: verdadero si la longitud de _STRING_ no es cero.
* [ STRING1 == STRING2 ]: verdadero si las cadenas son iguales.
* [ STRING1 != STRING2 ]: verdadero si las cadenas no son iguales.
* [ STRING1 < STRING2 ]: verdadero si léxicamente _STRING1_ se ordena antes que _STRING2_ en el _locale_ actual.
* [ STRING1 > STRING2 ]: verdadero si léxicamente _STRING1_ se ordena después que _STRING2_ en el _locale_ actual.
* [ ARG1 OP ARG2 ]: donde _OP_ es un operador de entre _-eq_, _-ne_, _-lt_, _-le_, _-gt_ o _-ge_. Estas operaciones aritméticas binarias retornan verdadero si _ARG1_ es igual a, no igual a, menor que, menor que o igual, mayor que o mayor que o igual que _ARG2_, respectivamente. _ARG1_ y _ARG2_ son valores enteros.

Las expresiones anteriores se pueden combinar:

* [ ! EXPR ]: verdadero si _EXPR_ es false.
* [ ( EXPR ) ]: retorna el valor de _EXPR_, puede usarse para cambiar la precedencia de operadores.
* [ EXPR1 -a EXPR2 ]: verdadero si ambas _EXPR1_ y _EXPR2_ son verdadero, operador _and_.
* [ EXPR1 -o EXPR2 ]: verdadero si alguna de _EXPR1_ y _EXPR2_ son verdadero, operador _or_.

### Control de trabajos

El comando `jobs` obtenemos una lista de trabajos que se está ejecutando junto con su identificador y estado, con la combinación de teclas <kbd>Ctrl+z</kbd> dejamos el proceso actual detenido y en segundo plano, con `fg` lo devolvemos a primer plano y si estaba detenido se continua su ejecución, con `bg` si estaba detenido continua su ejecución en segundo plano.

{{< image
    gallery="true"
    image1="image:trabajos.png" optionsthumb1="300x200" title1="Trabajos en primer y segundo plano"
    caption="Trabajos en primer y segundo plano" >}}

Esta guía es parte de un tema de los explicados en el completo libro sobre la administración sobre sistemas Unix, [UNIX and Linux System Administration Handbook](https://amzn.to/29vctVP). Un libro con cantidad de temas para conocer más en detalle nuestros sistemas basados en la filosofía Unix. Casi 1300 páginas de documentación con información básica y detallada que deberíamos obligarnos a conocer. Redes, seguridad, virtualización, hospedaje web, copias de seguridad, procesos periódicos, instalación de software, control de procesos y muchos temas más. Otros buenos documentos son [Advanced Bash-Scripting Guide](http://www.tldp.org/LDP/abs/html/index.html) y
el siguiente [manual de Bash](http://bash.cyberciti.biz/guide/Main_Page).

{{< amazon
    linkids="28302f39b86c5d07ee3db2bc5752c2ed&internal=1"
    asins="0131480057" >}}

{{< reference >}}
* [How To Use Bash History to Improve Your Command-Line Productivity](http://www.howtogeek.com/howto/44997/how-to-use-bash-history-to-improve-your-command-line-productivity/)
{{< /reference >}}

{{% /post %}}
