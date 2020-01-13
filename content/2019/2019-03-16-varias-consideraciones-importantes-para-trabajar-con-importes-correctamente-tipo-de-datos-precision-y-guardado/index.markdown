---
pid: 389
type: "post"
title: "Varias consideraciones importantes para trabajar con importes correctamente (tipo de datos, precisión y guardado)"
url: "/2019/03/varias-consideraciones-importantes-para-trabajar-con-importes-correctamente-tipo-de-datos-precision-y-guardado/"
date: 2019-03-16T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Entre las cosas básicas a tener en cuenta en una aplicación que maneja fechas está en guardarlas en la zona horaria UTC que no sufre de cambios por zona horaria de verano o invierno, cambian más habitualmente de lo que parece e incluso por temas políticos.

* [Porque guardar fechas con UTC][blogbitix-168]

Otra consideración distinta en aplicaciones que manejan importes es usar la clase [BigDecimal](javadoc11:java.base/java/math/BigDecimal.html) en vez de los tipos de datos de coma flotante _float_ o _double_ ya que los datos de coma flotante no son capaces de representar adecuadamente algunos valores numéricos en base 10. El asunto de este artículo es por que además de usar _BigDecimal_ es aconsejable guardar los importes con al menos un dígito decimal más de la precisión necesaria para evitar problemas en los redondeos al aplicar operaciones matemáticas como multiplicación, división o porcentajes para algunos impuestos como el IVA, comisiones, descuentos o cambios de divisa.

Sin utilizar una mayor precisión de 2 decimales puede ocurrir que algunos importes tengan una diferencia de céntimos. Por ejemplo, los precios se pueden introducir o bien el precio del producto antes de aplicar el IVA, comisiones o descuentos o puede introducirse en el precio que paga el usuario después de aplicar el IVA y en ambos casos al realizar el cálculo del precio con IVA y el cálculo del precio base ha de coincidir. Por ello la recomendación es utilizar al menos un decimal más de la precisión necesaria.

Otras pautas importantes son guardar los importes redondeados que el usuario ve en la factura para evitar discrepancias hacia arriba de algún céntimo en la suma de los importes y aplicar el IVA, comisión o descuento no a cada producto individual sino a la suma de los importes de todos ellos.

Este artículo sobre [Cómo hacer una aplicación que soporte precios con decimales sin errores](http://albertovilches.com/como-hacer-una-aplicacion-que-soporte-precios-con-decimales-sin-errores) están muy bien explicadas con ejemplos varios de todos estos puntos imprescindibles al manejar importes, recomendable leerlo.

Pero el tipo de datos _BigDecimal_ tampoco es el mas apropiado con el que trabajar si la aplicación maneja múltiples divisas, en este caso es recomendable utilizar la librería [Java Money][java-money] que además ofrece soporte para ratios de conversión los cuales pueden obtenerse de proveedores externos que los proporcionan actualizados a lo largo del tiempo.

* [Cómo trabajar con importes, ratios y divisas en Java][blogbitix-90]
* [Servicio para obtener ratios de conversión entre divisas][blogbitix-85]

{{% /post %}}
