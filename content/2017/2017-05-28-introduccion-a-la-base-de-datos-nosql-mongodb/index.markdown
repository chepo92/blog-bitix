---
pid: 237
type: "post"
title: "Introducción a la base de datos NoSQL MongoDB"
url: "/2017/05/introduccion-a-la-base-de-datos-nosql-mongodb/"
date: 2017-05-28T12:30:00+02:00
updated: 2017-06-04T12:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:mongodb.svg"
tags: ["gnu-linux", "planeta-codigo", "programacion"]
summary: "En unos pocos años las bases de datos NoSQL se han dado a conocer ampliamente. Resuelven algunas problemáticas para las que las bases de datos relacionales más longevas no proporcionan una solución totalmente satisfactoria como el escalado horizontal y un modelo de datos normalizado en varias tablas, filas y columnas predefinidas y significativamente diferente del modelo de datos usados por las aplicaciones. La base de datos NoSQL MongoDB que almacena documentos se adecua mejor a cierto tipo de requerimientos."
---

{{% post %}}

{{< logotype image1="mongodb.svg" title1="MongoDB" width1="400" >}}

Los sistemas de información empleados tradicionalmente en las aplicaciones son las bases de datos relacionales como [MySQL][mysql], [PostgreSQL][postgresql] u otras comerciales. Las bases de datos relacionales con sus propiedades <abbr title="Atomicity, Consistency, Isolation, Durability">[ACID][acid]</abbr> seguirán usándose pero desde hace unos años están surgiendo y empleándose para algunos casos otro tipo de [bases de datos conocidas como NoSQL][nosql]. Dentro de las bases de datos NoSQL hay varios tipos: clave-valor, de documentos, grafos, ... Dentro de la categoría de bases de datos NoSQL orientadas a almacenar documentos una de las más destacadas es [MongoDB][mongodb].

Al igual que las bases de datos relacionales MongoDB posee un _shell_ JavaScript con el que lanzar todas las operaciones anteriores que junto con [Docker][docker] la experimentación de todo lo anterior será una tarea no demasiado complicada. Bastará descargar la [imagen de MongoDB para Docker](https://hub.docker.com/_/mongo/), iniciar un contenedor, iniciar una _shell bash_ en el contenedor y la _shell_ de MongoDB desde la que lanzar las consultas. Siguendo la [seríe de artículos sobre Docker][blogbitix-serie-docker] en unas pocas horas puedes usarlo.

{{< code file="docker-compose.yml" language="YAML" options="" >}}
{{< code file="docker-compose.sh" language="bash" options="" >}}

La base de datos MongoDB al igual que muchas NoSQL no soporta completamente las propiedades ACID de las bases de datos relacionales, no soporta transacciones aunque sí garantiza que las operaciones individuales son atómicas, pero a cambio proporciona otras propiedades que para algunas necesidades podemos considerar más adecuadas como mayor escalabilidad horizontal, alta disponibilidad, réplicas y _shards_ para distribuir los datos entre varias instancias. MongoDB guarda la información en documentos con formato JSON.

En vez de tablas, filas y columnas los términos en MongoDB son colecciones de documentos, los documentos son la unidad mínima de información almacenable y propiedades en esos documentos. Una propiedad interesante de los documentos es que estos no tiene porque tener todos las mismas propiedades, aunque se recomienda que las propiedades sean siempre del mismo tipo. Los documentos hacen menos necesarios y complejos los <abbr title="Object-Relational mapping">[ORM][orm]</abbr> para convertir del modelo relacional usado en las bases de datos al modelo de objetos de la aplicación.

{{< code file="documents.json" language="json" options="" >}}

Se pueden almacenar los documentos anteriores en la misma colección de artículos aunque ambos no tengan las mismas propiedades, en una base de datos relacional sería más complicado y en el caso de que los datos fuesen desconocidos en el momento de definir el modelo obligaría a usar el [modelo entity-atribute-value](https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model).

La información que en una base de datos relacional está en varias tablas y es necesario realizar varias consultas SQL para obtenerla en MongoDB está en un mismo documento siendo más sencilla de recuperar con la posibilidad de no estar tan normalizada y sin necesidad de hacer _joins_ entre varias tablas. Para guardar los documentos anteriores de ejemplo en una base de datos relacional se necesitan varias tablas, una para los artículos y otras para los comentarios, etiquetas y adicionales para las relaciones N a M.

Algunas bases de datos NoSQL no necesitan del potente lenguaje de consulta SQL de las bases de datos relacionales pero MongoDB proporciona su propio lenguaje de consulta diferente a SQL pero con muchas funcionalidades similares: proyecciones, agrupaciones, filtrado, agregación, ordenación, funciones lógicas, aritméticas, para fechas, para cadenas además de operaciones para realizar inserciones, actualizaciones de un documento completo o campos individuales y eliminaciones. Para que las búsquedas y filtrados tenga buen rendimiento en colecciones de documentos grandes también se pueden crear índices.

Estas son las [operaciones CRUD][crud] ejecutadas desde la _shell_ de MongoDB en una colección de artículos.

{{< code file="insert.json" language="json" options="" >}}
{{< code file="find.json" language="json" options="" >}}
{{< code file="update.json" language="json" options="" >}}
{{< code file="delete.json" language="json" options="" >}}

MongoDB proporciona controladores para acceder a la base de datos desde los lenguejes de programación más populares como muestro en el artículo [Usar la base de datos NoSQL MongoDB con Java][blogbitix-239].

El libro [MongoDB in Action](https://amzn.to/2qvYqqU) es un buen material de referencia para dominar esta base de datos NoSQL con consejos prácticos de como guardar la información y como administrar la base de datos para replicar los datos en un _cluster_, escalar y otros temas administrativos como crear copias de seguridad, rendimiento, seguridad o monitorización.

{{< amazon
    linkids="53e36564344401d0a3e0f29a4cef1968"
    asins="1617291609" >}}

[La base de datos PostgreSQL][blogbitix-236] es una de las mejores opciones en el ámbito de las bases de datos relacionales y el potente lenguaje SQL, las propiedades ACID o el PL/pgSQL entre otras funcionalidades hará que siga siendo una de las mejores opciones para almacenar de forma persistente la preciosa información. En los casos que la escalabilidad o la estructuración de la información en documentos se un factor determinante MongoDB es una buena opción. Ambas opciones no son excluyentes, según el caso estos dos sistemas de información se podrán combinar para obtener lo mejor de cada uno de ellos.

{{< reference >}}
* [Documentación MongoDB](https://docs.mongodb.com/)
* [Introducción a la base de datos relacional PostgreSQL][blogbitix-236]
* [Usar la base de datos NoSQL MongoDB con Java][blogbitix-239]
* [Introducción a la base de datos NoSQL Redis][blogbitix-240]
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
