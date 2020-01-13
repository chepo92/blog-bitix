---
pid: 138
type: "post"
title: "Tutorial sobre los tipos genéricos de Java"
url: "/2016/04/tutorial-sobre-los-tipos-genericos-de-java/"
date: 2016-04-23T00:00:00+02:00
updated: 2016-04-24T13:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Hace ya más de una década que en Java 5 se introdujeron los _generics_ para dotar al lenguaje de una mejor comprobación de tipos en tiempo de compilación y al mismo tiempo eliminar los _cast_ que hasta entonces eran necesarios al usar las colecciones. Dada la lentitud de adopción que suele haber en la plataforma Java en los grandes entornos empresariales puede que aún no los hayamos usado extensamente o tengamos alguna duda en su uso. Hay unos cuantos conceptos sobre los _generics_ que son convenientes conocer."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Los _generics_ fueron introducidos en la versión 5 de Java en 2004 junto con otras muchas novedades suponiendo en su historia una de las mayores modificaciones o al mismo nivel de las [novedades introducidas con Java 8][blogbitix-17] más recientemente al lenguaje Java. Los _generics_ son importantes ya que permiten al compilador informar de muchos errores de compilación que hasta el momento solo se descubrirían en tiempo de ejecución, al mismo tiempo permiten eliminar los _cast_ simplificando, reduciendo la repetición y aumentando la legibilidad el código. Los errores por _cast_ inválido son especialmente problemáticos de _debuggear_ ya que el error se suele producir en un sitio alejado del de la causa.

Los _generics_ permiten usar tipos para parametrizar las clases, interfaces y métodos al definirlas. Los beneficios son:

* Comprobación de tipos más fuerte en tiempo de compilación.
* Eliminación de _casts_ aumentando la legibilidad del código.
* Posibilidad de implementar algoritmos genéricos, con tipado seguro.

Un tipo usando _generics_ tiene el siguiente aspecto, por ejemplo usando una clase _Box_ contenedor de una referencia a un tipo no determinado en la definición de la clase pero que lo será en su uso. Una clase genérica puede tener múltiples argumentos de tipos y los argumentos pueden ser a su vez tipos genéricos. Después del nombre de la clase se puede indicar la lista de parámetros de tipos con el formato <code>\<T1, T2, T3, ...\></code>.

{{< code file="Box.java" language="java" options="" >}}
{{< code file="Pair.java" language="java" options="" >}}
{{< code file="OrderedPair.java" language="java" options="" >}}

Según las convenciones los nombres de los parámetros de tipo usados comúnmente son los siguientes:

* E: elemento de una colección.
* K: clave.
* N: número.
* T: tipo.
* V: valor.
* S, U, V etc: para segundos, terceros y cuartos tipos.

En el momento de la instanciación de un tipo genérico indicaremos el argumento para el tipo, en este caso _Box_ contendrá una referencia a un tipo _Integer_. Con Java 7 se puede usar el operador _diamond_ y el compilador inferirá el tipo según su definición para mayor claridad en el código. Podemos usar cualquiera de esta dos maneras prefiriendo usar el operador _diamond_ por ser más clara.

{{< code file="Instantation.java" language="java" options="" >}}

Para mantener la compatibilidad con versiones anteriores a Java 5 los tipos genéricos que al usarse no indican argumentos de tipo se denominan _raw_. El compilador indicará una advertencia como un uso potencialmente peligroso ya que no podrá validar los tipos.

{{< code file="Raw.java" language="java" options="" >}}

Además de las clases los métodos también pueden tener su propia definición de tipos genéricos.

{{< code file="Method.java" language="java" options="" >}}

La sintaxis completa de uso sería:

{{< code file="MethodUsage.java" language="java" options="" >}}

Aunque puede abreviarse ya que el compilador puede inferir los tipos:

{{< code file="MethodUsageInference.java" language="java" options="" >}}

A veces querremos limitar los tipos que pueden ser usados empleando lo que se denomina _bounded type_. Con <code>\<U extends Number\></code> el tipo _U_ debe extender la clase _Number_.

{{< code file="BoxBounds.java" language="java" options="" >}}

Una clase puede tener múltiples limitaciones, si una es una clase debe ser la primera y el resto de argumentos interfaces.

{{< code file="Bounds.java" language="java" options="" >}}

En Java un tipo puede ser asignado a otro mientras el primero sea compatible con el segundo, es decir tengan una «relación es un». Una referencia de _Object_ puede referenciar una instancia de _Integer_ (un _Integer_ es un _Object_).

{{< code file="IsA.java" language="java" options="" >}}

Sin embargo, en el caso de los _generics_, ¿una referencia de _Box\<Number\>_ puede aceptar una instancia _Box\<Integer\>_ or _Box\<Double\>_ aun siendo _Integer_ y _Double_ subtipos de _Number_?. La respuesta es no, ya que _Box\<Integer\>_ y _Box\<Double\>_ en Java no son subtipos de _Box\<Number\>_. La jerarquía de tipos es la siguiente:

{{< image
    gallery="true"
    image1="image:generics-subtypeRelationship.gif" optionsthumb1="300x200" >}}

Los tipos genéricos pueden extenderse o implementarse y mientras no se cambie el tipo del argumento la «relación es un» se preserva. De modo que _ArrayList\<String\>_ es un subtipo de _List\<String\>_ que a su vez es un subtipo de _Collection\<String\>_.

{{< image
    gallery="true"
    image1="image:generics-sampleHierarchy.gif" optionsthumb1="300x200" >}}

{{< code file="PayloadList.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:generics-payloadListHierarchy.gif" optionsthumb1="300x200" >}}

En los _generics_ un parámetro para un tipo _?_ se denomina _wildcard_ siendo este un tipo desconocido. Son usados para reducir las restricciones de un tipo de modo que un método pueda funcionar con una lista de _List\<Integer\>_, _List\<Double\>_ y _List\<Number\>_. El término _List\<Number\>_ es más restrictivo que _List\<? extends Number\>_ porque el primero solo acepta una lista de _Number_ y el segundo una lista de _Number_ o de sus subtipos. _List\<? extends Number\>_ es un _upper bounded wildcard_.

{{< code file="BoundedWildcard.java" language="java" options="" >}}

Se puede definir una lista de un tipo desconocido, _List\<?\>_, en casos en los que:

* La funcionalidad se puede implementar usando un tipo _Object_.
* Cuando el código usa métodos que no dependen del tipo de parámetro. Por ejemplo, _List.size_ o _List.clear_.

Digamos que queremos definir un método que inserte objetos _Integer_ en un _List_. Para mayor flexibilidad queremos que ese método pueda trabajar con cualquier tipo de lista que permita contener _Integer_, ya sea _List\<Integer\>_, _List\<Number\>_ y _List\<Object\>._ Lo podemos conseguir definiendo _List\<? super Integer\>_ que se conoce como _Lower Bounded Wildcard_.

Las clases genéricas no tienen relación alguna aunque sus tipos los tengan, pero usando _wildcads_ podemos crearlas.

{{< code file="WildcardList.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:generics-listParent.gif" optionsthumb1="300x200"
    image2="image:generics-wildcardSubtyping.gif" optionsthumb2="300x200" >}}

Uno de las mayores confusiones al usar generics es cuando usar _upper bounded wildcards_ o cuando usar _lower bounded wildcards_. Podemos usar las siguientes reglas:

* Una variable _generic_ que se usa como fuente de datos (_in_), por ejemplo _src_ en _\<U\> copy(List\<? extends U\> src, List\<? super U\> dest)_ se define usando _upper bounded wildcard_ con la palabra clave _extends_. De modo que la lista del parámetro _src_ pueda ser una lista de un tipo _U_ o de un subtipo de _U_.
* Un variable _generic_ que se usa como destino de datos (_out_), por ejemplo _dest_ en _\<U\> copy(List\<? extends U\> src, List\<? super U\> dest)_ se define usando _lower bounded wildcard_ con la palabra clave _super_. De modo que la lista del parámetro _dest_ pueda ser una lista de un tipo _U_ o de un supertipo de _U_.
* En caso de que la variable pueda ser usando mediante métodos definidos en la clase _Object_ se recomienda usar un _unbounded wildcard (?)_.
* En caso de que la variable se necesite usar como fuente de datos y como destino (_in_ y _out_) no usar _wildcard_.

Los _generics_ son un mecanismo para proporcionar comprobaciones en tiempo de compilación, sin embargo, el compilador aplica _type erasure_ que implica:

* Reemplazar todos los tipos con sus _bounds_ o por Object si son _unbounded_.
* Insertar _casts_ para preservar el tipado seguro.
* Generar métodos puente para preservar el polimorfismo en _generics_ en los que son extendidos.

Un tipo _non reifiable_ son aquellos cuya información de tipo ha sido [eliminada en tiempo de compilación por el _type erasure_][blogbitix-308], para la JVM no hay ninguna diferencia en tiempo de ejecución entre _List\<String\>_ y _List\<Number\>_. No se crean nuevas clases para los tipos parametrizados de modo que no hay ninguna penalización en tiempo de ejecución. Una clase genérica al compilarla se transforma aplicando _type erasure_:

{{< code file="TypeErasure.java" language="java" options="" >}}

Los _generics_ tiene algunas restricciones:

* No se pueden instanciar tipos genéricos con tipos primitivos.
* No se pueden crear instancias de los parámetros de tipo.
* No se pueden declarar campos _static_ cuyos tipos son parámetros de tipo.
* No se pueden usar _casts_ o _instanceof_ con tipos parametrizados.
* No se pueden crear arrays de tipos parametrizados.
* No se pueden crear, capturar o lanzar tipos parametrizados que extiendan de _Throwable_.
* No se puede sobrecargar un método que tengan la misma firma que otro después del _type erasure_.

Este artículo es gran medida una traducción del [tutorial de Java sobre Generics](https://docs.oracle.com/javase/tutorial/java/generics/index.html), que también es recomendable echarle un vistazo incluso leerlo varias veces por la cantidad de información que contiene, en algunos puntos todo lo comentado en este artículo está explicado de forma más extensa.

Para profundizar más en este importante tema de genéricos de Java tenemos a nuestra disposición varios libros, alguno como  [Java Generics and Collections](https://amzn.to/2SXyqXh) dedicado en gran parte a él, no importa que se un libro del 2006 ya que desde entonces los genéricos no han tenido grandes cambios y su contenido sigue siendo válido. Los _generics_ de Java no son perfectos, por el _type erasure_ y ser _non reifiables_, pero tampoco débiles y hay buenos motivos para que sean así como se dice en el libro.

* [Java Generics and Collections](https://amzn.to/2MXNErp)
* [Effective Java (2nd Edition): A Programming Language Guide](https://amzn.to/39HVI9u)

{{< amazon
    linkids="77088bd1b29706cdb837eebce10d8b88,cf908dff78cd2b9cd608d868b4de0fa3"
    asins="0596527756,0321356683" >}}

A pesar de los _generics_ y el compilador es posible poner en un _String_ en un _HashSet\<Integer\>_ usando el tipo _raw_ de _HashSet_, cosa que se denomina [Heap Pollution][blogbitix-141] y que provoca exepciones [ClassCastException](javadoc8:java/lang/ClassCastException.html) en tiempo de ejecución. Usando colecciones envueltas por los métodos [Collections.checkedSet](javadoc8:java/util/Collections.html#checkedSet-java.util.Set-java.lang.Class-), [checkedList](javadoc8:java/util/Collections.html#checkedList-java.util.List-java.lang.Class-) y [checkedMap](javadoc8:java/util/Collections.html#checkedMap-java.util.Map-java.lang.Class-java.lang.Class-) evitaremos el _Heap Pollution_ produciendo una excepción no en el momento de extraer el objeto de la colección sino en el momento de insertarlo.

{{< code file="HeapPollution.java" language="java" options="" >}}

En resumen, los genéricos en Java son un añadido muy útil al lenguaje.

{{< reference >}}
* [Novedades y nuevas características de Java 8][blogbitix-17]
* [Introducción y nuevas características de Java EE 7][blogbitix-131]
* [10 razones para seguir usando Java][blogbitix-81]
* [Qué es el concepto de Heap Pollution en Java][blogbitix-141]
* [Java Tutorials: Lesson: Generics](https://docs.oracle.com/javase/tutorial/java/generics/index.html)
* [Java 1.5 Generics Tutorial](http://javarevisited.blogspot.com.es/2011/09/generics-java-example-tutorial.html)
{{< /reference >}}

{{% /post %}}
