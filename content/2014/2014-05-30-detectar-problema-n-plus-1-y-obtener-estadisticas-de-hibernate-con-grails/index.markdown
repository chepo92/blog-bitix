---
pid: 26
type: "post"
title: "Detectar problema N+1 y obtener estadísticas de Hibernate con Grails"
url: "/2014/05/detectar-problema-n-plus-1-y-obtener-estadisticas-de-hibernate-con-grails/"
date: 2014-05-30T20:30:00+02:00
updated: 2014-06-13T16:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:grails.svg"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="grails.svg" title1="Grails" width1="200" >}}

Una base de datos relacional guarda los datos de forma diferente al modelo orientado a objetos que utilizamos en lenguajes como [Java](https://www.oracle.com/us/technologies/java/overview/index.html), [C#](https://dotnet.microsoft.com/) o [Python](https://www.python.org/). Los [ORM (Object-relational mapping)](https://en.wikipedia.org/wiki/Object-relational_mapping) tratan de hacer una correspondencia entre los dos modelos, el relacional de las bases de datos y el orientado a objetos de los lenguajes. Una de las ventajas de usar en una aplicación un ORM para acceder a la base de datos es que podemos hacer una correspondencia entre los datos de una base de datos relacional y trabajar con esos datos utilizando el modelo orientado a objetos del lenguaje de programación que usemos.

Sin embargo, el ORM envía sentencias SQL para recuperar los datos de la base de datos relacional según vamos navegando con los métodos de acceso a otros objetos y sus relaciones. Depende de como el ORM haga las consultas para recuperar los datos de la base de datos relacional puede generar muchas SQL, producir un bajo rendimiento en la aplicación y una carga de trabajo considerable para la base de datos.

En los ORM es conocido el [problema N+1](https://stackoverflow.com/questions/97197/what-is-the-n1-selects-issue). Consiste en lo siguiente, supongamos que tenemos dos tablas relacionadas autores y libros, y que la relación entre estas dos tablas es de 1 a N, de modo que un autor puede tener varios libros y un libro ha sido escrito por un único autor. Para recuperar todos los autores necesitaríamos una consulta y si no hacemos una join con la tabla de libros para recuperar los libros de cada autor tendríamos que hacer otra consulta  con lo que tendríamos el problema N+1 al hacer un bucle sobre los autores (1 consulta para los autores y N para los libros de cada autor).

El problema está en que el ORM lanza las consultas de forma automática según necesita los datos de modo que si para un autor no tiene los libros lanza una SQL para recuperarlos, como programadores llamar a un método para acceder a los libros es muy cómodo y transparente para nosotros (trabajamos solo con objetos) pero hemos de ser conscientes de las consultas que lanza el ORM porque podemos producir una situación de N+1.

Para evitar el problema N+1 hemos de recuperar todos los datos haciendo una única consulta, haciendo una join entre las tablas autor y libro. En [Hibernate](http://hibernate.org/) podemos resolverlo con una consulta HQL como la siguiente:

{{< code file="hql.txt" language="plaintext" options="" >}}

O con una criteria en Grails:

{{< code file="Criteria.groovy" language="groovy" options="" >}}

Pero para saber en que sitios de nuestro código debemos establecer los métodos de búsqueda EAGER necesitamos detectar los problemas N+1, con la experiencia conoceremos donde se pueden producir, otros casos se nos pueden pasar por alto y necesitaremos detectarlos. Para detectar estos problemas N+1 o para determinar si una página es muy lenta porque hace muchas consultas a la base de datos Hibernate dispone de unas estadísticas mediante las cuales podemos conocer cuantas consultas select, update, insert, conexiones, y más datos por entidad y relación... se han lanzado por haber accedido a una página. Podemos acceder a las estadísticas de Hibernate mediante el objeto [SessionFactory](https://docs.jboss.org/hibernate/orm/4.3/javadocs/org/hibernate/SessionFactory.html) y el método [getStatistics](https://docs.jboss.org/hibernate/orm/4.3/javadocs/org/hibernate/SessionFactory.html#getStatistics%28%29), con ese objeto y método podemos obtener estadísticas globales y para cada una de las entidades persistidas por Hibernate.

En Grails podemos hacer un controlador y gsp que nos muestre esa información que podrían ser de la siguiente forma:

{{< code file="HibernateController.groovy" language="groovy" options="" >}}
{{< code file="index.gsp" language="plaintext" options="" >}}

Si además queremos ver las consultas HQL de Hibernate y parámetros que se están lanzando en cada acceso a una página podemos modificar el archivo Config.goovy y añadir la siguiente configuración en el apartado Log4j:

{{< code file="Config.groovy" language="groovy" options="" >}}

La implementación de appender para capturar las HQL que lanza grails es la siguiente:

{{< code file="HibernateAppender.java" language="java" options="" >}}
{{< code file="HibernateLogger.java" language="java" options="" >}}

El resultado es el siguiente:

{{< image
    gallery="true"
    image1="image:grails-hibernate-statistics.png" optionsthumb1="300x200" title1="Estadísticas de Hibernate en Grails" >}}

En la imagen se puede apreciar las consultas lanzadas y que parámetros se han empleado. El método doTest del controlador HibernateController cada vez que es ejecutado persiste una entidad de dominio Autor y posteriormente la borra lanzando una sentencia insert y otra delete, cada vez que es ejecutado las estadísticas cambian acordemente.

Obtener información de lo que sucede en la aplicación es importante y el _framework_ debería ayudar, también podemos [mejorar lo que ofrece Grails con una página de excepción más informativa][blogbitix-25]. En [Tapestry](http://tapestry.apache.org/) es más sencillo aún ya que incluyendo la dependencia de tapestry-hibernate ya se añade a la [página Dashboard y un apartado con estas estadísticas][blogbitix-28], pero esto último será tema para otro artículo.

{{< reference >}}
* [Página de excepción de Grails][blogbitix-25]
* https://stackoverflow.com/questions/11621495/how-can-i-obtain-grails-hibernate-l2-cache-statistics<br>
* https://stackoverflow.com/questions/2568507/how-to-log-sql-statements-in-grails<br>
* https://hibernate.atlassian.net/browse/HHH-3659
{{< /reference >}}

{{% /post %}}
