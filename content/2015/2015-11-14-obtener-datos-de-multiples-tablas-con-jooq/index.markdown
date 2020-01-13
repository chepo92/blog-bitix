---
pid: 109
type: "post"
title: "Obtener datos de múltiples tablas con jOOQ"
url: "/2015/11/obtener-datos-de-multiples-tablas-con-jooq/"
date: 2015-11-14T19:00:00+01:00
updated: 2015-11-17T19:20:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["jooq"]
summary: "jOOQ no proporciona la misma transparencia de acceso a una base de datos relacional que un ORM. Para validar los datos podemos usar Spring Validation y para obtener datos de múltiples tablas lo que comento en este artículo. Usando jOOQ podemos exprimir todo el potencial del lenguaje SQL, comprobación de tipos por el compilador de argumentos y resultados, usar la base de datos como única fuente de la verdad, diferentes formas de acceso a la base de datos usando el patrón Active Record, directamente SQL, ..."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Una de las facilidades que proporciona la librería de persistencia [Hibernate] usada ampliamente en aplicaciones Java como buen <abbr title="Object/Relational Mapping">ORM</abbr> es la navegación de las relaciones a través de los métodos del modelo de objetos de forma transparente a las consultas SQL que se necesiten lanzar a la base de datos para ir obteniendo los resultados. Sin embargo, pensar únicamente en este modelo orientado a objetos o abusar de él sin tener en cuenta el número de consultas SQL que estamos realizando al modelo relacional provocará que la aplicación sea lenta, poco eficiente y sobrecargue el servidor de base de datos. Como ejemplo usando un ORM es habitual provocar un [problema de N+1 o 1+N que deberemos detectar][blogbitix-26] y corregir.

Por el contrario [jOOQ se postula como alternativa a Hibernate][blogbitix-82] para proporcionar persistencia en base de datos relacionales. Se basa en proporcionar un acceso usando un DSL más cercano al lenguaje SQL de la base de datos en vez de proporcionar una capa de abstracción para el modelo de objetos, la forma de acceder a la base de datos es muy flexible pudiéndose emplear para generar consultas SQL en forma de [String](javadoc8:java/lang/String.html) que lanzaremos con <abbr title="Java Database Connectivity">JDBC</abbr> o con la clase [JdbcTemplate](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/jdbc/core/JdbcTemplate.html) de [Spring][spring]. Las SQL son construidas con una <abbr title="Application Programming Interface">API</abbr> en forma de <abbr title="Domain-specific language">DSL</abbr> o usando el patrón ActiveRecord con la posibilidad de que el compilador realice la validación de tipos tanto para los parámetros como para los resultados.

{{< code file="SnippetQueries.java" language="java" options="" >}}

Sin embargo, aunque jOOQ permite también navegar las relaciones entre las entidades implementadas con el patrón ActiveRecord puede sucedernos que se nos presente el mismo problema 1+N de Hibernate si por ejemplo obtenemos una lista departamentos con 1 SQL y posteriormente 1 consulta más para obtener los empleados según se itera cada departamento en un bucle, en total 1+N consultas para los departamentos y sus empleados. Como sería el siguiente caso.

{{< code file="SnippetRelations.java" language="java" options="" >}}

Si sabemos que vamos a necesitar una entidad y las relacionadas, como en un departamento y sus empleados, es mejor obtener todos los datos en una única consulta. Una de las formas en que jOOQ devuelve resultados es a través de objetos _Record_ que representa a los datos de resultado de la SQL, por otro lado jOOQ genera un objeto _Record_ por cada tabla de la base de datos. Si en una consulta necesitamos únicamente los datos de una tabla podemos obtener los datos en el ActiveRecord que jOOQ genera para esa tabla. Si queremos obtener datos de múltiples tablas deberemos emplear otra forma, por ejemplo, podemos recoger los resultados en un objeto de tipo _Record_ genérico y posteriormente extraer los datos a los diferentes _Record_ concretos de la aplicación.

{{< code file="SnippetMultipletables.java" language="java" options="" >}}

El objeto _RecordContainer_ es el siguiente, con una propiedad por cada posible _Record_ que pudiese recuperar. Solo necesitaremos crear uno que incluya una propiedad con todos los posibles _Record_ que necesitemos.

{{< code file="RecordContainer.java" language="java" options="" >}}

Las clases completas _Main.java_ y _AppServiceImpl.java_ son las siguientes.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="DefaultAppService.java" language="java" options="" >}}

La salida en la terminal de esta aplicación al iniciarse es la siguiente:

{{< code file="System.out" language="plaintext" options="" >}}

jOOQ presenta varias cosas interesantes sobre Hibernate, ya es en una alternativa con un enfoque diferente, con ideas interesantes, algunas ventajas y el tiempo dirá si se convierte en el nuevo estándar para la persistencia en las aplicaciones Java. Otra de las cosas comunes que necesitaremos en una aplicación es validar los objetos _Record_, una posibilidad es usando Spring Validation.

{{< sourcecode git="blog-ejemplos/tree/master/SpringBoot" command="./gradlew updateDatabase, ./gradlew generateModels, ./gradlew run" >}}

{{% /post %}}
