---
pid: 321
type: "post"
title: "Depurar código JavaScript con la instrucción debugger"
url: "/2018/05/depurar-codigo-javascript-con-la-instruccion-debugger/"
aliases: ["/2018/05/depuracion-con-la-instruccion-debugger-en-javascript/"]
date: 2018-05-18T19:00:00+02:00
updated: 2018-05-19T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:javascript.svg"
tags: ["javascript", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="javascript.svg" title1="JavaScript" width1="200" >}}

Los navegadores web utilizan la palabra clave sentencia _debugger;_ como punto de ruptura para iniciar el depurado de un código JavaScript. En vez de poner el punto de ruptura desde el navegador utilizando la herrmienta de depuración para desarrolladores con esta instrucción se puede poner en el código fuente donde se desee, de esta forma se evita buscar entre los múltiples recursos que haya cargados en la página e ir a la línea en la que se desea iniciar la depuración poniendo un punto de ruptura.

Suponiendo que se desea poner un punto de ruptura en un código JavaScript hay que editar el archivo JavaScript de código fuente e incluir la sentencia _debugger;_ como en el siguiente caso. Cuando el navegador ejecute esa sentencia iniciará, tiendo las herramientas de depuración abiertas, el depurador.

{{< code file="Debugger.html" language="html" options="" >}}

{{< image
    gallery="true"
    image1="image:javascript-debugger.png" optionsthumb1="300x200" title1="JavaScript Debugger"
    caption="JavaScript Debugger" >}}

Con la herramienta de depuración abierta se pueden poner expresiones de inspección, nuevos puntos de ruptura e ir paso a paso en la ejecución del código JavaScript. Esta sentencia para iniciar la depuración es lo mismo que añadir un punto de ruptura inspeccionando los recursos de JavaScript de la página pero quizá resulta más cómodo.

{{< reference >}}
* [MDN debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
{{< /reference >}}

{{% /post %}}
