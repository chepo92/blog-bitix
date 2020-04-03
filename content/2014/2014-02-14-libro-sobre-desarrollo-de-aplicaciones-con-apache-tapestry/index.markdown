---
pid: 12
type: "post"
title: "Libro sobre desarrollo de aplicaciones con Apache Tapestry"
url: "/2014/02/libro-sobre-desarrollo-de-aplicaciones-con-apache-tapestry/"
date: 2014-02-14T20:10:34+01:00
updated: 2015-04-10T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.png" >}}

Hace unos meses publiqué el libro PlugIn Tapestry, un libro acerca del desarrollo de aplicaciones y páginas web en el lenguaje Java y con el _framework_ [Apache Tapestry](http://tapestry.apache.org/).

## PlugIn Tapestry

Apache Tapestry es un _framework_ orientado a componentes para crear aplicaciones web rápidas, dinámicas, robustas y altamente escalables en la plataforma Java. Al basarse en componentes es distinto de los muchos basados en acciones similares en esencia a Struts que podemos encontrar en la plataforma Java como [Spring](http://projects.spring.io/spring-framework/), [Grails][grails] y [Play!](http://www.playframework.com/) y también de los muchos otros en los que la principal diferencia es el lenguaje como [Django](https://www.djangoproject.com/) (Python), [Symfony](http://symfony.com/) (PHP), [ASP.NET MVC](http://www.asp.net/mvc) (C#) o [Ruby On Rails](http://rubyonrails.org/) (Ruby).

{{< image
    gallery="true"
    image1="image:portada-plugintapestry.png" optionsthumb1="300x200" title1="" >}}

Incluyendo la descripción de las características del _framework_ el libro trata la mayoría de aspectos que puede necesitar una aplicación o página web, entre ellos:

* Introducción, principios y características
* Inicio rápido
* Páginas y componentes
* Contenedor de dependencias (IoC)
* Assets (imágenes, estilos, javascript) y módulos RequireJS
* Formularios
* Internacionalización (i18n) y localización (l10n)
* Persistencia web
* Persistencia en bases de datos
* Ajax
* Seguridad (autenticación, autorización, XSS, Inyección SQL, HTTPS)
* Librerías de componentes
* Pruebas unitarias, de integración y funcionales ([JUnit](http://junit.org/)/[Mockito](http://code.google.com/p/mockito/), [Spock](http://code.google.com/p/spock/), [Geb](http://www.gebish.org/))
* Y algunas cosas más sin entrar en muchos detalles como envió de correos, generación de informes, gráficas, una API REST, analizadores estáticos de código, CDN, ...

El libro está basado en la siguiente versión de Tapestry, la 5.4, que actualmente está en estado beta (aunque la mayoría servirá para la versión final y para la versión 5.3 actual). Esta nueva versión tiene como principal novedad la parte cliente de las aplicaciones con la inclusión de RequireJS y la definición de los archivos JavaScript mediante módulos. También incorpora una capa de abstracción que permite usar cualquier librería como apoyo a la funcionalidad que necesita proporcionar ya sea Prototype, jQuery o cualquier otra que prefiramos o nueva que se desarrolle en un futuro.

Además del libro he desarrollado una [pequeña aplicación con unos pocos ejemplos](https://github.com/picodotdev/blog-ejemplos/tree/master/PlugInTapestry) (disponible en mi repositorio de GitHub) que puedes probar en tu equipo sin necesidad de instalar nada previamente, salvo Git y el JDK. Más de 250 páginas de documentación que permitirán al lector descubrir mucha de la magia que puede ofrecer este _framework_. Además en [mi blog](https://picodotdev.github.io/blog-bitix/) (y [elblogdepicodev](https://elblogdepicodev.blogspot.com.es)) puedes encontrar varias entradas sobre muchos de los temas tratados de forma individual y que he utilizado para escribir el libro.

Puedes obtenerlo desde los enlaces que proporciono de forma totalmente libre y al inmejorable precio de 0,00€ impuestos incluidos. Por si fuera poco puedes conseguirlo en el formato electrónico PDF. Tienes mi permiso (es más, animo a ello) para compartirlo, distribuirlo en redes P2P, subirlo a cualquier página web o «piratearlo» cuantas veces quieras, siempre que respetes la licencia Creative Commons bajo la cual lo he publicado.

<div class="buttons">
    <a href="https://picodotdev.github.io/blog-bitix/assets/custom/PlugInTapestry.pdf" class="btn btn-lg btn-success">Descargar el libro (PDF)</a>
    <a href="https://github.com/picodotdev/blog-ejemplos/tree/master/PlugInTapestry" class="btn btn-lg btn-success">Obtener código fuente ejemplos</a>
</div>

<div class="share-this" style="text-align: center; margin-bottom: 20px">
  <h3>¡Y luego compártelo!</h3>
  <div class="sharethis-inline-share-buttons">
  <span class="st_twitter_vcount" st_title="He descargado el libro sobre desarrollo de apps web con Apache Tapestry. ¡Obtén tu copia! #PlugIn" st_summary="Desarrollo de aplicaciones y páginas web con Apache Tapestry" st_url="https://picodotdev.github.io/blog-bitix/2014/02/libro-sobre-desarrollo-de-aplicaciones-con-apache-tapestry/" st_image="https://picodotdev.github.io/blog-bitix/assets/images/logotypes/apache-tapestry-5.png" st_via="picodotdev"></span>
  <span class="st_facebook_vcount" st_title="Libro PlugIn Tapestry" st_summary="Desarrollo de aplicaciones y páginas web con Apache Tapestry" st_url="https://picodotdev.github.io/blog-bitix/2014/02/libro-sobre-desarrollo-de-aplicaciones-con-apache-tapestry/" st_image="https://picodotdev.github.io/blog-bitix/assets/images/logotypes/apache-tapestry-5.png"></span>
  <span class="st_googleplus_vcount" st_title="Libro PlugIn Tapestry" st_summary="Desarrollo de aplicaciones y páginas web con Apache Tapestry" st_url="https://picodotdev.github.io/blog-bitix/2014/02/libro-sobre-desarrollo-de-aplicaciones-con-apache-tapestry/" st_image="https://picodotdev.github.io/blog-bitix/assets/images/logotypes/apache-tapestry-5.png"></span>
  <span class="st_linkedin_vcount" st_title="Libro PlugIn Tapestry" st_summary="Desarrollo de aplicaciones y páginas web con Apache Tapestry" st_url="https://picodotdev.github.io/blog-bitix/2014/02/libro-sobre-desarrollo-de-aplicaciones-con-apache-tapestry/" st_image="https://picodotdev.github.io/blog-bitix/assets/images/logotypes/apache-tapestry-5.png"></span>
  </div>
</div>

## Apache Tapestry

Algunas características destacadas de Apache Tapestry son:

### Java
Normalmente se usa el lenguaje Java con lo que el compilador y el asistente de código de tu IDE te ayudarán.

### Políglota
Si prefieres puedes utilizar Groovy, Scala o cualquier otro lenguaje soportado por la JVM.

### Productivo
La recarga de clases en caliente evitará que tengas que reiniciar el servidor para ver tus cambios aplicados. Simplemente actualiza el navegador.

### Rápido
El _framework_ está programado en Java sin hacer uso de reflection. Incorpora varias optimizaciones que harán tu aplicación más eficiente sin trabajo por tu parte como compresión gzip, minificación y agregación css/javascript, cacheo agresivo en el cliente de assets, supresión de espacios en blanco innecesarios, ...

### Basado en componentes
Los componentes son piezas autónomas y resusables de código. Para usar uno simplemente necesitarás conocer sus parámetros todo lo demás como archivos javascript, hojas de estilo y mensajes localizados son proporcionados por el componente. Los componentes pueden lanzar eventos y diferentes contenedores comportarse de diferente forma ante el mismo evento.

### Informe de error avanzado
El informe te proporciona mucha más información que simplemente la traza de la excepción, verás que se estaba haciendo, que fué mal y como coregirlo. Con toda esta información solucionar las excepciones será mucho más rápido y fácil. El informe de error también es presentado en caso de errores en las peticiones AJAX.

### Testable
Puedes probar los componentes de forma unitaria, el html generado o hacer pruebas de integración y funcionales. Los componentes son POJOs que no necesitan heredar ni implementar ninguna clase del _framework_. Podrás utilizar la herramienta que desees JUnit/Mockito, Spock, Geb, ...

### Extensible, adaptable y modular
Gracias al contenedor de dependencias y a que los servicios están programados en base a interfaces puedes definir una nueva implementación que modifique el comportamiento del _framework_. Todo servicio en el contenedor de dependencias puede ser redefinido, la mayoría de las cosas son servicios. Exiten módulos para Hibernate, Apache Shiro, Quartz, ... y si no existe puedes usar cualquier librería como RESTEasy, JasperReports, EHCache, JFreeChart, RestFB...

### i18n y l10n
Puedes tener catálogos de mensajes por componente o de manera global en la aplicación. Los assets (imágenes, css, ...) tanbién son localizables y tener una plantilla con un contenido totalmente diferente según el idioma del usuario.

### Convención sobre configuración
Las convenciones permiten evitar la configuración y los posibles errores que podemos cometer al realizarla. Pero más importante, hace que cualquier programador que conozca las convenciones sepa inmediatamente como están organizadas todas las cosas con lo que el tiempo de aprendizaje se reduce considerablemente.

### Librerías de componentes
Los componentes comunes a varios proyectos pueden ser agregados en una librería de componentes (no es más que un archivo jar) para ser reutilizados. Nuevamente para usar los componentes solo tendrás que preocuparte de los parámetros, todos los recursos que necesiten serán extraídos de la librería. No necesitarás copiar y pegar archivos de un proyecto a otro, solo agregar una dependencia o jar a tu proyecto.

Según su principal desarrollador (Howard Lewis Ship, que obtuvo el premio Java Champion en 2010 [[1]](https://java.net/website/java-champions/bios.html#Ship) y Duke's Choice Award por el _framework_ [[2]](https://www.java.net/dukeschoice/2006) en la categoría _open source_), y modestia aparte, piensa que Tapestry ha sido un líder desde una perspectiva puramente tecnológica. Estas son algunas cosas que cree que hizo primero y todavía piensa que lo hace mejor que nadie:

* Componentes reusables (2001)
* Informe de excepción detallado y útil (2001)
* Instrumentación invisible en las plantillas (2002)
* Informe de error con precisión de linea (2004)
* Metaprogramación y modificación de bytecode (2005)
* Recarga de clases en caliente (2006)
* Informe de error completo para peticiones Ajax (2012)
* Integración con RequireJS, less/sass y CoffeeScript (2013)

¿Te ha parecido poco? [¡Descubre alguna más en una presentación!][blogbitix-11].

¡Que lo disfrutéis!, usar el siguiente [enlace para ¡descargarlo!](https://picodotdev.github.io/blog-bitix/assets/custom/PlugInTapestry.pdf)

{{< reference >}}
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html) (elblogdepicodev)
{{< /reference >}}

{{% /post %}}
