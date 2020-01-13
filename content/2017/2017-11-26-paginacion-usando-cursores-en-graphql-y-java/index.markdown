---
pid: 283
type: "post"
title: "Paginación usando cursores en GraphQL y Java"
url: "/2017/11/paginacion-usando-cursores-en-graphql-y-java/"
date: 2017-11-26T10:30:00+01:00
updated: 2019-06-15T01:15:00+02:00
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

El conjunto de datos de una entidad en algunos casos será grande, miles o cientos de miles de registros, y por tanto no es viable devolverlos todos en una misma consulta por lo que es necesario realizar paginación devolviéndolos en pequeños grupos. La paginación se puede implementar de varias formas, habitualmente con un parámetro que limite el número de elementos a incluir en la página y otro parámetro _offset_ que deseche los primeros elementos hasta el primero deseado. Sin embargo, utilizar los parámetros _limit_ y _offset_ puede producir resultados inesperados si mientras la obtención de una página y la siguiente se insertan nuevos elementos anteriores al _offset_ ocasionando que lo que sería por ejemplo el décimo elemento pase a ser el undécimo.

Si esta situación es importante se suelen utilizar cursores que utilizan un parámetro para indicar el número de elementos a incluir en la página pero en vez de un _offset_ utilizan el identificativo de un registro a partir del cual devolver registros de modo que aunque se inserten registros el primer elemento de la página no cambiará.

En el caso de la [paginación en GraphQL](https://graphql.org/learn/pagination/) se proponen varias formas de implementar la paginación, una de ellas los cursores. En la documentación se explica la teoría, para implementarla es necesario [crear un _data fetcher_ o _resolver_][blogbitix-280] que reciba los parámetros de _limit_ para indicar el número de elementos a devolver en la página y _after_ para indicar a partir de que elemento devolver elementos. También es necesario modificar el esquema de la API para tener en cuenta las nuevas estructuras de datos en las que se devuelven los resultados.

En este ejemplo de una librería para mostrar la paginación he añadido a los libros una lista de comentarios que será en la que soporte paginación. La definición del esquema queda de la siguiente forma siguiendo la [especificación de Relay](https://facebook.github.io/relay/graphql/connections.htm) para lo cual se definen los tipos _CommentsConnection_, _CommentEdge_ (usando _generics_ no sería necesario implementar unas de estas clases por cada entidad paginable) y _PageInfo_. Los cursores son un dato opaco para el cliente pero que decodificado incluye el identificativo del comentario. La propiedad _comments_ utiliza un _resolver_ con parámetros que se usa para realizar la búsqueda y recuperar los elementos solicitados en la consulta.

{{< code file="library.graphqls" language="graphqls" options="" >}}
{{< code file="CommentsConnection.java" language="java" options="" >}}
{{< code file="CommentEdge.java" language="java" options="" >}}
{{< code file="PageInfo.java" language="java" options="" >}}

En el caso del ejemplo los datos se almacenan en unas listas creadas al iniciar la aplicación y la paginación y la obtención de los datos de la página se realiza usando _streams_ y con código Java para implementar la lógica según los parámetros de la paginación en el método _findComments_. Si los datos estuvieran almacenados en una base de datos relacional o NoSQL se usarían las facilidades de sus lenguajes u operaciones de consulta como sería generar la sentencia SQL apropiada.

{{< code file="LibraryRepository.java" language="java" options="" >}}

Los comentarios se obtienen usando un _data fetcher_ o _resolver_ que si existe para una determinada propiedad tiene precedencia sobre el _data fetcher_ por defecto que en Java obtiene el dato usando la convención de los _java beans_. En este caso es el _resolver_ _BookResolver_ siendo el método _getComments_ el encargado de recuperar los datos de la propiedad _comments_ cuando se solicite en una consulta de GraphQL, recibe los datos de paginación y delega la búsqueda en el repositorio para que haga la consulta apropiada.

La clase repositorio abstrae al _resolver_ de como o donde están guardados los datos, de esta forma se podría pasar de guardarlos en una base de datos [PostgreSQL][postgresql] a una base de datos [MongoDB][mongodb] sin que el _resolver_ necesite ninguna modificación, también se podría optar por guardar los libros en una base de datos relacional y los comentarios en una base de datos MongoDB. El _resolver_ se encarga de crear las instancias de objetos necesarios de los tipos _CommentsConnection_, _CommentEdge_ y _PageInfo_ para adaptarlos a las estructuras de datos apropiadas según la especificación de Relay en el servicio de GraphQL.

{{< code file="BookResolver.java" language="java" options="" >}}

Una vez implementada la paginación en los comentarios con la siguientes consultas se obtiene un libro usando una [consulta con un filtro][blogbitix-282] todos sus comentarios, los 3 primeros comentarios usando el parámetro _limit_ y los siguientes tres comentarios a partir del tercero usando los parámetros _limit_ y _after_. Obteniendo como respuesta un libro con únicamente los comentarios deseados. Cada elemento en el resultado contiene los datos solicitados junto con el valor del cursor que identifica al comentario además de incluir una estructura de datos _pageInfo_ con información sobre la paginación.

Con el valor del cursor indicado en _pageInfo_ en la propiedad _endCursor_ se podría obtener la siguiente página de comentarios realizando otra consulta e indicándolo en el parámetro _after_.

{{< code file="curl-1.sh" language="bash" options="" >}}
{{< code file="curl-2.sh" language="bash" options="" >}}
{{< code file="curl-3.sh" language="bash" options="" >}}

Los cursores tiene la ventaja de que son opacos por lo que se evita que los clientes dependan de identificativos y podrían cambiarse sin que los clientes necesitasen modificaciones. Otra ventaja es que la especificación de Relay propone un marco y unas convenciones para estandarizar la paginación. Sin embargo, esta solo es una forma de hacer paginación y es perfectamente posible usar cualquier otra para adaptarla a las necesidades que haya por ejemplo añadiendo más datos a _pageInfo_ o con más u otros parámetros para realizar la consulta de paginación.

Pero... en este ejemplo por cada libro que se devuelve como resultado en la consulta se realiza una búsqueda de los comentarios ya que las propiedades de resultado en la consulta se recuperan una a una. Para la mayoría de propiedades esto no es problema ya que son propiedades que están en un objeto que no realizan consultas a una base de datos pero en el caso de los comentarios sí. Si se devolviesen muchos libros se realizaría una consulta para cada uno de ellos lo que no es eficiente. Si se devolviesen 500 libros y sus comentarios se realizarían 500 consultas para obtener los comentarios de cada libro, usando una base de datos relacional serían 1+500 consultas SQL por cada petición a GraphQL, 1 para obtener los libros y 500 para los comentarios. Como solución a este problema está la funcionalidad de _batching_ de GraphQL que permite obtener todos los comentarios de los libros en una única consulta, será tema para otro de los siguientes artículos de esta serie sobre GraphQL.

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{% /post %}}
