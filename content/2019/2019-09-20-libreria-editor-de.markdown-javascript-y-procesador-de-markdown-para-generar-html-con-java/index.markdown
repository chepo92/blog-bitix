---
pid: 433
type: "post"
title: "Librería editor de markdown JavaScript y procesador de markdown para generar HTML con Java"
url: "/2019/09/libreria-editor-de-markdown-javascript-y-procesador-de-markdown-para-generar-html-con-java/"
date: 2019-09-20T13:30:00+02:00
updated: 2019-09-20T15:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "resource:images/editor-md.png"
tags: ["java", "javascript", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="javascript.svg" title1="JavaScript" width1="200" image2="java.svg" >}}

Algunas aplicaciones permiten escribir contenido para posteriormente mostrarse en una página web. Permitir introducir directamente en texto en formato HTML es peligroso ya que puede causar problemas si no es correcto y ha de validarse para no permitir introducir archivos CSS, archivos JavaScript u otras etiquetas que supongan un problema de seguridad o desmaqueten la página web. Una alternativa es utilizar como entrada texto en formato _markdown_ y posteriormente transformarlo a contenido en formato HTML.

_Markdown_ es un formato de texto simple con una sintaxis que permite introducir títulos, negritas, itálica, listas y listas numeradas, enlaces o imágenes. El texto en formato _markdown_ se puede transformar posteriormente a formato HTML. Hay múltiples librerías de JavaScript para crear un editor _markdown_ con algunos botones para introducir las opciones básicas e incluso previsualizar el contenido.

Como editor JavaScript para _markdown_ de las varias opciones que he encontrado la que más me ha gustado es [Editor.md](https://pandao.github.io/editor.md/en.html) por sus numerosas opciones, documentación y ejemplos, aunque no tiene una versión reciente. Posee barra de herramientas para realizar opciones básicas de edición, previsualizador de contenido HTML, colapsador de secciones, manejadores de eventos, subir imágenes, internacionalización, personalizar la barra de herramientas como está descrito en su [sección de ejemplos](https://pandao.github.io/editor.md/examples/index.html). En la [página de Editor.md en GitHub](https://github.com/pandao/editor.md) están documentadas las opciones de configuración.

{{< code file="index-1.html" language="html" options="" >}}

{{< image
    gallery="true"
    image1="image:editor-md.png" optionsthumb1="650x450" title1="Editor JavaScript de markdown"
    caption="Editor JavaScript de markdown" >}}

Una vez que se obtiene el texto en formato _markdown_ en algún momento al visualizarlo como parte del código fuente en una página web hay que transformarlo a formato HTML, para esto en Java hay varias librerías algunas ya obsoletas, antiguas y sin mantenimiento. De las que su desarrollo sigue activa una es [Flexmark Java](https://github.com/vsch/flexmark-java).

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

{{< reference >}}
* [Markdown Guide](https://www.markdownguide.org/getting-started)
* [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax)
{{< /reference >}}

{{% /post %}}
