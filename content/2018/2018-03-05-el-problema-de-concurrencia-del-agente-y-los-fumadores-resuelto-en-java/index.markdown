---
pid: 303
type: "post"
title: "El problema de concurrencia del agente y los fumadores resuelto en Java"
url: "/2018/03/el-problema-de-concurrencia-del-agente-y-los-fumadores-resuelto-en-java/"
date: 2018-03-05T19:00:00+01:00
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

Junto con los ejemplos de [la cena de los filósofos][blogbitix-302] y [la barbería][blogbitix-246] el de los fumadores es otro ejemplo clásico que se estudia en las asignaturas de sistemas operativos. Estos ejemplos necesitan de mecanismos de sincronización y concurrencia para su correcto funcionamiento al haber varios procesos y recursos compartidos que los procesos intentan utilizar de forma concurrente pero que no se debe permitir utilizando notificaciones entre procesos o [algunas primitivas de sincronización, concurrencia e hilos que posee Java][blogbitix-246] como _mutex_, _locks_ o semáforos.

El caso de los fumadores consiste en un grupo de fumadores que para fumar necesitan los ingredientes que les faltan para hacer un cigarrillo y fumárselo, poseen un ingrediente en cantidades ilimitadas pero les faltan otros dos. El agente posee cantidades ilimitadas de todos los ingredientes que son papel, tabaco y cerillas pero solo deja en una mesa dos de estos ingredientes a la vez. Cada fumador posee un ingrediente distinto de los tres necesarios y según los ingredientes que deje el agente uno de los fumadores podrá fumar con los dos ingredientes que el agente deja.

El agente y los fumadores representan en la realidad a procesos y los ingredientes a los recursos de un sistema. La dificultad radica en sincronizar los agentes y fumadores para que el agente cuando deje ingredientes en la mesa el fumador correcto fume cuando.

A primera vista podríamos intentar que cada uno de los fumadores tomase cada uno de los ingredientes que le falta y se pusiese a fumar representando un ingrediente como un semáforo, sin embargo, esta solución puede producir un bloqueo si uno de los otros fumadores que no pueden fumar según los ingredientes que ha dejado el agente le quitan al que podría fumar uno de los ingredientes que necesita. Por ejemplo, un caso de bloqueo sería el caso de que el agente deje en la mesa los ingredientes de tabaco y cerillas el fumador que podría fumar sería el 1 pero si el fumador 2 es más rápido y se ejecuta antes tomando el tabaco el fumador 1 se quedaría esperando a tomar tabaco y el fumador 2 también por no haber dejado el agente papel sino cerillas.

{{< code file="SmokersDeadlock.java" language="java" options="" >}}

Para la solución hay que optar por otra estrategia, en el ejemplo de código he creado tres clases que representa a cada una de las entidades, una clase _Agent_, una clase _Smoker_ y una clase _Table_, adicionalmente una clase _Pusher_ que se encargará de despertar al _Smoker_ correcto según los ingredientes de la mesa. Todas las clases implementan la interfaz [Runnable](https://docs.oracle.com/javase/9/docs/api/java/lang/Runnable.html) para convertir cada una de las instancias en un hilo de ejecución. Cuando un agente deja ingredientes en la mesa se notifica a todos los incitadores  o _pushers_ para indicarles que hay ingredientes listos, el _pusher_ adquiere el ingrediente que tiene asignado para tomar y comprueba cual es el único ingrediente que falta en la mesa, si no lo sabe porque falten varios ingredientes indica que en la mesa está su ingrediente y deja el trabajo de despertar al fumador al siguiente _pusher_. El _pusher_ que sepa que dos ingredientes hay en la mesa despierta al fumador que puede fumar con el ingrediente que tiene y los dos que hay en la mesa. El fumador se pone a fumar y cuando termina se indica al agente que genere otros dos ingredientes.

{{< code file="Component.java" language="java" options="" >}}
{{< code file="Table.java" language="java" options="" >}}
{{< code file="Smoker.java" language="java" options="" >}}
{{< code file="Agent.java" language="java" options="" >}}
{{< code file="Pusher.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}

{{< asciinema id="167230" caption="Ejemplo de concurrencia del agente y los fumadores" >}}

En el siguiente [documento con varios de los problemas de concurrencia y sincronización](https://cse.yeditepe.edu.tr/~kserdaroglu/spring2014/cse331/labnotes/WEEK%205%20-%20SEMAPHORES/mysemaphoreexamplesMOE.pdf) está muy bien explicado la solución a este problema de los fumadores y de los otros casos. En algunos otros sitios este caso lo convierten en un problema de sincronización en vez de uno de concurrencia.

{{< sourcecode git="blog-ejemplos/tree/master/JavaConcurrency" command="./gradlew run" >}}

{{< reference >}}
* [Cigarette smokers problem](https://en.wikipedia.org/wiki/Cigarette_smokers_problem)
* [Introducción sobre la programación concurrente en Java][blogbitix-246]
{{< /reference >}}

{{% /post %}}
