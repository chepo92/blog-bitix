---
pid: 388
type: "post"
title: "Componentes en el cliente con Web Components usando JavaScript, HTML y CSS"
url: "/2019/03/componentes-en-el-cliente-con-web-components-usando-javascript-html-y-css/"
date: 2019-03-08T18:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:javascript.svg"
tags: ["javascript", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="javascript.svg" title1="JavaScript" width1="200" image2="html.svg" title2="HTML" width2="200" >}}

En la rapidez con la que evolucionan las tecnologías una tendencia es el usar componentes en el lado del cliente y en los navegadores de una aplicación o página web. Los componentes son muy útiles ya que siguen los principios de encapsulación deseables una la programación que hace que un componente oculte los detalles del funcionamiento interno. Esta encapsulación hace que su funcionamiento interno sea más fácilmente entendible, por otro lado son reutilizables conociendo únicamente la interfaz que exponen y componer otros más complejos con otros más simples.

Han surgido varias librerías en JavaScript para desarrollar componentes en el lado del cliente, una de las primeras es [Angular][angular], otra [React][react] y otra es [Vue][vuejs] pero el organismo W3C ha definido un estándar para desarrollar componentes, que los navegadores han de implementar. El estándar se llama [Web Components][web-components] está formado por varias especificaciones.

* _Custom Elements_: permite definir nuevas etiquetas que el navegador es capaz de interpretar, hace el etiquetado de una página más sencillo.
* _Shadow DOM_: el contenido HTML oculto de las etiquetas personalizadas.
* _HTML Templates_: etiquetado HTML no visualizado por el navegador, utilizables para definir la estructura de los elementos sin tener que crearlo con código JavaScript.

Los _Custom Elements_ se definen mediante código JavaScript con la función _CustomElementRegistry.define()_ que recibe como parámetros el nombre de la etiqueta, la clase que la implementa y opcionalmente el elemento del que hereda. Hay dos tipos de _Web Components_ los autónomos que heredan de _HTMLElement_ y los personalizados que heredan de un elemento más concreto como un párrafo o botón, en cada caso de declaran de forma diferente en la función _define_ y la etiqueta que la representa en el HTML en el ejemplo usando la etiqueta _\<hello-world\>_ o _\<p is="hello-world-customized"\>_.

Usando una definición de clase para el _Custom Element_ se añade su funcionalidad, entre ella su etiquetado y estilos propios del componente, los elementos se añaden al _Shadow DOM_ con la función _appendChild()_ del objeto _shadow_ obtenido con _attachShadow()_. El _Custom Element_ puede tener atributos para recibir datos que se recuperan con la función _getAttribute()_ y _hasAttribute()_.

Con las funciones _connectedCallback()_, _disconnectedCallback()_, _adoptedCallback()_, _attributeChangedCallback()_ y _observedAttributes()_ del ciclo de vida un _Web Component_ será notificado cuando se añada a una página, cuando se quite, cuando un atributo cambie su valor.

El _Shadow DOM_ compone el etiquetado oculto del _Web Compnent_, las etiquetas HTML y los estilos CSS. El _Shadow DOM_ es exclusivo del _Web Component_ y está aislado del resto de modo que las clases CSS de estilos no entrarán en conflicto con las de otros _Web Components_ aunque tengan los mismos nombres, esto hace menos necesarias las nomenclaturas que se utilizan precisamente para evitar los conflictos.

{{< code file="index-1.html" language="html" options="" >}}
{{< code file="index-2.html" language="html" options="" >}}

Para hacer más sencilla la creación del etiquetado de los _Web Components_ en vez de usando código JavaScript con las funciones _createElement()_ y _appendChild()_ está la especificación de _HTML Templates_. Plantillas en las que además se puede incluir los estilos CSS.

{{< code file="index-3.html" language="html" options="" >}}

Además con los _slots_ se le puede proporcionar al _Web Component_ un fragmento de HTML.

{{< code file="index-4.html" language="html" options="" >}}

{{< image
    gallery="true"
    image1="image:web-components-1.png" optionsthumb1="300x200" title1="Web Components"
    image2="image:web-components-2.png" optionsthumb2="300x200" title2="Eventos de ciclo de vida Web Components"
    caption="Etiquetado y eventos de varios Web Components" >}}

En la página de [documentación los _Web Components_ en MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components) esta muy bien detallados. Los componentes de lado del cliente permiten desarrollar elementos funcionales reutilizables y compuestos entre ellos. Combinado con una interfaz REST o [GraphQL][graphql] en el lado del servidor es una forma de construir una aplicación o página web. [JSF][jsf], [Wicket][wicket], [Apache Tapestry][tapestry] son _frameworks_ web Java que proporciona componentes con ciertas similitudes pero en el lado del servidor.

La [compatibilidad de los navegadores de los Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components#Browser_compatibility) es amplia, no necesita de librerías JavaScript adicionales ya que el soporte está incluido en el navegador pero React y Vue están disponibles con anterioridad y proyectos como [Redux][redux] y [Vuex][vuex] proporcionan el manejo del estado de los componentes.

{{% sourcecode git="blog-ejemplos/tree/master/WebComponents" %}}

{{< reference >}}
* [Introduction to Web Components](http://www.w3.org/TR/components-intro/)
* [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* [Web Components][web-components]
* [Web Components: from zero to hero](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m)
* [Artículo REST con Java][blogbitix-178]
* [Serie GraphQL][blogbitix-serie-graphql]
{{< /reference >}}

{{% /post %}}
