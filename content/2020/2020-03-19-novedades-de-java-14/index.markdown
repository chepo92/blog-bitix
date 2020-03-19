---
pid: 470
type: "post"
title: "Novedades de Java 14"
url: "/2020/03/novedades-de-java-14/"
date: 2020-03-19T13:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
tags: ["java", "planeta-codigo"]
series: ["java-platform"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Entre las novedades más destacadas que incorpora Java 14 están los _records_, la incorporación definitiva de las expresiones _switch_ o el _pattern matching_ para el operador _instanceof_. Otra de las novedades más destacadas es una traza de _NullPointerException_ más útil, también destaca la posibilidad de utilizar el recolector de basura ZGC en Windows y macOS. El resto de novedades son la eliminación de algunas funcionalidades con poco uso y la preparación marcando como desaconsejado su uso con _deprecated_.

* [Características de Java 14](https://openjdk.java.net/projects/jdk/14/)
* [Notas de publicación de Java 14](https://jdk.java.net/14/release-notes)
* [Java 14 Javadoc](https://docs.oracle.com/en/java/javase/14/docs/api/)

Las mejoras incluídas en esta versión son:

* 305: [Pattern Matching for instanceof (Preview)](https://openjdk.java.net/jeps/305)
* 343: [Packaging Tool (Incubator)](https://openjdk.java.net/jeps/343)
* 345: [NUMA-Aware Memory Allocation for G1](https://openjdk.java.net/jeps/345)
* 349: [JFR Event Streaming](https://openjdk.java.net/jeps/349)
* 352: [Non-Volatile Mapped Byte Buffers](https://openjdk.java.net/jeps/352)
* 358: [Helpful NullPointerExceptions](https://openjdk.java.net/jeps/358)
* 359: [Records (Preview)](https://openjdk.java.net/jeps/359)
* 361: [Switch Expressions (Standard)](https://openjdk.java.net/jeps/361)
* 362: [Deprecate the Solaris and SPARC Ports](https://openjdk.java.net/jeps/362)
* 363: [Remove the Concurrent Mark Sweep (CMS) Garbage Collector](https://openjdk.java.net/jeps/363)
* 364: [ZGC on macOS](https://openjdk.java.net/jeps/364)
* 365: [ZGC on Windows](https://openjdk.java.net/jeps/365)
* 366: [Deprecate the ParallelScavenge + SerialOld GC Combination](https://openjdk.java.net/jeps/366)
* 367: [Remove the Pack200 Tools and API](https://openjdk.java.net/jeps/367)
* 368: [Text Blocks (Second Preview)](https://openjdk.java.net/jeps/368)
* 370: [Foreign-Memory Access API (Incubator)](https://openjdk.java.net/jeps/370)

### Excepciones NullPointerException más útiles

Cuando se produce una excepción _NullPointerException_ por usar una referencia de objeto cuyo valor es _null_ Java emite una traza indicando la línea de código donde se ha producido, la clase y método donde se ha intentado referenciar pero no se ha podido.

{{< code file="NullPointerException-1.out" language="plaintext" options="" >}}

Sin embargo, hay casos en los que la trazas de NullPointerException no es lo suficientemente precisa para determinar la causa de la excepción sin usar el _debugger_. En los siguientes ejemplos con elementos encadenados no es posible determinar cuál es la variable que ha originado la excepción por tener valor nulo.

{{< code file="NullPointerException-2.out" language="plaintext" options="" >}}

A partir de Java 14 las excepciones NullPointerException son más útiles e indican de forma precisa cual es el miembro de la línea de código que ha producido la excepción.

{{< code file="NullPointerException-3.out" language="plaintext" options="" >}}

### Records

Esta es la característica más destacada añadida al lenguaje que permite reducir significativamente el código necesario para algunas clases.

Los registros son clases que no contienen más datos que los públicos declarados. Evitan mucho del código que es necesario en Java para definir los constructores, los métodos _getter_, los _setter_ e [implementar de forma correcta los métodos equals y hashCode][blogbitix-199].

Para reducir el código de las clases de datos los registros adquieren automáticamente varios miembros:

* Un campo privado y final para cada componente del estado en la descripción.
* Un método de acceso de lectura para cada componente del estado de la descripción, con el mismo nombre y tipo.
* Un constructor público cuya firma es la misma que el estado de la descripción que inicializa cada campo de su correspondiente argumento.
* Una implementación de _equals_ y _hashCode_ de tal forma que dos registros son iguales si son del mismo tipo y contienen el mismo estado.
* Una implementación de _toString_ que incluye una representación de todos los componentes del registro con sus nombres.

Los registros tienen algunas restricciones:

* No pueden extender ninguna otra clase y no pueden declarar campos que no sean los privados automáticos que corresponden a los componentes de la descripción del estado en la descripción. Cualquier otro campo debe ser declarado como _static_. estas restricciones aseguran que la descripción del estado define su representación.
* Los registros son implícitamente _final_ y no pueden ser _abstract_. Esto significa que no pueden ser mejorados por otra clase o registro.
* Los componentes de un registro son implícitamente _final_. Esta restricción hace que sean inmutables.

Más allá de esta restricciones los registros se comportan como clases normales pudiendo declararse en su propio archivo de código fuente o anidada en otra clase, pueden ser genéricos, implementar interfaces e instanciarse con la palabra clave _new_. Pueden declarar métodos estáticos, propiedades estáticas, inicializadores estáticos, constructores, métodos de instancia y tipos anidados. El registro y los componentes individuales de los componentes pueden ser anotados.

Para dar soporte a los _records_ al realizar tareas de _reflection_ se añaden los siguientes métodos en la clase _Class_: _RecordComponent[] getRecordComponents()_ y _boolean isRecord()_

De una clase como esta.

{{< code file="Records-1.java" language="java" options="" >}}

Con los registros se define de la siguiente forma.

{{< code file="Records-2.java" language="java" options="" >}}

### Pattern Matching para operador instanceof

Al usar el operador _instanceOf_ para comprobar si un objeto es una instancia de una clase si se realiza en un _if_ posteriormente es necesario hacer un _cast_ del objeto a la clase.

{{< code file="IfPatternMatching-1.java" language="java" options="" >}}

Ahora el operador _instanceOf_ permite renombrar la variable y dentro de la rama usarla sin necesidad de realizar el _cast_, esto simplifica el código y evita posibles errores.

{{< code file="IfPatternMatching-2.java" language="java" options="" >}}

En futuras proposiciones de mejoras para el lenguaje de programación Java está planificado soportar _pattern matching_ para otras construcciones del lenguaje como expresiones _switch_ y sentencias. La incorporación de _pattern matching_ permitirá reducir la _verbosidad_ del código haciéndolo más fácil de leer y modificar.

La posible implementación en Java quizá sea similar a la [implementación de C# para pattern matching](https://docs.microsoft.com/en-us/dotnet/csharp/pattern-matching).

### Bloques de texto

En esta nueva revisión de los bloques de texto se definen dos nuevos caracteres de escape. El _terminador de línea_ para poder definir bloques de texto en varias líneas pero sin insertar saltos de línea en el bloque de texto y _\s_ para evitar que los espacios en blanco sean eliminados por la operación _trim_.

{{< code file="TextBlocks.java" language="java" options="" >}}

### Expresiones switch

La características de expresiones _switch_ introducida en modo vista previa en las versiones de Java 12 y 13 se califica como estándar.

{{< code file="Switch-1.java" language="java" options="" >}}
{{< code file="Switch-2.java" language="java" options="" >}}

### ZGC para Windows y macOS

La versión del recolector de basura ZGC que permite pausas muy reducidas en memorias de unos pocos MB hasta varios TB ahora es posible utilizarla en los sistemas operativos macOS y Windows.

* [El recolector de basura de Java, que hace y como funciona en cada versión][blogbitix-463]

{{% reference %}}
* [Java 14: All the new features of JDK 14 as it hits GA](https://jaxenter.com/java-14-update-news-163585.html)
* [Java 14 Feature Spotlight: Records](https://www.infoq.com/articles/java-14-feature-spotlight/)
* [Records Come to Java](https://blogs.oracle.com/javamagazine/records-come-to-java)
{{% /reference %}}

{{% /post %}}
