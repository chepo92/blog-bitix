---
pid: 246
type: "post"
title: "Iniciación a la programación concurrente en Java"
url: "/2017/07/iniciacion-a-la-programacion-concurrente-en-java/"
aliases: ["/2017/07/tutorial-sobre-programacion-concurrente-en-java/"]
date: 2017-07-15T00:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Java proporciona en su API numerosas primitivas para realizar programación concurrente. La programación concurrente permite realizar varias tareas simultáneamente aprovechando los múltiples núcleos de los procesadores modernos con un tiempo de ejecución total para un conjunto de tareas significativamente menor. Dos de los problemas de concurrencia más conocidos son el problema de los filósofos y del barbero que en este artículo muestro como implementar usando varias de las primitivas ofrecidas por Java."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En todo el tiempo que llevo programando en Java no he tenido necesidad de conocer en detalle las primitivas de concurrencia que ofrece el lenguaje y la API. Java desde sus primeras versiones ya ofrecía el soporte básico para la programación concurrente con las clases [Thread](javadoc8:java/lang/Thread.html) y [Runnable](javadoc8:java/lang/Runnable.html) y algunas primitivas de sincronización como la palabra clave reservada _syncrhonized_, los _locks_ intrínsecos de los objetos y algunos métodos de la clase _Thread_ como [sleep](javadoc8:java/lang/Thread.html#sleep-long-), [wait](javadoc8:java/lang/Object.html#wait--) y [join](javadoc8:java/lang/Thread.html#join--). Entre la documentación de Java está el siguiente [tutorial sobre la concurrencia en Java](https://docs.oracle.com/javase/tutorial/essential/concurrency/) que es muy recomendable leer.

Las computadoras realizan varias tareas de forma concurrente con la ayuda del sistema operativo que permite compartir el procesador para realizar diferentes tareas (navegar por internet, editar un documento, escuchar música, ...) cambiando cada muy poco tiempo (medido en ms) entre procesos, con los procesadores de varios núcleos las tareas se ejecutan silmultáneamente en diferentes núcleos. Los _threads_ en Java se comunican principalmente compartiendo referencias a objetos, este tipo de comunicación es eficiente pero posibilita dos tipos de errores, interferencias entre _threads_ y errores de consistencia, la herramienta para evitarlos es la sincronización. Sin embargo, la sincronización introduce contención cuando dos o más hilos intentan acceder al mismo recurso simultáneamente y provocan una pérdida de rendimiento. El bloqueo mutuo o _deadlock_, la inanición o _starvation_ y un bloqueo vivo o _livelock_ son problemas de la sincronización. Seguramente te suenen los objetos inmutables, en la programación concurrente son especialmente útiles dado que su estado no cambia y no pueden corromperse ni quedar en un estado inconsistente por la interferencia entre _threads_ evitando de esta manera errores que suelen ser difíciles de depurar por ofrecer un comportamiento errático.

En vez de usar los _locks_ implícitos de los objetos la API de Java para concurrencia ofrece varios tipos más con propiedades adicionales como la habilidad de salir si el intento de adquirir el _lock_ falla. En el paquete [java.util.concurrent.locks](javadoc8:java/util/concurrent/locks/package-summary.html) está listados. Otro tipo de primitivas de sincronización para _threads_ son los [Semaphore](javadoc8:java/util/concurrent/Semaphore.html), [CyclicBarrier](javadoc8:java/util/concurrent/CyclicBarrier.html) y [CountDownLatch](javadoc8:java/util/concurrent/CountDownLatch.html) entre otros como [Phaser](javadoc8:java/util/concurrent/Phaser.html) y [Exchanger](javadoc8:java/util/concurrent/Exchanger.html). En el paquete [java.util.concurrent.atomic](javadoc8:java/util/concurrent/atomic/package-summary.html) hay varios tipos de datos básicos que realizan sus operaciones de forma atómica como por ejemplo contadores.

Con los [Executors](javadoc8:java/util/concurrent/Executors.html) y [ExecutorService](javadoc8:java/util/concurrent/ExecutorService.html) no hace falta que manejemos los hilos a bajo nivel, es posible obtener un _pool_ de _threads_ de una tamaño específico y enviar clases [Callable](javadoc8:java/util/concurrent/Callable.html) o _Runnable_ que devuelven un resultado para que se ejecuten con un _thread_ del _pool_ cuando esté libre. Con la clase [ScheduledExecutorService](javadoc8:java/util/concurrent/ScheduledExecutorService.html) se programa la ejecución de tareas de forma periódica. En los _streams_ añadidos a Java 8 el procesamiento se puede realizar de forma paralela aprovechando los microprocesadores multinúcleo sin tener que usar de forma explícita ninguna de las utilidades anteriores, internamente usa el _Fork/Join_.

El soporte para la programación concurrente ofrecido en Java es suficiente para la mayoría de tareas que podamos necesitar y ha mejorado bastante desde las primeras versiones.

El primer ejemplo que muestro es usando concurrencia ejecutar varias tareas y como realizándolas de forma secuencial el tiempo total empleado es la suma del tiempo de las tareas individuales y como usando concurrencia es la suma de la tarea que más tarda. El ejemplo se trata de 8 tareas que de forma secuencial tardan aproximadamente 24 segundos ya que cada tarea emplea 3 segundos, en el caso empleando concurrencia el tiempo es de aproximadamente 6 segundos ya se se emplea en _pool_ de _threads_ de 4 de capacidad con lo que las primeras 4 tareas tardan 3 segundos y el siguiente lote de 4 tareas tarda otros 3 segundos para un total de 6 segundos.

{{< code file="Main.java" language="java" options="" >}}

{{< asciinema id="129084" caption="Ejecución secuencial y concurrente de tareas" >}}

Dos de los problemas más conocidos en la programación concurrente son el de [La cena de los filósofos](https://es.wikipedia.org/wiki/Problema_de_la_cena_de_los_fil%C3%B3sofos) y el de [El barbero durmiente](https://es.wikipedia.org/wiki/Problema_del_barbero_durmiente). Usando algunas de las primitivas comentadas en este artículo este sería el código para para resolver ambos problemas en Java.

En este código del problema de los filósofos la clase _Table_ crea los filósofos asignándoles los _Fork_ que tienen que compartir para comer después de estar un tiempo pensando. En la ejecución se observa que el primer filósofo que intenta comer puede hacerlo ya que sus tenedores adyacentes está libres pero posteriormente se observa que en algunas ocasiones algún filósofo no puede hacerlo porque sus tenedores están siendo usados por alguno de sus compañeros adyacentes.

{{% warning %}}

Esta implementación de los filósofos no es del todo correcta debido a que un filósofo podría quedarse sin comer o quedarse sin comer duramente mucho tiempo. En el artículo [El problema de concurrencia de la cena de los filósofos resuelto con Java][blogbitix-302] expongo otra solución sin este problema y resuelto correctamente.
{{% /warning %}}

{{< code file="PhilosophersMain.java" language="java" options="" >}}
{{< code file="Table.java" language="java" options="" >}}
{{< code file="Fork.java" language="java" options="" >}}
{{< code file="Philosopher.java" language="java" options="" >}}

{{< asciinema id="129083" caption="Ejemplo de concurrencia de los filósofos" >}}

En el caso de ejemplo del barbero cuando solo hay un barbero los clientes se acumulan ya que estos entran en la tienda a razón de 1 entre 1500 y 3500ms y el barbero tarda afeitar un cliente entre 2000 y 7000ms. Poniendo en la barbería dos barberos los clientes ya no se acumulan en la sala de espera.

{{< code file="BarberShopMain.java" language="java" options="" >}}
{{< code file="BarberShop.java" language="java" options="" >}}
{{< code file="Street.java" language="java" options="" >}}
{{< code file="Barber.java" language="java" options="" >}}
{{< code file="Client.java" language="java" options="" >}}

{{< asciinema id="129098" caption="Ejemplo de concurrencia del barbero (1 barbero)" >}}

{{< asciinema id="129099" caption="Ejemplo de concurrencia del barbero (2 barberos)" >}}

Estos no son los únicos ejemplos clásicos otro es el del [agente y los fumadores][blogbitix-303].

{{< sourcecode git="blog-ejemplos/tree/master/JavaconCurrency" command="./gradlew run" >}}

{{< reference >}}
* [Tutorial sobre la concurrencia en Java](https://docs.oracle.com/javase/tutorial/essential/concurrency/)
{{< /reference >}}

{{% /post %}}
