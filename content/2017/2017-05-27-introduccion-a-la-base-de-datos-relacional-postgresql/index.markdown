---
pid: 236
type: "post"
title: "Introducción a la base de datos relacional PostgreSQL"
url: "/2017/05/introduccion-a-la-base-de-datos-relacional-postgresql/"
date: 2017-05-27T12:00:00+02:00
updated: 2017-05-28T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:postgresql.svg"
tags: ["gnu-linux", "planeta-codigo", "programacion"]
summary: "De todas las funcionalidades que tiene SQL muchos desarrolladores solo usamos un pequeño conjunto de las posibilidades del lenguaje. Algunas bases de datos no implementan muchas posibilidades del lenguaje SQL y no son usables en esos sistemas, PostgreSQL es una de las bases de datos relacionales que mejor soporta el estándar ANSI-SQL. Conociendo sus posibilidades podremos implementar funcionalidades de forma más sencilla o con mejor rendimiento."
---

{{% post %}}

{{< logotype image1="postgresql.svg" >}}

Aún con el reciente auge de las bases de datos NoSQL las bases de datos relacionales siguen siendo la opción usada mayoritariamente para persistir los datos de una aplicación. El potente [lenguaje SQL][sql] permite obtener, modificar, insertar y eliminar datos de forma declarativa. Una característica deseada de las bases de datos relacionales es la de mantener con transacciones la integridad referencial y consistencia de los datos en todo momento que las bases de datos NoSQL no ofrecen aunque estas últimas a cambio ofrecen mejores opciones para escalar. Por otro lado los datos ya sean en una base de datos relacional o NoSQL seguirán un esquema aunque en este último caso no se exija, las bases de datos relacionales al exigir que los datos sigan un esquema evitará inconsistencias y los tipos de los datos serán los definidos en la tabla de datos en las que se guarden.

De las bases de datos relacionales más utilizadas que tienen una licencia de software libre están [MySQL][mysql], [MariaDB][mariadb] y [PostgreSQL][postgresql], con licencia privativa y comerciales están [Microsoft SQL Server][microsoft-sqlserver], [Oracle][oracle-database] y [DB2][db2] siendo su coste significativo en algunos casos solo alcanzable por grandes organizaciones. PostgreSQL con su licencia de software libre es una de las bases de datos más avanzadas soportando muchas de las opciones definidas en el estándar del lenguaje SQL.

Muchos desarrolladores conocemos las opciones básicas del lenguaje SQL, las sentencias _insert_, _update_, _delete_ y _select_, sin embargo las últimas versiones del lenguaje SQL añade muchas posibilidades que quizá desconozcamos. PostgreSQL por ejemplo soporta inserciones de múltiples filas en una misma sentencia, actualización o inserción con la sentencia _upsert_, _window functions_, _common table expressions_ o consultas recursivas. PostgreSQL además tiene un sistema de tipos avanzado pudiendo definir tipos de datos personalizados y funciones sobre esos tipos asi como herencia que son motivos por los cuales se autodenomina una base de datos _object-relational_.

Veamos algunos ejemplos de estas características del lenguaje SQL y que PostgreSQL soporta siendo una de las bases de datos relacionales más _ANSI-SQL compliant_. Para los casos demostrativos de las sentencias SQL usaré una base de datos de ejemplo con unas pocas tablas y datos sobre ciudades, países, población y lenguajes obtenida de [PgFoundry Sample Databases](http://pgfoundry.org/projects/dbsamples/), hay varias en concreto usaré la base de datos _world_. En la página de [bases de datos ejemplo para PostgreSQL](https://wiki.postgresql.org/wiki/Sample_Databases) hay otras.

Para una fácil instalación de una instancia de la base de datos PostgreSQL usaré [Docker][docker] con la que una vez terminados los ejemplos se puede eliminar sin dejar ningún rastro. Si aún no has usado Docker puedes leer la [serie de artículos sobre Docker][blogbitix-serie-docker] que he escrito.

### Instalación PostgreSQL con Docker

Una vez instalado Docker e iniciado su servicio y con el comando `docker-compose` y el archivo _docker-compose.yml_ que contiene la definición del contenedor lo iniciamos con el comando `docker-compose up`. El comando `docker ps` lista los contenedores en ejecución y con el comando `docker exec` iniciamos un proceso bash en el contenedor indicado con su identificativo.

{{< code file="docker-compose.yml" language="YAML" options="" >}}
{{< code file="docker-compose.sh" language="bash" options="" >}}

### Comandos básicos del _shell_ psql

El _shell_ de psql usa varios comandos precedidos por una contrabarra para interpretar algunos comandos muy útiles como listar las bases de datos, cambiar de base de datos de trabajo, listar las tablas de una base de datos, mostrar la definición de una tabla para saber sus campos y tipos o salir del _shell_. Los siguientes son solo unos pocos de los disponibles.

* _\\l_: lista las bases de datos de la instancia de PostgreSQL.
* _\\connect [database]_: cambia de base de datos actual de trabajo.
* _\\dt_: lista las tablas de la base de datos actual de trabajo.
* _\\d+ [table]_: muestra la definición de una tabla de la base de datos actual de trabajo.
* _\\q_: sale del intérprete de comandos del _shell_ de PostgreSQL.

* [psql _shell_](https://www.postgresql.org/docs/current/static/app-psql.html)

### Importación base de datos de ejemplo

Antes de lanzar sentencias SQL hay que crear una base de datos con varias tablas y datos, en este caso usando una base de datos de ejemplo que se descarga con el comando `wget`, se descomprime, se crea un nuevo esquema y se importan las tablas y datos, finalmente se listas las definiciones de las tablas.

{{< code file="database-world.sh" language="bash" options="" >}}

Para probar que la base de datos se ha importado correctamente la siguiente sentencia SQL lista el número de ciudades por país ordenados alfabéticamente o por número de ciudades descendentemente.

{{< code file="sample-world.sql" language="SQL" options="" >}}

Para algunas sentencias usaré una base de datos un poco más sencilla que con una tabla para almacenar empresas.

{{< code file="database-companies.sh" language="bash" options="" >}}

### Inserción múltiple

Si insertamos muchos datos en una misma tabla podemos insertarlos en una única sentencia en vez de múltiples para un mejor rendimiento, evitando enviar al servidor mútiples sentencias individuales.

{{< code file="insert-multiple.sql" language="SQL" options="" >}}

* [Inserting Data](https://www.postgresql.org/docs/current/static/dml-insert.html)

### UPSERT

En algún caso quizá tengamos la necesidad de hacer un _insert_ y si el registro ya existe hacer un _update_. Usando la expresión _ON CONFLICT UPDATE_ conocida como _UPSERT_ podemos hacer esta operación que nos evitará hacerlo de forma programática en la aplicación.

En el ejemplo, se hace una _insert_ de la empresa _Canonical_, en el segundo caso como esta empresa ya está creada y hay una restricción en el nombre para que sea único se realiza un _update_ y se actualiza su número de empleados pero no se inserta un nuevo registro duplicado.

{{< code file="upsert.sql" language="SQL" options="" >}}

* [UPSERT](https://wiki.postgresql.org/wiki/UPSERT)

### _Common table expressions_

Las cláusula _WITH_ que define las _common table expressions_ o _CTE_ proporcionan una forma de escribir sentencias auxiliares para su uso en una sentencia más grande. Cada sentencia auxiliar de una cláusula  _WITH_ puede ser un _SELECT_, _INSERT_, _UPDATE_ o _DELETE_ y la sentencia primaria asociada a la cláusula _WITH_ también puede ser un _SELECT_, _INSERT_, _UPDATE_ o _DELETE_.

* [WITH Queries (Common Table Expressions)](https://www.postgresql.org/docs/current/static/queries-with.html)

### _Window functions_

Las _window functions_ realizan cálculos sobre un conjunto de datos que están relacionados de alguna forma con la fila actual. Al contrario que las funciones de agregación el cálculo de las _window functions_ no causan que las filas se agrupen en una única fila manteniéndose como filas separadas.

Usando la base de datos _world_ que contienen ciudades y países con sus poblaciones con la siguiente consulta SQL se obtienen las tres ciudades más pobladas de Alemania, España, Francia e Italia con su porcentaje respecto al total del país. En este caso Berlín es la ciudad más poblada de Alemania con aproximadamente el 12% de la población de ese país. En este caso además de usar _windows functions_ se usa una _Common Table Expressions_ con la cláusula _WITH_.

{{< code file="window-functions.sql" language="SQL" options="" >}}

* [Window Functions](https://www.postgresql.org/docs/current/static/tutorial-window.html)
* [Window Function Calls](https://www.postgresql.org/docs/current/static/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS)
* [Window Functions Functions](https://www.postgresql.org/docs/current/static/functions-window.html)
* [Window Function Processing](https://www.postgresql.org/docs/current/static/queries-table-expressions.html#QUERIES-WINDOW)

### Consultas recursivas

El modificador _RECURSIVE_ cambia la sentencia _WITH_ de una conveniencia sintáctica en una funcionalidad que proporciona algo que no sería posible con el SQL que soporta algunas otras bases de datos. Usando _RECURSIVE_, una cláusula _WITH_ puede referenciar su propia salida. Con esta cláusula las relaciones jerárquicas pueden implementarse sin usar [otras soluciones más complejas](https://stackoverflow.com/questions/4048151/what-are-the-options-for-storing-hierarchical-data-in-a-relational-database).

* [WITH Queries (Common Table Expressions)](https://www.postgresql.org/docs/current/static/queries-with.html)

### Tipo array, enumerado

Con la ayuda de los arrays podemos definir una columna con un conjunto de valores que en casos simples nos evitarán crear una tabla con una relación 1 a N. Además, con las funciones asociadas a los arrays podemos definir una columna con un conjunto de valores cuyos valores no se repitan o si la lista es un conjunto limitados de valores con un enumerado.

* [Arrays](https://www.postgresql.org/docs/current/static/arrays.html)
* [Array Functions and Operators](https://www.postgresql.org/docs/current/static/functions-array.html)
* [Data Types](https://www.postgresql.org/docs/current/static/datatype.html)
* [Enumerated Types](https://www.postgresql.org/docs/current/static/datatype-enum.html)
* [Range Types](https://www.postgresql.org/docs/current/static/rangetypes.html)

### Tipo personalizado

En PostgresSQL se pueden definir nuevos tipos de datos así como nuevas funciones sobre estos tipos de datos. Una vez definidos las columnas de las tablas pueden hacer uso de ellos. Pueden ser:

* Compuestos: están formados por una lista de nombres de atributos y tipos.
* Enumerados: son una lista de una o más etiquetas.
* Rangos
* Base
* Arrays: las columnas de una tabla se pueden definir como un array multidimensional de longitud variable. Se pueden crear arrays de cualquier de los tipos incorporados por defecto y de los tipos base, enumerados y compuestos.

Creando tipos de datos personalizados se evita crear en las tablas varios campos  de tipos básicos individuales pero relacionados y estos tipos se pueden reutilizar en la definición de varias tablas.

{{< code file="custom-types.sql" language="SQL" options="" >}}

* [Monetary Types](https://www.postgresql.org/docs/current/static/datatype-money.html)
* [CREATE TYPE](https://www.postgresql.org/docs/current/static/sql-createtype.html)
* [CREATE FUNCTION](https://www.postgresql.org/docs/current/static/sql-createfunction.html)
* [Query Language (SQL) Functions](https://www.postgresql.org/docs/current/static/xfunc-sql.html)
* [Arrays](https://www.postgresql.org/docs/current/static/arrays.html)

### Índices

Los índices cuando son utilizados son una forma que mejora enormemente el rendimiento de una consulta. Permiten buscar y obtener filas específicas mucho más rápido que sin un usar un índice.

* [Indexes](https://www.postgresql.org/docs/current/static/indexes.html)

### Índice parcial

Un índice parcial es un índice construido sobre un subconjunto de una tabla, el subconjunto es definido por una expresión condicional. El índice contiene entradas solo para las filas de la tabla que satisfacen el predicado.

La motivación de los índices parciales es evitar indexar valores comunes. Dado que una búsqueda para un valor común no usará el índice de todas maneras no hay necesidad de mantener esas filas en el índice. Esto reduce el tamaño del índice que hará más rápidas aquellas consultas que lo usen así como las actualizaciones de la tabla ya que no será necesario actualizarlo en todos los casos.

* [Partial Indexes](https://www.postgresql.org/docs/current/static/indexes-partial.html)

### Índices multicolumna

Un índice puede ser definido sobre más de una columna de una tabla. Son apropiados cuando hay consultas con predicados por las dos columnas del índice.

* [Multicolumn Indexes](https://www.postgresql.org/docs/current/static/indexes-multicolumn.html)

### Restricciones, _Constraints_

Los tipos de datos son una forma de limitar los tipos de datos que pueden ser almacenados en una tabla. Para muchas aplicaciones las restricciones que proporcionan son demasiado simples. Por ejemplo, una columna que contenga el precio de un producto debería aceptar solo valores positivos. Pero no hay un tipo de datos que acepte solo números positivos. Otro problema es que quizá deseemos restringir el dato de una columna respecto a otras columnas o filas. Por ejemplo, en una tabla que contenga información de un producto el número del producto debería ser único.

SQL permite definir restricciones en columnas y tablas proporcionando el control sobre los datos que deseamos. Si se intentan almacenar datos en una columna que viola una restricción se lanza un error.

{{< code file="constraints.sql" language="SQL" options="" >}}

* [Constraints](https://www.postgresql.org/docs/current/static/ddl-constraints.html)

### Tipos de tablas

Si se especifica en la creación de la tabla _TEMPORARY_ o _TEMP_ esta es creada con una tabla temporal que es eliminada al final de la sesión u opcionalmente al finalizar la transacción actual. Si se especifica _UNLOGGED_ es creada como no trazable haciendo que los datos escritos en la tabla no sean escritos en el _write-ahead log_ que lo hace considerablemente más rápido que las tablas ordinarias. Sin embargo, no son seguras ante fallos.

* [CREATE TABLE](https://www.postgresql.org/docs/current/static/sql-createtable.html)

### PL/pgSQL

PostgreSQL al igual que otras bases de datos ofrece un lenguaje procedural que puede ser usado para crear procedimientos de funciones o _triggers_, añadir estructuras de control al lenguaje SQL, realizar cálculos complejos, hereda todos los tipos de usuario, funciones y operadores, puede ser definido como de confianza por el servidor y es fácil de usar. El lenguaje sql es fácil de aprender y es común a las bases de datos relacionales pero cada sentencia SQL debe ser ejecutada individualmente por el servidor. Esto significa que la aplicación cliente debe enviar cada sentencia al servidor, esperar a que sea procesada, recibir y procesar los resultados, realizar algún cálculo y entonces enviar más sentencias al servidor. Todo esto incurre en comunicación entre procesos y de red si el cliente está en una máquina diferente del servidor de base de datos.

Con PL/pgSQL se puede crear un bloque de computación y una serie de sentencias SQL dentro del servidor de base de datos, tiendo el poder de un lenguaje procedural y la facilidad de SQL pero con un considerable ahorro de comunicación entre cliente y servidor. Las ventajas son evitar viajes entre el servidor y el cliente, resultados inmediatos que no son necesarios convertir y transferir entre el cliente y servidor y múltiples pasos de procesado de las sentencias son evitados. Todo esto resulta en algunos casos un incremento de rendimiento considerable comparado con una aplicación que no usa procedimientos almacenados.

* [PL/pgSQL - SQL Procedural Language](https://www.postgresql.org/docs/current/static/plpgsql.html)

### Otras

Otros elementos que soporta la base de datos PostgreSQL en el lenguaje SQL son _Grouping Sets_, _ROLLUP_, _CUBE_, [Set Returning Functions](https://www.postgresql.org/docs/current/static/functions-srf.html), [tablefunc](https://www.postgresql.org/docs/current/static/tablefunc.html), [búsquedas a texto completo](https://www.postgresql.org/docs/current/static/textsearch.html) que para casos sencillos no hace falta recurrir a soluciones más especializadas como [Elasticsearch][elasticsearch], selección y bloqueo de filas con la [clásula _FOR UPDATE_](https://www.postgresql.org/docs/current/static/sql-select.html#SQL-FOR-UPDATE-SHARE), [vistas](https://www.postgresql.org/docs/current/static/sql-createview.html) y [vistas materializadas](https://www.postgresql.org/docs/current/static/sql-creatematerializedview.html) entre seguro otras muchas cosas de las que me olvido o desconozco.

Por todas estas características se considera a PostgreSQL una de las bases de datos relacionales más avanzadas existentes. Hay mucha literatura sobre las bases de datos relacionales desde el lenguage SQL en general, libros específicos sobre PostgreSQL o como evitar errores diseño al estructurar la información en tablas y columnas.

{{< amazon
    linkids="9ba19b63e64c7454bc8051f394643d06,debb8456d091330663a1c10f654fd5b8,2f3d39f7290758074e90a66beda9e253"
    asins="988840668X,1783989181,1934356557" >}}

En caso de optar por una base de datos NoSQL para persistir la información [la base de datos NoSQL MongoDB][blogbitix-237] permite guardar los datos en forma de documentos y conseguir la escalabilidad que las bases de datos relacionales con sus propiedades ACID es difícil.

{{< reference >}}
* [Documentación PostgreSQL](https://www.postgresql.org/docs/current/static/index.html)
* [Introducción a la base de datos NoSQL MongoDB][blogbitix-237]
* [Usar la base de datos NoSQL MongoDB con Java][blogbitix-239]
* [Introducción a la base de datos NoSQL Redis][blogbitix-240]
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
