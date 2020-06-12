---
pid: 491
type: "post"
title: "El patrón de diseño Specification, ejemplo de implementación y uso en JPA con Spring Data"
url: "/2020/06/el-patron-de-diseno-specification-ejemplo-de-implementacion-y-uso-en-jpa-con-spring-data/"
aliases: ["/2020/06/el-patron-specification-ejemplo-de-implementacion-y-uso-en-jpa-con-spring-data/"]
date: 2020-06-12T16:00:00+02:00
udapted: 2020-06-12T18:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "images:specfication.svg"
tags: ["java", "planeta-codigo"]
summary: "Los métodos de búsqueda y consulta permiten recuperar objetos de las bases de datos según los criterios deseados. Dependiendo del tamaño de la aplicación y sus casos de uso el número de consultas será más o menos grande. Con un número de consultas grande estas se vuelven complejas de mantener y generan duplicación de lógica de negocio. Para simplificar el mantenimiento de un número grande de consultas y evitar duplicidad de lógica de negocio una solución es implementar el patrón _Specification_."
---

{{% post %}}

{{< logotype image1="java.svg" image2="spring.svg" >}}

Dado un objeto suele ser necesario comprobar si cumple una o más condiciones. Estas condiciones pueden implementarse tanto en un método del objeto como en la lógica de persistencia en la base de datos.

Esta aproximación tiene dos inconvenientes, el número de métodos de consulta crece significativamente en las aplicaciones grandes y las consultas son conjunto fijo sin posibilidad de extensión salvo añadir nuevos métodos, las consultas no son fáciles de externalizar y reutilizar.

En estos casos implementar el patrón de diseño _Specification_ ayuda a hacer el código más mantenible, extensible, simple y de más fácil lectura.

Los siguientes ejemplos implementan el patrón _Specification_ para comprobar si un objeto cumple una serie de condiciones de negocio y como Spring Data hace uso del patrón para construir las condiciones de las consultas de JPA. Los ejemplos incluyen teses que usan [la herramienta TestConainers para hacer pruebas de integración en Java][blogbitix-490] con la base de datos [PostgreSQL][postgresql] en un contenedor [Docker][docker].

### El problema en las consultas

Suponiendo que se tiene la siguiente entidad del dominio con una serie de campos la idea primera y más directa para implementar si un producto cumple una serie de condiciones es añadir métodos en las clases, un método por cada condición. Por ejemplo, para buscar los productos que que son baratos, tienen un tiempo largo de existencia o un _sobrestock_.

{{< code file="Product-1.java" language="java" options="" >}}

Esta aproximación sencilla de implementar y suficiente en aplicaciones pequeñas tiene dos inconvenientes. El número de métodos a escribir crece significativamente para aplicaciones grandes o complejas y los criterios de los métodos de consulta son fijos, no son extensibles. Para solventar estos dos problemas se opta por crear métodos con los criterios individuales y se combinan entre ellos dinámicamente para obtener la consulta deseada.

Aquí es donde el patrón  de diseño _Specification_ es de utilidad. Este patrón también es aplicable a las consultas presentes en las clases repositorio de acceso a la base de datos donde seguramente es más probable repetir la misma lógica de condiciones en varias consultas _hardcodeado_ en las SQLs. Con los mismos problemas, condiciones repetidas en varios métodos y proliferación de métodos de consulta. Esta es la razón de que [Spring Data][spring-data] implemente el patrón _Specification_.

### Qué es y ventajas del patrón de diseño Specification

El patrón de diseño _Specification_ permite encapsular una pieza del conocimiento del dominio y rehusarla en diferentes partes de la aplicación. Utilizándolo se mueven estas reglas de negocio a clases llamadas _specifications_.

El patrón de diseño _Specification_ parte de una interfaz con un método a implementar para encapsular la lógica de negocio que comprueba si la condición se cumple.

{{< code file="Specification.java" language="java" options="" >}}

Por cada condición hay una implementación de la interfaz.

{{< code file="IsCheapSpecification.java" language="java" options="" >}}
{{< code file="IsLongTermSpecification.java" language="java" options="" >}}
{{< code file="IsOverstockSpecification.java" language="java" options="" >}}

En el objeto _Product_ se implementa el patrón _Visitor_ con la interfaz _Specificable_ donde cada implementación de la clase _Specification_ trata la lógica y la clase _Product_ solo tiene el método _satisfies_ que invoca a la instancia de _specification_ recibida como parámetro.

{{< code file="Product.java" language="java" options="" >}}

Para realizar combinaciones con operaciones lógicas _and_, _or_ o _not_ se utiliza el patrón _Composite_. De entre las operaciones básicas solo se muestra la operación _equals_, sería neesario implementar otro tipo de operaciones como _lessThan_, _greaterThan_, _contains_ u otras si es necesario.

{{< code file="EqualsSpecification.java" language="java" options="" >}}
{{< code file="AndSpecification.java" language="java" options="" >}}
{{< code file="OrSpecification.java" language="java" options="" >}}
{{< code file="NotSpecification.java" language="java" options="" >}}

Al implementar el patrón _Specification_ se hace uso de varios patrones:

* El patrón de diseño _Visitor_, en el método _satisfies_ de la clase _Product_ realmente se llama al método _isSatisfied_ de la interfaz _Specification_.
* El patrón de diseño _Composite_ en las operaciones lógicas _and_, _or_ y _not_. Estas condiciones lógicas de agrupación se componente de otras independientemente de contengan una o varias.
* El patrón de diseño _Comamnd_, se construye la instancia de _Specification_ a ejecutar y el método _satisfies_ lo ejecuta.
* El [patrón de diseño _Builder_][blogbitix-99] se utiliza para facilitar la construcción de las condiciones con una API fluida y ocultar las clases concretas que implementan la interfaz _Specification_. Spring Data lo implementa.

La siguiente prueba unitaria muestra con código el uso del patrón _Specification_.

{{< code file="ProductSpecificationTest.java" language="java" options="" >}}

### Implementación para JPA con Spring Data

El proyecto Spring Data para el acceso a bases de datos con JPA implementa el patrón de diseño _Specification_, la interfaz [JpaSpecificationExecutor](https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaSpecificationExecutor.html) añade a los repositorios métodos de búsqueda que reciben un argumento de tipo [Specification](https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/domain/Specification.html).

Esta clase _Specification_ transforma las condiciones en un objeto [Predicate](javaee8:javax/persistence/criteria/Predicate.html) que es el que JPA usa para las condiciones de la consulta SQL que se genera. La interfaz _JpaSpecificationExecutor_ también añade métodos para hacer búsquedas paginadas y con ordenación.

Si en el proyecto se utiliza Spring y JPA esta es la opción recomendada, si no se utiliza Spring o se utiliza otra librería de persistencia distinta a JPA se puede realizar una implementación siguiendo los principios del patrón _Specification_.

Las clases _EqualsSpecification_, _IsCheapSpecification_, _IsLongTermSpecification_, y _IsOverstockSpecification_ anteriores también implementan la interfaz _Specification_ de Spring Data. Estas clases implmentan dos interfaces distintas para diferentes cosas, para hacer comprobaciones sobre un objeto en memoria y para generar clases _Predicate_ con las condiciones equivalentes de JPA, son símplemente ejemplos y para separar conceptos no estaría mal dividir cada clase en dos para que implementen las interfaces de forma individual.

{{< code file="ProductRepository.java" language="java" options="" >}}

La siguiente prueba de integración con [Testcontainers][testcontainers], PostgresSQL y Docker prueba el repositorio con las implementaciones de las clases del patrón _Specification_ para JPA de Spring Data.

{{< code file="ProductJpaSpecificationTest.java" language="java" options="" >}}
{{< code file="products.sql" language="sql" options="" >}}

En la salida de los teses se muestran la traducción de los objetos _specification_ a las condiciones de las consultas.

{{< code file="System.out" language="plaintext" options="" >}}

Otra de las funcionalidades proporcionadas por Spring Data es hacer [consultas basadas en un objeto ejemplo](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#query-by-example) o _query by example_.

{{% sourcecode git="blog-ejemplos/tree/master/PatronSpecification" command="./gradew test" %}}

Referencia:
* [Java: Using the specification pattern with JPA](https://www.mscharhag.com/java/specification-pattern-in-java-jpa)
* [How to Use the Specification Pattern in Java](https://dzone.com/articles/specification-pattern-quickly)
* [Advanced Spring Data JPA - Specifications and Querydsl](https://spring.io/blog/2011/04/26/advanced-spring-data-jpa-specifications-and-querydsl/)
* [Using Spring Data JPA Specification](https://dzone.com/articles/using-spring-data-jpa-specification)
* [REST Query Language with Spring Data JPA Specifications](https://www.baeldung.com/rest-api-search-language-spring-data-specifications)
* [Spring Data JPA - Reference Documentation, Specification](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#specifications)

{{% /post %}}
