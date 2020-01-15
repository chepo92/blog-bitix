---
pid: 270
type: "post"
title: "Las excepciones del lenguaje Java"
url: "/2017/10/las-excepciones-del-lenguaje-java/"
date: 2017-10-15T11:30:00+02:00
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

Las excepciones son un mecanismo para capturar y producir condiciones de error en un programa. Es una alternativa al retorno de valores especiales que indique errores y que en estos no son obligatorios su correcta comprobación.

En Java las excepciones están incorporadas en el lenguaje desde la primera versión y que en posteriores se han mejorado. Las palabras reservadas del lenguaje para las excepciones son _try_, _catch_, _finally_ para la captura y _throw_ y _throws_ para lanzar excepciones en los métodos.

Las excepciones son objetos que extienden la clase [Throwable](https://docs.oracle.com/javase/9/docs/api/java/lang/Throwable.html) de la que en el JDK es extendida por la clase [Error](https://docs.oracle.com/javase/9/docs/api/java/lang/Error.html) y [Exception](https://docs.oracle.com/javase/9/docs/api/java/lang/Exception.html) de la que de esta última a su vez hereda [RuntimeException](https://docs.oracle.com/javase/9/docs/api/java/lang/RuntimeException.html). Entre las comprobaciones que realiza el compilador está que las excepciones _checked_ lanzadas por un método son capturadas por el código que lo llama.

Solo los objetos que hereden de _Throwable_ pueden ser lanzados y capturados en los bloques _try-catch_. Las excepciones que heredan de _Error_ son empleadas para casos en los que se han agotado recursos del sistema como la memoria o condiciones de error en el sistema que generalmente impiden el correcto funcionamiento del programa y de difícil tratamiento salvo terminar la ejecución. Las excepciones que heredan de _RuntimeExcepcion_ también se les conoce como _uncheked exception_ y no necesitan declararse en los métodos para ser lanzadas, son empleadas para advertir de errores de programación como dividir por cero produciendo [ArithmeticException](https://docs.oracle.com/javase/9/docs/api/java/lang/ArithmeticException.html), desreferenciar un puntero nulo produciendo [NullPointerException](https://docs.oracle.com/javase/9/docs/api/java/lang/NullPointerException.html) o acceder a una posición inválida de una array produciendo [ArrayIndexOutOfBoundsException](https://docs.oracle.com/javase/9/docs/api/java/lang/ArrayIndexOutOfBoundsException.html). Las excepciones que heredan de _Exception_ pero no de _RuntimeException_ se denominan _cheked exceptions_ y han declararse en los métodos siendo de obligada captura o relanzado para su tratamiento en el método anterior en la pila de llamadas.

Este sería un ejemplo de código que hace uso de una excepción propia para detectar una condición de error mostrando una excepción _checked_ y _unchecked_.

{{< code file="Account.java" language="java" options="" >}}
{{< code file="InvalidAmountException.java" language="java" options="" >}}
{{< code file="InvalidOperationException.java" language="java" options="" >}}
{{< code file="jshell.out" language="plaintext" options="" >}}

Aunque las excepciones son un buen mecanismo para el tratamiento de errores se les critica que rompen el flujo de ejecución de un programa y tienen un coste en rendimiento, aunque esta penalización de rendimiento en la mayoría de programas es irrelevante. Algunas recomendaciones que se hace para usar de forma efectiva las excepciones son:

* Las excepciones no deben reemplazar comprobaciones simples con sentencias _if_.
* No se deben microgestionar las excepciones. Los bloques _try-catch_ deben contener bloques de código de varias líneas de código en vez una única sentencia por cada bloque _try-catch_.
* Se debe hacer un buen uso de la jerarquía de excepciones y capturar la excepción que se vaya a tratar en el bloque _catch_. Una excepción se puede convertir en otra por ejemplo convertir un _NumberFormatException_ a _IOException_.
* No se deben capturar excepciones para no hacer nada con ellas, esto es no debe haber bloques _catch_ vacíos.
* En algunos casos es mejor lanzar una excepción que un valor _null_ que posiblemente produzca un _NullPointerException_ en otra parte distante del código de dónde se devolvió el valor _null_.
* Propagar excepciones no es un signo de poca sabiduría, puede haber motivos para ello sobre todo si no se le puede dar un tratamiento adecuado.

Cuando se produce una excepción la clase [Throwable](https://docs.oracle.com/javase/9/docs/api/java/lang/Throwable.html) posee métodos para emitir en la salida un informe de la pila de llamadas, también se puede personalizar la salida. Esta información es esencial y muy útil para conocer la causa de un error ya que indica entre otras cosas cada uno de los métodos, línea en el código fuente y clases donde se ha producido la excepción.

Hay una cierta [controversia sobre las excepciones _checked_ y _unchecked_][blogbitix-313] ya que mejoran el control de errores pero pueden generar otros problemas. Ambas opciones tienen sus lados positivos y otros negativos. En Java se optó por implementar el mecanismo de excepciones donde las _checked_ es obligatorio tratarlas o lanzarlas a un nivel superior de la pila de llamadas.

El siguiente [tutorial sobre el manejo de las excepciones en Java](http://tutorials.jenkov.com/java-exception-handling/exception-hierarchies.html) las comenta desde el punto de vista teórico de como se usan y mejores prácticas al usarlas.

{{< reference >}}
* [Gestión de errores con Either en vez de con código de error, null, Optional, checked exception o unchecked exception][blogbitix-319]
{{< /reference >}}

{{% /post %}}
