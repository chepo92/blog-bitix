---
pid: 300
type: "post"
title: "Referencias a grupos de captura en expresiones regulares y reemplazos"
url: "/2018/02/referencias-a-grupos-de-captura-en-expresiones-regulares-y-reemplazos/"
date: 2018-02-17T17:00:00+01:00
updated: 2018-11-04T00:00:00+01:00
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

Las expresiones regulares definen un patrón que permite encontrar coincidencias en cadenas de caracteres, reemplazar coincidencias o validar que las cadenas de caracteres cumplen el patrón. Las expresiones regulares son potentes expresiones que resultan útiles en muchos casos pero son expresiones que pueden llegar a ser complejas cuyo uso se aprende con la experiencia. Una de las funcionalidades que poseen es hacer referencia a grupos de captura anteriores en la propia expresión regular o en la cadena de reemplazo.

Hacer referencia al grupo de captura en las cadenas de reemplazo es especialmente útil ya que sirve no solo para reemplazar coincidencias por cadenas previamente conocidas sino para transformar las coincidencias encontradas por otras expresiones. El caso de las cuentas de correo a continuación es un ejemplo práctico donde se aprecia este uso.

Supongamos que queremos corregir un texto en el que por error hay palabras repetidas de forma seguida y queremos eliminar esos duplicados de palabras. Por ejemplo, tenemos un texto como el siguiente en el algunas palabras como _ipsum_, _eiusmod_, _fugiat_, _sint_ y _proident_ están repetidas:

{{< code file="lorem-ipsum.txt" language="plaintext" options="" >}}

La expresión regular para encontrar las coincidencias deberá para cada palabra comprobar si la siguiente es la misma. Cada palabra la incluimos en un grupo y posteriormente hacemos referencia a ese grupo con _\\1_ para ver si la siguiente palabra es la misma. Con la siguiente expresión regular y código encontraremos las palabras repetidas una a continuación de la otra.

Para hacer referencia en los grupos de coindiciendia en la cadena de reemplazo hay que usar un caracter _$_ y un número con la posición del grupo de reemplazo.

Un ejemplo más útil de los grupos de referencia en la cadena de reemplazo sería reemplazar en un texto plano las direcciones de correo electrónico por sus enlaces en HTML. Usando una expresión regular para encontrar las direcciones de correo electrónico y sustituirlas por los enlaces HTML haciendo uso de los grupos de captura y referencias a ellos.

{{< code file="Main.java" language="java" options="" >}}

La salida del ejemplo en la terminal es el siguiente.

{{< code file="system.out" language="plaintext" options="" >}}

A los grupos de captura se les puede dar un nombre y referenciarlos por él en vez de por un número identificador como en el de este ejemplo. A un grupo de captura se le da un nombre con la siguiente expresión _(?\<name\>X)_ donde _name_ es el nombre del grupo de captura de la expresión _X_. Posteriormente con la expresión _${name}_ se hace referencia al grupo de captura, también en la cadena de reemplazo.

En la [documentación Javadoc de la clase Pattern](https://docs.oracle.com/javase/9/docs/api/java/util/regex/Pattern.html) está detallado el soporte en Java para usar expresiones regulares. Otra aplicación práctica de los grupos de captura es [formatear con colores en la terminal una sentencia SQL o código fuente de un lenguaje][blogbitix-359].

{{< sourcecode git="blog-ejemplos/tree/master/JavaRegexpReferenceGroups" command="./gradlew run" >}}

{{< reference >}}
* [Extraer elementos de una cadena con una expresión regular][blogbitix-140]
* [Los cuantificadores greedy, reluctant y possessive en expresiones regulares][blogbitix-257]
* [Ofuscar datos sensibles en las trazas con Log4j][blogbitix-383]
* [Lookahead y lookbehind en expresiones regulares con Java][blogbitix-385]
* [Regex Named Groups in Java](https://stackoverflow.com/questions/415580/regex-named-groups-in-java)
* [Using a regular expression to validate an email address](https://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address)
{{< /reference >}}

{{% /post %}}
