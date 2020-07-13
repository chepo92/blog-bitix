---
pid: 463
type: "post"
title: "El recolector de basura de Java, qué hace y cómo funciona en cada versión"
url: "/2020/02/el-recolector-de-basura-de-java-que-hace-y-como-funciona-en-cada-version/"
date: 2020-02-14T17:00:00+01:00
updated: 2020-07-14T23:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:treenode-3.png"
tags: ["java", "planeta-codigo"]
summary: "El recolector de basura o _garbage collector_ es una de las piezas fundamentales del lenguaje Java y su plataforma, es la funcionalidad que libera al programador de la solicitud y liberación de memoria de forma explícita lo que facilita a los programadores la creación de programas, una mayor productividad, evita errores y fallos de seguridad. Una ventaja sobre lenguajes que no poseen recolectores de basura y que se ha adoptado por los lenguajes desarrollados en la últimas décadas."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Den entre las características de Java ¿a qué se debe su popularidad? ¿al lenguaje simple de fácil lectura sin crípticas expresiones? ¿a ser multiplataforma, _write once, run everywhere_? ¿a la máquina virtual JVM que lo hace independiente de la plataforma sistema operativo y soporta múltiples lenguajes compilados a _bytecode_? ¿a su extensa y completa documentación Javadoc de cada clase incluida en el JDK? ¿a las clases incluidas en el JDK con una completa librería para trabajar con colecciones, interfaces gráficas o conexión a bases de datos? ¿a mantener la compatibilidad hacia atrás de modo que programas escritos hace 20 años sigan compilando y funcionando en versiones más recientes de la máquina virtual?

Además de todas las anteriores entre las principales hay que añadir la recolección de basura que libera al programador la gestión de la memoria, tanto para solicitarla como para devolverla al sistema. Lenguajes más antiguos y con otros propósitos más cercanos a la programación de sistema donde prima el rendimiento y el acceso cercano al hardware como C no poseen recolector de memoria y requieren que el programador solicite de forma explícita con la función _malloc_ la memoria y el tamaño de la memoria a reservar y la libere también cuando se deja de usar de forma explícita con la llamada a la función _free_.

Esto para cada dato y en un programa grande serán muchos supone una dificultad añadida a la creación y mantenimiento. Este ejemplo en código C muestra el uso de la función _malloc_ con la que el programa solicita memoria al sistema operativo y con _free_ la libera.

{{< code file="main.c" language="c" options="" >}}
{{< code file="main.out" language="plaintext" options="" >}}

Como desarrollador de Java apenas hay que preocuparse de fugas de memoria ni de fallos en el programa por liberar memoria antes de que dejar de usarla. En Java la solicitud de memoria al sistema se hace de forma explícita con la palabra reservada _new_ para crear una instancia de un objeto pero no hace falta especificar el tamaño de la memoria a reservar como en C. Tampoco hace falta liberar de forma explícita el objeto cuando dejar de usarse es el propio recolector de basura el que determina si una instancia ha quedado inaccesible desde el programa según por las referencias a objetos que siguen estando en uso, libera la memoria en el proceso de recolección de basura que ejecuta la máquina virtual de forma periódica y automática sin ninguna intervención.

El recolector de basura además de simplificar el código de las aplicaciones, evita fallos en tiempo de ejecución con posibilidad de que sean difíciles de depurar, evita en gran medida las fugas de memoria y fallos graves de seguridad. En los programas en C es muy común errores de seguridad por casos en los que se sobreescriben zonas de memoria contiguas por no hacer comprobaciones en los límites de los arrays, muchos [boletines de seguridad CVE][cve] en muchas librerías tienen un origen de este tipo. En Java si se intenta acceder a un array fuera de sus límites se produce una excepción [ArrayIndexOutOfBoundsException](javadoc11:java.base/java/lang/ArrayIndexOutOfBoundsException.html), el programa sigue teniendo un error pero no tiene por que terminar su funcionamiento de forma drástica porque el sistema operativo lo mata y no son posibles los fallos de seguridad por sobreescribir una zona de memoria contigua al array pero fuera de sus límites.

La desventaja de los recolectores de basura es que cada cierto tiempo requieren detener la ejecución de la aplicación para proceder a liberar la memoria dejada de usar por la aplicación. Estas pausas que suceden fuera del control de la aplicación hace que para entornos donde se necesite una respuesta bajo unos términos de tiempo bajos o extremadamente alto rendimiento como en el caso de sistemas en tiempo real hace que los recolectores de basura sean una dificultad.

En Java una de las áreas para mejorar el rendimiento y tiempo de respuesta de las aplicaciones es modificar el algoritmo de recolección de basura, para mejorar el tiempo que necesita para ejecutarse y número de pausas además de posibilitar el paralelizar la ejecución del recolector de basura con la ejecución de la aplicación. A lo largo de los años en Java ha habido varios recolectores de basura.

Salvo casos en los que hay que ajustar al límite la máquina virtual en aplicaciones que necesitan gran rendimiento no es necesario preocuparse por el funcionamiento del recolector de basura, hace su cometido como se espera. En mis años de experiencia nunca he tenido que configurarlo, pero es interesante conocer que mejoras se van implementando en cada nueva generación de algoritmo. En la mayoría de los casos parece que el sucesor se basa en el anterior y aporta alguna mejora.

En [la revista JavaMagazine][java-magazine] se han publicado varios artículos explicando el recolector de basura de Java. En las secciones de las diferentes versiones de recolectores de basura resumo parte del contenido de esos artículos.

* [Understanding Garbage Collectors](https://blogs.oracle.com/javamagazine/understanding-garbage-collectors)
* [Understanding the JDK’s New Superfast Garbage Collectors](https://blogs.oracle.com/javamagazine/understanding-the-jdks-new-superfast-garbage-collectors)
* [Epsilon: The JDK’s Do-Nothing Garbage Collector](https://blogs.oracle.com/javamagazine/epsilon-the-jdks-do-nothing-garbage-collector)

Otros artículos relativos a la recolección de basura y su configuración son los de la [Garbage Collection Tuning](https://docs.oracle.com/en/java/javase/13/gctuning/introduction-garbage-collection-tuning.html#GUID-326EB4CF-8C8C-4267-8355-21AB04F0D304) con una explicación más detallada.

* [Garbage Collector Implementation](https://docs.oracle.com/en/java/javase/11/gctuning/garbage-collector-implementation.html#GUID-23844E39-7499-400C-A579-032B68E53073)
* [Java Available Collectors](https://docs.oracle.com/en/java/javase/11/gctuning/available-collectors.html#GUID-F215A508-9E58-40B4-90A5-74E29BF3BD3C)
* [Parallel Collector](https://docs.oracle.com/en/java/javase/11/gctuning/parallel-collector1.html#GUID-DCDD6E46-0406-41D1-AB49-FB96A50EB9CE)
* [Garbage-First Collector](https://docs.oracle.com/en/java/javase/11/gctuning/garbage-first-garbage-collector.html#GUID-ED3AB6D3-FD9B-4447-9EDF-983ED2F7A573)
* [ZGC Collector](https://docs.oracle.com/en/java/javase/11/gctuning/z-garbage-collector1.html#GUID-A5A42691-095E-47BA-B6DC-FB4E5FAA43D0)

### Cómo funciona el recolector de basura

En un lenguaje orientado a objetos como Java los datos están contenidos en los objetos. Los objetos son almacenados en el espacio de memoria del sistema denominado _heap_ distinta a la memoria del código ejecutable del programa, datos para las constantes y de las pilas de memoria para los argumentos y valores de retorno entre métodos.

Las clases de colecciones de Java contienen referencias a objetos. Un ejemplo podría ser el siguiente de un árbol binario.

{{< code file="TreeNode.java" language="java" options="" >}}

Al insertar nodos todos los objetos insertados están accesibles.

{{< code file="Main.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:treenode-1.png" optionsthumb1="300x200" title1="Objetos al inicializar la estructura de datos"
    caption="Objetos al inicializar la estructura de datos" >}}

Al realizar la operación de eliminación de un nodo del árbol el objeto eliminado del árbol deja de ser accesibles para el programa sino hay más referencias en otras estructuras de datos  con la que alcanzar a ese objeto y pasa a ser reclamable por el recolector de basura.

{{< image
    gallery="true"
    image1="image:treenode-2.png" optionsthumb1="300x200" title1="Objetos después de eliminar un nodo"
    caption="Objetos después de eliminar un nodo" >}}

Con más operaciones los objetos no accesibles aumentan. Estos objetos no accesibles siguen consumiendo memoria, el recolector de basura se encarga de liberar la memoria de esos objetos y después compactar la memoria en uso y la liberada queda utilizable para nuevas instancias de objetos.

{{< image
    gallery="true"
    image1="image:treenode-3.png" optionsthumb1="300x200" title1="Objetos después de realizar múltiples operaciones de inserción"
    caption="Objetos después de realizar múltiples operaciones de inserción" >}}

Al realizar la operación de compactar la memoria los objetos cambian de ubicación y el programa debe conocer la nueva ubicación, esto requiere actualizar las referencias de los objetos almacenados en las estructuras de datos. La forma fácil de realizar la liberación de memoria y la compactación es parar los _threads_ de la aplicación, liberar la memoria, compactarla y actualizar todas las referencias de los objetos a la nueva ubicación, después reiniciar la aplicación. Esta parada de la aplicación se conoce como _stop-the-world_. Sin embargo, el parar la aplicación reduce el rendimiento, esto no es deseable.

Para reducir las pausas de los recolectores de basura hay dos estrategias:

* Los algoritmos concurrentes: realizar el trabajo mientras funciona la aplicación, la aplicación no necesita pausas ni sufre pérdida de rendimiento.
* Los algoritmos paralelos: emplear más _threads_ para hacer el trabajo más rápido, aumenta el rendimiento del recolector de basura.

El recolector de basura por defecto en Java 8 usar la estrategia paralela, usa varios _threads_ para tener un alto rendimiento. Otras versiones de algoritmos emplean ambas técnicas simultáneamente para tener un alto rendimiento y apenas sin pausas. Hay dos áreas de mejora en los algoritmos de recolección de basura y medir su desempeño. La primera es el rendimiento, cuanta cantidad de tiempo de CPU de la aplicación es gastada en realizar recolección de basura en vez de ejecutar código de la aplicación. La segunda es el tiempo de latencia en las pausas.

### Recolector de basura Parallel

El recolector de basura _parallel_ emplea zonas para segregar los objetos, la zona de objetos jóvenes y la zona de objetos viejos. Inicialmente los objetos se crean en la zona de objetos jóvenes, cuando han sobrevivido a varios ciclos del recolector de basura son movidos a la zona de objetos viejos. 

La razón es que en vez de recolectar los objetos de toda la memoria hay más probabilidad de recolectar más objetos que han dejado de usarse en la zona de objetos jóvenes. Eventualmente también es necesario recolectar los objetos de la zona de objetos viejos.

Es el recolector de basura por defecto en Java 8 y anteriores. La opción para usar este recolector de basura es la siguiente.

{{< code file="java-option-gc-parallel.txt" language="plaintext" options="" >}}

### Recolector de basura Garbage First o G1

El recolector de basura G1 usa ambas estrategias la paralela y la concurrente. Usa _threads_ concurrentes mientras la aplicación está funcionando buscando los objetos vivos y usa la estrategia paralela para realizar la recolección y compactación rápidamente manteniendo las pausas bajas.

El recolector de basura G1 también divide la memoria en regiones de memoria catalogadas como de objetos jóvenes y objetos viejos. Las regiones de objetos jóvenes las recolecta en cada pausa, para las zonas de objetos viejos tiene cierta flexibilidad para recolectar muchas o pocas como la estimación de tiempo que le llevará hacerlo le permita para cumplir con el objetivo de tiempo de pausa configurado dado que permite ajustar según preferencia el límite de tiempo máximo deseado para las pausas.

{{< image
    gallery="true"
    image1="image:gc-g1.png" optionsthumb1="650x450" title1="División por zonas de G1 y compactación de objetos"
    caption="División por zonas de G1 y compactación de objetos" >}}

G1 conoce cuantos datos vivos hay en cada región, lo calcula con la estrategia concurrente mientras la aplicación está funcionando, y el tiempo aproximado que consume copiar los datos vivos. Si se prefieren pausas bajas por el tiempo de pausa configurado G1 puede elegir evacuar solo unas pocas regiones. Si las pausas pueden ser mayores G1 puede elegir mayor número de regiones. Esta flexibilidad le permite a G1 liberar primero las zonas de objetos viejos en las que estime que liberará más objetos dado que conoce cuantos objetos siguen vivos.

La contrapartida de especificar pausas bajas es que G1 puede no ser capaz de mantener el ritmo de liberación de memoria, en cuyo caso eventualmente opta por parar la aplicación con el modo _stop-the-world_. Esto implica que el proceso de búsqueda de objetos vivos y el proceso de copiado es realizando mientras los _threads_ de la aplicación están parados. Si G1 no puede cumplir con el objetivo de tiempo de pausa en recolecciones parciales, entonces el recolector de basura necesitará una pausa de mayor tiempo que el límite máximo deseado especificado.

G1 en general es un recolector con un buen balance entre rendimiento y restricciones de tiempo de pausa. Es el recolector de basura por defecto en Java 9.

{{< code file="java-option-gc-g1.txt" language="plaintext" options="" >}}

### Recolector de basura Shenandoah

Usa la misma disposición de regiones que G1 y usa el mismo sistema de escaneo concurrente para calcular la cantidad de objetos vivos en cada región. Difiere en que la compactación también es concurrente, de modo que no necesita limitar el número de regiones a recolectar para minimizar los tiempos de las pausas.

La dificultad para Shenandoah es que la copia concurrente se realiza al mismo tiempo que los _threads_ de la aplicación están accediendo al objeto de modo que ambos deben estar de acuerdo en donde está el objeto. La dirección del objeto puede estar en otros varios objetos y la actualización debe realizarse simultáneamente. 

La solución que aplica es una indirección. Los objetos son reservados en memoria con espacio extra para un puntero de indirección. Cuando los _threads_ de Java acceden al objeto leen primero el puntero de indirección para ver donde se ha movido el objeto. Cuando el recolector de basura mueve el objeto, actualiza el puntero de indirección a la nueva localización. Los objetos nuevos tienen un puntero de indirección que apunta a si mismos. Solo cuando el objeto es copiado durante la recolección de basura el puntero de indirección apunta otro sitio.
Si el programa Java modifica los datos de un objeto que Shenandoah está copiando, se produce un problema de concurrencia que es solventado haciendo que los _threads_ de la aplicación cooperen con los _threads_ del recolector de basura.

Shenandoah elimina la necesidad de realizar pausas durante la compactación de modo que las pausas cuando se hacen son mucho menores.
El recolector de basura Shenandoah es un proyecto de OpenJDK que forma parte del OpenJDK 12 y está siendo portado al JDK 8 y 11. Se puede activar en Java 12 con la siguiente opción de la máquina virtual.

{{< code file="java-option-gc-shenandoah.txt" language="plaintext" options="" >}}

### Recolector de basura ZGC

Para los algoritmos que realizan pausas incrementar la memoria _heap_ mejora el rendimiento dado que el número de pausas es menor por la menor necesidad de liberar memoria pero hace que las pausas sean más largas porque hay más trabajo que realizar dado que la memoria total es mayor.

Los objetivos principales de ZGC son baja latencia, escalabilidad y facilidad de uso. Para conseguirlo todas las operaciones de recolección de basura se realizan de forma concurrente mientras la aplicación continúa ejecutándose salvo algunas excepciones. Escala desde unos cientos de megabytes de memoria a memorias de tamaño de terabytes manteniendo consistentemente tiempos bajos de pausas menores de entre 10 y 2 ms.

Los recolectores de basura anteriores y hasta ahora necesitaban realizar pausas _stop-the-world_ para algunas operaciones de recolección de basura. Para un recolector de basura de baja latencia esto es problemático de modo que ZGC realiza todas las operaciones concurrentemente a la aplicación de modo que no hay apenas latencias.

{{< image
    gallery="true"
    image1="image:zgc-stoptheworld.jpg" optionsthumb1="650x450" title1="Comparación de latencia entre ZGC, Parallel y G1"
    caption="Comparación de latencia entre ZGC, Parallel y G1" >}}

ZGC se puede activar en Java 13 con la siguiente opción para la máquina virtual.

{{< code file="java-option-gc-zgc.txt" language="plaintext" options="" >}}

{{% /post %}}
