---
pid: 485
type: "post"
title: "La concurrencia en la plataforma Java con Project Loom"
url: "/2020/05/la-concurrencia-en-la-plataforma-java-con-project-loom/"
date: 2020-05-22T17:00:00+02:00
updated: 2020-05-23T15:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
summary: "Desde la publicación de Java 8 junto con el nuevo calendario de publicación las mejoras en la plataforma Java y en el lenguaje han sido constantes y significativas. Las mejoras continúan en cada nueva versión y hay muchas otras en preparación para ser publicadas cuando estén listas. Una de ellas muy prometedoras es una nueva implementación de los _threads_ mucho más ligera que han existido desde la primera versión. Estos harán innecesarios en la mayoría de los casos los más complicados modelos programación asíncrona, la programación reactiva, la programación mediante _callbacks_ y las construcciones _async/await_."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Los _threads_ han existido en Java desde la primera versión siendo uno de sus componentes esenciales. Los _threads_ representan una unidad de trabajo concurrente como una abstracción de los recursos computacionales disponibles y que ocultan la complejidad de gestionar esos recursos.

Ya se usen de forma directa o dentro de un framework como JAX-RS la concurrencia en Java significan _threads_. En realidad, la plataforma Java entera, desde la máquina virtual al lenguaje y librerías incluidos depuradores y _profilers_ está construida alrededor de los _threads_ como componente esencial de ejecutar un programa.

En general la plataforma Java se basa en:

* Las APIs son síncronas y describen operaciones E/S de inicio y espera a sus resultados como una secuencia ordenada de sentencias por _threads_ que se bloquean.
* Las operaciones de memoria con efectos colaterales son ordenadas secuencialmente por las acciones del _thread_.
* Las excepciones proporcionan información útil indicando la operación fallida en el contexto del _thread_ actual.
* Los depuradores siguen el orden de ejecución aunque se realice procesado de E/S.

### Los problemas de los threads y sus alternativas

En la implementación de Linux los _threads_ no se diferencian de los procesos. Los _threads_ son costosos de crear y pesados aún empleando _pools_ de _threads_ por lo que el sistema operativo solo es capaz de mantener unos pocos miles activos. Esto afecta especialmente en las aplicaciones Java en el lado de servidor ya que para procesar cada petición se le asigna un _thread_ de modo que el número de peticiones simultáneas se ve limitado por el número de _threads_ que soporta el sistema operativo. En aplicaciones con un número elevado de usuarios y peticiones la escalabilidad se ve limitada.

Por este motivo ha surgido la programación asíncrona, la programación reactiva, la programación mediante _callbacks_ y las construcciones _async/await_ y frameworks basándose en estos principios como [Vert.x][vertx] o [Spring Reactive][spring-reactive] o librerías como [RxJava][reactivex]. El resultado es una proliferación de APIs asíncronas desde NIO en el JDK a los _servlets_ asíncronos a las librerías denominadas reactivas para no bloquear los _threads_. Sin embargo, estas formas de programación tienen un costo mayor que el tradicional y simple modelo secuencial. Son más difíciles de programar, más difíciles de mantener e implican cambios importantes en el modelo de programación. Por otro lado es más difícil depurarlos ya que no se mantiene en una única pila de llamadas toda la tarea.

Estos estilos de programación no han sido inventados porque sean más fáciles de entender, son más difíciles también de depurar y de hacer _profile_. Son muy intrusivos y hacen la integración con el código síncrono virtualmente imposible simplemente porque la implementación de los _threads_ es simplemente inadecuada en Java tanto en carga del sistema como rendimiento. La programación asíncrona es contraria al modelo original diseñado en la programación de la plataforma Java en varios aspectos con un alto coste de mantenibilidad y observabilidad. Pero lo hacen por una buena razón, para conseguir la escalabilidad y el rendimiento haciendo buen uso de los costosos recursos hardware.

### La nueva implementación de los threads

El [proyecto Loom](https://wiki.openjdk.java.net/display/loom) persigue crear unos _threads_ que eliminen los costes de los hilos tradicionales del sistema operativo. Serán mucho más ligeros, con ellos Java será capaz de mantener varios órdenes de magnitud superior, millones de _threads_ en vez de solo unos pocos miles. Estos _threads_ virtuales o fibras de la plataforma Java son también simplemente _threads_ pero que crearlos y bloquearlos es mucho más barato. Son gestionados por el entorno de ejecución de Java y no son una representación uno a uno de un envoltorio de los _threads_ del sistema operativo, en vez de eso están implementados en el espacio de usuario del JDK.

Los hilos de los sistemas operativos son pesados porque deben soportar todos los lenguajes y tipo de cargas de forma genérica. Un _thread_ requiere la habilidad de suspender y reactivar su ejecución de la computación. Esto requiere preservar su estado, lo que incluye su puntero de instrucciones así como todo los datos locales de computación que son almacenados en la pila. Dado que el sistema operativo no conoce cómo implementa el lenguaje su pila debe reservar una suficientemente grande.

Loom añade la habilidad de controlar la ejecución, suspensión y reactivación manteniendo su estado no como un recurso del sistema operativo sino como un objeto Java conocido por la máquina virtual bajo el control directo del entorno de ejecución. El conocimiento de las estructuras internas del lenguaje hace que mantener su estado sea más pequeño en comparación con el que mantiene el sistema operativo. Cuando un _thread_ invoca una operación bloqueante se traspasa el control a otro _thread_ con un coste mucho menor que el realizado por el sistema operativo.

El proyecto Loom modificará muchas de las clases de forma interna para implementar los _threads_ con los _thread_ virtuales. Las librerías y aplicaciones que hagan uso de estas clases se beneficiarán de estas mejoras sin necesidad de realizar ninguna modificación.

Estos párrafos son varios extractos del magnífico artículo [State of Loom](http://cr.openjdk.java.net/~rpressler/loom/loom/sol1_part1.html).

> Programmers are forced to choose between modeling a unit of domain concurrency directly as a thread and wasting considerable throughput that their hardware can support, or using other ways to implement concurrency on a very fine-grained level but relinquishing the strengths of the Java platform. Both choices have a considerable financial cost, either in hardware or in development and maintenance effort.

> We can do better.

> Project Loom intends to eliminate the frustrating tradeoff between efficiently running concurrent programs and efficiently writing, maintaining and observing them. It leans into the strengths of the platform rather than fight them, and also into the strengths of the efficient components of asynchronous programming. It lets you write programs in a familiar style, using familiar APIs, and in harmony with the platform and its tools — but also with the hardware — to reach a balance of write-time and runtime costs that, we hope, will be widely appealing. It does so without changing the language, and with only minor changes to the core library APIs. A simple, synchronous web server will be able to handle many more requests without requiring more hardware.

> Whereas the OS can support up to a few thousand active threads, the Java runtime can support millions of virtual threads. Every unit of concurrency in the application domain can be represented by its own thread, making programming concurrent applications easier. Forget about thread-pools, just spawn a new thread, one per task. You’ve already spawned a new virtual thread to handle an incoming HTTP request, but now, in the course of handling the request, you want to simultaneously query a database and issue outgoing requests to three other services? No problem — spawn more threads. You need to wait for something to happen without wasting precious resources? Forget about callbacks or reactive stream chaining — just block. Write straightforward, boring code. All the benefits threads give us — control flow, exception context, debugging flow, profiling organization — are preserved by virtual threads; only the runtime cost in footprint and performance is gone. There is no loss in flexibility compared to asynchronous programming because, as we’ll see, we have not ceded fine-grained control over scheduling.

> However, the existence of threads that are so lightweight compared to the threads we’re used to does require some mental adjustment. First, we no longer need to avoid blocking, because blocking a (virtual) thread is not costly. We can use all the familiar synchronous APIs without paying a high price in throughput. Second, creating these threads is cheap. Every task, within reason, can have its own thread entirely to itself; there is never a need to pool them. If we don’t pool them, how do we limit concurrent access to some service? Instead of breaking the task down and running the service-call subtask in a separate, constrained pool, we just let the entire task run start-to-finish, in its own thread, and use a semaphore in the service-call code to limit concurrency — this is how it should be done.

> Using virtual threads well does not require learning new concepts so much as it demands we unlearn old habits developed over the years to cope with the high cost of threads and that we’ve come to automatically associate with threads merely because we’ve only had the one implementation.

{{< youtube
    video="lIq-x_iI-kc" >}}

### La API de threads

La forma de programación con los nuevos _threads_ es muy parecida a la tradicional que ha existido siempre. Se parece tanto a los _threads_ de siempre que incluso ni siquiera cambia la clase que los representa, que sigue siendo [Thread](javadoc11:java.base/java/lang/Thread.html), las diferencias de implementación son internas a la clase y en la JVM. En estos ejemplos se ejecutan tareas de dos formas diferentes y en la tercera se envían tareas para su ejecución  y posteriormente se espera a obtener el resultado.

{{< code file="threads-api-1.java" language="java" options="" >}}
{{< code file="threads-api-2.java" language="java" options="" >}}
{{< code file="threads-api-3.java" language="java" options="" >}}

### Conclusión

Esta nueva implementación de los _threads_ es una mejora significativa sobre la implementación original basada en el sistema operativo. Una vez esté disponible en una versión del JDK muchas aplicaciones se beneficiarán de forma transparente de sus mejoras simplemente por usar un JDK más reciente. Como es principio en la plataforma Java estos cambios están implementados de forma que sean compatibles hacia atrás para que no haya que realizar ningún cambio o muy pocos en las aplicaciones o librerías para beneficiarse de ellos.

El modelo secuencial de los _threads_ más simple que la programación reactiva, asíncrona, _callbacks_ o las construcciones _async/await_ tiene ventajas en la creación del software en su mantenibilidad, legibilidad y es beneficioso desde el punto de vista económico. Todas estas construcciones van a verse afectadas por la nueva implementación de _threads_ de Loom, las primeras versiones como anticipo están planificadas para Java 15.

Loom es un nuevo ejemplo de que Java no adopta las nuevas tendencias de forma inmediata sino que espera a ver como se desarrollan, y después de evaluar todas las posibilidades opta por una que en este caso es mejor que la programación reactiva o asíncrona que otros lenguajes para permitirlas han tenido que realizar modificaciones comprometiendo la compatibilidad en el futuro del código fuente o desaconsejando el uso de funcionalidades para eliminarlas en el futuro. Esto mismo lo mencionaba en [10 razones para seguir usando Java][blogbitix-81].

Este artículo es simplemente un resumen de otros dos magníficos artículos _State of Loom_ que explica todo esto en mayor profundidad. Muy recomendables su lectura junto a otros relacionados con Loom.

* [State of Loom: Parte 1](http://cr.openjdk.java.net/~rpressler/loom/loom/sol1_part1.html)
* [State of Loom: Parte 2](http://cr.openjdk.java.net/~rpressler/loom/loom/sol1_part2.html)
* [Project Loom: Fibers and Continuations for the Java Virtual Machine](https://cr.openjdk.java.net/~rpressler/loom/Loom-Proposal.html)

Y otros artículos sobre Loom.

* [Project Loom: Lightweight Java threads](https://developers.redhat.com/blog/2019/06/19/project-loom-lightweight-java-threads/)
* [Will Project Loom obliterate Java Futures?](https://blog.softwaremill.com/will-project-loom-obliterate-java-futures-fb1a28508232)
* [Project Loom: Java With a Stronger Fiber](https://dzone.com/articles/a-new-java-with-a-stronger-fiber)
* [On Project Loom, the Reactive model and coroutines](https://blog.frankel.ch/project-loom-reactive-coroutines/)

{{% reference %}}
* [The Linux Implementation of Threads](https://www.informit.com/articles/article.aspx?p=370047&seqNum=3)
{{% /reference %}}

{{% /post %}}
