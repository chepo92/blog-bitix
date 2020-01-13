---
pid: 412
type: "post"
title: "Metadatos e introspección en GraphQL"
url: "/2019/06/metadatos-e-introspeccion-en-graphql/"
date: 2019-06-16T00:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:graphql.svg"
tags: ["java", "planeta-codigo"]
series: ["graphql"]
summary: "Una API REST no ofrece introspección y por tanto hay que recurrir a un sistema de documentación que puede estar desactualizado y hay que mantener para conocer como usar la API y cuales son sus tipos y parámetros. Por el contrario GraphQL incorpora un sistema de introspección que permite conocer sus tipos y campos, a través del editor GrapiQL o si fuese necesario de forma automtizada con código."
---

{{% post %}}

{{< logotype image1="graphql.svg" title1="GraphQL" width1="200" >}}

Una de las cosas que me gustan de GraphQL sobre REST es que la API de un servicio se define en un esquema. Tanto las operaciones de consulta, de modificación con sus nombres de parámetros, tipos y si son requeridos o no. Esta información es básica para hacer un buen uso de esa API y conocer cual es su contrato. Además con [la herramienta GraphiQL][blogbitix-340] se pueden crear y realizar consultas con un pequeño IDE con asistencia de código. GraphQL genera los metadatos e ofrece la instrospección a partir únicamente de la definición del esquema del servicio sin ningún esfuerzo adicional por parte del creador del servicio.

En el ejemplo de esta [serie de artículos sobre GraphQL][blogbitix-serie-graphql] he usado el siguiente esquema que utiliza como modelo de datos el de una librería.

{{< code file="library.graphqls" language="graphqls" options="" >}}

Si no se conoce el esquema qué operaciones, tipos y nombres ofrece la API GraphQL permite introspección y con únicamente el _endpoint_ se puede averiguar esta información.

Por ejemplo, con la siguiente consulta se puede conocer qué tipos contiene el esquema de una API. Los que comienzan con dos barras bajas o _\_\__ son tipos parte del sistema de introspección. Entre los que están el que representa un libro y autor pero también está _Query_ que es un punto de acceso a la API.

{{< code file="types.query" language="graphql" options="" >}}
{{< code file="types.out" language="json" options="" >}}

Conocer el tipo de las consultas de lectura y que consultas se pueden realizar inspeccionando el tipo _Query_.

{{< code file="query-type.query" language="graphql" options="" >}}
{{< code file="query-type-info.query" language="plaintext" options="" >}}

{{< code file="query-type.out" language="json" options="" >}}
{{< code file="query-type-info.out" language="json" options="" >}}

Por la propiedad de GraphQL de que se pueden realizar varias consultas en una única petición se pueden obtener ambos resultados a la vez.

{{< code file="queries.query" language="graphql" options="" >}}
{{< code file="queries.out" language="json" options="" >}}

Se puede obtener más en detalle los campos que contiene un tipo.

{{< code file="types-info.query" language="graphql" options="" >}}
{{< code file="types-info.out" language="json" options="" >}}

Incluso se puede inspeccionar los tipos del sistema de instrospección. Con las descripciones de los campos o parámetros de entrada si los tuviese.

{{< code file="type-type.query" language="graphql" options="" >}}
{{< code file="type-type.out" language="json" options="" >}}

Conocer cuales son los campos de un tipo puede utilizarse para validar una API, comprobando que no se han eliminado campos necesarios. Es útil en el caso de querer automatizar esta validación de una API de GraphQL que se consuma ayudando a detectar de forma temprana problemas de compatibilidad al publicarse una nueva versión que no está bajo propiedad del que la usa.

{{% sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" %}}

{{% /post %}}
