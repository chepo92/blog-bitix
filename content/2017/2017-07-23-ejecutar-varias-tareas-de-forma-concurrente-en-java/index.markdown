---
pid: 248
type: "post"
title: "Ejecutar varias tareas de forma concurrente en Java"
url: "/2017/07/ejecutar-varias-tareas-de-forma-concurrente-en-java/"
date: 2017-07-23T13:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En el artículo de [iniciación a la programación concurrente en Java][blogbitix-246] explicaba las facilidades que proporciona este lenguaje para la programación de tareas con varios hilos que implica la sincronización y bloqueo mediante varias primitivas como semáforos o _locks_, ponía el ejemplo y su código de dos de los típicos ejemplos que suelen usarse en las asignaturas de sistemas operativos, el problema de los filósofos y el del barbero.

En el caso de tener varias tareas que tardan unos segundos si las ejecutamos de forma secuencial el tiempo que tardarán será la suma de todas las tareas. Si las tareas no son dependientes, no hace falta esperar a que termine una anterior para comenzar otra, o el problema se puede descomponer en varias partes ejecutándolas de forma concurrente y simultáneamente el tiempo total que tardarán aproximadamente será el tiempo de la tarea más lenta.

En la [API de Java][javadoc-8] además de las primitivas de sincronización se ofrece además algunas clases para manejar hilos y tareas a ejecutar de forma concurrente sin tener que manejar los hilos a bajo nivel. La clase [ExecutorService](javadoc8:java/util/concurrent/ExecutorService.html) permite crear un _pool_ de _threads_ con un número fijo de ellos, el _pool_ reutilizará cada _thread_ para ir ejecutando las tareas. Crear _threads_ es una operación más o menos costosa con lo que reutilizándolos se aprovecha mejor los recursos del sistema y en un número grande de tareas a ejecutar la mejora en el rendimiento quizá se note. Crear un _pool_ con un número fijo y limitado de _threads_ evita que el sistema se sature o por el contrario esté infrautilizado, configurando el tamaño del _pool_ de _threads_ según las características del sistema que las ejecutará y del tipo de recursos que más utiliza las tareas se obtiene el mejor rendimiento posible.

Con el método [Runtime.availableProcessors](javadoc8:java/lang/Runtime.html#availableProcessors--) se obtiene el número de núcleos lógicos del ordenador de los modernos procesadores que utilizan [Hyper Threading](https://es.wikipedia.org/wiki/HyperThreading) tanto los de Intel como AMD, si las tareas hacen un uso muy intensivo de CPU y poco de entrada/salida el tamaño del _pool_ de _threads_ óptimo será cercano al número de núcleos del procesador. Por el contrario, si las tareas hacen un uso intensivo de de entrada/salida el tamaño del _pool_ de _threads_ óptimo será mayor ya que estarán la mayor parte del tiempo esperando a que finalicen las lentas operaciones de entrada y salida comparadas con la CPU.

Suponiendo que una aplicación ha de realizar varias consultas a una base de datos para presentar su información al usuario, esas consultas y por la cantidad de información que tiene la base de datos o porque los índices no ayudan tardan en ejecutarse 3 segundos, teniendo que realizar 8 de estas consultas el tiempo total que tardará la aplicación en presentar la información será de 24 segundos (8 tareas x 3 segundos/tarea) ejecutando las consultas de forma secuencial. 24 segundos es un tiempo considerable y el usuario pensará que la aplicación no responde. Ejecutando las tareas con un _pool_ de 8 _threads_ el tiempo total empleado para presentar la información será de 3 segundos y con un _pool_ de 4 _threads_ el tiempo será de 6 segundos, mucho menos que los 24 de forma secuencial.

Este es el código para ejecutar tareas de forma secuencial y de forma concurrente con un _pool_ de _threads_ de tamaño el doble del número de procesadores del sistema midiendo además el tiempo total para comprobar la diferencia de tiempos de ambas opciones.

{{< code file="Main.java" language="java" options="" >}}

{{< asciinema id="130161" caption="Ejemplo de ejecución secuencial y concurrente" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaExecutors" command="./gradlew run" >}}

{{% /post %}}
