---
pid: 345
type: "post"
title: "El editor de archivos e IDE minimalista Visual Studio Code"
url: "/2018/09/el-editor-de-archivos-e-ide-minimalista-visual-studio-code/"
date: 2018-09-09T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:visual-studio-code.svg"
tags: ["planeta-codigo", "programacion", "software"]
---

{{% post %}}

{{< logotype image1="visual-studio-code.svg" title1="Visual Studio Code" width1="200" >}}

Para trabajar y desde que empecé a usar un generador estático para el blog primero con [Octopress][octopress] y luego con [Hugo][hugo] he necesitado un editor de archivos de texto y de código fuente. Uno de los más conocidos es [Sublime Text][sublime-text] con numerosas funcionalidades y atajos de teclado para realizar muchas acciones únicamente pulsado unas pocas teclas y sin necesidad de ratón en gran medida. Sublime Text está muy bien pero no es gratuito por lo que después de un tiempo empecé a usar [Atom][atom], sin embargo, al estar este basado en [Electron][electronjs] que en realidad es un navegador [Chrome][google-chrome] y [JavaScript][javascript] con [Node][nodejs] su rendimiento se nota pobre. Buscando más alternativas la gente mencionaba bastante a menudo [Visual Studio Code][microsoft-visual-studio-code], lo probé, es el que más me ha gustado de todos y el que uso ahora.

Visual Studio Code es un editor de archivos de texto avanzado orintado a desarrolladores sin llegar a ser un IDE pero con algunas funcionalidades de estos. Visual Studio Code se nota mucho más rápido que Atom y soporta al igual que Sublime Text varias combinaciones de teclas para trabajar rápido con los archivos. Soporta numerosos formatos de archivos con resaltado de sintaxis entre ellos [Markdown][markdown], [Yaml][yaml], HTML, CSS, imágenes _png_ y fotos _jpg_ que son los formatos de archivo que utilizo para crear los artículos del blog. Permite visualizar imágenes y fotos sin necesidad de ir a la aplicación del sistema operativo para visualizarlas. Dada la popularidad que está alcanzando soporta un gran número de complementos o _plugins_ que entre otros añaden resaltado de sintaxis para otros formatos de archivos que por defecto no soporta, como [Java][java]. En el caso del [_plugin_ para Java](https://marketplace.visualstudio.com/items?itemName=redhat.java) también permite asistencia de código y detectar errores de compilación, aunque no llegue a las capacidades de un IDE como [IntelliJ][intellij], [eclipse][eclipse] o [Visual Studio][microsoft-visual-studio] sirve para editar ocasionalmente archivos de código fuente Java sin necesidad de abrir el IDE y su proyecto. Hay complementos para [Python][python], [Ruby][ruby], [Go][go], [Rust][rust] o [Gradle][gradle] entre otros muchos, y por supuesto JavaScript o [TypeScript][typescript].

{{< image
    gallery="true"
    image1="image:visual-studio-code-1.png" optionsthumb1="300x200" title1="Visual Studio Code"
    image2="image:visual-studio-code-2.png" optionsthumb2="300x200" title2="Visual Studio Code"
    caption="Visual Studio Code" >}}

Incluye una [terminal integrada](https://code.visualstudio.com/docs/editor/integrated-terminal) para ejecutar comandos sin necesidad de salir del editor a la terminal del sistema. Soporta [Emmet](https://code.visualstudio.com/docs/editor/emmet) para crear código con _snippets_ en los tipos de archivos que los soporten entre ellos HTML y CSS. También incluye soporte para el sistema de [control de versiones Git](https://code.visualstudio.com/docs/editor/versioncontrol) y otros con _plugins_ que permiten ver las modificaciones realizadas en los archivos y los archivos modificados, hay gran cantidad de complementos.

{{< image
    gallery="true"
    image1="image:git.png" optionsthumb1="300x200" title1="Git integrado"
    caption="Git integrado" >}}

Con la combinación `Ctrl + P` se abre una ventana emergente para abrir archivos por su nombre. Introduciendo `?` se obtienen las posibles acciones que se pueden realizar. Otra muy utilizada es `Ctrl + G` para ir a una línea específica del archivo, también se puede hacer desde la ventana emergente e introduciendo el carácter `:`. Con `Ctrl + Shift + O` se va a los símbolos detectados por editor según el tipo de archivo. Posee una buena [documentación](https://code.visualstudio.com/docs) con la que ir aprendiendo a medida que se usa el mayor provecho posible.

{{< image
    gallery="true"
    image1="image:ventana-emergente.png" optionsthumb1="300x200" title1="Ventana emergente de acciones rápidas"
    caption="Ventana emergente de acciones rápidas" >}}

En definitiva tiene una buena cantidad de opciones que como desarrolladores son muy útiles. Otras funcionalidades que tiene son:

* Minimapa del archivo abierto.
* Ajuste de linea.
* Buscar y reemplazar usando expresiones regulares.
* Espacios de trabajo con mútiples directorios raíz.
* Ampliar, reducir el tamaño del texto y ajuste automático de linea.
* Diseño de archivos abiertos en columnas, filas y rejilla.
* Soporte de secuancía final de línea Windows y Unix, con soporte para UTF-8.
* Depurador de código.
* Tiene un ritmo de actualización muy alto y en cada nueva versión se añaden numerosas funcionalidades o se mejoran las existentes.

Por otro lado ocupa menos que los 260 MiB de Atom contra los 180 MiB de Visual Studio Code y está disponible en las plataformas más utilizadas [Windows][windows], [Mac][mac] e incluso [GNU][gnu]/[Linux][linux] aún siendo un producto de [Microsoft][microsoft]. Microsoft proporcionando software para la plataforma del pingüino, quien lo diría hace unas décadas.

En los sistemas Unix habrá gente que prefiera [Vim][vim] por sus enormes posibilidades, bajo consumo de memoria y exprimir al máximo cada megaherzio del procesador pero este requiere un tiempo de aprendizaje elevado inicial comparado con cualquiera de los editores anteriores.

{{< reference >}}
* [Setup](https://code.visualstudio.com/docs/setup/setup-overview)
* [Basics](https://code.visualstudio.com/docs/editor/codebasics)
* [Tasks](https://code.visualstudio.com/Docs/editor/tasks)
* [Edition evolved](https://code.visualstudio.com/docs/editor/editingevolved)
* [Integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
* [Emmet](https://code.visualstudio.com/docs/editor/emmet)
* [Extension gallery](https://code.visualstudio.com/docs/editor/extension-gallery)
* [Java tutorial](https://code.visualstudio.com/docs/java/java-tutorial)
{{< /reference >}}

{{% /post %}}
