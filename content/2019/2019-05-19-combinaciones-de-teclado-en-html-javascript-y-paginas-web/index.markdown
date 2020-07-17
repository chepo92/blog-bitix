---
pid: 406
type: "post"
title: "Combinaciones de teclado en HTML, JavaScript y páginas web"
url: "/2019/05/combinaciones-de-teclado-en-html-javascript-y-paginas-web/"
date: 2019-05-19T09:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:html.svg"
tags: ["javascript", "programacion", "planeta-codigo"]
summary: "En las páginas y aplicaciones web también es posible utilizar combinaciones de teclas para proporcionar acceso rápido a funciones usadas frecuentemente. Utilizando la propiedad global _accesskey_ para los campos de texto la acción es ubicar el foco en el campo y para los botones realizar la acción de clic. Los _listeners_ como _onkeydown_ permiten conocer que teclas modificadoras como <kbd>Ctrl</kbd>, <kbd>Shift</kbd> y <kbd>Alt</kbd> se han pulsado al mismo tiempo."
---

{{% post %}}

{{< logotype image1="html.svg" image2="javascript.svg" >}}

En las aplicaciones de escritorio es habitual usar atajos de teclado o combinaciones de teclas para realizar acciones sin necesidad del ratón y sin requerir levantar las manos del teclado. Estos atajos de teclado permiten ahorrar tiempo al realizar acciones habituales ya que conociendo y usando la combinación de teclas es mucho más rápido que usar el ratón. Los usuarios que trabajan con una aplicación gran cantidad de tiempo les facilita la tarea. En las aplicaciones web ya no es tan habitual encontrar asignaciones de combinación de teclas pero también se pueden emplear y son igual de útiles.

La forma de utilizar combinaciones de teclas en una página web es haciendo uso de los eventos _onKeyDown_ y _onKeyUp_ o el [atributo global _accesskey_](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey) que puede ser empleado en cualquier elemento aunque dependiendo del tipo de elemento el comportamiento puede ser distinto. El _listener_ del evento recibe como argumento un objeto que representa el evento, entre la información que contiene está la tecla pulsada y las teclas de control adicionales pulsadas al mismo tiempo.

En este ejemplo se captura la combinación de teclas <kbd>Ctrl + Shift + s</kbd> a nivel de página que muestra una ventana emergente utilizando la función _alert()_ de JavaScript. El [objeto del evento](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) que se recibe como parámetro del _listener_ posee las propiedades _ctrlKey_, _shiftKey_ y _altKey_ con las que determinar además de la tecla pulsada las teclas modificadoras adicionales pulsadas al mismo tiempo.

{{< code file="HtmlKeyCombinations.xhtml" language="html" options="" >}}

{{< image
    gallery="true"
    image1="image:key-combinations-1.png" optionsthumb1="300x200" title1="Ejemplo combinaciones de teclas"
    caption="Ejemplo combinaciones de teclas" >}}

Los usos que se les pueden dar a estas combinaciones de teclas van desde posicionar el foco en un determinado campo de entrada o realizar alguna acción como enviar los datos de un formulario una vez están rellenados y son válidos o cualquiera otra acción mediante [JavaScript][javascript]. Haciendo uso del método [preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) del objeto evento se evita que el evento dispare la acción por defecto si tiene una asignada.

La propiedad global _accesskey_ puede utilizarse en cualquier elemento de HTML, en el ejemplo en un elemento de formulario _input_ y en un botón. En [Firefox][firefox] y [GNU][gnu]/[Linux][linux] la combinación de teclas es <kbd>Alt + Shift + [key]</kbd>, para el campo de texto la combinación es <kbd>Alt + Shift + t</kbd> y para el botón <kbd>Alt + Shift + b</kbd>, en el botón la acción es ubicar el foco de entrada en el campo de texto y para el botón realizar la acción clic.

{{< image
    gallery="true"
    image1="image:key-combinations-2.png" optionsthumb1="200x150" title1="Captura de Ctrl + Shift + s"
    image2="image:key-combinations-3.png" optionsthumb2="200x150" title2="Captura de Alt + Shift + t, ubica el foco en el campo de texto"
    image3="image:key-combinations-4.png" optionsthumb3="200x150" title3="Captura de Alt + Shift + b, ejecuta la acción clic del botón"
    caption="Acciones con combinaciones de teclas" >}}

{{< reference >}}
* [Atributos globales][https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes]
* [Introducción al JavaScript de ECMAScript 6][blogbitix-198]
{{< /reference >}}

{{% /post %}}
