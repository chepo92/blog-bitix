---
pid: 472
type: "post"
title: "Uso de un paquete npm con Webpack creado con Storybook, React y TypeScript"
url: "/2020/03/usar-un-paquete-npm-con-webpack-creado-con-storybook-react-y-typeScript/"
date: 2020-03-29T14:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:hello-world-page.png"
tags: ["javascript", "planeta-codigo", "web"]
---

{{% post %}}

{{< logotype image1="typescript.svg" image2="react.svg" title2="html.svg" >}}

En el ejemplo [Desarrollar componentes React con TypeScript y sistemas de diseño con Storybook][blogbitix-468] mostraba cómo desarrollar componentes [React][react] con [TypeScript][typescript] y de forma aislada con [Storybook][storybook] junto con sus pruebas unitarias y visuales con [Jest][jestjs]. El resultado de ese proyecto es un paquete npm a instalar y usar en otros proyectos como este.

Un paquete npm es un archivo comprimido que se instala como dependencia en un proyecto. En este ejemplo se usa el paquete directamente, utilizar un repositorio de paquetes facilita el uso y distribución de los paquetes a los proyectos que los usen y esta es la forma que se debe utilizar en un proyecto real.

Este comando crea la estructura inicial de archivos y carpetas de un proyecto JavaScript que use React y TypeScript. Sobre esta base he creado el archivo de configuración para [Webpack][webpack], eliminado la dependencia de _react-script_ y creada la tarea _start_ en el archivo _package.json_.

{{< code file="create-react.sh" language="bash" options="" >}}
{{< code file="package.json" language="json" options="" >}}

El paquete npm del proyecto en el que se desarrolla el componente de ejemplo se instala con el siguiente comando.

{{< code file="npm-install-package.sh" language="bash" options="" >}}

Usando el gestor de módulos Webpack en un proyecto se puede hacer referencia a los componentes de los paquetes instalados y generar como resultado los archivos distribuibles que son los que realmente se enviarán al cliente. En Webpack se indica un punto de partida y todas las referencias necesarias a otros módulos se empaquetan. En este caso se hace referencia a un archivo JavaScript que hace tiene un uso del componente del paquete npm del componente ejemplo.

Lo primero es instalar el gestor de módulos Webpack y crear se archivo de configuración. En esta configuración se indica el directorio donde se generará el resultado del empaquetado de cada uno de los puntos de entrada y también la configuración para el servidor de desarrollo. En el servidor de desarrollo Webpack hace de servidor web que sirve los archivos procesados y un directorio público donde los html pueden hacer referencia a ellos como en el caso de _index.html_.

{{< code file="npm-install-webpack.sh" language="bash" options="" >}}
{{< code file="webpack.config.js" language="javascript" options="" >}}

El archivo _index.tsx_ sería un punto de entrada para Webpack, en el se importa el componente _App_ y se incluye en la página.

{{< code file="index.tsx" language="tsx" options="" >}}
{{< code file="App.tsx" language="tsx" options="" >}}

El archivo _index.html_ permite probar la página con el componente incluído.

{{< code file="index.xhtml" language="html" options="" >}}

En el directorio indicado en la configuración de Webpack se generan los archivos de resultado. En el están los archivos _.map_ para depurar en javascript y los _.d.ts_ con definiciones de tipos de TypeScript para archivos JavaScript.

{{< code file="tree-build.out" language="plaintext" options="" >}}

En la página de prueba que hace uso del JavaScript producido por Webpack se carga el componente del paquete npm desarrollado en otro proyecto haciendo uso de Storybook.

{{< image
    gallery="true"
    image1="image:hello-world-page.png" optionsthumb1="300x200" title1=""
    caption="Componente desarrollado en Storybook en una página" >}}

{{% sourcecode git="blog-ejemplos/tree/master/StorybookComponente" command="npm install && npm run start" %}}

{{% reference %}}
* [React Js Tutorial – Environment SetUp Using Webpack](https://watchdown.com/react-js-environment-setup-using-webpack/)
* [Managing Dev and Production Builds with Webpack](https://atendesigngroup.com/blog/managing-dev-and-production-builds-webpack)
* [Webpack DevServer](https://webpack.js.org/configuration/dev-server/)
{{% /reference %}}

{{% /post %}}
