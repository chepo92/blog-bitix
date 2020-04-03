---
pid: 244
type: "post"
title: "Portlets con el framework Apache Tapestry y Apache Pluto"
url: "/2017/07/portlets-con-el-framework-apache-tapestry-y-apache-pluto/"
date: 2017-07-07T23:30:00+02:00
updated: 2017-07-08T13:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
summary: "Los portales ofrecen una solución para los casos de uso de integración de aplicaciones, edición de contenido a modo de CMS, agregación de blogs, foros, colaboración entre personas, red social entre otros. La pieza fundamental de un portal en Java es un _portlet_. Desarrollar un _portlet_ usando la API directamente no es simple, algunos _frameworks_ que usaríamos para desarrollar aplicaciones y páginas web son usables para desarrollar _portlets_, Apache Tapestry es uno de ellos como muestro con un ejemplo en este artículo."
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.png" image2="apache-pluto.png" title2="Apache Pluto" width2="300" image3="java.svg" >}}

La API ofrecida de los _portlets_ se puede considerar de bajo nivel y para facilitar la tarea de su programación es posible emplear un _framework_ al igual que ocurre al programar una aplicación web con los _servlets_ utilizando el lenguaje Java. Aún así es importante conocer los conceptos subyacentes de los _portlets_ que están explicados de forma didáctica en el libro [Portlets in Action](https://amzn.to/2tzpbjL).

Explicado como [crear un _portlet_ directamente con su API][blogbitix-243] usaré el mismo ejemplo pero usando el _framework_ [Apache Tapestry][tapestry] que también es usable para realizar aplicaciones web pero para el que existe un [módulo para desarrollar _portlets_](https://github.com/got5/tapestry5-portlet) y una pequeña [documentación](http://got5.github.io/tapestry5-portlet/).

[Liferay][liferay] 7 debe usar algún mecanismo especial para cargar las clases no compatible con Tapestry por ello en este ejemplo usaré el contenedor de _portlets_ [Apache Pluto][apache-pluto]. Apache Pluto es la implementación de referencia para la API de los _portlets_, inicia el servidor significativamente más rápido que Liferay aunque no incorpora tantos _portlets_ listos para usar.

El libro [Portlets in Action](https://amzn.to/2tzpbjL) define portal de la siguiente manera traducida al español:

> Un portal es una colección de miniaplicaciones web llamadas _portlets_. Un portal soporta características como personalización, agregación de contenido o autenticación. Los _portlets_ actúan como aplicaciones web dentro del portal mostradas en ventanas donde cada ventana en una página del portal representa un _portlet_. El portal agrega la información y proporciona una vista consolidada al usuario.

El ejemplo consiste en un mensaje de saludo que incluye un nombre el cual se introduce con un formulario desde el mismo _portlet_. Los _portlets_ usando Apache Tapestry son muy similares a una aplicación web, con lo que gran parte del conocimiento es el mismo, pero en los que están a disposición varios servicios adicionales de la API de los _portlets_ como [PortletRequestGlobals](https://github.com/got5/tapestry5-portlet/blob/master/src/main/java/org/apache/tapestry5/portlet/services/PortletRequestGlobals.java) donde están agregados varios objetos relativos las peticiones y respuestas como [PortletRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletRequest.html) para la petición con [ActionRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ActionRequest.html), [EventRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/EventRequest.html),  [RenderRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/RenderRequest.html) y [ResourceRequest](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ResourceRequest.html), y  [PortletResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletResponse.html) para la respuesta con [ActionResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ActionResponse.html), [EventResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/EventResponse.html), [RenderResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/RenderResponse.html), [ResourceResponse](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/ResourceResponse.html), ... y la amplia colección de componentes reusables de toda aplicación con uno específico para enlazar páginas en un _portlet_, [PortletPageLink](https://github.com/got5/tapestry5-portlet/blob/master/src/main/java/org/apache/tapestry5/corelib/components/PortletPageLink.java). Apache Tapestry permite abstraerse en gran medida de la API subyacente de los _portlets_ y las diferencias con una aplicación web no serán muy significativas. Todos los conceptos conocidos para desarrollar aplicaciones y páginas web sirven prácticamente en su totalidad para desarrollar _portlets_.

Los [componentes usables](http://tapestry.apache.org/component-reference.html) en las plantillas de las páginas, salvo alguno adicional son los mismos que en una aplicación web. Unos 57 componentes listos para usar además de los propios y específicos de la aplicación.

Al igual que en el _framework_ están incluidos múltiples componentes el contenedor de dependencias que tiene integrado Tapestry ofrece muchos servicios que es posible inyectar en las páginas y en componentes nuevos y propios, también desarrollar nuevos servicios que necesiten los _portlets_.

Para hacer el ejemplo _Hola Mundo_ hay que definir dos páginas, una para mostrar el mensaje y otra para obtener un nombre, cada página se compone de una clase Java y una plantilla asociada que genera el HTML, ambos elementos son muy simples. El _portlet_ hará uso del mecanismo de preferencias proporcionado por el portal con la clase [PorletPreferences](https://portals.apache.org/pluto/portlet-3.0-apidocs/javax/portlet/PortletPreferences.html) y que se encarga de persistir en su propia base de datos para obtener y guardar valores en este caso el nombre usado en el mensaje. El _portlet_ usa un formulario que envía el nombre donde se utilizan los componentes [Form](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Form.html), [Label](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Label.html) y [TextField](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/TextField.html).

{{< code file="Index.java" language="java" options="" >}}
{{< code file="Index.tml" language="html" options="" >}}

{{< code file="preferences-Index.java" language="java" options="" >}}
{{< code file="preferences-Index.tml" language="html" options="" >}}

{{< code file="AppPortletModule.java" language="java" options="" >}}

El resto son varios archivos descriptores necesarios entre los que está el típico _web.xml_ de las aplicaciones web Java y el descriptor específico de los _portlets_ _portlet.xml_.

{{< code file="portlet.xml" language="XML" options="" >}}
{{< code file="web.xml" language="XML" options="" >}}

Con Apache Tapestry están a nuestra disposición todas las facilidades de un _framework_ de más alto nivel que la API de los _portlets_, con la API de los _portlets_ accesible si es necesaria, altamente productivo y con el que reutilizaremos en otros _portlets_ o proyectos los componentes desarrollados con una librería de componentes.

Construido el _portlet_ con una tarea de [Gradle][gradle] el _portlet_ se despliega copiando el archivo _war_ al directorio de despliegue de los _portlets_ de Apache Pluto, en _webapps_. Una vez desplegado accediendo a la página de administración se configuran los _portlets_ que incluye cada página. El usuario y contraseña para iniciar sesión en Apache Pluto es _pluto_ para el usuario y _pluto_ para la contraseña.

{{< image
    gallery="true"
    image1="image:pluto-admin.png" optionsthumb1="300x250" title1="Página de administración de portlets de Apache Pluto"
    image2="image:pluto-login.png" optionsthumb2="300x250" title2="Inicio de sesión de Apache Pluto"
    caption="Páginas de administración y sesión de Apache Pluto" >}}

Insertado el _portlet_ en una página y accediendo a ella el _portlet_ muestra el mensaje que emite y seleccionando la opción _edit_ acceder a la página de preferencias acceder a la página que muestra el formulario y permite cambiar el mensaje. Este es el resultado del _portlet_ desplegado en Apache Pluto.

{{< image
    gallery="true"
    image1="image:tapestry-portlet.png" optionsthumb1="300x250" title1="Porlet con Apache Tapestry en Apache Pluto"
    image2="image:tapestry-portlet-preferences.png" optionsthumb2="300x250" title2="Página de preferencias del portlet" >}}
{{< image
    gallery="true"
    image3="image:tapestry-portlet-name.png" optionsthumb3="300x250" title3="Portlet usando un dato almacenado en las preferencias"
    caption="Porlet con Apache Tapestry en Apache Pluto" >}}

Para conocer más sobre los _portlets_ el libro [Portlets in Action](https://amzn.to/2tzpbjL) es una buena fuente de documentación.

{{< amazon
    linkids="6d736075105602e7c318919a1c81609d"
    asins="1935182544" >}}

Descargado y descomprimido el [binario de Apache Pluto](https://portals.apache.org/pluto/download.html) para inicia con el comando `startup.sh`. Apache Pluto es en realidad un servidor [Apache Tomcat][tomcat] con las adiciones para proporcionarle la funcionalidad de portal en la dirección _http\://localhost:8080/pluto_.

{{< code file="build.gradle" language="groovy" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/TapestryPortlet" command="./pluto-3.0.0/bin, ./gradlew build" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Apache Tapestry Portlet](https://github.com/got5/tapestry5-portlet)
* [Documentación Apache Tapestry Portlet](http://got5.github.io/tapestry5-portlet/)
{{< /reference >}}

{{% /post %}}
