---
pid: 90
type: "post"
title: "Cómo trabajar con importes, ratios y divisas en Java"
url: "/2015/07/como-trabajar-con-importes-ratios-y-divisas-en-java/"
aliases: ["/2015/07/trabajar-con-importes-ratios-y-divisas-en-java/"]
date: 2015-07-21T20:00:00+02:00
updated: 2015-07-21T20:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Aún en Java 8 no tenemos una API incluida en el JDK dedicada al manejo de importes, divisas y conversiones. Si la especificación JSR-354 se incluye en alguna versión podremos hacer uso de ella sin necesidad de ninguna dependencia adicional, pero si tenemos necesidad ahora podemos usar la librería que ha producido la especificación. Usando las clases y métodos de la API evitaremos hacer y mantener una implementación nosotros mismos que además seguro no llega al nivel de esta."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Las aplicaciones de comercio electrónico o que realizan operaciones financieras con importes seguro que necesitan una forma de representar un importe junto con una divisa. También si necesitan convertir importes en diferentes divisas necesitarán obtener los ratios de conversión de alguna fuente, en el artículo [Servicio para obtener ratios de conversión entre divisas][blogbitix-85] comentaba uno que podemos usar, [Open Exchange Rates](https://openexchangerates.org/). Java incluye clases para datos numéricos y con ellos se pueden representar importes como por ejemplo [BigDecimal](javadoc8:java/math/BigDecimal.html). Para importes no debemos usar en ningún caso un tipo de dato _float_ o _double_ ya que estos son incapaces de representar ciertos valores de forma exacta, usando [_float_ y _double_ tendremos errores de precisión, redondeo y representación][elblogdepicodev-89]. En vez de crear un nuevo tipo de datos (una clase) que tenga como propiedades un BigDecimal para el importe y un String o similar para representar la divisa además de implementar las varias operaciones aritméticas y de comparación entre otras muchas cosas que necesitaremos podemos usar la librería que la [especificación JSR-354](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/asciidoc/JavaMoneySpecification.adoc) proporciona una API dedicada a importes y divisas en Java. En Java 8 no se incluyó pero en una futura versión quizá si se incluya en el propio JDK. En este artículo comentaré como usando Java 8 podemos hacer uso de esta API desde ya y que ofrece.

Aunque la especificación no es parte de Java aún el grupo de trabajo encargado ha generado una dependencia que podemos usar. En el [repositorio de GitHub](https://github.com/JavaMoney/) podemos encontrar el código de la librería. Incluyéndola como dependencia de un proyecto podemos usarla, usando [Gradle][gradle] con:

{{< code file="build.gradle" language="groovy" options="" >}}

La librería hace uso de lambdas, una de las [novedades que introdujo de Java 8 en el lenguaje][blogbitix-17], y nos facilita varias funcionalidades. También permite usar _streams_. Veamos algunas de las posibilidades.

### Representación de divisas e importes

Las divisas se representan con [CurrencyUnit](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/CurrencyUnit.java) y los  importes se representan usando la clase [MoneyAmount](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/MonetaryAmount.java), tenemos varias formas de crear instancias de estas clases.

{{< code file="Main-1.java" language="java" options="" >}}

La API ofrece varios métodos para extraer los valores numéricos, la parte entera y decimal, que una instancia de MoneyAmount contiene así como obtener los valores en un tipo de datos más básico como BigDecimal.

{{< code file="Main-2.java" language="java" options="" >}}

### Operaciones aritméticas, de comparación y operaciones personalizadas

Podemos hacer operaciones aritméticas (suma, resta, multiplicación y división) entre dos importes.

{{< code file="Main-3.java" language="java" options="" >}}

También podremos hacer comparaciones:

{{< code file="Main-4.java" language="java" options="" >}}

### Redondear importes

{{< code file="Main-9.java" language="java" options="" >}}

E incluso implementar operaciones más complejas y habituales personalizadas con la clase [MonetaryOperator](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/java/javax/money/MonetaryOperator.java) que se puede aplicar usando el método _with_ de MonerayAmount.

### Formateado y analizado

Dependiendo de país o la moneda los importes se representan de forma diferente, por ejemplo, en Estados Unidos se usa «,» como separador de millares y «.» como separador de los decimales, en España es diferente, se usa «.» para los millares y «,» para los decimales. También hay monedas que no tienen decimales como el Yen japonés. Disponemos de métodos y clases para formatear correctamente el importe.

{{< code file="Main-5.java" language="java" options="" >}}

Podemos hacer la operación contraria _parseando_ o analizando la cadena, obtener un objeto MoneyAmount desde su representación en String.

{{< code file="Main-6.java" language="java" options="" >}}

### Ratios de conversión, conversiones entre divisas

Si necesitamos convertir el importe de una moneda a otra necesitaremos el ratio de conversión entre las monedas, es decir, por cada dólar estadounidense cuántos euros son si queremos hacer una conversión de USD a euro. Se puede obtener el ratio de conversión o hacer la conversión directamente entre las dos monedas. En el siguiente código se muestra cuántos euros son 10 USD con la cotización entre las divisas en el momento de escribir el artículo.

{{< code file="Main-7.java" language="java" options="" >}}

La librería incluye varias fuentes para las cotizaciones de cada moneda, una de ellas es el Banco Central Europeo pero también podemos crear la implementación de una nueva fuente que por ejemplo use Open Exchange Rates.

### Streams y filtros

Por si todo esto fuera poco podemos usar las características de programación funcional de Java 8 ya que la librería ofrece soporte para streams para ejemplo filtrar o para agrupar.

{{< code file="Main-8.java" language="java" options="" >}}

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/JavaMoney) está en uno de mis repositorios de GitHub.

{{< reference >}}
* [JSR 354 API](https://github.com/JavaMoney/jsr354-api)
* [JSR 354 RI](https://github.com/JavaMoney/jsr354-ri)
* [JSR 354 - Currency and Money](https://java.net/projects/javamoney/pages/Home)
* [﻿JSR 354 Money and Currency — Specification](https://github.com/JavaMoney/jsr354-api/blob/master/src/main/asciidoc/JavaMoneySpecification.adoc)
* [Looking into the Java 9 Money and Currency API (JSR 354)](https://java.dzone.com/articles/looking-java-9-money-and)
* [Java 9 is coming with money api](https://weblogs.java.net/blog/otaviojava/archive/2014/08/25/java-9-coming-money-api)
* [Joda Money](http://www.joda.org/joda-money/)
* [Adopt JSR 354](http://es.slideshare.net/AnatoleTresch/adopt-jsr-354)
{{< /reference >}}

{{% /post %}}
