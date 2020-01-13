---
pid: 271
type: "post"
title: "Obtener información de la pila de las excepciones"
url: "/2017/10/obtener-informacion-de-la-pila-de-las-excepciones/"
date: 2017-10-15T12:15:00+02:00
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

Las excepciones son un mecanismo incorporado en algunos lenguajes como Java para el manejo de errores y condiciones de error. En la implementación de las excepciones en los lenguajes hay diferencias, por ejemplo, en Java hay [excepciones checked y uncheked][blogbitix-270] y en lenguajes como [C#][csharp] o [Groovy][groovy] todas las excepciones son consideradas _unchecked_. En cualquier caso son una mejor forma de forzar a gestionar las condiciones de error que se producen que el comprobar no obligatoriamente el valor de retorno de una función, incluso JavaScript incorpora excepciones.

Las palabras reservadas en Java para el manejo de excepciones son _try_, _catch_ , _finally_, _throw_ y _throws_. El manejo de algunas excepciones consiste en emitir su pila de llamadas o _stacktrace_ en la terminal o en el sistema de _logging_. El _stacktrace_ contiene un mensaje de error, los métodos de la pila de llamadas del _thread_ que la causó junto con el número de la línea. Además, las excepciones puede tener asociada una excepción causa por ejemplo un [SQLException](https://docs.oracle.com/javase/9/docs/api/java/sql/SQLException.html) puede ser causado por un [IOException](https://docs.oracle.com/javase/9/docs/api/java/io/IOException.html) por fallo de comunicación con el servidor de base de datos.

Todas las excepciones en Java heredan de [Throwable](https://docs.oracle.com/javase/9/docs/api/java/lang/Throwable.html) y entre los métodos que tiene esta clase está [getStackTrace()](https://docs.oracle.com/javase/9/docs/api/java/lang/Throwable.html#getStackTrace--) que devuelve un _array_ de [StackTraceElement](https://docs.oracle.com/javase/9/docs/api/java/lang/StackTraceElement.html) ordenado del último método llamado al primero. Con los métodos de la clase _StackTraceElement_ obtenemos el nombre de la clase, el archivo, el nombre del método y la linea de código de esa llamada.

Con esta información podemos imprimir en la terminal un informe de excepción diferente del que genera el método [printStackTrace()](https://docs.oracle.com/javase/9/docs/api/java/lang/Throwable.html#printStackTrace--). En el ejemplo limitando el informe de la pila de llamadas a los tres últimos métodos del _stacktrace_.

{{< code file="Throwable.java" language="java" options="" >}}
{{< code file="jshell.out" language="plaintext" options="" >}}

Si en una aplicación manejamos varios hilos con [Thread.getAllStackTraces()](https://docs.oracle.com/javase/9/docs/api/java/lang/Thread.html#getAllStackTraces--) obtenemos las pilas de llamadas de todos los hilos y con [Thread.getStackTrace()](https://docs.oracle.com/javase/9/docs/api/java/lang/Thread.html#getStackTrace--) el del hilo en concreto que con [Thread.currentThread()](https://docs.oracle.com/javase/9/docs/api/java/lang/Thread.html#currentThread--) sería el actual. Con el _array_ de _StackTraceElement_ obtenidos de los hilos podemos obtener un informe personalizado y la situación de cada uno, el método [dumpStack()](https://docs.oracle.com/javase/9/docs/api/java/lang/Thread.html#dumpStack--) genera el _stacktrace_ en la salida de error.

Entre [las novedades de Java 9][blogbitix-264] está la clase [StackWalker](https://docs.oracle.com/javase/9/docs/api/java/lang/StackWalker.html) para procesar los elementos de la pila del _thread_ actual usando _streams_ y funciones _lambda_.

{{% /post %}}
