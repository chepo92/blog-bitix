---
pid: 101
type: "post"
title: "Similitudes entre React y Polymer con Apache Tapestry"
url: "/2015/10/similitudes-entre-react-y-polymer-con-apache-tapestry/"
date: 2015-10-06T18:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "opinion", "planeta-codigo", "tapestry"]
summary: "React y Polymer son dos librerías JavaScript para construir interfaces complejas en el lado cliente basadas en componentes. Los componentes son interesantes porque hace que el código sea reutilizable, fácil de entender y más fácil de modificar sin introducir errores entre otras cosas. Aunque en el desarrollo web en el lado del servidor la mayoría de los _frameworks_ se basan en acciones también hay algunos que se basan en componentes, uno de ellos Apache Tapestry para la plataforma Java. Si de React y Polymer se está hablando bastante bien y forman parte del actual estado del arte JavaScript, si la gente conociese y usase Tapestry que tiene varias similitudes con ellos creo que también les facilitaría el desarrollo de aplicaciones web pequeñas o grandes, simples o complejas en la parte del servidor."
---

{{% post %}}

{{< logotype image="apache-tapestry-5.svg" title="Apache Tapestry" width="400" >}}

La librería JavaScript [ReactJS][react] es una de las que más se está hablando para bien y utilizando para construir aplicaciones complejas en el navegador. Personalmente después de haberla probado en el [ejemplo lista de tareas con React y Backbone][blogbitix-20] me ha parecido que está muy bien. Otra de las librerías que suele mencionarse y que en un futuro puede emplearse mucho más es [Polymer][polymer]. ¿Cuál es el éxito de estas librerías?

Uno de los motivos en mi opinión es que ambas se basan en un concepto de componente, en React un componente encapsula su estado o propiedades y eventos que maneja junto con la plantilla para generar las etiquetas de su interfaz gráfica, Polymer va un poco más allá y además de estado, eventos y plantilla encapsula los estilos <abbr title="Cascading Style Sheets">CSS</abbr>. Pero estas librerías que sirven para crear interfaces en el lado del cliente basadas en componentes y que se están viendo como algo bueno, en el lado del servidor la mayoría de los _frameworks_ se basan en acciones, sin embargo, también hay algunos basados en componentes, uno de ellos es [Apache Tapestry][tapestry] en la plataforma Java.

El concepto de componente de estos _frameworks_ JavaScript o el utilizado en Tapestry no es nuevo quizá tiene otro nombre y es similar a lo que en los lenguajes de programación orientados a objetos conocemos como clases o tipos y en alguna asignatura también podemos haber aprendido como <abbr title="Tipo Abstracto de Datos">TAD</abbr>. Básicamente cualquiera de ellos trata de agrupar en una entidad los datos (propiedades) y las funciones que los manejan (métodos) haciendo que el estado sea siempre válido manipulable solo a través de su interfaz, proporcionan una abstracción para que baste conocer la interfaz y no su funcionamiento interno. Y esto es bueno, ya que hace que sean muy fácil de usar, de reutilizar componentes ya probados, menor acoplamiento, que además redunda en un mantenimiento más sencillo y productividad, además, se pueden construir componentes complejos a partir de componentes más sencillos. El éxito de los extendidos [lenguajes orientados a objetos](https://en.wikipedia.org/wiki/Object-oriented_programming) se debe en gran medida a estos importantes conceptos.

Un componente React y otro de Polymer tienen el siguiente aspecto en código.

{{< code file="react.js" language="JavaScript" options="" >}}
{{< code file="polymer.xhtml" language="html" options="" >}}

Uno de los [motivos que comentaba para elegir Tapestry][elblogdepicodev-71] era precisamente este de componente. En Tapestry un componente está formado por una clase Java que contiene la lógica del componente tanto para obtener los datos que necesite la plantilla como para manejar los eventos que se produzcan en el navegador como clics o envío de formularios con datos, también puede tener asociada una plantilla que generará el <abbr title="HyperText Markup Language">HTML</abbr> que se enviará al navegador web del cliente y que usará la clase Java para [obtener los datos que necesite de forma _pull_ en vez de _push_][blogbitix-31] (el modelo _push_ es el habitual en los _frameworks_ basados en acciones), puede necesitar algunos archivos JavaScript para añadir algún comportamiento en el cliente y finalmente archivos de estilos CSS. El componente define los archivos JavaScript y de estilos que necesita y Tapestry se encarga de incluirlos en la página cuando se genera. Solo se incluyen los necesarios según los componentes que se hayan usado para generar la página, no haciendo falta incluir archivos de forma global.

Para usar un componente en Tapestry basta con conocer sus parámetros y los eventos que puede lanzar, estos forman su interfaz que nos abstraen de su funcionamiento interno. Por supuesto su pueden crear componentes más complejos a partir de otros más simples como si de piezas lego se tratase.

{{< code file="NumeroProductos.java" language="java" options="" >}}
{{< code file="NumeroProductos.tml" language="html" options="" >}}

Según lo que comenta la gente parece bastante entusiasmada cuando prueban React o Polymer y considero que si les gusta el concepto de componentes en el lado del cliente creo que también les gustaría el concepto de componentes en el servidor que proporciona Apache Tapestry (entre otras muchas cosas que proporciona) si lo conociesen y probasen. Y son herramientas totalmente compatibles porque perfectamente se puede usar Tapestry en el lado del servidor y React o Polymer en el lado del cliente.

Hace meses escribí un [libro sobre Apache Tapestry][blogbitix-12] que puedes descargar completo y gratuitamente para conocer más detalles sobre este _framework_ para la plataforma Java. Si aún necesitas conocer más también escribí un artículo comentando muchas de las [varias características más destacables de Tapestry][elblogdepicodev-71]. Por supuesto puedes consultar más [artículos etiquetados como tapestry][blogbitix-tag-tapestry] en esta bitácora y en [El blog de pico.dev][elblogdepicodev-label-tapestry].

{{< plugintapestry >}}

{{< reference >}}
* [Ejemplo lista de tareas con React y Backbone][blogbitix-20]
* [Aprende a crear Web Components con Polymer](https://platzi.com/blog/web-components-polymer/)
{{< /reference >}}

{{% /post %}}
