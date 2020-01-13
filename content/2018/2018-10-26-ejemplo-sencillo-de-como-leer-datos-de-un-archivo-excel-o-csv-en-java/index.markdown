---
pid: 357
type: "post"
title: "Ejemplo sencillo de cómo leer datos de un archivo Excel o CSV en Java"
url: "/2018/10/ejemplo-sencillo-de-como-leer-datos-de-un-archivo-excel-o-csv-en-java/"
date: 2018-10-26T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Los formatos de archivo de columnas separadas por comas o CSV y los documentos en formato de hojas de cálculo excel del paquete ofimático [Microsoft Office][microsoft-office] son muy utilizados como formato de archivo para intercambiar datos entre aplicaciones o simplemente como contenedores de datos. Para leer los datos en estos formatos de archivos en Java hay que emplear alguna librería que facilite y entienda estos formatos de los archivos. Para leer los archivos CSV está la librería [OpenCSV][opencsv] y para los archivos excel está la librería [Apache POI][apache-poi].

Con Apache POI para acceder al archivo excel hay que usar unas pocas clases de su API como [HSSFWorkbook](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFWorkbook.html), [HSSFSheet](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFSheet.html), [HSSFRow](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFRow.html), [HSSFCell](https://poi.apache.org/apidocs/org/apache/poi/hssf/usermodel/HSSFCell.html) y utilizar el método adecuado según el tipo de datos a obtener.

{{< code file="Main-excel.java" language="java" options="" >}}

Para el caso de los CSV hay que utilizar la clase [CSVReader](http://opencsv.sourceforge.net/apidocs/com/opencsv/CSVReader.html) que permite iterar sobre las líneas del archivo teniendo en cuenta el caracter separador de las columnas y las comillas de los datos. Para acceder a los valores de cada una de las columnas hay que convertir al tipo de datos deseado ya que siempre se devuelve un _String_.

{{< code file="Main-csv.java" language="java" options="" >}}

En ambos casos la salida en la consola al leer los datos de los documentos es la misma.

{{< code file="System.out" language="plaintext" options="" >}}

Las dependencias a incluir en el proyecto son las siguientes.

{{< code file="build.gradle" language="groovy" options="" >}}

También se puede [utilizar Apache POI para crear hojas excel y OpenCSV para crear archivos CSV][blogbitix-146] con las columnas correctamente separadas por comas. Otra alternativa para leer o escribir archivos en formato CSV es [Apache Commons CSV][apache-commons-csv].

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoApachePOI" command="./gradlew run" >}}

{{< reference >}}
* [Ejemplo sencillo de como crear un documento PDF con Java y PDFBox][blogbitix-430]
{{< /reference >}}

{{% /post %}}
