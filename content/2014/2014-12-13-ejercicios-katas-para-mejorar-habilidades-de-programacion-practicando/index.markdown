---
pid: 56
type: "post"
title: "Ejercicios (katas) para mejorar habilidades de programación practicando"
url: "/2014/12/ejercicios-katas-para-mejorar-habilidades-de-programacion-practicando/"
date: 2014-12-13T12:06:06+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "software-libre", "planeta-codigo", "programacion"]
---

{{% post %}}

La semana pasada escribía sobre [algunos libros que leer para ser mejores programadores][blogbitix-55], sin embargo, toda esa teoría solo sirve cuando se interioriza para usar más tarde en la práctica. Para interiorizar parte de ese conocimiento hasta el momento creo que no se ha inventado mejor manera que escribiendo código teniendo en cuenta esos principios.

Las katas y dojos son unos ejercicios que se realizan para practicar, son problemas sencillos de los que se conoce la solución pero lo importante no es resolverlos sino aplicar las lecciones aprendidas y mejorar nuestras habilidades de programación que posteriormente usemos en los proyectos que trabajamos. Estos ejercicios se suelen realizar con otras personas, en la página [Katayunos - Merendojos](http://katayunos.com/) se suelen organizar encuentros en algunas ciudades y fechas, si no nos cuadran las fechas y lugares podemos realizarlas individualmente cuando y donde prefiramos aunque una de las partes que nos perderemos es aprender de las habilidades y formas de trabajar de otras personas.

En la página [CodeKata](http://codekata.com/) podemos leer una introducción a las katas y una colección de ejercicios con los que practicar. En estos ejercicios deberemos intentar aplicar varios [principios de la programación orientada a objetos](http://javarevisited.blogspot.com.es/2012/03/10-object-oriented-design-principles.html) como el principio SOLID, DRY, abierto a extensión cerrado a modificación (OCP), [patrones de diseño][elblogdepicodev-patrones-de-diseno-en-la-programacion], nombres de métodos y variables que hagan que el código sea expresivo, teses unitarios, refactorizaciones, ... todas esas cosas que consideramos correctas para escribir buen código.

El primero de los ejercicios propuestos en CodeKata es [Kata01: Supermarket Pricing](http://codekata.com/kata/kata01-supermarket-pricing/) que consiste en pensar una forma de representar los precios de los productos de un supermercado, aparte de un precio simple como puede ser $0.65 por producto, otros como tres por un dolar, $1.99 / pound o compre dos obtenga uno más gratis o con descuento. Para esta kata en internet hay comentadas varias soluciones, probablemente para representar los diferentes precios una solución sea crear una clase que calcule los diferentes tipos de precios aplicando el [patrón Strategy](https://es.wikipedia.org/wiki/Strategy_%28patr%C3%B3n_de_dise%C3%B1o%29) en función de como se calcule el precio de cada producto.

Intentando implementar en código una posible solución aplicando el patrón Strategy, usando BigDecimal para los precios (en vez de double y float que no pueden representar correctamente algunos valores decimales), este ejemplo muestra como calcular el precio de un producto dada su cantidad y su tipo de precio.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="MainTest.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:teses-junit.png" optionsthumb1="300x200" title1="Ejecución de teses" >}}

Aun practicando estas katas no va a hacer que luego nuestro código en un proyecto real sea perfecto ni siquiera algo cercano a ello más bien hará que sea un poquito mejor, estos ejercicios son bastante simples que no tienen las complejidades de algunos casos reales, aún así siguen mereciendo realizarlos. También hay que tener en cuenta que no son realmente para aprender a programar aunque si pueden servir para aprender un nuevo lenguaje sobre todo si se hacen con otra persona que ya lo conoce y mientras se realiza la kata podemos preguntarle y nos resuelva las dudas que nos vayan surgiendo de la sintaxis, API o herramientas de ese lenguaje.

{{< reference >}}
* http://codekata.com/<br>
* http://katayunos.com/<br>
* http://www.codewars.com/
{{< /reference >}}

{{% /post %}}
