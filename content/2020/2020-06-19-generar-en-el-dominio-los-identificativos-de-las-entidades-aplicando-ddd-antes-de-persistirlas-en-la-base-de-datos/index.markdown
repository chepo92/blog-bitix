---
pid: 493
type: "post"
title: "Generar en el dominio los identificativos de las entidades aplicando DDD antes de persistirlas en la base de datos"
url: "/2020/06/generar-en-el-dominio-los-identificativos-de-las-entidades-aplicando-ddd-antes-de-persistirlas-en-la-base-de-datos/"
date: 2020-06-19T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:entities-id.png"
tags: ["java", "planeta-codigo"]
summary: "Las bases de datos tiene la capacidad de generar identificativos para los datos que se insertan. En el caso de las bases de datos relacionales con secuencias que generan en el momento de inserción la clave primaria de la fila en una tabla, normalmente es un número y utilizando Java con JPA con las anotaciones _Id_, _GeneratedValue_ y _SequenceGenerator_ en la clase Java que representa a la entidad. Para Domain Driven Design delegar en el momento de inserción la generación del identificativo de la entidad es un problema ya que hace que la entidad sea inválida al no tener identidad hasta persistirla y la base de datos es un elemento externo que debe ser independizado del dominio de la aplicación. En este artículo comento una implementación siguiendo los principios de DDD para dar solución a estos dos problemas."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Tradicionalmente la tarea de generar los identificativos de las entidades de dominio se delega en la base de datos en el momento de persistir la entidad. La base de datos en la columna de la tabla de la entidad para el identificativo generalmente es de tipo numérico y la base de datos le asigna un valor incremental para cada fila o entidad guardada.

Este modelo de delegar en la base de datos el generar la identificativos de las entidades tiene dos problemas en la teoría de [Domain Driven Design][wikipedia-domain-driven-design] o _DDD_:

* La aplicación requiere y es dependiente de un sistema externo para asignar la identidad de una entidad del dominio creada en la aplicación.
* La entidad no tiene identidad inicialmente, lo que significa que la entidad es creada con un estado inválido por ser incompleto.

Que la entidad no tenga identidad asignado y esté incompleta en el momento de creación tiene inconvenientes ya que al [implementar los métodos _equals_ y _hashCode_ en Java][blogbitix-199] para una entidad estos se basa en el identificativo de la entidad para determinar si dos instancias de un objeto es la misma, si la entidad no tiene identidad el método _equals_ es ineficaz. Al mismo tiempo el método _hashCode_, y también el método _equals_, es utilizado por la API de colecciones de Java en su mayoría con lo que la entidad no es posible guardarla en colecciones que dependan de estos métodos para su correcto funcionamiento. Para usar los métodos _equals_ y _hashCode_ de las entidades es necesario esperar a guardar la entidad en la base de datos para que se le asigne el identificativo.

También en DDD se suelen utilizar eventos como mecanismo de comunicar que en el sistema se ha sucedido algo, si la entidad no tiene identificativo no es posible comunicar que ha ocurrido algo, al menos no incluyendo el identificativo.

### Identificativos universales como identificadores

Una posibilidad es generar identificativos universales para los identificativos de las entidades, sin embargo, la clase [UUID](java11:java.base/java/util/UUID.html) depende de elementos externos al dominio como el tiempo del sistema. Al mismo tiempo la entidad no es consciente de la existencia de otras entidades y no le es posible determinar la unicidad del identificativo.

En DDD todo elemento que dependa de algo externo ha de se independizado del dominio. De modo que el UUID aplicando DDD no se genera en la entidad sino en la capa de servicio mediante un elemento externo que en la terminología de DDD es un adaptador, el identificativo se le proporciona a la entidad en el momento de creación en el constructor como parámetro.

{{< code file="UuidGenerator.java" language="java" options="" >}}

### Delegar la generación de identificativos en el repositorio

Dado que en DDD se utiliza un repositorio para persistir las entidades en una base de datos externa a la lógica de dominio, la tarea de generar los identificadores que depende de un elemento externo es posible ubicarla en la misma clase repositorio, de esta manera la lógica queda con cohesión ya que todo lo relativo a la entidad está ubicada en su repositorio.

Al mismo tiempo delegar la tarea de crear el identificativo en el repositorio permite variar la implementación, una opción es delegar en la base de datos la obtención del identificativo o utilizar el método de identificativo universal anterior. En el caso de delegar en la base de datos la generación del identificativo, es la base de datos la que lo genera igual que en el caso de la autogeneración pero ahora no de manera implícita sino de forma explícita.

### Ejemplo utilizando JPA y Spring Data

Utilizando [Spring Data][spring-data] con JPA para añadir métodos personalizados en la clase del repositorio hay que crear una interfaz que los incluya y construir una implementación de esa interfaz. La misma interfaz es implementada por la interfaz de Spring Data, y Spring haciendo su magia y por composición crea un repositorio que tiene tanto los métodos implementados por Spring como la implementación de los métodos personalizados, en este caso el de generar el identificativo.

{{< code file="ProductRepository.java" language="java" options="" >}}
{{< code file="CustomProductRepository.java" language="java" options="" >}}
{{< code file="CustomProductRepositoryImpl.java" language="java" options="" >}}

En la clase de la entidad no se usa la anotación [GeneratedValue](javaee8:javax/persistence/GeneratedValue.html). En vez de esa anotación en este ejemplo se utiliza la anotación [EmbeddedId](javaee8:javax/persistence/Embeddable.html) y la anotación [Embeddable](javaee8:javax/persistence/Embeddable.html), aplicando otro de los principios de DDD que es [utilizar un tipo especico que representa el identificativo de la entidad][blogbitix-437] en vez de un tipo proporcionado por el lenguaje como un _Long_ o _BigInteger_. Un tipo específico para la identidad tiene varias ventajas como aprovechar los beneficios del compilador para detectar errores y de los IDE con asistencia de código.

{{< code file="Product.java" language="java" options="" >}}
{{< code file="ProductId.java" language="java" options="" >}}

De esta forma ahora las entidades creadas son completamente válidas desde el momento de generación en el dominio ya que tienen su identificador. Dado que la entidad tiene su propio identificativo desde el inicio de su existencia es posible guardar la entidad en colecciones y lanzar eventos de dominio que incluyan su identificador sin tener que esperar que la base de datos le autogenere uno.

En este caso de prueba se observa que la entidad _Product_ creada se crea en el constructor con su identificativo asignado sin esperar a que la base de datos lo genere, la base de datos y JPA simplemente persisten el valor que tiene asignado.

{{< code file="ProductRepositoryTest.java" language="java" options="" >}}

En las trazas se observa la SQL para obtener el valor de la secuencia y la SQL de _insert_ para guardar la entidad.

{{< code file="System.out" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/EntitiesId" command="./gradlew test" %}}

{{% reference %}}
* [When and where to determine the ID of an entity](https://matthiasnoback.nl/2018/05/when-and-where-to-determine-the-id-of-an-entity/)
* [Spring Data - Customizing Individual Repositories](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.single-repository-behavior)
* [JPA Primary Key](https://www.objectdb.com/java/jpa/entity/id)
{{% /reference %}}

{{% /post %}}
