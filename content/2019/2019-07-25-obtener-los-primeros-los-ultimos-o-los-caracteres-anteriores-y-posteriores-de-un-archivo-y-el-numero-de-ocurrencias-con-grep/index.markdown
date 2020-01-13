---
pid: 423
type: "post"
title: "Obtener los primeros, los últimos o los caracteres anteriores y posteriores de un archivo y el número de ocurrencias con head, tail y grep"
url: "/2019/07/obtener-los-primeros-los-ultimos-o-los-caracteres-anteriores-y-posteriores-de-un-archivo-y-el-numero-de-ocurrencias-con-head-tail-y-grep/"
date: 2019-07-25T20:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Algunos archivos de texto tienen un tamaño de cientos de megas, a veces incluso sin ningún salto de línea. Visualizar el contenido de estos archivos en una aplicación con interfaz gráfica no suele ser posible porque la aplicación se queda bloqueada al intentar cargar tan enormes archivos. Incluso tampoco puede ser posible con un editor mucho más ligero como [vim][vim]. Hacer un _cat_ del archivo tampoco es útil.

Sin embargo, sigue siendo necesario ver parte del contenido de estos archivos de texto grande para validar que el contenido de los mismos es el correcto. La opción que se puede utilizar es ver los primeros o últimos caracteres o lineas con los comandos _head_ o _tail_ usándolos de la siguiente forma.

{{< code file="head-tail-characters.sh" language="bash" options="" >}}
{{< code file="head-tail-lines.sh" language="bash" options="" >}}
{{< code file="archivo.txt" language="bash" options="" >}}

Como programador no es raro trabajar con archivos de más de 100 MiB en los que el texto no contiene saltos de línea y el contenido es una sola línea como es el caso de un archivo en formato XML utilizado para intercambiar información entre dos aplicaciones. Estos archivos por su tamaño y sin saltos de línea se les atragantan a los editores de texto gráficos como [Visual Studio Code][microsoft-visual-studio-code] e incluso a la opción más ligera basada en texto como _vim_.

En ete caso también es necesaria una forma de comprobar el contenido del archivo o contar el número de ocurrencias de un determinado patrón. La herramienta de línea de comandos _grep_ es una gran ayuda en estos dos casos. Suponiendo un archivo XML que contiene elementos con un _tag_ de precio se desea comprobar que estos elementos tienen un valor válido. Utilizando _grep_ y una expresión regular se obtienen las etiquetas _price_, una en cada línea. El parámetro _-E_ indica que se utilizan una expresión regular y el parámetro _-o_ indica que cada coincidencia se emita en una línea nueva.

{{< code file="grep-1.sh" language="bash" options="" >}}
{{< code file="archivo.xml" language="XML" options="" >}}

En caso de no ser un archivo estructurado como XML o querer obtener los 15 caracteres anteriores o posteriores de una coincidencia se utiliza un comando _grep_ similar cambiando la expresión regular.

{{< code file="grep-2.sh" language="bash" options="" >}}

Para contar el número de coincidencias en el archivo se puede combinar el comando _grep_ utilizando la opción _-o_ para que emita cada coincidencia en cada línea y el comando _wc_ con la opción _-l_ para que cuente el número de líneas de entrada. Utilizando una tubería entre ambos comandos es posible contar el número de coincidencias en un archivo.

{{< code file="grep-3.sh" language="bash" options="" >}}

En este caso el XML es muy pequeño y un editor de texto es capaz de abrirlo perfectamente pero un archivo de texto a partir unas cuantas decenas de MiB se le atraganta a los editores incluso a los basados en texto y en el caso querer hacer comprobaciones una buena alternativa o la única es recurrir a los comandos _head_, _tail_, _grep_ y _wc_.

{{< reference >}}
* [Grep characters before and after match?](https://stackoverflow.com/questions/8101701/grep-characters-before-and-after-match)
{{< /reference >}}

{{% /post %}}
