---
pid: 188
type: "post"
title: "Componente select múltiple en Apache Tapestry"
url: "/2016/10/componente-select-multiple-en-apache-tapestry/"
date: 2016-10-25T13:45:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "javascript", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.svg" title1="Apache Tapestry" width1="400" image2="java.svg" >}}

El _framework_ basado en componentes Apache Tapestry incorpora una amplia [colección de componentes](http://tapestry.apache.org/component-reference.html) que nos bastarán en la mayoría de casos que necesitemos. Para los casos en que deseemos un componente con un comportamiento específico podemos construir uno completamente nuevo basado en otros existentes incluyendo los propios nuestros, de una librería o incluidos en Tapestry.

En Tapestry hay múltiples componentes con los que construir formularios para que el usuario pueda introducir datos, ser enviados por el navegador y procesados en el servidor. Hay componentes de formulario desde _checkboxes_, _radios_, _select_, _inputs_, ... con soporte para <abbr title="HyperText Markup Language">HTML</abbr> 5.

Observando en detalle la lista de componentes ofrecidos nos daremos cuenta de que está un componente [Select](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Select.html) pero que solo se puede utilizar para que el usuario seleccione una única opción, sin embargo, en el estándar de HTML los campos de selección pueden utilizarse para seleccionar múltiples opciones. Como se no ofrece un componente _select_ para seleccionar múltiples opciones a la vez si lo necesitamos deberemos implementar uno que nos ofrezca esta funcionalidad. Con el codigo fuente de Tapestry la tarea es mucho más sencilla y prácticamente es copiar y pegar, el código completo del componente _MultiSelect_ será lo que muestre a continuación.

Todo componente de formulario en este _framework_ hereda de [AbstracField](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/base/AbstractField.html) en el que básicamente deberemos proporcionar una implementación del método [processSubmission()](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/base/AbstractField.html#processSubmission(java.lang.String)) donde procesaremos los datos recibidos en este caso con un método equivalente al tradicional en Java EE [ServletRequest.getParameterValues] (https://docs.oracle.com/javaee/7/api/javax/servlet/ServletRequest.html#getParameterValues-java.lang.String-). La otra parte que deberemos implementar es la generación de etiquetas HTML del componente en el método de ciclo de vida _beginRender()_ que en gran parte nos servirá lo implementado en el código fuente del componente _Select_ de Tapestry pero incluyendo el atributo _multiple_ que requiere HTML para los _selects_ de múltiples opciones.

Esta sería una implementación de un componente _select_ múltiple. La mayor diferencia entre el componente _Select_ y este _MultiSelect_ está en la propiedad _value_ que en el primero es de tipo [Object](javadoc8:java/lang/Object.html) donde se guardará el dato seleccionado y _selected_ en el segundo que es un [List](javadoc8:java/util/List.html) de objetos donde se guardarán los datos seleccionados.

{{< code file="MultiSelect.java" language="java" options="" >}}

Esta implementación del componente no necesita de una plantilla _tml_ sino que todo el HTML se generará desde el código Java. El componente soporta parámetros informales como indicamos con la anotación [@SupportsInformalParameters](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/annotations/SupportsInformalParameters.html) que son parámetros que se añadirán a la etiqueta _select_ incluidos tal cual se indican en su uso que por ejemplo podemos utilizar para variar el número de opciones visibles, personalizar los textos y otras funcionalidades de [bootstrap-select](https://silviomoreto.github.io/bootstrap-select/).

{{< code file="Index.tml" language="html" options="" >}}
{{< code file="Index.java" language="java" options="" >}}

El código HTML generado por el componente es el siguiente:

{{< code file="Index.html" language="html" options="" >}}

Este sería el aspecto del _select_ múltiple con sus botones para seleccionar todas las opciones y deseleccionar todas, además de personalizados los textos y una pequeña flecha en el desplegable hacia el componente _select_, todo esto configurado principalmente a través de atributos _data_ y clases <abbr title="Cascading Stylesheets">CSS</abbr>.

{{< image
    gallery="true"
    image1="image:multiselect.png" optionsthumb1="300x200" title1="Aspecto del componente select mútiple"
    image2="image:multiselect-2.png" optionsthumb2="300x200" title2="Vista con opciones seleccionadas enviadas al servidor"
    caption="Componente MultiSelect con bootstrap-select" >}}

Si queremos seleccionar múltiples opciones usando _checkboxes_ Tapestry ofrece el componente [Checklist](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Checklist.html) y usando _selects_ otra opción es el componente [Palette](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Palette.html) pero seguramente no sea lo que deseamos.

{{< image
    gallery="true"
    image1="image:checklist.png" optionsthumb1="300x200" title1="Componente Checklist de Tapestry"
    image2="image:palette.png" optionsthumb2="300x200" title2="Componente Palette de Tapestry"
    caption="Componentes Checklist y Palette" >}}

En un artículo anterior comenté como [adaptar el componente _Select_ y este _MultiSelect_ para añadirle funcionalidades de la librería bootstrap-select][blogbitix-187] como cuadro de búsqueda, búsqueda por palabras clave, divisores, etc que consiste en añadir a las etiquetas HTML _select_, _optiongrp_ y _option_ ciertos atributos con sus correspondientes valores con una combinación de parámetros informales y personalización de la clase [SelectModel](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/SelectModel.html). En el siguiente artículo comentaré como [añadir botones selectores de opciones][blogbitix-189] además de los que incorpora _bootstrap-select_ de Todos y Ninguno.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Select](https://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Select.html)
* [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select/)
{{< /reference >}}

{{% /post %}}
