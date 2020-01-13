---
pid: 95
type: "post"
title: "Ejemplo práctico de ServiceLoader con ServiceProvider de Java Money"
url: "/2015/09/ejemplo-practico-de-serviceloader-con-serviceprovider-de-java-money/"
date: 2015-09-13T11:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Una aplicación que trabaje con importes y diferentes divisas necesitará ratios de conversión, estos ratios de conversión deberemos obtenerlos de algún servicio. Con la API de Java Money que aun en Java 8 no está incorporada en el JDK aunque si como una librería podremos trabajar de forma cómoda con importes, divisas y ratios. En este artículo explicaré un ejemplo de uso práctico de la clase ServiceLoader y como obtener ratios del servicio Open Exchange Rates."
---

{{% post %}}

{{< logotype image="java.svg" >}}

La semana pasada comentaba la [clase ServiceLoader disponibles en el JDK][blogbitix-94] y como nos puede servir para que nuestra aplicación o API sea extensible en futuras versiones o para alguien que quiera adaptarla a sus necesidades. La clase ServiceLoader es el método que se emplea en la [API de Java para tratamiento de divisas, importes y conversiones][blogbitix-90] que quizá en un futuro se ofrezca en Java con la especificación JSR-354. Por el momento se puede usar la [librería con la implementación de referencia](https://github.com/JavaMoney/jsr354-ri). En este ejemplo mostraré cómo proporcionar un nuevo proveedor de ratios que obtenga [ratios de conversión del servicio Open Exchange Rates][blogbitix-85].

Para disponer del proveedor de ratios usable para Java Money deberemos implementar una clase que extienda de [AbstractRateProvider](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/spi/AbstractRateProvider.java) junto con la implementación para el método _getExchangeRate_ que devolverá los ratios, también el método _newDataLoaded_ que procesará los datos de ratios obtenidos del servicio. El código del método _getExchangeRate_ es una copia del [proveedor del Banco Central Europeo](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/convert/ECBAbstractRateProvider.java) (ECB), el método _newDataLoaded_ obtiene los ratios a partir de un _InputStream_ con los ratios devueltos por la URL del servicio, en el caso de [Open Exchange Rates](https://openexchangerates.org) en el _endpoint_ _/api/latest.json?app_id=[api_key]_.

Internamente la implementación de referencia de Java Money usa la clase [ServiceLoader](javadoc8:java/util/ServiceLoader.html). En el archivo _META-INF/services/javax.money.convert.ExchangeRateProvider_ incluimos el nombre cualificado completo de la clase de la implementación de AbstractRateProvider, en este caso _io.github.picodotdev.javamoney.OpenExchangeRatesRateProvider_.

{{< code file="javax.money.convert.ExchangeRateProvider" language="plaintext" options="" >}}
{{< code file="AbstractRateProvider.java" language="java" options="" >}}

También deberemos sobreescribir la propiedad _conversion.default-chain_ en el archivo _javamoney.properties_,  junto con algunas otras propiedades necesarias para que cargue los datos a partir de una URL del servicio que proporciona los ratios. La URL será la del servicio Open Exchange Rates que devolverá un resultado en formato JSON, lo procesaremos y construiremos los ExchangeRates a partir de los datos que nos son proporcionados en la clase _AbstractRateProvider_ con el método _newDataLoaded_ en forma de _InputStream_. En el archivo _javamoney.properties_ el número entre llaves ({}) indica la prioridad de la propiedad cuando haya varios archivos _javamoney.properties_ en diferentes archivos jar, deberemos indicar 0 o más ya que la prioridad por defecto es -1.

{{< code file="javamoney.properties" language="plaintext" options="" >}}

Implementado el servicio de ratios personalizado de Open Exhcnage Rates y configurado podemos usarlo con las siguientes líneas de código tal y como hacíamos con el servicio del Banco Central Europeo (ECB) proporcionado en la implementación de referencia de la librería de Java Money.

{{< code file="Main.java" language="java" options="" >}}

La API de Java Money ofrece más posibilidades como obtener datos históricos de los ratios de conversión, Open Exchange Rates también ofrece datos históricos en un _endpoint_ tal que _/api/historical/2011-10-18.json_. Sin embargo, cómo  hacer esto será tarea para el lector o tema para otro futuro artículo.

No es muy complicado lo que hay que hacer para integrar un proveedor de ratios sabiendo lo que hay que hacer y adaptando otro proveedor similar, sin embargo, no hay documentación que lo explique y he tenido que indagar en el código fuente del proyecto para saber cómo hacerlo, sin el código fuente me hubiese sido imposible escribir este artículo, esta es una de las ventajas del código abierto y software libre.

Puedes obtener el [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/JavaMoney) del repositorio de ejemplos de este blog en GitHub.

{{< reference >}}
* [JSR-354 API](https://github.com/JavaMoney/jsr354-api)
* [JSR-354 RI](https://github.com/JavaMoney/jsr354-ri)
* [Bootstrap.java](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/spi/Bootstrap.java)
* [ExchangeRateProvider.java](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/convert/ExchangeRateProvider.java)
* [AbstractRateProvider.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/spi/AbstractRateProvider.java)
* [ECBAbstractRateProvider.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/convert/ECBAbstractRateProvider.java)
* [ECBRateReadingHandler.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/convert/ECBRateReadingHandler.java)
* [ECBCurrentRateProvider.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/convert/ECBCurrentRateProvider.java)
* [javax.money.convert.ExchangeRateProvider](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/resources/META-INF/services/javax.money.convert.ExchangeRateProvider)
* [MonetaryConversions.java](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/convert/MonetaryConversions.java)
* [MonetaryConversionsSingletonSpi.java](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/spi/MonetaryConversionsSingletonSpi.java)
* [DefaultMonetaryConversionsSingletonSpi.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/convert/DefaultMonetaryConversionsSingletonSpi.java)
* [LoaderConfigurator.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/loader/LoaderConfigurator.java)
* [MonetaryConfig.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/spi/MonetaryConfig.java)
* [javamoney.properties](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/resources/javamoney.properties <- aqui está la configuración)
* [DefaultLoaderServiceFacade.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/loader/DefaultLoaderServiceFacade.java)
* [LoadDataLoaderService.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/loader/LoadDataLoaderService.java)
* [ResourceCache.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/loader/ResourceCache.java)
* [DefaultResourceCache.java](https://github.com/JavaMoney/jsr354-ri/blob/master/src/main/java/org/javamoney/moneta/internal/loader/DefaultResourceCache.java)
{{< /reference >}}

{{% /post %}}
