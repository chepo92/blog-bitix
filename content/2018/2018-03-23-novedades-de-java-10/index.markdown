---
pid: 306
type: "post"
title: "Novedades de Java 10"
url: "/2018/03/novedades-de-java-10/"
date: 2018-03-23T20:00:00+01:00
updated: 2018-03-27T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["java-platform"]
summary: "Oracle y los ingenieros a cargo del desarrollo de Java están haciendo en mi opinión un buen trabajo que se han materializado en las versiones Java 8 con las _lambdas_, en Java 9 con los módulos y en Java 10 con la mejora en la inferencia de tipos. Todo ello está haciendo que la plataforma evolucione más rápido y significativamente que lo que hasta hace unos años estábamos acostumbrados."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

El 20 de marzo de 2018 se publicó la que es la versión 10 de Java siguiendo el nuevo calendario de publicar una nueva versión cada seis meses, Java 9 fue publicado en septiembre del año anterior. Con este nuevo calendario no pasarán tantos años entre cada nueva versión que era la queja de algunos desarrolladores y el motivo de que la plataforma Java no evolucionar tan rápidamente como algunos desarrolladores desean, quizá ahora la queja sea al contrario que se publican demasiadas versiones y no da tiempo a asimilar los cambios. Para dar cabida a ambas necesidades y garantizar un soporte prolongado cada año y medio será declarada una versión como de soporte a plazo largo o _LTS_ para que las empresas tengan seguridad en las aplicaciones que desarrollen.

Lo mejor de este nuevo calendario de publicaciones cada seis meses es que las empresas y programadores tienen predictibilidad de cuándo se lanzará la siguiente versión aunque las nuevas características que tenga no está predeterminado ya no pasarán varios años entre versiones visibilizando que la plataforma evoluciona continuamente en pequeños saltos cada poco tiempo en vez de saltos grandes cada mucho tiempo que son más disruptivos y hace más difícil la adopción.

Es un principio no añadir características según lo que está de moda sino pensando en décadas futuras. Java 10 tiene una lista más reducida de cambios que Java 9 pero importantes y significativos. Java es el último en unirse a la fiesta de la inferencia de tipos pero ha sido de forma intencionada ya que el coste de implementarla de forma incorrecta supone un alto coste que hay que mantener en adelante. Otras ideas que ha sido implementadas el lenguajes de programación funcional y están listas para su uso masivo tomarán su propio camino en futuras versiones de Java por ejemplo _pattern matching_ y _value types_.

La lista más relevante de [novedades de Java 10](http://openjdk.java.net/projects/jdk/10/) es la siguiente:

* 286: [Local-Variable Type Inference](http://openjdk.java.net/jeps/286)
* 296: [Consolidate the JDK Forest into a Single Repository](http://openjdk.java.net/jeps/296)
* 304: [Garbage-Collector Interface](http://openjdk.java.net/jeps/304)
* 307: [Parallel Full GC for G1](http://openjdk.java.net/jeps/307), se ha mejorado el recolector de basura G1 añadiendo soporte para paralelismo y mejorado las pausas en los peores escenarios.
* 310: [Application Class-Data Sharing](http://openjdk.java.net/jeps/310)
* 312: [Thread-Local Handshakes](http://openjdk.java.net/jeps/312), mejora interna en la sincronización y pausas en los _threads_.
* 313: [Remove the Native-Header Generation Tool (javah)](http://openjdk.java.net/jeps/313), se elimina la funcionalidad de _javah_ al haber sido sustituida y mejorada por funcionalidad añadida en _javac_.
* 314: [Additional Unicode Language-Tag Extensions](http://openjdk.java.net/jeps/314), se añade alguna nueva extensión de Unicode.
* 316: [Heap Allocation on Alternative Memory Devices](http://openjdk.java.net/jeps/316)
* 317: [Experimental Java-Based JIT Compiler](http://openjdk.java.net/jeps/317), se añade en forma experimental el compilador JIT Graal implementado en Java en la plataforma Linux.
* 319: [Root Certificates](http://openjdk.java.net/jeps/319), se han añadido varios certificados raíz al _keystore_ incluído para permitir que las conexiones TLS funcionen por defecto.
* 322: [Time-Based Release Versioning](http://openjdk.java.net/jeps/322)

### Inferencia de tipos para variables locales

De las novedades la inferencia de tipos para variables locales es la más destacada en cuanto a cambios en el lenguaje con la adición de la nueva palabra reservada _var_, esto ayuda a no tener que repetir varias veces los tipos en la construcción de un objeto. En las _lambdas_ los parámetros no es necesario declararlos infiriéndose de la interfaz que implementan. La inferencia de tipos es la idea que permite al compilador obtener el tipo estático sin que sea necesario escribirlo de forma explícita.

Java no es el único o primer lenguaje en incluir la inferencia de tipos para variables. Ha sido usado en otros lenguajes durante décadas. En realidad la inferencia de tipos incluida en Java 10 con _var_ es muy limitada y restringida de manera intencionada. Si no fuese así el [algoritmo Hindley-Milner](https://en.wikipedia.org/wiki/Hindley-Milner_type_system) usado para la inferencia de tipos usado en la mayoría de lenguajes que toma un tiempo exponencial en el peor de los casos potencialmente disminuiría la velocidad de _javac_.

La inferencia de tipos para variables locales hace que el código no sea tan verboso sin perder en gran medida la legibilidad ya que solo es para las variables locales. El siguiente ejemplo muestra la evolución de la inferencia de tipos desde Java 5 pasando por Java 8 donde se incluyeron algunas mejoras y el que puede utilizarse a partir de Java 10.

{{< code file="JavaTypeInference.java" language="java" options="" >}}

Los tipos en la parte izquierda pueden parecer redundantes y obvios. Tradicionalmente la filosofía de Java es declarar de forma estática los tipos para todo incluyendo las expresiones más simples. Ciertamente definir los tipos para propiedades y en las firmas de los métodos impone un contrato que es necesario respetar y esto ayuda en el mantenimiento asi como a su entendimiento. Sin embargo, declarar los tipos para expresiones intermedias puede parecer menos útil e incómodo.

En el artículo [Java 10 Local Variable Type Inference](https://developer.oracle.com/java/jdk-10-local-variable-type-inference) y vídeo de Youtube [First contact with 'var' in Java 10](https://www.youtube.com/watch?v=Le1DbpRZdRQ) hay una explicación más detallada de esta nueva característica y se aprecia claramente en los siguientes ejemplos que muestran la evolución de la inferencia de tipos.

No solo hay una mejora de legibilidad aquí, también hay una ventaja en términos de evolución y mantenimiento de código. Si tomamos el mismo código con tipos explícitos para la variable _userChannels_ y reemplazamos el tipo del canal representado con un _String_ con un objeto de dominio _Channel_ que pudiese tener información adicional acerca del canal entonces necesitaríamos reescribir los tipos de todo el código que dependa de este nuevo tipo.

La inferencia de tipos definitivamente reduce la cantidad de tiempo para escribir código Java pero mejor es la mejora en legibilidad del código. Los desarrolladores dedican mucho más tiempo a leer código fuente que el que dedican a escribirlo de manera que definitivamente hay que optimizar para la facilidad de lectura sobre la facilidad de escritura. Aunque _var_ no siempre es una mejora en cuanto a legibilidad ya que se pierde la información del tipo su uso se guía por el principio de no tanto para optimizar la escritura o lectura sino generalizando más para la facilidad de mantenimiento, escribir algunos tipos genéricos no triviales es complicado aún con la ayuda de asistencia de un entorno integrado de desarrollo.

No está permitido en retornos, parámetros, propiedades, variables sin inicializar, ni asignar _null_ pero en Java 11 el uso de _var_ se permitirá en los parámetros de una expresión _lambda_ que será útil porque permite un parámetro formal cuyo tipo es inferido pero que además en el que se pueden usar anotaciones.

{{< code file="JavaLambdaVarAnnotation.java" language="java" options="" >}}

Con la inferencia de tipos los nombres de las variables cobran mayor importancia dado que _var_ elimina la posibilidad al lector del código adivinar la intención de una variable a partir del tipo. Ya es difícil asignar nombres adecuados ahora supondrá mayor importancia.

El tipo en las variables locales no es tan importante ya que normalmente los nombres de las variables son el del tipo. Con _var_ se evita repetición entre el tipo y el nombre de la variable, la brevedad de _var_ hace destacar el nombre de la variable y proporciona mayor claridad además de tener que escribir menos código repetitivo.

{{< code file="NamesAlign.java" language="java" options="" >}}

Con _var_ se evita la longitud variable de los tipos y la no alineación de los nombres de las variables, permite quitar los nombres largos de algunos tipos que son comunes en las aplicaciones empresariales como cosas como _DefaultListenerFactory_ con vocablos que se van añadiendo uno detras de otro hasta formar un largo nombre.

Utilizar _var_ no tiene por que suponer una perdida de legibilidad del código, un buen nombre de variable da más información que el tipo. Por ejemplo, _List\<User\>_ parece ser una lista de usuarios, utilizando el nombre de la variable _admins_ obtendríamos que son una parte más concreta de usuarios en el contexto local en el que se está usando. Por lo que no tener el tipo no es dramático si es suplido con un buen nombre de variable que capture su contenido correctamente.

La palabra reservada _var_ no hace de Java un lenguaje dinámico, sigue siendo estático y fuertemente tipado. Solo que ahora los tipos no hace falta declararlos explícitamente y es el compilador el que se encarga de inferirlos según el contexto. En tiempo de ejecución nada cambia, el rendimiento sigue siendo el mismo y solo es una característica en tiempo de compilación.

La existencia de _var_ no significa que haya de usarse de forma indiscriminada para todas las variables locales sino juiciosamente. En este caso quizá es preferible declarar el tipo por no ser obvio lo que retorna el método _getCities()_.

{{< code file="TypeVsVar.java" language="java" options="" >}}

* [Style Guidelines for Local Variable Type Inference in Java](http://openjdk.java.net/projects/amber/LVTIstyle.html)

Los entornos integrados de desarrollo tardarán un tiempo en implementar la inferencia de tipos para variables locales hasta que lancen nuevas versiones.

### Otras novedades

El tiempo para iniciar el interprete REPL de [JShell](https://docs.oracle.com/javase/9/jshell/introduction-jshell.htm) ha sido reducido significativamente especialmente en casos donde se inicia con un archivo que incluye varios _snippets_.

Se han añadido mejoras en la herramienta de documentación de las clases Javadoc como soporte para varias hojas de estilo, agrupar métodos redefinidos que no cambian la especificación o nueva etiqueta _summary_ como resumen de la API.

Se han añadido varios métodos para crear copias no modificables con [List.copyOf()](https://docs.oracle.com/javase/10/docs/api/java/util/List.html#copyOf(java.util.Collection)), [Set.copyOf()](https://docs.oracle.com/javase/10/docs/api/java/util/Set.html#copyOf(java.util.Collection)), and [Map.copyOf()](https://docs.oracle.com/javase/10/docs/api/java/util/Map.html#copyOf(java.util.Map)). Se han añadido nuevos métodos a la clase [Collectors](https://docs.oracle.com/javase/10/docs/api/java/util/stream/Collectors.html) para devolver una lista no modificable con _toUnmodifiableList_, _toUnmodifiableSet_, and _toUnmodifiableMap_.

Se añade el método [Optional.orElseThrow()](https://docs.oracle.com/javase/10/docs/api/java/util/Optional.html#orElseThrow()).

Algunas [otras características ya obsoletas se han eliminado](https://www.oracle.com/technetwork/java/javase/10-relnote-issues-4108729.html#Removed) y [otras se han marcado como _deprecated_](https://www.oracle.com/technetwork/java/javase/10-relnote-issues-4108729.html#Deprecated).

### El posible futuro JDK 11+

Está planificado en seis meses después de Java 10 y con soporte extendido, el soporte de Java 10 durará tan solo hasta 2018.09, el de Java 11 al ser una _LTS_ durará un periodo de 8 años hasta el 2026.09.

En el nuevo modelo las nuevas características no se añaden hasta que están preparadas. Tentativamente las [características de JDK 11](http://openjdk.java.net/projects/jdk/11/) no están completamente determinadas pero se están evaluando grandes proyectos como [Valhalla](http://openjdk.java.net/projects/valhalla/) para hacer más eficiente el tratamiento de datos que no requieran la indentidad de objetos con los denominados [Value Types](http://openjdk.java.net/jeps/169) útil para la programación funcional con datos puros optimizados para computaciones en paralelo. El proyecto [Loom](http://openjdk.java.net/projects/loom/) que posibilita una versión más ligera aún que los _threads_ o hilos con _fibers_ o fibras, _continuations_ o _coroutine_ y [Tail Call](https://en.wikipedia.org/wiki/Tail_call). El proyecto [Panama](http://openjdk.java.net/projects/panama/) hará más fácil trabajar con código nativo o el proyecto [ZGC](http://openjdk.java.net/projects/zgc/) para crear un recolector de basura que pueda manejar gigabytes y terabytes con pausas menores a 10ms. O el proyecto [Amber](http://openjdk.java.net/projects/amber/) con unas pequeñas mejoras pero muy cómodas para el programador como la de los literales _strings raw_. En la [página del OpenJDK](http://openjdk.java.net/) hay más proyectos que en un futuro quizá sean implementados y publicados en alguna versión.

En la sección final de referencia incluyo varios artículos y vídeos de los que he obtenido la información para hacer este resumen de las novedades de Java 10. Algunos son muy interesantes y amplían en gran medida lo comentado y lo que posiblemente llegue en un futuro.

{{< reference >}}
* [First contact with 'var' in Java 10](https://www.youtube.com/watch?v=Le1DbpRZdRQ)
* [Keynotes: Oracle Code Chicago](https://youtu.be/84mCmmzksGI?t=47m43s)
* [Introducing Java SE 10](https://developer.oracle.com/java/java10)
* [Java 10 Local Variable Type Inference](https://developer.oracle.com/java/jdk-10-local-variable-type-inference)
* [Java 10 Support for Oxygen](https://marketplace.eclipse.org/content/java-10-support-oxygen)
* [JDK 10 General-Availability Release](http://jdk.java.net/10/)
* [JDK 10 Release Notes](https://www.oracle.com/technetwork/java/javase/10-relnote-issues-4108729.html)
* [Oracle Java SE 10 Release Arrives](https://www.oracle.com/corporate/pressrelease/Java-10-032018.html)
* [JDK 10: What’s new in Java 10](https://www.infoworld.com/article/3230507/java/java-jdk-10-what-new-features-to-expect-in-the-next-java.html)
* [What Java 10 And Java's New 6-Month Release Cadence Mean For Developers](https://www.forbes.com/sites/oracle/2018/03/20/what-java-10-and-javas-new-6-month-release-cadence-mean-for-developers/)
* [Project Loom: Fibers and Continuations for the Java Virtual Machine](http://cr.openjdk.java.net/~rpressler/loom/Loom-Proposal.html)
* [The Incredible Shrinking Java Platform](https://www.azul.com/the-incredible-shrinking-java-platform/)
* [Oracle Java SE Support Roadmap](https://www.oracle.com/technetwork/java/eol-135779.html)
* [Java on Docker will no longer suck: improvements coming in Java 10](https://www.opsian.com/blog/java-on-docker/)
{{< /reference >}}

{{% /post %}}
