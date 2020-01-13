---
pid: 405
type: "post"
title: "Lanzar excepciones checked como si fueran unchecked en Java"
url: "/2019/05/lanzar-excepciones-checked-como-si-fueran-unchecked-en-java/"
date: 2019-05-17T16:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

No es una buena práctica al igual que al no recomendado [antipatrón de inicialización de variables con dobles llaves][blogbitix-253] pero en el uso de _streams_ que aceptan _lambdas_ es un rodeo a la limitación de no poder lanzar excepciones _checked_ por no estar definida en su API.

En Java existen dos tipos de excepciones las _checked_ que son de obligada captura o ser lanzadas y las _unchecked_ que no son de obligada captura ni ser declaradas. Al usar _streams_ y algunas interfaces funcionales de Java como [Consumer](javadoc11:java.base/java/util/function/Consumer.html) que no lanzan excepciones el compilador generará un error de compilación si la implementación lanza una excepción.

En el siguiente código el compilador producirá un error de compilación ya que intenta lanzar una excepción pero la interfaz funcional que implementa no lo permite.

{{< code file="Main1.java" language="java" options="" >}}
{{< code file="System.out-1" language="plaintext" options="" >}}

Aunque en Java existen las excepciones _checked_ y estas han de ser declaradas no es una limitación a nivel de la máquina virtual, se puede lanzar una excepción _checked_ aunque no esté declarada. El siguiente código compila sin errores y se ejecutan, lanzándose la excepción aunque el método _main()_ no la declare. Esto es debido a que en el método _sneakyThrow()_ _T_ es inferido como del tipo _RuntimeException_.

{{< code file="Main2.java" language="java" options="" >}}
{{< code file="System.out-2" language="plaintext" options="" >}}

Con la clase [Unsafe](http://www.docjar.com/docs/api/sun/misc/Unsafe.html) interna del JDK (que tampoco es recomendable usar porque en el futuro será eliminada) también es posible lanzar una excepción _checked_ sin declararla, aunque _Main3.getUnsafe().throwException(e)_ lanza una excepción el método _main()_ no la declara.

{{< code file="Main3.java" language="java" options="" >}}
{{< code file="System.out-3" language="plaintext" options="" >}}

Es posible lanzar excepciones _checked_ como si fuesen _uncheked_, no es una buena práctica ya que no permite al compilador cumplir con la tarea a la que está destinada que es detectar errores en tiempo de compilación potenciales problemas además de no indicar en la API que un método lanza una excepción que debería se tratada. En la librería [Vavr][vavr] con la clase [Try](https://www.javadoc.io/doc/io.vavr/vavr/1.0.0-alpha-2) se puede usar un método que lanza una excepción, tratarla si se produce y convertir el método en uno que no lanza excepciones adecuado para el uso en los _streams_.

{{< code file="Main4.java" language="java" options="" >}}

La opción más recomendable es crear una clase como _Try_ o usar la de la librería Vavr en vez de una de las posibilidades no recomendadas anteriores.

{{< reference >}}
* [Las excepciones del lenguaje Java][blogbitix-270]
* [La controversia sobre las excepciones checked y unchecked][blogbitix-313]
* [Gestión de errores con Either o Try en vez de con código de error, null, Optional, checked exception o unchecked exception][blogbitix-319]
* [Is there a way to throw an exception without adding the throws declaration?](https://stackoverflow.com/questions/4519557/is-there-a-way-to-throw-an-exception-without-adding-the-throws-declaration)
* [Java SneakyThrow of exceptions, type erasure](https://stackoverflow.com/questions/14038649/java-sneakythrow-of-exceptions-type-erasure)
* [A peculiar feature of exception type inference in Java 8](https://stackoverflow.com/questions/31316581/a-peculiar-feature-of-exception-type-inference-in-java-8)
{{< /reference >}}

{{% /post %}}
