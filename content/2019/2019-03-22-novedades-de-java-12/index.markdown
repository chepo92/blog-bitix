---
pid: 391
type: "post"
title: "Novedades de Java 12"
url: "/2019/03/novedades-de-java-12/"
date: 2019-03-22T18:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
series: ["java-platform"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

El 19 de marzo del 2019 se publicaba la versión Java 12 siguiendo el calendario de lanzar una nueva versión cada seis meses incorporando nuevas funcionalidades de forma incremental. La versión 12 no es una versión con soporte extendido y dejará de tener actualizaciones cuando se publique la siguiente versión. La primera versión LTS con la funcionalidad de módulos es la 11 y la recomendada para proyectos de larga duración o bajo mantenimiento, la siguiente LTS será la versión 17 que según lo planificado se publicará en septiembre de 2021 después de tres años.

Las características destacadas de Java 12 son la incorporación de forma experimental las expresiones _switch_ y mejoras en el recolector de basura para mayor rendimiento.

* [JDK 12 Documentation](https://docs.oracle.com/en/java/javase/12/)
* [Release Notes](https://www.oracle.com/technetwork/java/javase/12-relnote-issues-5211422.html)
* [Java 12 Javadoc](https://docs.oracle.com/en/java/javase/12/docs/api/)

Las mejoras incluídas en esta versión son:

* 189: [Shenandoah: A Low-Pause-Time Garbage Collector (Experimental)](https://openjdk.java.net/jeps/189)
* 230: [Microbenchmark Suite](https://openjdk.java.net/jeps/230)
* 325: [Switch Expressions (Preview)](https://openjdk.java.net/jeps/325)
* 334: [JVM Constants API](https://openjdk.java.net/jeps/334)
* 340: [One AArch64 Port, Not Two](https://openjdk.java.net/jeps/340)
* 341: [Default CDS Archives](https://openjdk.java.net/jeps/341)
* 344: [Abortable Mixed Collections for G1](https://openjdk.java.net/jeps/344)
* 346: [Promptly Return Unused Committed Memory from G1](https://openjdk.java.net/jeps/346)

### Expresiones switch
Las expresiones _switch_ permiten quitar varias sentencias _if else_ encadenadas. Cada rama de la sentencia _siwtch_ devuelve un valor y no hace falta usar la sentencia _break_, se pueden utilizar varios casos para cada rama.

* [JDK 12: Switch Statements/Expressions in Action](https://dzone.com/articles/jdk-12-switch-statementsexpressions-in-action)
* [Informe de JEP 325 Switch Expressions (Preview)](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8192963)

{{< code file="SwitchExpression.java" language="java" options="" >}}

### Teeing Collectors

Los _stream_ proporcionan un flujo de elementos a procesar. En el caso de querer recolectar dos valores de ese flujo requiere usar un _reduce_ que complica el código. Se ha añadido un nuevo colector [Collectors.teeing()](https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/util/stream/Collectors.html#teeing(java.util.stream.Collector,java.util.stream.Collector,java.util.function.BiFunction)) para enviar un elemento de un _stream_ a dos _streams_, de forma similar a lo que hace el comando _tee_ en Unix.

{{< code file="TeeingCollectors.java" language="java" options="" >}}

### Formato de número compacto

Ahr se puede expresar un número de forma compacta con la clase [CompactNumberFormat](https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/text/CompactNumberFormat.html) o el método [NumberFormat.getCompactNumberInstance()](https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/text/NumberFormat.html#getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)).

{{< code file="CompactNumbers.java" language="java" options="" >}}

### Recolector de basura Shenandoah

Una de la áreas que más atención reciben para mejorar el rendimiento de las aplicaciones es el recolector de basura. _Shenandoah_ es uno nuevo que independiente del tamaño de la memoria, ya sea de 200 MiB o 200 GiB, el tiempo de las pausas es el mismo. También se han implementado mejoras en el recolector de basura _G1_ actual.

### Otras

[Algunos métodos han sido eliminados](https://www.oracle.com/technetwork/java/javase/12-relnote-issues-5211422.html#Removed) varios relacionados con el método _finalize_ cuyo uso está desaconsejado desde hace mucho tiempo por no se una forma segura de liberar recursos. Algunos algoritmos de cifrado inseguros han sido deshabilitados. Se ha añadido soporte para Unicode 11.0.0 con nuevos caracteres, bloques y  _scripts_.

{{< reference >}}
* [Definitive Guide To Java 12](http://blog.codefx.org/java/java-12-guide/)
* [Changes to Garbage Collection in Java 12](https://blog.idrsolutions.com/2019/03/changes-to-garbage-collection-in-java-12/)
* [Java 12 is here!](https://jaxenter.com/java-12-is-here-156964.html)
* [Java 12 Released with Experimental Switch Expressions and Shenandoah GC](https://www.infoq.com/news/2019/03/java12-released)
{{< /reference >}}

{{% /post %}}
