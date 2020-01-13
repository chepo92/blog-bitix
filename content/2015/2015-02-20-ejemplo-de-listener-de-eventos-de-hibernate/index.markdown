---
pid: 68
type: "post"
title: "Ejemplo de listener de eventos de Hibernate"
url: "/2015/02/ejemplo-de-listener-de-eventos-de-hibernate/"
date: 2015-02-20T16:30:44+01:00
updated: 2015-02-21T23:30:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

En alguna ocasión puede que tengamos la necesidad de realizar alguna acción cuando una entidad es guardada en base de datos, actualizada, eliminada, cargada, ... . Algunos casos de uso pueden ser:

* Establecer la fecha de creación o de actualización del objeto cuando es persistido en base de datos.
* Cifrar un dato del objeto al ser persistido en base de datos.
* Proporcionar seguridad de modo que un usuario solo pueda modificar o acceder a los objetos a los que tenga acceso.
* Al persistir el objeto guardar en un campo el valor calculado resultado de una función.
* Cualquier otra restricción, cálculos o acciones.

Para realizar estas operaciones podemos hacerlas de varias formas, una puede ser usando _triggers_ de la base de datos disponibles en [Oracle](https://www.oracle.com/database/) y [PostgreSQL][postgresql]. Si usamos [Hibernate][hibernate] como librería ORM de persistencia en una aplicación el equivalente a los _triggers_ de BBDD es mediante un _listener_ que sea llamado al ocurrir ciertos eventos. En la clase [_EventType_](https://docs.jboss.org/hibernate/orm/4.3/javadocs/org/hibernate/event/spi/EventType.html) está la lista completa de los eventos que podemos recibir y la clase _listener_ que debemos implementar para recibir cada uno de los eventos. Esta es la lista de los eventos disponibles según los conceptos que usa Hibernate:

* AUTO_FLUSH
* CLEAR
* DELETE
* DIRTY_CHECK
* EVICT
* FLUSH
* FLUSH_ENTITY
* INIT_COLLECTION
* LOAD
* LOCK
* MERGE
* PERSIST
* PERSIST_ONFLUSH
* POST_COLLECTION_RECREATE
* POST_COLLECTION_REMOVE
* POST_COLLECTION_UPDATE
* POST_COMMIT_DELETE
* POST_COMMIT_INSERT
* POST_COMMIT_UPDATE
* POST_DELETE
* POST_INSERT
* POST_LOAD
* POST_UPDATE
* PRE_COLLECTION_RECREATE
* PRE_COLLECTION_REMOVE
* PRE_COLLECTION_UPDATE
* PRE_DELETE
* PRE_INSERT
* PRE_LOAD
* PRE_UPDATE
* REFRESH
* REPLICATE
* RESOLVE_NATURAL_ID
* SAVE
* SAVE_UPDATE
* UPDATE

Con estos eventos podemos ser notificados de muchas cosas que suceden internamente en Hibernate en algunos casos antes y/o después del evento. En JPA se dispone de varias anotaciones (@PreInsert, @PostInsert, ...) con las que podemos marcar un determinado método como _listener_ de un evento pero no funcionan si usamos únicamente Hibernate.

En este artículo explicaré como implementar un _listener_ de ejemplo que reciba parte de estos eventos usando solo Hibernate. Primeramente e importante, debemos tener en cuenta que el proceso como reacción a uno de estos eventos ha de ser muy ligero y tardar poco tiempo ya que algunos eventos son lanzados por cada instancia de entidad como consecuencia de operaciones muy frecuentes en una aplicación, si tardasen mucho o consumiesen mucha memoria o tiempo de procesador probablemente el rendimiento de la aplicación disminuiría notablemente.

Como se ve en la clase [EventType](https://docs.jboss.org/hibernate/orm/4.3/javadocs/org/hibernate/event/spi/EventType.html) cada evento tiene un _listener_ distinto, para evitar crear una clase diferente por cada _listener_ podemos emplear el [patrón de diseño _Adapter_](https://es.wikipedia.org/wiki/Adapter_%28patr%C3%B3n_de_dise%C3%B1o%29) de forma que implemente las diferentes interfaces en las que estamos interesados. La implementación de la clase _Adapter_ y una implementación de esta clase _Adapter_ si nos interesasen los eventos PRE_INSERT, PRE_UPDATE, PRE_DELETE, POST_INSERT, POST_UPDATE, POST_DELETE sería la siguiente:

{{< code file="HibernateEventAdapter.java" language="java" options="" >}}
{{< code file="ProductoEventAdapter.java" language="java" options="" >}}

Una vez que tenemos la clase que va a recibir los eventos para que Hibernate la use debemos crear un [Integrator](http://docs.jboss.org/hibernate/orm/4.3/javadocs/org/hibernate/integrator/spi/Integrator.html) que lo instanciará y la dará a conocer a Hibernate. En el siguiente código puede verse una implementación de un Integrator de Hibernate, en el se instancia el _listener_ y se asocia a los diferentes eventos. En este caso solo se crea un _listener_ pero perfectamente podríamos asociar varios _listeners_ al mismo evento:

{{< code file="HibernateIntegrator.java" language="java" options="" >}}
{{< code file="DummyService.java" language="java" options="" >}}

Finalmente, para que Hibernate conozca la existencia de este Integrator debemos crear un archivo que contenga el nombre completo de la clase _Integrator_. El archivo ha de estar en de un librería .jar en la ubicación _/META-INF/services/org.hibernate.integrator.spi.Integrator_ y disponible en el classpath. El contenido de este archivo para el ejemplo es:

{{< code file="Integrator" language="plaintext" options="" >}}

Con esto ya recibiremos los eventos cuando ocurran. En el ejemplo aparecerá en la consola los mensajes cuando se inserte, actualice o elimine una fila de base de datos. En las capturas de imagen se muestran las trazas de una inserción, una traza para la preinseción _Action: preInsert, Id: null_ donde se ve que la entidad no tienen identificativo asignado y otra traza después de la inserción _Action: postInsert, Id: 1_ donde la entidad ya tiene identificativo asignado y la sentencia SQL se ha ejecutado, como se ve en la captura los mensajes salen antes y después de ejecutarse la sentencia SQL que se envía a la base de datos.

{{< image
    gallery="true"
    image1="image:aplicacion.png" optionsthumb1="300x200" title1="Creando un registro en la base de datos"
    image2="image:consola.png" optionsthumb2="300x200" title2="Trazas de ejecución del listener" >}}

Otra implementación distinta a la expuesta en este artículo es con anotaciones tal y como hace JPA, podríamos hacer una implementación de _listener_ que busque una anotación en la entidad y llame a ese método cuando se produzca el evento. Depende de como  prefiramos organizar el código, si preferimos tener el código del _listener_ separado de la entidad o todo el código en la propia entidad.

Esto así puede servirnos pero si el _listeners_ es más complejo debamos hacer uso de un servicio de [Spring][spring], en el ejemplo mostrado se usa la clase _DummyService.java_ que es instanciada por _HibernateIntegrator.java_ e inyectada en la clase adaptador _ProductoEventAdapter.java_. En el siguiente artículo explicaré lo que debemos hacer para [crear un _listener_ de Hibernate que use servicios de Spring][blogbitix-68] e inyecte dependencias de otros servicios, de esta forma el listener o adaptador podrá usar todas las funcionalidades de los servicios disponibles en el contenedor IoC de Spring.

El [código fuente completo del ejemplo](https://github.com/picodotdev/elblogdepicodev/tree/master/PlugInTapestry) lo puedes encontrar en mi [repositorio de GitHub][github-picodotdev].

{{< reference >}}
* [Documentación hibernate](http://docs.jboss.org/hibernate/orm/4.3/manual/en-US/html_single/)
* [Interceptores y eventos](http://docs.jboss.org/hibernate/orm/3.6/reference/es-ES/html/events.html)
* [Special service registries](http://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html_single/#d5e2282)
* [Event Listener Registration](http://planet.jboss.org/post/event_listener_registration)
* [Listeners y reglas de negocio](http://cursohibernate.es/doku.php?id=unidades:06_objetos_validaciones:04_listeners)
{{< /reference >}}

{{% /post %}}
