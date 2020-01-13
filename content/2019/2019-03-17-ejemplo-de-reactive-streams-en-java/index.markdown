---
pid: 390
type: "post"
title: "Ejemplo de Reactive Streams en Java"
url: "/2019/03/ejemplo-de-reactive-streams-en-java/"
date: 2019-03-17T10:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Los _streams_ representan un flujo de elementos producidos por un productor y consumidos por uno o más consumidores. Para procesar los elementos del _stream_ se pueden emplear dos modelos, el modelo _push_ donde el productor produce elementos para el consumidor que es avisado cuando hay un nuevo elemento disponible y el modelo _pull_ en el que es el consumidor el que solicita al productor nuevos elementos que los genera bajo demanda. Ambos modelos presentan problemas cuando el productor y el consumidor no funcionan a la misma velocidad de elementos producidos o procesados. La solución es proporcionar un _stream_ que se adapta a la velocidad de ambos. Los _reactive streams_ son empleados cuando los elementos son producidos y consumidos en tiempo real como en sistemas de mensajes o peticiones HTTP en vez de un flujo constante como un dispositivo de almacenamiento.

Una estrategia es conocida como _backpressure_ que consiste en que el suscriptor notifica al productor cuántos elementos puede procesar de modo que el productor solo envía el número de elementos solicitados. La implementación de la solución son los _reactive stream_ que proporcionan un mecanismo estándar asíncrono para el _stream_ con _backpressure_. Estos evitan que el productor se bloquee por no poder entregarlos al ser rápido produciendo elementos o el suscriptor tenga un _buffer_ grande o descarte algunos elementos por ser lento al consumirlos o se bloquee esperando nuevos elementos si es rápido consumiéndolos.

En la API entre [otras novedades de la versión 9 de Java][blogbitix-264] se han añadido las siguientes clases para soportar _reactive streams_ embebidas en la clase [Flow](javadoc11:java.base/java/util/concurrent/Flow.html), [Flow.Publisher\<T>](javadoc11:java.base/java/util/concurrent/Flow.Publisher.html), [Flow.Subscriber\<T>](javadoc11:java.base/java/util/concurrent/Flow.Subscriber.html), [Flow.Subscription](javadoc11:java.base/java/util/concurrent/Flow.Subscription.html), [Flow.Processor<T,R>](javadoc11:java.base/java/util/concurrent/Flow.Processor.html) y [SubmissionPublisher\<T>](javadoc11:java.base/java/util/concurrent/SubmissionPublisher.html) en el paquete [java.util.concurrent](javadoc11:java.base/java/util/concurrent/package-summary.html) incluido en el módulo [java.base](javadoc11:java.base/module-summary.html).

Un _Publisher_ publica elementos para los _Subscriber_ basándose en sus demandas recibidas. Un suscriptor se subscribe a un productor. El productor proporciona un _token_ de suscripción con el que el suscriptor puede solicitar _N_ elementos al productor. Cuando los elementos están disponibles el productor envía _N_ o menos elementos al suscriptor. Posteriormente el suscriptor puede solicitar más elementos.

En el ejemplo de código un productor produce y los consumidores procesan elementos a cierto ritmo, dependiendo de la velocidad relativa de cada uno se usará un modelo _push_ o _pull_. La clase _Flow.Processor_ permite procesar los elementos del productor para aplicarles alguna transformación antes de que sean entregados a los consumidores, actual como consumidor y productor. En este _stream_ de números enteros se aplica la función elevarlos al cuadrado.

{{< code file="Main.java" language="java" options="" >}}

{{< code file="System.out" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/ReactiveStreams" command="./gradlew run" %}}

{{< reference >}}
* [Reactive Streams in Java 9](https://dzone.com/articles/reactive-streams-in-java-9)
{{< /reference >}}

{{% /post %}}
