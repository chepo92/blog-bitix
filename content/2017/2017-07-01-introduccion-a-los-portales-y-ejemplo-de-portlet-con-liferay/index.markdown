---
pid: 243
type: "post"
title: "Introducción a los portales y ejemplo de portlet con Liferay"
url: "/2017/07/introduccion-a-los-portales-y-ejemplo-de-portlet-con-liferay/"
aliases: ["/2017/07/portales-con-liferay-y-ejemplo-de-portlet/"]
date: 2017-07-01T12:00:00+02:00
updated: 2017-07-08T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Muchas organizaciones usan portales para mantener su presencia en internet. Los portales son herramientas muy versátiles que incluyen la gestión de contenidos y flujo de trabajo para publicarlo, foros, blog, ... Liferay es uno de los más conocidos que usa la plataforma Java. La unidad básica funcional de un portal es un _portlet_ que en ciertos aspectos son similares en otros diferentes a lo que son los _servlets_ en las aplicaciones web Java."
---

{{% post %}}

{{< logotype image1="java.svg" image2="liferay.svg" title2="Liferay" width2="200" >}}

Los portales son una especialización de un sitio web que presenta información diversa de una forma integrada y uniforme. Suelen aplicarse cuando una entidad tiene necesidades de presentar información según el usuarios autenticado, su rol, los usuarios necesitan colaborar o se necesita integrar información de múltiples fuentes. Son usados por entidades públicas como gobiernos, ayuntamientos y también por corporaciones de tamaño mediano y grande.

Algunos de sus casos de uso son:

* [Plataforma web](https://web.liferay.com/es/products/what-is-a-portal/web-platform)
* [Sistema de gestión de contenidos](https://web.liferay.com/es/products/what-is-a-portal/enterprise-cms)
* [Plataforma de integración](https://web.liferay.com/es/products/what-is-a-portal/integration-platform)
* [Plataforma de colaboración](https://web.liferay.com/es/products/what-is-a-portal/collaboration-platform)
* [Plataforma de aplicaciones sociales](https://web.liferay.com/es/products/what-is-a-portal/social-apps-platform)

Uno de los servidores de portales más destacados y usados es [Liferay][liferay] aunque no es el único siendo [Apache Pluto][apache-pluto] el servidor de referencia. En lo poco que los he probado Liferay comparado con Apache Pluto el primero tarda bastante más en iniciarse, se nota más lento y me ha dado problemas al usar el _framework_ [Apache Tapestry][tapestry] para desarrollar un _portlet_, sin embargo, Liferay incorpora más [_portlets_](https://es.wikipedia.org/wiki/Portlet) con multitud de funcionalidades, es más usado y solicitado en ofertas de trabajo. Tanto Liferay como Apache Pluto implementan la [especificación de los _portlets_](https://jcp.org/aboutJava/communityprocess/edr/jsr362/index2.html) de Java que son la pieza básica funcional de un portal.

{{< image
    gallery="true"
    image1="image:inicio.png" optionsthumb1="300x200" title1="Página inicial de Liferay" >}}

Liferay es el contenedor de _portlets_ y proporciona un entorno de ejecución similar a lo que los contenedores de _servlets_ como [Tomcat][tomcat] proporcionan para los _servlets_. Las similitudes y diferencias entre un _servlet_ y un _portlet_ son las siguientes:

* Los _portlets_ son gestionados por un contenedor.
* Su ciclo de vida está gestionado por el contenedor.
* Generan contenido dinámico.
* Interactúan con el cliente mediante peticiones y respuestas.

Y se diferencia en que:

* Los _portlets_ generan únicamente un fragmento de la página web.
* No están asociados directamente a una URL.
* No pueden generar contenido arbitrario, si se solicita text/html los _portlets_ deben generar text/html.

El contenedor de _portlets_ proporciona funcionalidades como:

* Almacenamiento persistente para las preferencias.
* Procesamiento de solicitudes.
* Modos de los _portlets_.
* Estado de la ventana o fragmento.
* Información de usuario,

[Liferay incluye más de 60 _portlets_](https://web.liferay.com/es/community/wiki/-/wiki/Main/Liferay+Portlets) listos para usar que cumplen las funciones de <abbr title="Content Management System">CMS</abbr>, foros, blogs, agregador de blogs, wiki, calendario, encuestas, anuncios, herramientas sociales, de comercio electrónico, integración de contenido de sistemas externos, geolocalización, tiempo, administración, gestión de flujo de trabajo y [otros muchos más ofrecidos en el marketplace](https://web.liferay.com/marketplace).

Desde la [página de descargas](https://www.liferay.com/es/downloads) se puede obtener la edición para la comunidad de Liferay además de otros productos eligiendo la versión deseada y en la [red para desarrolladores](https://dev.liferay.com/es/home) obtener documentación y material de referencia. Una vez descargado el archivo de la distribución de Liferay y descomprimido se inicia con el comando ubicado en _tomcat-8.0.32/bin/startup.sh_. En el archivo _tomcat-8.0.32logs/catalina.out_ se emiten las trazas y mensajes del servidor. Iniciado Liferay se presenta una página de configuración, se han de aceptar los términos y condiciones e iniciar sesión con el usuario creado en la primera página de configuración.

{{< image
    gallery="true"
    image1="image:configuracion.png" optionsthumb1="300x200" title1="Configuración básica de Liferay" >}}

Para añadir un _portlet_ propio a Liferay hay que acceder al _Panel de control > Aplicaciones > Gestor de aplicaciones_ y pulsar la opción cargar ubicada en la parte superior derecha de la página. En la salida del servidor aparecerán varias trazas relativas al despliegue del _portlet_.

{{< image
    gallery="true"
    image1="image:gestor-de-aplicaciones.png" optionsthumb1="300x200" title1="Gestor de aplicaciones"
    image2="image:instalar-aplicacion.png" optionsthumb2="300x200" title2="Instalar aplicación" >}}

Los _portlets_ se distribuyen por lo general como archivos de aplicaciones web _.war_ con varios descriptores adicionales con información que usa Liferay para el despliegue del _portlet_.

En el siguiente ejemplo comentaré cómo crear un _portlet_ Hola Mundo sin ayuda de ningún _framework_ como [Spring][spring] o Apache Tapestry aunque Liferay proporciona ayuda y documentación para desarrollarlos con [Liferay MVC Portlet](https://dev.liferay.com/es/develop/tutorials/-/knowledge_base/7-0/liferay-mvc-portlet) o [Spring MVC](https://dev.liferay.com/es/develop/tutorials/-/knowledge_base/7-0/spring-mvc).

El archivo descriptor principal es _portlet.xml_ donde se describen los _portlets_ de la aplicación indicando por ejemplo su nombre, la clase que lo implementa o los modos que soporta, otros archivos descriptores son _web.xml_, _liferay-portlet.xml_ y _liferay-display.xml_ con unas propiedades exclusivas de Liferay indicando el icono y la categoría en la que ubicar el _portlet_ en la paleta de _portlets_.

{{< code file="portlet.xml" language="XML" options="" >}}
{{< code file="web.xml" language="XML" options="" >}}
{{< code file="liferay-portlet.xml" language="XML" options="" >}}
{{< code file="liferay-display.xml" language="XML" options="" >}}

Un _portlet_ es una clase Java que extiende de [GenericPortlet](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html). En el caso del ejemplo es muy sencillo ya que solo emite un mensaje usando una preferencia de configuración que Liferay se encarga de persistir, tiene un modo de edición y procesa una acción para cambiar el valor de una preferencia que se utiliza al emitir el mensaje.

Los _portlets_ con sus diferencias funcionales con los _servlets_ tienen muchas similitudes y una API con clases equivalentes a los _servlets_. Así la clase principal de la que hay que heredar para crear un portlet es GenericPortlet o implementar la interfaz [Portlet](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/Portlet.html). Las peticiones en los _portlets_ siguen una serie de fases que se van ejecutando en el siguiente orden _ActionPhase_, _EventPhase_, _HeaderPhase_ y _RenderPhase_. Para los recursos como imágenes o documentos hay una fase específica _ResourcePhase_.

{{< image
    gallery="true"
    image1="image:portlets-phase-model.png" optionsthumb1="300x200" title1="Fases del ciclo de vida de una petición de un portlet"
    image2="image:portlet-lifecycle-methods.png" optionsthumb2="300x200" title2="Métodos de ciclo de vida de un portlet"
    caption="Fases y métodos del ciclo de vida de un portlet" >}}

Para cada una de estas fases en la API de los _portlets_ hay un método específico que son [processAction](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#processAction(javax.portlet.ActionRequest,%20javax.portlet.ActionResponse)), [procesEvent](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#processEvent(javax.portlet.EventRequest,%20javax.portlet.EventResponse)), [renderHeaders](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#renderHeaders(javax.portlet.HeaderRequest,%20javax.portlet.HeaderResponse)) y [render](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#render(javax.portlet.RenderRequest,%20javax.portlet.RenderResponse)). Los _portlets_ poseen modos que se visualizan con los métodos [doEdit](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#doEdit(javax.portlet.RenderRequest,%20javax.portlet.RenderResponse)), [doHelp](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#doHelp(javax.portlet.RenderRequest,%20javax.portlet.RenderResponse)) y [doView](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/GenericPortlet.html#doView(javax.portlet.RenderRequest,%20javax.portlet.RenderResponse)) o el correspondiente anotado con [@RenderMode](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/RenderMode.html). Cada uno de esos métodos para cada una de las fases reciben dos parámetros uno que representa a la petición que heredan de [PortletRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletRequest.html) y son [ActionRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ActionRequest.html), [ClientDataRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ClientDataRequest.html), [EventRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/EventRequest.html), [HeaderRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/HeaderRequest.html), [RenderRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/RenderRequest.html) y [ResourceRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ResourceRequest.html). Los objetos que representan a las respuestas heredan de [PortletResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletResponse.html) y son [ActionResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ActionResponse.html), [EventResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/EventResponse.html), [HeaderResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/HeaderResponse.html), [MimeResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/MimeResponse.html), [RenderResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/RenderResponse.html), [ResourceResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ResourceResponse.html) y [StateAwareResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/StateAwareResponse.html).

La interfaz [PorletPreferences](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletPreferences.html) obtenida con el método [getPreferences()](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletRequest.html#getPreferences()) de una clase que herede de _PortletRequest_ también es importante ya que con ella el _portlet_ es capaz de persistir incluso entre reinicios del servidor los datos relativos a su funcionamiento que desee aunque esto no sustituye a la utilización de una base de datos como [PostgreSQL][postgresql] o [MongoDB][mongodb]. Los _portlets_ también tienen el equivalente de filtros de los _servlets_ con la clase [PortletFilter](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/filter/PortletFilter.html) y el equivalente de sesión con la clase [PortletSession](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletSession.html).

{{< code file="HolaMundoPortlet.java" language="java" options="" >}}

Usando como herramienta de construcción del proyecto [Gradle][gradle] el archivo _.war_ a desplegar el Liferay se genera con la tarea _build_ en el directorio _build/libs/HolaMundoPortlet-0.1.war_. Esta archivo hay que desplegarlo en Liferay para posteriormente incluirlo en alguna página, se visualice el contenido que genera y se pueda interactuar con él.

{{< image
    gallery="true"
    image1="image:anadir-portlet.png" optionsthumb1="300x200" title1="Añadir portlet"
    image2="image:inicio-hola-mundo-portlet.png" optionsthumb2="300x200" title2="Portlet HolaMundo" >}}
{{< image
    gallery="true"
    image1="image:preferencias.png" optionsthumb1="300x200" title1="Preferencias del portlet"
    image2="image:preferencias-usuario.png" optionsthumb2="300x200" title2="Portlet HolaMundo con preferencias" >}}

Desarrollar un _portlet_ con su API directamente es una tarea costosa si la funcionalidad o complejidad del _portlet_ es mucha. Al igual que en Java no se suele utilizar la API de los _servlets_ directamente, aunque es la API subyacente, y se suele utilizar alguno de los muchos _frameworks_ disponibles para los _portlets_ también hay varios _frameworks_ entre los que elegir. En el artículo [_Portlets_ con el framework Apache Tapestry y Apache Pluto][blogbitix-244] muestro un ejemplo usando un _framework_ de alto nivel, orientado a componentes y altamente productivo.

Aunque el libro [Liferay in Action](https://amzn.to/2sc1tWN) o [Portlets in Action](https://amzn.to/2tzpbjL) no están actualizados a la última versión sirven para conocer los conceptos básicos de su funcionamiento, explican la teoría e incluyen ejemplos de código de como crear un _portlet_.

{{< amazon
    linkids="6d736075105602e7c318919a1c81609d,a4fdbe9a2a0c68685cfc8119f253125b"
    asins="1935182544,193518282X" >}}

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoPortlet" command="./gradlew build" >}}

{{< reference >}}
* [Web portal](https://en.wikipedia.org/wiki/Web_portal)
* [Portlet](https://es.wikipedia.org/wiki/Portlet)
* [¿Qué es un Portal?](https://web.liferay.com/es/products/what-is-a-portal/web-platform)
* [Portlet Specification 3.0](https://jcp.org/aboutJava/communityprocess/edr/jsr362/index2.html)
* [Portlets 3.0 API](https://portals.apache.org/pluto/portlet-3.0-apidocs/)
{{< /reference >}}

{{% /post %}}
