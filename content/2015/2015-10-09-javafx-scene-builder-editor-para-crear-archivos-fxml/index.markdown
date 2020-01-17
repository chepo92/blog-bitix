---
pid: 102
type: "post"
title: "JavaFX Scene Builder, editor para crear archivos FXML"
url: "/2015/10/javafx-scene-builder-editor-para-crear-archivos-fxml/"
date: 2015-10-09T00:00:00+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Con la aplicación JavaFX Scene Builder podemos construir la interfaz gráfica de una aplicación de escritorio Java de forma más sencilla. JavaFX Scene Builder genera archivos descriptores FXML que podemos cargar en la aplicación evitando la tediosa y no sencilla tarea de construir la interfaz gráfica mediante código. En el artículo comento la aplicación JavaFX Scene Builder, como usar los archivos FXML en una aplicación de escritorio, como asociar manejadores de eventos y como cambiar las propiedades de los controles."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Por lo poco que he visto JavaFX es una gran evolución sobre <abbr title="Abstract Window Toolkit">AWT</abbr> y Swing para desarrollar aplicaciones de escritorio en Java aportando varias mejoras. En el artículo [Introducción a JavaFX][blogbitix-100] comentaba que una de las cosas que me parecía más complicada usando tanto AWT y más tarde usando Swing era la construcción de los elementos visuales mediante código. El código para construir las ventanas, paneles, rejillas, botones, etiquetas, etc era extenso y difícil de comprender la composición leyéndolo. Con JavaFX se ha introducido una nueva herramienta visual llamada [JavaFX Scene Builder][javafx-scene-builder] que permite generar un archivo en formato FXML (declarativo en XML) que contiene la descripción de las ventanas o como llama JavaFX escenas. Este descriptor es similar a la forma de construir interfaces gráficas en la plataforma de Microsoft con los archivos [XAML](https://msdn.microsoft.com/en-us/library/cc295302.aspx).

Con los archivos FXML que genera la aplicación JavaFX Scene Builder crear aplicaciones gráficas es mucho más sencillo y más fácilmente mantenible. Proporciona un editor que sigue el principio lo que ves es lo que obtienes (<abbr title="What You See Is What You Get">_WYSIWYG_</abbr>) y que permite generar los archivos FXML que posteriormente se pueden utilizar en la aplicación Java de escritorio para crear la interfaz visual. Podemos [descargar la aplicación JavaFX Scene Builder](https://www.oracle.com/technetwork/java/javase/downloads/javafxscenebuilder-1x-archive-2199384.html) desde su página de descargas. En la siguiente imagen se puede ver la interfaz con el ejemplo _Hola Mundo_.

{{< image
    gallery="true"
    image1="image:javafx-scene-builder.png" optionsthumb1="300x200" title1="JavaFX Scene Builder con la aplicación ¡Hola Mundo!"
    caption="JavaFX Scene Builder con la aplicación ¡Hola Mundo!" >}}

Y el FXML que genera del mismo ejemplo.

{{< code file="HelloWorld.fxml" language="XML" options="" >}}

Que podemos usar en una aplicación con el siguiente código. Comparándolo con el [código del ejemplo sin FXML](https://github.com/picodotdev/blog-ejemplos/blob/master/HolaMundoJavaFX/src/main/java/io/github/picodotdev/javafx/HelloWorld.java) vemos que el número de líneas necesarias son unas cuantas menos que se notará más cuanto más compleja sea la interfaz gráfica.

{{< code file="HelloWorldFXML.java" language="java" options="" >}}

En la aplicación JavaFX Scene Builder disponemos de una amplia paleta de controles que podemos usar arrastrando y soltando para construir la interfaz, botones, _checkbox_, _radio buttons_, paneles, rejillas, menús, contenedores, miscelánea, formas, 3D, ...

{{< image
    gallery="true"
    image1="image:controles-javafx-scene-builder.png" optionsthumb1="300x200" title1="Controles de JavaFX"
    caption="Controles de JavaFX" >}}

Si con los archivos FXML construimos la interfaz queda como enlazar los elementos visuales con su comportamiento mediante eventos. Una forma es inyectar en propiedades con una anotación los elementos visuales y añadirles el código de comportamiento, otra es indicar en el propio archivo FXML la clase controlador que se encargará del manejo de los eventos del evento visual y otra es incluir el código manejador de evento en el propio archivo FXML.

{{< code file="HelloWorldFXMLController.java" language="java" options="" >}}

La clase manejador de eventos se indica en el panel _Controller_ y es una clase con métodos que posteriormente se indican en el editor con una almohadilla (`#`) delante en el panel _Code_. Por ejemplo, si el manejador de un botón se llama _onClick_ en la clase controlador _HelloWorldFXMLController_ deberemos tener ese método con el parámetro adecuado en este caso un [_ActionEvent_](https://docs.oracle.com/javase/8/javafx/api/javafx/event/ActionEvent.html).

{{< image
    gallery="true"
    image1="image:javafx-scene-builder-controller.png" optionsthumb1="300x200" title1="Añadiendo comportamiento a aplicación JavaFX"
    caption="Añadiendo comportamiento a aplicación JavaFX" >}}

Además de poder enlazar los componente visuales con el código para añadirles funcionalidad se pueden modificar las propiedades visuales como el texto, fuente y tamaño, alineación, opacidad, visibilidad, altura, anchura, margen, margen interior, rotación, escalado, ... . Algunas propiedades son aplicables a varios componentes otras son específicas según el componente.

{{< image
    gallery="true"
    image1="image:propiedades-javafx-scene-builder.png" optionsthumb1="300x200" title1="Propiedades de los controles JavaFX"
    caption="Propiedades de los controles JavaFX, en este caso de un botón" >}}

Entre las [demostraciones y ejemplos de Java 8](https://www.oracle.com/technetwork/java/javase/downloads/index.html) está la aplicación _Modena_ con la que podemos ver el aspecto visual de los componentes, en la aplicación _Ensemble_ hay más ejemplos junto con código de muchos controles.

{{< image
    gallery="true"
    image1="image:modena.png" optionsthumb1="300x200" title1="Aplicación Modena"
    caption="Aplicación Modena" >}}
{{< image
    gallery="true"
    image1="image:ensemble.png" optionsthumb1="300x200" title1="Aplicación Ensemble"
    caption="Aplicación Ensemble" >}}

En la propia página web de JavaFX, en el libro [JavaFX For Dummies](https://amzn.to/2ZQN8kp) y otra documentación se puede encontrar explicado de forma más detallada JavaFX.

{{< amazon
    linkids="86e39a50525b1973ff3f39ad53d4dff6"
    asins="1118385349" >}}

En definitiva con la aplicación JavaFX Scene Builder y los archivos FXML construir la interfaces gráficas de una aplicación de escritorio Java es bastante más simple que lo era antiguamente. JavaFX además ofrece posibilidades que antes no eran posibles en Swing y AWT como rotar componentes, un componente visualizador de HTML, soporte para aceleración gráfica por hardware y más cosas. Después de haber conocido en algo más detalle JavaFX me quedo con una buena sensación. Como muestra de la flexibilidad de cambio de los estilos de los controles el proyecto [JFoenix](http://www.jfoenix.com/) les aplica el _Material Desing_ de las aplicaciones [Android][android] de Google.

{{< reference >}}
* [Introducción a JavaFX][blogbitix-100]
* [FXML Get Started](https://docs.oracle.com/javafx/2/fxml_get_started/jfxpub-fxml_get_started.htm)
* [Introduction to FXML](https://docs.oracle.com/javafx/2/api/javafx/fxml/doc-files/introduction_to_fxml.html)
* [Connecting SceneBuilder edited FXML to Java code](https://blogs.oracle.com/jmxetc/entry/connecting_scenebuilder_edited_fxml_to)
* [Building a JavaFX Application Using Scene Builder](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/jfxsb-get_started.htm#JSBGS101)
{{< /reference >}}

{{% /post %}}
