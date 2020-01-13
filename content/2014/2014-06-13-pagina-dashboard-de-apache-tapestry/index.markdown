---
pid: 28
type: "post"
title: "Página Dashboard de Apache Tapestry"
url: "/2014/06/pagina-dashboard-de-apache-tapestry/"
date: 2014-06-13T17:37:24+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.svg" title="Apache Tapestry" width="400" >}}

Con la versión 5.4 de Tapestry las [páginas PageCatalog, ServiceStatus e HibernateStaticstis](https://elblogdepicodev.blogspot.com.es/2012/08/paginas-pagecatalog-servicestatus-e.html) han sido unificadas en la página T5Dashboard por lo que ahora en una sóla página tendremos toda la información. Una de las características más importantes de Tapestry es ser muy informativo proporcionando mucha y descriptiva información, esto se nota con la página de [informe de error incluso para las peticiones ajax](https://elblogdepicodev.blogspot.com.es/2013/07/personalizar-la-pagina-de-informe-de-error.html), los mensajes de logging y con estás páginas de información de estado.

La página [T5Dashboard](http://tapestry.apache.org/5.4/apidocs/org/apache/tapestry5/corelib/pages/T5Dashboard.html) está incluida en el propio core de [Apache Tapestry](http://tapestry.apache.org/) y disponible en todas las aplicaciones en modo desarrollo y accediendo de forma local al servidor de aplicaciones. Si se incluye en la aplicación la dependencia tapestry-hibernate además en T5Dashboard podremos ver estadísticas de uso de Hibernate. La página T5Dashboard nos puede resultar muy útil ya que nos proporciona mucha información y alguna acción interesante.

{{< image
    gallery="true"
    image1="image:tapestry-dashboard-1.png" optionsthumb1="300x200" title1="Estado de la aplicación Tapestry" >}}

Como se ve en la imagen podemos ver las páginas disponibles, cargadas, cuanto tiempo llevó construirlas, que complejidad y por cuantos componentes están formadas. Y algo que nos resultará muy útil es provocar la acción de cargar todas las páginas quizá después de hacer un despliegue para evitar tiempos de inicialización en las primeras peticiones pero tan o más importante nos permitirá descubrir errores en los archivos tml de los componentes ¿cuantas veces te ha ocurrido que en un php, jsp, gsp, ... hasta que no se usa esa plantilla no descubres un error digamos "de compilación" (variable con nombre que no existe, atributo mal entrecomillado, ...) ? Seguramente como a mi, muchas. Los archivos de plantilla tml son xml válido con lo que si no están bien formados se nos notificará del error, nuevamente ¿te ha ocurrido alguna vez tener un php, jsp o gsp que no genera html bien balanceado? Pero también si se está usando un componente que no existe, varios componentes con el mismo nombre, ... . Aunque parezca que no estos tipos de errores se pueden producir con relativa facilidad tanto en desarrollo y con mayor peligro si tenemos un flujo de trabajo con varias ramas donde vamos mergeando los cambios de trunk a la rama que se despliega en producción y nos ocurren conflictos en los merges que tenemos que resolver manualmente con la posibilidad de cometer un error.

En otra sección también podemos ver el estado de los servicios que puede ser:

* Builtin: A servicio fundamentar que existe incluso antes de la creación del registro.
* Defined: El servicio está definido pero aún no ha sido referenciado.
* Virtual: El servicio ha sido referenciado (normalmente como injección de otro servicio) pero aún no ha sido hecho efectivo con una instancia del servicio. El hacerse efectivo ocurre con la primera invocación en el proxy del servicio.
* Real: El servicio se ha hecho efectivo: se ha instanciado, las dependencias han sido inyectadas, se ha decorado con interceptores y el totalmente operacional.

{{< image
    gallery="true"
    image1="image:tapestry-dashboard-2.png" optionsthumb1="300x200" >}}

Finalmente, en la sección HibernateStatistics podemos obtener un montón de datos que nos pueden servir para detectar situaciones anómalas en la aplicación como un gran número de sql que se lanzan en una página como podría ser en un problema de carga N+1 en una relación entre dos entidades, el estado de la cache de segundo nivel que nos permitirá optimizar las caches, la cache de queries, número de transacciones realizadas y otra gran cantidad de información.

{{< image
    gallery="true"
    image1="image:tapestry-dashboard-3.png" optionsthumb1="300x200" title1="Estadísticas de Hibernate en Tapestry" >}}

Para que hibernate genere estadísticas es necesario indica en el archivo hibernate.cfg.xml la propiedad hibernate.generate_statistics:

{{< code file="hibernate.cfg.xml" language="XML" options="" >}}

Y para activar la cache de segundo nivel añadir la propiedad del proveedor de cache (hibernate.cache.provider_class) y usar en las entidades la anotación @Cache, como se indica en la [documentación de hibernate](https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/ch06.html).

Está página de Tapestry es similar a [una que podemos crear en Grails con información similar][blogbitix-26].

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
