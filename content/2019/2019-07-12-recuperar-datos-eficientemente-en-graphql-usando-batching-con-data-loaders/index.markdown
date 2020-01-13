---
pid: 421
type: "post"
title: "Recuperar datos eficientemente en GraphQL usando batching con data loaders"
url: "/2019/07/recuperar-datos-eficientemente-en-graphql-usando-batching-con-data-loaders/"
date: 2019-07-12T18:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:graphql.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["graphql"]
summary: "Al diferencia de una API REST donde cada recurso posee un _endpoint_ propio en GraphQL los recursos están relacionados y forman un grafo. Por otro lado las propiedades devueltas en una consulta de GraphQL son las que se indiquen en la consulta en vez de prefijadas como en una API REST. Hay que tener en cuenta que GraphQL para recuperar las propiedades de las entidades usa un _resolver_ y las recupera una a una, si se devuelve una lista de elementos y de cada uno de esos elementos otra propiedad para la que hay que generar una consulta adicional a la base de datos el rendimiento no será bueno. Los _data loaders_ permiten recuperar las propiedades relacionadas de una colección de entidades eficientemente evitando el problema 1+N."
---

{{% post %}}

{{< logotype image1="graphql.svg" title1="GraphQL" width1="200" image2="java.svg" >}}

Una de las dificultades a resolver en GraphQL es evitar los problemas de generar 1+N consultas dado que en algunas peticiones se recupera una lista de elementos para recuperar alguna otra propiedad de esos elementos para la que se realiza otra consulta. Suele ocurrir al navegar las relaciones de las entidades, por ejemplo al solicitar una lista de libros y de cada libro obtener su autor, para obtener los libros se necesita una consulta y hay que evitar que para recuperar el autor de cada libro generar otra consulta, si el número de libros recuperados es grande el número de consultas será grande y la consulta será poco eficiente, lenta y generará una carga a evitar en el servidor de base de datos.

En el artículo [Recuperar datos eficientemente en GraphQL usando batching][blogbitix-322] comentaba una estrategia para evitar este problema que consistía en dados una serie de elementos recuperados y si la propiedad estaba presente en la consulta se obtenían los identificativos de esos elementos y se recuperaba la propiedad para todos los elementos en una única consulta.

Sin embargo, GraphQL posee otra estrategia para resolver el problema de los 1+N, mediante [Data Loaders](https://www.graphql-java.com/documentation/v12/batching/). Para usar un _data loader_ en una propiedad de un tipo hay que crear una clase que implemente la interfaz _MappedBatchLoader_ o _MappedBatchLoaderWithContext_ de [java-loader](https://github.com/graphql-java/java-dataloader). El método a implementar es _load(Set\<K>)_ que recibe un conjunto de instancias de las que se quiere recuperar la propiedad y devuelve un _Map\<K,V>_ cuya clave es la instancia de la colección y el valor de la propiedad recuperada.

{{< code file="IsbnDataLoader.java" language="java" options="" >}}

Una vez definidos los _data loaders_ hay que incluirlos en un registro e indicarlos en la clase del contexto de GraphQL. El método _contextBuilder_ recibe todas las instancias de _data loaders_, el método _dataLoaderRegistry_ crea el registro y finalmente se asigna el registro al contexto. Los _data loaders_ cachean los datos de modo que si los datos no se deben compartir entre peticiones hay que construir los _data loaders_ en cada petición.

{{< code file="Main.java" language="java" options="" >}}

Una vez creados los _data loaders_ hay que usarlos en los _resolver_ de las propiedades de una entidad en la que se desee que se cargue de forma _batched_. El método de la propiedad del resolver debe devolver un [CompletableFuture](javadoc11:java.base/java/util/concurrent/CompletableFuture.html), el método recibe la instancia de la que se quiere recuperar una propiedad y una referencia de _DataFetchingEnvironment_ de la librería [graphql-java](https://www.graphql-java.com/), se recupera el _data loader_ de esa propiedad y se le indica que acumule el conjunto de instancias de las que se quiere recuperar. GraphQL en algún momento llamará al método _load(Set\<K>)_ que recibe un conjunto de instancias para realizar la carga de todas en una única consulta.

{{< code file="BookResolver.java" language="java" options="" >}}

Al obtener los datos del conjunto de libros que utilizan un _batch loader_ se produce la siguiente salida.

{{< code file="curl.sh" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" %}}

{{% /post %}}
