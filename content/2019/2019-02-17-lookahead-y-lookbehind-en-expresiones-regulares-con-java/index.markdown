---
pid: 385
type: "post"
title: "Lookahead y lookbehind en expresiones regulares con Java"
url: "/2019/02/lookahead-y-lookbehind-en-expresiones-regulares-con-java/"
date: 2019-02-17T10:00:00+01:00
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

Las expresiones regulares son un gran invento y muy útil para comprobar que una cadena cumple el patrón definido en la expresión regular, hay coincidencias en partes de la cadena y para reemplazar coincidencias. Son muy potentes para realizar estas tareas pero al mismo tiempo pueden volverse en cierta medida complicadas.

Una de las funcionalidades que soportan las cadenas es búsqueda hacia delante o _lookahead_ y búsqueda hacia atrás o _lookbehind_. La primera permite examinar los siguientes caracteres de la cadena analizada y la segunda los caracteres pasados.

Hay diferentes formas de _lookahead_, en Java la construcción que permite hacer _lookahead_ es _(?=X)_ donde _X_ es la expresión siguiente, se puede negar la expresión en el caso de querer que no se cumpla _X_ con _(?!X)_. También existe _lookbehind_ con la construcción _(?<=X)_ para negar que no se cumpla _X_ se ha de emplear _(?<!X)_, como su nombre sugiere en vez de mirar hacia adelante mira hacia atrás en los caracteres ya analizados.

Una aplicación práctica en la que usar _lookahead_ es para ocultar los números de una tarjeta de crédito, una cuenta bancaria o un _bearer token_ de un API REST excepto los cuatro últimos caracteres, este podría ser el caso de que esta información sea incluida en los archivos de _log_ de una aplicación que por seguridad es recomendable ocultar. En el artículo [Ofuscar datos sensibles en las trazas con Log4j][blogbitix-383] comento varias formas de hacerlo.

Una tarjeta de crédito está formada por 4 grupos de 4 dígitos separados por espacios cumpliendo la expresión regular _\d{4} \d{4} \d{4} \d{4}_ y un _bearer token_ puede seguir la expresión regular _Bearer \w+_. Para ocultar la información de estas cadenas excepto los cuatro últimos caracteres hay que comprobar que los primeros complen el patrón añadiéndolos en un grupo de captura para su reemplazo posterior y mirar los cuatro siguientes si también lo cumplen fuera del grupo de captura. En el caso de la tarjeta de crédito se mira que la expresión cumple los primeros números de una tarjeta de crédito y le siguen los restantes, la primera parte se incluye en un grupo de captura con los paréntesis.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="SecuredMessage.java" language="java" options="" >}}
{{< code file="log4j2.yaml" language="Yaml" options="" >}}

El resultado es el siguiente:

{{< code file="System.out" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaLog4j" command="./gradlew run" %}}

{{< reference >}}
* [Referencias a grupos de captura en expresiones regulares y reemplazos][blogbitix-300]
* [Los cuantificadores greedy, reluctant y possessive en expresiones regulares][blogbitix-257]
* [Pattern](javadoc11:java.base/java/util/regex/Pattern.html)
{{< /reference >}}

{{% /post %}}
