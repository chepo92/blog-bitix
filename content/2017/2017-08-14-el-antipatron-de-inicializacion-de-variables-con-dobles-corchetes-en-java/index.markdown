---
pid: 253
type: "post"
title: "El antipatrón de inicialización de variables con dobles llaves en Java"
url: "/2017/08/el-antipatron-de-inicializacion-de-variables-con-dobles-llaves-en-java/"
aliases: ["/2017/08/el-antipatron-de-inicializacion-de-variables-con-dobles-corchetes-en-java/"]
date: 2017-08-14T11:00:00+02:00
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

Java es un lenguaje más verboso y con menos azúcar sintáctico (o veneno para ratas, según se mire) que otros lenguajes. Esto hace que por ejemplo para declarar e inicializar objetos tan comunes en un programa de tipo [Map](javadoc8:java/util/Map.html), [List](javadoc8:java/util/List.html) o [Set](javadoc8:java/util/Set.html) que contengan un número fijo de elementos haya que escribir varias líneas de código. Estas clases de estructuras de datos del grupo de colecciones son de las más usadas en una aplicación Java. A la fecha de escribir este artículo Java no soporta literales para las colecciones que reduzca las lineas de código para inicializarlas y mejore la legibilidad del código aunque en versiones recientes si se han incorporado métodos de utilidad que cubren el requerimiento.

Con el objetivo de reducir la verbosidad quizá en algún sitio se pueda ver que usando la técnica de doble llave se puede inicializar un _Map_ o _List_ de una forma más reducida, tal que:

{{< code file="AntipatronLlaves.java" language="java" options="" >}}

Sin embargo, no es recomendable usar este _hack_ del lenguaje porque presenta sus inconvenientes, por ello está desaconsejado y se considera un antipatrón. En el pozo de sabiduría para el programador de [StackOverflow][stackoverflow] se indican [varios inconvenientes](https://stackoverflow.com/questions/1958636/what-is-double-brace-initialization-in-java#27521360):

* Cada bloque de inicialización con doble llave crea una clase anónima que incrementa el número de clases de la aplicación y que puede penalizar el rendimiento si se usa de forma extensiva en una aplicación.
* Si se retorna un mapa inicializado de esta forma desde un método el mapa tendrá una referencia al objeto que lo creo, lo que evita que el objeto sea destruido por el recolector de basura hasta que no se recolecte el mapa creando una potencial fuga de memoria.

En [otros hilos de StackOverflow](https://stackoverflow.com/questions/1005073/initialization-of-an-arraylist-in-one-line#1005083) algunas respuestas muy votadas se propone usar dobles llaves para la inicialización, pero por los puntos comentados anteriormente mejor no usarla por mucho que esté en StackOverflow y haya sido esta una respuesta muy votada.

Las alternativas en Java 8 en el caso del _Map_ si queremos reducir la verbosidad al inicializar estos tipos de datos usados profusamente podemos usar lo siguiente, en el caso de _List_ o _Set_ disponemos desde hace más tiempo del método _Arrays.asList_:

{{< code file="MapListSetJava8.java" language="java" options="" >}}

{{< code file="MapListSetJava7.java" language="java" options="" >}}

En Java 9 aunque aún no se incorporen la definición de literales al lenguaje con los métodos de utilidad _of_ en su respectivas interfaces gracias a los _defaults methods_ el código se simplifica en gran medida.

{{< code file="MapListSetJava9.java" language="java" options="" >}}

También es posible [lanzar excepciones checked como si fueran unchecked en Java][blogbitix-405] pero al igual que en este caso no es recomendable.

{{< reference >}}
* [What is Double Brace Initialization in Java? Anti Pattern Example](http://javarevisited.blogspot.com.es/2015/10/what-is-double-brace-initialization-in-java-example-anti-pattern.html)
* [Double Brace Initialization](http://c2.com/cgi/wiki?DoubleBraceInitialization)
* [What is Double Brace initialization in Java?](https://stackoverflow.com/questions/1958636/what-is-double-brace-initialization-in-java)
* [Java 8, Initializing Maps in the Smartest Way](http://minborgsjavapot.blogspot.com.es/2014/12/java-8-initializing-maps-in-smartest-way.html)
{{< /reference >}}

{{% /post %}}
