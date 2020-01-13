---
pid: 313
type: "post"
title: "La controversia sobre las excepciones checked y unchecked"
url: "/2018/04/la-controversia-sobre-las-excepciones-checked-y-unchecked/"
aliases: ["/2018/04/la-controversia-sobre-las-excepciones-checked-y-uncheked/"]
date: 2018-04-20T17:00:00+02:00
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

Las excepciones son una forma de gestionar las condiciones de error que se dan en los programas. En el lenguaje C se utiliza el valor de retorno de la función para determinar la condición de error que se ha producido, el problema es que comprobar el valor de retorno puede ignorarse y la gestión de errores está mezclada con la tarea del programa.

El lenguaje Java utiliza un [mecanismo de excepciones][blogbitix-270], las excepciones son objetos que se lanzan cuando se produce una condición de error. Todas las excepciones en Java heredan de [Throwable](https://docs.oracle.com/javase/10/docs/api/java/lang/Throwable.html) subdividiéndose en [Error](https://docs.oracle.com/javase/10/docs/api/java/lang/Error.html) y [Exception](https://docs.oracle.com/javase/10/docs/api/java/lang/Exception.html), las primeras son condiciones de error del sistema y las segundas condiciones de error del programa. A su vez las _Exception_ pueden ser _checked_ si heredan de esta y son aquellas que el compilador fuerza a que sean capturadas no pudiendo ignorarse, han de capturarse en una construcción _try catch_ o declarar que el método puede lanzar la excepción no capturada. Las excepciones _uncheked_ heredan de [RuntimeException](https://docs.oracle.com/javase/10/docs/api/java/lang/RuntimeException.html) que heredan a su vez de _Exception_ pero tienen la particularidad de que no es necesario capturarlas ni declararlas como que se pueden lanzar debido a que se consideran condiciones de error en la programación como un acceso a un _array_ fuera de rango que produce un [ArrayIndexOutOfBounds](https://docs.oracle.com/javase/10/docs/api/java/lang/ArrayIndexOutOfBoundsException.html), el conocido [NullPointerException](https://docs.oracle.com/javase/10/docs/api/java/lang/NullPointerException.html) cuando se utiliza una referencia nula, otro es [ArithmeticException](https://docs.oracle.com/javase/10/docs/api/java/lang/ArithmeticException.html) que se produce al dividir por 0.

Algunas ventajas de las excepciones son:

* Separar el código que gestiona los errores del código con el caso principal del programa.
* Propagar errores hacia arriba en la pila de llamadas.
* Agrupar y diferenciar entre diferentes tipos de errores.

Hay una cierta polémica sobre si las excepciones _checked_ son una buena idea. Entre los motivos que se alegan en contra de su uso están que cambiar la firma de un método añadiendo una nueva excepción como lanzable hace que el código que usase ese método podría ocasionar errores de compilación y que hace necesario el tratarla o declararla en la cadena de métodos hasta que sea tratada. Otro motivo es que a mayor nivel en la jerarquía de llamada en los métodos se necesitarán manejar una lista amplia de excepciones.

En el lado contrario las excepciones se consideran que son buenas porque conocer las condiciones de error o excepción que puede lanzar el método forma parte del contrato del método y es necesario para realizar un correcto manejo de errores. Las excepciones _checked_ pueden parecer un incordio pero son necesarias para hacer un correcto manejo de errores y evitar que el programa falle por no tratar las condiciones de error de las que advertirían. Por otro lado no deberían silenciarse con un bloque _catch_ vacío sin una buena razón. En las excepciones _checked_ el compilador es capaz de advertir si alguna excepción no ha sido capturada o lanzada.

Como regla general las excepciones _checked_ se usan cuando el programa es capaz de recuperarse del error y tratarlo adecuadamente, las _uncheked_ cuando se trata de un error de programación o no se puede hacer nada para recuperarse.

En el siguiente código se observa como capturar, lanzar y declarar excepciones en las firmas de los métodos en Java en una construcción _try catch finally_.

{{< code file="Bank.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}

En el aparatado referncia incluyo unos buenos enlaces que amplian y detallan más apropiadamente la controversia sobre las excepciones _checked_ y _unchecked_.

{{< reference >}}
* [Exceptions tutorial](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html)
* [Unchecked Exceptions — The Controversy](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)
* [Advantages of Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/advantages.html)
* [Why are Exceptions not Checked in .NET?](https://stackoverflow.com/questions/124143/why-are-exceptions-not-checked-in-net#126122)
* [The Trouble with Checked Exceptions](http://www.artima.com/intv/handcuffs.html)
{{< /reference >}}

{{% /post %}}
