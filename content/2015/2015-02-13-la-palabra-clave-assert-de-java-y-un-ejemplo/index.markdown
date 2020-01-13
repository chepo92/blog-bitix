---
pid: 67
type: "post"
title: "La palabra clave assert de Java y un ejemplo"
url: "/2015/02/la-palabra-clave-assert-de-java-y-un-ejemplo/"
date: 2015-02-13T19:55:54+01:00
updated: 2015-02-14T23:30:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Aunque no es muy utilizada, para tareas de depuración es una ayuda que bien empleada permite descubrir el origen de algún _bug_ en un programa. Los _asserts_ en Java son ignorados, por tanto no suponen ninguna penalización en tiempo de ejecucción, salvo que se indique de forma explicita en la ejecución del programa, esto permite añadirlos al código fuente y activarlos en el momento que se desee realizar una depuración para encontrar errores."
---

{{% post %}}

{{< logotype image="java.svg" >}}

La palabra clave o reservada _assert_ sirve para aseverar que en un determinado momento del código una determinada condición debe ser cierta. Está disponible en [Java][java] desde la versión 1.4 pero al menos yo con bastantes años de experiencia en programación en este lenguaje aún no he usado de forma amplia y posiblemente le pase a mucha de la gente y aún así hemos sobrevivido durante todo este tiempo.

Sin embargo, puede resultarnos bastante útil. Una de las situaciones en que puede ayudarnos es para descubrir una condición no válida en el momento del _assert_ y no donde se produce una excepción en otro punto del código que puede no ser la causa real del error. Por ejemplo, supongamos que un método privado no acepta un parámetro con valor _null_, una variable no puede ser _null_ o una colección no ha de estar vacía por poner solo unos pocos ejemplos de condiciones, si en un punto del código estamos seguros que es un error que esa condición sea falsa podemos hacer que el programa falle con una excepción ahí y no más tarde a consecuencia de que las condiciones no se cumplían. Otra forma en la que nos ayudan los _assert_ es como documentación, en vez de poner un comentario o en el javadoc indicando una condición que se ha de cumplir podemos ponerlo con un _assert_. Normalmente se usan en:

* Precondiciones: en métodos privados que el llamador ha de cumplir.
* Postcondiciones: para verificar el resultado prometido por el método.
* _Class invariants_: para validar el estado de una clase según está definido en su contrato, siempre se debe cumplir independientemente de las operaciones que se realicen.
* Código no alcanzable en tiempo de ejecución: partes del programa que se espera que no sea alcanzable, como cláusulas _else_ o _default_ en sentencias _switch_.

Y no deben usarse para:

* No se deben usar para comprobar argumentos en métodos públicos: los _asserts_ pueden habilitarse o deshabilitarse, comprobar los argumentos se considera parte de las responsabilidades del método y su especificación.
* No se deben usar para realizar tareas: ya que los _asserts_ pueden deshabilitarse las tareas dejarían de ejecutarse y de proporcionar la funcionalidad del programa.

Nos pueden entrar dudas de cuando emplear un _assert_ y cuando un _if_ o una excepción. Las excepciones se encargan de hacer que el programa sea robusto controlando las situaciones inesperadas pero posibles, los _assert_ se encargan de que el programa sea correcto. Los _assert_ deberían ser usados para asegurar algo, mientras que las excepciones deberían usarse para comprobar algo que podría ocurrir. Un _assert_ termina la ejecución (ya que no se suele capturar la excepción que se produce) mientras que una excepción permite al programa continuar con la ejecución. Los _asserts_ no deben ser sustitutos de condiciones de validación que debería hacer el programa en métodos públicos de una clase. Los _assert_ son una herramienta en tiempo de desarrollo, las excepciones además son una herramienta para la ejecución en producción.

Un pequeño ejemplo de los _asserts_ podría ser el siguiente en la que en el método _nextNumber_ hay una postcondición según la cual el método debe devolver un número entero entre 0 y 9 (incluidos):

{{< code file="Main.java" language="java" options="" >}}

Un _assert_ cuya expresión se evalúa como falso produce una excepción del tipo [java.lang.AssertionError](javadoc8:java/lang/AssertionError.html) pero para ello se han de habilitar en tiempo de ejecución como el parámetro _-ea_ de la máquina virtual. En [eclipse][eclipse] podemos cambiarlo en la configuración de ejecución del programa en la pestaña _Arguments_ y _VM arguments_ tal como se ven en la siguiente captura de pantalla:

{{< image
    gallery="true"
    image1="image:activacion-assert-java.png" optionsthumb1="300x200" title1="Activación asserts en eclipse" >}}

En la primera de las siguentes capturas de pantalla puede verse como el programa se ejecuta sin producir una excepción a pesar de no cumplirse el _assert_ del método _nextNumber_ ya que los _asserts_ no fueron activados, en la segunda captura activando los _assert_ se lanza una excepción al no cumplirse la postcondición.

{{< image
    gallery="true"
    image1="image:no-excepcion.png" optionsthumb1="300x200" title1="Ejecución sin excepción"
    image1="image:excepcion-assert.png" optionsthumb1="300x200" title2="Ejecución con excepción" >}}

En el recomendable artículo [_Programming With Assertions_](https://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html) se comenta de forma más detallada y amplia el funcionamiento y uso adecuado de la palabra clave _assert_ de Java.

El funcionamiento de los _assert_ en [Groovy][groovy] es distinto. En groovy los _assert_ no pueden deshabilitarse, están siempre habilitados y por tanto no hace falta usar el parámetro _-ea_ de la máquina virtual que empleamos en Java, no es un _bug_ es una _feature_. Por el contrario, en Java los _asserts_ se consideran una herramienta en tiempo de desarrollo o depuración y por tanto podemos habilitarlos mientras desarrollamos y no habilitarlos en producción, una de las razones es que los _asserts_ pueden suponer una penalización de rendimiento si las comprobaciones son costosas en tiempo o carga de CPU cosa que no queremos en producción donde el código ya se considera correcto.

{{< reference >}}
* [Programming With Assertions](https://docs.oracle.com/javase/8/docs/technotes/guides/language/assert.html)
* [Correct use Java "assert" keyword](https://stackoverflow.com/questions/18907487/correct-use-java-assert-keyword)
* [When to use an assertion and when to use an exception](https://stackoverflow.com/questions/1957645/when-to-use-an-assertion-and-when-to-use-an-exception)
* [Is Groovy's assert a good idea for production code, unlike Java's assert?](https://stackoverflow.com/questions/8077757/is-groovys-assert-a-good-idea-for-production-code-unlike-javas-assert)
* [Java: Should I assert or throw AssertionError?](http://www.flowstopper.org/2013/11/java-should-i-assert-or-throw.html)
{{< /reference >}}

{{% /post %}}
