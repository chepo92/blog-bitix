---
pid: 284
type: "post"
title: "Definir nuevos tipos de datos escalares en GraphQL"
url: "/2017/12/definir-nuevos-tipos-de-datos-escalares-en-graphql/"
date: 2017-12-01T10:00:00+01:00
updated: 2019-06-15T01:20:00+02:00
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

[GraphQL es una alternativa a una interfaz REST][blogbitix-275] con las ventajas de permitir al consumidor obtener únicamente los datos que requiere y realizar varias consultas en una misma petición.

[GraphQL][graphql] por defecto soporta un conjunto de tipos escalares en los datos entre los que están varios numéricos, cadenas, booleanos, enumerados además de los tipos o estructuras de datos definidos en la interfaz del servicio. Sin embargo, si es necesario es posible definir nuevos tipos de datos escalares como podría ser el caso de un tipo de dato para representar una fecha fecha y otro de importe monetario.

El objeto en Java que representa una fecha con Java 8 sería [LocalDate](https://docs.oracle.com/javase/9/docs/api/java/time/LocalDate.html) y la clase para el importe monetario podría ser un [BigDecimal](https://docs.oracle.com/javase/9/docs/api/java/math/BigDecimal.html) o alguna de [la librería JavaMoney][blogbitix-90].

Para que GraphQL soporte un nuevo tipo de dato escalar es necesario implementar una clase que realice la conversión. Esta clase se encarga de realizar la conversión entre el escalar añadido a una representación a devolver en las respuestas de las peticiones y la conversión entre la representación en consultas al tipo de dato hay que proporcionar al servicio. La clase debe implementar la interfaz [Coercing](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/schema/Coercing.java) y construyendo un objeto [GraphQLScalarType](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/schema/GraphQLScalarType.java) proporcionárselo a GraphQL en la definición del servicio.

{{< code file="LocalDateCoercing.java" language="java" options="" >}}

Al definir el esquema se proporciona con el método _scalars_ una lista con los tipos de datos escalares adicionales, en este caso una instancia de _GraphQLScalarType_ con una instancia de _LocalDateCoercing_. Además en el descriptor del esquema hay que declarar el nuevo escalar con la palabra clave _scalar_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="library.graphqls" language="graphqls" options="" >}}
{{< code file="LibraryRepository.java" language="java" options="" >}}

Añadiendo al tipo _Book_ una fecha de publicación usando este nuevo tipo escalar al realizar una consulta y devolver el dato se realiza la conversión.

{{< code file="curl.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{% /post %}}
