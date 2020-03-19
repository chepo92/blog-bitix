---
pid: 350
type: "post"
title: "Novedades y nuevas características de Java 11"
url: "/2018/09/novedades-y-nuevas-caracteristicas-de-java-11/"
date: 2018-09-28T21:00:00+02:00
updated: 2018-09-29T14:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["blog", "java", "planeta-codigo", "programacion"]
series: ["java-platform"]
summary: "Java 11 es la primera versión de soporte extendido publicada o LTS bajo el nuevo ciclo de publicaciones que adoptó Java en la versión 9. Añade varias novedades importantes en cuanto a seguridad y elimina otras que en versiones anteriores ya fueron marcadas como desaconsejadas."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En la plataforma Java era habitual que entre versión y versión mayor pasasen varios años normalmente 3 o más. Este ciclo de publicaciones no se adapta a las necesidades de todas las empresas, organizaciones y usuarios. Algunas empresas y usuarios desean ciclos de publicaciones más cortos quizá con no tantas novedades en cada uno de ellos pero sí de forma más constante incorporando mejoras. Otras organizaciones necesitan confiar en una versión que tenga un ciclo de soporte largo para sus aplicaciones.

Para adaptarse a ambos requerimientos Java a partir de Java 9 adoptó un nuevo ciclo de publicaciones siendo cada seis meses para los que desean mejoras de forma regular y cada tres años para los que necesitan soporte extendido. [Java 9 incorporó la esperada modularización][blogbitix-264] que cambia la forma de desarrollo de las aplicaciones con numerosas mejoras. [Java 10 añadío la inferencia de tipos para variables locales][blogbitix-306] con la palabra reservada _var_. Ahora Java 11 siendo una versión de soporte extendido o LTS, el soporte de Java 11 está planificado que dure hasta 2023 y hasta 2026 de forma extendida lo que son 8 años de soporte.

En esta nueva versión de Java 11 publicada el 25 de septiembre de 2018 las novedades no son tan relevantes como lo fuero Java 8 con las _lambadas_ y Java 9 con los módulos pero continúa con las mejoras incrementales y proporciona una versión LTS en la que empresas grandes confiarán como base para sus desarrollos.

* [Características de Java 11](https://openjdk.java.net/projects/jdk/11/)
* [Notas de publicación de Java 11](https://www.oracle.com/technetwork/java/javase/11all-relnotes-5013287.html)
* [Java 11 Javadoc](https://docs.oracle.com/en/java/javase/11/docs/api/)

Las mejoras incluídas en esta versión son:

* 181: [Nest-Based Access Control](http://openjdk.java.net/jeps/181)
* 309: [Dynamic Class-File Constants](http://openjdk.java.net/jeps/309)
* 315: [Improve Aarch64 Intrinsics](http://openjdk.java.net/jeps/315)
* 318: [Epsilon: A No-Op Garbage Collector](http://openjdk.java.net/jeps/318)
* 320: [Remove the Java EE and CORBA Modules](http://openjdk.java.net/jeps/320)
* 321: [HTTP Client (Standard)](http://openjdk.java.net/jeps/321)
* 323: [Local-Variable Syntax for Lambda Parameters](http://openjdk.java.net/jeps/323)
* 324: [Key Agreement with Curve25519 and Curve448](http://openjdk.java.net/jeps/324)
* 327: [Unicode 10](http://openjdk.java.net/jeps/327)
* 328: [Flight Recorder](http://openjdk.java.net/jeps/328)
* 329: [ChaCha20 and Poly1305 Cryptographic Algorithms](http://openjdk.java.net/jeps/329)
* 330: [Launch Single-File Source-Code Programs](http://openjdk.java.net/jeps/330)
* 331: [Low-Overhead Heap Profiling](http://openjdk.java.net/jeps/331)
* 332: [Transport Layer Security (TLS) 1.3](http://openjdk.java.net/jeps/332)
* 333: [ZGC: A Scalable Low-Latency Garbage Collector (Experimental)](http://openjdk.java.net/jeps/333)
* 335: [Deprecate the Nashorn JavaScript Engine](http://openjdk.java.net/jeps/335)
* 336: [Deprecate the Pack200 Tools and API](http://openjdk.java.net/jeps/336)

### Eliminación de módulos Java EE y CORBA

Se eliminan del JDK paquetes ya desaconsejados hace varias versiones anteriores y que no eran muy usados en cualquier caso. Estos paquetes son los de CORBA una forma de llamada a procedimientos remotos que se utilizó como alternativa a RMI pero que nunca tuvo un uso extendido prefiriéndose SOAP o más recientemente interfaces REST.

La lista de paquetes eliminados son los siguientes.

* _java.xml.ws_ (JAX-WS, plus the related technologies SAAJ and Web Services Metadata)
* _java.xml.bind_ (JAXB)
* _java.activation_ (JAF)
* _java.xml.ws.annotation_ (Common Annotations)
* _java.corba_ (CORBA)
* _java.transaction_ (JTA)
* _java.se.ee_ (Aggregator module for the six modules above)
* _jdk.xml.ws_ (Tools for JAX-WS)
* _jdk.xml.bind_ (Tools for JAXB)

### Sintaxis de variables locales para parámetros en lambdas

Ahora los parámetros de una lambda pueden declararse con _var_ con inferencia de tipos. Esto proporciona uniformidad en el lenguaje al declarar los parámetros permite usar anotaciones en los parámetros de la función lambda como _@NotNull_.

Esta funcionalidad tiene algunas restricciones. No se puede mezclar el uso y no uso de _var_ y no se puede mezclar el uso de _var_ y tipos en _lambdas_ explícitas. Son consideradas ilegales por el compilador y producirá un error en tiempo de compilación.

{{< code file="Lambda.java" language="java" options="" >}}

{{< youtube video="0eWgRyanQI0" >}}

### Cliente HTTP

En Java 9 se incorporó de forma experimental un cliente HTTP con soporte para HTTP/2 en el propio JDK. En Java 11 alcanza la categoría de estable. Este cliente HTTP es una forma sencilla de hacer llamadas a servicios web ya sean REST o [GraphQL][graphql]. Las clases del nuevo cliente se encuentran en el paquete [java.net.http](javadoc11:java.net.http/java/net/http/package-summary.html). Al estar este cliente HTTP incorporado en el JDK no será necesario depender de librerías de terceros.

{{< youtube video="sZSdWq490Vw" >}}

### Ejecución desde archivo de código fuente único

Para ejecutar un programa Java es necesario compilarlo a _bytecode_ y posteriormente ejecutarlos. Se necesitan dos pasos. Para facilitar la ejecución de los programas que se componen de un único archivo de código fuente se añade la posibilidad de lanzar un programa desde el archivo de código fuente. Esto es útil par programas pequeños o para los casos de estar aprendiendo el lenguaje.

{{< code file="HelloWorld.java" language="java" options="" >}}
{{< code file="java-helloworld.sh" language="bash" options="" >}}

Esta funcionalidad es compatible con los _shebang_ de los sistemas Unix.

{{< code file="helloworld.sh" language="bash" options="" >}}
{{< code file="hello.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:java-helloworld.png" optionsthumb1="6500x450" title1="Java 11 HelloWorld!"
    caption="Java 11 HelloWorld!" >}}

### Unicode 10

Tratar texto es una parte importante casi de cualquier aplicación, este soporte de Unicode 10 añade 16018 nuevos caracteres soportados, 128 nuevos emojis y 19 símbolos nuevos para el estándar en televisiones 4K.

### TLS 1.3

Algunas de las versiones anteriores de TLS ya no se consideran seguras añadir soporte para la versión más reciente TLS 1.3 permite a las aplicaciones Java ser más compatibles y más seguras. El protocolo TLS 1.3 proporciona dos beneficios principalmente, es más seguro y más rápido que sus versiones anteriores.

{{< youtube video="HxDb5nwvN_Y" >}}

### Otras mejoras

Se añaden implementaciones específicas para la arquitectura Aarch64 para un mejor rendimiento en la plataforma [ARM][arm] en algunas funciones. Se añade de forma experimental un nuevo recolector de basura ZGC con pausas para recolectar basura menores capaz de manejar cantidades de memoria pequeñas de megabytes y grandes de terabytes. Al mismo tiempo se añade un recolector de basura Epsilon que no reclama la memoria. Se añade soporte para los algoritmos criptográficos _ChaCha20_ y _Poly1305_ junto con otras funcionalidades criptográficas _RSASSA-PSS_, _AES Encryption with HMAC-SHA2 for Kerberos 5_, ...

Se añaden varios métodos a la clase [String](javadoc11:java.base/java/lang/String.html) muy utilizados con los que no será necesario recurrie a librerías de terceros. Estos métodos son [repeat](javadoc11:java.base/java/lang/String.html#repeat(int)), [isBlank](javadoc11:java.base/java/lang/String.html#isBlank()), [strip](javadoc11:java.base/java/lang/String.html#strip()), [stripLeading](javadoc11:java.base/java/lang/String.html#stripLeading()), [stripTrailing](javadoc11:java.base/java/lang/String.html#stripTrailing()), [lines](javadoc11:java.base/java/lang/String.html#lines()). En otras clases de la API también se han añadido nuevos métodos.

Java que tradicionalmente marcaba como _deprecarted_ características pero que las seguía manteniendo por compatibilidad hacia atrás parece que ha empezado a eliminar varias de esas características desaconsejadas de forma más agresiva. No solo se añaden nuevas características, también se eliminan algunas y se desaconseja el uso de otras entre ellas el visor de _applets_, eliminación de _Unsafe.defineClass_, _Thread.destroy()_ y _Thread.stop(Throwable)_, eliminación de las funcionalidades de despliegue de _Java Plugin_ y _Java Web Start_ que se marcaron como desaconsejadas en Java 9 y para eliminación en Java 10 finalmente en Java 11 se han eliminado sin reemplazo.

Oracle ya no ofrece el entorno de ejecución JRE ni versiones de 32 bits para Windows. JavaFX ya no está incluído en el JDK pero seguirá siendo utilizable como librería independiente.

Las anteriores son las funcionalidades que he considerado más destacables para todos los usuarios., También hay otras funcionalidades añadidas, soporte eliminado para funciones específicas o de funcionamiento interno.

{{< reference >}}
* [Introducing Java SE 11](https://developer.oracle.com/java/java11)
* [JDK 11 Release Notes](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html)
* [Java 11 Documentation](https://docs.oracle.com/en/java/javase/11/)
* [Java 11 Javadoc](javadoc11:index.html)
* [Introducing Java SE 11 (blog)](https://blogs.oracle.com/java-platform-group/introducing-java-se-11)
* [Oracle JDK Releases for Java 11 and Later](https://blogs.oracle.com/java-platform-group/oracle-jdk-releases-for-java-11-and-later)
* [Java 11 Will Include More Than Just Features](https://blog.takipi.com/java-11-will-include-more-than-just-features/)
* [90 New Features (and APIs) in JDK 11](https://www.azul.com/90-new-features-and-apis-in-jdk-11/)
* [Java 11 String API Updates](https://4comprehension.com/java-11-string-api-updates/)
* [Java 11 removes EE and Corba packages](https://github.com/eclipse/jetty.project/issues/2487)
* [Java Mission Control - Now serving OpenJDK binaries too!](https://twitter.com/java/status/1044609723012665344)
* [Oracle JDK 11 Migration Guide](https://docs.oracle.com/en/java/javase/11/migrate/index.html)
* [Countdown to Java Release Date](http://www.java-countdown.xyz/)
{{< /reference >}}

{{% /post %}}
