---
pid: 184
type: "post"
title: "Generación de código en tiempo de ejecución con Byte Buddy"
url: "/2016/10/generacion-de-codigo-en-tiempo-de-ejecucion-con-byte-buddy/"
date: 2016-10-02T12:00:00+02:00
updated: 2016-10-07T09:15:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:bytebuddy.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "El tipado seguro y el sistema de tipos es sin duda una de las características más importante del lenguaje de programación Java que han contribuido a su éxito. Cuando no conocemos los tipos en tiempo de compilación el sistema de tipos es una limitación donde los lenguajes dinámicos son capaces de resolver el problema sin necesidad de los tipos pero perdiendo la ayuda del compilador. Usando una librería de generación de código en tiempo de compilación o ejecución tenemos la posibilidad en Java de realizar algunas tareas que los lenguajes dinámicos permiten."
---

{{% post %}}

{{< logotype image1="bytebuddy.png" title1="Byte Buddy" width1="200" image2="java.svg" >}}

Java posee un sistema de tipos estricto con el que detectar errores de compilación y hace que el código sea más legible, con un <abbr title="Integrated Development Environment">IDE</abbr> los errores de compilación los detectaremos inmediatamente según escribimos código. Este sistema de tipos estricto es deseable en aplicaciones de negocio y empresariales ya que ayuda a que las aplicaciones tengan menos errores o errores de compilación pasen inadvertidos y ser descubiertos incluso semanas después de haber sido desplegados en producción. Su sistema de tipos es uno de los responsables del éxito de Java. Sin embargo, el sistema de tipos estricto impone restricciones en otro tipo de ámbitos como en una biblioteca de propósito general ya que no se conocerán los tipos en tiempo de compilación y no podrán por tanto ser referenciados o alternativamente hayan ser definidos como interfaces o clases abstractas que posteriormente son implementadas o extendidas.

Para acceder a propiedades e invocar métodos de tipos desconocidos en tiempo de compilación en Java disponemos de la [reflection API](javadoc8:java/lang/reflect/package-summary.html) o API de introspección aunque tiene los siguientes inconvenientes:

* Es lenta: más que la invocación directa de un método. La API de introspección usa <abbr title="Java Native Interface">JNI</abbr> y requiere hacer un análisis del objeto costosa para invocar el método del objeto.
* Inutiliza el tipado seguro: la API de introspección no es _type-safe_. La comprobación de los tipos de los argumentos en la invocación de un método es retrasada hasta el momento de ejecución.

Usando la  API de introspección perdemos una de las grandes características de Java, el tipado seguro, adicionalmente el rendimiento será menor. Conocidas estas limitaciones hay varias librerías que las palían generando código en tiempo de ejecución, algunas de las más conocidas son [Java Proxy](javadoc8:java/lang/reflect/Proxy.html) que está incluida en el propio JDK, [cglib][cglib], [Javassists][javassist] o [ASM][asm].

Leyendo uno de los artículos de la publicación gratuita [Java Magazine][java-magazine] de [Nov/Dic 2015](http://www.javamagazine.mozaicreader.com/NovDec2015/Twitter) conocí otra alternativa llamada [Byte Buddy][bytebuddy] con la que al contrario de otras posibilidades no estamos limitados a generar clases que implementen interfaces conocidas (como en Java proxies), tiene un mantenimiento activo y soporta las nuevas características de las últimas versiones del lenguaje (al contrario de cglib), no está tan limitada (como Javassists) y no hay que tener conocimientos de _byte code_ (como con ASM).

La generación de código se ha vuelto ubicua en muchas de las librerías más populares de Java y se usa profusamente en [Spring][spring], [Hibernate][hibernate] o [Apache Tapestry][tapestry] para aplicar seguridad, gestión de transacciones, mapeo modelo relacional-objeto o pruebas unitarias o de integración (_mocking_, ...) y de manera similar a lo ofrecido por los [<abbr title="Abstract Syntax Tree">AST</abbr>](http://groovy-lang.org/metaprogramming.html) de [Groovy][groovy]. Permite emular algunas propiedades que solo están accesibles al programar con lenguajes dinámicos sin perder las comprobaciones de tipos. Las clases generadas por Byte Buddy no se distinguen de las clases generadas por el compilador.

Un ejemplo sencillo de la definición de una nueva clase en tiempo de ejecución con el método [String.toString()](javadoc8:java/lang/String.html#toString--) que devuelve un valor fijo sería la siguiente:

{{< code file="Main-1.java" language="java" options="" >}}

Con los métodos [saveIn](http://bytebuddy.net/javadoc/1.4.28/net/bytebuddy/dynamic/DynamicType.html#saveIn-java.io.File-), [inject](http://bytebuddy.net/javadoc/1.4.28/net/bytebuddy/dynamic/DynamicType.html#inject-java.io.File-) y [toJar](http://bytebuddy.net/javadoc/1.4.28/net/bytebuddy/dynamic/DynamicType.html#toJar-java.io.File-) de [DynamicType.Unloaded](http://bytebuddy.net/javadoc/1.4.28/net/bytebuddy/dynamic/DynamicType.Unloaded.html) podemos generar las clases en el momento de construcción de la aplicación previo a que sea desplegada y guardarlas en archivos _.class_ o en librerías _.jar_.

{{< code file="Main-2.java" language="java" options="" >}}

Usando los selectores adecuados como _method_, _field_, _constructor_, _named_ entre muchos otros de la clase [ElementMatchers](http://bytebuddy.net/javadoc/1.4.28/net/bytebuddy/matcher/ElementMatchers.html) seremos capaces de interceptar las llamadas a los métodos y establecerles el comportamiento que deseemos.

{{< code file="Main-3.java" language="java" options="" >}}
{{< code file="Foo.java" language="java" options="" >}}

Byte Buddy permite tres tipos de extensiones:

* _subclass_: crea un nuevo tipo subclase de otro.
* _redefine_: redefine el comportamiento de un tipo existente.
* _rebase_: redefine el comportamiento de un tipo existente y renombra los métodos redefinidos de modo que siguen estando disponibles internamente.

Devolver valores fijos en un método seguramente no será lo que deseemos en muchos casos pero podemos delegar el comportamiento de un método en otro y esta es una forma muy sencilla de manipular el comportamiento de un método sin conocer absolutamente nada de _bytecode_ ya que todo el código que proporcionamos es código Java. En el método en que se delega la llamada de uno interceptado es posible usar varias anotaciones para obtener diversos parámetros adicionales, _@Argument(n)_, _@AllArguments_, _@This_, _@Super_, _@Origin_ (Method, Constructor, Executable, Class, MethodHandle, MethodType, String o int), _@SuperCall_, _@RuntimeType_, _@DefaultCall_, _@Default_. El [listado completo de anotaciones](http://bytebuddy.net/javadoc/1.4.28/net/bytebuddy/implementation/bind/annotation/package-summary.html) está disponible en la API Javadoc.

Podemos proporcionar implementaciones de métodos de la siguiente forma, suponiendo que queremos redefinir el método _hello_ de la clase _Source_ con el comportamiento implementado en la clase _Target_:

{{< code file="Main-4.java" language="java" options="" >}}
{{< code file="Source.java" language="java" options="" >}}
{{< code file="Target.java" language="java" options="" >}}

Dicho esto, la generación de código en tiempo de ejecución o compilación nos permite nuevas posibilidades que solo ofrecían lenguajes dinámicos o de resolver problemas con [programación orientada a aspectos](https://en.wikipedia.org/wiki/Aspect-oriented_programming). Aún así hay que tener en cuenta que las clases Java son elementos especiales para la la máquina virtual y nunca son recolectadas por el recolector de basura mientras su [ClassLoader](javadoc8:java/lang/ClassLoader.html) este en uso por alguna de las clases que hay cargadas en la aplicación.

Ejecutando esta pequeña aplicación obtenemos el siguiente resultado en la terminal.

{{< code file="System.out" language="plaintext" options="" >}}

En el [tutorial de Byte Buddy](http://bytebuddy.net/#/tutorial) encontraremos más información y más detallada de las posibilidades que nos ofrece esta interesante librería en la plataforma <abbr title="Java Virtual Machine">JVM</abbr> para manipular _bytecode_ y tipos con el lenguaje Java en tiempo de ejecución.

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoByteBuddy" command="./gradlew run" >}}

{{< reference >}}
* [Byte Buddy][bytebuddy]
* [Tutorial de Byte Buddy](http://bytebuddy.net/#/tutorial)
* [Java Magazine Nov/Dic 2015](http://www.javamagazine.mozaicreader.com/NovDec2015/Twitter)
{{< /reference >}}

{{% /post %}}
