---
pid: 187
type: "post"
title: "Componente select de Apache Tapestry con funcionalidades adicionales usando bootstrap-select"
url: "/2016/10/componente-select-de-apache-tapestry-con-funcionalidades-adicionales-usando-bootstrap-select/"
date: 2016-10-15T13:00:00+02:00
updated: 2016-10-25T12:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "javascript", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.png" image2="java.svg" >}}

El selector de opciones implementado en los navegadores es muy simple pudiendo seleccionar un elemento de una lista, mostrar los elementos agrupados por categorías o seleccionar múltiples elementos pero mostrándolos en formato de una lista en vez de como un desplegable. [bootstrap-select](https://silviomoreto.github.io/bootstrap-select/) es una librería que utiliza los estilos de [Bootstrap][bootstrap] y que añade algunas funcionalidades más a los componentes de selección de opciones de los formularios de una página web.

Algunas de estas funcionalidades adicionales está explicadas más detalladamente en los [ejemplos](https://silviomoreto.github.io/bootstrap-select/examples/), que son:

* Cuadro de búsqueda
* Búsqueda por palabras clave
* Limitar el número de opciones seleccionables
* Texto personalizado de opción no seleccionada
* Texto personalizado de opción seleccionada (distinto al texto de la opción)
* Texto de opciones seleccionadas personalizado
* Estilos personalizados
* Marca en la opción seleccionada
* Flecha hacia el campo del formulario en el desplegable
* Estilos  personalizados en opciones individuales
* Anchuras personalizables
* Iconos en las opciones
* Contenido personalizado en las opciones
* Subtextos
* Tamaño de menú personalizado
* Opciones de selección y deselección
* Divisores
* Cabecera
* Posición desplegable
* Deshabilitar _select_, opción o grupo de opciones

Todas estas capacidades de personalización se consiguen bien añadiendo atributos a las etiquetas <abbr title="HyperText Markup Language">HTML</abbr> _select_ o a las etiquetas _option_ y _optgroup_ con lo que usar el componente _bootstrap-select_ consiste básicamente generar el marcado HTML adecuado. Con JavaScript se puede construir el componente donde podemos indicar las mismas [opciones adicionales](https://silviomoreto.github.io/bootstrap-select/options/) que con los atributos _data-_, también tiene [métodos](https://silviomoreto.github.io/bootstrap-select/methods/) para manipular su comportamiento de forma programática como por ejemplo recibir eventos cuando cambia la selección.

Usando [Apache Tapestry][tapestry] con su concepto de parámetros informales añadiremos las atributos necesarios en la etiqueta _select_ y con el modelo de datos proporcionado en [SelectModel](tapestry:org/apache/tapestry5/SelectModel.html), [OptionGroupModel](tapestry:org/apache/tapestry5/OptionGroupModel.html) y [OptionModel](tapestry:org/apache/tapestry5/OptionModel.html) podremos proporcionar los atributos adicionales para las etiquetas de los _option_ y _optgroup_. El modelo de datos de una etiqueta _select_ es una lista de opciones y grupos de opciones, cada opción tiene una etiqueta que se le mostrará al usuario, si está habilitada o no, el valor que se enviará al servidor cuando esté seleccionada y un mapa de atributos a añadir en la etiqueta de la opción.

Este sería el código para crear una instancia de _SelectModel_ para un componente [Select](tapestry:org/apache/tapestry5/corelib/components/Select.html) de Tapestry para un ficticio selector de país. En el ejemplo en vez de usar un mapa vacío con _Collections.EMPTY\_MAP_ se podría sustituir por un mapa con atributos que se añadirían a la opción para usar alguna otra funcionalidad de _bootstrap-select_.

{{< code file="Index.java" language="java" options="" >}}
{{< code file="Index.tml" language="html" options="" >}}
{{< code file="AppOptionGroupModel.java" language="java" options="" >}}
{{< code file="AppOptionModel.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:select-1.png" optionsthumb1="300x200" title1="Componente selector con bootstrap-select"
    image2="image:select-2.png" optionsthumb2="300x200" title1="Componente selector con bootstrap-select"
    caption="Componente selector con bootstrap-select" >}}

Al ser enviado el formulario que contiene el _select_ el valor seleccionado los tendremos en la propiedad que hayamos indicado en el parámetro _value_ del componente _Select_, este caso en la propiedad _pais_ de la clase _Index_ que representa la página.

En la clase _PlugInStack_ hay que especificar los recursos CSS y de JavaScript necesarios para usar _bootstrap-select_, además de iniciarlizar los selectores con JavaScript.

{{< code file="PlugInStack.java" language="java" options="" >}}
{{< code file="index.js" language="JavaScript" options="" >}}

En el artículo [Componente select múltiple en Apache Tapestry][blogbitix-188] explico como crear un _select_ múltiple que por defecto no incluye Tapestry pero el estandar HTML soporta y en algún caso nos será necesario y en [añadir botones selectores de opciones][blogbitix-189] como incluir selectores adicionales además de Todos y Ninguno.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select/)
* [Bootstrap Select Examples](https://silviomoreto.github.io/bootstrap-select/examples/)
* [Bootstrap Select Methods](https://silviomoreto.github.io/bootstrap-select/methods/)
{{< /reference >}}

{{% /post %}}
