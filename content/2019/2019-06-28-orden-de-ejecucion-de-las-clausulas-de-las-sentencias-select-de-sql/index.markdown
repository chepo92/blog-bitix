---
pid: 416
type: "post"
title: "Orden de ejecución de las cláusulas de las sentencias SELECT de SQL"
url: "/2019/06/orden-de-ejecucion-de-las-clausulas-de-las-sentencias-select-de-sql/"
date: 2019-06-28T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:postgresql.svg"
tags: ["planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="postgresql.svg" image2="mysql.svg" >}}

El lenguaje SQL es un potente lenguaje declarativo usado en las bases de datos relacionales como [MySQL][mysql] o [PostgreSQL][postgresql]. En el lenguaje SQL se declara que datos se quieren recuperar, qué condiciones han de cumplir cumplir y qué funciones se aplican a los datos pero no se define como han de recuperarse los datos, es la base de datos la que decide como guardarlos e interpretando la sentencia SQL la que decide cómo recuperarlos.

El lenguaje SQL se compone de diferentes tipos de sentencias según el tipo de operación, lectura de datos con _SELECT_, inserción de datos con _INSERT_, actualización con _UPDATE_ y eliminación con _DELETE_.

Las sentencias _SELECT_ tienen la siguiente [sintaxis en PostgreSQL](https://www.postgresql.org/docs/11/sql-select.html).

{{< code file="postgres-sql-syntax.sql" language="SQL" options="" >}}

La sentencia _SELECT_ se compone de varias cláusulas que se interpretan siguiendo una secuencia de operaciones tal que:

1. _FROM_: obtener los registros de todas las tablas fuentes de dato. Si hay _subqueries_ en la cláusula _FROM_ son evaluadas primero.
2. _JOIN_: Realizar todas las posibles combinaciones descartando aquellas combinaciones que no cumplen las condiciones _JOIN_ o estableciendo _NULL_ en caso de _outer joins_.
3. _WHERE_: Filtrar las combinaciones que cumplen las condiciones de la cláusula _WHERE_.
4. _GROUP BY_: Construir los grupos basados en las expresiones de la lista de la cláusulas _GROUP BY_.
5. _HAVING_: Filtrar los grupos que cumplen las condiciones de la cláusula _HAVING_.
6. _SELECT_: Evaluar las expresiones de la lista _SELECT_ para seleccionar los datos.
7. _DISTINCT_: Eliminar filas duplicadas si se especifica _DISTINCT_.
8. _UNION, EXCEPT, INTERSECT_: Aplicar las operaciones _UNION_, _EXCEPT_ e _INTERSECT_.
9. _ORDER BY_: Ordenar las filas de acuerdo a la cláusula _ORDER BY_.
10. _OFFSET, LIMIT_: Descartar los registros de acuerdo _OFFSET_ y _LIMIT_.

Este es el orden general pero el algoritmo del planificador puede optimizar estos pasos realizándose en diferente orden o incluso simultáneamente. Por ejemplo, si se especifica un límite de 1 no es necesario obtener todas las filas de las tablas fuente sino solo una que cumpla la condición _WHERE_.

{{< reference >}}
* [Logical Processing Order of the SELECT statement](https://msdn.microsoft.com/en-us/library/ms189499.aspx)
* [Libro Learning PostgreSQL 11](https://amzn.to/2Jai732)
* [Sintaxis de sentencia SELECT en MySQL](https://dev.mysql.com/doc/refman/8.0/en/select.html)
{{< /reference >}}

{{% /post %}}
