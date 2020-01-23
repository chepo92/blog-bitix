---
pid: 55
type: "post"
title: "8+ libros para mejorar como programadores"
url: "/2014/12/8-plus-libros-para-mejorar-como-programadores/"
date: 2014-12-05T17:08:57+01:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "software-libre", "planeta-codigo", "programacion"]
---

{{% post %}}

Hay cantidad de información para aprender y en diferentes formatos desde libros si queremos tener un conocimiento más profundo sobre alguna materia pasando por presentaciones en [SlideShare][slideshare] o [SpeakerDeck][speakerdeck] que aún comentando los detalles de forma escueta sirven para conocer los detalles importantes sobre un tema, charlas de hangouts que quizá requieran menos esfuerzo y tiempo por nuestra parte que leer un libro como las compartidas en [desarrolloweb](https://www.desarrolloweb.com/) o en [Virtual JUG](http://virtualjug.com/), blogs con artículos que explican un detalle específico (aquí hay una buena [colección de bitácoras sobre java](https://www.baeldung.com/java-blogs)), [katayunos y merendojos](http://katayunos.com/) en los que se practican técnicas de programación sobre un problema conocido, sencillos, de los que ya se conoce su solución y que se realizan junto a otras personas, convenciones como [Codemotion](http://www.codemotion.es/), [PyCon](https://es.pycon.org/), [Greach](https://greachconf.com/), [LibreCon](http://www.librecon.io/), [CAS](http://agile-spain.org), [Spring I/O](http://www.springio.net/), [ApacheCon](http://apachecon.com/), [BilboStack][bilbostack]... En estas conveciones se hacen presentaciones de alrededor de una hora para los asistentes, además siendo presenciales permiten reunirse con otras personas con los mismos intereses y de las que algunas los vídeos están disponibles en YouTube... en definitiva, para aprender lo único que se necesita es tiempo y motivación que no es poco después de una jornada laboral que ocupa la mayor parte de nuestro tiempo.

En este artículo comentaré algunos libros que a mí me han gustado y que mucha gente recomienda leer ya que contienen cantidad importante e interesante de información útil para realizar mejor la tarea de programación, algunos tratan sobre el código otros sobre como enfrentarnos a las tareas y problemas que nos encontramos en el desarrollo y trabajo.

### Thinking in Java

Yo como programador Java el libro que recomiendo para aquellos que ya tengan unos pocos conocimientos de programación estén empezando a programar en Java es [Thinking in Java](https://amzn.to/2Qo38qQ) aunque también es recomendable para aquellos que incluso llevan varios años programando en Java, contiene una explicación detallada de cada uno de los aspectos del lenguaje. Java 8 ha introducido numerosas novedades (streams, lambdas, mejorada la programación asíncrona, date api, default methods, programación funcional, ...) y el libro [Java 8 in Action](https://amzn.to/2ZThJxJ) nos permite conocerlas detalladamente. En otros lenguajes hay otros libros que nos pueden introducir en la materia como [C# 5.0 All-in-One For Dummies](https://amzn.to/39GxlsU) o [Beginning Python](https://amzn.to/35oMxHG).

### Effective Java

Para aquellos que ya tienen varios años de experiencia el libro [Effective Java](https://amzn.to/39C8Ehn) contiene numerosos consejos para usar Java de forma "efectiva" aunque algunos puntos del libro son aplicables a cualquier otro lenguaje de programación orientado objetos. La segunda edición no está actualizada con las novedades introducidas en Java 8 pero prácticamente todo sigue siendo válido, el libro <a href="v">Java 8 in Action</a> también contiene algunos consejos en la misma linea que complementan a este libro.

### Head First - Design Patterns

Los patrones de diseño nos presentan una solución que se ha comprobado válida para resolver problemas. En varios casos tratan de hacer que los cambios no afecten de forma notable a la estructura de los programas. Hay patrones de creación, estructurales o de comportamiento, ... conviene conocerlos por si en algún momento determinado podemos aplicarlos a nuestro código. El formato del libro [Head First Design Patterns](https://amzn.to/37GFpYV) no sigue la estructura tradicional de los libros sino una estructura más esquemática y con ejemplos que hacen sencillo comprender los patrones, cuando aplicarlos, que ventajas tienen, que desventajas y como están relacionados los patrones entre ellos. Otro libro con un formato más tradicional y muy comentado es [Design Patterns](https://amzn.to/36qiq3P).

### Clean Code

El contenido de [Clean code](https://amzn.to/2T0L5IS) es aplicable a cualquier lenguaje y de interés para cualquier programador, contiene consejos para escribir mejor código en nuestras aplicaciones, desde como asignar nombres, como escribir funciones, comentarios, formatear el código, objetos y estructuras de datos, ..., temás relacionados con el código que escribimos. El objetivo de la programación es escribir código que funciona y resuleva necesidades pero también es casi tan importante que sea fácilmente entendible por otros programadores o nosotros mismos unas semanas más tarde ya que la mayor parte del tiempo no la dedicamos a escribir nuevo código sino a modificarlo.

### Code Complete

[Code Complete](https://amzn.to/37Gh59B) es otro libro que se centra en como mejorar el código que escribimos de forma similar a Clean Code, explica muchos principios que pueden guiar el código que desarrollamos. Aún no lo he leído pero es mencionado bastante bastantes veces en libros de lectura recomendada. Por una lectura rápida por encima parece que está bastante bien.

### The Pragmatic Programmer

El libro [Pragmatic programmer](https://amzn.to/2MXRVuZ) también es aplicable independientemente de lenguaje que utilicemos. Contienen consejos que podemos usar como guía para tomar decisiones, para escribir mejor código y también para ser mejores programadores y profesionales.

### The Clean Coder

Quizá ya conocieses Clean Code pero conocías ¿[The Clean Coder](https://amzn.to/2MXB4II)?. Del mismo autor que Clean Code pero en este caso se centra no en el código sino en el programador, explica como enfrentarnos a situaciones que nos encontramos como programadores en el trabajo, en la programación escribir código solo es una pequeña parte y comprende mucho más que escribir lineas de código, también dar solución a las necesidades del negocio y de forma correcta. Trata de explicar como comportarnos de forma profesional, el decir no, el decir sí, practicar, gestión del tiempo, estimaciones, colaboración, equipos, aprender de un mentor, ser un mentor, ...

### Refactoring

Comenzar un proyecto desde el inicio no es lo habitual y aún así pasado un tiempo no muy grande el código se convierte en heredado, lo habitual es que tengamos que modificar código que ya están escrito. El libro [Refactoring](https://amzn.to/39CyVMm) nos explica como modificar el código para que tenga mejor diseño y sea más legible o fácil de modificar en un futuro y ante los posibles cambios que se vayan introduciendo. Algunas de las acciones están relacionadas con aplicar algunos principios de los patrones de diseño explicados en Head First - Design Patterns o algunos principios comentados en Clean Code.

{{< amazon
    linkids="dae8597bb6dc4beae956320ef09df513,70189a833eb781236f9c1b63064c8b27,468caab01af35306c48d99ca564ebf23,3fa600b62ab3a48a0c6a5dfc6b9c9651,2d6122afa07f905f4c3f2a9bcc62ff23,41b8842029752ed268fefa4ec10f03a7,caad6be50f3166c9e6c0c6cb8f8ba3ec,8ce01379ebca38f4fb82221abb3b0a81,2fb79f1801f1d0a448b7aa533cd1af8e,7c8b407a597aff8be999138b9159d305"
    asins="0131872486,1617291994,0321356683,0596007124,0201633612,0132350882,0735619670,020161622X,0137081073,0201485672" >}}

En una [pregunta y respuesta de stackoveflow](https://stackoverflow.com/questions/1711/what-is-the-single-most-influential-book-every-programmer-should-read) sobre los libros a leer por un programador, están recogidos una buena colección de los mejores de ellos.

De la lista de este artículo el que me falta por leer es Code Complete el resto por mi propia experiencia recomiendo leerlos incluso más de una vez dependiendo de lo bien que absorbamos el conocimiento recogido en ellos y más tarde lo tengamos presente mientras trabajamos y programamos. Estos son de los libros más mencionados en artículos similares a este como buena documentación que leer sobre programación, si los leemos y nos quedamos con un porcentaje aunque sea pequeño ya mejoraremos bastante, también es probable que algunas cosas de las comentadas en los libros ya las tengamos presentes con la experiencia que hemos adquirido por nosotros mismos, en estos libros ese conocimiento adquirido y más comprobaremos que está documentado. ¡Feliz lectura!

{{< reference >}}
* [Novedades de Java 8][blogbitix-17]
* [Patrones de diseño en la programación orientada a objetos][elblogdepicodev-patrones-de-diseno-en-la-programacion]
* [Ejercicios (katas) para mejorar habilidades de programación practicando][blogbitix-56]
{{< /reference >}}

{{% /post %}}
