---
pid: 332
type: "post"
title: "Pruebas funcionales con Geb en una aplicación web Java"
url: "/2018/07/pruebas-funcionales-con-geb-en-una-aplicacion-web-java/"
date: 2018-07-06T08:00:00+02:00
updated: 2018-07-06T12:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:geb.png"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="geb.png" title1="Geb" width1="350" image2="java.svg" >}}

Las pruebas automatizados permiten comprobar que una aplicación se comporta de la manera esperada en los casos probados, creando pruebas automatizadas se evita hacer las aburridas y repetitivas pruebas manuales que consumen gran cantidad de tiempo. Hay diferentes categorías de pruebas: unitarias, de integración y las funcionales. Para las pruebas unitarias y de integración en la plataforma Java unas de las más populares herramientas son [JUnit][junit] y [Spock][spock], para las pruebas funcionales están [Selenium][selenium] y la herramienta que explicaré en este artículo [Geb][geb] que puede usarse junto con Spock haciendo que el código de los teses sea muy descriptivo.

Geb soporta una APi similar a la que emplea [jQuery][jquery] para la interacción con los elementos de la página bajo pruebas. Este ejemplo prueba a ir a la página del buscador Google y que el resultado es el esperado usando alguna de las múltiples formas de [interacción con el contenido de la página](http://www.gebish.org/manual/current/#navigator).

{{< code file="GoogleSpec.groovy" language="groovy" options="" >}}

Para hacer más sencillos las pruebas se pueden describir las páginas, sus URLs y los elementos que contienen. Para ello hay que crear una clase que extienda de [Page](http://www.gebish.org/manual/current/api/geb/Page.html) y definir propiedades como _url_, _at_ y _content_, se pueden incluso definir métodos. En la [documentación de Geb](http://www.gebish.org/manual/current/) está más detallado la [definición de las páginas](http://www.gebish.org/manual/current/#pages). También se pueden crear [módulos](http://www.gebish.org/manual/current/#modules) para definir elementos comunes a varias páginas.

{{< code file="IndexSpec.groovy" language="groovy" options="" >}}

La automatización de las pruebas además de comprobar que la página devuelva es la esperada, en el caso de estos ejemplo con una propiedad meta o con el título de la página, consiste en realizar las interacciones que un usuario realizaría como introducir datos en formularios, hacer clic en elementos de una página y comprobar la presencia de elementos que valide la prueba. Con esta herramienta se pueden probar los casos y flujos funcionales más importantes de la aplicación como sería el proceso de compra en una aplicación de comercio electrónico y la búsqueda, alta y modificación de un registro en la aplicación de gestión.

En este ejemplo se realiza una búsqueda en Google y se comprueba el resultado devuelto. Primero se accede a ella con la sentencia _to_, se introduce el texto de búsqueda _Chuck Norris_ y se pulsa el botón de búsqueda. La comprobación consiste en asegurar que la página devuelta es la página de resultados de búsqueda con la sentencia _at_ y que el primer resultado de la búsqueda contiene la palabra _Chuck_, _GoogleHomePage_ define la página de búsqueda, _GoogleResultsPage_ la página de resultados y _GoogleSearchSpec_ contiene la interacción de la prueba.

{{< code file="GoogleSearchSpec.groovy" language="groovy" options="" >}}

Las dependencias de Geb necesarias a incluir en el archivo de configuración de la herramienta de gestión del proyecto usando [Gradle][gradle] son las siguientes:

{{< code file="build-dependencies.gradle" language="groovy" options="" >}}

Usando una [aplicación con Spring Boot][blogbitix-103] para ejecutar los teses de integración se debe iniciar la aplicación web previamente con la anotación [SpringBootTest](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/test/context/SpringBootTest.html) mostrado en el caso _IndexSpec_ además de excluir los teses de integración y los unitarios de los funcionales. En el ejemplo con la tarea de Gradle _integrationTest_ se ejecutan los teses de funcionales de Geb.

{{< code file="build-tasks.gradle" language="groovy" options="" >}}

Con Gradle el informe de resultados de las pruebas se genera en _build/reports/tests/integrationTest_ en una colección de páginas HTML con el siguiente aspecto. Si hubiese algún error se mostraría un mensaje descriptivo del fallo ocurrido. La prueba _IndexSpec_ tarda medio minuto ya que previamente ha de iniciar el servidor de aplicaciones con la aplicación, en este caso usando [Spring Boot][spring-boot].

{{< image
    gallery="true"
    image1="image:geb-test-results.png" optionsthumb1="650x450" title1="Informe de pruebas de integración"
    caption="Informe de las pruebas funcionales" >}}

Algunas otras herramientas que son ampliamente usadas en proyectos Java son las que comentaba en el artículo [Nueva visita a herramientas para un proyecto Java][blogbitix-84].

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew integrationTest" >}}

{{< reference >}}
* [Pruebas unitarias y de integración en Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2013/06/pruebas-unitarias-y-de-integracion-en-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
