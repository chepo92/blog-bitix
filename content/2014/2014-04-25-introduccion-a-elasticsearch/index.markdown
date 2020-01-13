---
pid: 21
type: "post"
title: "Introducción a Elasticsearch"
url: "/2014/04/introduccion-a-elasticsearch/"
date: 2014-04-25T17:15:05+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:elasticsearch.svg"
tags: ["software", "programacion", "planeta-codigo"]
summary: "Elasticsearch es una potente herramienta que nos permite indexar una gran volumen de datos y posteriormente hacer consultas sobre ellos soportando entre otras muchas cosas búsquedas aproximadas, facetas y resaltado. Un uso puede ser hacer consultas de texto completo, al estar los datos indexados los resultados se obtienen de forma muy rápida."
---

{{% post %}}

{{< logotype image="elasticsearch.svg" title="Elasticsearch" width="300" >}}

Continuando con la forma de [como dar solución a la búsquedas en las entidades de dominio](https://elblogdepicodev.blogspot.com.es/2013/08/busquedas-de-texto-completo-en-objetos-de-dominio.html) en esta entrada profundizaré en la solución que comentaba de usar [Elasticsearch](http://www.elasticsearch.org) (ES). ES se basa en [Lucene](http://lucene.apache.org/core/) pero expone su funcionalidad a través de una interfaz REST recibiendo y enviando datos en formato JSON y oculta mediante esta interfaz los detalles internos de lucene. Esta interfaz permite que pueda ser utilizada por cualquier plataforma no solo Java, puede usarse desde Python, .NET, PHP o incluso desde un navegador con JavaScript. Es persistente, es decir, que lo que indexemos en ella sobrevivirá a un reinicio del servidor.

Como comentaba en [el artículo anterior de búsquedas sobre entidades de dominio](https://elblogdepicodev.blogspot.com.es/2013/08/busquedas-de-texto-completo-en-objetos-de-dominio.html) ES nos puede servir para hacer búsquedas a texto completo pero también podemos hacer otra serie de cosas adicionales que no podemos con una base de datos relacional aunque soporte en su lenguaje SQL búsqueda a texto completo, por ejemplo, resaltado (highlight) y facetas (facets), también permite hacer búsquedas vagas (fuzzy) y soporta diferentes analizadores según el idioma de la propiedad en que se busque. El indexar y desindexar los datos en elasticsearch para que luego puedan ser buscados es responsabilidad nuestra y además de insertarlos o eliminarlos en la base de datos debemos hacer lo mismo en ES ya sea haciéndolo en ambos sitios a la vez o mediante un proceso de fondo que se encargue de ello.

La instalación de ES es muy sencilla, basta con [descargar el zip de su distribución](http://www.elasticsearch.org/overview/elkdownloads/), descomprimirlo e iniciarlo con el siguiente comando:

{{< code file="script-1.sh" language="bash" options="" >}}

Después de unos segundos deberemos ver algo como lo siguiente.

{{< image
    gallery="true"
    image1="image:elasticsearch.png" optionsthumb1="300x200" >}}

Elasticsearch usa sus propios conceptos y aunque no es una base de datos relacional algunos pueden ser similares. Lo que en en una base de datos relacional es un esquema en ES es un índice, lo que en la primera es una tabla en ES es un tipo, continuando una fila en ES es un documento y finalmente una columna es una propiedad en ES.

La documentación de Elasticsearch es un documentación de referencia probablemente pero para aprender a sacarle el máximo provecho probablemente debamos buscar algún manual o libro que nos lo explique de una forma más didáctica. Algunas opciones son el libro [Exploring Elasticsearch](http://exploringelasticsearch.com/) y el [tutorial Elasticsearch](http://www.elasticsearchtutorial.com/).

Veamos como crear y borrar un índice, para ello utilizaremos la herramienta curl:

{{< code file="script-2.sh" language="bash" options="" >}}

Aunque Elasticsearch es orientado a documentos y estos no tienen que adherirse a un esquema como en una base de datos relacional, podemos instruir a Elasticsearch como queremos que haga las búsquedas sobre los campos del documento. Para ello definimos la correspondencia (mapping). A continuación pondré el caso hipotético de un tipo libro que tiene las propiedades de nombre y descripción en varios idiomas, una serie de etiquetas para catalogarlo y una cantidad.

{{< code file="script-3.sh" language="bash" options="" >}}

Con la siguiente petición podemos ver el mapeo de un tipo.

{{< code file="script-4.sh" language="bash" options="" >}}

El mapeo no es necesario definirlo previamente pero es aconsejable para ciertas propiedades sino queremos que ES tome valores por defecto o haga suposiciones, a continuación insertamos los documentos. Cada documento tiene un identificativo que deberemos asignarle y para indexarlo básicamente proporcionamos un JSON con las propiedades del documento. Elasticsearch se encargará de indexarlo para que una búsqueda posterior se ejecute rápidamente.

{{< code file="script-5.sh" language="bash" options="" >}}

Con las anteriores peticiones hemos indexado 3 documentos, podemos ver los datos de cada uno de ellos con:

{{< code file="script-6.sh" language="bash" options="" >}}

Una vez tenemos unos cuantos documentos indexados en ES podemos empezar a hacer búsquedas. Elasticsearch para hacer las búsquedas usa su propio lenguaje de DSL, no es sencillo y la documentación de ES no es muy útil para aprender a como usarla. Pondré algunos ejemplos simples, probablemente no reales y no representativos de todo el potencial que puede ofrecer ES. El primero es una búsqueda por una determinada palabra.

{{< code file="script-7.sh" language="bash" options="" >}}

Una búsqueda similar a la anterior pero con más condiciones, exigiendo que no tenga unas palabras en concreto y algunas que deberían tener haciendo que ES valore más los documentos que las tengan.

{{< code file="script-8.sh" language="bash" options="" >}}

Además de búsquedas ES puede ofrecernos más funcionalidades como las facetas con las que podemos obtener un sumatorio de los resultados. En la siguiente consulta buscamos los documentos con una determinada palabra y además le pedimos a ES que nos devuelva cuantos documentos hay que cumplan ese criterio en cada etiqueta. Esto probablemente es lo que usen en la tienda de Amazon cuando muestran cuantos elementos hay en las diferentes categorizaciones. Aunque en Amazon solo muestran las categorías de los elementos buscados probablemente podrían mostrar cuantos elementos hay en cada una de esas categorías.

{{< code file="script-9.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:categorias-amazon.png" optionsthumb1="300x200" title1="Categorías de productos (facets) en Amazon" >}}

Otra de las funcionalizades que nos puede interesar es que ES nos ofrezca sugerencias para determinados términos, en el siguiente ejemplo solicitamos además de la búsqueda sugerencias para algunas palablas que tienen fallos de escritura.

{{< code file="script-10.sh" language="bash" options="" >}}

Finalmente, otra cosa que nos puede interesar es que ES nos resalte las palabras de determinados campos para destacar las coincidencias de los resultados de forma visual que se han encontrado. Esto necesita { store: "yes" } en la correspondencia de la propiedad.

{{< code file="script-11.sh" language="bash" options="" >}}

Estos son solo unos pocos ejemplos, ES seguro que puede ofrecer muchas cosas más que leyendo solo la documentación de referencia es difícil descubrir. Unos buenos libros que explican muchas de las posibilidades y opciones de forma más didáctica son [Elasticsearch: The Definitive Guide](https://amzn.to/2sChYkF) y/o [Elasticsearch Server](https://amzn.to/37GgF31), en algunos casos la documentación propia del proyecto es suficiente pero en el caso de Elasticsearch algunos libros como estos son casi necesarios para dominarlo.

{{< amazon
    linkids="f844862e917834820c94b2dbae241b1c,b790502cf2724f0007de5bc473e81c9e"
    asins="1449358543,B00JXLF7AK" >}}

{{< reference >}}
* [Búsquedas de texto completo en objetos de dominio](https://elblogdepicodev.blogspot.com.es/2013/08/busquedas-de-texto-completo-en-objetos-de-dominio.html)
* [Elasticsearch](http://www.elasticsearch.org)
* [Exploring Elasticsearch](http://exploringelasticsearch.com/)
* [Tutorial Elasticsearch](http://www.elasticsearchtutorial.com/)
{{< /reference >}}

{{% /post %}}
