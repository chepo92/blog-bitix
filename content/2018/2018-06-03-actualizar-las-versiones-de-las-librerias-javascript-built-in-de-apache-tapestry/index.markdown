---
pid: 326
type: "post"
title: "Actualizar las versiones de las librerías JavaScript built-in de Apache Tapestry"
url: "/2018/06/actualizar-las-versiones-de-las-librerias-javascript-built-in-de-apache-tapestry/"
date: 2018-06-03T08:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.svg" title1="Apache Tapestry" width1="400" image2="java.svg" >}}

El _framework_ [Apache Tapestry][tapestry] para el desarrollo de aplicaciones web Java basado en componentes aparte de ser un _framework_ para el desarrollo de la capa de presentación del lado del servidor y lógica de negocio también ofrece soporte para el desarrollo de funcionalidad del lado del cliente. Incorpocopora de serie las librerías [RequireJS][requirejs] para la gestión de módulos y dependencias de JavaScript, la popular [jQuery][jquery] para la manipulación de elementos del HTML y [Underscore][underscorejs] que añade algunas utilidades que no tiene el lenguaje JavaScript y [Bootstrap][bootstrap] para los estilos además de alguna otra librería JavaScript de menor relevancia que estas.

Sin embargo, las versiones de las librerías de lado del cliente que incorpora de serie son antiguas. En la versión 5.4.3 de RequireJS se incorpora la versión 2.1.17, de jQuery la versión 1.12.1 y de Underscore la versión 1.8.3 cuando en el momento de publicar este artículo sus versiones más nuevas son 2.3.5, 3.3.1 y 1.9.1 respectivamente. Dado que de Apache Tapestry no se publican versiones frecuentemente el _framework_ no sigue el ritmo de actualizaciones más rápido de las librerías JavaScript. Pero pueden ser actualizadas sin mucho esfuerzo.

Apache Tapestry es un _framework_ extremadamente personalizable, adaptable y extensible, prácticamente cualquier cosa interna de su funcionamiento puede ser modificada gracias a su propio gestor de dependencias o inversión de control. Las versiones de las librerías anteriores se definen en el archivo [JavaScriptModule.java](https://git1-us-west.apache.org/repos/asf?p=tapestry-5.git;a=blob;f=tapestry-core/src/main/java/org/apache/tapestry5/modules/JavaScriptModule.java;h=68fcfc81546a49469cd153ea1e58026549718f61;hb=85cc611fbad4a3574664b33ce9adf614b4f0fe07) del código fuente de Tapestry y haciendo una contribución en el contenedor de dependencias a la configuración del servicio JavaScriptStack se pueden modificar.

Estas pocas líneas de código bastan para redefinir las versiones de las librerías.

{{< code file="AppModule.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:tapestry-jquery-1.12.1.png" optionsthumb1="300x200" title1="Antes de actualizar las librerías JavaScript"
    image2="image:tapestry-jquery-3.3.1.png" optionsthumb2="300x200" title2="Después de actualizar las librerías JavaScript"
    caption="Antes y después de actualizar las librerías JavaScript" >}}

Además, en este caso las nuevas versiones las he proporcionado [gestionando las dependencias de lado del cliente con _webjars_][blogbitix-325] que se incluyen como cualquier otra dependencia Java del proyecto. Esto permite saber qué dependencias de lado de cliente tiene el proyecto, obtener las dependencias de forma automática y actualizarlas de forma sencilla con la herramienta de construcción del proyecto como [Gradle][gradle].

Al usar una versión más reciente de las librerías es importante asegurarse y revisar que todas las funcionalidades necesarias son compatibles hacia atrás. Al hacer en el caso de jQuery una actualización a una versión mayor hay que probar y leer las notas de publicación de las versiones por si hubiera un problema de compatibilidad en las funcionalidades que requiere de ella el _framework_ Apache Tapestry.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{< plugintapestry >}}

{{< reference >}}
* [JavaScriptModule.java](https://git1-us-west.apache.org/repos/asf?p=tapestry-5.git;a=blob;f=tapestry-core/src/main/java/org/apache/tapestry5/modules/JavaScriptModule.java;h=68fcfc81546a49469cd153ea1e58026549718f61;hb=85cc611fbad4a3574664b33ce9adf614b4f0fe07)
{{< /reference >}}

{{% /post %}}
