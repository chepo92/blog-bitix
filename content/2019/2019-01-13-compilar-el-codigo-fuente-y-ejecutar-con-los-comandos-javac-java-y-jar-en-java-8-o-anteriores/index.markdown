---
pid: 373
type: "post"
title: "Compilar el código fuente y ejecutar con los comandos javac, java y jar en Java 8 o anteriores"
url: "/2019/01/compilar-el-codigo-fuente-y-ejecutar-con-los-comandos-javac-java-y-jar-en-java-8-o-anteriores/"
date: 2019-01-13T14:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Aún recuerdo cuando empecé a programar con el lenguaje Java sobre el año 1997 que la compilación y ejecución del código la hacía manualmente con los comandos [javac](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/javac.html), [java](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html) y [jar](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jar.html) en un máquina Intel Pentium a 120 Mhz con tan solo 8 MiB, más tarde 32 MiB, con Windows 95 y Java 1.2, momento en el que ni siquiera había un IDE ni las herramientas de construcción modernas como [Gradle][gradle], había que descargar manualmente las librerías de dependencias en forma de archivos _jar_ que se requiriesen. Luego con JBuilder como IDE este se encargaba de realizar la compilación y ejecución y no hacía falta utilizar estos comandos directamente.

Ahora con herramientas como Gradle además de compilar y ejecutar el programa incluso las dependencias son descargadas de forma automática de repositorios donde se ubican versionadas incluso de forma transitiva, descargando las dependencias de las dependencias.

Usar estos dos comandos directamente ya no es necesario pero como curiosidad comentaré como es su uso. El comando _javac_ sirve para compilar los archivos de código fuente, dado que los paquetes del código fuente de Java se corresponden con directorios en el sistema de archivos el código fuente se ha de ubicar de forma consistente entre la estructura de directorio y el código fuente. Suponiendo que que hay las siguientes clases que hacen uso de la librería [log4j2][log4j] y están ubicadas en el directorio _src/main/java_ con la misma convención que utiliza Gradle el comando para realizar la compilación y copiar los recursos es el siguiente.

{{< code file="tree.sh" language="bash" options="" >}}
{{< code file="javac.sh" language="bash" options="" >}}
{{< code file="Main.java" language="java" options="" >}}

Con el parámetro _-classpath_ se indica la ubicación de las librerías o dependencias que requiriere el código fuente, con el parámetro _-sourcepath_ el directorio raíz de los archivos de código fuente, el parámetro _-source_ indica la versión del lenguaje del código fuente, _-target_ la versión de la máquina virtual del _bytecode_ que generará el compilador y con el parámetro _-d_ el directorio donde generan los archivos _class_ con el _bytecode_.

Una vez generados los archivos de _bytecode_ a partir de la compilación del código fuente su ejecución se realiza con el comando _java_ donde hay que indicar las ubicaciones del los archivos _class_ y las librerías _jar_ necesarias que necesiten, la clase principal con el punto de entrada del programa que contenga un método _public static void main(String[] args)_ y los parámetros del programa que se reciben en el parámetro _args_ del método _main_.

{{< code file="java.sh" language="bash" options="" >}}
{{< code file="java-run.sh" language="bash" options="" >}}

La distribución de los archivos _class_ se suele realizar usando librerías _jar_ y estas se construyen usando el comando _jar_. El [archivo de manifiesto](https://docs.oracle.com/javase/tutorial/deployment/jar/manifestindex.html) es un descriptor en el que se puede indicar la clase de entrada sin tener que especificarla en el comando _java_ haciendo los archivo _jar_ similar a un ejecutable.

{{< code file="jar.sh" language="bash" options="" >}}
{{< code file="MANIFEST.MF" language="plaintext" options="" >}}

Y la ejecución de del programa contenido en el archivo _jar_.

{{< code file="java-jar.sh" language="bash" options="" >}}
{{< code file="java-jar-run.sh" language="bash" options="" >}}

Así es la compilación y ejecución de código Java en Java 8 y anteriores, con la [introducción de la modularidad a partir de Java 9][blogbitix-263] esto cambia ya que el _classpath_ queda obsoleto y es reemplazado por el equivalente con módulos _module-path_.

{{% sourcecode git="blog-ejemplos/tree/master/HolaMundoJava8" %}}

{{% /post %}}
