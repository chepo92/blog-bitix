---
pid: 132
type: "post"
title: "Cómo ejecutar un proceso del sistema con Java"
url: "/2016/03/como-ejecutar-un-proceso-del-sistema-con-java/"
date: 2016-03-12T22:30:00+01:00
updated: 2016-03-19T11:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "gnu-linux", "planeta-codigo"]
summary: "Dada la popularidad de Java es difícil que no encontremos en el propio JDK o librería la funcionalidad que necesitamos y sino en algún comando del sistema de los muchos que tenemos a disposición en un sistema GNU/Linux. Esto nos da acceso a una gran cantidad de funcionalidades también desde los programas Java."
---

{{% post %}}

{{< logotype image1="java.svg" image2="gnu.svg" image3="linux.svg" >}}

Java de por sí incluye una amplia colección de clases con las funcionalidades principales que podamos necesitar, si no lo ofrece en la [API][javadoc-8] es muy posible que haya una librería que lo proporcione. Pero en algún momento quizá se nos dé el caso que un comando del sistema devuelve la información o realiza la acción que necesitamos. Puede ser una un comando del sistema [GNU][gnu]/[Linux][linux], [Windows][windows] o [Mac OS X][mac] o un [_script_ en Java][blogbitix-108], [Python][python], [Ruby][ruby] u otro lenguaje de programación. A través de las clase [Process](javadoc8:java/lang/Process.html) y [ProcessBuilder](javadoc8:java/lang/ProcessBuilder.html) nos es posible lanzar un proceso de cualquier comando del sistema y acceder a su entrada estándar, salida estándar y salida de error.

La clase Process representa el proceso que lancemos, tenemos dos formas de obtener un referencia esta clase, una con [Runtime.getInstance().exec()](javadoc8:java/lang/Runtime.html#exec-java.lang.String-) y otra con la clase ProcessBuilder con ambas nos será posible establecer variables de entorno, el directorio de trabajo o redirigir la entrada y salida. Obtenida la referencia a una instancia de Process con el método [getInputStream()](javadoc8:java/lang/Process.html#getInputStream--) leeremos la salida estándar del proceso, con [getErrorInputStream()](javadoc8:java/lang/Process.html#getErrorStream--) la salida de errores y con [getOutputStream()](javadoc8:java/lang/Process.html#getOutputStream--) podremos enviar contenido a la entrada estándar. Otros métodos de utilidad nos permitirán conocer si el proceso sigue vivo con [isAlive()](javadoc8:java/lang/Process.html#isAlive--), obtener el código de salida con [exitValue()](javadoc8:java/lang/Process.html#exitValue--), esperar a que termine con [waitFor()](javadoc8:java/lang/Process.html#waitFor--). Finalmente con [destroy()](javadoc8:java/lang/Process.html#destroy--) podemos terminar de forma abrupta el proceso.

No son de [las novedades destacables de Java 8][blogbitix-17] pero desde esta versión se puede establecer una espera máxima a la terminación del proceso, las variables de entorno y el directorio de trabajo. Y más cambios pequeños pero muy útiles como estos habrá sido añadidos a otras clases de la API.

Con esto nos es posible hacer cualquier cosa que el sistema pueda hacer según los comandos que tenga instalados o puedan instalarse y esto significa que está al alcance de Java en un sistema GNU/Linux el poder de su linea de comandos. Por ejemplo, supongamos que queremos saber en un programa Java el tiempo que lleva iniciado un sistema que nos sería útil si queremos implementar algún tipo de [métricas de monitorización con Spring Boot Actuator][blogbitix-113]. Java no tiene en su API un método que proporcione esta información, sin embargo, en GNU/Linux podemos saber este dato usando el sistema de archivos virtual accesible en _/proc_, concretamente en el archivo _/proc/uptime_. Este archivo contiene dos números el primero es el que nos interesaría siendo el número de segundos transcurridos desde que el sistema se inició y el segundo el tiempo que ha permanecido en reposo. El segundo número en un sistema con un procesador con varios núcleos físicos o lógicos es probable que se más alto que el primero.

{{< code file="uptime.sh" language="bash" options="" >}}

Este sería el programa Java para conocer el tiempo que un sistema GNU/Linux lleva arrancado. Primero se crea el proceso, se espera a que termine y se obtiene su código de salida, se obtiene la salida del proceso (entrada para el programa), se procesa el resultado y se imprimen los segudos que lleva el sistema iniciado.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="Main.out" language="plaintext" options="" >}}

Ejecutar un comando del sistema nos da acceso a un nuevo mundo de posibilidades aunque si podemos es mejor tener disponible un API para invocar la funcionalidad que queremos en vez de una integración más frágil leyendo y escribiendo en la salida, de error y entrada del proceso. En el siguiente artículo basándome es esto comentaré [cómo enviar un correo electrónico en Java firmado digitalmente con GPG][blogbitix-133], aplicando esto mismo podemos [obtener el país y ciudad en base a la dirección IP][blogbitix-147] en una aplicación web.

{{< sourcecode git="blog-ejemplos/tree/master/JavaProcess" command="./gradlew run" >}}

{{< reference >}}
* [Javadoc ProcessBuilder](javadoc8:java/lang/ProcessBuilder.html)
* [Javadoc Process](javadoc8:java/lang/Process.html)
* [Javadoc Runtime](javadoc8:java/lang/Runtime.html)
* [Novedades y nuevas características de Java 8][blogbitix-17]
* [Cómo firmar correos electrónicos con GPG y JavaMail][blogbitix-133]
* [Escribir en la misma línea de la consola y obtener el ancho y alto de la terminal con Java][blogbitix-393]
{{< /reference >}}

{{% /post %}}
