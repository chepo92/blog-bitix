---
pid: 386
type: "post"
title: "Las colecciones de Java, estructuras de datos para guardar referencias a objetos"
url: "/2019/02/las-colecciones-de-java-estructuras-de-datos-para-guardar-referencias-a-objetos/"
date: 2019-02-22T18:45:00+01:00
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

Los programas en su funcionamiento manejan información y esta se guarda en algún tipo de estructura adecuada según el tipo de uso de esa información, ya sea para lectura al recuperar datos y escritura par insertar nuevos datos. En Java hay dos interfaces que el resto de colecciones implementa, una interfaz es [Collection](javadoc11:java.base/java/util/Collection.html) y la otra es [Map](javadoc11:java.base/java/util/Map.html), estas en su contrato define una serie de métodos que las implementaciones deben proporcionar.

_Collection_ tiene métodos para saber si un determinado elementos está en la colección con [contains](javadoc11:java.base/java/util/Collection.html#contains(java.lang.Object)) y [containsAll](javadoc11:java.base/java/util/Collection.html#containsAll(java.util.Collection)) basándose en el método [equals](javadoc11:java.base/java/lang/Object.html#equals(java.lang.Object)), iterar los elementos de la colección con iterator, desde Java 8 convertir la colección en un [Stream](javadoc11:java.base/java/util/stream/Stream.html), añadir elementos con [add](javadoc11:java.base/java/util/Collection.html#add(E)) y [addAll](javadoc11:java.base/java/util/Collection.html#addAll(java.util.Collection)), eliminar elementos con [remove](javadoc11:java.base/java/util/Collection.html#remove(java.lang.Object)) y [removeAll](javadoc11:java.base/java/util/Collection.html#removeAll(java.util.Collection)), comprobar si la colección está vacía con [isEmpty](javadoc11:java.base/java/util/Collection.html#isEmpty()), vaciar la colección con [clear](javadoc11:java.base/java/util/Collection.html#clear()), obtener el número de elementos con [size](javadoc11:java.base/java/util/Collection.html#size()) y algunos pocos métodos más.

La interfaz _Map_ es para estructuras de datos que asocian a cada valor una clave por la que se recuperan los elementos tiene métodos para saber si existe una clave con [containsKey](javadoc11:java.base/java/util/Map.html#containsKey(java.lang.Object)) o un valor con [containsValue](javadoc11:java.base/java/util/Map.html#containsValue(java.lang.Object)), obtener un valor por su clave con [get](javadoc11:java.base/java/util/Map.html#get(java.lang.Object)), eliminar un valor según su clave con [remove](javadoc11:java.base/java/util/Map.html#remove(java.lang.Object)) obtener el conjunto de clave con [keySet](javadoc11:java.base/java/util/Map.html#keySet()) o los valores con [values](javadoc11:java.base/java/util/Map.html#values()), obtener el número de elementos de la colección con [size](javadoc11:java.base/java/util/Map.html#size()), comprobar si está vacía con [isEmpty](javadoc11:java.base/java/util/Map.html#isEmpty()) también entre algunos otros más. La interfaz _Map_ se basa en el método [hashCode](javadoc11:java.base/java/lang/Object.html#hashCode()), por eso es importante [implementar correctamente los métodos _equals_ y _hashCode_ correctamente][blogbitix-199] en los objetos, de no hacerlo al usar el framework de colecciones se producirán comportamientos no deseados.

La interfaz [List](javadoc11:java.base/java/util/List.html) la implementan estructuras de datos en ls que los elementos están ordenados según el orden de inserción, como están ordenados se puede acceder por ellos mediante un índice, para ello añade dos métodos con [get](javadoc11:java.base/java/util/List.html#get(int)) y [remove](javadoc11:java.base/java/util/List.html#remove(java.lang.Object)) con un índice por parámetro.

Las colecciones que implementan la interfaz [Set](javadoc11:java.base/java/util/Set.html) no mantienen un orden y no permite valores duplicados basando la igualdad según el método [equals](javadoc11:java.base/java/util/Set.html#equals(java.lang.Object)) de [Object](javadoc11:java.base/java/lang/Object.html).

[Queue](javadoc11:java.base/java/util/Queue.html) también mantiene un orden en los elementos pero los elementos siguen la regla <abbr title="First Input First Output">FIFO</abbr> donde los elementos se añaden al final de la cola con [add](javadoc11:java.base/java/util/Queue.html#add(E)) y los elementos se extraen de el inicio de la cola con [element](javadoc11:java.base/java/util/Queue.html#element()), [peek](javadoc11:java.base/java/util/Queue.html#peek()), [poll](javadoc11:java.base/java/util/Queue.html#poll()) y [remove](javadoc11:java.base/java/util/Queue.html#remove()).

[Stack](javadoc11:java.base/java/util/Stack.html) es una pila donde se sigue la regla <abbr title="Last Input First Output">LIFO</abbr>, el método [push](javadoc11:java.base/java/util/Stack.html#push(E)) añade un elemento en la parte de arriba de la pila y [peek](javadoc11:java.base/java/util/Stack.html#peek()) y [pop](javadoc11:java.base/java/util/Stack.html#pop()) obtiene el elemento son extraerlo y extraen elementos de la cima de la pila.

Las colecciones [TreeSet](javadoc11:java.base/java/util/TreeSet.html) y [TreeMap](javadoc11:java.base/java/util/TreeMap.html                        ) mantienen los elementos ordenados según el orden natural definido por el método [compareTo](javadoc11:java.base/java/lang/Comparable.html#compareTo(T)) de la interfaz [Comparable](javadoc11:java.base/java/lang/Comparable.html) guarda la información en una estructura de árbol de forma que las búsquedas son más rápidas que un una lista.

Las implementaciones más utilizadas de estas estas interfaces son [ArrayList](javadoc11:java.base/java/util/ArrayList.html), [HashSet](javadoc11:java.base/java/util/HashSet.html), [HashMap](javadoc11:java.base/java/util/HashMap.html), [TreeSet](javadoc11:java.base/java/util/TreeSet.html), [ArrayDeque](javadoc11:java.base/java/util/ArrayDeque.html) y [Stack](javadoc11:java.base/java/util/Stack.html).

Desde que [en Java 8 se permiten implementaciones de métodos en las interfaces][blogbitix-17] se proporcionan en algunas de estas varios métodos factoría para crear fácilmente colecciones generalmente con un método de nombre _of_ como en la interfaz _List_. La clase [Collections](javadoc11:java.base/java/util/Collections.html) tiene métodos para hacer las [colecciones inmutables y sincronizadas][blogbitix-387] impidiendo que se les realicen modificaciones o sincronizadas si varios [Thread](javadoc11:java.base/java/lang/Thread.html) de forma simultánea.

La [librería Vavr][blogbitix-288] proporciona otra API y conjunto de colecciones sin algunos errores de diseño pero que se han de mantener por compatibilidad o con algunas funcionalidades adicionales que la API de colecciones de Java no tiene.

{{% /post %}}
