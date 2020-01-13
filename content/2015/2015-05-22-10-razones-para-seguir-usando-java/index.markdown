---
pid: 81
type: "post"
title: "10 razones para seguir usando Java"
url: "/2015/05/10-razones-para-seguir-usando-java/"
date: 2015-05-22T17:00:00+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "opinion", "planeta-codigo", "programacion"]
summary: "Con ya dos décadas de vida y a lo largo de este tiempo Java se ha convertido en uno de los lenguajes más empleados para programar a día de hoy. En este periodo han surgido otros lenguajes en la propia plataforma de la JVM como Groovy, Scala o Clojure y fuera de ella como C#, Python, Ruby, PHP, Go o Dart ofreciendo algunas cosas adicionales o supliendo algunas carencias de Java. Aún con toda esta competencia esta es mi lista de 10 razones por las que creo que Java sigue siendo una de las mejores opciones."
---

{{% post %}}

{{< logotype image="java.svg" >}}

El sábado 23 de mayo de 2015 el lenguaje Java cumple 20 años de historia y aún hoy Java sigue siendo uno de los lenguajes de programación preferidos para desarrollar en un mundo tecnológico en el que unos pocos años pueden darse grandes cambios y en dos décadas ver surgir nuevas tecnologías y verlas languidecer. Algunas personas se jactan y hablan con un tono de desprecio y mofa nada agradable hacia Java mostrando su desconocimiento o prejuicios siguiendo algunos tópicos bastante difundidos la mayoría incorrectos. A otras personas quizá no les gusta Java no tanto por el lenguaje como por los proyectos que ha desarrollado en él, en consultoras cárnicas, para clientes con condiciones laborales paupérrimas, con tecnologías, librerías y _frameworks_ obsoletos o códigos heredados programados por programadores aparentemente con poca experiencia que es un infierno mantener debido a una cantidad importante de errores, uso de tecnologías no adaptadas a la solución, malos funcionamientos y falta de documentación. Pero estas situaciones externas no tiene nada que ver con el lenguaje. Algunas otras personas quizá no les gusta porque no les ofrece el último azúcar sintáctico que han visto y usado en otros lenguajes o porque para propósitos específicos hay alternativas que permiten obtener una solución de una forma más sencilla.

{{< image
    gallery="false"
    image1="image:java20.jpg" optionsthumb1="600x450" title1="Java 20 años (1995-2015)" >}}

En [JavaWorld][javaworld] ha publicado varios artículos para celebrar el aniversario comentando su futuro, su pasado y presente o que notables características reunió en su momento para ser hoy uno de los lenguajes más usados.

* [Java at 20: How it changed programming forever](https://www.javaworld.com/article/2925496/core-java/java-at-20-how-java-changed-programming-forever.html)
* [Java at 20: The JVM, Java's other big legacy](https://www.javaworld.com/article/2924046/scripting-jvm-languages/java-at-20-jvm-javas-other-big-legacy.html)
* [Java at 20: Its successes, failures, and future](https://www.javaworld.com/article/2925306/core-java/java-at-20-oracle-ranks-its-successes-failures-and-future.html)
* [Java at 20: The programming juggernaut rolls on](https://www.javaworld.com/article/2923616/core-java/java-at-20-the-programming-juggernaut-rolls-on.html)
* [Java's key to success is simplicity](https://www.javaworld.com/article/2925060/java-platform/javas-key-to-success-is-simplicity.html)
* [Java is a 20-year-old grown-up with bright prospects ahead](https://www.javaworld.com/article/2926345/java-platform/unfinished-business-java-is-a-20-year-old-grown-up-with-bright-prospects-ahead.html)

Algún otros artículos interesantes son:

* [Java Turns 20](https://www.infoq.com/news/2015/05/java-20)
* [20 años de Java: ¿En qué quedó el sueño de programar una vez, ejecutar en cualquier lugar?](http://www.xataka.com/aplicaciones/20-anos-de-java-celebramos-su-tremenda-influencia-en-el-mundo-del-software-y-la-programacion)

Aunque algunos parecen considerar ya hoy a Java el nuevo [COBOL][cobol] (y este último aún tiene futuro) y no sea lo habitual, en este artículo trataré de exponer algunos argumentos que posee Java para su defensa y por los que en mi caso aún no he tenido necesidad de buscar mayor felicidad programando en otra opción.

### Java no es lento

Quizá en las primeras versiones de los 90 fuera así pero la realidad hoy con las mejoras introducidas en cada versión a la [Java Virtual Machine][jvm] (JVM) un programa Java es comparativamente igual de rápido que uno en C o C++, salvo para tareas muy específicas de cálculos intensivos no hay diferencia. Eligiendo las estructuras de datos adecuadas no tendría por qué haber una diferencia de rendimiento considerable y además para la mayoría de las tareas más importante que la rapidez es la legibilidad del código, su fácil desarrollo, mantenimiento o coste.

### Javadoc

Java tiene una gran herramienta de documentación que permite embeber la misma en el código fuente de los archivos y generar una serie de documentos html para su posterior consulta. La [documentación proporcionada en la API](javadoc8:) es extensa, completa y buena, siendo simple html puede ser alojada en cualquier servidor web y consultada en internet. Sin documentación la tarea de los programadores sería considerablemente más complicada, aún en el caso de falta de documentación javadoc el IDE con la asistencia de código puede ayudarnos gracias a la introspección incorporada en la plataforma.

### Compilado, tipado estático

Las metodologías ágiles están siendo ampliamente adoptadas y algunos de sus defensores apuestan por lenguajes que consideran encajan con su metodología agilista confundiéndola con lenguajes dinámicos y menos verbosos, que puede ser acertado en ocasiones o circunstancias pero con Java también se puede ser ágil como el que más. Una de las buenas prácticas de las metodologías ágiles es tener teses unitarios del código al ser posible que lo cubra al 100%, sin embargo, la realidad es que nos será complicado tener el 100% del código cubierto con teses.

Con los lenguajes dinámicos hay que tener especial cuidado ya que por su propia naturaleza hace que algunos errores solo los encontraremos en la ejecución, por experiencia propia no será la primera vez (ni la centésima) que un error tan básico como de compilación por nombre de variable o método mal escrito es descubierto en producción. El IDE es la herramienta que en Java junto con el tipado estático y la ayuda al compilador permite detectar errores de compilación instantáneamente, por otra parte proporciona asistencia de código y a los programadores nos sirve como documentación de los tipos esperados en los argumentos de los métodos o propiedades de las clases. Los compiladores además de para traducir el código fuente a lenguaje máquina (o _bytecode_) están para capturar errores sintácticos y léxicos ante los cambios de una nueva característica, una refactorización o un _merge_ con conflictos. Se puede pensar en el compilador como un _test_ automatizado que cubre el 100% del código, con un IDE se obtienen los errores al instante después de escribir cada caracter ¿que hay mejor? ¡no lo desprecies!.

Escribir código menos verboso no hace que escribirlo sea más rápido ni necesariamente más legible, Java posee buenos IDEs con asistentes de código que con unas pocas pulsaciones permiten escribir el código igual o más rápido. Java es un lenguaje verboso y explícito en parte propiciado por su poco azúcar sintáctico pero las construcciones sintácticas pueden ser contraproducentes, un alto número de ellas y el código será muy críptico sin un conocimiento amplio del lenguaje. Uno de los éxitos de Java es su relativa simplicidad.

### IDE

Con un IDE el código Java se ve de distinta forma, no como simple texto sino donde los métodos, clases y propiedades tienen entidad propia. La asistencia de código permite obtener métodos disponibles, ver los tipos y nombres de argumentos y retornos, las excepciones lanzadas, si el método es estático o de instancia y la visibilidad de acceso según escribimos. Con la ayuda de un IDE podemos encontrar todos los usos de un método o clase de forma totalmente exacta o cambiar un nombre por otro. Hay IDEs para lenguajes dinámicos como [Groovy][groovy] con IntelliJ IDEA o [Python][python] con PyCharm que proporcionan asistencia de código pero usando las características dinámicas de estos lenguajes el encontrar todos los usos de un método o variable no está garantizado.

Un IDE puede suponer la diferencia entre dedicar un tiempo considerable a tareas de bajo valor a ser mucho más productivo, o mejor aún, ayudando a evitar errores.

### Refactorizaciones

Con la ayuda del compilador y de un IDE las refactorizaciones como renombrar una variable, propiedad, método o clase son más sencillas y con más garantías de no romper nada, además de poder realizarlo en unos pocos segundos y sin tener que buscar y sustituir las referencias como texto plano en todo el código del proyecto. En proyectos grandes en los que trabajan más de una persona y tienen un tiempo de vida y de mantenimiento de más de unos pocos meses hace que evitemos muchos problemas y programemos con más seguridad de que las modificaciones que hacemos no introducen errores por cosas tan básicas como la compilación.

Si el uso de un proyecto es prolongado en el tiempo este posiblemente tenga que adaptarse a necesidades inicialmente totalmente desconocidas, en estos casos será tarde o temprano necesario _refactorizar_. En un negocio en el que el tiempo es importante y en una tecnología en constante evolución realizar refactorizaciones pequeñas o grandes es una necesidad. La mayor certeza es el cambio y se dará en herramientas, _frameworks_, lenguajes, ideas de negocio, ....

### Productividad y legibilidad

El compilador e IDE nos indican todos los errores léxicos y sintácticos después de escribir cada caracter sin tener que ejecutar el código o los teses unitarios para descubrirlos evitando que lleguen a producción en cuyo caso nos requerirá dedicar tiempo para corregirlos o con peores consecuencias para los usuarios de nuestro código y para el negocio. Que el IDE nos muestre sugerencias con la asistencia de código según escribimos o mediante _refactorizaciones_ son un gran diferencia de productividad aunque algunos piensen que por ser el código más verboso o por escribir menos líneas de código se tarde en programar más la misma tarea, el compilador y el IDE son factores que permiten aumentar la productividad a pesar de la verbosidad.

Con la llegada de [Java 8 y sus novedades][blogbitix-17] se ha incorporado al lenguaje la programación funcional que permite expresar de una forma más natural para los humanos la tarea que se desea realizar, esto hace que el código sea más legible. Lo que en un lenguaje imperativo son varias líneas de código con una combinación de sentencias condicionales, bucles, asignaciones y llamadas a métodos con un objetivo poco claro sin un examen detallado del código ahora se puede expresar de forma funcional haciendo uso de los _streams_ y expresiones _lambda_, también en menor número de líneas de código.

### Software disponible

Java posee gran cantidad de software disponible, de gran calidad y en muchos casos con una licencia de código abierto o de software libre para cualquier tipo de necesidad en una  aplicación de cualquier ámbito. A menudo hay no solo una opción sino varias disponibles y con la libertad de elegir la que más se adecue al proyecto o se prefiera. Ahí está la [fundación Apache][apache], [Spring][spring] o [JBoss][jboss] con una buena colección de proyectos ampliamente utilizados.

Los cambios se producirán, por ello no te encadenes a una determinada tecnología que en un futuro te impida adaptarte a nuevas necesidades. En Java hay opciones para cada diferente aspecto de la aplicación (seguridad, persistencia, _logging_, _framework_ web, ...), por si en un futuro surge una nueva «cojoherramienta», y esto pasará tarde o temprano, diseña tu aplicación de tal forma que sea posible reemplazar una pieza por otra sin tener que reescribir la aplicación entera.

### Ofertas de trabajo, desarrolladores

Dado que Java unos de los lenguajes más utilizados y es usado ampliamente en muchos ámbitos es más fácil encontrar a personas con conocimientos y expertos en Java. Por ello hay numerosas ofertas de trabajo para diversos ámbitos (web, escritorio, servidor, dispositivos móviles, ...) algunas a considerar, aunque bastantes menos que ofertas.

### Conservador, no anticuado

Java tarda en incorporar en el lenguaje algunas de las últimas técnicas de programación que un determinado momento tienen gran relevancia. No porque no pueda sino porque tienen una actitud conservadora, y esto no es malo ya que uno de sus principios hasta el momento es mantener la compatibilidad hacia atrás ¿qué lenguaje que ha ido incorporando nuevas características ha mantenido la compatibilidad de compilación en gran medida durante 20 años? Java pone gran énfasis en este aspecto en cada nueva versión. Esperando cierto tiempo asegura incorporar en el lenguaje aquellas nuevas posibilidades que realmente han demostrado ser útiles y no son simples modas pasajeras que más tarde dificultan la compatibilidad en futuras versiones. Esto no quiere decir que no evolucione, ya en Java 5 incorporó numerosas novedades como _generics_, … y en Java 8 programación funcional como _streams_ para mejorar la legibilidad del código y aprovechar el procesamiento paralelo de los procesadores multinúcleo. Los métodos por defecto (_default methods_) en interfaces son una muestra del interés que hay en Java de mantener la compatibilidad hacia atrás. En este enlace está la [evolución histórica](https://en.wikipedia.org/wiki/Java_version_history) durante estos años.

Como dijo [James Gosling][james-gosling] en una conferencia de JavaOne:

> _We don’t want to do things until we know we can do them right—in Java and on the JVM._

### Propósito general

Java es un lenguaje de propósito general y multiplataforma ejecutable en cualquier dispositivo en el que haya una JVM disponible. No está restringido a un determinado ámbito o tipo de aplicación, el mismo conocimiento del lenguaje sirve para múltiples tipos de aplicaciones desde de escritorio, de servidor, procesamiento de datos, dispositivos móviles, ¿Java para _scripting_? También, por [las ventajas de un lenguaje compilado con la facilidad de ejecución de un entorno interpretado][blogbitix-108] ... incluso juegos, sí juegos. Hay muestras de algunos impresionantes con buen rendimiento, aunque alguno diría incorrectamente que no. Con [jMonkeyEngine podemos hacer un juego][blogbitix-79] que tiene poco que envidiar usando otro lenguaje ya que proporciona los mimbres comunes: bucle del juego, colisiones, física, 3D con OpenGL, sonido, entrada, .... [Minecraft](https://minecraft.net/) es una muestra, otras buenas muestras usando jMonkeyEngine son [PirateHell](http://store.steampowered.com/app/321080), [Hostile Sector](http://mindemia.com/hostilesector/), [Imperii](http://jmonkeyengine.org/project/imperii/), [Grappling Hook](https://ghook.speedrungames.com/) o [4089: Ghost Within](http://store.steampowered.com/app/329770/) y en la [página de ejemplos](http://jmonkeyengine.org/showcase/) hay alguno más.

Quizá en un futuro cambie pero hoy Java es el lenguaje en el que se programan las aplicaciones [Android][android] nativas y una de las plataformas móviles con mayor cuota de mercado. El lema _“write once, run everywhere”_ sigue siendo aplicable hoy más que nunca haciéndole ideal para la nueva generación de dispositivos de la [internet de las cosas][iot] (IoT, _Internet of things_).

Mi escala de preferencias para un lenguaje es de la siguiente forma de mayor a menor (aunque puede variar según la necesidad):

* Ofertas de trabajo, alguna de Groovy, alguna de Python pero mucho menores que en Java, [C#][csharp] o [PHP][php].
* Propósito general, esto permite que el tiempo dedicado a aprender y convertirte en un experto en un lenguaje (que pueden ser de varios años) pueda ser aprovechado en el momento que el avance de la tecnología cambie las reglas de juego como la aparición de los dispositivos móviles. PHP es un lenguaje que fuera del ámbito de desarrollo web tiene poca presencia, dispone de buenas herramientas como [Wordpress][wordpress], [Drupal][drupal] o [Symfony][symfony] y hay ofertas de trabajo. En la plataforma [Android] Java es el lenguaje empleado.
* Productividad, refactorizaciones y documentación disponible. Poder refactorizar el código de forma segura es un gran punto para la productividad y más importante aún evitar errores, por este motivo y a base de experiencia soy reticente a los lenguajes dinámicos. El tipado estático ayuda a evitar errores y servir como documentación, un buen IDE permite aumentar la productividad. Java es un lenguaje que está bien documentado con su Javadoc.
* Software disponible, hay cantidad de lenguajes algunos de los más nombrados son [Go][go] o [Dart][dart] pero en estos es probable que debiésemos desarrollar nosotros el software para una determinada necesidad que en otros lenguajes ya está implementado y más que probado pudiendo haber incluso varias opciones.
* Legibilidad, cualquier añadido al lenguaje que haga más claro el propósito del código o en menos líneas es bienvenido pero como ves esto está abajo en esta lista según importancia.

Aunque no lo he puesto el divertirse y programar a gusto con un lenguaje también debería estar en esta lista pero esto en parte se consigue una vez que dominamos el lenguaje y su ecosistema sintiéndonos capaces de realizar cualquier tarea produciendo buen código, ya sea Java o cualquier otro.

Estas son otras listas de [10 razones por las que Java mola más que nunca](http://zeroturnaround.com/rebellabs/10-reasons-why-java-now-rocks-more-than-ever-part-1-the-java-compiler/) y otras [10 razones para querer a Java y la JVM](https://www.voxxed.com/blog/2015/02/10-reasons-to-love-java-and-the-jvm-reconnecting-with-your-warm-and-fuzzies/).

Para aprender Java en profundidad son varios libros de los que he leído que me han gustado empezando por [Thinking in Java](https://amzn.to/2sNCizu), [Effective Java](https://amzn.to/2sQnZKp) y [Java 8 in Action](https://amzn.to/2MXMTi3) además de otros [buenos libros para mejorar como programadores][blogbitix-55] que son interesantes de leer.

{{< amazon
    linkids="2a437ba4126a093af22af88c893ac407,c0e2bda761aca019e979193070d80625,2256857b147eea05bc79aef83d2548fe"
    asins="0131872486,0321356683,1617291994" >}}

En Junio de 1997 James Gosling formando parte de Sun Microsystems Inc. escribía el artículo de título [The Feel of Java](http://www.win.tue.nl/~evink/education/avp/pdf/feel-of-java.pdf) detallando varias propiedades del lenguaje que hacen del él lo que es y que aún siguen estando vigentes. Y en 1996 junto con Henry McGilton [The Java Language Environment: A White Paper](http://www.stroustrup.com/1995_Java_whitepaper.pdf) donde describen los objetivos del lenguaje. Finalmente escrito más recientemente [Java The Legend](http://www.oreilly.com/programming/free/java-the-legend.csp) analiza Java, su pasado, aciertos y fallos, comunidad, ecosistema y futuro. Estos tres documentos son piezas valiosas de información.

¡Larga vida a Java!

{{< reference >}}
* [10 Reasons Why Java Now Rocks More Than Ever](http://zeroturnaround.com/rebellabs/10-reasons-why-java-now-rocks-more-than-ever-part-1-the-java-compiler/)
* [10 Reasons to Love Java and the JVM](https://www.voxxed.com/blog/2015/02/10-reasons-to-love-java-and-the-jvm-reconnecting-with-your-warm-and-fuzzies/)
{{< /reference >}}

{{% /post %}}
