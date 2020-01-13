---
pid: 46
type: "post"
title: "Generar URLs semánticas y amigables"
url: "/2014/10/generar-urls-semanticas-y-amigables/"
date: 2014-10-03T20:14:18+02:00
updated: 2015-01-31T01:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

En algunas web las urls incluyen el identificativo del objeto de la base de datos a partir de cual se muestra el contenido principal de la página, en [Blog Stack][blogstack] esto podría ser un artículo pero en otras páginas webs podría ser un producto. Esto genera direcciones de páginas webs «feas» de cara al usuario y al [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) de los buscadores además de exponer cierta información de la base de datos que probablemente no interese a nadie excepto al desarrollador de la página. En este artículo voy a explicar una forma de generar [urls semánticas](https://es.wikipedia.org/wiki/URL_sem%C3%A1ntica), «bonitas» o amigables de cara al usuario y al SEO para los buscadores y como lo he implementado en un ejemplo real como es Blog Stack.

Lo primero que debemos conseguir es que las direcciones urls sean únicas para cualquier página de la web, por tanto, en la url deberemos incluir tanta información como sea necesaria pero al mismo tiempo la mínima para hacerlas únicas, sean cortas y que nos permitan identificar de forma unequívoca el contenido a mostrar o el objeto que nos permite obtener la información a visualizar en la página, esta información formará el denominado _slug_. En el caso de Blog Stack las direcciones «bonitas» se emplean en este momento en dos sitios, para los artículos y para las etiquetas. La información mínima para un artículo es el nombre de la fuente, el año, el mes y el título, para las etiquetas es simplemente el nombre de la etiqueta. Este es un desglose de las partes que forman una dirección url.

{{< code file="url.txt" language="plaintext" options="" >}}

Pero eso no es todo además quizá queramos transliterar los caracteres de forma que las urls no tengan ciertos caracteres propios de cada idioma. La solución simple pero poco efectiva es hacer una serie de sustituciones como por ejemplo reemplazar á por a, ñ por n, etc... Esta solución aparte de tener que hacerla nosotros probablemente no seamos ni siquiera conscientes que deberíamos haber reemplazado algún carácter más, se complica más si hemos de hacer lo mismo con el resto de codificaciones de la que ni siquiera conocemos los caracteres. Una solución mejor es utilizar el comando iconv disponible en linux que hace precisamente lo que buscamos:

{{< code file="iconv.sh" language="bash" options="" >}}

Para que la url sea más fácilmente legible es recomendable convertir las mayúsculas a minúsculas y sustituir los caracteres de espacio por un guión (-). En Blog Stack suponiendo un [artículo][blogbitix-0] de la fuente blogbitix publicado en diciembre de 2013 y de título «¡Hola nuevo mundo!» partiríamos de la siguiente url previamente a aplicar la transliteración de caracteres:

{{< code file="paso-1.txt" language="plaintext" options="" >}}

Convertida a minúsculas:

{{< code file="paso-2.txt" language="plaintext" options="" >}}

Transliterada con iconv a ASCII:

{{< code file="paso-3.txt" language="plaintext" options="" >}}

Y finalmente sustituidos cualquier carácter que no esté entre en la siguiente expresión regular [^a-z1-9-] para eliminar por ejemplo signos de puntuación, múltiples guiones seguidos y si el resultado empieza o acaba por guión eliminándolo, al final tenemos el _slug_ o parte de la [url final][blogbitix-0] a la que deberíamos añadir el protocolo y el dominio:

{{< code file="paso-4.txt" language="plaintext" options="" >}}

Todo esto en código java se traduce en:

{{< code file="Utils-urlize.java" language="java" options="" >}}

Pero ¿si el identificativo del artículo no está en la url como lo asociamos con el artículo? Nos queda proporcionar una solución a esta necesidad de como identificar esa dirección url semántica y más amigable con el objeto del artículo guardado en la base de datos para mostrarlo al visualizar la página solicitada.

La idea para asociar la url con un objeto de base de datos es crear un hash de la url y tenerlo precalculado en la base de datos, con el hash que generamos a partir de la url y su _slug_ cuando recibimos la petición buscamos el objeto que en la base de datos tenga ese hash. ¿Por qué guardar el hash y no el _slug_? Un motivo es porque el hash tiene una longitud constante, probablemente mas corto que el _slug_ además de mayor dispersión en el valor del dato que usando un índice de base de datos es beneficioso en la búsqueda. Si la url es única podemos suponer que el hash será único. Si en un futuro cambiásemos la información del _slug_ para calcular el hash lógicamente deberíamos recalcular todos los hashs. Para calcular el hash podemos usar la función MD5 o SHA con el siguiente código en java.

{{< code file="Utils-hash.java" language="java" options="" >}}

Esta solo es una forma de crear las urls pero suficiente para el propósito de Blog Stack. Quizá en otro caso podríamos querer generar direcciones con caracteres que no solo sean ASCII o incluyan los propios de otra codificación como por ejemplo caracteres cirílicos, chinos o japoneses. También en vez de incluir en la url la referencia a un solo objeto con el _slug_ incluir los _slugs_ de varios objetos, sin esta solución deberíamos incluir un segundo identificativo de la base de datos y las direcciones serán aún más feas, menos amigables y peores en cuanto a SEO.

El código fuente completo de la clase Utils.java lo puedes encontrar en el [repositorio de GitHub de Blog Stack](https://github.com/picodotdev/blog-stack/tree/master).

{{% /post %}}