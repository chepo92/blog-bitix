---
pid: 409
type: "post"
title: "Implementar la paginación eficientemente en consultas SQL con seek"
url: "/2019/05/implementar-la-paginacion-eficientemente-en-consultas-sql-con-seek/"
date: 2019-05-31T18:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:jooq.png"
tags: ["java", "planeta-codigo", "programacion"]
series: ["jooq"]
summary: Las aplicaciones que muestran listados probablemente necesiten mostrarlos paginados. Sin embargo, implementar la paginación correctamente para que sea eficiente no pasa por emplear las clausulas _limit_ ni _offset_ que habitualmente se utilizan sino con _seek_. Además de que _limit_ y _offset_ da lugar a resultados no deseados si entre obtención de página y página se insertan filas en páginas anteriores.
---

{{% post %}}

{{< logotype image1="jooq.png" title1="jOOQ" width1="200" image2="java.svg" >}}

La paginación habitualmente se implementa con las palabras reservadas _limit_ y _offset_ del lenguaje SQL pero esto es ineficiente ya que para llegar los resultados de las últimas páginas la base de datos ha de recuperar antes todos los resultados anteriores. Cuando hay varios cientos de miles o millones de filas en una tabla esto es ineficiente y hace que las consultas sean lentas y añadan una importante carga al servidor de base de datos que al final afecta al rendimiento de la aplicación o su capacidad para atender a gran número de peticiones. 

Además del rendimiento, otro problema de la paginación con _limit_ y _offset_ es que si se insertan filas en una página anterior mientras se están recorriendo los resultados, uno o varios resultados al avanzar por las páginas en la típica tabla de resultados en una aplicación web podría aparecer dos veces, en un proceso automatizado sería aún peor ya que un resultado podría procesarse dos veces.

La paginación con _limit_ y _offset_ permite ir a una página directamente en una búsqueda pero en los casos que hay miles de resultados realmente a un usuario no le interesa ir a una determinada página cuando hay cientos de páginas, en un proceso automatizado ir a una página en concreto tampoco suele ser un requerimiento.

[jOOQ][jooq] con la cláusula [seek](https://www.jooq.org/javadoc/latest/org/jooq/SelectSeekStep1.html) permite hacer la paginación eficiente de una forma cómoda. La técnica se basa en ordenar los resultados por unas determinadas columnas y filtrar por condición _where_ sobre las mismas columnas los resultados anteriores, los valores por los que se filtra en la condición son los obtenidos de la última página.

Haciendo _seek_ la paginación es más eficiente ya que la base de datos no necesita recuperar los datos de las páginas anteriores ya que los descarta utilizando la cláusula _where_ que al final es en lo que se traduce la clausula _seek_. Y se elimina el problema de que se inserten datos en páginas anteriores y alguno se pudiese aparecer dos veces en los resultados ya que manteniendo la ordenación de la conlsulta si se insertan filas en páginas anteriores no afectarán a las páginas siguientes.

{{< code file="Seek.java" language="java" options="" >}}

La SQL generada por jOOQ es la siguiente donde la clausula _seek_ se añade como una condición en la cláusula _where_. El campo de la clausula _seek_ coincide con el campo del criterio de ordenación, el operador mayor que en la condición coincide también con el orden ascendente del _order by_.

{{< code file="Seek.sql" language="Sql" options="" >}}

Para que el _seek_ sea correcto los valores de las filas para los campos que forman parte del _seek_ han de ser únicos por eso entre los campos de los ejemplos se incluye el identificativo de la fila, que siempre se incluye como último campo si hubiese más criterios de ordenación y valores para el _seek_.

Si además se tiene un índice para los campos que forman parte del _seek_ el rendimiento será muy alto y la diferencia entre la primera y la última página mínimo, además se puede considerar independiente del número de filas de la tabla. Son varias las ventajas perdiendo solo la capacidad de navegar a cierta página pero en la mayoría de los casos esto es asumible.

En los siguientes interesantes artículos se comenta detalladamente como implementar la paginación eficientemente y se dan más detalles.

* [Pagination Done the PostgreSQL Way](https://wiki.postgresql.org/images/3/35/Pagination_Done_the_PostgreSQL_Way.pdf)
* [Why Most Programmers Get Pagination Wrong](https://blog.jooq.org/2016/08/10/why-most-programmers-get-pagination-wrong/)
* [Pagination with PostgreSQL 9.3: counting number of pages](https://dba.stackexchange.com/questions/73175/pagination-with-postgresql-9-3-counting-number-of-pages)

{{% /post %}}
