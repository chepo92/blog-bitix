---
pid: 282
type: "post"
title: "Consultas con parámetros para filtrar datos en GraphQL"
url: "/2017/11/consultas-con-parametros-para-filtrar-datos-en-graphql/"
date: 2017-11-25T10:00:00+01:00
updated: 2019-06-15T01:10:00+02:00
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

No será extraño que en una API para obtener datos esté la necesidad de realizar algún tipo de filtrado para recuperar únicamente la colección de datos deseados de todos los existentes en un repositorio. A las consultas de [GraphQL][graphql] se les pueden pasar argumentos que son recibidos por los métodos que actúan como punto de entrada de las consultas. Con los argumentos es posible implementar cualquier funcionalidad que se necesite, entre ellas el filtrado. Los argumentos pueden ser datos escalares o más complejos que se definen con la palabra reservada _input_ en el esquema.

Usando el mismo ejemplo que he utilizado en artículos anteriores ahora en este caso implemento la funcionalidad de poder filtrar los libros de una biblioteca utilizando una expresión regular que el título del libro debe cumplir para obtenerse como resultado. El esquema del _enpoint_ de GraphQL queda de la siguiente forma para implementar el filtrado, usando el tipo definido con _input_ es posible pasar como argumentos datos complejos o agrupaciones de datos escalares.

{{< code file="library.graphqls" language="graphqls" options="" >}}

La implementación del tipo _BookFilter_ en la implementación de Java de GraphQL es una _Java Bean_ con una propiedad por cada argumento y sus correspondientes métodos _set_ y _get_.

{{< code file="BookFilter.java" language="java" options="" >}}

La clase _Query_ es el punto de entrada a las consultas raíz y posee un método con el mimo nombre que la consulta solicitada en GraphQL y que en este caso es _findBooks_ que recibe como argumento una instancia del objeto _BookFilter_ que a su vez se lo proporciona al servicio de repositorio independiente de GraphQL para que haga la búsqueda adecuada según corresponda en el sistema de persistencia empleado. En el caso que los datos se guarden en una base de datos relacional posiblemente el filtrado se realiza ejecutando una sentencia SQL. En el caso del ejemplo como los datos están en una colección de una estructura de datos Java el filtrado se realiza usando los _streams_, expresiones regulares y código Java.

{{< code file="Query.java" language="java" options="" >}}
{{< code file="LibraryRepository.java" language="java" options="" >}}

Siguiendo la idea del ejemplo es posible realizar el filtrado de los datos con los argumentos que sean necesarios y la lógica adecuada según el repositorio donde estén almacenados los datos ya sea en un sistema con una base de datos relacional como [PostgreSQL][postgresql] o NoSQL como [MongoDB][mongodb]. Se podrían añadir más datos por ejemplo para filtrar por otros criterios como el número de páginas, autor o incluir otros parámetros para realizar otras funciones como especificar criterios de ordenación.

Esta petición busca los libros que su título comience por las letras _O_ o _R_ obteniendo dos coincidencias como resultado. En este caso entre los datos solo se devuelve el título del libro pero perfectamente podrían haber sido cualesquiera otros de entre los que posee el tipo _Book_.

{{< code file="curl.sh" language="bash" options="" >}}

Pero... ¿que ocurre si aún con el filtrado o en una consulta el número de coincidencias son unos cuantos miles? Seguramente sean demasiadas coincidencias para devolver en una única petición y por ello es habitual [realizar paginación en GraphQL][blogbitix-283]. Eso será tema para otro de los siguientes artículos de esta serie sobre GraphQL.

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{% /post %}}
