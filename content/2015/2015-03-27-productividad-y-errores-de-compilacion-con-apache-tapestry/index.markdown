---
pid: 73
type: "post"
title: "Productividad y errores de compilación con Apache Tapestry"
url: "/2015/03/productividad-y-errores-de-compilacion-con-apache-tapestry/"
date: 2015-03-27T19:13:12+01:00
updated: 2015-12-11T22:30:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.png" image2="java.svg" >}}

Hace ya unos años comentaba [varios motivos para elegir Apache Tapestry][elblogdepicodev-motivos-para-elegir-apache-tapestry] como _framework_ para desarrollar una aplicación o página web. Entre las varias razones comentaba la productividad como característica destacada. Uno de los motivos de esta productividad era por la alta reutilización de código que se puede conseguir al usar los componentes múltiples veces en un mismo proyecto o en diferentes proyectos creando una librería de componentes como comento más detalladamente en el [libro PugIn Tapestry][blogbitix-12]. Otra parte de la productividad que comentaba más ligeramente era poder detectar de forma rápida errores de compilación no solo en el código Java a través del IDE sino porque con [Tapestry][tapestry] es posible detectar errores de compilación en todas las plantillas tml que generan el html fácil y rápidamente con un botón sin tener que probar manualmente toda la funcionalidad. El tema de este artículo es mostrar más en detalle como detectar los errores de compilación en las vistas con este _framework_.

Por «errores de compilación» me refiero a ese tipo de erorres que hace el código ni siquiera pueda ser interpretado correctamente por el computador, puede ser porque falta un _import_, un nombre de variable, propiedad o método mal puesto y que no existe... Poder detectar errores de compilación fácilmente en toda la aplicación es tremendamente útil y evitará que lleguen a producción con las consiguientes molestias para los usuarios y que posteriormente tengamos que dedicar tiempo a corregirlos cuando hemos perdido el contexto de las modificaciones hechas. También tendremos más seguridad de que no introducimos errores al hacer _refactorizaciones_ importantes en el código. Los errores de compilación suelen ser fáciles y rápidos de corregir pero igualmente pueden impedir totalmente el uso de la aplicación. Cuando antes detectemos los errores más fácilmente los corregiremos y más productivos seremos ya que evitaremos corregirlos en un momento posterior en que costará más tiempo y esfuerzo, además de tener que realizar un nuevo despliegue con los cambios corregidos que dependiendo del tiempo que nos lleve puede suponer otro problema.

La errores de compilación no depende de escribir pocas lineas de código o ahorarnos pulsar unas cuantas teclas, mi experiencia con los lenguajes dinámicos como [Groovy][groovy] y el _framework_ [Grails][grails] es que se producen ocasionales pero constantes errores de compilación en el código Groovy y en las plantillas de vistas gsp. En parte estos errores se pueden detectar teniendo teses pero la realidad es que en pocos proyectos hay una cobertura del 100% del código sobre todo para esas partes en las que «seguro no se dan errores» o poco relevantes que no merece la pena hacerlos, tener una cobertura completa del código exige tener muchos teses y datos de prueba que los ejerciten para pasar por todas las combinaciones de condiciones y bucles, para detectar errores en las vistas también deberíamos hacer teses y esto ya no suele ser tan habitual hacerlo. Y de forma similar esto se puede extender a algunas otras combinaciones de lenguajes y _frameworks_ web por sus características similares. Si en el proyecto solo participa una persona o el proyecto es pequeño como suele ocurrir en las pruebas de concepto con las que solemos divertirnos el número de errores no debería ser muy elevado ya que el código estará bajo control por esa persona pero cuando en un proyecto real en el que participan unos cuantos programadores haciendo continuamente modificaciones el número de errores de compilación pueden producirse y se producirán en producción. También hay que tener mucho cuidado en _merges_ con conflictos, reemplazos grandes o proyectos grandes con muchos archivos ya que en uno complicado es fácil dejar un código que produce errores de compilación, en un lenguaje dinámico más por no tener la ayuda del compilador que nos avise de los mismos, tambien hay que resistir la tentación de hacer cambios sin probarlos confiando en que no introduciremos errores.

Con Java y un IDE podremos detectar los errores de compilación que en un lenguaje dinámico solo observaremos en tiempo de ejecución. En Tapestry además podemos detectar los errores de compilación en las plantillas tml que generan el contenido html con un botón en la [página Dashboard][blogbitix-28] que ofrece incorporada Tapestry. Usando como ejemplo la aplicación que hice para el [libro PlugIn Tapestry][blogbitix-12] vamos a ver como detectar estos errores. De forma intencionada introduciré un error en la página que muestra el detalle de un producto en el mantenimiento CRUD del ejemplo. En vez de _producto.nombre_ introduciré el error de compilación poniendo _producto.nombra_, _nombra_ es una propiedad que no existe en la clase _Producto_, error que solo detectaremos después de crear un producto en otros _frameworks_ al ejercitar el código pero que en Tapestry detectaremos también desde la página Dashboard. Por otra parte dado que en Tapestry las plantillas tml son xml válido si una etiqueta está mal balanceada también nos avisará.

{{< image
    gallery="true"
    image1="image:producto.png" optionsthumb1="300x200" title1="Edición de un producto" >}}

{{< code file="ProductoAdmin.tml" language="html" options="" >}}

{{< image
    gallery="true"
    image1="image:error.png" optionsthumb1="300x200" title1="Error de compilación al acceder a la página" >}}

Entrando a la [página Dashboard][blogbitix-28] y pulsando el botón _Load all pages_ detectaremos el error sin necesidad de crear un producto. El error es el siguiente que nos indicará claramente en que página o componente se ha producido el error y una descripción bastante clara de la causa del problema.

{{< image
    gallery="true"
    image1="image:dashboard.png" optionsthumb1="300x200" title1="Página dashboard"
    image2="image:error-dashboard.png" optionsthumb2="300x200" title2="Página dashboard" >}}

En la imagen con el mensaje del error se puede ver de forma muy detallada cual es la causa, nos indica que el error está en la página _admin/Producto_ y que la clase _es.com.blogspot.elblogdepicodev.plugintapestry.Producto_ no tiene una propiedad llamada _nombra_, con este mensaje rápidamente nos damos cuenta del error de escritura que hemos cometido, corregirlo basta con sustituir _nombra_ por _nombre_ y pulsando de nuevo el botón _Load all pages_ comprobamos que no hay más errores en esa misma página o ninguna otra de la aplicación.

Los errores en producción son un problema para los usuarios de la aplicación que no podrán trabajar normalmente y para la productividad de los desarrolladores ya que habremos perdido el contexto de los cambios causantes del fallo y nos costará más corregirlos. En caso de que se nos escape algún error la [página de Excepcion][elblogdepicodev-personalizar-la-pagina-de-informe-de-error] nos dará información detallada y un mensaje que suele ser bastante descriptivo por si solo para descubrir donde está el _bug_. Otro aspecto que ayuda a la productividad y que ya incorporan varios _frameworks_ es la recarga de clases, en Tapestry es posible para los artefactos del _framework_ (páginas, componentes y servicios, recursos i18n, imágenes, estilos css), sí, incluido código Java, con lo que tenemos las ventajas de los lenguajes de _scripting_ y la ayuda del compilador para detectar errores inmediatamente, lo mejor de ambas opciones sin sus debilidades.

Por supuesto, no evitaremos tener otro tipo de errores en la aplicación pero al menos los de compilación si podremos detectarlos, un error habitual que se puede seguir produciendo son los _NullPointerException (NPE)_ pero que con las [novedades introducidas en Java 8][blogbitix-17] y usando la [clase Optional](javadoc8:java/util/Optional.html) también deberíamos poder evitarlos. Para mi esto es una gran ayuda tanto para la productividad como para aún mejor evitar que lleguen errores a producción.

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Página Dashboard de Apache Tapestry][blogbitix-28]
* [Artículos sobre Apache Tapestry][blogbitix-tag-tapestry]
{{< /reference >}}

{{% /post %}}
