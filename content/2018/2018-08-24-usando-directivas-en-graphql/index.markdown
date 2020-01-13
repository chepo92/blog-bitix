---
pid: 341
type: "post"
title: "Usando directivas en GraphQL"
url: "/2018/08/usando-directivas-en-graphql/"
date: 2018-08-24T08:00:00+02:00
updated: 2019-06-15T01:35:00+02:00
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

En [GraphQL][graphql] construyendo la consulta adecuada se recuperan exclusivamente los datos solicitados.

Por ejemplo, si de un libro solo se requieren las propiedades el _id_, _title_ y _date_ de entre todas las que tienen la consulta sería en este caso la siguiente para una consulta que devuelve los datos de un conjunto de libros.

{{< code file="query-1.graphql" language="graphql" options="" >}}

Si se desea recuperar solo el _id_ y _title_ sin el _date_ la consulta debe ser diferente.

{{< code file="query-2.graphql" language="graphql" options="" >}}
{{< code file="library.graphqls" language="graphqls" options="" >}}

{{< image
    gallery="true"
    image1="image:image-1.png" optionsthumb1="300x200" title1="Consulta id, title y date"
    image2="image:image-2.png" optionsthumb2="300x200" title2="Consulta id y title"
    caption="Consultas diferentes que devuelven diferentes datos" >}}

Esto obliga en principio a tener dos consultas diferentes según los datos recuperar. En principio, ya que las [directivas _skip_ e _include_](https://graphql.org/learn/queries/#directives) definidas en la especificación de GraphQL permiten tener la misma consulta y parametrizar si un determinado dato ha de incluirse o no en el resultado.

Las directivas se definen en el lenguaje de consulta de GraphQL con el caracter _@_ y pueden recibir parámetros. La directiva _skip_ permite omitir un dato según el valor de un booleano, si es _true_ se omite y si es _false_ se incluye, el comportamiento de _include_ es el mismo pero con el valor contrario del booleano, si es _true_ se incluye y si es _false_ se omite.

Esta sería la consulta parametrizada para obtener los datos de los libros omitiendo o incluyendo su fecha en función de una variable utilizando la directiva _include_. Cuando el valor de la variable es _true_ se incluye el dato fecha, cuando el valor de la variable es _false_ no se incluye.

{{< code file="query-3.graphql" language="graphql" options="" >}}
{{< code file="variables-1.graphql" language="graphql" options="" >}}
{{< code file="variables-2.graphql" language="graphql" options="" >}}

Utilizando [el editor GraphiQL][blogbitix-340] para construir y ejecutar consultas de una API de GraphQL se obtienen los resultados.

{{< image
    gallery="true"
    image1="image:image-3.png" optionsthumb1="300x200" title1="Consulta con directiva include"
    image2="image:image-4.png" optionsthumb2="300x200" title2="Consulta con directiva include"
    caption="Misma consulta con directiva include que devuelve diferentes datos" >}}

Con un comando _curl_ se realizan las mismas consultas.

{{< code file="curl-1.sh" language="bash" options="" >}}
{{< code file="data-1.json" language="json" options="" >}}

{{< code file="curl-2.sh" language="bash" options="" >}}
{{< code file="data-2.json" language="json" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{% /post %}}
