---
pid: 265
type: "post"
title: "JShell la herramienta REPL incorporada en Java 9"
url: "/2017/09/jshell-la-herramienta-repl-incorporada-en-java-9/"
date: 2017-09-29T21:00:00+02:00
updated: 2017-09-29T22:00:00+02:00
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

Una de las [novedades de Java 9][blogbitix-263] es la incorporación de una herramienta _Read-Evaluation-Print-Loop_ o REPL similar a las disponibles en otros lenguajes dinámicos para permitir evaluar pequeños ejemplos de código, hacer pruebas o como herramienta para alguien que esté aprendiendo a programar sin la necesidad de utilizar un entorno integrado de desarrollo, una herramienta de construcción y los varios archivos y comandos necesarios para compilar y ejecutar el código Java.

El comando de la herramienta [JShell](https://docs.oracle.com/javase/9/jshell/introduction-jshell.htm) es _jshell_ que inicia un símbolo del sistema donde empezar a introducir las expresiones, se sale de _jshell_ con el comando `/exit`.

{{< image
    gallery="true"
    image1="image:jshell.png" optionsthumb1="300x200" title1="JShell"
    caption="JShell" >}}

Se pueden crear variables, crear y modificar definiciones de métodos y clases. Cada una de estas expresiones crea un _snippet_ de código que pueden listarse con el comando `/list`. Al introducir las expresiones se soporta completado y asistencia de código con la tecla tabulador como ayuda para saber que métodos tiene un objeto.

Se pueden crear clases y métodos como en el ejemplo de la serie de Fibonacci implementada con un [Stream](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html) de la cual se muestran los elementos de la serie menores que el número 100.

{{< image
    gallery="true"
    image1="image:jshell-expressions.png" optionsthumb1="300x200" title1="Expresiones"
    image2="image:jshell-completion.png" optionsthumb2="300x200" title2="Asistencia de código"        
    caption="Expresiones y asistencia de código" >}}
{{< image
    gallery="true"
    image1="image:jshell-methods.png" optionsthumb1="300x200" title1="Serie de Fibonacci con un Stream en un método"
    caption="Serie de Fibonacci con un Stream en un método" >}}

Para diferenciar las expresiones de código de los comandos estos últimos son precedidos por el caracter _/_. Hay varios como los ya citados para listar los _snippets_ de código y salir de _jshell_, otros son para listar las definiciones de variables con `/vars`, métodos con `/methods`, tipos con `/types` e _imports_ con `/imports`. La lista completa de comandos puede obtenerse pulsando la tecla tabulador después de la barra de comando.

{{< image
    gallery="true"
    image1="image:jshell-commands.png" optionsthumb1="300x200" title1="Comandos"
    caption="Comandos" >}}

Para los _snippets_ multilínea o algo complejos puede utilizarse un editor externo con el comando `/edit`. El editor de nuestra preferencia se establece con el comando `/set`.

También se pueden [añadir módulos o librerías](https://docs.oracle.com/javase/9/jshell/external-code.htm) para usar las clases y tipos que contengan con el comando `/env` y las opciones `\-\-add-modules`  `\-\-module-path` y `\-\-class-path`. Los _snippets_ creados en una sesión pueden guardarse en un archivo con el comando `/save` y ser cargados al inicio de JShell o con el comando `/open`.

En la [guía oficial de JShell](https://docs.oracle.com/javase/9/jshell/toc.htm) se comenta algunas opciones más de esta nueva herramienta.

{{< reference >}}
* [Getting Started with JShell](https://www.pluralsight.com/guides/getting-started-with-jshell-part-1)
{{< /reference >}}

{{% /post %}}
