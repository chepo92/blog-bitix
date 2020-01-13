---
pid: 108
type: "post"
title: "Java para tareas de «scripting»"
url: "/2015/11/java-para-tareas-de-scripting/"
date: 2015-11-07T15:00:00+01:00
updated: 2015-11-10T19:01:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Para programar pequeños _scripts_ normalmente se suele emplear el intérprete de comandos en GNU/Linux bash o si es algo complejo un lenguaje interpretado como Python, Ruby o Groovy. Pero no pienses que Java no puede ser empleado para tareas de _scripting_, en este artículo muestro que problemas presentan los lenguajes interpretados o dinámicos, que ventajas tiene usar Java y finalmente como usarlo con la misma sencillez que un lenguaje interpretado para el nicho funcional de los _scripts_."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Java puede emplearse para cualquier propósito desde aplicaciones web en la parte servidora, aplicaciones de escritorio como escribí en dos [artículos introductorios sobre JavaFX][blogbitix-100], juegos con alta calidad gráfica incluso para dispositivos de capacidades más reducidas como <abbr title="Internet of Things">IoT</abbr> o embebidos y verdaderamente limitados. Para cualquier plataforma en la que haya disponible una <abbr title="Java Virtual Machine">JVM</abbr> se pueden ejecutar aplicaciones programadas con el lenguaje Java. Sin embargo, hay multitud de otros lenguajes aunque solo una docena con un porcentaje de uso significativo que tratan de ocupar nichos de funcionalidades específicas. Unos pueden ser el análisis de datos como con el [lenguaje R][r] y otro la programación de pequeñas tareas, los _scripts_ o lenguajes de _scripting_.

Para los _scripts_ normalmente se han utilizado intérpretes como [Bash][bash] por su disponibilidad en cualquier sistema GNU/Linux o si se necesita un lenguaje más avanzado [Python][python], [Ruby][ruby] o [Groovy][groovy]. Cualquiera de estas opciones son empleadas para realizar tareas de _scripting_ que involucran desde generación de informes o archivos, envío de correos electrónicos hasta actualización de una base de datos relacional o nosql, cualquier cosa que queramos automatizar. Al no necesitar compilarse ni generar un artefacto extraño como los archivos _.class_ o _.jar_ de Java basta con escribir el _script_ con cualquier editor de texto y ejecutarlo con el intérprete correspondiente directamente desde el código fuente. El despliegue en un entorno de pruebas o producción es sencillo, basta con subir el código fuente de los _scripts_ a la máquina correspondiente donde se vaya a ejecutar y ejecutarlos, únicamente necesitaremos instalar la versión del intérprete adecuado y las dependencias adicionales del _script_ si necesita alguna como en Python posiblemente en un [virtualenv](https://virtualenv.readthedocs.io/en/latest/).

Pero al contrario de lo que piensa mucha gente Java puede ser usado perfectamente como lenguaje de _scripting_ con igual simpleza o más que Python, Ruby o Groovy. Java es más verboso sí pero en mi opinión estas son [10 razones para seguir usando Java][blogbitix-81] entre ellas el compilador, en el artículo [Java for everything](https://www.teamten.com/lawrence/writings/java-for-everything.html) dan una buena extensa descripción de porque usar Java también para los _scripts_ y donde se expone una forma de usarlo, en este artículo mostraré otra creo que mejor. El compilador de Java validará al menos que el código no tienen errores léxicos o de sintaxis que en un lenguaje interpretado son fáciles de introducir cuando hace meses que no modificas el _script_ olvidando gran parte del código, cuando no has escrito tú el _script_, cuando hay prisa y presión para hacer las modificaciones por un error en producción apremiante, cuando el tamaño del código empieza a ser considerable, es modificado por varias personas o cuando no se domina el lenguaje profundamente. ¿Qué prefieres, algo más verbosidad (ahora menos con varias de las [novedades introducidas en Java 8][blogbitix-17]) o evitar que un _script_ importante en producción se quede a medio ejecutar por un error de compilación y provoque alguna catástrofe? Yo lo tengo claro, que el compilador me salve el culo.

En cuanto al número de líneas necesarias para hacer un _script_ en Java puede que se necesiten alguna más por su menor azúcar sintáctico o la falta de algún método de utilidad no disponible en la propia <abbr title="Application Programming Interface">API</abbr> del <abbr title="Java Development Kit">JDK</abbr> ajustado a la necesidad pero si el _script_ es pequeño ¿realmente importan unas pocas lineas más? y si el _script_ es grande el compilador y el <abbr title="Integrated Development Environment">IDE</abbr> serán de gran ayuda.

Entrando a discutir el apartado de la simplicidad de ejecución de un lenguaje interpretado, en Java se puede conseguir lo mismo con [Gradle][gradle]. Gradle se encargará de descargar la dependencias que necesite la aplicación y junto con el [_wrapper_ de ejecución de Gradle](https://docs.gradle.org/current/userguide/gradle_wrapper.html) no necesitaremos tener nada más instalado que la máquina virtual de Java. Si el _script_ tiene algún error de compilación el compilador lo indicará y no se ejecutará, podremos hacer que se ejecuten previamente los teses unitarios si disponemos de ellos. Con el _plugin_ _application_ solo podremos tener un único programa con su _main_ pero definiendo tareas de tipo [JavaExec](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html) podremos definir cuantos diferentes _scripts_ deseemos que ejecutarán el método _main_ de diferentes clases.

Teniendo 3 pequeños _scripts_ de ejemplo el archivo _build.gradle_ que necesitaríamos sería el siguiente definiendo de forma dinámica una tarea _runScript_ y otra _createStartScripts_ para cada uno, los _scripts_ son lo más sencillos posible emitiendo en la consola un mensaje pero podrían hacer cualquier cosa, incluso [usar Spring Boot][blogbitix-103]:

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="Script1.java" language="java" options="" >}}

Si necesitamos ejecutar los _scripts_ cada cierto tiempo en _cron_ podemos programar el comando que queremos ejecutar regularmente, en vez de usar el comando <code>gradlew</code> que comprueba si ha cambiado el código fuente y necesita compilarse de nuevo tardando un poco más en iniciarse, con una tarea de tipo [CreateStartScripts](https://docs.gradle.org/current/dsl/org.gradle.jvm.application.tasks.CreateStartScripts.html) podemos generar el _script_ bash tanto para sistemas de la familia Unix como Windows que realmente lanzará los _scripts_ Java. La tarea de Gradle _createStartScripts_ genera todos los _scripts_ de inicio del proyecto.

{{< code file="gradle-build.sh" language="bash" options="" >}}

La ejecución de cada uno de los _scripts_ con _gradlew_ y usando los _scripts_ lanzadores sería:

{{< code file="gradle-run.sh" language="bash" options="" >}}
{{< asciinema id="29509" caption="Ejecución de <i>scripts</i> en Java" >}}

Para un proyecto de _scripts_ con Java necesitaremos un archivo _build.gradle_ y cierta estructura de directorios pero no es algo suficiente complejo como para descartar Java como lenguaje para este propósito más teniendo en cuenta sus ventajas, a parte de la JVM el proyecto de _scripts_ será autocontenido incluso para las dependencias con lo que su despliegue en un entorno de producción será muy sencillo basta con copiar archivos (<abbr title="File Transfer Protocol">FTP</abbr>, _wget_, ...) o hacer <code>git clone</code> y <code>git pull</code> directamente del repositorio de código fuente para actualizarlo, si se usan los _scripts_ lanzadores después de actualizar el código fuente del proyecto será necesario reconstruirlo con <code>./gradlew build</code>.

{{< sourcecode git="blog-ejemplos/tree/master/JavaScripts" command="./gradlew runScript1" >}}

{{< reference >}}
* [Java for everything](http://www.teamten.com/lawrence/writings/java-for-everything.html)
* [Herramienta de construccion Gradle][elblogdepicodev-98]
* [Usar Gradle mediante Gradle Wrapper][elblogdepicodev-100]
* [Aplicacion Java autocontenida con Spring Boot][blogbitix-103]
{{< /reference >}}

{{% /post %}}
