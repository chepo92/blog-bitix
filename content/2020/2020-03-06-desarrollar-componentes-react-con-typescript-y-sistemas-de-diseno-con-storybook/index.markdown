---
pid: 468
type: "post"
title: "Desarrollar componentes React con TypeScript y sistemas de diseño con Storybook"
url: "/2020/03/desarrollar-componentes-react-con-typescript-y-sistemas-de-diseno-con-storybook/"
date: 2020-03-06T16:00:00+01:00
updated: 2020-03-06T21:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:calibre.png"
tags: ["javascript", "planeta-codigo", "web"]
summary: "Con Storybook los componentes de React, Vue o Angular es posible desarrollarlos de forma aislada sin necesidad de hacerlo una una de las aplicaciones finales donde se usen. Esto permite independizar su desarrollo de las aplicaciones finales y proporciona un entorno donde hacerlo. Con complementos permite realizar pruebas unitarias y pruebas visuales."
---

{{% post %}}

{{< logotype image1="typescript.svg" image2="react.svg" title2="html.svg" image3="storybook.svg" >}}

La web ha evolucionado enormemente desde las simples páginas estáticas con contenido HTML, imágenes y hojas de estilos. Con posterioridad se añadió  un lenguaje de programación en el navegador del lado del cliente para realizar tareas en las propias páginas como validaciones de formulario. A medida que el tiempo ha pasado los navegadores han implementado nuevos estándares y a través de JavaScript ahora hay posibilidad de desarrollar tareas en el lado de cliente que rivalizan con las aplicaciones tradicionales de escritorio.

Algunas de estas nuevas capacidades de JavaScript son nuevas versiones del lenguaje con [ECMAScript][ecmascript] con soporte para módulos, [WebGL][webgl] o componentes de lado de cliente con [Web Components][web-components]. Con las nuevas capacidades de JavaScript han surgido una comunidad de JavaScript con numerosas librerías entre las que elegir para realizar tareas. Una de las áreas son los componentes de lado del cliente, [el estándar que define la W3C son los Web Components][blogbitix-388] pero hay algunas otras alternativas que sustituyen o complementan como [React][react], [Vue][vuejs] o [Angular][angular].

Para desarrollar componentes en lado del cliente se necesita la aplicación final donde se van a usar, si se está desarrollando una librería para ser usada en múltiples aplicaciones de una organización o incluso un sistema de diseño o _design system_ para la organización es muy útil poder desarrollar, probar y ejecutar estos componentes de forma aislada de la aplicación donde se usen.

En este artículo muestro cómo utilizar [Storybook][storybook], componentes React con [TypeScript][typescript], pruebas unitarias con [Jest][jestjs] y visuales con [Jest Image Snapshot][jest-image-snapshot], archivos CSS con [Less][less] finalmente como crear un paquete de [npm][npm] para utilizarlo en otra librería o proyecto.

### Desarrollo aislado de componentes, sistemas de diseño y documentación con Storybook

Storybook es una herramienta que permite desarrollar los componentes de React, Vue o Angular entre otros de forma aislada, es como una caja de arena donde desarrollarlos, probarlos y además documentarlos. El desarrollo incluye las pruebas unitarias con Jest y _visual testing_ con un complemento para Jest que permite si con algún cambio ha habido alguna variación en el aspecto visual de un componente a nivel de píxel. También permite ver el comportamiento de los componentes en diseños _resposive_ y ver su documentación así como en diferentes configuraciones.

Storybook puede utilizarse para implementar un _design system_ de una organización y ver los diferentes colores, estilos y componentes en ejecución y no solo como un diseño. Esto hace que el diseño y la implementación del diseño se mantengan sincronizados y no surjan inconsistencias entre ellos.

En su [guía de inicio](https://storybook.js.org/docs/guides/quick-start-guide/) un comando permite crear la estructura de archivos para empezar a usarlo.

{{< code file="storybook-create.sh" language="bash" options="" >}}

Con otro comando se inicia un servidor que genera la página web para Storybook. Por defecto hay dos historias o _stories_ con dos componentes de React propios de Storybook. Las _stories_ son las definiciones de las variaciones de los componentes o del _design system_.

{{< code file="storybook-run.sh" language="bash" options="" >}}

Código de definición de una historia.

{{< code file="0-Welcome.stories.tsx" language="typescript" options="" >}}

Según los parámetros de los componentes estos tiene variaciones, en el ejemplo si se indica un parámetro muestra un mensaje por defecto si se le pasa un parámetro con un nombre muestra un mensaje con ese nombre.

{{< image
    gallery="true"
    image1="image:storybook-welcome.png" optionsthumb1="200x150" title1="Historia de bienvenida"
    image2="image:storybook-helloworld.png" optionsthumb2="200x150" title2="Componente HelloWorld con TypeScrtipt"
    image3="image:storybook-hellopicodotdev.png" optionsthumb3="200x150" title3="Variación del componente HelloWorld"
    caption="Historia de bienvenida y componente HelloWorld" >}}

Storybook ofrece dos formas de desarrollar las _stories_, en formato _Component Story Format_ o CSF o con la sintaxis MDX que es similar a Markdown con algunas cosas adicionales para poder añadir visualizaciones de componentes. El formato MDX permite añadir texto y documentar con descripciones las _stories_.

* [Story en formato CSF](https://storybook.js.org/docs/formats/component-story-format/)
* [Story en formato MDX](https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md)

{{< code file="HelloWorld.stories.tsx" language="tsx" options="" >}}
{{< code file="HelloWorld.stories.mdx" language="markdown" options="" >}}

En la web se pueden consultar varios [ejemplos de Storybook](https://storybook.js.org/docs/examples/) que han desarrollado otras organizaciones y obtener una muestra de su utilidad.

* [Storybook de Coursera](https://building.coursera.org/coursera-ui/)
* [Storybook de BBC](https://bbc.github.io/psammead/)
* [Storybook de React Native](https://necolas.github.io/react-native-web/docs/)

Storybook posee varios complementos que le añaden nuevas capacidades. Algunos son:

* _@storybook/addon-docs_: permite desarrollar historias en formato MDX.
* _@storybook/addon-viewport_: permite probar las historias aplicando diseños _responsive_.
* _@storybook/addon-knobs/register_: permite modificar propiedades de los componentes desde Storybook y observar los cambios en tiempo real.

Para usar un complemento hay que instalar su paquete y añadirlo en el archivo de configuración.

{{< code file="npm-install-storybook-addons.sh" language="bash" options="" >}}
{{< code file="main.js" language="javascript" options="" >}}

### Lenguaje de programación TypeScript y TSLint

TypeScript es un superconjunto de JavaScript, su principal diferencia es que es un lenguaje tipado lo que permite descubrir en tiempo de compilación numerosos errores que se producirán en tiempo de ejecución y que los editores ofrecen soporte realizar _refactors_ de forma rápida y segura. Los componentes de React pueden desarrollarse con TypeScript.

Para desarrollar un componente propio basta con crear el archivo del componente en la carpeta _src/components_ con la definición del componente en este caso de React. Con React se incluye el soporte para desarrollar componentes con ES2016 y JSX de React, a continuación se muestra usando TypeScript y archivos TSX que es el equivalente de JSX en TypeScript.

Para añadir el soporte de TypeScript a Storybook hay que instalar algunos paquetes npm, crear algún archivo de configuración y realizar modificaciones en otros. Además de TypeScript se añade el paquete para utilizar el _linter_ [TSLint][tslint] para este lenguaje que muestra errores en caso de no cumplir las convenciones y reglas de formateo.

{{< code file="typescript-install.sh" language="bash" options="" >}}

Este archivo de configuración especifica las opciones para la compilación entre ellas se indica el formato de la salida, los archivos de código fuente _ts_ y _tsx_ son compilados a JavaScript de ECMAScript 5.

{{< code file="tsconfig.json" language="json" options="" >}}

Este es el código de un componente propio de React sencillo programado con TypeScript.

{{< code file="HelloWorld.tsx" language="tsx" options="" >}}
{{< code file="HelloWorld.less" language="css" options="" >}}

Para analizar y validar el formato del código fuente se suelen emplear un _linter_ que muestra un conjunto de mensajes que el código fuente no cumple. Estos mensajes son muy útiles para mantener la uniformidad en el código fuente y una forma automatizada de comprobar las reglas.

{{< code file="tslint.json" language="json" options="" >}}
{{< code file="tslint-run.sh" language="bash" options="" >}}

### Pruebas unitarias y visuales con Jest y Jest Image Snapshot

En los tiempos actuales desarrollar pruebas debería ser parte del desarrollo, Jest permite realizar pruebas unitarias y _jest-image-snapshot_ para realizar pruebas visuales. Hay instalar los paquetes de estas herramientas y añadir varios archivos de configuración, las pruebas también pueden desarrollarse con TypeScript, hay que añadir varios archivos de configuración.

{{< code file="jest-install.sh" language="bash" options="" >}}
{{< code file="jest.config.js" language="javascript" options="" >}}

Para el componente anterior la definición de la prueba unitaria es la siguiente.

{{< code file="HelloWorld.test.tsx" language="tsx" options="" >}}

Algunos cambios que afectan a los componentes son simplemente visuales como color, tamaño de letra, espaciado, ... estos cambios son difíciles de probarlos con pruebas unitarias de código. Para validar estos cambios la estrategia que se emplea es generar una imagen inicial del componente, cuando hay cambios visuales se genera un error y hay que validar visualmente que el cambio es correcto. Esto permite que los cambios visuales no pasen desapercibidos. Para realiza la validación _jest-image-snapshot_ proporciona la imagen de la versión anterior, la imagen nueva y una imagen que muestra las diferencias entre ambas versiones.

Estos son archivos de configuración para Jest.

{{< code file="jest.setup.js" language="javascript" options="" >}}
{{< code file="jest.config-visual.js" language="javascript" options="" >}}
{{< code file="babel.config.js" language="javascript" options="" >}}

El código de la prueba visual requiere incluir interactuar con el navegador donde está contenido el componente en la prueba y especificar el momento en el que tomar la imagen visual de componente.

{{< code file="HelloWorld.test-visual.ts" language="typescript" options="" >}}

En la imagen a revisar se muestra a la izquierda la versión anterior válida, a la derecha la nueva imagen por cambios realizados y en el centro una imagen que resalta las diferencias entre ambas a nivel de pixel. Con estas tres imágenes la revisión es un proceso manual pero sin complicación.

{{< image
    gallery="true"
    image1="image:hello-world-test-visual-ts-visually-looks-correct-1-snap.png" optionsthumb1="300x200" title1="Imagen válida capturda"
    image2="image:hello-world-test-visual-ts-visually-looks-correct-1-diff.png" optionsthumb2="300x200" title2="Diferencias visuales entre válida capturada anterior y nueva con cambios"
    caption="Imagen válida capturada y diferencias visuales por cambios" >}}

Para lanzar las tareas de ejecución de las pruebas unitarias y visuales hay que añadir unos scripts al archivo _package.json_. Posteriormente con estos comandos de npm se ejecutan y se comprueba si hay cambios visuales.

{{< code file="test-run.sh" language="bash" options="" >}}
{{< code file="test-visual-run.sh" language="bash" options="" >}}

En caso de haber diferencias visuales al ejecutar de nuevo los teses se produce un error, hay que revisar visualmente los cambios y si son correctos validar y actualizar las imágenes para ejecuciones futuras.

{{< code file="test-visual-update.sh" language="bash" options="" >}}

### Hojas de estilos CSS con Less

Las hojas de estilo CSS permite separar el formato del contenido HTML. Para facilitar el desarrollo de hojas de estilo han surgido herramientas que añaden capacidades que CSS no posee. Estas herramientas como Less permiten generar como resultado un archivo CSS. Hay múltiples herramientas Less es una de ellas que se caracteriza por su simplicidad.

Storybook permite utilizar archivos de hojas de estilo _less_. Para realizar la transformación de less a css Storybook utiliza [Webpack][webpack], hay que instalar las dependencias que le permiten transformar los archivos y la configuración para que detecte los archivos _less_ para transformarlos a _css_.

{{< code file="npm-install-webpack.sh" language="bash" options="" >}}
{{< code file="webpack.config.js" language="javascript" options="" >}}

### Creación del paquete NPM

El objetivo final es crear un paquete npm que incluya los componentes de React para ser utilizados en una aplicación. Para crear el paquete npm basta ejecutar el comando _npm pack_ pero este lo crea usando la misma estructura de directorios del código fuente lo que hace que al usar los componentes los _imports_ reflejen la estructura del código fuente. Si esto no se desea hay que crear un directorio con el contenido del paquete npm y ejecutar el comando _npm pack_ desde él, esto es lo que hacen los diferentes _scripts_ _build_.

Otros _scripts_ contiene el comando real que se ejecuta cuando se invoca desde la linea de comandos con _npm run [script]_, entre ellos están los de Jest y Storybook.

{{< code file="package.json" language="json" options="" >}}

Un paquete npm es un archivo con extensión _.tgz_ que en el ejemplo se crea en el directorio _build/pack_.

Una vez construido el paquete _.tgz_ para instalarlo en los proyectos donde se quiera usar hay que utilizar el siguiente comando y hacer el _import_ de sus recursos.

{{< code file="npm-install-package.sh" language="bash" options="" >}}

Storybook es una gran ayuda para desarrollar componentes de lado de cliente. Otras herramienta  útil es Webpack como empaquetador de módulos y recursos web de todos lo recursos que se usan en un proyecto. Al utilizar TypeScript no es necesario utilizar [Babel][babeljs] para realizar transformaciones de los archivos a una versión de JavaScript que los navegadores soportan, el compilador de TypeScript permite compilar los archivos de TypeScript a diferentes versiones de JavaScript que son las que finalmente se ejecutan en el navegador.

{{% sourcecode git="blog-ejemplos/tree/master/Storybook" command="npm install && npm run storybook" %}}

{{% reference %}}
* [Step by step: Building and publishing an NPM Typescript package](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)
* [Setting up a React + TypeScript + Storybook project](https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568)
* [How to use jQuery with TypeScript](https://stackoverflow.com/questions/32050645/how-to-use-jquery-with-typescript)
* [Using a JavaScript library (without type declarations) in a TypeScript project](https://medium.com/@steveruiz/using-a-javascript-library-without-type-declarations-in-a-typescript-project-3643490015f3)
* [Webpack TypeScript](https://webpack.js.org/guides/typescript/)
* [TypeScript React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
* [Publishing flat npm packages for easier import paths & smaller consumer bundle sizes](https://davidwells.io/blog/publishing-flat-npm-packages-for-easier-import-paths-smaller-consumer-bundle-sizes)
{{% /post %}}
