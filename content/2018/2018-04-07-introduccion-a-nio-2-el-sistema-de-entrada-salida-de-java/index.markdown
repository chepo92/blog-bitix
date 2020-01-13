---
pid: 310
type: "post"
title: "Introducción a NIO.2, el sistema de entrada/salida de Java"
url: "/2018/04/introduccion-a-nio-2-el-sistema-de-entrada-salida-de-java/"
date: 2018-04-07T10:00:00+02:00
updated: 2018-04-07T14:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["blog", "java", "planeta-codigo", "programacion"]
summary: "Una de las tareas más importante que realizan algunas aplicaciones es el manejo de la entrada y salida ya sea al sistema de ficheros o a la red. Desde las versiones iniciales de Java se ha mejorado soporte añadiendo programación asíncrona de E/S, permitir obtener información de atributos propios del sistema de archivos, reconocimiento de enlaces simbólicos y facilitado de algunas operaciones básicas."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En las primeras versiones de Java el sistema de entrada/salida proporcionado en el paquete [_java.io_](https://docs.oracle.com/javase/10/docs/api/java/io/package-summary.html) era básico. En la versión 1.4 de Java se añadió un nuevo sistema de entrada/salida llamado NIO para suplir algunas de sus deficiencias que posteriormente en Java 7 se mejoró aún más con NIO.2. Entre las mejoras se incluyen permitir navegación de directorios sencillo, soporte para reconocer enlaces simbólicos, leer atributos de ficheros como permisos e información como última fecha de modificación, soporte de entrada/salida asíncrona y soporte para operaciones básicas sobre ficheros como copiar y mover ficheros.

Las clases principales de esta nueva API para el manejo de rutas, ficheros y operaciones de entrada/salida son las siguientes:

* [Path](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html): es una abstracción sobre una ruta de un sistema de ficheros. No tiene porque existir en el sistema de ficheros pero si si cuando se hacen algunas operaciones como la lectura del fichero que representa. Puede usarse como reemplazo completo de [java.io.File](https://docs.oracle.com/javase/10/docs/api/java/io/File.html) pero si fuera necesario con los métodos [File.toPath()](https://docs.oracle.com/javase/10/docs/api/java/io/File.html#toPath()) y [Path.toFile()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#toFile()) se ofrece compatibilidad entre ambas representaciones.
* [Files](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html): es una clase de utilidad con operaciones básicas sobre ficheros.
* [FileSystems](https://docs.oracle.com/javase/10/docs/api/java/nio/file/FileSystems.html): otra clase de utilidad como punto de entrada para obtener referencias a sistemas de archivos.

Con la clase _Path_ se pueden hacer operaciones sobre rutas como obtener la ruta absoluta de un _Path_ relativo o el _Path_ relativo de una ruta absoluta, de cuanto elementos se compone la ruta, obtener el _Path_ padre o una parte de una ruta. Otros métodos interesantes son [relativize()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#relativize(java.nio.file.Path)), [normalize()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#normalize()), [toAbsolutePath()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#toAbsolutePath()), [resolve()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#resolve(java.nio.file.Path)), [startsWith()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#startsWith(java.nio.file.Path)) y [endsWith()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html#endsWith(java.nio.file.Path)).

{{< code file="Main-1.java" language="java" options="" >}}
{{< code file="info.out" language="plaintext" options="" >}}

Utilizando estas clases expondré algunos ejemplos siendo el primero recorrer el listado de archivos o también se podría hacer el listado de forma recursiva de un directorio e imprimir la información de cada archivo como nombre, si es un enlace simbólico, permisos propietario, fecha de última modificación y tamaño utilizando los siguiente métodos similar a lo que hace el comando _ls_ de GNU/Linux:

* [Files.walkFileTree()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#walkFileTree(java.nio.file.Path,java.nio.file.FileVisitor))
* [Files.isSymbolicLink()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#isSymbolicLink(java.nio.file.Path))
* [Files.readAttributes()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#readAttributes(java.nio.file.Path,java.lang.String,java.nio.file.LinkOption...))
* [PosixFilePermissions](https://docs.oracle.com/javase/10/docs/api/java/nio/file/attribute/PosixFilePermissions.html)
* [FileVisitor](https://docs.oracle.com/javase/10/docs/api/java/nio/file/FileVisitor.html), [SimpleFileVisitor](https://docs.oracle.com/javase/10/docs/api/java/nio/file/SimpleFileVisitor.html)

Al igual que es posible leer los permisos también es posible establecerlos con el método [Files.setPosixFilePermissions()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#setPosixFilePermissions(java.nio.file.Path,java.util.Set)).

{{< code file="Main-2.java" language="java" options="" >}}
{{< code file="ls.out" language="plaintext" options="" >}}

Las operaciones de crear directorios o archivos, copiar archivos, moverlos y eliminarlos son muy comunes de modo que la clase _Files_ ofrece varios métodos que con una única línea permite hacer estas operaciones de forma sencilla. El siguiente ejemplo crea un archivo, lo copia, lo mueve y finalmente lo elimina.

{{< code file="Main-3.java" language="java" options="" >}}

Para leer el contenido de archivos la clase _Files_ ofrece los métodos [newBufferedReader()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#newBufferedReader(java.nio.file.Path)), [newBufferedWrite()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#newBufferedWriter(java.nio.file.Path,java.nio.charset.Charset,java.nio.file.OpenOption...)), [newInputStream()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#newInputStream(java.nio.file.Path,java.nio.file.OpenOption...)) y [newOutputStream()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#newOutputStream(java.nio.file.Path,java.nio.file.OpenOption...)) junto con otros como [readAllLines()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#readAllLines(java.nio.file.Path,java.nio.charset.Charset)) y [readAllBytes()](https://docs.oracle.com/javase/10/docs/api/java/nio/file/Files.html#readAllBytes(java.nio.file.Path)).

{{< code file="Main-4.java" language="java" options="" >}}

En cuanto a la programación de entrada/salida asíncrona se ofrecen dos paradigmas uno basado en la clase [Future](https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/Future.html) y otro en funciones de rellamada o _callbacks_. La programación asíncrona evita bloquear el hilo que ejecuta el código y aprovecha mejor los procesadores multinúcleo con lo que se mejora el rendimiento de las aplicaciones. Para los ficheros se usa la clase [AsynchronousFileChannel](https://docs.oracle.com/javase/10/docs/api/java/nio/channels/AsynchronousFileChannel.html) y para flujos de red [AsynchronousSocketChannel](https://docs.oracle.com/javase/10/docs/api/java/nio/channels/AsynchronousSocketChannel.html).

{{< code file="Main-5.java" language="java" options="" >}}
{{< code file="Main-6.java" language="java" options="" >}}

Si se desea profundizar más en NIO y NIO.2 el libro [The Well-Grounded Java Developer](https://amzn.to/2JsEIao) dedica un capítulo introductorio en el que me he basado para realizar este artículo, el libro [Java I/O, NIO and NIO.2](https://amzn.to/2q7qMdN) está completamente dedicado al nuevo sistema de entrada/salida de Java y el tutorial [Java Basic I/O](https://docs.oracle.com/javase/tutorial/essential/io/index.html) también está muy bien como introducción.

{{< amazon
    linkids="61507308185711a0af4b5ed5ab70b62b,d748ea086bd02aa68dd0b27945514558"
    asins="1617290068,1484215664" >}}

En el artículo [monitorizar archivos con Java][blogbitix-43] muestro como recibir eventos cuando se añade, elimina o modifica algún archivo de los observados usando la clase [WatchService](https://docs.oracle.com/javase/10/docs/api/java/nio/file/WatchService.html).

{{< sourcecode git="blog-ejemplos/tree/master/JavaNIO" command="./gradlew run" >}}

{{< reference >}}
* [Artículo NIO.2, Java Magazine Jul/Ago 2016](http://www.javamagazine.mozaicreader.com/JulyAug2016/Twitter)
{{< /reference >}}

{{% /post %}}
