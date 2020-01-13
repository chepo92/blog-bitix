---
pid: 395
type: "post"
title: "El concepto de wildcard capture en Java"
url: "/2019/04/el-concepto-de-wildcard-capture-en-java/"
date: 2019-04-05T17:45:00+02:00
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

Con la [introducción de los _generics_ en el lenguaje Java][blogbitix-138] en la versión de Java 5 se añadió validación de tipos a por ejemplo las colecciones, y entre ellos los elementos _wildcard_ definidos con un _?_. Una lista definida como _List\<?>_ se considera una lista de elementos de un tipo desconocido, todas las colecciones pre-java5 se consideran a partir de Java 5 de forma efectiva como _List\<?>_ o _List<? extends Object>_ a partir de Java 5.

El siguiente código produce un error de compilación con el mensaje _capture of_ ya que el compilador no puede validar que el tipo que se inserta en la lista, _Object_, como primer elemento si es compatible en tiempo de ejecución con el tipo de elementos que tiene la lista:

{{< code file="WildcardError.java" language="java" options="" >}}
{{< code file="javac.out" language="plaintext" options="" >}}

El método _bar()_ define como parámetro una lista _raw_ y es capaz de extraer un _Object_ ya que todo objeto hereda de él e insetar un _Object_ ya que es una lista _raw_, [el compilador realiza el _type erasure_][blogbitix-308] y la considera como _List\<Object>_ pero el compilador advierte del posible error en tiempo de ejecución con el mensaje _Note: WildcardError.java uses unchecked or unsafe operations_, en este caso la advertencia es innecesaria ya que se inserta un elemento extraído de la propia lista, se puede suprimir anotando el método con _@SuppressWarnings("unchecked")_.

Para establecer una relación entre dos tipos se deben usar _type parameters_, en este caso para el tipo que se extrae de la lista y el tipo insertado en la lista. Para que el código anterior compile hay que escribir un método que capture el tipo del _wildcard_, estos métodos por convención se nombran añadiendo al final la palabra _Helper_. En este caso otra alternativa es definir el método como en _bar()_ aunque un _List\<?>_ y un _List\<T>_ no son lo mismo el primero admite más tipos de listas parametrizadas.

{{< code file="Wildcard.java" language="java" options="" >}}

Este concepto de _wildcard capture_ genera bastantes dudas y en internet hay múltiples artículos tratando de explicarlo.

* [The Java™ Tutorials - Generics Capture](https://docs.oracle.com/javase/tutorial/java/generics/capture.html)

{{< reference >}}
* [Why use a wildcard capture helper method?](http://www.howtobuildsoftware.com/index.php/how-do/h83/java-generics-wildcard-why-use-a-wild-card-capture-helper-method) es la mejor explicación que he encontrado de _wildcard capture_.
* [Wildcard Capture and Helper Methods](https://docs.oracle.com/javase/tutorial/java/generics/capture.html)
* [Capturing wildcards in Java generics](https://stackoverflow.com/questions/17340474/capturing-wildcards-in-java-generics)
* [Java Generics Wildcard Capture - A Useful Thing to Know](https://dzone.com/articles/java-generics-wildcard-capture-useful-thing-to-know)
* [Java Generics: Wildcard capture misunderstanding](https://stackoverflow.com/questions/12043874/java-generics-wildcard-capture-misunderstanding)
* [Going wild with generics, Part 1](https://www.ibm.com/developerworks/library/j-jtp04298/)
* [Why use a wild card capture helper method?](https://stackoverflow.com/questions/30763895/why-use-a-wild-card-capture-helper-method)
* [When to use generic methods and when to use wild-card?](https://stackoverflow.com/questions/18176594/when-to-use-generic-methods-and-when-to-use-wild-card)
{{< /reference >}}

{{% /post %}}
