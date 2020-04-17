---
pid: 476
type: "post"
title: "Argumentos de línea de comandos con JCommander en una aplicación Java"
url: "/2020/04/argumentos-de-linea-de-comandos-con-jcommander-en-una-aplicacion-java/"
date: 2020-04-17T16:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:jcommander.png"
tags: ["java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En Java la librería [JCommander][jcommander] simplifica procesar los argumentos de línea de comandos complejas. Los argumentos de un programa de línea de comandos pueden ser requeridos, opcionales, con múltiples valores y las opciones escribirse de forma abreviada o de forma larga, además de emitir una pequeña guía de uso del comando con esta información y descripciones.

Otras posibilidades que ofrece JCommander son convertir los argumentos a un tipo determinado, especificar el separador para los valores, validaciones personalizadas, cambiar el separador entre el nombre del argumento y los valores, internacionalización, parámetros dinámicos, sintaxis complejas donde varios comandos tengas su propia lista de argumentos. En la [documentación de JCommander][jcommander] están explicadas con ejemplos.

JCommander es muy útil en una aplicación Java que reciba por línea de comandos argumentos y valores, más si esa línea de comandos es compleja o es necesaria alguna de las funcionalidades que proporciona.

JCommander necesita de una clase que contenga la definición de los argumentos, esta misma clase sirve para recoger los valores indicados. Las propiedades se anotan con la anotación _@Parameter_, en sus atributos se indica si el argumento es requerido, tiene múltiples valores con _varaibleArtity_ o un número determinado con _arity_.

{{< code file="Arguments.java" language="java" options="" >}}

El siguiente programa utiliza los argumentos antreriores que recoge de la línea de comandos, al programa Java se le proporcionan en el parámetro _args_ del método _main_ que es el punto de entrada en la aplicación.

Si un argumento requerido no se indica se produce un error mostrando la ayuda de uso. El argumento _\-\-required_ es requerido, el argumento _\-\-optional_ es opcional y el argumento _\-\-values_ recibe varios valores. El programa simplemente emite un mensaje con los valores de los argumentos en la salida.

{{< code file="Main.java" language="java" options="" >}}

Su invocación desde [Gradle][gradle] indicando varios argumentos, en el primer caso usando los nombres de argumentos largos y en el segundo los nombres de los argumentos cortos para escribir menos caracteres en la linea de argumentos.

{{< code file="gradlew-run.sh" language="bash" options="" >}}

Si el argumento requerido no se proporciona o se indica la opción _\-\-help_ se muestra la ayuda de uso.

{{< code file="gradlew-run-usage.sh" language="bash" options="" >}}

Como dependencia en el proyecto se ha de indicar la librería de JCommander.

{{< code file="build.gradle" language="gradle" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JCommander" command="./gradlew run --args='--required --values a1 b2 c3 d4 --help'" %}}

{{% reference %}}
* [Simplified parser for complex command lines. Nov/Dec 2015](http://www.javamagazine.mozaicreader.com/NovDec2015#&pageSet=13&page=0&contentItem=0)
{{% /reference %}}

{{% /post %}}
