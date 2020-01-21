---
pid: 115
type: "post"
title: "Cómo buscar los enlaces rotos de un sitio web"
url: "/2015/12/como-buscar-los-enlaces-rotos-de-un-sitio-web/"
aliases: ["/2015/12/como-buscar-enlaces-rotos-de-un-sitio-web/"]
date: 2015-12-18T18:00:00+01:00
update: 2015-12-20T14:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:html.svg"
tags: ["planeta-codigo"]
summary: "Ya tengamos un sitio web, una bitácora, o una aplicación web es recomendable comprobar cada cierto tiempo los enlaces rotos. Las páginas pueden desaparecer o cambiar de dirección y esto provocará páginas no encontradas en los enlaces que las referenciasen. Usando herramientas que automaticen la tarea podemos encontrar enlaces rotos de forma efectiva y rápida."
---

{{% post %}}

{{< logotype image="html.svg" title="HTML" width="200" >}}

La web se basa en un conjunto de páginas donde unas hacen referencia a otras a través de enlaces. Unido a que las páginas que están bajo el control de los sitios referenciados pudiendo desaparecer o cambiar de dirección hace que las referencias puedan dejar de funcionar o necesitar una redirección, el mensaje que nos indicará el navegador es el conocido _Página no encontrada_ o [error 404](https://es.wikipedia.org/wiki/Error_404) para indicar lo mismo. Que un sitio web contenga referencias a páginas ya no existentes hace que el usuario no encuentre lo que busque empeorando su experiencia de usuario y que los buscadores tienen en cuenta en el posicionamiento de los resultados de búsqueda. Por estos motivos es recomendable de vez en cuando rastrear los enlaces de un sitio web para buscar [enlaces rotos](https://en.wikipedia.org/wiki/Link_rot) cambiándolos por otros nuevos o eliminarlos, ya sean enlaces internos (hacia nuestro propio sitio) o enlaces externos (a otros sitios).

### Comprobar enlaces rotos con herramientas web

Por enlaces o referencias consideramos tanto a páginas como a recursos de imágenes, estilos CSS, JavaScript u otros. Con que un sitio web contenga unas pocas decenas de páginas comprobar manualmente los enlaces se hace una tarea tediosa, que necesita mucho tiempo además de posiblemente no conseguir descubrir todos los enlaces rotos. Hay herramientas disponibles para comprobar los enlaces de forma automatizada. Algunas de estas que he usado recientemente en esta bitácora y con las que he encontrado numerosos enlaces han sido:

* [W3 Check Link](https://validator.w3.org/checklink)
* [Dr. Link Check](http://www.drlinkcheck.com)
* [Deadlink Checker](http://www.deadlinkchecker.com/website-dead-link-checker.asp)

Después de introducir la dirección del sitio web, que con estas herramientas ha de estar accesible en internet, cada una de ellas nos informará de los enlaces rotos que encuentre indicándonos el enlace roto, el texto del enlace y en qué página está. Con esta información podemos corregir esos enlaces del sitio web, bitácora o aplicación. Después de usarlas hubiera dicho que no tenía tantos en está bitácora, me sirvieron para corregirlos.

Las ventajas de estas herramientas web sobre las siguientes con wget y LinkChecker es que no requieren instalar ningún software, las desventajas son que suelen tener una limitación en el número de páginas máximo que rastean y número errores de los que informam, sin embargo, no son excluyentes y utilizando varias da oportunidad de descubrir más enlaces rotos y errores.

{{< image
    gallery="true"
    image1="image:w3c-linkchecker.png" optionsthumb1="300x200" title1="W3C Link Checker"
    caption="W3C Link Checker" >}}

### Comprobar enlaces rotos con wget

Si el sitio web no está accesible en internet o queremos encontrar enlaces rotos en el momento de desarrollo podemos usar el comando `wget` para que nos rastree los enlaces, cada petición que devuelva un código 404 será un enlace roto. En el archivo _wget.log_ tendremos los resultados del rastreo.

{{< code file="wget.sh" language="bash" options="" >}}
{{< code file="wget.log" language="plaintext" options="" >}}

### Comprobar enlaces rotos con LinkChecker

Otra opción es [LinkChecker](https://github.com/linkchecker/linkchecker) que además de comprobar los enlaces internos de un sitio web también tiene la opción de comprobar los enlaces del sitio web hacia a los externos. Un modo de ejecución es utilizando [Docker][docker] con lo que no hace falta instalar nada localmente salvo Docker.

El siguiente comando comprueba los enlaces internos de un sitio web y los externos que contenga generando un archivo de trazas, _linkchecker.log_, con las comprobaciones de resultado correcto y erroneas. Con el registro de las erróneas es fácil corregirlas.

{{< code file="linkchecker.sh" language="bash" options="" >}}
{{< code file="linkchecker.log" language="plaintext" options="" >}}

### Comprobar enlaces rotos de otros sitios web hacia el nuestro

Lo anterior nos sirve para detectar los enlaces rotos que tenemos en nuestro sitio hacia otros, seguramente también nos interesará conocer los enlaces rotos que tienen otros sitios hacia el nuestro. Podemos saber a que páginas no encontradas están accediendo los usuarios de nuestro sitio web lanzando un evento personalizado de [Google Analytics][google-analytics] en la página para el error 404 que mostremos. Dado que los enlaces hacia nuestro sitio incluidos en otros no podemos modificarlos si se tratase de alguno especialmente importante al menos podremos hacer una redirección para que los usuarios lleguen al contenido más apropiado en vez de a una página no encontrada:

{{< code file="analytics.js" language="javascript" options="" >}}

Al mismo tiempo [validar el HTML](https://validator.w3.org/) y [validar los estilos CSS](http://jigsaw.w3.org/css-validator/) respecto a su especificación también mejorarán el código del sitio web.

{{< reference >}}
* [How to find broken links on a website](https://stackoverflow.com/questions/65515/how-to-find-broken-links-on-a-website)
* [Check broken links using wget as a spider](http://www.commandlinefu.com/commands/view/8234/check-broken-links-using-wget-as-a-spider)
{{< /reference >}}

{{% /post %}}
