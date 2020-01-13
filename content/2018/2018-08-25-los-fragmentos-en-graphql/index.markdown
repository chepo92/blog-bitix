---
pid: 342
type: "post"
title: "Los fragmentos en GraphQL"
url: "/2018/08/los-fragmentos-en-graphql/"
date: 2018-08-25T19:00:00+02:00
updated: 2019-06-15T01:40:00+02:00
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

Los fragmentos en el contexto de [GraphQL][graphql] pueden ser de dos tipos, definidos previamente o definidos en linea. Los primeros permiten simplificar las consultas definiendo en un bloque una colección de datos a recuperar si tener que indicarlos explícitamente individualmente, lo que resulta útil para no repetir el mimo grupo de datos si se utiliza en varias consultas diferentes. Los fragmentos en línea permiten recuperar unos datos u otros en función del tipo de la instancia de la cual se quieren recuperar.

Teniendo dos consultas que recuperan los datos de una colección de libros sin los fragmentos habría que definir los mismos datos a recuperar dos veces en ambas consultas. En estas consultas de ejemplo se recupera una lista de libros y un libro determinado. Si en ambas se recuperan los datos _id_, _title_ y _date_ hay que indicar los campos a recuperar dos veces.

{{< code file="query-1.graphql" language="graphql" options="" >}}
{{< code file="query-1.json" language="json" options="" >}}

Con un fragmento se definen esos campos comunes a recuperar en las consultas una sola vez. Si posteriormente cambian los datos a recuperar solo es necesario cambiarlo en un único punto. Los fragmentos definidos son una forma de simplificar las consultas y evitar tener que cambiar varias consultas si el grupo de datos cambia en todas ellas. Los datos obtenidos son los mismos que en el caso sin utilizar el fragmento.

{{< code file="query-1-fragment.graphql" language="graphql" options="" >}}

{{< image
    gallery="true"
    image1="image:query-1.png" optionsthumb1="300x200" title1="Consultas sin utilizar un fragmento"
    image2="image:query-1-fragment.png" optionsthumb2="300x200" title2="Consultas con un fragmento"
    caption="Consultas sin y con un fragmento" >}}

Los fragmentos en línea o _inline_ permiten por otra parte una funcionalidad adicional y es recuperar diferentes datos según el tipo de la entidad. En el ejemplo he añadido una nueva entidad _Magazine_ además de la ya existente _Book_, en el código Java ambas heredan de _Publication_. Las entidades _Book_ y _Magazine_ no comparten las mismas propiedades dado que son entidades diferentes por lo que en la consulta es necesario tener un mecanismo con el cual poder recuperar los datos en función del tipo.

Estas son las definiciones de las entidades resumidas y la consulta _publications_ que devuelve las publicaciones que incluye libros y revistas. Con la definición de una _union_ se establece que una _Publication_ puede ser un _Book_ o _Magazine_.

{{< code file="library.graphqls" language="graphqls" options="" >}}
{{< code file="fragment-inline.graphql" language="graphql" options="" >}}
{{< code file="fragment-inline.json" language="json" options="" >}}

Para las publicaciones del tipo _Book_ en este ejemplo se recuperan los campos _id_, _title_ y _date_. Para las publicaciones de tipo _Magazine_ se recuperan los campos _id_, _name_ y _pages_. Las publicaciones _Muy interesante_ y _PC Actual_ son dos _Magazine_ y el resto de publicaciones son del tipo _Book_.

{{< image
    gallery="true"
    image1="image:fragment-inline.png" optionsthumb1="300x200" title1="Consulta con fragmentos en linea"
    caption="Consulta con fragmentos en linea" >}}

Si es necesario hay que añadir la clases Java que representan a los tipos de GraphQL a la lista de clases del diccionario en la definición del esquema.

{{< code file="Main.java" language="java" options="" >}}

Para cada entidad hay una clase Java que la representa y un repositorio que contiene la consulta para obtener las publicaciones que no hace más que añadir en una lista el conjunto de libros y revistas en la librería.

{{< code file="Book.java" language="java" options="" >}}
{{< code file="Magazine.java" language="java" options="" >}}
{{< code file="Publication.java" language="java" options="" >}}
{{< code file="LibraryRepository.java" language="java" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" note="Requiere Java 9+ o Docker" >}}

{{< reference >}}
* [Fragments](https://graphql.org/learn/queries/#fragments)
* [Inline Fragments](https://graphql.org/learn/queries/#inline-fragments)
* [More GraphQL Concepts](https://www.howtographql.com/advanced/2-more-graphql-concepts/)
{{< /reference >}}

{{% /post %}}
