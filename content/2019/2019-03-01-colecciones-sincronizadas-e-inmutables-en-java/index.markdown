---
pid: 387
type: "post"
title: "Colecciones sincronizadas e inmutables en Java"
url: "/2019/03/colecciones-sincronizadas-e-inmutables-en-java/"
date: 2019-03-01T16:30:00+01:00
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

En la [API de Java][javadoc-11] hay un conjunto amplio de [estructuras de datos de diferentes tipos para guardar información][blogbitix-386] de forma eficiente según sea la necesidad de la aplicación. Desde listas de elementos ordenados, conjuntos de elementos no repetidos, estructuras clave-valor, árboles, pilas, colas, ... Este conjunto de estructuras se encuentran agrupadas en la [API de colecciones](javadoc11:java.base/java/util/Collections.html). Además de las estructuras de datos se les puede añadir funcionalidades en algunos casos necesarias para hacerlas inmutables de modo que no puedan ser modificadas, y para hacerlas sincronizadas en los casos que varios _threads_ hagan operaciones de consulta y alguno operaciones de escritura de modo que las estructuras no se corrompan, una colección no sincronizada se puede convertir en una sincronizada o también existen colecciones sincronizadas diseñadas específicamente para ser eficientes en las aplicaciones concurrentes.

La interfaz [Collection](javadoc11:java.base/java/util/Collection.html) es implementada por varias interfaces y clases _ArrayList_, _HashSet_, _List_, _Queue_, _Set_, _SortedSet_, _Stack_, _TreeSet_ y algunas otras, por otro lado está la interfaz [Map](javadoc11:java.base/java/util/Map.html) para estructuras clave-valor. Las colecciones que mantienen un orden en sus elementos heredan de la interfaz [List](javadoc11:java.base/java/util/List.html) que posee métodos con operaciones basadas en un índice como obtener, insertar o eliminar un elemento en una determinada posición. Los [Set](javadoc11:java.base/java/util/Set.html) no permiten elementos que sean iguales según determine el método [equals](javadoc11:java.base/java/lang/Object.html#equals(java.lang.Object)) del objeto y los presentes en la colección. Los _Map_ asocian una clave a cada objeto que se utiliza para realizar operaciones en la colección.

Muchos de los métodos de las colecciones funcionan en términos de los métodos _equals_ y [hashCode](javadoc11:java.base/java/lang/Object.html#hashCode()) de modo que si en una determinada clase se sobreescriben se ha de hacer implementando el contrato de estos métodos correctamente de otra manera una aplicación puede presentar errores de difícil depuración.

La clase [Collections](javadoc11:java.base/java/util/Collections.html) contiene numerosos métodos estáticos entre ellos para hacer una colección que no lo sea en inmutable o sincronizada. Con los métodos [synchronizedCollection](javadoc11:java.base/java/util/Collections.html#synchronizedCollection(java.util.Collection)), [synchronizedList](javadoc11:java.base/java/util/Collections.html#synchronizedList(java.util.List)), [synchronizedMap](javadoc11:java.base/java/util/Collections.html#synchronizedMap(java.util.Map)) y [synchronizedSet](javadoc11:java.base/java/util/Collections.html#synchronizedSet(java.util.Set)) para hacerlas sincronizadas y los métodos [unmodifiableCollection](javadoc11:java.base/java/util/Collections.html#unmodifiableCollection(java.util.Collection)), [unmodifiableList](javadoc11:java.base/java/util/Collections.html#unmodifiableList(java.util.List)), [unmodifiableMap](javadoc11:java.base/java/util/Collections.html#unmodifiableMap(java.util.Map)) y [unmodifiableSet](javadoc11:java.base/java/util/Collections.html#unmodifiableSet(java.util.Set)). Estos métodos estáticos de la clase _Collections_ reciben como parámetro una colección no sincronizada o inmutable y devuelven una colección sincronizada o inmutable.

Las colecciones específicas para la concurrencia son más eficientes que convertir una colección no sincronizada en sincronizada con los métodos de _Collections_. Las colecciones que se convierten en sincronizadas tienen una contención en toda la colección cuando no es necesario para las operaciones de lectura. Si las operaciones de lectura son mayoría las colecciones específicas para la concurrencia son más eficientes, no tienen tanta contención, por ejemplo, [ConcurrentHashMap](javadoc11:java.base/java/util/concurrent/ConcurrentHashMap.html) divide el mapa en varios segmentos y solo bloquea los segmentos relevantes lo que permite a múltiples _threads_ acceder a otros segmentos del mismo mapa sin contención. [CopyOnWriteArrayList](javadoc11:java.base/java/util/concurrent/CopyOnWriteArrayList.html) permite varios lectores sin necesidad de sincronización y cuando ocurre una escritura copia el _ArrayList_ a uno nuevo.

{{% /post %}}
