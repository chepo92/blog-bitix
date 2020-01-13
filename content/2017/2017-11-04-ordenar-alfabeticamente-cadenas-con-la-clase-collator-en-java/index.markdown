---
pid: 276
type: "post"
title: "Ordenar alfabéticamente cadenas con la clase Collator en Java"
url: "/2017/11/ordenar-alfabeticamente-cadenas-con-la-clase-collator-en-java/"
date: 2017-11-04T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Sin usar la clase _Collator_ incluida en el JDK al ordenar alfabéticamente una lista de palabras obtendremos en algún caso un resultado que nos extrañará y seguramente no sea lo que esperamos. La clase _String_ implementa la interfaz Comprable pero esta ordenación es en base al valor del código _unicode_ sin tener en cuenta los diferentes niveles de diferencias que se pueden usar según el _Locale_ y la clase _Collator_."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Quizá algunos digan que la aparentemente sencilla tarea de ordenar una lista de palabras es algo fácil de hacer con cualquier lenguaje de programación. La realidad es que puede complicarse en una buena cantidad si se ha de realizar con los caracteres del alfabeto de algunos lenguajes. La ordenación no es tan simple como realizar lo siguiente en código Java:

{{< code file="Sort.java" language="java" options="" >}}

Primeramente nos daremos cuenta de que la siguiente lista de nombres de provincias las ordena de una forma que quizá no es la que esperamos. En algunas páginas web se puede observar este error en algunos elementos de selección de opciones de nombres de paises, ciudades, provincias u otro conjunto de elementos que suelen estar ordenados alfabéticamente para facilitar el encontrar el elemento a seleccionar pero que si se da el caso de que hay variación de palabras con tildes y sin ellas y minúsculas y mayúsculas se presenta la ordenación incorrecta.

{{< code file="Sort.out" language="plaintext" options="" >}}

Como se observa las palabras con letras mayúsculas se ordenan antes que las palabras con letras en minúscula independientemente de la letra del alfabeto, seguramente esta no es la ordenación deseada. En algunos lenguajes como el español algo similar ocurre con las palabras que llevan tilde en alguna letra. Convertir las palabras a mayúsculas o minúsculas o eliminar las tildes por los mismos sin tilde previamente a hacer la ordenación además de no ser una buena solución no sirve para otros lenguajes con diferentes formas de tilde y marcas en las letras.

En Java la solución es utilizar la clase [Collator](https://docs.oracle.com/javase/9/docs/api/java/text/Collator.html), esta clase establece varios niveles en las que las letras se consideran diferentes. Por ejemplo, en español las letras _e_ y _f_ se consideran diferencias primarias (diferentes letras), _e_ y _é_ son diferencias secundarias (diferentes tildes) y _e_ y _E_ son diferencias terciarias (diferencias entre mayúsculas y minúsculas). Las diferencias entre caracteres dependen del [Locale](https://docs.oracle.com/javase/9/docs/api/java/util/Locale.html) y un _Collator_ se obtiene en base a él con el método estático [getInstance​(Locale)](https://docs.oracle.com/javase/9/docs/api/java/text/Collator.html#getInstance-java.util.Locale-). Con el método [setStrength(int)](https://docs.oracle.com/javase/9/docs/api/java/text/Collator.html#setStrength-int-) se establece el nivel de diferencias deseadas.

Usando la clase _Collator_ y realizando la ordenación de la misma lista anterior el resultado es diferente y seguramente más apropiado. Como la clase _Collator_ implementa la interfaz _Comparable_ podemos usarla como el comparador aplicar en el método [Arrays.sort(T[], Comparator<? super T>)](https://docs.oracle.com/javase/9/docs/api/java/util/Arrays.html#sort-T:A-java.util.Comparator-) o [List.sort(Comparator<? super E>)](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#sort-java.util.Comparator-).

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

Utilizando el _Collator_ con solo diferencias primarias _Cantabria_ se ordena al final de la lista por tener las letras _a_, _A_ y _Á_ una diferencia primaria con _C_. Con diferencias secundarias las letras _A_ y _a_ se ordenan antes que _Á_ por tener diferencias secundarias. Finalmente, con diferencias terciarias _a_ se ordena antes que _A_. 

{{< sourcecode git="blog-ejemplos/tree/master/JavaCollator" command="./gradlew run" >}}

{{% /post %}}
