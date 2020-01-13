---
pid: 255
type: "post"
title: "Cache simple de datos y con Ehcache en Java"
url: "/2017/08/cache-simple-de-datos-y-con-ehcache-en-java/"
date: 2017-08-25T11:00:00+02:00
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

En ocasiones es necesario usar una cache que contenga un número de elementos hasta un límite y que cuando se vayan añadiendo más se vayan borrando otros según algún criterio. En Java si no queremos añadir una nueva dependencia al proyecto con una librería especializada como [Ehcache][ehcache] la clase [LinkedHashMap](javadoc8:java/util/LinkedHashMap.html) sirve para aquellos casos de uso simples sin necesidad de dependencias adicionales.

Si el coste de obtener algunos datos es costoso ya sean porque hay que obtenerlos de una base de datos, mediante una operación de disco o red o hay que hacer algún cálculo sobre ellos en estos casos guardar los datos en una cache supondrá un aumento notable de rendimiento de mayor o menor medida según el coste de la operación que evita la cache. Usar una cache es viable si es posible usar datos no completamente actualizados y dedicar algo de espacio en memoria para la cache. Si en la mayor parte de las búsquedas que se hacen en la cache el elemento buscado está ya presente se considera un acierto o _hit_ y si no está presente un fallo o _miss_, cuando mayor sea el número de aciertos en la cache mayor será el aumento rendimiento percibido.

Para usar la clase _LinkedHashMap_ como estructura de datos para una cache simple basta que creemos una nueva clase que extienda de esta con una implementación personalizada para el método [removeEldestEntry](javadoc8:java/util/LinkedHashMap.html#removeEldestEntry-java.util.Map.Entry-) que devuelva _true_ para eliminar entrada más antigua, un caso sería cuando en el mapa se alcance el límite de elementos a almacenar como máximo.

En el ejemplo se crea una cache que tiene como máximo 5 elementos y se insertan en ella 15, cuando se intenta insertar en elemento más de la capacidad máxima el elemento más viejo se elimina de modo que la cache siempre tiene como máximo 5 elementos. Si la cache va a ser accedida tanto para operaciones de lectura como de escritura desde múltiples _threads_ hay que prevenir posibles problemas de concurrencia sincronizando su acceso con el método [Collections.synchronizedMap](javadoc8:java/util/Collections.html#synchronizedMap-java.util.Map-).

{{< code file="Main-1.java" language="java" options="" >}}
{{< code file="SimpleCache.java" language="java" options="" >}}

Si son necesarias funcionalidades más avanzadas como que los elementos expiren pasado un tiempo y para mayores cantidades de datos guardar parte de la cache en disco con un límite de espacio ocupado una de las opciones más conocidas es Ehcache.

{{< code file="Main-2.java" language="java" options="" >}}

Cachear datos se puede hacer en varios puntos de una aplicación, si se trata de una aplicación web [Varnish][varnish] cachea el HTML, CSS y JavaScript además de los códigos de estado incluso [nginx incorpora la funcionalidad de cache][blogbitix-165], la propia aplicación puede cachear ciertos datos con alguna de las formas expuestas en este artículo y las propias bases de datos pueden cachear en memoria ciertos datos para evitar acceder al sistema de ficheros o disco. En definitiva una cache usada de forma efectiva ayuda a mitigar la penalización de operaciones costosas de acceso a red o a disco comparado con el acceso a memoria.

{{< image
    gallery="true"
    image1="image:java-cache.png" optionsthumb1="300x200" title1="Ejecución del ejemplo" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaCache" command="./gradlew run" >}}

{{% /post %}}
