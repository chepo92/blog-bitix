---
pid: 280
type: "post"
title: "Usar un resolver para recuperar propiedades en GraphQL"
url: "/2017/11/usar-un-resolver-para-recuperar-propiedades-en-graphql/"
date: 2017-11-18T10:00:00+01:00
updated: 2019-06-15T01:05:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:graphql.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["graphql"]
---

{{% post %}}

{{< logotype image1="graphql.svg" title1="GraphQL" width1="200" >}}

Cuando en una consulta de [GraphQL][graphql] se indican las propiedades a devolver GraphQL usa para cada una de ellas lo que en la implementación de Java se llama un _resolver_ y en otras implementaciones _data fetcher_. En la mayoría de casos las propiedades serán propiedades de un objeto y en estos casos se usará un _PropertyDataFetcher_ usando en Java la convención de los _java beans_ o la clave de un mapa. En el caso de que cierto dato no esté almacenado en el objeto sino en un repositorio externo es necesario usar un _resolver_ para devolver esa propiedad en la consulta.

Por ejemplo, supongamos que en el ejemplo de la librería en el caso de los libros le añadimos un nuevo dato para el ISBN que está almacenado en un sistema externo, en otro repositorio. La nueva definición del esquema quedaría de la siguiente forma, basta con añadir la nueva propiedad al tipo _Book_ y su tipo que será _String_.

{{< code file="library.graphqls" language="graphqls" options="" >}}

Para que una consulta que recupere el ISBN funcione correctamente es necesario implementar un _resolver_ creando una clase que implemente la interfaz _GraphQLResolver\<Book\>_ en la que se incluya un método _get_ por cada propiedad del tipo _Book_ que esté alamcenada en otro repositorio. Estos métodos _get_ reciben como parámetro el objeto _Book_ a partir del cual como contexto es posible tener los datos del libro del que hay que recuperar el ISBN, posiblemente utilizando su identificativo. En el ejemplo simplemente se devuelve un dato aleatorio pero perfectamente en caso necesario se podría usar un repositorio que lo recupere del sistema de información que lo almacena.

{{< code file="BookResolver.java" language="java" options="" >}}
{{< code file="curl.sh" language="bash" options="" >}}

A la hora de definir el servicio de GraphQL hay que proporcionar el _resolver_ personalizado.

{{< code file="Main.java" language="java" options="" >}}

Los _resolvers_ permiten almacenar la información en dos bases de datos distintas, una podría ser almacenar una información una base de datos relacional, otra información en una base de datos NoSQL, dos bases de datos relacionales distintas o inlcuso proporcionado por una API distinta. En cualquier caso para el usuario de la API y del servicio es transparente como esté almacenada la información.

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{< reference >}}
* [Creating a schema](https://graphql-java.readthedocs.io/en/v5/schema.html)
* [DataFetchingEnvironment](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/schema/DataFetchingEnvironment.java)
* [DataFetcher](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/schema/DataFetcher.java)
{{< /reference >}}

{{% /post %}}
