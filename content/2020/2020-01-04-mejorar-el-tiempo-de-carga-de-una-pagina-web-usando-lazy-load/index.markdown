---
pid: 453
type: "post"
title: "Mejorar el tiempo de carga de una página web usando lazy load"
url: "/2020/01/mejorar-el-tiempo-de-carga-de-una-pagina-web-usando-lazy-load/"
date: 2020-01-04T12:30:00+01:00
updated: 2020-01-04T14:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:metricas-pagespeed-playstation-despues.png"
tags: ["planeta-codigo", "programacion", "web"]
summary: "Las páginas grandes y con muchos recursos como imágenes e _iframes_ implementar la carga vaga o _lazy load_ obtienen un gran beneficio, necesitando realizar menos peticiones en la carga inicial, con menos tamaño y cargándose en menos tiempo. Los navegadores han añadido soporte para desde JavaScript proporciona este soporte."
---

{{% post %}}

{{< logotype image1="firefox.svg" image2="chromium.svg" title2="Chromium" width2="200" >}}

El tiempo de carga de una página web es una métrica importante para una buena experiencia de usuario, es una métrica evaluada por _PageSpeed_ y también de cara al posicionamiento en los buscadores o SEO ya que influye en la fórmula que usa Google para clasificar y posicionar las páginas en la página de resultados de búsqueda, un buen posicionamiento en los buscadores es importante porque significa más visitas a una web que en muchos casos es la mayor fuente de usuarios. Un tiempo de carga alto hace que los usuarios abandonen la página antes de que esté cargada completamente, influyendo en el porcentaje de rebote y el tiempo de visita que se puede medir con [Google Analytics][google-analytics].

Una de las variables que influyen en el tiempo de carga es el número de peticiones y el tamaño de los recursos de esas peticiones que se hacen al servidor para descargar los elementos de la página completa, estos son imágenes, hojas de estilo, archivos de JavaScript, _iframes_, ... Sin embargo, los navegadores cargan todos los elementos de una página incluso aquellos que están en la parte baja e inicialmente no se ven hasta que el usuario se desplaza hasta visualizarlos. Cargar elementos que no se visualizan es innecesario e ineficiente en el navegador pero también para el servidor que ha de atender a más peticiones.

Los artículos de mi blog como [Desempaquetado de PlayStation 4 Slim de 1 TB][blogbitix-432] o [Desempaquetado Intel NUC8i5BEK (Bean Canyon), HyperX Impact (RAM) y Samsung 970 EVO NVMe (SSD)][blogbitix-363], incluyen numerosas imágenes e _iframes_ de vídeos de [Youtube][youtube] y publicidad de [Amazon][amazon], en todas se carga los comentarios de [Disqus][disqus] y para compartir los artículos con [ShareThis][sharethis] que están al final de la página y hasta que el usuario no ha leido el artículo son innecesarios. Disqus además en concreto para cargarse realiza numerosas peticiones adicionales. Estás páginas son de las más complejas por número de recursos y extensión del artículo que tengo en el blog por lo que he analizado una de ellas antes y después aplicando _lazy loading_ para cargar inicialmente solo los elementos que se visualizan que son aquellos que están en la parte superior de la página.

{{< image
    gallery="true"
    image1="image:playstation-1.png" optionsthumb1="300x200" title1="Página PlayStation"
    image2="image:playstation-2.png" optionsthumb2="300x200" title2="Página PlayStation" >}}

{{< image
    gallery="true"
    image1="image:intel-nuc-1.png" optionsthumb1="300x200" title1="Página Intel NUC"
    image2="image:intel-nuc-2.png" optionsthumb2="300x200" title2="Página Intel NUC"
    caption="Páginas representativas de Blog Bitix" >}}

Analizando el número de peticiones, tamaño y tiempo de carga en la página de la PlayStation realizaban 343 peticiones inicialmente, con un tamaño de descarga de 5 MiB en un tiempo de carga según Firefox de 15 segundos. Evaluando esta página con [PageSpeed][google-pagespeed] un aspecto importante que indica a mejora reducir el número de elementos descargados, además de reducir peticiones y tamaño de la página se descarguen inicialmente los elementos importantes y omitiendo recursos de JavaScript hace que el desempeño sea mejor. El resultado es un menor tiempo de carga.

{{< image
    gallery="true"
    image1="image:metricas-pagespeed-playstation-antes.png" optionsthumb1="300x200" title1="Métricas de carga en PageSpeed página PlayStation antes"
    image2="image:metricas-pagespeed-intel-nuc-antes.png" optionsthumb2="300x200" title2="Métricas de carga de PageSpeed página Intel NUC antes"
    caption="Métricas de carga en PageSpeed antes" >}}

{{< image
    gallery="true"
    image1="image:metricas-firefox-antes.png" optionsthumb1="300x200" title1="Métricas de carga de Firefox página PlayStation antes"
    caption="Métricas de carga en Firefox" >}}

La solución es cargar los elementos imágenes, _iframes_, vídeos y comentarios de Disqus cuando se vayan a visualizar al desplazarse el usuario hasta ellos. Esto reduce notablemente el número de peticiones realizadas inicialmente, el tamaño de descarga y el tiempo de carga. Una librería de JavaScript que permite realizar esta funcionalidad es [Lozad][lozad], no tiene dependencias, es muy pequeña, es soprendentemente fácil de utilizar en relación con el beneficio que aporta. Aprovecha el soporte de la interfaz [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) precisamente proporcionada por los navegadores para realizar la carga vaga o _lazy load_ de forma eficiente.

Para las imágenes e _iframes_ hay que añadir una clase a los elementos de HTML y cambiar el atributo _src_ a _data-src_. Los comentarios de Disqus se cargan con un archivo de JavaScript por lo que hay que retrasar la carga hasta que el elemento HTML que los contiene se visualice y con una función de _callback_ se inicia la inserción de su recurso de JavaScript utilizando [jQuery][jquery] para cargar insertar en la página dinámicamente recursos JavaScript.

Este es una plantilla que utilizo para generar de forma estática el contenido del blog con [Hugo][hugo] en el que las imágenes ilustrativas de los artículos usan el atributo _data-src_ e incluyen la clase de CSS _lozad_, en el código fuente o utilizando la función Inspeccionar se comprueba el HTML resultado. El otro archivo parte del JavaScript de este blog que implementa la carga vaga de las imágenes, _iframes_ y _scritps_ de Disqus y ShareThis. Para el caso de insertar JavaScript dinámicamente se observa un elemento con una expresión de jQuery y mediante una función _callback_ que Lozad invoca cuando su elemento se visualiza momento en que se realiza la acción de insertar el recurso de JavaScript.

{{< code file="figureproc.xhtml" language="html" options="" >}}
{{< code file="main.js" language="javascript" options="" >}}

Con simplemente esta mejora, que no es complicada de realizar, añadiendo el código anterior y realizando los sencillos cambios en los atributos de imágenes e _iframes_ las métricas en la comparación con página anterior mejoran notablemente pasando apróximadamente de 15 segungos a menos de 4 en un tiempo de carga hasta que el navegador dejan de hacer peticiones.

<table class="table">
    <thead class="thead-light">
        <tr>
            <th class="thead-light" width="140px">Página</th>
            <th class="thead-light" width="140px">Prueba</th>
            <th>Antes</th>
            <th>Después</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PlayStation</td>
            <td>Firefox</td>
            <td>343 peticiones, 5 MiB, 15s</td>
            <td>104 peticiones, 1.5 MiB, 3.5s</td>
        </tr>
        <tr>
            <td>PlayStation</td>
            <td>PageSpeed</td>
            <td>23</td>
            <td>44</td>
        </tr>
        <tr>
            <td>Intel NUC</td>
            <td>PageSpeed</td>
            <td>9</td>
            <td>38</td>
        </tr>
    </tbody>
</table>

La métrica de PageSpeed mejoran notablemente, es una cifra sobre 100 que aún dista de ser alta debido a que Analytics y AdSense imponen una fuerte penalización por utilizarlos e incluirlos en las páginas. La página [WebPageTest][webpagetest] proporciona algunos datos adicionales y complementarios a los proporcinados por PageSpeed, también es recomendable usarla para medir la variación en los resultados con los cambios realizados con el objetivo de mejorar una página.

{{< image
    gallery="true"
    image1="image:metricas-pagespeed-playstation-despues.png" optionsthumb1="300x200" title1="Métricas de carga en PageSpeed página PlayStation después"
    image2="image:metricas-pagespeed-intel-nuc-despues.png" optionsthumb2="300x200" title2="Métricas de carga de PageSpeed página Intel NUC después"
    caption="Métricas de carga en PageSpeed después" >}}

{{< image
    gallery="true"
    image1="image:metricas-firefox-despues.png" optionsthumb1="300x200" title1="Métricas de carga de Firefox página PlayStation después"
    caption="Métricas de carga en Firefox" >}}

Los navegadores van a añadir el soporte de carga vaga directamente en las imágenes e _iframes_ con un el [atributo loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) mediante el cual el JavaScript anterior será innecesario para estos elementos.

En definitiva es un pequeño cambio sencillo de realizar y que mejora notablemente la experiencia de usuario, la carga del servidor, es recomendable para el SEO incluso desde el punto de vista de la privacidad de los usuarios.

Otro uso distinto para la carga vaga es lanzar eventos de Analytics, esto lo he empleado para saber si los usuarios llegan al final de los artículos. Con esto es posible obtener datos interesantes sobre cuales son las mejoras páginas o artículos, por ejemplo, para diferencia entre página muy visitada por que esté bien posicionada pero ni interesante para los uauarios porque no llegan al final del artículo o por el contrario páginas con pocas visitas pero que los usuarios las leen hasta el final.

{{< code file="app.js" language="javascript" options="" >}}

{{% reference %}}
* [\<img\>: The Image Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)
{{% /reference %}}

{{% /post %}}
