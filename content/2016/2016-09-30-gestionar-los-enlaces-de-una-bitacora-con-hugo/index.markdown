---
pid: 182
type: "post"
title: "Gestionar los enlaces de una bitácora con Hugo"
url: "/2016/09/gestionar-los-enlaces-de-una-bitacora-con-hugo/"
date: 2016-09-30T23:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:hugo.svg"
tags: ["blog", "planeta-codigo"]
summary: "Incluir enlaces a otras web u otras páginas o artículos dentro del mismo sitio es el fundamento de internet y como tal es muy común. En el momento que queramos cambiar la URL de un enlace que haya sido incluido múltiples veces en un sitio puede que no nos sea una tarea sencilla, ni para buscarlos o por hacerlo uno a uno. Usando Hugo sigo la forma que explico a continuación para simplificar el sustituir una URL que cambia y para simplificar el hacer referencia e insertar los enlaces."
---

{{% post %}}

{{< logotype image1="hugo.svg" >}}

Una de las tareas más comunes en una página web o en una bitácora es incluir enlaces a otras páginas, el enlace es uno de los elementos básicos que forman la web. Es probable que en muchas páginas o artículos incluyamos repetidamente los mismos enlaces y como resultado tendremos en muchas páginas y artículos los mismos enlaces. El día que unos de esos enlaces cambie de alguna forma su dirección URL deberíamos actualizar todas las páginas o artículos para referenciar la nueva URL y no tener enlaces rotos. Puede no ser una tarea sencilla, más si usamos [WordPress][wordpress], [Blogger][blogger] o una herramienta similar. Voy a comentar como he resuelto este posible problema en mi bitácora en la que uso [Hugo][hugo].

Hace un par de años cambié [de usar Blogger a usar Octopress][blogbitix-0] y después de un tiempo [de usar Octopress a usar Hugo][blogbitix-80]. [Octopress][octopress] o [Jeckyll][jekyll] y Hugo son herramientas muy similares, básicamente los dos son generadores estáticos de páginas web o bitácoras que después de alojan en cualquier servidor web o en servicios como [GitHub Pages][github-pages].

Para no incluir en las páginas o artículos las mismas URLs una y otra vez tengo un archivo de referencias a enlaces en el que en formato [markdown][markdown] a cada URL le doy un identificativo. Posteriormente hago uso de una facilidad que proporciona Hugo que son los [shortcodes](https://gohugo.io/extras/shortcodes/) similares a pequeños contenidos que pueden ser incluídos en los archivos de contenido u otras plantillas, este sería un trozo de un archivo de enlaces:

{{< code file="links.xhtml" language="html" options="" >}}

El día que un enlace cambie basta con que lo modifique en el archivo enlaces sin tener que revisar, buscar, reemplazar y editar los archivos de contenido.

Esto para los enlaces externos hacia otras páginas pero de forma similar lo aplico a los enlaces internos hacia otras páginas de la bitácora. A cada artículo le asigno un número secuencial según los voy escribiendo y publicando, con esa secuencia creo un identificativo para el artículo y le asocio su URL.

{{< code file="links-posts.xhtml" language="html" options="" >}}

Con estos archivos usando la [sintaxis de markdown](https://daringfireball.net/projects/markdown/syntax#link) con `\[texto enlace\]\[identificativo-enlace\]`, por ejemplo `\[¡Hola nuevo mundo!\]\[blogbitix-0\]`, puedo hacer referencia a los enlaces con su identificativo y al generar el contenido estas referencias será sustituidas por los enlaces referenciados.

Rastreando la página web o bitácora podremos encontrar y posteriormente corregir los enlaces rotos que encontremos. En el artículo [cómo buscar los enlaces rotos de un sitio web][blogbitix-115] comento varias formas de descubrir estos enlaces que en su momento lo fueron pero han dejado de ser válidos y que proporcionan una mala experiencia al usuario.

{{< reference >}}
* [Hugo][hugo]
* [Octopress][octopress]
* [WordPress][wordpress]
* [¡Hola nuevo mundo!][blogbitix-0]
* [Mi experiencia y consejos para un blog][blogbitix-7]
* [Generador de páginas web estáticas y bitácoras Hugo][blogbitix-323]
* [Nuevo diseño en Blog Bitix][blogbitix-80]
* [Cómo buscar los enlaces rotos de un sitio web][blogbitix-115]
{{< /reference >}}

{{% /post %}}
