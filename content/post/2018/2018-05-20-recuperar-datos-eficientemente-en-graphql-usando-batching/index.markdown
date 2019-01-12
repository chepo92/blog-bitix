---
pid: 322
title: "Recuperar datos eficientemente en GraphQL usando batching"
url: "/2018/05/recuperar-datos-eficientemente-en-graphql-usando-batching/"
date: 2018-05-20T19:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
tags: ["java", "planeta-codigo", "programacion"]
series: ["graphql"]
---

{{% post %}}
{{< links >}}
{{< postslinks >}}

{{< logotype image1="graphql.svg" title1="GraphQL" width1="200" >}}

Dada una consulta con los datos a recuperar [GraphQL][graphql] hace una llamada al correspondiente _resolver_ o _data fecher_ para obtener el valor de cada propiedad. Cuando se tratan de propiedades en un _java bean_ esto no supone ningún problema en cuanto a rendimiento pero cuando obtener el valor de una propiedad es costoso la consulta resulta ineficiente.

Por ejemplo, siguiendo el ejemplo que he utilizado en anteriores [artículos sobre GraphQL][blogbitix-serie-graphql] de una librería en la que hay un tipo para representar un libro con una propiedad con sus comentarios, con una consulta que permite recuperar los libros para cada uno de ellos se llama al _resolver_ que recupera los comentarios. En este ejemplo no ya que están los datos en memoria y no se usa una base de datos pero si recuperar los comentarios de cada libro supusiera una consulta SQL en una base de datos relacional (o tráfico de red en una base de datos NoSQL u otro servicio) y la lista de libros devuelta fuese grande cada vez que se realizará esta consulta el número de sentencias SQL a ejecutar sería grande y el tiempo de respuesta pobre y con una carga mayor para el servidor de base de datos.

Para hacer eficientemente este caso en GraphQL existe la funcionalidad de _batching_ con la que un _resolver_ o _data fecher_ puede recuperar los comentarios de todos los libros en una misma petición. Para esto GraphQL proporciona al _resolver_ en vez de cada libro individual la lista de todos los libros para los cuales hay recuperar los comentarios.

Esta es la teoría ya que en el momento de escribir este artículo en la [librería de utilidades que hace más sencillo usar GraphQL en Java][graphql-java-tools] se implementó una [petición de mejora para añadir _batching_](https://github.com/graphql-java/graphql-java-tools/issues/12) a los _resolvers_, en su momento se añadió la funcionalidad pero no de forma correcta como me di cuenta a escribir y probar el ejemplo de esta serie de artículos de modo que les creé esta [petición para corregir el soporte de _batching_](https://github.com/graphql-java/graphql-java-tools/issues/93). Tres días depués de haber creado la petición en GitHub alguien envío un _pull request_ pero no ha sido hasta después de casi seis meses que finalmente se ha aceptado, fusionado y publicado en la versión 5.1.0.

La firma del método del _resolver_ para recuperar los comentarios de un libro sin usar _batching_ y usando _batching_ son los siguientes respectivamente. Estos al igual que cualquier otro método del _resolver_ puede recibir parámetros con los que implementar la funcionalidad que se desee, en este caso para limitar el número de resultados devueltos y para devolverlos a partir de uno  dado.

{{< code file="BookResolver.java" language="Java" options="" >}}

Con la lista completa de libros de la que hay que recuperar los comentarios ya sería posible lanzar una única consulta SQL a una base de datos relacional en vez de una por cada libro. El método que emplea _batching_ ha de estar anotado con la anotación _@Batched_.

La consulta de GraphQL a realizar para recuperar los tres primeros comentarios de cada libro y los resultados que devuelve son los siguientes. La consulta parece un tanto compleja porque la propiedad de los comentarios implementa paginación pero básicamente se recupera de cada libro su título y los comentarios.

{{< code file="curl.sh" language="Bash" options="" >}}
{{< code file="System.out" language="Plaintext" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradew run" note="Requiere Java 9+ o Docker" >}}

{{% /post %}}
