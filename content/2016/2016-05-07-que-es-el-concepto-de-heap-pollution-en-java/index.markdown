---
pid: 141
type: "post"
title: "Qué es el concepto de Heap Pollution en Java"
url: "/2016/05/que-es-el-concepto-de-heap-pollution-en-java/"
date: 2016-05-07T13:00:00+02:00
updated: 2016-05-14T13:15:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Al trabajar con referencias de tipos genéricos, _raw_ y arrays debemos conocer el concepto de _Heap Pollution_ si no queremos que en algún punto del programa Java se produzca una excepción no esperada del tipo _ClassCastException_. No teniéndolo en cuenta nos encontraremos con un error de los más difíciles de depurar ya que la excepción solo nos dirá donde se produjo no donde se encuentra el código erróneo que lo provocó."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

La introducción de los [tipos genéricos al lenguaje Java][blogbitix-138] en la versión 5 hizo posible que pudiesemos parametrizar los tipos y que el compilador hiciese validaciones sobre ellos, también se permitieron eliminar muchos _cast_ que hasta entonces eran necesarios al usar el _framework_ de colecciones. Los tipos genéricos permiten evitar errores en tiempo de compilación, al mismo tiempo la eliminación de los _cast_ hace el código más legible y más fácilmente refactorizable. Sin embargo, para mantener la compatibilidad con versiones anteriores se optó por hacer algunos sacrificios en la implementación de genéricos en pos de otros beneficios. Una situación potencialmente problemática es el denominado [Heap Pollution](https://en.wikipedia.org/wiki/Heap_pollution).

El concepto de _Heap Pollution_ consiste de forma breve (quizá inexacta) en que un tipo genérico contiene un objeto con un tipo que no le corresponde según su tipo genérico, con un ejemplo, que una lista del tipo _List\<String\>_ contenga un _Number_ entre sus elementos. Que un tipo genérico pueda contener un objeto que no sea de su tipo genérico es detectado en tiempo de compilación con los _unchecked warning_ pero bajo algunas circunstancias se produce en tiempo de ejecución una excepción de tipo [ClassCastException](javadoc8:java/lang/ClassCastException.html), si ignoramos las advertencias y nuestro código no es cuidadoso. Esto es posible porque en Java el tipado de los genéricos sólo está disponible en tiempo de compilación lo que significa que no son _reified_, el tipado genérico no está disponible en tiempo de ejecución como consecuencia del [proceso conocido como _type erasure_][blogbitix-308], al trabajar con referencias de tipo _raw_ y genéricas hay que tener cuidado en las asignaciones y las advertencias del compilador.

Veamos en código las circunstancias bajo las cuales se pueden producir _Heap Pollution_. Un tipo _List\<String\>_ puede asignarse a un _List_ y luego añadir a esa _List_ un _Integer_ momento en el que el compilador nos avisa con un _unchecked warning_ indicando que no puede validar que la lista _raw_ siendo _List_ un tipo genérico se le está añadiendo una referencia del tipo que debería tener, el compilador nos informa de que esa responsabilidad la tenemos nosotros. También podemos asignar un _List_ a un _List\<Number\>_, en este caso el compilador tampoco puede validar que la _List_ sea realmente un _List\<Number\>_ y lo indica también con un _unchecked warning_. Ignorando estas adevertencias se produce un _ClassCastException_ al acceder al elemento _Integer_ que contiene la _List\<String\>_ como se comprueba en los teses.

{{< code file="MainTest-generics.java" language="java" options="" >}}

Por otra parte en Java los arrays en tiempo de ejecución necesitan conocer el tipo _reified_ que contendrá. Esto unido a que los _varargs_ realmente se transforman en un array, el posible _Heap Pollution_ se da también en los métodos que soportan _varargs_.

El compilador convierte los _varargs_ de tipos genéricos de la siguiente forma:

{{< code file="Erasure-varargs.txt" language="plaintext" options="" >}}

En un método cuyo último argumento es un _vararg_ y de tipo genérico puede producirse _Heap Pollution_ como indica el compilaror, si estamos seguros de que no se puede dar este caso en el código del método podemos eliminar la advertencia del compilador añadiendo la anotación [@SafeVarargs](javadoc8:java/lang/SafeVarargs.html) en el método. Añadir la anotación solo implica que el compilador eliminará la advertencia pero aún con ella puede seguir produciéndose la excepción _ClassCastException_ si el método no ha sido cuidadoso.

{{< code file="MainTest-varargs.java" language="java" options="" >}}

Tener en cuenta el _Heap Pollution_ es importante ya que la excepción _ClassCastException_ se produce más tarde y en un punto diferente de donde realmente está el error, mucho más tarde si el tipo genérico es serializado e incluso en otra <abbr title="Java Virtual Machine">JVM</abbr> diferente. Estos errores son de los peores de depurar por la poca información que proporcionan ya que la traza de la excepción solo dice quien la lanzó no donde se introdujo el fallo.

La implementación de los _generics_ en Java viene con la garantía conocida como _cast-iron_ que consiste en que mientras el compilador no produzca una _unchecked warning_ en tiempo de compilación se garantiza que en tiempo de ejecución no se producirá una _ClassCastException_ por los _cast_ introducidos en el proceso de _erasure_.

Si nos encontramos con una de estas excepciones con los genéricos en una colección una buena alternativa es hacer uso de los métodos [Collections.checkedCollection](javadoc8:java/util/Collections.html#checkedCollection-java.util.Collection-java.lang.Class-), [Collections.checkedSet](javadoc8:java/util/Collections.html#checkedSet-java.util.Set-java.lang.Class-),  [Collections.checkedMap](javadoc8:java/util/Collections.html#checkedMap-java.util.Map-java.lang.Class-java.lang.Class-) y alguno más similar que evitará que en una colección se produzca _Heap Pollution_, la excepción _ClassCastException_ se lanzará en el momento de añadir a la colección la referencia que provocaría el _Heap Pollution_.

Relacionados con casos de combinar genéricos y arrays y _ClassCastException_ en el libro [Java Generics and Collections](https://amzn.to/2QsjMpw) se definen dos principios a seguir para evitar excepciones: _The Principle of Truth in Advertising_ y _The Principle of Indecent Exposure_.

{{< amazon
    linkids="0596527756"
    asins="1fecc45ce35d08547102ac4f96cc8ca8" >}}

Salvo que hagamos operaciones complicadas entre genéricos de diferentes tipos no será muy habitual que nos encontremos _ClassCastException_ por _Heap Pollution_, pero es un concepto interesante conocer, en cualquier caso el compilador nos informará con los _unchecked warnings_.

{{< sourcecode git="blog-ejemplos/tree/master/JavaHeapPollution" command="./gradlew test" >}}

{{< reference >}}
* [Tutorial sobre los tipos genéricos de Java][blogbitix-138]
* [Novedades y nuevas características de Java 8][blogbitix-17]
* [Introducción y nuevas características de Java EE 7][blogbitix-131]
* [Heap Pollution](https://en.wikipedia.org/wiki/Heap_pollution)
{{< /reference >}}

{{% /post %}}
