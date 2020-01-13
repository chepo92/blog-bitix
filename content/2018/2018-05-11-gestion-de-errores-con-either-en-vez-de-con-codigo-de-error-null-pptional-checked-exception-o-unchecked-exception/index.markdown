---
pid: 319
type: "post"
title: "Gestión de errores con Either o Try en vez de con código de error, null, Optional, checked exception o unchecked exception"
url: "/2018/05/gestion-de-errores-con-either-o-try-en-vez-de-con-codigo-de-error-null-optional-checked-exception-o-unchecked-exception/"
aliases: ["/2018/05/gestion-de-errores-con-either-o-try-en-vez-de-con-codigo-de-error-null-pptional-checked-exception-o-unchecked-exception/", "/2018/05/gestion-de-errores-con-either-en-vez-de-con-codigo-de-error-null-pptional-checked-exception-o-unchecked-exception/"]
date: 2018-05-11T20:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "A lo largo del tiempo han surgido varias formas de gestionar las excepciones. En C hace muchos años eran con códigos de error, en Java se incorporaron en el lenguaje las excepciones _checked_ o _uncheked_ o la nueva clase Optional en Java cada una con sus ventajas y y algunas deficiencias. Más recientemente usando un tipo tal que _Either<L,R>_ son otra forma para el tratamiento de errores sobre las opciones anteriores."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Una parte importante para el correcto funcionamiento de un programa corresponde a la gestión de errores que pueden producirse en su ejecución. Si se trata de un programa que se comunica vía interfaz de red ha de estar preparado ante la situación que la conexión se pierda o se produzcan errores en la transmisión porque por ejemplo se ha desconectado el cable de red o la WiFi no es estable. Si se trata de un programa que guarda datos en el almacenamiento persistente también pueden producirse errores como que el archivo ya existe, el directorio no existe o el espacio del disco se ha agotado. Los posibles casos de error que pueden producirse en un programa son muchos y variados.

En épocas más antiguas una forma de gestionar los errores era y sigue siendo con códigos de error donde la función o el código de salida de un programa retorna un 0 si no se ha producido ningún error o un número distinto de cero si se ha producido algún error, con un código de salida diferente por cada error. Dado que no hay obligación de gestionar adecuadamente el código de salida a veces no se hace con el consiguiente posible mal funcionamiento del programa. Otra forma de código de error es retornar un valor _null_ en un método o función pero que no tratado adecuadamente producirá una excepción de tipo [NullPointerExcetion](https://docs.oracle.com/javase/10/docs/api/java/lang/NullPointerException.html). Con la introducción de la clase [Optional](https://docs.oracle.com/javase/10/docs/api/java/util/Optional.html) entre otras [novedades de Java 8][blogbitix-17] los punteros nulos se gestionan más adecuadamente pero en los casos en los que se devuelve un puntero _null_ no se proporciona información de cuál ha sido la condición de error que se ha producido.

Para obligar a gestionar adecuadamente las condiciones de error e informar de que posibles condiciones de error se pueden producir se incorporaron en algunos lenguajes las excepciones como en Java. Las excepciones _checked_, aquellas que son declaradas y de obligado tratamiento, garantizan que sean tratadas de alguna forma pero algo molestas con las sentencias _try-catch-exception_. Las excepciones _unchecked_, aquellas que no es necesario declararlas y no de obligado tratamiento, son arriesgadas ya que al igual que los códigos de error no obliga a darles un tratamiento además de que no se declaran que excepciones es posible que sean lanzadas.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

En algunos lenguajes con capacidades funcionales se ha propuesto una nueva forma para la gestión de condiciones de error, en Java y con la librería [Vavr][vavr] se proporciona la clase [Either](http://static.javadoc.io/io.vavr/vavr/0.9.2/io/vavr/control/Either.html) que es un tipo con la definición de tipo genérico _Either\<L,R\>_. Que un método devuelva _Either<BigDecmal, Exception>_ indica que puede devolver en el caso del ejemplo un _Integer_ en el caso correcto o una excepción en el caso de error. Un potencial fallo de esta opción es que no hay obligación de usar un _try-catch_ pero si se quiere usar el valor devuelto en caso correcto se ha de tener en cuenta el potencial caso de que lo haya es valor derecho. La clase _Either_ proporciona métodos para tratar adecuadamente en caso de que esté presente el valor izquierdo o el valor derecho.

La clase _Either_ tiene múltiples métodos para comprobar si el valor que tiene es un valor del tipo izquierdo, derecho, obtener el valor izquierdo, derecho y múltiples métodos que hereda de [Value](http://static.javadoc.io/io.vavr/vavr/0.9.2/io/vavr/Value.html).

En vez de retornar un _Either_ en un método usando Vavr se puede utilizar la clase [Try](https://static.javadoc.io/io.vavr/vavr/0.9.2/io/vavr/control/Try.html) como otra forma de gestionar las excepciones. Con _Try_ el método no es necesario que devuelva un _Either_ de modo que retorne el valor en el caso correcto y lance una exepción en caso de error. El _Try_ puede convertirse a un _Either_.

{{< sourcecode git="blog-ejemplos/tree/master/JavaException" command="./gradlew run" >}}

{{< reference >}}
* [Las excepciones del lenguaje Java][blogbitix-270]
* [Java Without If](http://ashtonkemerling.com/blog/2017/01/26/java-without-if/)
* [Either Documentation](http://www.vavr.io/vavr-docs/#_either)
{{< /reference >}}

{{% /post %}}
