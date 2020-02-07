---
pid: 461
type: "post"
title: "Programación orientada a aspectos con AspectJ, Spring AOP y la clase Proxy"
url: "/2020/02/programacion-orientada-a-aspectos-con-aspectj-spring-aop-y-la-clase-proxy/"
date: 2020-02-07T19:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
summary: "Los aspectos permiten separar código con distintas funcionalidades y centralizar un código común que sin utilizarlos está repartido por toda la aplicación. Son un concepto potente y una vez entendidos sus conceptos ofrecen muchas posibilidades para simplificar el código y mejorar su mantenimiento. Hay varias posibilidades, dos de las más utilizadas son AspectJ y Spring AOP, en el caso de que estas no se puedan utilizar el JDK incluye la clase _Proxy_ para usos básicos aunque más limitados."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Ciertas funcionalidades son transversales y están repartidas por toda la aplicación. Añadir y mezclar el código de esta funcionalidades con el código en los métodos hace que el código del método sea más complicado incluso puede que ese código de utilidad sea de mayor tamaño que el fundamental del método.

Algunos ejemplos de funcionalidades transversales son trazas, métricas de rendimiento, seguridad, caches o transacciones. La [programación orientada a aspectos][wikipedia-aop] permite extraer este código transversal y aplicarlo en aquellos puntos de la aplicación donde sea necesario sin estar mezclado con el código al que se aplica. Esto facilita la legibilidad del código, su mantenimiento y la separación con conceptos.

La programación orientada a aspectos se usa mucho en las aplicaciones que usan [Spring][spring] pero hay otras librerías que lo permiten, incluso el propio JDK tiene alguna clase sin necesitar de dependencias adicionales.

La programación define varios términos:

* _Aspect_: es una funcionalidad genérica aplicable a múltiples objetos. Cada aspecto trata una sola funcionalidad.
* _Join point_: es el punto de ejecución donde se puede aplicar un aspecto como la llamada a un método, su retorno o el acceso a una propiedad.
* _Advice_: es la acción que se realiza en un _pointcut_.
* _Pointcut_: es una expresión que busca _joint points_, tiene un _advice_ asociado que se ejecuta en todos los _joint points_ que concuerdan con la expresión.
* _weaving_: proceso que aplica los aspectos a las clases, puede ser en tiempo de compilación o en tiempo de ejecución.

Esta es una clase normal con un método en la que a modo de ejemplo en la llamada al método se le apliquen dos aspectos, uno para añadir una traza cuando se llame al método y su valor de retorno y otro aspecto para medir cuando tiempo tarda en ejecutarse. La clase _Foo_ descnoce los aspectos que se van a aplicar, no hay que hacer ninguna modificación en ella ni para añadirle los aspectos ni para quitarselos.

{{< code file="Foo.java" language="java" options="" >}}

La interfaz solo es necesaria para un aspecto implementado con la clase Proxy de Java.

{{< code file="IFoo.java" language="java" options="" >}}

Se recomienda usra la forma más simple que sea suficiente para las necesidad de la aplicación. Spring AOP es más simple que usar AspectJ y no hay necesidad de aplicar el compilador de AspectJ en el proceso de compilación. Si solo se necesita aplicar _advices_ en la ejecución de métodos de _beans_ de Spring, Spring AOP es suficiente.

Si no se usa spring o se necesitan aplicar aspectos en objetos no gestionados por el contenedor de Spring (como objetos de dominio) o aplicar _advices_ en _joint points_ distintos a las ejecuciones de métodos, por ejemplo para la obtención o asignación de una propiedad entonces la opción a usar es [AspectJ][aspectj].

### Programación orientada a aspectos con AspectJ

AspectJ es una librería específica y la que más posibilidades ofrece de las que muestro en el artículo. Hay varias formas de utilizar AspectJ, la de usarla mediante anotaciones es bastante simple.

Una de las ventajas de AspectJ es que no requiere usar Spring para utilizarla pero para ello en el momento de compilación hay que realizar un proceso denominado _weaving_ para añadir la funcionalidad de los aspectos que transformar el _bytecode_ de las clases. Aplicar los aspectos transformando el código permite que los aspectos no penalicen en tiempo de ejecución y ofrezca mejor rendimiento que Spring AOP, aunque el rendimiento no es algo determinante en la mayoría de los proyectos. Por contra es más compleja y requiere aplicar a las clases un proceso de _postcompilación_.

Las expresiones de los _ponintcuts_ son similares a una definición de la firma del los métodos, ámbitos de visibilidad, tipos de parámetros y tipo de retorno además del paquete. Es posible hacer expresiones boleanas compuestas para hacer más especifica una expresión. Este _pointcut_ se aplica en la ejecución del método _sum_ de la clase _Foo_ que recibe dos parámetros de tipo _int_ y retorna un valor de tipo _int_.

{{< code file="pointcut.txt" language="plaintext" options="" >}}

En la clase _Aspects_ se definen los aspectos con una colección de _pointcuts_ con sus código de _advice_ asociado.

{{< code file="Aspects.java" language="java" options="" >}}

Con la herramienta de construcción [Gradle] hay que incluir un _plugin_ para aplicar el proceso de _weaving_. El proceso de _weaving_ consiste en aplicar los aspectos a las clases, AspectJ lo realiza en tiempo de compilación modificando el _bytecode_ de las clases en un segundo paso de compilación, con anterioridad el compilador de Java ha transformado el código fuente de las clases en _bytecode_.

{{< code file="build-1.gradle" language="groovy" options="" >}}

{{< code file="Main-1.java" language="java" options="" >}}

En la salida del programa para el apartado de AspectJ se observa que el código de los aspectos se ejecuta al llamar a los métodos de la instancia de la clase _Foo_.

{{< code file="System.out-1" language="plaintext" options="" >}}

* [Getting Started with AspectJ](https://www.eclipse.org/aspectj/doc/released/progguide/starting.html)
* [Join Points and Pointcuts](https://www.eclipse.org/aspectj/doc/released/progguide/language-joinPoints.html)

### Programación orientada a aspectos con Spring AOP

Spring incluye su solución para la programación orientada a aspectos, más limitada que AspectJ pero suficiente para la mayoría de los casos tampoco requiere aplicar el proceso _weaving_ de AspectJ en tiempo de compilación. La limitación de Spring AOP es que los _joint points_ solo pueden ser métodos. Utiliza las mismas anotaciones de AspectJ para aplicar los aspects en tiempo de ejecución.

Otra diferenia con AspectJ es que los aspectos se aplican usando _proxys_ que son una clase que envuelve a la instancia a la que se le aplica el aspecto, una vez dentro de la clase objetivo si se llama a otro método de forma interna a ese otro método no se le aplica su aspecto.

Suponiendo una clase que tiene un méodo _foo_ y _bar_ y desde fuera se llama a _foo_ y este llama a _bar_ para que en llamada desde _foo_ a _bar_ se apliquen los aspectos de _bar_ hay que usar este código. Usar este código implica poner en el código una dependencia a Spring, lo cual no es deseable para el código de dominio.

{{< code file="SpringProxy.java" language="java" options="" >}}

En el _proxy_ es donde se ejecuta el código del _advice_.

{{< image
    gallery="true"
    image1="image:aop-proxy-plain-pojo-call.png" optionsthumb1="300x200" title1="Llamada a un método normal"
    image2="image:aop-proxy-call.png" optionsthumb2="300x200" title2="Llamada a un método con un proxy"
    caption="Llamada a un método normal y con un proxy" >}}

Para que Spring procese las anotaciones require usar la anotación [@EnableAspectJAutoProxy](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/EnableAspectJAutoProxy.html) y que Spring encuentre la clase de los aspectos, anotándola con [@Component](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/stereotype/Component.html) o devolviendo una instancia en el contenedor de dependencias como en este caso.

{{< code file="Main-2.java" language="java" options="" >}}

El _plugin_ para realizar el proceso de _weaving_ con AspectJ no es necesario. Spring realiza e proceso de _weaving_ en tiempo de ejecución.

{{< code file="build-2.gradle" language="groovy" options="" >}}

El resultado es el mismo que con AspectJ.

{{< code file="System.out-2" language="plaintext" options="" >}}

### Programación orientada a aspectos con la clase Proxy

Para casos muy sencillos donde no sea posible aplicar una de las opciones anteriores al no poder usar sus librerías por restricciones del proyecto en cuanto a dependencias usables está la alternativa incluida en el JDK. La clase [Proxy](javadoc11:java.base/java/lang/reflect/Proxy.html) está incorporada en el propio JDK, permite hacer cosas sencillas sin dependencias adicionales.

{{< code file="LogProxy.java" language="java" options="" >}}
{{< code file="ProfileProxy.java" language="java" options="" >}}

En este caso se observa que se ha aplicado el aspecto de AspectJ y además los aspectos de los _proxys_ de este apartado.

{{< code file="System.out-3" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaAOP" command="./gradlew run" %}}

{{% reference %}}
* [Aspect Oriented Programming with Spring](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/core.html#aop)
* [Spring AOP + AspectJ annotation example](https://mkyong.com/spring3/spring-aop-aspectj-annotation-example/)
* [Implementing AOP with Spring Boot and AspectJ](https://www.springboottutorial.com/spring-boot-and-aop-with-spring-boot-starter-aop)
* [Intro to AspectJ](https://www.baeldung.com/aspectj)
{{% /reference %}}

{{% /post %}}
