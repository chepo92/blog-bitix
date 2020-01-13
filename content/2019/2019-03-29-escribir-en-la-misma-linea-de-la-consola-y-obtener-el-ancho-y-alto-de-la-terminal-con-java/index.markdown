---
pid: 393
type: "post"
title: "Escribir en la misma línea de la consola y obtener el ancho y alto de la terminal con Java"
url: "/2019/03/escribir-en-la-misma-linea-de-la-consola-y-obtener-el-ancho-y-alto-de-la-terminal-con-java/"
date: 2019-03-29T16:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Algunas aplicaciones en su salida en la terminal muestran una barra de progreso para la cual necesitan utilizar la secuencia de escape de la terminal o el caracter de carro para posicionar el cursor al inicio de la línea. En algunos casos incluso se muestran varias barras de progreso. Estos son los casos de los gestores de paquetes de [GNU][gnu]/[Linux][linux] como _pacman_ al realizar una actualización del sistema o de [Gradle][gradle] al descargar las dependencias.

Con las [secuencias de escape](http://www.termsys.demon.co.uk/vtansi.htm) se pueden cambiar los colores de los caracteres tanto del propio caracter como el color de fondo. Otras aplicaciones como el reproductor de música [cmus] muestran en la terminal una interfaz basada en texto con un barra de estado y varios paneles con la lista de las canciones del tamaño que tenga la terminal. Para esto es necesario conocer cuál es el tamaño de la terminal de columnas a lo ancho y de filas a lo alto.

Hay varias formas de conocer el tamaño de la terminal. Con el intérprete de comandos [Bash][bash] el ancho y alto de la terminal se obtiene con las variables de entorno _$COLUMNS_ y _$LINES_ respectivamente. Pero también se puede obtener la misma información con el comando [tput](https://linux.die.net/man/1/tput). Para obtener esta información desde un programa Java basta con [ejecutar un proceso del sistema][blogbitix-132], obtener la salida de estos comandos y procesarla para obtener la información.

{{< code file="echo.out" language="bash" options="" >}}

El siguiente ejemplo muestra varias barras de progreso utilizando la secuencia de escape _\33[{COUNT}B_, _\33[{COUNT}A_ para posicionar el cursor una linea abajo o arriba y la información de ancho y alto de la terminal obtenida de ejecutar como un subproceso el comando _tput_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="Terminal.java" language="java" options="" >}}
{{< code file="Printer.java" language="java" options="" >}}
{{< code file="Progress.java" language="java" options="" >}}

{{< asciinema id="237621" caption="Progreso escribiendo en la misma línea de la consola" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaTerminal" command="./gradlew build && ./run.sh" %}}

{{< reference >}}
* [How do I find the width & height of a terminal window?](https://stackoverflow.com/questions/263890/how-do-i-find-the-width-height-of-a-terminal-window)
* [Can I find the console width with Java?](https://stackoverflow.com/questions/1286461/can-i-find-the-console-width-with-java)
{{< /reference >}}

{{% /post %}}
