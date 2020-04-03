---
pid: 189
type: "post"
title: "Añadir botones selectores de opciones a select múltiple de bootsrap-select"
url: "/2016/10/anadir-botones-selectores-de-opciones-a-select-multiple-de-bootsrap-select/"
date: 2016-10-25T15:30:00+02:00
updated: 2016-10-26T14:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "javascript", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.png" image2="java.svg" >}}

La librería [bootstrap-select](https://silviomoreto.github.io/bootstrap-select/) nos permite crear elementos _select_ enriquecidos con más funcionalidades que las propias ofrecidas por el navegador para seleccionar una única opción o para seleccionar múltiples opciones. Usando esta librería y añadiendo algunos atributos a las etiquetas HTML _select_, _optgroup_ y _option_ añadirá varias funcionalidades interesantes como comento en [Componente select de Apache Tapestry con funcionalidades adicionales usando bootstrap-select][blogbitix-187].

Una de las opciones que añade es poniendo en la etiqueta _select_ el atributo _data-actions-box_ son dos botones para seleccionar todas las opciones o para deseleccionar todas las opciones.

Este es el aspecto de un elemento de selección con los botones de seleccionar todas las opciones y ninguna que son muy útiles para el usuario evitándose seleccionar una a una cada una de las opciones.

{{< image
    gallery="true"
    image1="image:multiselect-todos.png" optionsthumb1="300x200" title1="Multiselect con opciones Todos y Ninguno"
    image2="image:multiselect.png" optionsthumb2="300x200" title2="Opciones seleccionadas de Multiselect"
    caption="MultiSelect con opciones Todos y Ninguno" >}}

A pesar de todas las opciones adicionales que añade _bootstrap-select_ incluidas los botones de seleccionar todas las opciones y ninguna aún quizá queramos personalizar más el comportamiento, por ejemplo, permitir seleccionar con botones adicionales un grupo de opciones relacionadas. Supongamos que tenemos un componente de selección múltiple de países y queremos seleccionar los países de Europa, América o Asia además de las opciones que _bootstrap-select_ de todos y ninguno.

Un atributo que usa _bootstrap-select_ para la opción de filtrado es el atributo _data-tokens_, si el valor introducido en el filtro coincide con este atributo la opción se muestra y en las que no coincide se oculta. Para no añadir más atributos usaré este atributo para asociar a la opción a los grupos que pertenecen o los _tokens_ que tiene asociados. Dada una serie de _tokens_ para los que queremos botón de filtrado en el atributo _data-tokens-selectors_.

Este sería un ejemplo de código JavaScript junto con el uso del componente de Tapestry en la aplicación que podríamos emplear para añadir al elemento selector este comportamiento de selección de grupos de opciones que básicamente añade de forma dinámica un pequeño trozo de HTML similar al que el componente utiliza para mostrar los botones de todos y ninguno. Cuando se haga clic en un botón de selección con el evento _loaded.bs.select_ se buscan las opciones que contiene el _token_ asociado al botón y se seleccionan teniendo en cuenta también las opciones que estén deshabilitadas. Además, cuando todas las opciones de un botón selector están seleccionadas queda como pulsado como indicativo, lógica que se realiza en el evento _change_.

{{< code file="Index.tml" language="html" options="" >}}
{{< code file="multiselect.js" language="JavaScript" options="" >}}
{{< code file="Index.xhtml" language="html" options="" >}}

Y este sería el aspecto de componente en el navegador.

{{< image
    gallery="true"
    image1="image:multiselect-europa.png" optionsthumb1="300x200" title1="Multiselect con opciones Europa"
    image2="image:multiselect-asia.png" optionsthumb2="300x200" title2="Multiselect con opciones Asia"
    caption="MultiSelect con opciones Europa, America y Asia" >}}

Si usásemos el [componente de selección múltiple con Apache Tapetstry y bootstrap-select][blogbitix-188] sería el propio componente _MultiSelect_ el que se encargaría de incluir el JavaScript en la página cuando en ella se usase lo que nos evita incluir el JavaScript de forma global en la aplicación y en todas las páginas cuando realmente no se usa.

{{< code file="MultiSelect.java" language="java" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{< plugintapestry >}}

{{% /post %}}
