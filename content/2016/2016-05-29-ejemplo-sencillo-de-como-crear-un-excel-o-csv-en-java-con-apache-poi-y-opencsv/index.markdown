---
pid: 146
type: "post"
title: "Ejemplo sencillo de como crear un Excel o CSV en Java con Apache POI y OpenCSV"
url: "/2016/05/ejemplo-sencillo-de-como-crear-un-excel-o-csv-en-java-con-apache-poi-y-opencsv/"
aliases: ["/2016/05/ejemplo-sencillo-de-como-crear-un-excel-en-java-con-apache-poi/"]
date: 2016-05-29T13:00:00+01:00
updated: 2018-10-26T13:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Los archivos Excel y separados por comas o CSV son muy utilizados como formato para intercambiar datos entre aplicaciones o como formato para exportar cantidades grandes de datos de una aplicación. Por su utilidad es probable que tarde o temprano surja en una aplicación la necesidad de crear archivos o exportar datos a estos formatos. Con la librería Apache POI se pueden crear Excel desde Java y con la librería OpenCSV exportar datos a archivos CSV con el formato correcto."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

La librería [Apache POI][apache-poi] nos permite acceder y crear documentos del producto ofimático [Microsoft Office][microsoft-office] utilizando el lenguaje de programación Java y otros del ecosistema de la <abbr title="Java Virtual Machine">JVM</abbr>. Los archivos que podemos crear y leer son documentos Word, Excel y Powerpoint.

En casi todas las aplicaciones hay necesidad de exportar los datos que maneja la aplicación a algún tipo de documento, un formato muy utilizado es el PDF sobre todo si el documento está destinado a imprimirse pero que no es el más adecuado si requiere modificaciones posteriores o contiene datos numéricos con cálculos. El formato de Excel también es muy utilizado por sus posibilidades para agrupar los datos, agregar, filtrar, hacer cálculos con funciones matemáticas, financieras o de otro tipo. Aunque si es posible es mejor utilizar un formato de documento abierto para no quitarle libertad al usuario para elegir el software que prefiera, el programa ofimático Microsoft Office sigue estando muy extendido con lo que puede que no tengamos otro remedio que utilizar como formato para exportar los datos uno propietario. En este artículo comentaré como crear un documento excel sencillo usando la librería Apache POI y el lenguaje Java.

Para trabajar con archivos _xls_ de Excel debemos usar las clases [HSSFWorkbook](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFWorkbook.html), [HSSFSheet](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFSheet.html), [HSSFRow](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFRow.html), [HSSFCell](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFCell.html) ofrecidas en la API de Apache PIO. Para crear el excel se crea una instancia de _HSSFWorkbook_, una o varias hojas que se corresponden con las instancias de _HSSFSheet_ y en cada hoja se pueden acceder a las filas y celdas con [createRow](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFSheet.html#createRow(int)) en la hoja y con [createCell](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFRow.html#createCell(int)) en la fila. Con el método [setCellValue](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFCell.html#setCellValue(java.lang.String)) establecemos el valor de la celda, este método está sobrecargado y podemos establecer valores _boolean_, [Calendar](javadoc8:java/util/Calendar.html), [Date](javadoc8:java/util/Date.html), _double_, [RichTextString](https://poi.apache.org/apidocs/org/apache/poi/ss/usermodel/RichTextString.html) o [String](javadoc8:java/lang/String.html). Hay otros métodos para cambiar los estilos de la celda con [setCellStyle](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFCell.html#setCellStyle(org.apache.poi.hssf.usermodel.HSSFCellStyle)), [setHyperlink](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFCell.html#setHyperlink(org.apache.poi.ss.usermodel.Hyperlink)) para insertar un enlace o [setCellFormula](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFCell.html#setCellFormula(java.lang.String)) para crear una fórmula que realice algún cálculo con los datos de las celdas.

El siguiente ejemplo crea documento excel con varios datos, aplicando estilos a las cabeceras y una fórmula con el total de los precios de una lista de productos, al final escribe el excel en un archivo. En el archivo de construcción, en este caso de [Gradle][gradle], debemos incluir la dependencia de la librería de Apache POI.

{{< code file="Main-excel.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

[LibreOffice][libreoffice] tiene la capacidad de abrir documentos excel, en la siguiente imagen se ve el documento abierto con LibreOffice Calc creado en el ejemplo.

{{< image
    gallery="true"
    image1="image:libreoffice.png" optionsthumb1="300x200" title1="Excel generado con Apache POI abierto con LibreOffice"
    caption="Excel generado con Apache POI abierto con LibreOffice" >}}

Otro formato de datos muy utilizado es el de columnas separadas por comas o CSV. Con la librería [OpenCSV][opencsv] se pueden escribir archivos bien formados en este formato teniendo en cuenta el caracter separador de las columnas y el entrecomillado de los datos.

{{< code file="Main-csv.java" language="java" options="" >}}

En la [guía de iniciación a las características de los documentos HSSF y XSSF](http://poi.apache.org/spreadsheet/quick-guide.html) hay ejemplos pequeños sobre varias de las funcionalidades más comunes que necesitaremos al generar documentos. Otra funcionalidad relacionada con la escritura en el formato de estos tipos de archivos es la lectura que también es posible con estas mismas librerías, [Ejemplo sencillo de cómo leer datos de un archivo Excel o CSV en Java][blogbitix-357].

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoApachePOI/" command="./gradlew run" >}}

{{< reference >}}
* [Ejemplo sencillo de como crear un documento PDF con Java y PDFBox][blogbitix-430]
* [Busy Developers' Guide to HSSF and XSSF Features](http://poi.apache.org/spreadsheet/quick-guide.html)
{{< /reference >}}

{{% /post %}}
