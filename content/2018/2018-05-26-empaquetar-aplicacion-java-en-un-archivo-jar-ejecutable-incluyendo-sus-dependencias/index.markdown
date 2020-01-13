---
pid: 324
type: "post"
title: "Empaquetar una aplicación Java en un archivo jar ejecutable incluyendo sus dependencias"
url: "/2018/05/empaquetar-una-aplicacion-java-en-un-archivo-jar-ejecutable-incluyendo-sus-dependencias/"
date: 2018-05-26T12:15:00+02:00
updated: 2019-10-10T19:10:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Las aplicaciones Java se distribuyen en uno o varios archivos _jar_. Si queremos facilitar la distribución de la aplicación con un único archivo _jar_ existe la posibilidad de reempaquetar el _jar_ de la aplicación y sus dependencias en tiempo de ejecución en un nuevo archivo _jar_ que lo contenga todo, a este nuevo _jar_ se le conoce como _uberjar_ o _fatjar_."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

La forma de distribuir el código compilado a _bytecode_ en Java es a través de archivos de extensión _jar_. Los archivos _jar_ no son más que archivos comprimidos den formato _zip_. Si se les cambia de extensión y se descomprimen se extrae su contenido seguramente con una buena cantidad de archivos de extensión _class_ que es la extensión para los archivos Java compilados a _bytecode_ y que la máquina virtual interpreta para su ejecución. Las librerías que use la aplicación también se deben distribuir junto a esta para que funcione, por lo que la aplicación se distribuirá en forma de una colección de archivos _jar_.

Una aplicación distribuida en forma de múltiples archivos archivos _jar_ se ejecuta con una línea de comandos como la siguiente en la que el parámetro _-cp_ indica las ubicaciones donde se buscarán librerías _jar_ y archivos _class_ si se distribuyen de forma individual, el segundo parámetro indica la clase que contiene el método _main_ que inicia la aplicación. Previamente hay que generar el artefacto del proyecto con [Gradle][gradle].

{{< code file="gradlew-assemble.sh" language="bash" options="" >}}

En este caso se trata de una aplicación que emite un arte en formato _ascii_ en la terminal donde para cada linea se usa un color diferente mediante la librería [Jansi][jansi] que la aplicación tiene como dependencia.

{{< code file="java-cp.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:java-classpath.png" optionsthumb1="650x450" title1="Aplicación de ejemplo ejecutada con classpath"
    caption="Aplicación de ejemplo ejecutada con classpath" >}}

Cuando la aplicación está contenida en un archivo _jar_ y se ejecuta con la opción _-jar_ se ignora el parámetro _-cp_ y no se indica la clase _main_ del punto de entrada de la aplicación. En el caso de las aplicaciones distribuidas en un archivo _jar_ tanto la clase _main_ como las dependencias se indican en un archivo de manifiesto incluido en el propio archivo _jar_. El archivo se ubica en _META-INF/MANIFEST.MF_ dentro del _jar_, es un archivo de texto donde se indican varias propiedades en forma de atributo y valor, una en cada linea. Un ejemplo de archivo de manifiesto sería el siguiente:

{{< code file="MANIFEST.MF" language="plaintext" options="" >}}

La propiedad _Manifest-Version_ y _Created-By_ son informativas de la versión del archivo de manifiesto y el autor de la librería _jar_. La propiedad _Main-Class_ indica la clase _main_ de la librería o aplicación y la propiedad _Class-Path_ es una lista separada por espacios de librerías adicionales. Las propiedades _Main-Class_ y _Class-Path_ son los parámetros que indicamos como parámetros en el comando _java_ anterior. Con el archivo _jar_, su manifiesto y las librerías la aplicación Java se inicia de forma un poco más sencilla que antes al no tener que indicar ni la clase _main_ ni el _classpath_.

{{< code file="java-jar.sh" language="bash" options="" >}}

Como en este caso, si Java no se encuentra la dependencia de Jansi y se produce la siguiente excepción que indica que no se ha encontrado una clase necesaria.

{{< code file="Exception.out" language="plaintext" options="" >}}

Sin embargo, para distribuir la aplicación aún hay que distribuir varios archivos _jar_, el de la aplicación y los _jar_ de las librerías que necesite la aplicación. En este caso solo es un _jar_ adicional ya que la aplicación solo tiene una dependencia y esta transitivamente no tiene ninguna otra pero en una aplicación más compleja el número de dependencias puede llegar a la centena.

Para hacer la distribución más sencilla hay una posibilidad que usan algunos programadores de Java que es reempaquetar todas las clases del _jar_ de la aplicación y de las librerías en un nuevo _jar_, a esta opción de reempaquetar las clases se le conoce como _uberjar_ o _fatjar_. En la herramienta de construcción Gradle existe un _plugin_ para realizar esta tarea de creación del _uberjar_ pero también se puede hacer definiendo una tarea sin necesidad del _plugin_. El archivo de Gradle adaptado para producir un _uberjar_ de forma automatizada es el siguiente. La tarea importante en el caso del ejemplo es _uberJar_.

{{< code file="build.gradle" language="groovy" options="" >}}

Con el siguiente comando la ejecución de la aplicación empaquetada como _uberjar_ produce el mismo resultado. Con el _uberjar_ en el archivo de manifiesto no es necesario incluir el atributo _Class-Path_ ya que todas las clases necesarias tanto de la aplicación como de las dependencias ha sido empaquetadas en el _jar_.

{{< code file="gradlew-assemble.sh" language="bash" options="" >}}
{{< code file="java-jar-uberjar.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:java-jar-uberjar.png" optionsthumb1="650x450" title1="Aplicación de ejemplo ejecutada con uberjar"
    caption="Aplicación de ejemplo ejecutada con uberjar" >}}

Hay un [_plugin_ de Gradle para generar _uberjars_](https://imperceptiblethoughts.com/shadow/) que ofrece varias opciones para filtrar los archivos que se incluyen en el _fatjar_, fusionar los archivos de servicios que permiten extender funcionalidades y otras tareas para realizar generar el distribuible con _distShadowZip_ y _distShadowTar_. [Spring Boot][spring-boot] ofrece algo similar con la tarea _bootRepackage_ pero si no se trata de una aplicación que use Spring Boot lo anterior sirve para cualquier otra aplicación Java como sería el caso de una [aplicación de escritorio que utiliza JavaFX][blogbitix-100].

Que la aplicación sea un único _jar_ tiene la ventaja que el distribuible es más sencillo y facilita desplegarlo en un entorno de producción, en el caso de usar [Docker][docker] también es más adecuado un único archivo.

Entre la documentación hay unas muy buenas [guías prácticas sobre Java](https://docs.oracle.com/javase/tutorial/index.html), una de ellas sobre el [empaqueado de apliaciones en archivos _jar_](https://docs.oracle.com/javase/tutorial/deployment/jar/index.html). La información que se encuentra en estas guías y tutoriales es muy valiosa para cualquier programador que use el lenguaje Java.

{{< sourcecode git="blog-ejemplos/tree/master/JavaUberjar" command="./gradlew assemble && java -jar build/libs/JavaUberjar-uberjar.jar" >}}

{{< reference >}}
* [Creating a Fat Jar in Gradle](https://www.baeldung.com/gradle-fat-jar)
* [Shadow Plugin User Guide & Examples](https://imperceptiblethoughts.com/shadow/)
* [Gradle – Create a Jar file with dependencies](http://www.mkyong.com/gradle/gradle-create-a-jar-file-with-dependencies/)
* [Packing your Java application as one (or fat) JAR](https://www.javacodegeeks.com/2012/11/packing-your-java-application-as-one-or-fat-jar.html)
{{< /reference >}}

{{% /post %}}
