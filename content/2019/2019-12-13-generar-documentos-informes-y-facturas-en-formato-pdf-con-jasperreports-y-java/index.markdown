---
pid: 449
type: "post"
title: "Generar documentos, informes y facturas en formato PDF con JasperReports y Java"
url: "/2019/12/generar-documentos-informes-y-facturas-en-formato-pdf-con-jasperreports-y-java/"
date: 2019-12-13T13:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "resource:images/jaspersoft-studio.png"
tags: ["java", "planeta-codigo"]
summary: "Para generar documentos PDF sencillos en Java está la librería PDFBox que mediante código permite insertar la información y los elementos del documento. Con PDFBox el documento es generado completamente mediante código, para separar el estilo del documento y la información que contiene y para documentos más complejos está JasperReports que mediante una plantilla hace que si cambia el estilo del documento el código no requiera cambios."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Las aplicaciones en el ámbito de gestión necesitan generar documentos a partir de la información que contienen. Pueden ser para [exportar datos en un archivo en formato CSV con Apache POI][blogbitix-146] o [documentos PDF sencillos con PDFBox][blogbitix-430]. Los documentos PDF pueden ser de diverso tipo, informes, facturas, cartas, recibos, ... En Java una de las librerías para generar documentos PDF complejos es [JasperReports][jasperreports].

Los informes de JasperReports se generan a partir de una plantilla creada con [JasperReport Studio][jaspersoft-studio]. JasperReports divide un documento en diferentes bandas en las cuales se puede incluir diferentes elementos como texto, valores, imágenes, ... Las bandas son apartados de información como la cabeceras o detalles, puede estar anidadas y repetirse según los datos de la fuente de datos.

{{< image
    gallery="true"
    image1="image:jaspersoft-studio.png" optionsthumb1="650x450" title1="JasperSoft Studio"
    caption="JasperSoft Studio" >}}

Los informes con JasperReports tiene varias posibilidades de obtener los datos, una de ellas es proporcionándoselos mediante parámetros y o una colección de _beans_ de cualquier tipo, pero también proporcionándole una conexión a la base de datos relacional y que JasperReports lance consultas SQL para obtener los datos que necesita.

Utilizando los elementos de la paleta como campos de texto e imagen y posicionándolos en el lugar adecuado sobre el informe se crea la plantilla del documento. Para asignar valores a los elementos se inserta una expresión que en este caso permite obtenerlo de los parámetros que se le proporcionen al informe a los cuales con funciones incorporadas se les puede aplicar transformaciones para obtener el valor deseado (de fecha, lógicas, numéricas o de texto).

{{< image
    gallery="true"
    image1="image:editor-expresiones-parametros.png" optionsthumb1="200x150" title1="Editor de expresiones, parámetros"
    image2="image:editor-expresiones-campos.png" optionsthumb2="200x150" title2="Editor de expresiones, campos"
    image3="image:editor-expresiones-variables.png" optionsthumb3="200x150" title3="Editor de expresiones, variables"
    caption="Editor de expresiones" >}}

El código Java necesario para compilar el archivo de la plantilla del informe, proporcionarle los parámetros y generar el PDF es el siguiente.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

El resultado es este boceto de factura a la que con más tiempo, añadiendo más elementos y modificando los estilos quedará algo más real a lo que son las facturas emitidas por las compañías.

{{< image
    gallery="true"
    image1="image:documento.png" optionsthumb1="650x450" title1="Documento PDF generado con JasperReports"
    caption="Documento PDF generado con JasperReports" >}}

En este caso los datos solo se proporcionan mediante parámetros pero JasperReport también es capaz de extraer los datos realizando consultas en a la bases de datos directamente usando una conexión de JDBC y las sentencias SQL adecuadas. En algún caso también es posible insertar en el documento una [gráfica generada con JFreeChart][blogbitix-273] previamente, al informe como parámetros se le puede enviar cualquier tipo de Java que para una gráfica es un _InputStream_.

Los siguientes enlaces son documentación a una guía de inicio, una guía completa y tutoriales.

* [Getting Started with Jaspersoft Studio](http://community.jaspersoft.com/documentation/tibco-jaspersoft-studio-user-guide/v60/getting-started-jaspersoft-studio)
* [The JasperReports Ultimate Guide](http://jasperreports.sourceforge.net/JasperReports-Ultimate-Guide-3.pdf)
* [JasperReports Tutorial](https://www.tutorialspoint.com/jasper_reports/index.htm)

{{% sourcecode git="blog-ejemplos/tree/master/JasperReports" command="./gradlew run" %}}

{{< reference >}}
* [Example on how to generate a simple pdf report with JasperReports](https://gist.github.com/rponte/5044469)
{{< /reference >}}

{{% /post %}}
