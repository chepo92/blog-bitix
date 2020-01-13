---
pid: 430
type: "post"
title: "Ejemplo sencillo de como crear un documento PDF con Java y PDFBox"
url: "/2019/08/ejemplo-sencillo-de-como-crear-un-documento-pdf-con-java-y-pdfbox/"
aliases: ["/2019/08/ejemplo-sencillo-de-como-crear-un-documento-pdf-con-pdfbox/"] 
date: 2019-08-30T18:00:00+02:00
updated: 2019-08-31T00:15:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Leer un CSV, escribir un CSV, archivos excel, generar gráficas para visualizar datos junto con generar documentos PDF son tareas comunes de las aplicaciones como forma de exportar los datos de la base de datos de una aplicación. Generar un archivo PDF con PDFBox requiere unas pocas lineas de código para documentos con cierta complejidad quizá sea más adecuado usar la librería JasperReports."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Generar documentos e informes de salida en una una tarea básica de cualquier aplicación y una forma de exportar los datos a otros formatos. Con [Apache POI][apache-poi] se pueden generar hojas de cálculo excel para su procesamiento con [LibreOffice][libreoffice] o [Microsoft Office Excel][microsoft-office]. En ocasiones también es necesario [generar gráficas para visualizar un conjunto grande de datos][blogbitix-273] para ser más fáciles de interpretar, descubrir tendencias, comparar, sacar conclusiones en base a las cuales tomar alguna acción. Los archivos PDF también son muy utilizados para imprimirlos en formato en papel o enviarlos adjuntos en correos electrónicos.

Uno de estos casos podría ser la generación de una factura en base a una plantilla e incluir el el importe y consumo realizado por un cliente y que este pueda obtenerla en formato electrónico o le sea enviada por correo electrónico como un documento adjunto o [enviar un correo electrónico][elblogdepicodev-50] para indicar que tiene la factura disponible en su área de cliente lista para su descarga. Este es el caso de muchas empresas que ofrecen servicios como compañías eléctricas, de telecomunicaciones, servicios municipales de agua y basura, bancos para su justificantes y comprobantes, comercios, etc...

Para generar documentos en PDF en Java está disponible la librería [Apache PDFBox][apache-pdfbox]. Un ejemplo sencillo de como generar un archivo PDF con algunos estilos de texto, fuentes, un tamaño específico de página y una imagen es el siguiente.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

 El resultado es el siguiente {{< resourcelink text="Documento PDF" name="document.pdf" >}}.

{{< image
    gallery="true"
    image1="image:document.png" optionsthumb1="600x450" title1="Documento generado con PDFBox"
    caption="Documento generado con PDFBox" >}}

Una alternativa a PDFBox es [iText][itext], la primera tiene una [licencia Apache][apache-license] e iText una [licencia AGPL][gnu-agpl] o comercial lo que puede ser determinante para un proyecto. La licencia AGPL obliga a que una aplicación web haga público su código fuente lo que probablemente en usos comerciales no sea lo deseado y usar la versión de la licencia comercial obliga a adquirir el derecho de uso al que obliga la licencia que posee un coste tal vez indeseado o que directamente hace que quede descartada.

PDFBox no posee una forma de escribir párrafos y tener saltos de línea automáticos según el ancho de la página, en el ejemplo el texto se posiciona de forma absoluta en la página estando la coordenada (0,0) en la parte inferior izquierda. Para añadir esta funcionalidad a PDFBox hay que usar el complemento [pdfbox-layout](https://github.com/ralfstuckert/pdfbox-layout).

Pero en vez de crear un documento PDF desde cero desde Java si se trata de una factura es más sencillo partir de un documento PDF a modo de plantilla con el diseño deseado en el que solo haya que incluir la información que varía en la ubicación del documento apropiada. Este sería en caso de una factura o justificante. Y si el documento es un informe con muchos datos o el diseño se desea cambia independientemente de la información que incluye o es complejo en vez de insertar cada campo de texto e imágenes individualmente con código está la opción de utilizar el generador de documentos [JasperReports][jasperreports]. 

En el siguiente [tutorial de PDFBox](https://www.tutorialspoint.com/pdfbox/index.htm) se incluyen más ejemplos de tareas básicas al procesar documentos PDF con esta librería. Con PDFBox el documento PDF se genera completamente mediante código, si el PDF requiere cambios hay que modificar el código que para documentos sencillos es aceptable. Para documentos PDF complejos y para separar el estilo, la información que contiene y que el código no requiera modificaciones también se pueden [Generar documentos, informes y facturas en formato PDF con JasperReports][blogbitix-449].

{{% sourcecode git="blog-ejemplos/tree/master/JavaPdf" command="./gradlew run" %}}

{{< reference >}}
* [Creating PDF Documents With Apache PDFBox 2](https://dzone.com/articles/creating-pdf-documents-with-apache-pdfbox-2)
* [Inserting Image to a PDF Document](https://www.tutorialspoint.com/pdfbox/pdfbox_inserting_image.htm)
* [Is iText Java library free of charge or have any fees to be paid?](https://stackoverflow.com/a/27867740)
* [PDF text layout made easy with PDFBox-Layout](https://hardmockcafe.blogspot.com/2016/04/pdf-text-layout-made-easy-with-pdfbox_17.html)
{{< /reference >}}

{{% /post %}}
