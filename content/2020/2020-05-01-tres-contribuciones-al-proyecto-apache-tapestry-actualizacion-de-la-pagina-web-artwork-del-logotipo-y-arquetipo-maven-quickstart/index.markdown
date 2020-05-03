---
pid: 478
type: "post"
title: "Tres contribuciones al proyecto Apache Tapestry, actualización de la página web, artwork del logotipo y arquetipo Maven quickstart"
url: "/2020/05/tres-contribuciones-al-proyecto-apache-tapestry-actualizacion-de-la-pagina-web-artwork-del-logotipo-y-arquetipo-maven-quickstart/"
date: 2020-05-01T10:30:00+02:00
updated: 2020-05-02T21:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["planeta-codigo", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-icon-light.svg" >}}

El framework [Apache Tapestry][tapestry] para el desarrollo de aplicaciones Java basadas en componentes es un de los proyectos que sigo desde hace mucho tiempo. Hasta el día de hoy no he encontrado y probado nada mejor en lo que he visto con diferencia para el propósito de desarrollar aplicaciones web en el que el HTML es generado en el lado del servidor. Está basado en componentes y se consigue una alta productividad y reutilización en el mismo proyecto y diferentes proyectos. En marzo del 2020 se publicó la [versión 5.5.0](https://tapestry.apache.org/2020/03/23/tapestry-550-released.html).

La tendencia de las aplicaciones actuales es desarrollar la parte del cliente con tecnologías basadas en JavaScript como [React][react], [Vue][vuejs], [Angular][angular] o incluso [Web Components][web-components] que hagan uso de APIs ya sean en REST o [GraphQL][graphql] en el lado del servidor que solo transmitan los datos y todo el renderizado del HTML se haga en el lado del cliente. Sin embargo, esto tiene sus inconvenientes como que la página parece que se carga en diferentes pasos, el tiempo de carga inicial es mayor y el JavaScript en grandes proyectos adolece de los mismos problemas de los lenguajes no tipados salvo que se use [TypeScript][typescript]. Para algunos proyectos renderizar el HTML en el lado del servidor es una opción más sencilla y todos estos frameworks con ciertos años siguen siendo válidos.

En la medida de mis posibilidades he buscado formas de contribuir al proyecto Apache Tapestry aún sin tener la posibilidad de usar el proyecto profesionalmente. Una de ellas ha sido escribir un [libro en español y totalmente gratis][blogbitix-12] con muchos de los artículos que he escrito sobre el framework. Esto es algo relacionado pero externo al proyecto.

Con el paso del tiempo y continuando siguiendo el proyecto otras formas en las que he contribuido y ahora sí al proyecto es el arquetipo de [Maven][maven] que permite iniciar una aplicación de Apache Tapestry rápidamente. Y más recientemente la actualización de la página web del proyecto junto con el _artwork_ del logotipo.

### Página web del proyecto

Entre esas cosas que consideraba mejorables era la página web del proyecto y documentación. Con el paso del tiempo el diseño de la misma estaba desfasado, no era adaptable para dispositivos móviles y tiene algunos errores como que la búsqueda personalizada de Google no funcionaba y algunos enlaces rotos. Otra mejora ha sido redirigir el tráfico del protocolo http a https con JavaScript.

He teneido que conocer como se generaba el HTML de la página y cuál era el proceso de publicación. El contenido se edita en [Confluence][atlassian-confluence], se exporta con un _script_ y unas plantillas y el resultado es incorporado en un repositorio de [Subversion][subversion] desde el cual es servido con algún servidor web.

Con mi experiencia con [Hugo][hugo] me planteaba reescribir la forma de edición del sitio web, sin embargo, esto es una tarea más grande que requiere reemplazar una buena parte de la infraestructura existente, como cambiar de Subversion a Git, [reescribir la página web exportando el contenido existente de HTML a markdown][blogbitix-466], no imposible pero requeriría más trabajo, y sustituir el flujo de trabajo actual por otro que permita la edición del contenido desde un dispositivo móvil y que disponga de despliegue continuo cuando se hagan cambios como ocurre desde la edición actual con Confluence.

Debido a la mayor complejidad de los cambios y que la persona del proyecto encargada de la página web y documentación requería que el proceso siguiese siendo parecido pudiendo editar desde un dispositivo móvil la opción ha sido mejorar lo actual aún sabiendo las limitaciones de Confluence y el proceso actual. Con esta opción sabía que únicamente podría mejorar el diseño, para corregir algunos otros fallos es necesario hacer los cambios editando el contenido en Confluence.

El resultado ha sido este, antes y después. El actual lo puedes ver en la [página web de Tapestry][tapestry].

{{< image
    gallery="true"
    image1="image:tapestry-site-index-old.png" optionsthumb1="300x200" title1="Página antigua"
    image2="image:tapestry-site-index-new.png" optionsthumb2="300x200" title2="Página nueva" >}}
{{< image
    gallery="true"
    image1="image:tapestry-site-documentation-old.png" optionsthumb1="300x200" title1="Página antigua"
    image2="image:tapestry-site-documentation-new.png" optionsthumb2="300x200" title2="Página nueva"
    caption="Comparación entre la versión antigua (izquierda) y nueva (derecha)" >}}


### Artwork del logotipo

Al mismo tiempo que la mejora de la página web he mejorado el logotipo y generado un nuevo _artwork_. Después de recopilar las diferentes versiones logotipos y viendo las diferencias de cada una de ellas en tipo de fuente, formas del icono, colores, etc he creado uno nuevo seleccionado lo que he considerado lo mejor de cada uno de ellos. La forma del unicornio de uno, los elementos de fondo del icono de otro, el ojo del unicorno, la fuente del texto, cambiado el color de la palabra _apache_ en vez de gris a negro de modo que en resoluciones bajas y fondo claro a resoluciones bajas se sigua leyendo correctamente, añadido la mosca del _trademark, ™_ para cumplir con algunos requierimientos de la fundación Apache para proteger sus marcas. En las versiones originales unicamente ofrecen un fondo claro en las nuevas también una versión para fondos oscuros.

{{< image
    gallery="true"
    image1="image:apache-tapestry-5-apache-original.svg" optionsthumb1="200x150" title1="Una versión antigua del logotipo"
    image2="image:apache-tapestry-index-original.svg" optionsthumb2="200x150" title2="Una versión antigua del logotipo"
    image3="image:apache-tapestry-index-original.png" optionsthumb3="200x150" title3="Una versión antigua del logotipo"
    caption="Diferentes versiones antiguas del logotipo" >}}

La edición la he realizado con editor de imágenes veectorial [Inkscape][inkscape] y mi intención ha sido generar no solo un logotipo sino varias versiones. Viendo los archivos SVG originales en alguno había un intento de logotipo para fondo oscuro aunque nunca he visto un logotipo de Tapestry generado para este caso así es posible que ni siquiera las personas del proyecto supiesen que existía.

{{< image
    gallery="true"
    image1="image:inkscape-tapestry.png" optionsthumb1="600x450" title1="Edición del logotipo en Inkscape"
    caption="Edición del logotipo en Inkscape" >}}

He generado varias versiones fondos claros, para fondos oscuros, con icono y texto, solo el icono y solo el texto. He simplificado y eliminado muchos de los degradados del icono y efectos. Como fuentes he utilizado las originales que conocía, Trebuchet MS y Georgia, son fuentes propietarias de [Microsoft][microsoft] pero tienen un aspecto muy bueno y son las fuentes con las que conocía el logotipo del proyecto. El resultado ha sido el siguiente.

{{< image
    gallery="true"
    image1="image:apache-tapestry-icontext-300-light.png" optionsthumb1="300x200" title1="Icono y texto fondo claro"
    image2="image:apache-tapestry-icontext-300-dark.png" optionsthumb2="300x200" title2="Icono y texto fondo oscuro" >}}
{{< image
    gallery="true"
    image1="image:apache-tapestry-icon-300-light.png" optionsthumb1="300x300" title1="Icono fondo claro"
    image2="image:apache-tapestry-icon-300-dark.png" optionsthumb2="300x300" title2="Icono fondo oscuro" >}}
{{< image
    gallery="true"
    image1="image:apache-tapestry-text-300-light.png" optionsthumb1="300x200" title1="Texto fondo claro"
    image2="image:apache-tapestry-text-300-dark.png" optionsthumb2="300x200" title2="Texto fondo oscuro" >}}

Como las combinaciones de logotipo son muchas exportar todas esas versiones manualmente desde el SVG original me iba a requerir mucho tiempo con lo que he aprovechado la funcionalidad del Inkscape por línea de comandos para automatizar la exportación del SVG. Esto permite mostrar y ocultar capas, ajustar el SVG al contenido visible y exportar a PNG por ejemplo para generar las diferentes versiones de los iconos.

El resultado es una colección de más de 50 imágenes en formato PNG y SVG entre las que un usuario pueda elegir la mejor entre sus preferencias sin tener que realizar ninguna edición.

{{< code file="generate-logotype-artwork.sh" language="bash" options="" >}}

### Artefacto de Maven quickstart

En una contribución anterior había realizado cambios en el artefacto de Maven que permite generar un esqueleto de aplicación que hace uso de Tapestry. Y simplemente no funcionaba, además de usar una librería para iniciar un [Tomcat][tomcat] embebido más antigua.

Las mejoras que he realizado ha sido refactorizar el artefacto de Maven, usar [Spring Boot][spring-boot] para iniciar la aplicación, añadir [Gradle][gradle] como herramienta de construcción y algunos teses de ejemplo. El nuevo artefacto está incluido en la versión 5.5.0.

{{< code file="quickstart.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:apache-tapestry-quickstart.png" optionsthumb1="300x200" title1="Aplicación de inicio rápido" >}}

### Conclusión

Los que trabajan en proyecto _open source_ tienen mucho conocimiento deben tenerlo si son capaces de construir un proyecto que en algunos casos utilizan miles de desarrolladores y empresas pero su tiempo es limitado, ni en muchos casos es su trabajo principal y en algunos aspectos no tienen por qué saber más que tú en todo. Contribuir a un proyecto es sencillo solo requiere tiempo y algo de conocimiento para conocer que cambios hay que realizar, con interés y tiempo poco a poco uno va conocienco más detalles del proyecto que permiten realizar contribuciones como estas.

Estas contribuciones no aportan código al proyecto pero la documentación y página web es también importante como muestra del estado del proyecto. Si usase a diario una aplicación con Apache Tapestry en el trabajo es posible que pudiese realizar algunas contribuciones al código fuente del framework pero sin tener esa posibilidad mi motivación para realizarlas no es tan alta.

* [TAP5-2623 Update Apache Tapestry website and documentation styles](https://issues.apache.org/jira/browse/TAP5-2623)
* [TAP5-2608 Fix and update quickstart](https://issues.apache.org/jira/browse/TAP5-2608)

{{< plugintapestry >}}

{{% /post %}}
