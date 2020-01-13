---
pid: 44
type: "post"
title: "Configuración usando código Java"
url: "/2014/09/configuracion-usando-codigo-java/"
date: 2014-09-26T19:18:20+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["programacion", "java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

En las dos últimas entradas he explicado [como compilar un archivo de código fuente Java desde una aplicación][blogbitix-42] y como cargar esa clase compilada de forma dinámica para ser utilizada en un programa, la segunda entrada trataba el [como monitorizar un directorio o archivo para ver si han tenido cambios][blogbitix-43] con la nueva API que a partir de Java 7 disponemos.

En esta entrada quiero explicar un ejemplo de como aprovechar estas dos funcionalidades diferentes en un caso práctico y que nos puede ser útil en algún caso. La idea del ejemplo es definir la configuración de una aplicación como podría ser una aplicación web en un archivo de código fuente Java y que cuando se produjese algún cambio se recargase de forma dinámica.

Algunas ventajas de definir la configuración de la aplicación de esta manera son las siguientes:

* Al ser el archivo de configuración código Java que se compila podemos aprovecharnos de la validación que hace el compilador para estar seguros de que está libre de errores léxicos y sintácticos, el archivo solo se cargará cuando está libre de errores de compilación. Al compilarlo el compilador nos advertirá de los errores que contenga de forma precisa.
* Por otra parte al ser código en el archivo de configuración podemos usar el lenguaje Java para hacer ciertas operaciones que en un xml u otro formato de archivo de texto plano no podemos hacer. Podríamos hacer un cálculo o conectarnos a la base de datos u otro sistema para recuperar cierta información. En algunos casos el lenguaje Java puede ser mejor opción para describir la configuración que los archivos de texto, son los mismos [problemas de ant y maven comparados con gradle](https://elblogdepicodev.blogspot.com.es/2012/03/herramienta-de-construccion-gradle.html). También el código Java puede ser la forma más breve y útil para describir la configuración de la aplicación que archivos de texto, usando código Java podremos devolver objetos, listas, ... en vez de Strings o números.
* La recarga del archivo de configuración cuando se produzcan cambios en él nos evitará tener que reiniciar la aplicación, simplemente haremos el cambio y la configuración se aplicaría. Esto puede ser útil en las aplicaciones web evitándonos tener que hacer un reinicio de la aplicación.

Una de las razones de la existencia de los archivos de configuración es tener esa configuración de forma externalizada a la aplicación de tal forma que podamos cambiar la configuración sin tener que modificar la aplicación ni tener que recompilarla. Con la compilación y carga dinámica de la clase Java de la configuración podemos tener estas mismas propiedades de los archivos de configuración. Si a esto le sumamos la recarga dinámica evitamos tener caídas de servicio en la aplicación por modificaciones en el archivo de configuración.

Todo esto es algo que se comenta en el [libro The Pragmatic Programmer](https://amzn.to/2sNTtku) con las siguientes lineas:

> Many programs will scan such things only at startup, which is unfortunate. If you need to change the configuration, this forces you to
> restart the application. A more flexible approach is to write programs that can reload their
> configuration while they’re running. This flexibility comes at a cost: it
> is more complex to implement. If it is a long-running server process, you will want to provide some way to reread and apply
> metadata while the program is running.

Esta es la teoría, veamos el código del ejemplo de configuración en Java con recarga dinámica. La mayor parte del código está en la clase ConfiguracionManager. Esta tiene dos métodos que son usados en la clase Main de la aplicación, el método load carga la clase y la compila, y el método monitor que monitoriza el archivo en busca de cambios y llama al método load cuando los detecte.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="ConfiguracionManager.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:main.png" optionsthumb1="300x200" title1="Salida programa Main.java" >}}

Esta idea de no utilizar archivos de configuración sino emplear código como la mejor forma y más breve de definirla es algo que hace [gradle][gradle] con los archivos de configuración del proyecto y [apache tapestry][tapestry] para definir los módulos y la configuración del contenedor de inversión de control, parece una tendencia por el hecho de tener las propiedades y ventajas comentadas sobre otro tipo de archivos ya sean xml o sus sustitutos más recientes como yaml, json, ... que son más compactos y legibles que xml pero que siguen adoleciendo de algunos de los mismos defectos.

El código fuente completo puede encontrarse en el [siguiente repositorio de GitHub](https://github.com/picodotdev/blog-ejemplos/tree/master/ConfiguracionJava).

{{% /post %}}
