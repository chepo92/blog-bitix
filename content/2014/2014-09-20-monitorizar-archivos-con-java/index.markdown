---
pid: 43
type: "post"
title: "Monitorizar archivos con Java"
url: "/2014/09/monitorizar-archivos-con-java/"
date: 2014-09-20T09:27:35+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["software", "programacion", "java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Java a partir de la versión 7 del JDK ofrece el soporte para recibir notificaciones de cambios en el sistema de archivos sin tener que estar monitorizándolos constantemente en busca de actividad. No tener que estar monitorizando los archivos de [forma «polling»](https://es.wikipedia.org/wiki/Polling) para buscar cambios además de hacer que el código sea más sencillo desde el punto de vista de la programación hace que no se malgasten recursos del sistema si los cambios son esporádicos.

Para ofrecer esta funcionalidad y a partir de Java 7 hay disponibles unas pocas nuevas clases dentro de lo que se conoce como la [nueva API de entrada y salida (NIO)](https://docs.oracle.com/javase/7/docs/api/java/nio/package-summary.html) que sustituye al método tradicional de entrada y salida con las clases del paquete [java.io](https://docs.oracle.com/javase/7/docs/api/java/io/package-summary.html) entre otras cosas para trabajar con el sistema de archivos.

Para monitorizar los archivos y recibir notificaciones cuando se produzcan cambios en ellos deberemos emplear las clases [Path](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Path.html) y [WatchService](https://docs.oracle.com/javase/7/docs/api/java/nio/file/WatchService.html). Empleando estas dos clases el código para monitorizar cambios en los archivos de un directorio sería: registrar el servicio de monitorización obtenido de la clase [FileSystems](https://docs.oracle.com/javase/7/docs/api/java/nio/file/FileSystems.html), escuchar los eventos cuando se produzcan y procesarlos de forma secuencial en un bucle. En el ejemplo se monitoriza el archivo [fuente de una clase Java que es compilado en memoria e instanciada][blogbitix-42] como explicaba en el anterior artículo:

{{< code file="ConfiguracionManager.java" language="java" options="" >}}

En este ejemplo solo se monitorizan los cambios de los archivos pero usando otras propiedades se pueden monitorizar la eliminación y creación, en la clase [StandardWatchEventKinds](https://docs.oracle.com/javase/7/docs/api/java/nio/file/StandardWatchEventKinds.html) pueden verse estas propiedades. Una cosa a tener en cuenta es que se pueden monitorizar directorios no archivos en concreto, pero como en el ejemplo una vez que recibimos las notificaciones de monitorización es algo que podemos hacer nosotros. Ejecutando el programa una salida del su funcionamiento podría ser la siguiente en el que la clase se recarga cuando se detectan cambios en ella variando los valores que se emiten en la consola.

{{< image
    gallery="true"
    image1="image:main.png" optionsthumb1="300x200" title1="Salida programa Main.java" >}}

Esta funcionalidad de monitorización de cambios de archivos junto con la [compilación y carga dinámica de archivos con código fuente Java][blogbitix-42] puede utilizarse para hacer que la configuración de una aplicación esté definida en código Java y se cargue dinámicamente sin tener que reiniciar la aplicación. Y esto es lo que mostraré en la siguiente entrada y explicaré con más detalles que ventajas tienen esta idea.

El código fuente completo puede encontrarse en el [siguiente repositorio de GitHub](https://github.com/picodotdev/blog-ejemplos/tree/master/ConfiguracionJava).

{{< reference >}}
* [Path](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Path.html)
* [WatchService](https://docs.oracle.com/javase/7/docs/api/java/nio/file/WatchService.html)
* [Introducción a NIO.2, el sistema de entrada/salida de Java][blogbitix-310]
{{< /reference >}}

{{% /post %}}
