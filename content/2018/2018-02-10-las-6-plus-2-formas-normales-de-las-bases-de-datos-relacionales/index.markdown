---
pid: 299
type: "post"
title: "Las 6+2 formas normales de las bases de datos relacionales"
url: "/2018/02/las-6-plus-2-formas-normales-de-las-bases-de-datos-relacionales/"
aliases: ["/2018/02/las-6-plus-2-formas-normales-de-las-bases-de-datos/"]
date: 2018-02-10T13:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:postgres.svg"
tags: ["planeta-codigo", "programacion"]
summary: "En la universidad se explican las formas normales, en mi caso que yo recuerde hasta la tercera forma normal. Conocer la tercera forma normal suele ser suficiente pero en la teoría existe hasta la sexta forma normal. Cumplir las formas normales evita redundancias e inconsistencias en los datos a costa de crear más tablas que en algunos consultas puede hacerlas lentas. El proceso contrario de la normalización es la desnormalización, puede producir inconsistencias pero los datos son más sencillos y en algunos casos más rápido de consultar."
---

{{% post %}}

Las bases de datos relacionales desarrolladas en los años 70 son la forma más utilizada aún en la actualidad para almacenar la información en la mayoría de las aplicaciones informáticas de cualquier ámbito. Los datos se guardan en tablas separadas en campos y con un tipo, los datos almacenados en cada tabla están relacionados entre sí, por ejemplo, podría ser la información de una persona, nombre, apellidos, fecha de nacimiento, ciudad de residencia, teléfono, ... Además las tablas pueden relacionarse con otras tablas. Siguiendo el ejemplo podríamos tener una tabla de películas o libros y relacionarlas con la tabla de personas de forma que conozcamos que películas ha visto o libros ha leído una persona, de cada película podemos guardar su director, de los libros el autor y de cada uno de ellos los actores o personajes.

Al almacenar la información en la base de datos debemos evitar las redundancias e inconsistencias de forma que la información que obtengamos al consultarla esté libre de inconsistencias. Por ejemplo, guardando la ciudad de residencia en la tabla persona deberemos actualizar todos los registros de las personas que residan en ella al cambiar de nombre a una ciudad o acabaremos con que la misma ciudad está referida por varios términos. Para evitar inconsistencias en las bases de datos se definieron las formas normales, hay seis formas normales y dos adicionales aunque normalmente con aplicar hasta la tercera es suficiente ya que por las relaciones de los datos no es necesario aplicar formas normales superiores. Hasta la tercera forma normal se pueden aplicar independientemente del dominio tratado, a partir de la cuarta forma normal las relaciones las cumplen o no en función de las reglas y condiciones que se establezcan para el dominio. Cuanto mayor sea la forma normal de una tabla o una base de datos menos casos existirán de que contengan inconsistencias, una tabla que cumpla una forma normal cumple las formas normales de menor nivel. Las formas normales son las siguientes:

* [Forma normal de base de datos](https://es.wikipedia.org/wiki/Forma_normal_(base_de_datos))
* [Primera forma normal, 1FN](https://es.wikipedia.org/wiki/1NF)
* [Segunda forma normal, 2FN](https://es.wikipedia.org/wiki/2NF)
* [Tercera forma normal, 3FN](https://es.wikipedia.org/wiki/3NF)
* [Forma normal de Boyce-Codd, BCNF](https://es.wikipedia.org/wiki/BCNF)
* [Cuarta forma normal, 4FN](https://es.wikipedia.org/wiki/4NF)
* [Quinta forma normal, 5FN](https://es.wikipedia.org/wiki/5NF)
* [Sexta forna normal, 6FN](https://en.wikipedia.org/wiki/Sixth_normal_form)
* [Forma normal de dominio/clave, DNFN](https://es.wikipedia.org/wiki/DKNF)
* [Desnormalización](https://es.wikipedia.org/wiki/Denormalizaci%C3%B3n_(base_de_datos))

En los enlaces de la wikipedia está incluida una explicación más detallada de cada forma normal, a continuación solo haré un breve resumen. En anexo final del libro [SQL Antipattens](http://amzn.to/2G2oRN1) también hay una explicación muy detallada de las diferentes formas normales, que problemas pueden ocasionar y como corregirlos.

{{< amazon
    linkids="5952266d59f312e39e2a850c1dc3a54a"
    asins="1934356557" >}}

### Primera forma normal, 1FN

No hay grupos repetidos de columnas, ni una columna guarda múltiples valores. Por ejemplo, si de una persona queremos guardar varios teléfonos deberíamos crear una tabla de teléfonos y relacionarla con la tabla de usuarios.

En el caso del ejemplo los grupos repetidos de columnas implica que de una persona solo se pueden guardar hasta tres teléfonos como máximo, han de crearse las columnas por adelantado aunque no se usen y si hay que actualizar un telefono no sabríamos en que campo de la tabla está obligando a realizar una consulta de actualización en los tres campos.

Las columnas con múltiples valores son difíciles de actualizar con sentencias SQL por el formato que emplea la columna para guardar el dato, en este caso utilizando una barra como separador.

{{< code file="1fn.txt" language="plaintext" options="" >}}

### Segunda forma normal, 2FN

Cada columna de una tabla está relacionada con todas las columnas de la clave primaria y no solo por una combinación de parte de la clave primaria. En este caso en que se guarda las las persona que trabajan en una empresa, cumple la 1FN al no tener columnas repetidas ni múltiples valores en una columna pero no cumple la 2FN estando la clave primaria formada por los campos _id\_persona_ e _id\_empresa_ y el campo _direccion\_empresa_ siendo solo dependiente del campo _id\_empresa_.

En este caso el problema además de contener posibles inconsistencias en los valores de las direcciones es que si se quisiera actualizar la dirección de una empresa habría que actualizar todos los registros de los empleados y empresa.

{{< code file="2fn.txt" language="plaintext" options="" >}}

### Tercera forma normal, 3FN

Cada columna de una tabla está relacionada directamente con las columnas de la clave primaria, no de forma transitiva a través de otro campo. En el mismo caso anterior que cumple la 2FN no cumple la tercera si el campo _horas semanales_ depende del puesto.

Podría haber inconsistenias de datos si dos personas tuviesen diferentes horas semanales para el mismo puesto.

{{< code file="3fn.txt" language="plaintext" options="" >}}

### Forma normal de Boyce-Codd, BCNF

Una tabla está en BCNF y está en 3FN y todos los campos tienen como deteminante (dependen) la clave primaria. En un caso en que un trabajador trabaja en varias empresas con un responsable asignado e introduciendo la restricción de que en una empresa solo hay un responsable para todos los trabajadores, el campo _id\_responsable_ tiene una dependencia sobre el campo _id\_empresa_ que no es clave primaria.

{{< code file="bcfn.txt" language="plaintext" options="" >}}
 
### Cuarta forma normal, 4FN

No existen dos o más relaciones independientes en una misma tabla. En una relación que guarde las empresas de un trabajador y las localidades en las que trabaja, si las empresas y las localidades son independientes hay redundancia de datos por guardar para cada empresa cada una de las localidades del trabajador. Aplicando la 4FN en vez de utilizar 6 filas se utilizan 2 y 3 filas en las tablas _Trabajador_ y _Localidad_.

{{< code file="4fn.txt" language="plaintext" options="" >}}

### Quinta forma normal, 5FN

En el mismo caso anterior si se intodujese una realación entre empresa y localidades en las que trabaja y la condición de que es cierto que las localidades de un trabajador están incluídas en el conjunto de las localidades de una empresa si no se aplicase la 5FN y un trabajador empezase a trabajar en una nueva empresa habría que insertar una fila nueva en la tabla _Zona_ por cada localidad del trabajador.

Si el trabajador 1 empezase a trabajar en la empresa 2 sin aplicar la 5FN habría que insertar dos nuevas filas en la trabla _Zona_. Aplicando la 5FN bastaría con insertar una en la tabla _TrabajadorEmpresa_ (id_persona: 1, id_empresa: 2).

{{< code file="5fn.txt" language="plaintext" options="" >}}

### Sexta forma normal, 6FN

* [Sixth normal form](https://en.wikipedia.org/wiki/Sixth_normal_form)

### Forma normal de dominio/clave, DNFN

* [Forma normal de dominio/clave](https://es.wikipedia.org/wiki/Forma_normal_de_dominio/clave)

### Desnormalización

Aplicar las reglas de las formas normales para cumplirlas implica separar los datos que antes estaban en una tabla en varias, con las formas normales evitaremos inconsistencias pero consultar los datos de forma agrupada puede ser más lento al tener la base de datos que unir las tablas. Normalmente, llegar al nivel de 3FN es suficiente si los datos no tienen reglas especiales y si cumple la 3FN es habitual que cumpla la 5FN sin cambios adicionales.

La desnormalización consiste el proceso contrario tratando de balancear la rapidez de consulta con el hecho de obtener datos inconsistentes. Dependiendo de los datos y sus reglas se puede aceptar cierto grado de desnormalización. Algunas bases de datos tienen un concepto similar al que existe en la base de datos [PostgesSQL][postgresql], las [materialized views](https://www.postgresql.org/docs/current/static/rules-materializedviews.html). Las vistas materializadas son vistas de los datos pero cuyos datos son guardados de forma similar a una tabla, esto tiene la ventaja de que consultar la vista basta para consultar los datos que es más rápido que realizar de nuevo la consulta original de la vista. Con las vistas y las vistas materializadas podemos guardar los datos en la forma normal que consideremos y si por rendimiento debemos realizar una desnormalización con las vistas y vistas materializadas podemos hacerlo, en el caso de las vistas materializadas deberemos refrescarlas de forma regular.

La información es una de las cosas más importantes para una organización y por tanto también para las aplicaciones. En el libro [SQL Antipatterns](http://amzn.to/2G2oRN1) se comentan varios situaciones en las bases de datos que conviene conocer para evitarlos, que problemas causan, cuando son aplicables y cuales son las soluciones. En libro muy recomendable y útil ya que independientemente del lenguaje o tipo de aplicación este conocimiento sobre las bases de datos relacionales es de provecho, como en la práctica totalidad de las aplicaciones se usa una base de datos relacional para persistir los datos será en casi todos los casos.

{{% /post %}}
