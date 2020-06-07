---
pid: 490
type: "post"
title: "Pruebas de integración con Testcontainers, ejemplo de JPA con la base de datos PostgreSQL"
url: "/2020/06/pruebas-de-integracion-con-testcontainers-ejemplo-de-jpa-con-la-base-de-datos-postgresql/"
date: 2020-06-07T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:testcontainers.svg"
tags: ["java", "planeta-codigo"]
summary: "Algunas partes del código no es posibles probarlas con teses unitarios ya que tienen dependencias como una base de datos. En estos casos es necesario realizar un test de integración, la dificultad reside en tener esta dependencia en el entorno de pruebas. La herramienta Testcontainers permite iniciar un contenedor Docker con la dependencia cuando el test se ejecuta."
---

{{% post %}}

{{< logotype image1="testcontainers.svg" >}}

Las pruebas automatizadas permiten validar que el comportamiento del software es el esperado. Permiten verificar que ante cambios no se introducen errores, generan mayor confianza en que el software funciona como se espera y evitan la necesidad de realizar pruebas manuales lentas y repetitivas.

Las pruebas más numerosas son las unitarias que prueban un componente del software de forma aislada de sus dependencias sin invocar operaciones de red. Las dependencias del componente bajo la prueba no son las reales, las dependencias simulan el comportamiento de los componentes a los que sustituyen por _stubs_ o _mocks_ para analizar cómo se comporta el sujeto bajo la prueba o SUT. En el artículo [qué es un SUT, fake, stub, mock y spy](https://picodotdev.github.io/blog-bitix/2018/07/que-es-un-sut-fake-stub-mock-y-spy-en-las-pruebas-con-un-ejemplo/) describo este tipo de objetos que sustituyen a las dependencias reales.

El objetivo de sustituir una dependencia real por un doble es programar el comportamiento del doble, ejecutar la prueba de forma aislada y de forma rápida. Una dependencia real es una base de datos como [PostgreSQL][postgresql], NoSQL como [MongoDB][mongodb] o un servicio que requiere comunicación por red como [GraphQL][graphql], al sustituir las dependencias no son necesarias en el entorno de la prueba lo que lo hace más sencillo.

Sin embargo, el código a ejecutar en la aplicación finalmente hace uso de las dependencias reales, y estas no se prueban en las pruebas unitarias, lo que significa los mismos problemas de errores y pruebas manuales de un código que no tiene pruebas automatizadas o pruebas que se basan en dobles que sustituyen a los reales y en algunos casos quiza se comporten de forma diferente. Las pruebas de integración permiten probar el funcionamiento de dos componentes relacionados.

[Testcontainers][testcontainers] es una herramienta que permite realizar pruebas de integración utilizando las mismas dependencias que usa la aplicación en su funcionamiento normal y disponer de estas dependencias en el entorno de prueba. Si usa una base de datos PostgreSQL las pruebas usan esta base de datos, lo mismo si las pruebas necesitan, MongoDB, [RabbitMQ][rabbitmq] o [Redis][redis]. Testcontainers es una tecnología Java que se basa en el uso de contenedores [Docker][docker] para las pruebas. Al iniciar las pruebas de integración Testcontainers se encarga de iniciar un contenedor efímero por cada una de las dependencias que se necesite, al finalizar las pruebas el contenedor es destruido.

Una aplicación que use una base de datos SQL lanza consultas SQL, aunque el lenguaje de consulta SQL está estandarizado las bases de datos incluyen diferencias en las funciones, sintaxis y palabras clave específicas de esa base de datos que no son compatibles con otras bases de datos o consultas con condiciones complejas que es necesario que tengan pruebas. El caso es que probar esas consultas contra una base de datos en memoria puede hacer que el test funcione pero sobre la base de datos real no, para garantizar mayor fiabilidad de las pruebas es mejor usar la base de datos real y no otra base de datos en memoria como [H2][h2], [HSQL][hsqldb] que a veces se utilizan por no disponer en el entorno de pruebas la base de datos real. 

Las partes del código que se puedan probar con teses unitarios es mejor probarlas con este tipo de teses ya que se ejecutan más rápidamente, son más fiables y no necesitan dependencias. Si ciertas partes del código no se pueden probar con una prueba unitaria por tener dependencias las pruebas de integración son la opción aconsejada para que también tengan sus correspondientes teses. 

En el siguiente ejemplo muestro una clase repositorio que accede a una base de datos PostgreSQL implementado con [Spring Data][spring-data] con JPA e [Hibernate][hibernate] que en su ejecución lanza consultas SQL a la base de datos relacional. Para probar su comportamiento en una prueba de integración se usa Testcontainers que arranca el contenedor Docker de PostgreSQL. La prueba está implementada con [JUnit 5][junit] y la aplicación hace uso de [Spring Boot][spring-boot]. La prueba de integración realiza un par de pruebas para esa clase repositorio insertando los datos de prueba de dos formas diferentes.

Esta es la entidad de Hibernate que la clase repositorio persiste en la base de datos.

{{< code file="Person.java" language="java" options="" >}}

La clase repositorio es una implementación para el acceso a la base de datos haciendo uso de las facilidades que proporciona Spring Data. La interfaz [CrudRepository](https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html) ofrece métodos con las oepraciones de lectura, guardado, actualización y eliminación básicas que en su invocación generan las consultas SQL _select_, _insert_, _update_ y _delete_ correspondientes.

{{< code file="PersonRepository.java" language="java" options="" >}}

Testcontainers necesita iniciar contenedores para lo que es necesario instalar previamente según la [guía para Docker][blogbitix-serie-docker] este software de contenedores. En archivo de construcción es necesario incluir las dependencias de Testcontainers, de Spring y el controlador para la base de datos PostgreSQL.

{{< code file="build.gradle" language="groovy" options="" >}}

La clase _DefaultPostgresContainer_ permite encapsular el inicio del contenedor para PostgresSQL  y configurar las variables _spring.datasource.url_, _spring.datasource.username_ y _spring.datasource.password_ con la URL de conexión, usuario y contraseña antes de que el contexto de Spring se inicie. La clase _DefaultPostgresContainer_ permite reutilizar esta conguración en diferentes teses y hacer uso de ella donde sea necesario con la anotación [ContextConfiguration](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/context/ContextConfiguration.html).

{{< code file="DefaultPostgresContainer.java" language="java" options="" >}}

Se puede iniciar cualquier contenedor de forma genérica con el siguiente código, indicando la imagen del contenedor y etiqueta además del puerto que expone. Testcontainer los expone de forma local usando un puerto aleatorio, se necesita el _host_ y puerto que permite la conexión al servicio obtenidos de la referencia del contenedor. En este caso se inicia un contenedor [Redis][redis] accedido con la librería [Jedis][jedis]. 

{{< code file="RedisTest.java" language="java" options="" >}}

La prueba está implementada con JUnit 5 y Spring Boot, con la anotación _ContextConfiguration_ se indica a JUnit y a Spring que inicie el contenedor de PostgreSQL antes de iniciar el contexto de Spring que configura las variables de conexión a la base de datos y antes de ejecutar los métodos de prueba. Los métodos de prueba son muy sencillos simplemente persisten en la base de datos varias entidades y se prueba que el número de entidades presentes en la base de datos al contarlas es el esperado.

Los datos iniciales de prueba o _fixture_ se insertan de dos formas diferentes en cada método de prueba, en uno haciendo uso de la propia clase repositorio y en otro con la anotación [Sql](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/context/jdbc/Sql.html) que contiene las sentencias SQL de inserción equivalentes.

{{< code file="PersonRepositoryTest.java" language="java" options="" >}}
{{< code file="persons.sql" language="sql" options="" >}}

En la salida de trazas de los teses se observa como Testcontainers inicia el contenedor PostgreSQL y como los teses generan las sentencias SQL de _insert_, _count_ y _delete_ para eliminar los datos del _fixture_.

{{< code file="System.out" language="plaintext" options="" >}}

Si fuera necesario [Liquibase][liquibase] permite aplicar cambios en la base con archivos de migración, por ejemplo, para crear algunas tablas, procedimientos almacenados o crear los datos básicos. En el ejemplo el archivo de cambios en base de datos incluye la tabla _Department_. En las trazas se ve la SQL de creación de la tabla, para las pruebas del ejemplo no es necesario pero suele ser una funcionalidad necesaria en un proyecto real.

{{< code file="db.changelog-master.xml" language="xml" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/Testcontainers" command="./gradlew test" %}}

{{% reference %}}
* [Writing integration tests with Testcontainers](https://balarawool.me/writing-integration-tests-with-testcontainers/)
* [DB Integration Tests with Spring Boot and Testcontainers](https://www.baeldung.com/spring-boot-testcontainers-integration-test)
* [Use Liquibase to Safely Evolve Your Database Schema](https://www.baeldung.com/liquibase-refactor-schema-of-java-app)
* [Populate a database with TestContainers in a SpringBoot integration test](https://stackoverflow.com/questions/53078306/populate-a-database-with-testcontainers-in-a-springboot-integration-test)
{{% /reference %}}

{{% /post %}}
