---
pid: 314
type: "post"
title: "La sentencia try-with-resources de Java"
url: "/2018/04/la-sentencia-try-with-resources-de-java/"
date: 2018-04-21T14:30:00+02:00
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

Una de las novedades que incorporó Java 7 es la sentencia _try-with-resources_ con el objetivo de cerrar los recursos de forma automática en la sentencia _try-catch-finally_ y hacer más simple el código. Aquellas varaibles cuyas clases implementan la interfaz [AutoCloseable](https://docs.oracle.com/javase/10/docs/api/java/lang/AutoCloseable.html) pueden declararse en el bloque de inicialización de la sentencia _try-with-resources_ y sus métodos [close()](https://docs.oracle.com/javase/10/docs/api/java/lang/AutoCloseable.html#close()) serán llamados después del bloque _finally_ como si su código estuviese de forma explícita.

Un ejemplo de código que lee una línea de un fichero usando la sentencia _try-with-resources_ es la siguiente de Java 7. Como se observa no es necesario llamar de forma explícita al método _close_ para liberar los recursos de la instancia de la clase [BufferedReader](https://docs.oracle.com/javase/10/docs/api/java/io/BufferedReader.html).

{{< code file="Java7.java" language="java" options="" >}}

Anteriormente a Java 7 esto se debía hacer de la siguiente manera con unas pocas lineas más de código algo menos legibles.

{{< code file="Java6.java" language="java" options="" >}}

El código es similar pero no es equivalente. Observesé que require declarar la variable _br_ fuera del ámbito de la sentencia _try-catch-finally_ donde se usa. Además, si se produce una excepción en el bloque _try_ y posteriormente en el bloque _finally_ en Java 6 la excepción del bloque _try_ se enmascara y la que se lanza es la del bloque _finally_. 

La excepción que se lanza en el bloque _try_ y usando el método [Throwable.addSuppressed()](https://docs.oracle.com/javase/10/docs/api/java/lang/Throwable.html#addSuppressed(java.lang.Throwable)) que se añadió en la API en Java 7 junto con el método [Throwable.getSuppressed()](https://docs.oracle.com/javase/10/docs/api/java/lang/Throwable.html#getSuppressed()) se obtienen las excepciones enmascaradas o suprimidas en la sentencia _try-with-resources_. El orden de ejecución de los bloques de una sentencia _try-with-resources_ es el indicado en los números emitidos con el método _println_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

La mayoría de clases relacionadas con entrada y salida implementan la interfaz _AutoCloseable_ como las relacionadas con el sistema de ficheros y flujos de red como [InputStream](https://docs.oracle.com/javase/10/docs/api/java/io/InputStream.html), también las relacionadas con la conexión de base de datos mediante JDBC con [Connection](https://docs.oracle.com/javase/10/docs/api/java/sql/Connection.html).

{{< reference >}}
* [The try-with-resources Statement](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html)
* [Try-with-resources in Java 7](http://tutorials.jenkov.com/java-exception-handling/try-with-resources.html)
* [What is a suppressed exception?](https://stackoverflow.com/a/27033358)
{{< /reference >}}

{{% /post %}}
