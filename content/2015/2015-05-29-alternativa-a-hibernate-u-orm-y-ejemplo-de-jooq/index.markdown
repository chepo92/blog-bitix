---
pid: 82
type: "post"
title: "Alternativa a Hibernate u ORM y ejemplo de jOOQ"
url: "/2015/05/alternativa-a-hibernate-u-orm-y-ejemplo-de-jooq/"
date: 2015-05-29T20:00:00+02:00
updated: 2017-06-18T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:jooq.png"
tags: ["java", "programacion", "planeta-codigo"]
series: ["jooq"]
summary: "Los ORMs nos han facilitado el acceso a los datos de una base de datos relacional. Han solucionado algunos problemas pero traído consigo otros nuevos como el problema N+1 o la pérdida de control del modelo relacional. jOOQ forma parte de una nueva generación de herramientas que puede sustituir o complementar a otras como Hibernate. Y después de haberlo usado considero que puede ser factible."
---

{{% post %}}

{{< logotype image="jooq.png" title="jOOQ" width="200" >}}

Con el auge de los lenguajes de programación orientados a objetos han surgido varias herramientas que intentan hacer que el trabajo de unir el mundo orientado a objetos del lenguaje que empleemos y el modelo relacional de las bases de datos sea más transparente, estas herramientas son conocidas como [Object Realtional Mapping][orm] (ORM). Una de las más conocidas y usada en la plataforma Java es [Hibernate][Hibernate]. Sin embargo, aunque facilitan el acceso a los datos no están exentas de problemas y están surgiendo nuevas alternativas para tratar de solventar algunos de ellos, una de ellas es [jOOQ][jooq].

Si hemos usado Hibernate sabremos que aunque este ampliamente usado facilitando la conversión entre el modelo relacional en base de datos y el modelo orientado a objetos del lenguaje Java también presenta problemas. Uno de los problemas es que al abstraer el acceso a base de datos no somos tan conscientes de las sentencias SQL que se envían a la base de datos provocando los problemas [N+1][blogbitix-26] y que la aplicación sea lenta, poco eficiente y sobrecargar la base de datos en el caso de realizar demasiadas consultas SQL. Otro problema es que cuando necesitamos realizar una consulta compleja o avanzada el [lenguaje HQL](https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#hql) no nos ofrezca todo lo que necesitamos haciendo que tengamos que escribir directamente la consulta en lenguaje SQL con lo que perdemos la validación del compilador y si usamos una funcionalidad específica de un motor de base de datos la independencia del mismo. También puede ocurrirnos que diseñamos los modelos para complacer al _framework_ de persistencia ORM.

jOOQ es una herramienta que facilita el acceso a la base de datos usando un enfoque diferente de los ORM, no trata de crear una abstracción sobre la base de datos relacional sino que pone el modelo relacional como elemento central de la aplicación en cuanto a la persistencia. Algunas de las características destacables de jOOQ son:

* La base de datos primero: los datos son probablemente lo más importante de una aplicación. En los ORM los modelos de objetos dirigen el modelo de base de datos, no siempre es sencillo (más) en bases de datos heredadas que no tienen la estructura necesaria usable por los ORMs. En jOOQ el modelo relacional dirige el modelo de objetos, para jOOQ el modelo relacional es más importante que el modelo de objetos.
* jOOQ usa SQL como elemento central: en jOOQ se pueden construir las SQLs usando una API fluida con la que el compilador puede validar la sintaxis, metadatos y tipos de datos. Se evitan y se detectan rápidamente los errores de sintaxis con la ayuda del compilador y con la ayuda de un IDE se ofrece asistencia de código que facilita el uso de la API. Está a un nivel bastante cercano al lenguaje SQL.
* SQL con tipado seguro: las sentencias se pueden construir usando código Java con la que el compilador validará el código y que los tipos de los datos usados sean los correctos, los errores los encontraremos en tiempo de compilación en vez de en tiempo de ejecución. jOOQ proporciona un DSL y una API fluida de fácil uso y lectura.
* Generación de código: jOOQ genera clases a partir de los metadatos (el modelo relacional) de la base de datos. Cuando se renombre una tabla o campo en base de datos generados los modelos el compilador indicará los errores de compilación. Si en algún momento hay que renombrar una columna de la base de datos deberemos modificar los modelos, jOOQ permite regenerar las clases Java de acceso a la base de datos y el compilador nos avisará de aquello que no esté sincronizado entre la base de datos y el código Java.
* _Multi-Tenancy_: permite configurar la base de datos a la que se accederá en desarrollo, pruebas y producción.
* _Active Records_: jOOQ puede generar el código de acceso a la base de datos a partir del esquema, estas clases emplean el [patrón Active Record](https://en.wikipedia.org/wiki/Active_record_pattern). La implementación de este patrón ya proporciona las operaciones CRUD (uno de los avances de Hibernate) con lo que no tendremos que escribirlas para cada uno de los modelos de la aplicación, nos ahorraremos mucho código. Este código que se genera es opcional, jOOQ puede usarse simplemente para generar las sentencias SQL y usar JDBC sin la abstracción de los _Active Records_.
* Estandarización: las bases de datos tienen diferencias en los dialectos SQL. jOOQ realiza transformaciones de expresiones SQL comunes a la correspondencia de la base de datos de forma que las SQLs escritas funcionen en todas las bases de datos de forma transparente, esto permite migrar de un sistema de datos sin cambiar el código de la aplicación. Este también era un avance proporcionado por los ORM, incluido Hibernate.
* Ciclo de vida de las consultas: proporciona llamadas o _hooks_ de forma que se puedan añadir comportamientos, por ejemplo para _logging_, manejo de transacciones, generación de identificadores, transformación de SQLs y más cosas.
* Procedimientos almacenados: los procedimientos almacenados son ciudadanos de primera clase y pueden usarse de forma simple al contrario de lo que sucede en los ORM. Para algunas tareas los procedimientos almacenados son muy útiles y más eficientes.

Los ORMs ofrecen como ventajas sobre el uso directo de JDBC la implementación de las operaciones CRUD, construir las SQLs con una API en vez de concatenando _Strings_ propensos a errores al modificarlos y la independencia del motor de base de datos usado pudiendo cambiar a otro sin afectar al código de la aplicación. La navegación de las relaciones es más explícita que en Hibernate y [obtener datos de múltiples tablas con jOOQ][blogbitix-109] diferente.

Si nos convencen estas características y propiedades de jOOQ podemos empezar leyendo la [guía de inicio](http://www.jooq.org/doc/3.6/manual/getting-started/tutorials/jooq-in-7-steps/) donde se comenta los primeros pasos para usarlo. La [documentación de jOOQ](http://www.jooq.org/doc/3.6/manual-single-page/) está bastante bien explicada pero no se comentan algunas cosas que al usarlo en un proyecto tendremos que buscar.

En el siguiente ejemplo mostraré como usar jOOQ y la configuración necesaria para emplearlo junto con [Spring][spring]. En la siguiente configuración de Spring usando únicamente código Java se construye un _DataSource_, un _Datasource_ con soporte de transacciones para el acceso a la base de datos, un [_ConnectionProvider_](http://www.jooq.org/javadoc/latest/org/jooq/ConnectionProvider.html) de jOOQ que usará el _DataSource_ para obtener las conexiones a la base de datos, con la clase [_Configuration_](http://www.jooq.org/javadoc/latest/org/jooq/Configuration.html) realizamos la configuración de jOOQ y finalmente [_DSLContext_](http://www.jooq.org/javadoc/latest/org/jooq/DSLContext.html) es el objeto que usaremos para construir las sentencias SQL.

{{< code file="AppConfiguration.java" language="java" options="" >}}

Una de las cosas que tendremos que resolver es que al generar código y usar el patrón _Active Record_, si lo usamos ya que podemos usar jOOQ para generar únicamente las sentencias SQL o en los casos que lo hagamos pudiendo combiar _Active Records_ para unos casos y sentencias SQL con JDBC para otros, puede que necesitemos incluir campos adicionales a los presentes en la base de datos que manejen cierta lógica en la aplicación, también puede que necesitemos incluir métodos de lógica de negocio adicionales. Para incluir estos datos y métodos tendremos que extender la clase _Active Record_ que genera jOOQ. En aquellos sitios de la aplicación que necesitemos usar esas propiedades y métodos adicionales deberemos transformar la instancia de la clase que usa jOOQ (_PostRecord_) por la clase que tenga esos datos adicionales (_AppPostRecord_). Para ello la API de la clase [Record](http://www.jooq.org/javadoc/3.6.x/org/jooq/Record.html) ofrece el método [_into_](http://www.jooq.org/javadoc/3.6.x/org/jooq/Record.html#into-java.lang.Class-) o [_from_](http://www.jooq.org/javadoc/3.6.x/org/jooq/Record.html#from-java.lang.Object-) como muestro en el código de _AppPostRecord_ a continuación. Esta es la solución que he usado en [Blog Stack][blogstack].

jOOQ genera automáticamente las clases que implementa el patrón _Active Record_ y dispondremos de los métodos CRUD heredados de la clase [Record](http://www.jooq.org/javadoc/3.6.x/org/jooq/Record.html).

{{< code file="AppPostRecord.java" language="java" options="" >}}

[Los desarrolladores de jOOQ abogan por la eliminación de capas](https://blog.jooq.org/2014/09/12/why-you-should-not-implement-layered-architecture/) en la arquitectura de la aplicación pero puede que aún preferimos desarrollar una capa que contenga las consultas a la base de datos que sea usada y compartida por el resto la aplicación para el acceso los datos, quizá más que una capa en este caso es una forma de organizar el código. Los _Active Records_ proporcionan algunos métodos de consulta pero probablemente necesitaremos más. En el siguiente ejemplo podemos ver como son las consultas con jOOQ. Si necesitamos métodos de búsqueda adicionales a los que por defecto jOOQ proporciona en Blog Stack he creado una clase [DAO](https://es.wikipedia.org/wiki/Data_Access_Object) por cada entidad de la base de datos. En el siguiente ejemplo se puede ver como se construyen las sentencias SQL con jOOQ usando su API fluida.

{{< code file="PostDAO.java" language="java" options="" >}}
{{< code file="PostDAOImpl.java" language="java" options="" >}}

Para usar el generador de código de jOOQ con [Gradle][gradle] debemos añadir la siguiente configuración al archivo de construcción del proyecto, este generador se conectará a la base de datos, obtendrá los datos de esquema y generará todas las clases del paquete [info.blogstack.persistence.jooq](https://github.com/picodotdev/blog-stack/tree/master/src/main/java/info/blogstack/persistence/jooq). Por ejemplo, puede que queramos usar [JodaTime][jodatime] en vez de las clases [Date](javadoc8:java/util/Date.html) y [Timesptamp](javadoc8:java/sql/Timestamp.html) de la API de Java al menos si no usamos aún [Java 8 y sus novedades][blogbitix-17].

{{< code file="build.gradle" language="groovy" options="" >}}

Otra alternativa con algunas similitudes a jOOQ es [JDBI][jdbi] pero en esta las consultas no tienen el soporte del compilador que ofrece jOOQ, otra es [Slick][slick] para [Scala][scala]. También tiene cierta similitud con [MyBatis][mybatis] que existe desde hace bastante tiempo aunque jOOQ ofrece más posibilidades.

En el [código fuente de Blog Stack][blogstack-git] está el código completo de uso de jOOQ, en el paquete [info.blogstack.persistence](https://github.com/picodotdev/blog-stack/tree/master/src/main/java/info/blogstack/persistence) están las clases relacionadas con la persistencia en una base de datos [H2][h2], usa Spring para los servicios y la transaccionalidad, en la clase [AppConfiguration](https://github.com/picodotdev/blog-stack/blob/master/src/main/java/info/blogstack/services/spring/AppConfiguration.java) se encuentra la definición de ambas cosas y la integración con jOOQ. En  la [versión 0.1](https://github.com/picodotdev/blog-stack/releases/tag/0.1) está la misma aplicación pero usando Hibernate.

Como comentan en su propio blog [usa ModelMapper y jOOQ para recuperar el control de tu modelo de dominio](https://blog.jooq.org/2013/08/06/use-modelmapper-and-jooq-to-regain-control-of-your-domain-model/) que probablemente no es nada menos que lo más importante de tu aplicación o negocio. Herramientas como jOOQ contribuyen a que haya [razones para seguir usando Java][blogbitix-81].

jOOQ está [licenciado](http://www.jooq.org/legal/licensing) de forma dual, [ASL](http://www.apache.org/licenses/LICENSE-2.0) para la versión _community_ que ofrece soporte para las bases de datos [MySQL][mysql], [PostgreSQL][postgresql], SQLite, H2 y alguna más y una licencia comercial que ofrece soporte para bases de datos como [Microsoft Access][microsoft-access], [Oracle][oracle-database] y [Microsoft SQL Server][microsoft-sqlserver].

{{< reference >}}
* [jOOQ][jooq]
* [ModelMapper][modelmapper]
* [Integración entre jOOQ y ModelMapper](http://modelmapper.org/user-manual/jooq-integration/)
* [Experiences with jOOQ](http://teonos.com/blog/java/development/2014/11/10/experiences-with-jOOQ.html)
* [Hibernate][hibernate]
* [Introducción a Gradle][elblogdepicodev-98]
* [Usar DateTime en Hibernate][elblogdepicodev-116]
{{< /reference >}}

{{% /post %}}
