---
pid: 487
type: "post"
title: "El patrón Open Session in View, qué es, ventajas, problemas y alternativas"
url: "/2020/05/el-patron-open-session-in-view-que-es-ventajas-problemas-y-alternativas/"
date: 2020-05-29T16:00:00+02:00
updated: 2020-05-29T22:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:opensessioninview.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "En patrón _Open Session in View_ lo que hace es mantener abierta la conexión a la base de datos durante toda la petición a un servidor. Esto tiene la ventaja de que en cualquier momento es posible recuperar datos de la base de datos, incluso desde las vistas pero tiene inconvenientes ya que las conexiones a la base de datos son un recurso escaso. Si además durante la petición se hacen peticiones a otros servicios que añaden tiempo de procesamiento la aplicación es posible que tenga problemas de escalabilidad con muchos usuarios y peticiones durante un corto periodo de tiempo."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

La librería [Hibernate][hibernate] proporciona persistencia del modelo de objetos del lenguaje Java al modelo de las bases de datos relacionales de una forma sin que el programador necesite lanzar las consultas SQL directamente por lo general. Con Hibernate los objetos de las relaciones se cargan de los datos de las filas de la base de datos cuando son solicitadas si la relación es _lazy_ o al obtener el objeto en el modo _eager_.

El modo _lazy_ tiene la ventaja de que los datos de las relaciones solo se cargan si se necesitan pero tiene el inconveniente de producir más SQLs a la base de datos. El modelo _eager_ carga los datos con menos SQLs pero carga más datos de los necesarios si no se necesitan.

Para que el modo _lazy_ funcione se ha de mantener la conexión a la base de datos abierta para cargar los datos cuando se soliciten. Mantener la sesión y conexión de base de datos abierta es lo que define el patrón _Open Session in View_. Sin embargo, mantener la conexión abierta durante toda la petición incluida la parte de generación de la vista tiene inconvenientes, incluso llegando a considerar el patrón _Open Session in View_ un antipatrón que no se de debe usar.

### Qué es y como funciona

En este diagrama se aprecia su funcionamiento. La primera acción en una petición es abrir una sesión para obtener datos de la base de datos, lo que se traduce en apropiarse de una conexión a la base de datos. El flujo del programa procesa la petición invocando la lógica de la aplicación y empleando los diferentes servicios en las diferentes capas formadas por el controlador, servicio y DAO para el acceso a la base de datos. El último paso es generar el resultado que es devuelto al cliente, puede ser contenido HTML o un resultado en formato JSON si es un servicio REST. En este punto se accede de nuevo a la base de datos para recuperar las relaciones _lazy_ de los objetos que fueron devueltas por el servicio, esto es habitual en el caso de emplear un ORM como Hibernate o JPA.

{{< image
    gallery="true"
    image1="image:opensessioninview.png" optionsthumb1="650x450" title1="Diagrama del patrón open session in view"
    caption="Diagrama del patrón open session in view" source="vladmihalcea.com" >}}

### Las ventajas

Con el patrón _Open Session in View_ durante toda la petición se mantiene la conexión a la base de datos abierta de modo que al solicitar las relaciones de una entidad las excepciones [LazyInitializationException](https://docs.jboss.org/hibernate/stable/core/javadocs/org/hibernate/LazyInitializationException.html) de Hibernate no se producen en las relaciones cargadas en modo _lazy_. Sin mantener la conexión abierta todos los datos que se necesiten han de cargarse con antelación de lo contrario al acceder a las relaciones de un objeto provocará esa excepción _LazyInitializationException_. El modo _lazy_ permite solicitar los datos según se necesiten sin necesidad de hacerlo con antelación.

En Spring hay una variable de configuración con la que se aciva o desactiva un filtro que implement el patrón _Open Session in View_.

{{< code file="SpringJpaOpenSessionInView.properties" language="plaintext" options="" >}}

### Los problemas, por que se considera una mala práctica

El patrón _Open Session in View_ tiene varios problemas. Uno de ellos es que al mantener la sesión abierta durante toda la petición y permitir en todo momento acceso a la base de datos no se es consciente de las consultas que se lanzan más usando Hibernate que hace precisamente esto más fácil. El resultado es que hay que tener especial cuidado en no generar el problema 1+N donde se ejecuta una consulta para recuperar una lista de objetos y N para cargar una relación de cada uno de los objetos de la lista anteriores recuperados.

Estos problemas tienen solución en cierta medida con la anotación [@BatchSize](https://docs.jboss.org/hibernate/stable/orm/javadocs/org/hibernate/annotations/BatchSize.html) para recuperar listas de objetos en lotes y [FetchMode.SUBSELECT](https://docs.jboss.org/hibernate/stable/orm/javadocs/org/hibernate/annotations/FetchMode.html) para lanzar una consulta adicional que recupere los objetos de las relaciones. Su inconveniente es que es poco flexible ya que su uso con anotaciones afectan a todas las consultas.

El segundo problema es que la vista es capaz de generar consultas a la base de datos las cuales pueden producir excepciones y las vistas no suelen estar preparadas para manejar excepciones.

Además, las conexiones a la base de datos son un recurso escaso, más incluso que los _threads_ de modo que mantener abierta la conexión durante más tiempo limita la escalabilidad de una aplicación.

Establecer las consultas en modo [FetchType.EAGER](https://docs.jboss.org/hibernate/stable/orm/javadocs/org/hibernate/jpamodelgen/xml/jaxb/FetchType.html) para recuperar las relaciones cuanto antes aún no conociendo si se usarán los datos no es una solución ya que tampoco puede cambiarse a nivel de consulta. Por estas razones las asociaciones suelen configurarse en modo [FetchType.LAZY](https://docs.jboss.org/hibernate/stable/orm/javadocs/org/hibernate/jpamodelgen/xml/jaxb/FetchType.html).

### La alternativa

La alternativa al patrón _Open Session in View_ es usar objetos DTO para proporcionar a la vista todos los datos que necesite sin que esta al usar esos datos lance consultas. Esto obliga al controlador del patrón modelo-vista-controlador o [MVC][mvc] a conocer y recuperar de antemano los datos que necesite la vista.

Hibernate es una gran librería por la funcionalidad que ofrece al abstraer el modelo relacional del modelo orientado a objetos del lenguaje relacionar, tanto que es capaz de lanzar las consultas adecuadas a la base de datos relacional tanto en la lectura como en la escritura según las operaciones realizadas en los objetos.

Por otro lado Hibernate en la correspondencia que hace entre el modelo relacional y las entidades de objetos se cargan todos los datos de la entidad aunque muchos no se necesiten en la vista, lo que lo hace algo ineficiente en el acceso de lectura a la base de datos.

En el modelo DTO usando la lógica que recupera los datos ha de estar sincronizada con la lógica de la vista. Por ejemplo, si un dato en la vista solo es necesario dada cierta condición esa misma condición ha de estar en el código que del la vista, o en la vista ser suficiente la presencia del dato para mostrarlo.

Cada vista necesitará unos datos específicos de modo que serán necesarias consultas específicas para recuperar cada uno de los datos. Para el acceso en modo lectura y recuperar algunas de las consultas en vez de usar Hibernate se puede usar la librería [jOOQ][jooq] que proporciona una API en el lenguaje Java para la construcciones de consultas con comprobación de tipos proporcionado por el compilador.

### Conclusión

En muchas aplicaciones usar el patrón _Open Session in View_ con Hibernate no supone un gran problema y simplifica el código. Para aquellas aplicaciones que necesitan escalabilidad y soportar un gran número de usuarios concurrentes o hagan operaciones que impliquen operaciones de red se aconseja usar DTO en las vistas ya sean mapeando las entidades Hibernate recuperadas por el controlador a esos DTO con una librería específica para el propósito como [ModdelMapper][modelmapper] y recuperar únicamente los datos que necesita la vista usando librerías como jOOQ que ofrecen mayor control sobre las columnas de la base de datos datos recuperadas para reducir los datos recuperados de la base de datos a únicamente lo necesario.

* [Copiar datos de un tipo de objeto a otro con ModdelMapper][blogbitix-488]

{{% reference %}}
* [Why is Hibernate Open Session in View considered a bad practice?](https://stackoverflow.com/questions/1103363/why-is-hibernate-open-session-in-view-considered-a-bad-practice)
* [The OpenSessionInView antipattern](https://blog.frankel.ch/the-opensessioninview-antipattern/)
* [The Open Session In View Anti-Pattern](https://vladmihalcea.com/the-open-session-in-view-anti-pattern/)
* [A Guide to Spring’s Open Session In View](https://www.baeldung.com/spring-open-session-in-view)
{{% /reference %}}

{{% /post %}}
