---
pid: 85
type: "post"
title: "Servicio para obtener ratios de conversión entre divisas"
url: "/2015/06/servicio-para-obtener-ratios-de-conversion-entre-divisas/"
date: 2015-06-20T10:00:00+02:00
updated: 2015-07-24T23:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "¿Trabajas con importes en diferentes divisas y necesitas hacer conversiones entre ellas? Si es el caso necesitas obtener los ratios de conversión entre divisas de alguna fuente de forma regular y de forma automatizada ya que se varían constantemente (en minutos) según diversos factores. Hay diferentes fuentes para obtenerlos y empresas que ofrecen las cotizaciones como producto, en este artículo comentaré una con suficiente detalle como para integrarla en cualquier aplicación."
---

{{% post %}}

{{< logotype image="java.svg" >}}

En una aplicación de comercio electrónico que venda sus productos o servicios a nivel internacional probablemente necesitará mostrar los precios en la moneda local del comprador. En estos casos será necesario hacer una conversión entre la divisa en la que está el importe del producto y la divisa del usuario con la que realizará el pago. Para hacer la conversión necesitaremos un ratio de conversión reciente entre la divisa origen y la divisa destino del importe o _pivotar_ sobre una divisa entre ambas. Los [ratios se actualizan constantemente cada día](http://www.investopedia.com/ask/answers/08/how-often-to-exchange-rates-fluctuate.asp) según diversos factores variando ligeramente su cotización en la economía global. En este artículo presentaré [Open Exchange Rates](https://openexchangerates.org), el mejor servicio de ratios de divisas que he encontrado.

Open Exchange Rates dispone de una API REST que podemos utilizar para automatizar la obtención de los ratios de conversión en nuestra aplicación, ofrecen los ratios para 165 divisas por supuesto incluyendo algunas dólares americanos (USD), euros (EUR), libras (GBP), yenes (JPY), rublos (RUB), países del este de europa, países asiáticos, latinoamericanos y del oriente medio. Para acceder a la API deberemos [registrarnos](https://openexchangerates.org/signup) momento en el que se nos proporcionará un identificativo para nuestra aplicación que usaremos al realizar consultas.

En el plan gratuito nos ofrecen los ratios respecto a USD, esto es, una dólar norteamericano equivale al valor del ratio en la moneda en concreto, en el momento de escribir el artículo la API devuelve los siguientes datos, en la que se ve que un USD ($) equivale a 0.880435 EUR (€). Disponemos de varios _endpoints_:

* _latest.json_: para obtener los ratios de conversión más recientes.
* historical/YYYY-MM-DD.json: para obtener los ratios de un día específico.
* _currencies.json_: para obtener la lista de divisas y sus descripciones.
* _time-series.json_: para obtener datos históricos durante un periodo de varios días.

Usando el primero de ellos junto con el _api-key_ que nos han asignado [https://openexchangerates.org/api/latest.json?app_id=[api-key]](https://openexchangerates.org/api/latest.json?app_id=[api-key]) obtenemos los ratios en formato JSON, en el dato _base_ está la divisa de referencia, en este caso dólares estadounidenses (USD):

{{< code file="latest.json" language="json" options="" >}}

Estas son las 165 divisas soportadas:

{{< code file="divisas-soportadas.txt" language="plaintext" options="" >}}

Teniendo esta API podemos automatizar en nuestra aplicación la obtención de los ratios con un límite de 1000 consultas al mes en el plan gratuito, por ejemplo una vez al día o cada seis horas dependiendo del grado de precisión que nos parezca suficiente para la aplicación. En los [planes de pago disponibles](https://openexchangerates.org/signup) las posibilidades de la API son más permitiendo por ejemplo aumentar el límite de consultas, obtener los ratios referenciados a otra moneda distinta al dólar estadounidense u otras consultas y funcionalidades.

Basta usar la librería cliente de [Apache HttpComponents][apache-httpcomponents] para hacer la petición HTTP y un parseador JSON como [JSON in Java][json-java] para acceder a los datos obtenidos.

Hay otras posibilidades como un [servicio proporcionado por el banco central europeo](http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml) pero que ofrece únicamente los ratios de 28 monedas y que solo se actualiza diariamente. Otra posibilidad es [Yahoo Finance](http://finance.yahoo.com/d/quotes.csv?s=EURUSD=X&f=l1), en el parámetro de este enlace indicamos primeramente el código de la moneda origen y el código de la divisa destino en este caso de EUR a USD pero Open Exchange Rates me ha parecido mejor y de mayor confianza.

Si te ha interesado este artículo puede que también te interese [Cómo trabajar con importes, ratios y divisas en Java][blogbitix-90].

{{< reference >}}
* [Open Exchange Rates](https://openexchangerates.org)
* [How do I get currency exchange rates via an API?](https://stackoverflow.com/questions/3139879/how-do-i-get-currency-exchange-rates-via-an-api-such-as-google-finance)
* [European Central Bank Rates](http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml)
* [Cómo trabajar con importes, ratios y divisas en Java][blogbitix-90]
{{< /reference >}}

{{% /post %}}
