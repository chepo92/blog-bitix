---
pid: 239
type: "post"
title: "Usar la base de datos NoSQL MongoDB con Java"
url: "/2017/06/usar-la-base-de-datos-nosql-mongodb-con-java/"
date: 2017-06-04T13:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:mongodb.svg"
tags: ["gnu-linux", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="mongodb.svg" title1="MongoDB" width1="400" image2="java.svg" >}}

En un artículo anterior hacía una pequeña [introducción a la base de datos NoSQL MongoDB][blogbitix-237] comentando sus características, como empezar a usarla con [Docker][docker] y como lanzar algunos comandos para crear bases de datos y colecciones junto las operaciones básicas de inserción, actualización, eliminación y búsquedas con consultas desde la _shell_ que ofrece [MongoDB][mongodb] para esta base de datos que guarda documentos.

La _shell_ sirve para hacer estas consultas pero el caso de uso principal es usarlo desde una aplicación con alguno de los [lenguajes de programación para los que se proporciona un controlador](https://docs.mongodb.com/ecosystem/drivers/). MongoDB se puede usar desde cualquiera de los lenguajes de programación más populares entre ellos Java. En este artículo muestro con un ejemplo como realizar las operaciones que utilizaba desde la _shell_ de MongoDB pero desde una aplicación Java.

Para el ejemplo uso una aplicación Java con [Spring Boot][spring-boot] en la que hay que incluir la dependencia _org.springframework.boot:spring-boot-starter-data-mongodb_ que proporciona el acceso a esta base de datos. Para comunicación con el servidor de MongoDB hay que crear una instancia del cliente de la base de datos, una instancia de la clase [MongoClient](https://api.mongodb.com/java/current/com/mongodb/MongoClient.html) para lo que simplemente necesitamos el _host_ y puerto en la que está arrancado el servidor. En el caso del ejemplo _localhost_ y el puerto de MongoDB que por defecto es _27017_. Al usar Spring defino un nuevo servicio en el contenedor de dependencias y la inyecto en la clase de la aplicación para hacer uso de ella, dado lo simple que es el ejemplo en el mismo archivo de código fuente.

Los documentos en MongoDB están en formato JSON, como Java no ofrece de una sintaxis sencilla de literales de listas y mapas para el uso de documentos JSON hay que usar algunas clases de la API de MongoDB para la construcción de los documentos, para las búsquedas en las que indicaremos filtros usaremos la clase [Filters](https://api.mongodb.com/java/current/com/mongodb/client/model/Filters.html), [Updates](https://api.mongodb.com/java/current/com/mongodb/client/model/Updates.html) para las actualizaciones y para la construcción de documentos de datos y actualizaciones [Document](https://api.mongodb.com/java/current/org/bson/Document.html). Con la instancia de la clase cliente que da acceso a la base de datos MongoDB desde Java se listan las bases de datos, colecciones y lanzan los comandos.

Con la referencia a una colección se realizan las operaciones de inserción de un documento, actualización del documento completo o de una parte, eliminación de un documento y búsqueda de documentos con una consulta.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

La instancia del servidor de MongDB la inicio usando Docker con un archivo de [Docker Compose][docker-compose] y el comando <code>docker-compose up</code>. En la  [serie de artículos sobre Docker][blogbitix-serie-docker] que escribí puedes aprender como empezar a usar Docker y adquirir un conocimiento hasta un nivel intermedio.

{{< code file="docker-compose.yml" language="YAML" options="" >}}

El resultado en la terimnal de ejecutar el ejemplo con el comando <code>gradlew run</code> es el siguiente donde se muestran las bases de datos, la colección _users_ creada en el ejemplo, los usuarios de la colección y una búsqueda de un usuario, el resultado de actualizar la propiedad de un documento y finalmente el número de documentos en la colección.

{{< code file="System.out" language="plaintext" options="" >}}

Spring ofrece en su API mediante el proyecto [Spring Data MongoDB](https://projects.spring.io/spring-data-mongodb/) algunas clases adicionales para facilitar el acceso y obtención de datos de MongoDB. Entre estas clases están [MongoTemplate](https://docs.spring.io/spring-data/data-mongo/docs/current/api/org/springframework/data/mongodb/core/MongoTemplate.html), [MongoOperations](https://docs.spring.io/spring-data/data-mongo/docs/current/api/org/springframework/data/mongodb/core/MongoOperations.html) y [MongoRepository](https://docs.spring.io/spring-data/data-mongo/docs/current/api/org/springframework/data/mongodb/repository/MongoRepository.html) cuyo uso puede consultarse en su [manual de referencia](https://docs.spring.io/spring-data/data-mongo/docs/current/reference/html/).

En el libro [MongDB in Action](https://amzn.to/2qvYqqU) comentan más detalladamente y de forma más completa las opciones que se pueden utilizar en el lenguaje de consulta, muchas de las opciones son equivalentes a las que son conocidas del lenguaje SQL de las bases de datos relacionales.

{{< amazon
    linkids="53e36564344401d0a3e0f29a4cef1968"
    asins="1617291609" >}}

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoMongoDB" command="docker-compose up, ./gradlew run" >}}

{{< reference >}}
* [Documentación MongoDB](https://docs.mongodb.com/)
* [Introducción a la base de datos relacional PostgreSQL][blogbitix-236]
* [Introducción a la base de datos NoSQL MongoDB][blogbitix-237]
* [Introducción a la base de datos NoSQL Redis][blogbitix-240]
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
