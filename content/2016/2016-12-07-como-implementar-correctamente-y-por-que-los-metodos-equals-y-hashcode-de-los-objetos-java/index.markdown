---
pid: 199
type: "post"
title: "Cómo implementar correctamente y por qué los métodos equals y hashCode de los objetos Java"
url: "/2016/12/como-implementar-correctamente-y-por-que-los-metodos-equals-y-hashcode-de-los-objetos-java/"
date: 2016-12-07T11:00:00+01:00
updated: 2019-11-12T19:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Los métodos _equals_ y _hashCode_ son esenciales en las colecciones de objetos. Para su correcta implementación es necesario conocer unas cuantas propiedades que han de cumplir estos métodos. Pueden parecer sencillos pero no lo son tanto y una mala implementación posiblemente produzca algún tipo de error o comportamiento anómalo indeseado. En el siguiente artículo comento varias formas de implementarlos de forma sencilla y correcta."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En Java los métodos [equals](javadoc8:java/lang/Object.html#equals-java.lang.Object-) y [hashCode](javadoc8:java/lang/Object.html#hashCode--) están definidos en la raíz de la jerarquía de clases, esto es en la clase [Object](javadoc8:java/lang/Object.html), lo que significa que todas las instancias de objetos los poseen. Estos métodos son especialmente importantes ya que afectan al correcto funcionamiento de las colecciones como [Collection](javadoc8:java/util/Collection.html), [List](javadoc8:java/util/List.html), [Set](javadoc8:java/util/Set.html) y [Map](javadoc8:java/util/Map.html), colecciones, listas, conjuntos y mapas que es difícil que cualquier programa no use alguna implementación de ellas.

El método _equals_ es usado en las colecciones de tipo _List_, _Set_, y también _Map_ para determinar si un objeto ya está incluida en la colección, el método _hashCode_ es usado en los _Map_ para encontrar el objeto asociado a la clave. Dado que las colecciones son ampliamente usadas en cualquier programa la correcta implementación implementación de los métodos _equals_ y _hashCode_ es fundamental ya que de lo contrario descubriremos errores poco agradables.

Una de las cosas que tenemos que tener cuenta es que siempre que sobreescribamos el método _equals_ también debemos sobreescribir el método _hashCode_. Según el [contrato definido en la clase Object](javadoc8:java/lang/Object.html) deberemos saber que:

* Durante la ejecución del programa el método _hashCode_ debe retornar el mismo valor siempre que no se modifique la información usada en el método _equals_.
* Si dos objetos son iguales según sus métodos _equals_ entonces el valor devuelto por _hashCode_ en cada uno de los dos objetos debe devolver el mismo valor.
* Si dos objetos son distintos según sus métodos _equals_ el valor devuelto no ha de ser necesariamente distinto aunque se recomienda para mejorar el rendimiento de las colecciones _Map_.

### Cómo implementar el método _equals_

Según la [especificación del método equals](javadoc8:java/lang/Object.html#equals-java.lang.Object-) definido en la clase _Object_ debe tener las siguientes propiedades:

* Es reflexiva: para cualquier referencia no nula de <code>x</code>, <code>x.equals(x)</code> debe retornar _true_.
* Es simétrica: para cualquier referencia no nula de <code>x</code> e <code>y</code>, <code>x.equals(y)</code> debe retornar _true_ si y solo si <code>y.equals(x)</code> retorna _true_.
* Es transitiva: para cualquier referencia no nula de <code>x</code>, <code>y</code> y <code>z</code>, si <code>x.equals(y)</code> retorna _true_ y <code>y.equals(z)</code> retorna _true_ entonces <code>x.equals(z)</code> debe retornar _true_.
* Es consistente: para cualquier referencia no nula de <code>x</code> e <code>y</code>, múltiples invocaciones de <code>x.equals(y)</code> consistentemente debe retornar _true_ o _false_, si no se ha modificado la información utilizada en la comparación.
* Para para cualquier referencia no nula de <code>x</code>, <code>x.equals(null)</code> debe retornar _false_.

La implementación del método _equals_ de la clase _Object_ usa la equivalencia más restrictiva posible, esto es, para cualquier referencia no nula de _x_ e _y_ este método retorna _true_ si y solo si son el mismo objeto (_x == y_ tienen la misma referencia).

Hay dos formas comunes de implementar el método _equals_, una más restrictiva pero que cumple las propiedades y otra que no cumple completamente las propiedades pero es de utilidad en ciertos casos. Son las siguientes en las que cambia la sentencia que comprueba el tipo de la instancia del objeto con el que se está evaluando la igualdad. En el artículo [How to Implement Java’s equals Method Correctly](https://www.sitepoint.com/implement-javas-equals-method-correctly/) están descritas las implicaciones y motivo de existir de ambas variantes además de explicar que garantiza cada sentencia del método _equals_.

{{< code file="PhoneNumber-equals-1.java" language="java" options="" >}}
{{< code file="PhoneNumber-equals-2.java" language="java" options="" >}}

Usando la clase [EqualsBuilder](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/builder/EqualsBuilder.html) de la librería [commons-lang](https://commons.apache.org/proper/commons-lang/) la implementación es aparentemente similar pero en el caso de necesitar hacer comparaciones con datos de tipo _float_, _double_, _arrays_ u objetos hace la implementación un poco más sencilla. En los _float_ y _double_ para hacer la comparación deberíamos usar los métodos [Float.compare](javadoc8:java/lang/Float.html#compare-float-float-) y [Double.compare](javadoc8:java/lang/Double.html#compare-double-double-) y en los objetos deberemos tener en cuenta si la referencia es posible que se a nula para evitar la excepción [NullPointerException](javadoc8:java/lang/NullPointerException.html) cosas que la clase _EqualsBuilder_ ya tiene en cuenta.

{{< code file="PhoneNumber-equals-commons-lang.java" language="java" options="" >}}

### Como implementar el método _hashCode_

La implementación del [método hashCode](javadoc8:java/lang/Object.html#hashCode--) se debe realizar según los siguientes pasos:

* Almacenar un valor constante distinto de 0 en una variable int, por ejemplo 17.
* Por cada campo usado en el método _equals_ se debe obtener un _hash code_ (int) realizando:
  * Si el campo es un _boolean_ se debe calcular <code>(f ? 1 : 0)</code>.
  * Si el campo es un _byte_, _char_, _short_ o _int_ se debe calcular <code>(int) f</code>.
  * Si el campo es un _long_ se debe calcular <code>(int) (f ^ (f >>> 32))</code>.
  * Si el campo es un _float_ se debe calcular <code>Float.floatToIntBits(f)</code>.
  * Si el campo es un _double_ se debe calcular <code>Double.doubleToLongBits(f)</code> y calcular el _hash_ del _long_ obtenido en el paso para los tipos _long_.
  * Si el campo es una referencia a un objeto y el método _equals_ de esta clase compara recursivamente invocando el método _equals_ del campo, invocar su método _hashCode_. si el valor de campo es nulo se debe retornar una constante que tradicionalmente es 0.
  * Si el campo es un _array_ se debe tratar individualmente cada elemento aplicando estas reglas a cada elemento. Si cada elemento del array es significativo se puede usar [Arrays.hashCode](javadoc8:java/util/Arrays.html#hashCode-java.lang.Object:A-).
  * Combinar los _hash code_ obtenidos de la siguiente forma, <code>result = 31 * result + c</code>.

{{< code file="PhoneNumber-hashcode.java" language="java" options="" >}}

Implementar este método en cada clase de una aplicación es tedioso, repetitivo y propenso a errores, para hacer más sencilla su implementación existe el método [Objects.hash](javadoc8:java/util/Objects.html#hash-java.lang.Object...-) desde la versión 7 de Java. Si usamos una versión anterior a Java 7 disponemos de la clase [HashCodeBuilder](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/builder/HashCodeBuilder.html) en la librería _commons-lang_. La misma implementación anterior quedaría.

{{< code file="PhoneNumber-hashcode-java.java" language="java" options="" >}}

{{< code file="PhoneNumber-hashcode-commons-lang.java" language="java" options="" >}}

En el libro [Effective Java](https://amzn.to/2g9N1bi) se explican con un poco más detalle estas dos cosas y muchas otras otras sobre Java que son muy interesantes conocer, el libro es una buena y recomendada lectura para todo programador Java que está entre los [8+ libros para mejorar como programadores](https://picodotdev.github.io/blog-bitix/2014/12/8-plus-libros-para-mejorar-como-programadores/) que recomiendo.

{{< amazon
    linkids="9145a271e7886cea526d9fcbe9edb707&internal=1"
    asins="0321356683" >}}

{{< reference >}}
* [Las colecciones de Java, estructuras de datos para guardar referencias a objetos][blogbitix-386]
* [HashCode and Equals method in Java object](https://www.javaworld.com/article/2074996/hashcode-and-equals-method-in-java-object---a-pragmatic-concept.html)
{{< /reference >}}

{{% /post %}}
