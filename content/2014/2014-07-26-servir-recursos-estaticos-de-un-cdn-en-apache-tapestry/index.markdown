---
pid: 34
type: "post"
title: "Servir recursos estáticos desde un CDN en Apache Tapestry"
url: "/2014/07/servir-recursos-estaticos-desde-un-cdn-en-apache-tapestry/"
aliases: "/2014/07/servir-recursos-estaticos-de-un-cdn-en-apache-tapestry/"
date: 2014-07-26T12:35:50+02:00
updated: 2015-10-19T19:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["software", "java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-icon-light.svg" >}}

Un [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN) no es más que un servidor, servidores o servicio dedicado a servir el contenido estático o actuar de cache para los clientes. Alguno de los motivos por los que podríamos querer usar un CDN en una aplicación son:

* Algunos servicios CDN están repartidos geográficamente por el mundo de modo que el contenido sea servido de un lugar más cercano al usuario esto hace que el tiempo que tarda en cargar un página o servirse el contenido sea menor.
* Descargar la tarea de servir al menos parte del contenido de la aplicación al CDN hará que no nos tengamos que preocupar de tener la capacidad para servirlo. Cuando se cargar una página se hacen varias peticiones al servidor para obtener el contenido como el html, imágenes, estilos, ... haciendo que los contenidos estáticos sean servidos por el CDN hará que el servidor tenga menos carga, dependiendo del número de usuarios de la aplicación o los picos de tráfico notaremos una mejoría.
* La alta fiabilidad de servicio que ofrecen.

[Amazon ClodFront](http://aws.amazon.com/es/cloudfront/) es una de las opciones que podemos usar como CDN. En este artículo voy a comentar como tener un CDN para servir el contenido estático en una aplicación que emplee el _framework_ de desarrollo de aplicaciones web en la plataforma Java [Apache Tapestry](http://tapestry.apache.org/).

{{< image
    gallery="true"
    image1="image:nocdn-cdn.png" optionsthumb1="300x200" title1="Arquitectura no CDN (izquierda) contra arquitectura CDN (derecha)" >}}

Para que el contenido estático se sirva del CDN debemos hacer que las URL de las imágenes y hojas de estilo se generen con la URL propia del CDN, al menos, deberemos cambiar el host de esas URL. No hay que hacer mucho más ya que CloudFront creo que se puede configurar para que cuando le lleguen las peticiones del contenido si no las tiene las delegue en la aplicación, una vez que las tiene cacheadas ya no necesita solicitarselas a la aplicación y las sirve él mismo.

Una de las cosas muy interesantes de Tapestry es que podemos modificar prácticamente cualquier comportamiento del mismo, esto es debido a que la mayor parte de sus funcionalidades son ofrecidas mediante servicios que podemos sobreescribir con los que nosotros proporcionemos, el contenedor de dependencias (IoC) de tapestry lo hace muy fácil. Para modificar las URL de los recursos estáticos que son generados en Tapestry deberemos implementar la clase [AssetPathConverter](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/services/AssetPathConverter.html). Una implementación podría ser la siguiente:

{{< code file="CDNAssetPathConverterImpl.java" language="java" options="" >}}

También deberemos añadir un poco de configuración al módulo de la aplicación para que se use esta nueva implementación. Esto se hace en el método serviceOverride de la clase AppModule.java, donde también en el método contributeApplicationDefaults configuramos los símbolos que se usarán al generar las URLs entre ellos el dominio del CDN.

{{< code file="AppModule.java" language="java" options="" >}}

Estas serían las URLs por defecto:

{{< code file="urls-sin-cdn.txt" language="plaintext" options="" >}}

Y estas las nuevas nuevas URL haciendo uso de la implementación del _AssetPathConverter_ que como se aprecia incorporan un dominio de Amazon y siendo uno del servicio CloudFront en caso de no tener cacheado el recurso lo pedirá a la aplicación y lo cacheará para posteriores peticiones:

{{< code file="urls-con-cdn.txt" language="plaintext" options="" >}}

Así de simple podemos cambiar el comportamiento de Tapestry y en este caso emplear un CDN, esta implementación es sencilla y suficiente pero perfectamente pordríamos implementarla con cualquier otra necesidad que tuviesemos. El cambio está localizado en una clase, son poco más que 46 líneas de código pero lo mejor es que es transparente para el código del resto de la aplicación, ¿que más se puede pedir?

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
* [AssetPathConverter](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/services/AssetPathConverter.html)
* [CDNAssetPathConverterImpl.java](https://code.google.com/p/corner/source/browse/corner3/trunk/src/main/java/corner/asset/services/impl/CDNAssetPathConverterImpl.java)
* [Amazon CloudFront](http://aws.amazon.com/es/cloudfront/dynamic-content/)

* [Serve images outside web application](https://stackoverflow.com/questions/16914673/serve-images-outside-web-application)
* [TAP5-2201](https://issues.apache.org/jira/browse/TAP5-2201)
* [T5: some automagical way to export versioned assets to CDN](http://apache-tapestry-mailing-list-archives.1045711.n5.nabble.com/T5-some-automagical-way-to-export-versioned-assets-to-CDN-td2399058.html)
* [General CDN problem that came up with Tree component](http://apache-tapestry-mailing-list-archives.1045711.n5.nabble.com/General-CDN-problem-that-came-up-with-Tree-component-td5671331.html)
* [Using Amazon S3 Origins and Custom Origins for Web Distributions](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)
* [Serving Private Content through CloudFront](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html)
{{< /reference >}}

{{% /post %}}
