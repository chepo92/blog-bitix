---
pid: 275
type: "post"
title: "Ejemplo de GraphQL para una interfaz de un servicio con Spring Boot y Java"
url: "/2017/11/ejemplo-de-graphql-para-una-interfaz-de-un-servicio-con-spring-boot-y-java/"
date: 2017-11-01T12:00:00+01:00
updated: 2019-06-15T00:55:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:graphql.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["graphql"]
summary: "GraphQL es una alternativa a una interfaz REST con las ventajas de poder realizar varias consultas en una misma petición y devolviendo únicamente los datos que requiera el cliente. Es una especificación y hay una implementación para los lenguajes de programación más populares entre ellos Java. Este artículo es una introducción con un ejemplo completo que muestra cómo se hacen consultas y modificaciones en los datos."
---

{{% post %}}

{{< logotype image1="graphql.svg" title1="GraphQL" width1="200" >}}

Con anterioridad las aplicaciones que lo necesitaban ofrecían una interfaz como un servicio mediante _web services_, sin embargo, esta tecnología era complicada por usar XML y no de fácil utilización en clientes JavaScript. La evolución que a día de hoy sigue siendo mayoritaria son las interfaces [REST][rest] que emplean la semántica de los verbos del protocolo HTTP para realizar operaciones de búsqueda, creación, modificación y eliminación y normalmente empleando JSON como formato para intercambiar los datos. Sin embargo, REST no está exento de algunos problemas como la necesidad de realizar varias peticiones a cada uno de los recursos que ofrece si se necesitan datos de varios de ellos, otro es que los datos ofrecidos por los servicios REST está prefijados en tiempo de desarrollo no adaptándose a lo que necesita el cliente. En cierta medida estas dos cosas se pueden implementar en la interfaz REST con algunos parámetros pero requiere codificarlo explícitamente.

Más recientemente ha aparecido otra forma de implementar una interfaz de un servicio con [GraphQL][graphql] considerándose una [alternativa mejor a REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/) que solventa los dos problemas de las interfaces REST anteriores. REST ofrece en varios _endpoints_ los recursos que pueden ser accedidos mediante los verbos HTTP (_GET_, _PUT_, _POST_, _DELETE_), en GraphQL por el contrario hay un único _endpoint_, los puntos de entrada al grafo y los tipos que se relacionan entre si que son consultados para obtener los datos con el lenguaje de consulta que ofrece GraphQL.

* [Basics Tutorial - Introduction](https://www.howtographql.com/basics/0-introduction/)
* [GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)
* [Core Concepts](https://www.howtographql.com/basics/2-core-concepts/)
* [Big Picture (Architecture)](https://www.howtographql.com/basics/3-big-picture/)

En GraphQL se define un [esquema](https://graphql.org/learn/schema/) con la definición de los tipos en la API, se diferencia la obtención de los datos que es realizada por las [_queries_](https://graphql.org/learn/queries/) y de las modificaciones que es realizada por los [_mutators_](https://graphql.org/learn/queries/#mutations), el esquema se puede definir en un archivo de texto como en este ejemplo o de forma programática con código que es necesario para algunas personalizaciones. Otras tareas que pueden ser necesarias en una API son [autenticación](https://www.howtographql.com/graphql-java/5-authentication/) que es posible capturando los datos del contexto provenientes en los datos o como cabeceras de la petición posiblemente en forma de _token_ de [OAuth][oauth] y la autorización en la lógica del servicio en base al sujeto autenticado. Se puede [usar datos propios con _scalar_](https://graphql.org/learn/schema/#scalar-types) para los cuales se ha de proporcionar una clase que realice la transformación implementando una clase GraphQLScalarType. Posee [funcionalidades de introspección](https://graphql.org/learn/introspection/) y también [filtrado](https://www.howtographql.com/graphql-java/9-filtering/), [paginación](https://www.howtographql.com/graphql-java/10-pagination/), [gestión de errores](https://www.howtographql.com/graphql-java/7-error-handling/) y [cacheo](https://graphql.org/learn/caching/) aunque esto último es menos efectivo en GraphQL al depender de los datos a devolver que solicite el cliente.

Para usar GraphQL hay que definir un _schema_ que incluye los tipos, sus propiedades y tipos. También se pueden usar [fragmentos](https://graphql.org/learn/caching/) para reutilizar partes de la definición de los tipos. Cada _type_ representa una entidad que definen las propiedades que posee ya sean datos escalares o referencias a otras entidades formando de esta manera grafos de objetos, los tipos de las variables que poseen una exclamación al final quiere decir que son opcionales, por defecto todos los datos son distinto de nulo. Las listas se definen con corchetes y el tipo entre ellos. Este es el IDL del esquema del ejemplo.

{{< code file="library.graphqls" language="graphqls" options="" >}}

Una definido el esquema hay que desarrollar los _resolvers_ que son encargados de obtener los datos seguramente de una base de datos externa ya sea una base de datos SQL o NoSQL en este caso utilizando una clase que implementa el patrón repositorio y que abstrae del sistema de persistencia donde se almacenan los datos.

{{< code file="Query.java" language="java" options="" >}}
{{< code file="LibraryRepository.java" language="java" options="" >}}
{{< code file="Book.java" language="java" options="" >}}
{{< code file="Author.java" language="java" options="" >}}

Los _mutators_ son los encargados de procesar las peticiones de modificación.

{{< code file="Mutation.java" language="java" options="" >}}

Usando una aplicación de [Spring Boot][spring-boot] para ofrecer el servicio hay que realizar la contribución adecuada al contenedor de dependencias, en Java GraphQL se define como un [_servlet_](https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServlet.html) al cual hay que proporcionarle la configuración de los _resolvers_, _mutators_, procesador de contexto que en este caso se utiliza para la autenticación y definición del esquema entre otras posibles cosas.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="AuthContext.java" language="java" options="" >}}

El lenguaje de consulta GraphQL permite consultar el grafo de objetos y recuperar los datos deseados. En el siguiente ejemplo se obtienen los libros, los autores y los libros con los datos de sus autores de una clase que implementa el patrón _repository_. En el ejemplo los datos del repositorio están definidos en la propia clase de forma estática pero como su función es abstraer de donde se obtienen los datos el cambio sería sencillo para que los obtuviese de una base de datos SQL o NoSQL ya que los cambios estarían encapsulados principalmente en esa clase. Los datos son devueltos en formato JSON.

{{< code file="curl-1.sh" language="bash" options="" >}}

Una de las ventajas de GraphQL sobre REST es que es posible realizar una única petición lo que en REST podrían ser varias. Por ejemplo, la siguiente consulta obtiene en una única consulta todos los libros, todos los autores y el autor con identificativo 1 de la biblioteca, esto mejora el rendimiento ya que en REST se hubiesen requerido varias peticiones una para obtener libros, otra para los autores y otra para el autor 1. La otra ventaja sobre REST es que se devuelven únicamente los datos que el cliente solicita y no una lista prefijada por el desarrollador de la interfaz.

{{< code file="curl-2.sh" language="bash" options="" >}}

Las peticiones de modificación se envían mediante _POST_. Este es el caso para añadir un libro a la biblioteca y los casos de que el autor del libro no sea válido o que el usuario que añade el libro no tenga permisos. En el ejemplo los errores no son descriptivos de lo que realmente ha sucedido, habría que hacer el [tratamiento de errores adecuado para que los mensajes fuesen más descriptivos][blogbitix-279].

{{< code file="curl-3.sh" language="bash" options="" >}}
{{< code file="PermissionException.java" language="java" options="" >}}
{{< code file="ValidationException.java" language="java" options="" >}}

La forma explicada en las guías de GraphQL para Java es que el _mutator_ reciba los datos y este delegue la funcionalidad en una clase que implemente el patrón _repository_ que abstrae del sistema de almacenamiento (base de datos SQL, NoSQL o cualquier otro), además, este patrón _repository_ o clase de lógica de negocio se recomienda que implemente la funcionalidad necesaria para aplicar la autorización. En el ejemplo aunque de forma sencilla solo en usuario _admin_ tiene permitido añadir libros, en un proyecto es posible realizar la autenticación usando [Keycloak][keycloak] como sistema de OAuth, usar el _token_ de OAuth para implementar la autorización y un _framework_ de seguridad como [Apache Shiro][shiro] para aplicar los permisos a las funcionalidades.

Los artículos [Autenticación con OAuth y Keycloak en un servicio REST con JAX-RS y Spring Boot][blogbitix-180] y [Integrar autenticación OAuth con Keycloak, Shiro, Apache Tapestry y Spring Boot][blogbitix-185] pueden servir como base para añadir autenticación OAuth a un servicio GraphQL con Keycloak.

Finalmente, el archivo de construcción de [Gradle][gradle] del ejemplo con las dependencias necesarias. [graphql-java](https://github.com/graphql-java/graphql-java) contiene la implementación para Java de GraphQL, [graphql-java-servlet](https://github.com/graphql-java/graphql-java-servlet) la implementación de GraphQL mediante un _servlet_ y [graphql-java-tools](https://github.com/graphql-java/graphql-java-tools) son varias utilidades que facilitan en gran medida el desarrollo de un servicio para GraphQL como la construcción del esquema mediante su definición IDL o crear _resolvers_ fácilmente.

{{< code file="application.yml" language="YAML" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{< reference >}}
* [GraphQL][graphql]
* [Welcome to graphql-java](https://graphql-java.readthedocs.io/en/v5/)
* [GraphQL Java implementation](https://github.com/graphql-java/graphql-java)
* [Queries](https://www.howtographql.com/graphql-java/2-queries/)
* [A schema-first tool for graphql-java inspired by graphql-tools for JS](https://github.com/graphql-java/graphql-java-tools)
* [GraphQL Backend Development Framework](http://www.graph.cool)
* [¿Por qué deberíamos abandonar REST y empezar a usar GraphQL en nuestras APIs?](https://www.genbetadev.com/desarrollo-aplicaciones-moviles/por-que-deberiamos-abandonar-rest-y-empezar-a-usar-graphql-en-nuestras-apis)
* [GraphQL: ¡todos para uno y uno para todos!](https://www.paradigmadigital.com/dev/graphql-todos-uno-uno-todos/)
* [Introducción a GraphQL](https://www.adictosaltrabajo.com/tutoriales/introduccion-a-graphql/)
{{< /reference >}}

{{% /post %}}
