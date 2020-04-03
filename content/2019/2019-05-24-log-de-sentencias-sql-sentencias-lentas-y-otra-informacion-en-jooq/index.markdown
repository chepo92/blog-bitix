---
pid: 407
type: "post"
title: "Log de sentencias SQL, sentencias lentas y otra información en jOOQ"
url: "/2019/05/log-de-sentencias-sql-sentencias-lentas-y-otra-informacion-en-jooq/"
aliases: ["/2019/05/log-de-sentencias-sentencias-lentas-y-otra-informacion-en-jooq/"]
date: 2019-05-24T18:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:jooq.png"
tags: ["java", "planeta-codigo", "programacion"]
series: ["jooq"]
summary: "Algunas de las causas del bajo rendimiento de una aplicación que utiliza una base de datos son el número de sentencias que se realizan junto con las sentencias lentas por su coste de ejecución. Cada ejecución de una sentencia significa una comunicación por la red y ejecutar muchas de ellas significa un considerable y perceptible tiempo para el usuario. Por ello es conveniente saber que sentencias se ejecutan, si hay algún problema de 1+N o sentencias innecesarias que se repiten. Un _log_ de las sentencias que se ejecutan es muy útil para detectar ineficiencias en la aplicación y corregirlas."
---

{{% post %}}

{{< logotype image1="jooq.png" title1="jOOQ" width1="200" image2="java.svg" >}}

La librería [jOOQ][jooq] devuelve al lenguaje SQL de consultas para bases de datos relacionales al primer plano en una aplicación Java. En vez de crear una capa de abstracción como realiza la popular librería [Hibernate][hibernate] del modelo relacional al modelo orientado a objetos de Java permite construir con un DSL mediante su API fluída avanzadas sentencias SQL que soportan las versiones recientes de [PostgreSQL][postgresql] y [MySQL][mysql].

* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]

En Hibernate la configuración de _statistics_, el _logger_ _org.hibernate.SQL_ y con el parámetro _show\_sql_ permiten visualizar que sentencias SQL se están lanzando, útil para conocer si algún [problema de 1+N al navegar relaciones][blogbitix-26] que ocasionalmente se producen si no son tenidas en cuenta. Además de que sentencias se están lanzando es también interesante conocer que tiempo de ejecución está tomando cada sentencia para conseguir que el rendimiento de la aplicación no sea lento, para detectar sentencias lentas.

Usando [Spring Boot][spring-boot] y la dependencia de jOOQ hay que proporcionar una instancia que implemente la interfaz [ExecuteListener](https://www.jooq.org/javadoc/latest/org/jooq/ExecuteListener.html) o crear una instancia de [DefaultExecuteListener](https://www.jooq.org/javadoc/latest/org/jooq/impl/DefaultExecuteListener.html). Esta clase contiene numerosos métodos que permiten conocer y realizar acciones, en este caso emitir trazas. Dos de los métodos son [executeStart()](https://www.jooq.org/javadoc/latest/org/jooq/impl/DefaultExecuteListener.html#executeStart-org.jooq.ExecuteContext-) y [executeEnd()](https://www.jooq.org/javadoc/latest/org/jooq/impl/DefaultExecuteListener.html#executeEnd-org.jooq.ExecuteContext-) invocados por jOOQ antes y después de cada sentencia que lanza. Usando [System.nanoTime()](javadoc11:java.base/java/lang/System.html#nanoTime()) se mide el tiempo de ejecución.

{{< code file="AppConfiguration.java" language="java" options="" >}}
{{< code file="JooqExecuteListener.java" language="java" options="" >}}

En las siguientes trazas de ejecución de sentencias se observa una inserción de un registro (1), una posterior muestra del listado para lo que se ralizan dos sentencias una que cuenta el número de elementos en la tabla con un _select count(*)_ que junto con el número de elementos por página permite conocer cuantas páginas hay y un _select_ con un _limit ?_ para recupear los datos de la primera página (2). Con el suficiente número de elementos en la tabla se hace una consulta con un _limit ?_ y un _offset ?_ para los elementos de una página posterior a la primera (3). Al eliminar un elemento de la tabla se ejecuta una sentencia _delete_ con el identificativo de la fila a eliminar en la clausula _where_ (4), finalmente si se utiliza el botón _Eliminar todos_ se elimina todas las filas con otra sentencia _delete_ pero sin especificar la clausula _where_ (5). En cada sentencia se muestra el tiempo que ha tardado.

Estas sentencias se ejecutan en unos pocos milisegundos, en una aplicación con tablas de algún millon de registros, varios _joins_, condiciones _where_ complejas, ordenación y paginación las sentencias SQL pueden tardar varias segundos y decenas de segundos, conocer sus tiempos de ejecución es importante.

{{< code file="System.out" language="plaintext" options="" >}}
{{< image
    gallery="true"
    image1="image:pagina-listado.png" optionsthumb1="650x450" title1="Listado de elementos"
    caption="Listado de elementos" >}}

La clase [ExecuteContext](https://www.jooq.org/javadoc/latest/org/jooq/ExecuteContext.html) proporciona numerosa información sobre la ejecución de la sentencia como número de filas afectadas, si se ha producido una excepción, el tipo de sentencia (_READ_, _WRITE_, _DDL_, _BATCH_, _ROUTINE_ u _OTHER_), sentencias _batch_ u obtener los parámetros a través del objeto [Query](https://www.jooq.org/javadoc/latest/org/jooq/Query.html).

Simplemente mostrando las trazas de sentencias me ha permitido detectar que en el ejemplo se estaba realizando una pequeña ineficiencia. La sentencia _select count(*)_ se lanzaba dos veces en la página de listado, una al querer saber si hay alguna fila y otra usada por el [componente Grid](tapestry:org/apache/tapestry5/corelib/components/Grid.html) de [Tapestry][tapestry]. Para resolverlo se cachea el resultado en la clase anónima _JooqGridDataSource_ con el siguiente código.

{{< code file="ProductoAdmin.java" language="java" options="" >}}

Las bases de datos MySQL y PostgreSQL también ofrecen la posibilidad de [emitir en las sentencias en un _log_][blogbitix-379] incluidas las sentencias lentas. Otra posibilidad es [resaltar la sintaxis de las sentencias en la salida a la terminal][blogbitix-359] para una mejor lectura dando color a las palabras claves.

{{% sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" %}}

{{% /post %}}
