---
pid: 302
type: "post"
title: "El problema de concurrencia de la cena de los filósofos resuelto con Java"
url: "/2018/02/el-problema-de-concurrencia-de-la-cena-de-los-filosofos-resuelto-con-java/"
date: 2018-02-25T10:00:00+01:00
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

En un [artículo de introducción sobre la programación concurrente en Java][blogbitix-246] explicaba cuales eran la facilidades que proporciona este lenguaje para la programación concurrente en múltiples hilos. En él exponía dos ejemplos clásicos que se estudian en las asignaturas de sistemas operativos, uno de ellos era el de [la cena de los filósofos](https://es.wikipedia.org/wiki/Problema_de_la_cena_de_los_fil%C3%B3sofos) donde varios filósofos sentados en una tabla durante una cena se dedican a pensar y cuando tienen hambre comen usando para ello dos tenedores que comparten con sus compañeros que se sientan a la izquierda y derecha.

Dado que dos filósofos no puede utilizar el mismo tenedor a la vez hay que implementar sincronización a la hora de utilizarlos. En la realidad un filósofo representa a un proceso y un tenedor representa a un recurso compartido de uso exclusivo.

{{< image
    gallery="true"
    image1="image:dining-philosophers.png" optionsthumb1="300x200" title1="La cena de los filósofos"
    caption="La cena de los filósofos" >}}

La solución del ejemplo que ponía en el artículo anterior no era completamente correcto ya que un filósofo si tiene mala suerte podría quedarse sin  comer o sin comer durante mucho tiempo, debido a que en esa implementación el filósofo intentaba coger los tenedores y si no podía desistía si alguno de sus compañeros los estuviese utilizando. Las reglas que ha de cumplir una solución a un problema de concurrencia para considerarse válida son:

1. Exclusión mutua: Si un proceso se está ejecutando en su sección crítica ningún otro proceso se puede estar ejecutando en la suya.
2. Progreso: Si ningún proceso se está ejecutando en su sección crítica y hay otros procesos que desean entrar en las suyas, entonces solo aquellos procesos que no se está ejecutando en su sección restante pueden participar en la decisión  del cuál será el siguiente en entrar en la sección crítica, y esta selección no puede postergarse indefinidamente.
3. Espera limitada: Debe haber un límite en el número de veces que se permite que los demás procesos entren en su sección crítica después de que un proceso haya efectuado una solicitud para entrar en la suya y antes de que se conceda esa solicitud.

En la implementación de este ejemplo evitaré que un filósofo pueda quedarse sin comer. La razón de que un filósofo desistiera de coger uno de los tenedores que necesita si uno de sus compañeros ya lo tuviese era para evitar un bloqueo circular en el caso de que todos los filósofos al mismo tiempo cogiesen su tenedor izquierdo, en esta situación ninguno de ellos podría coger su tenedor derecho y se quedarían todos esperando indefinidamente, se produciría un bloqueo indefinido o _deadlock_.

Para evitar un bloqueo indefinido una de las siguientes reglas no se ha de cumplir:

1. Exclusión mutua: Por lo menos un recurso debe retenerse en modo no compartido; es decir, sólo un proceso a la vez puede usar el recurso. Si otro proceso solicita el recurso, deberá esperar hasta que se haya liberado.
2. Retención y espera: Debe haber un proceso que retenga por lo menos un recurso y espere adquirir otros recursos retenidos por otros procesos.
3. No apropiación: Los recursos no se pueden quitar; es decir, un recurso solo puede ser liberado voluntariamente por el proceso que lo retiene, después de que haya cumplido su tarea.
4. Espera circular: Debe haber un conjunto { P0, P1, ..., Pn } de procesos en espera tales que P0 espera un recurso retenido por P1, P1 espera un recurso retenido por P2, ... Pn-1 espera un recurso retenido por On, y Pn espera un recurso retenido por P0.

En esta implementación he optado por hacer que el último filósofo en vez de ser diestro sea zurdo de modo que primero intente coger el tenedor izquierdo y luego el derecho, con este simple cambio la espera circular ya no puede producirse y con ello el bloqueo indefinido.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="Table.java" language="java" options="" >}}
{{< code file="Fork.java" language="java" options="" >}}
{{< code file="Philosopher.java" language="java" options="" >}}

{{< asciinema id="165278" caption="Ejemplo de concurrencia de los filósofos" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaConcurrency" command="./gradlew run" >}}

{{< reference >}}
* [Dining Philosophers in Java 8](https://bruceeckel.github.io/2016/12/29/dining-philosophers-in-java-8/)
{{< /reference >}}

{{% /post %}}
