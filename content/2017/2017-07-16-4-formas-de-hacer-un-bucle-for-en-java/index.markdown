---
pid: 247
type: "post"
title: "4 formas de hacer un bucle for en Java"
url: "/2017/07/4-formas-de-hacer-un-bucle-for-en-java/"
date: 2017-07-16T12:30:00+02:00
updated: 2020-06-02T17:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "La forma habitual en Java de hacer un bucle es con una sentecia _for_ o _while_ pero con el añadido de los iteradores en Java 5 no hace falta tener una variable para conservar el índice del bucle. Ya en Java 8 se han añadido los _streams_ que ofrecen otras nuevas formas de iterar sobre los elementos de una colección en este último caso con técnicas propias de lenguajes funcionales."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Hasta Java 5 para hacer un bucle desde 0 a N elementos había que usar una variable para mantener un contador, hacer una comparación para comprobar si se había llegado al límite e incrementar la variable en la siguiente ejecución. El código era bastante verboso y dado que los bucles son una construcción básica de cualquier lenguaje de programación es empleada numerosas veces en cualquier algoritmo.

Algunos de estos ejemplos de bucles son utilizables a partir de Java 5, en versiones más recientes se han añadido muchas otras novedades como [las _lamdas_, _streams_, metodos en interfaces y API para fechas][blogbitix-17] en Java 8, [la modularidad, _try-with-resource_ mejorado, jlink o un nuevo modelo de publicación][blogbitix-263]  en Java 9, [inferencia de tipos para variables locales][blogbitix-306] en Java 10, [un cliente HTTP][blogbitix-350] en Java 11 y otras [novedades en el lenguaje y la plataforma Java][blogbitix-serie-java-platform].

### Bucle for

Antes de Java 5 un bucle _for_ de 0 a 5 y de una colección se realizaba de la siguiente manera:

{{< code file="For.java" language="java" options="" >}}
{{< code file="Iterator.java" language="java" options="" >}}

### Bucle foreach

En Java 5 el bucle _for_ se enriqueció notablemente, con el _foreach_ se puede recorrer una colección y cualquier objeto que implemente la interfaz [Iterable](javadoc8:java/lang/Iterable.html). Con el bucle _foreach_ una [Collection](javadoc8:java/util/Collection.html) se recorre de la siguiente manera.

{{< code file="Foreach.java" language="java" options="" >}}

### Bucle con Iterable

Pero esto es para las colecciones si se quiere hacer un bucle un número fijo de veces como en el primer caso de 0 a 5 conociendo que para usar el _foreach_ basta que le indiquemos un objeto que implemente la interfaz _Iterable_ podemos usar la siguiente expresión y su implementación que tiene la ventaja de no tener que incluir la expresión de comparación y el incremento de la variable, la clase _Counter_ implementa la interfaz _Iterable_ y devuelve un _Iterator_ sobre los valores del rango indicado:

{{< code file="CounterIterable.java" language="java" options="" >}}
{{< code file="Counter.java" language="java" options="" >}}

### Bucle con streams

En Java 8 con la introducción de los [Stream](javadoc8:java/util/stream/Stream.html) y de [IntStream](javadoc8:java/util/stream/IntStream.html) podemos usar el método [range](javadoc8:java/util/stream/IntStream.html#range-int-int-) y [rangeClosed](javadoc8:java/util/stream/IntStream.html#rangeClosed-int-int-) para obtener un _Stream_ de enteros y hacer un bucle con un comportamiento similar a los anteriores.

{{< code file="Stream.java" language="java" options="" >}}

Los _Stream_ de Java 8 están muy bien para simplificar algunas operaciones complejas pero para un bucle _for_ sencillo tiene sus inconvenientes como ofuscar significativamente el _stacktrace_ en caso de producirse alguna excepción. Se puede usar cualquier opción pero la primera con el tradicional bucle _for_ sea la menos recomendable teniendo a nuestra disposición la clase _Counter_ con Java 5 o los _Stream_ y _lambdas_ con Java 8.

### Ejemplo con los distintos tipos de bucle

El siguiente programa muestra las cuatro opciones, su salida en la consola sería el siguiente:

{{< code file="Main.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:bucles-java.png" optionsthumb1="300x200" title1="4 formas de hacer un bucle en Java"
    caption="4 formas de hacer un bucle en Java" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaForeach" command="./gradlew run" >}}

{{% /post %}}
