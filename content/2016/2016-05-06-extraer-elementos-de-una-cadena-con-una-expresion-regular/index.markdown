---
pid: 140
type: "post"
title: "Extraer elementos de una cadena con una expresión regular"
url: "/2016/05/extraer-elementos-de-una-cadena-con-una-expresion-regular/"
date: 2016-05-06T18:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Las expresiones regulares son muy útiles para comprobar si una cadena de texto o un subconjunto de ella cumple un determinado patrón. Un uso común de las expresiones regulares es para validar cadenas de texto pero también pueden usarse para obtener coincidencias de la cadena, esto se hace con los grupos de captura.

Por ejemplo, supongamos que tenemos un código de un producto formateado de la siguiente forma _123-123456&#47;1_, usando guiones y una barra para separar tres grupos de números. Y ahora aparte de validar el formato correcto del código del producto nos interesa obtener los tres grupos de números. En vez de separar la cadena con un [split](javadoc8:java/lang/String.html#split-java.lang.String-) por el caracter guión y barra de una forma que sería más laboriosa y difícil de mantener si hay algún cambio, vamos a usar los grupos de captura para obtener los tres grupos de números que forman el código.

Los grupos de captura se especifican mediante paréntesis, «(» y «)», en la expresión regular. En el caso del código usaremos la siguiente expresión regular:

{{< code file="regex.txt" language="plaintext" options="" >}}

En Java con la clase [Pattern](javadoc8:java/util/regex/Pattern.html) y [Matcher](javadoc8:java/util/regex/Matcher.html) podemos hacer las validaciones y obtener los grupos de captura de la usando el método [group](javadoc8:java/util/regex/Matcher.html#group-int-) de la clase Matcher:

{{< code file="Main.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:java-regex.png" optionsthumb1="300x200" title1="Extracción de valores de una cadena usando una expresión regular"
    caption="Extracción de valores de una cadena usando una expresión regular" >}}

Esto simplifica el extraer los valores de un cadena, de una manera menos frágil y más fácil de leer posteriormente el código fuente que usar la función _split_ por uno o varios determinados caracteres, esta es una cadena bastante sencilla si el patrón es más complejo el código usando _split_ puede complicarse notablemente.

La clase Matcher contiene más métodos útiles, por ejemplo, con los métodos [start](javadoc8:java/util/regex/Matcher.html#start-int-) y [end](javadoc8:java/util/regex/Matcher.html#end-int-) nos es posible conocer la posición inicial y final de cada grupo de captura. En el caso del código de este ejemplo ya los conocemos de antemano pero usando alguna expresión que capture un número varible de caracteres como «X+», «X*», «X{n,}» o «{X{n,m}}» nos permitirá conocer las posiciones inicial y final.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRegex" command="./gradlew run" >}}

{{< reference >}}
* [Using Regular Expressions to Extract a Value in Java](https://stackoverflow.com/questions/237061/using-regular-expressions-to-extract-a-value-in-java)
* [Los cuantificadores greedy, reluctant y posessive en expresiones regulares][blogbitix-257]
* [Referencias a grupos de captura en expresiones regulares y reemplazos][blogbitix-300]
{{< /reference >}}

{{% /post %}}
