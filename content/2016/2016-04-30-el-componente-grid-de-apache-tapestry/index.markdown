---
pid: 139
type: "post"
title: "El componente Grid de Apache Tapestry"
url: "/2016/04/el-componente-grid-de-apache-tapestry/"
date: 2016-04-30T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["java", "planeta-codigo", "tapestry", "programacion"]
summary: "En la mayoría de aplicaciones no solo es habitual sino algo muy usado el mostrar listados de elementos de forma tabular con paginación y columnas ordenables. En estos listados el complejo componente internamente _Grid_ de Apache Tapestry pero a la vez muy sencillo de usar puede marcar una diferencia significativa en el número de líneas de código necesarias a escribir, la flexibilidad, funcionalidad ofrecida, la productividad al hacer la implementación o modificarla comparándolo con lo necesario en otros _frameworks_ web en los que no hay nada comparable de serie."
---

{{% post %}}

{{< logotype image1="apache-tapestry-icon-light.svg" title1="Apache Tapstry" width1="400" >}}

[Apache Tapestry][tapestry] es uno de los muchos _frameworks_ disponibles en Java para el desarrollo de aplicaciones y páginas web. A diferencia de la mayoría se basa en componentes y proporciona una larga lista de ellos listos para usar de serie, pero también se pueden crear componentes nuevos basados en los propios de Tapestry o los que desarrollemos nosotros muy fácilmente. Los componentes son piezas reusables de código que se pueden reutilizar bien directamente o para formar nuevos componentes y es uno de los motivos por los que en Tapestry se consigue una alta productividad además de otros beneficios como la encapsulación.

Uno de los componentes más complejos pero al mismo tiempo muy simple de usar ofrecidos por el _framework_ es el [componente Grid](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Grid.html). El componente _Grid_ muestra en una tabla un listado de datos ofreciendo las funcionalidades de paginación, ordenación, personalización de columnas, filtrado de columnas, personalización en caso de estar vacío y algunas cosas más. Lo único que debemos tener en cuenta para aprovechar al máximo el componente _Grid_ son los parámetros que declara en su documentación su funcionamiento interno nos es irrelevante, será de los componentes más complejos y no por ello no es más difícil de utilizar basta decir que solo tiene un parámetro requerido y que es lo único imprescindible que es la lista de datos a mostrar.

Aunque el componente tiene un buen número de parámetros para personalizar según queramos su comportamiento basta que hagamos uso únicamente del parámetro _source_ que es la fuente de datos del _Grid_, puede ser un objeto de tipo [Collection](javadoc8:java/util/Collection.html) o un [GridDataSource](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/grid/GridDataSource.html) que proporciona métodos para hacer la paginación y ordenación eficientemente recuperando de la base de datos o fuente de datos únicamente los registros a mostrar realizando paginación.

{{< code file="ProductoAdmin.tml" language="html" options="" >}}
{{< code file="ProductoAdmin.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:grid.png" optionsthumb1="300x200" title1="Componente Grid de Tapestry"
    caption="Componente Grid de Tapestry" >}}

* _source_

Con los parámetros _include_ y _exclude_ podemos determinar que propiedades de los objetos o _beans_ de la fuente de datos se incluyen en el Grid, con el parámetro _add_ podemos añadir nuevas columnas y personalizarlas con los datos que necesitemos como sería el caso de añadir una columna con un [Checkbox](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Checkbox.html) por fila para realizar una selección múltiple o de una columna con botones para realizar acciones. Para ambas cosas en el cuerpo del componente_Grid_definimos subcomponentes con la siguiente nomenclatura _\<p:[nombreColumna]Cell\>_, en en ejemplo usando _\<p:nombreCell\>_ y _\<p:actionCell\>_. Las celdas de las columnas por defecto hacen un [toString()](javadoc8:java/lang/Object.html#toString--) de la propiedad del _bean_ de la fila a mostrar, si queremos cambiar este comportamiento como en la columna nombre definimos la etiqueta _\<p:nombreCell\>_ y dentro incluimos el contenido que deseemos que puede contener otros componentes en este caso el nombre con un enlace.

* _include_
* _exclude_
* _add_
* _\<p:[nombreColumna]Cell\>_

Con el parámetro _rowsPerPage_ podemos cambiar el número de filas por página del _Grid_, en el ejemplo son 2 pero puede ser la cifra que deseemos y tampoco tiene por que ser una constante, el número de filas a mostrar puede provenir de una expresión y cambiar según alguna lógica. Los parámetros _columnIndex_, _rowIndex_ y _row_ nos proporcionan información del índice de la columna actual, índice de la fila actual y el objeto actual de la fila respectivamente que podemos usar al personalizar las celdas del _Grid_. Son parámetros de salida que el _Grid_ se encarga de proporcionarnos según procesa las filas y celdas, en base a ellos podremos implementar alguna funcionalidad.

* _rowsPerPage_
* _columnIndex_
* _rowIndex_
* _row_

Los parámetros informales (denominados así para aquellos que le pasamos al _Grid_ que no están declarados explícitamente en su interfaz o contrato y que no proporcionan alguna funcionalidad) son incluidos en la etiqueta _table_ del <abbr title="HyperText Markup Language">HTML</abbr> que genera el _Grid_. Igualmente el parámetro informal _class_ se incluye tal cual se indica en el atributo en _class_ de la tabla para personalizar los estilos y usando el parámetro _rowClass_ se incluye en cada fila en su etiqueta _tr_ de HTML. Además de estas clases que podemos el componente añade algunas clases más a ciertas filas: _t-first_ para la primera fila, _t-last_ para la última, _t-sort-column-ascending_ y _t-sort-column-descending_ para las columnas que estén ordenadas ascendentemente y descendentemente de forma que con <abbr title="">CSS</abbr> tengamos la posibilidad de cambiar sus estilos.

* _class_
* _rowClass_

Con el parámetro _empty_ definimos un componente [Block](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/Block.html) que se usará cuando el _Grid_ no tenga filas que mostrar, lo que es útil para mostrar un mensaje indicando que la tabla no tiene filas como cuando no hay elementos.

{{< image
    gallery="true"
    image1="image:grid-sin-elementos.png" optionsthumb1="300x200" title1="Mensaje de un Grid sin elementos"
    caption="Mensaje de un Grid sin elementos" >}}

* _empty_

Con _pagerPosition_ indicaremos si queremos la barra de paginación situada encima de la tabla, abajo, en ambas posiciones o no queremos.

* _pagerPosition_

Por si fuera poco con el parámetro _inPlace_ podemos hacer que la paginación y ordenación funcione usando <abbr title="Asynchronous JavaScript And XML">AJAX</abbr> de modo que no se recargue toda la página en cada pulsación de un enlace. No será necesario que añadamos nada de JavaScript, el componente se encargará de hacer la petición AJAX y con el resultado que sea devuelto actualizar la tabla.

* _inPlace_

Finalmente, comentaré el parámetro _encoder_ con el que podemos hacer que el componente _Grid_ funcione cuando se usa dentro de un componente _Form_. La clase [ValueEncoder](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/ValueEncoder.html) transforma un objeto a un [String](javadoc8:java/lang/String.html) que lo identifique en el cliente y a partir del identificador del cliente los transforme al objeto cuando se envíe de nuevo al servidor. Podemos indicar el _ValueEncoder_ en cada _Grid_ o definirlo como una configuración del contenedor <abbr title="Inversion of Control">IoC</abbr>.

Hay algún parámetro más como _sortModel_ y _paginationModel_ para mantener la información de ordenación y paginación pero los anteriores son los que más habitualmente usaremos y probablemente con _source_, _include_, _exclude_ y _add_ tengamos suficiente para muchos casos.

Es sorprendentemente lo sencillo que es usar el componente _Grid_ para toda la funcionalidad que proporciona. En ciertos casos este componente por si solo puede reducir drásticamente la cantidad de código necesario a escribir en las plantillas que producen HTML y aumentar notablemente la productividad al crear o modificar páginas con listados de elementos. En el artículo [Mantenimiento CRUD en Apache Tapestry][elblogdepicodev-160] comento como conseguir un <abbr title="Create, Read, Update and Delete">CRUD</abbr> completo usando el componente _Grid_ entre otras cosas.

{{< plugintapestry >}}

{{< reference >}}
* [Mantenimiento CRUD en Apache Tapestry][elblogdepicodev-160]
* [Artículos sobre Tapestry en Blog Bitix][blogbitix-tag-tapestry]
* [Artículos sobre Tapestry en El blog de pico.dev][elblogdepicodev-label-tapestry]
{{< /reference >}}

{{% /post %}}
