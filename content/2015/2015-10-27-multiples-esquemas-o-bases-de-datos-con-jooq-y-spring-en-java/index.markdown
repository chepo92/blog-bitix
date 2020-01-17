---
pid: 106
type: "post"
title: "Múltiples esquemas o bases de datos con jOOQ y Spring en Java"
url: "/2015/10/multiples-esquemas-o-bases-de-datos-con-jooq-y-spring-en-java/"
date: 2015-10-27T19:00:00+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["jooq"]
summary: "Aún en las aplicaciones monolíticas que comparten una única base de datos tratamos de dividirla en varios servicios que manejen cierto nicho de información con la intención de que un cambio en una parte sea transparente para las otras partes. Cada servicio de la aplicación monolítica podría potencialmente convertirse en un microservicio y en este caso para que cada micoservicio tenga un ciclo de vida independiente compartir la base de datos es algo a evitar. Incluso en las aplicaciones monolíticas podemos querer guardar cada nicho de información en su propio esquema para evitar acoplamiento entre las diferentes partes o también como forma de tener varios servidores de bases de datos y escalar la aplicación en cierta forma. En estos casos necesitaremos que la aplicación acceda a varios esquemas o bases de datos simultáneamente, con jOOQ y Spring es bastante sencillo."
---

{{% post %}}

{{< logotype image="java.svg" >}}

En el libro [Building Microservices](https://amzn.to/35lNGzX) se pone de manifiesto que cada microservicio gira alrededor de un concepto que denomina _seam_, nicho o área de negocio. Este _seam_ es el nicho de información que va a manejar el microservicio. Para hacer que los múltiples microservicios sean independientes y tengan su propio ciclo de vida este nicho de información se guarda en una base de datos o esquema propio de cada uno de modo que un cambio en el sistema en que guarda la información no afecte a otros microservicios como ocurriría si compartiesen la base de datos. Si un microservicio necesita información de otro la solicita mediante una API ya sea [REST][rest], [usando Apache Thift][blogbitix-72], [gRPC][grpc] o de otro tipo evitando el acoplamiento a través de la base de datos y evitando que un microservicio conozca detalles internos de otro.

Imaginemos el caso de una empresa dedicada al comercio electrónico que ofrece productos a través de internet, un nicho de información podría ser el inventario formado por los productos ofrecidos y sus existencias, otro podría ser las compras. Los nichos podrían ser otros distintos, más numerosos o incluso los comentados más subdivididos, si una aplicación o proceso necesita acceder a todos estos nichos de información simultáneamente o tenemos una aplicación monolítica pero queremos tener cada nicho de información en varios esquemas o bases de datos, con [jOOQ][jooq] y [Spring][spring] podemos acceder simultáneamente a múltiples esquemas o bases de datos de una forma bastante sencilla. Es importante tener en cuenta que con varios esquemas podremos mantener la integridad referencial de los datos a través de las claves externas, con varias bases de datos no.

Siguiendo el ejemplo de la empresa expuesta tendríamos dos bases de datos: _inventory_ y _purchases_. Podemos tener un servicio que sea _InventoryService_ y otro servicio que sea _PurchasesService_ que contengan la lógica de negocio de cada área de negocio.

{{< code file="InventoryService.java" language="java" options="" >}}
{{< code file="DefaultInventoryService.java" language="java" options="" >}}

{{< code file="PurchasesService.java" language="java" options="" >}}
{{< code file="DefaultPurchasesService.java" language="java" options="" >}}

Al realizarse una compra a través del servicio _PurchasesService_ se ha de modificar el inventario del producto cosa que no se hace en el propio servicio de compras sino que se llama al servicio _InventoryService_ para que haga lo que deba, en el ejemplo modificar el inventario pero en un futuro podría ser enviar además una notificación o correo electrónico indicando que el _stock_ es bajo si cae por debajo de determinado número, el servicio de compras no debe conocer nada de esto ya que el inventario no forma parte de su nicho de información. En el ejemplo es una llamada usando un método de una clase pero podría ser una llamada a una <abbr title="Application Programming Interface">API</abbr> <abbr title="Representational State Transfer">REST</abbr> o <abbr title="Remote Procedure Call">RPC</abbr> si realmente fueran microservicios.

Las sencillas clases _Item_ y _Purchase_ generadas con jOOQ implementan las siguientes interfaces:

{{< code file="IItem.java" language="java" options="" >}}
{{< code file="IPurchase.java" language="java" options="" >}}

El acceso a una base de datos usando jOOQ se consigue a través de la clase [DSLContext](http://www.jooq.org/javadoc/latest/org/jooq/DSLContext.html), cada servicio recibe uno diferente que debemos definir en el contenedor de dependencias de Spring. Si fuesen dos bases de datos diferentes realmente debería haber definidos dos _bean_ _DataSource_ uno para cada servicio pero solo hay uno porque en el ejemplo se usa la base de datos [H2][h2] y se accede no con un servidor sino al fichero directamente. También en el ejemplo realmente no son necesarios dos (uno para cada servicio) _TransactionManager_, _TransactionAwareDataSourceProxy_, _ConnectionProvider_, _Config_ y _DSLContext_ pues solo hay una base de datos pero por mostrar más fielmente como sería el caso siendo dos bases de datos completamente diferentes lo he puesto así.

{{< code file="AppConfiguration.java" language="java" options="" >}}

Podemos crear la base de datos y los dos esquemas con una tarea de [Gradle][gradle] y con [Liquibase][liquibase], con el comando `./gradlew updateDatabase`, a continuación solo una parte del [archivo _build.gradle_ completo](https://github.com/picodotdev/blog-ejemplos/blob/master/Multidatabase/build.gradle) y los archivos XML de actualización de los esquemas.

{{< code file="build-liquibase.gradle" language="groovy" options="" >}}
{{< code file="inventory-changelog.xml" language="XML" options="" >}}
{{< code file="purchases-changelog.xml" language="XML" options="" >}}

{{< image
    gallery="true"
    image1="image:basededatos.png" optionsthumb1="300x200" title1="Base de datos con varios esquemas"
    caption="Base de datos con varios esquemas, inventory y purchases" >}}

Como en jOOQ la fuente de la verdad es la base de datos los modelos se generan a partir de ella usando otra tarea de Gradle, generará las clases con las que trabajaremos en la aplicación con el comando `./gradlew generateModels`. Las clases son las del paquete [io.github.picodotdev.blogbitix.multidatabase.jooq](https://github.com/picodotdev/blog-ejemplos/tree/master/Multidatabase/src/main/java/io/github/picodotdev/blogbitix/multidatabase/jooq).

{{< code file="build-jooq.gradle" language="groovy" options="" >}}

Este sería el programa de ejemplo iniciado con [Spring Boot][spring-boot] que usa ambos servicios, el de inventario y el de compras, creando un producto y haciendo una compra junto con su salida en la terminal. Ejecutándolo repetidamente con `./gradlew run` veremos aumenta el número de productos y compras guardados en cada tabla de los dos esquemas.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}
{{< asciinema id="28856" caption="Ejecución del ejemplo multidatabase" >}}

Si quieres obtener más información sobre varias de las herramientas como jOOQ, Liquibase, Gradle o Spring Boot que forman en el momento de escribir este artículo el actual estado del arte en Java puedes leer los diferentes artículos que he he escrito sobre ellos de forma específica:

* [jOOQ][blogbitix-82]
* [Liquibase][elblogdepicodev-155]
* [Gradle][elblogdepicodev-98]
* [Spring Boot][blogbitix-103]

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/Multidatabase) puedes descargarlo del repositorio de ejemplos alojado en [GitHub][github].

{{% /post %}}
