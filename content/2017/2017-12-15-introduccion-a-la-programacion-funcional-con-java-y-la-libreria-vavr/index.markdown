---
pid: 288
type: "post"
title: "Introducción a la programación funcional con Java y la librería Vavr"
url: "/2017/12/introduccion-a-la-programacion-funcional-con-java-y-la-libreria-vavr/"
date: 2017-12-15T23:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:vavr.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Ciertas propiedades de la programación funcional fueron una de las características más destacadas añadidas a Java 8. La librería Javaslang y más tarde renombrada a Vavr basándose en estas nueva características añade algunas otras que no están incluidas en el propio JDK y están presentes en otros lenguajes más recientes y con programación funcional desde sus inicios. En esta breve introducción a la librería Vavr comentaré cuales son las propiedades que proporciona para simplificar algunas aspectos de la tarea de programación."
---

{{% post %}}

{{< logotype image1="vavr.png" title1="Vavr" width1="300" >}}

La programación funcional es un paradigma de programación declarativa que usa múltiples funciones para realizar cálculos y transformaciones a los datos de entrada para producir un resultado, se centra más en las funciones necesarias para realizar los cálculos que en la forma de realizar esos cálculos como ocurre en la programación imperativa. En la programación declarativa el código expresa mejor la intención y suele requerir menos código y estos son algunos motivos de por qué usar la programación funcional.

Las funciones tiene como característica que no cambian los valores de entrada sino que en base a ellos producen unos datos de salida nuevos, otra de sus características es que si se usan los mismos valores de entrada se producen los mismos valores de salida. Un primer paso hacia la programación funcional es usar datos inmutables.

Dicho esto un código no se evalúa únicamente por la cantidad de lineas de código que contiene menos lineas no siempre es mejor si otra variable a tener en cuenta es la legibilidad que facilite la compresión del código a otra persona y a uno mismo en un futuro.

Me parece que ha sido hace mucho menos pero Java 8 fue publicado ya nada más y nada menos que hace casi cuatro años, una de las mayores modificaciones al lenguaje Java desde Java 5. Una de la nuevas características añadidas más destacadas fue la incorporación de las funciones _lambda_ que posibilitan la programación funcional. Las _lambdas_ combinado con los _streams_, otra de las nuevas características, en las colecciones hacen posible escribir con muchas menos líneas de código y de una forma mucho más natural y legible para la misma funcionalidad que en versiones anteriores. Las [nuevas características añadidas al lenguaje en Java 8][blogbitix-17] ya por si solas son una gran mejora sin embargo a algunos no les parecen suficientes, una de las librerías Java del momento es [Vavr][vavr] que mejora y añade nuevas funcionalidades basándose en las novedades básicas añadidas al lenguaje en la versión 8.

Varv se define a si misma como una librería funcional para Java 8+. Vavr proporciona colecciones inmutables, las necesarias funciones y estructuras de control para operar estos valores. El resultado es bello y simplemente funciona.

Java 8 no incorpora todo lo que podría en el JDK por decisión de los desarrolladores, ya que una de los principios que guían el desarrollo de Java es la compatibilidad hacia atrás e incorporar cosas en el lenguaje o JDK que en un momento determinado hasta que no demuestran que son realmente útiles y beneficiosas. Conservar la compatibilidad hacia atrás es una fortaleza pero que puede dar la sensación que Java siempre va un paso por detrás en incorporar novedades, aún así complementado con librerías como Vavr en el caso de las programación funcional se echa de menos menos otros lenguajes como [Kotlin][kotlin] o [Clojure][clojure].

{{< image
    gallery="true"
    image1="image:vavr-overview.png" optionsthumb1="300x200" title1="Jerarquía de clases de Vavr"
    caption="Jerarquía de clases de Vavr" >}}

Los principios que sigue la librería Vavr y que forman la tendencia en la programación y la programación funcional son:

* Efectos colaterales: los cambios de estado son considerados dañinos si afectan al programa de una forma no deseada.
* Transparencia referencial: una función o expresión tiene esta propiedad si puede ser reemplazada por su valor sin afectar al comportamiento del programa. Dicho de otra forma, dados los mismos datos de entrada el resultado de la función o expresión es el mismo. Una función es _pura_ si todas las expresiones que contiene tienen la propiedad de _transparencia referencial_.
* Pensar en valores: los valores más interesantes son aquellos que son inmutables ya que son _thread-safe_ no necesitando mecanismos de sincronización en su acceso o modificación, son estables para las funciones _equals_ y _hashCode_ siendo confiables como claves _hash_ y no necesitan ser clonados.
* Estructuras de datos: proporciona una colección rica de estructuras de datos funcionales apoyándose en la funciones _lambda_. Son un reemplazo para las colecciones estándar de Java, la única interfaz que comparten es [Iterable](https://docs.oracle.com/javase/9/docs/api/java/lang/Iterable.html). Las colecciones de Java ocultan los detalles de implementación y las estructuras de datos internas pero son _colecciones mutables_. Las _colecciones inmutables_ en Java se proporcionan como envoltorios que lanzan una excepción al intentarlas modificar. La _colecciones persistentes_ son efectivamente inmutables realizando pequeñas modificaciones y conservando las estructuras anteriores y nuevas y permitiendo consultar y modificar cualquiera de sus versiones.
* Estructuras de datos funcionales: son aquellas estructuras de datos inmutables, persistentes y los métodos tienen la propiedad de transparencia referencial.
* Colecciones: los _stream_ de Java para las colecciones son una forma de recorrerlas, realizar una computación y obtener una nueva colección. Los _stream_ de Vavr no están tan relacionados con las colecciones.

Vavr proporciona una representación bien diseñada de algunos de los tipos más básicos que aparentemente están ausentes o son rudimentarios en Java: _Tuple_, _Value_ y _λ_ (función _lambda_). Entre las funcionalidades proporcionadas por Vavr están:

* Tuplas: son una caja para contener varios objetos evitando la necesidad de crear una clase especifica si esta no tiene ningún comportamiento asociado. Vavr proporciona tuplas hasta de 8 elementos, de [Tuple0](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/Tuple0.html) a [Tuple8](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/Tuple8.html).
* Funciones: la programación funcional se basa en los valores y la transformación de esos valores usando funciones. Java 8 proporciona la clase [Function](https://docs.oracle.com/javase/9/docs/api/java/util/function/package-summary.html) que acepta solo un parámetro y la clase [BiFunction](https://docs.oracle.com/javase/9/docs/api/java/util/function/package-summary.html) que acepta dos. En Vavr las interfaces funcionales van de [Function0](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/Function0.html) hasta [Function8](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/Function8.html). Es posible aplicar conceptos como _composition_, _lifting_, _partial application_, _currying_ o _memoization_.
* Valores: los valores en Vavr son inmutables. Algunos objetos [Value](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/Value.html) proporcionados son: [Option](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/control/Option.html), [Try](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/control/Try.html), [Lazy](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/Lazy.html), [Either](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/control/Either.html), [Future](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/concurrent/Future.html), [Validation](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/control/Validation.html).
* Colecciones: se ha diseñado una nueva librería de colecciones para Java que cumple con los requerimientos de la programación funcional e inmutabilidad. [List](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/List.html), [Queue](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/Queue.html), [SortedSet](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/SortedSet.html), [Seq](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/Seq.html), [Set](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/Set.html), [Map](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/Map.html), [Stream](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/Stream.html), [Traversable](https://static.javadoc.io/io.vavr/vavr/0.10.3/io/vavr/collection/Traversable.html), ...

{{< image
    gallery="true"
    image1="image:collections-seq.png" optionsthumb1="300x200" title1="Jerarquía de clases de Seq"
    image2="image:collections-set-map.png" optionsthumb2="300x200" title2="Jerarquía de clases de Set y Map"
    caption="Jerarquía de clases de Seq, Set y Map" >}}

* _Pattern matching_: son una especie de sentencia _switch_ que son evaluadas como una expresión y que retornan un valor.

Entre la [documentación de Varv](https://www.vavr.io/vavr-docs) hay numerosos ejemplos de código de todo lo anterior que recomiendo leer. En el siguiente ejemplo de código incluyo algunos posibles casos de uso de varias de las funcionalidades anteriores. En definitiva la librería Vavr complementa y añade a Java algunas de las características presentes en la programación funcional de otros lenguajes.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

La librería Varv es una de las que pongo como ejemplo en el artículo [La triste realidad de Java, versiones antiguas][blogbitix-266], si es útil no usarla puede hacer que programar en Java no sea todo lo placentero que podría ser. Algunas de las críticas que recibe Java no tienen validez usando las herramientas o librerías adecuadas porque en cierta medida las herramientas importan aunque por ahí circule la idea de que las herramientas no importan, para una persona de negocio quizá no sin embargo para un desarrollador sí.

{{< sourcecode git="blog-ejemplos/tree/master/Vavr" command="./gradlew run" >}}

{{< reference >}}
* [Documentación de Vavr](https://docs.vavr.io/)
* [Javadoc de Vavr](https://www.javadoc.io/doc/io.vavr/vavr)
{{< /reference >}}

{{% /post %}}
