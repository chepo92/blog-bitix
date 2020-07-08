---
pid: 273
type: "post"
title: "Visualizar datos y generar gráficas en Java con JFreeChart"
url: "/2017/10/visualizar-datos-y-generar-graficas-en-java-con-jfreechart/"
date: 2017-10-22T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:xy-chart.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Visualizar datos de forma gŕafica ayuda a comprender un conjunto de datos grande mucho mejor que leyendo los valores en una tabla con varias columnas. En Java con la librería JFreeChart podemos generar gráficas de diferentes tipos que podremos incluir en los archivos _pdf_ que generemos en un aplicación o podremos mostrar en forma de imagen en el navegador si se trata de una aplicación web."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Una de las principales tareas de las aplicaciones informáticas es manejar información, almacenar y recuperar datos de diversos tipos según sea el ámbito de la información tratada. Ejemplos podrían ser datos meteorológicos como temperatura, presión, velocidad y dirección del viento o datos poblacionales como número de personas, hombres y mujeres, nativos y extranjeros, ... todos estos datos se pueden recoger a lo largo del tiempo. Al recuperar los datos y presentarlos los datos se pueden presentar de forma tabular con las cifras tal y como están guardadas, sin embargo, esta forma hace difícil comprender los datos ¿si queremos ver como han evolucionado los datos meteorológicos durante un periodo de tiempo? ¿si queremos ver el porcentaje de población que le corresponde a cada comunidad autónoma respecto al total o como ha variado en varios años? Visualizar la información de forma gráfica nos ayuda a visualizar y comprender mejor un gran volumen de datos en mucho menos tiempo. Una vez comprendida la información se extraen tendencias de algunos datos e información útil que ayuden a tomar decisiones.

Estos son los datos de la evolución de cuota de uso entre los usuarios de tres de los principales navegadores desde el 2007 hasta el 2017. Viendo la tabla es más difícil observar la tendencia de cada uno de ellos y como se relacionan los datos con el resto navegadores. En una gráfica se observaría que Internet Explorer tiene una tendencia descendente, Firefox ascendente hasta el nacimiento de Chrome y este continuamente ascendente mientras las otras opciones pierden usuarios

<table cellpadding="3" cellspacing="3">
    <tr>
        <th>Browser</th>
        <th>2007</th>
        <th>2008</th>
        <th>2009</th>
        <th>2010</th>
        <th>2011</th>
        <th>2012</th>
        <th>2013</th>
        <th>2014</th>
        <th>2015</th>
        <th>2016</th>
        <th>2017</th>
    </tr>
    <tr>
        <td>Internet Explorer</td>
        <td>67.7</td>
        <td>63.1</td>
        <td>60.2</td>
        <td>50.6</td>
        <td>41.1</td>
        <td>31.8</td>
        <td>27.6</td>
        <td>20.4</td>
        <td>17.3</td>
        <td>12.3</td>
        <td>8.1</td>
    </tr>
    <tr>
        <td>Firefox</td>
        <td>25</td>
        <td>29.1</td>
        <td>32.1</td>
        <td>32.9</td>
        <td>31.9</td>
        <td>25.5</td>
        <td>20.1</td>
        <td>18.4</td>
        <td>15.3</td>
        <td>11.4</td>
        <td>9.5</td>
    </tr>
    <tr>
        <td>Chrome</td>
        <td></td>
        <td></td>
        <td>0.2</td>
        <td>6.4</td>
        <td>14.6</td>
        <td>25.3</td>
        <td>30.1</td>
        <td>34.3</td>
        <td>43.2</td>
        <td>47.3</td>
        <td>58.4</td>
    </tr>
</table>

[JFreeChart][jfreechart] es una librería Java que permite generar gráficas de diferentes tipos con la que visualizar datos. Con esta librería de software libre que tiene una [licencia LGPL][lgpl] es posible generar gráficas de histograma, de área, de barras, de barras apiladas, con ejes combinados, financieras, de Gantt, de líneas, diales, con múltiples ejes, sobrepuestas, tartas, estadísticas, de series temporales, xy y otros tipos, a algunas es posible darles un aspecto en tres dimensiones. Las gráficas las podemos exportar a archivos de imagen _png_, _jpg_ o formatos escalares como _svg_ con lo que serán utilizables de múltiples formas, por ejemplo, incluyendo las gráficas en archivos PDF o si la aplicación es una aplicación web devolver las imágenes al navegador para que las visualice, usando [JasperReports][jasperreports] para generar informes es posible incluir las imágenes generadas por JFreeChart.

Desde la propia página web de JFreeChart es posible ejecutar una [aplicación Java Web Start de demostración](http://www.jfree.org/jfreechart/jfreechart-1.0.16-demo.jnlp) que contiene múltiples ejemplos con datos para ver como son los diferentes tipos de gráficas, en la librería hay un archivo _jar_ con la misma aplicación de demostración junto con el código fuente de algunos ejemplos. En el [Javadoc](http://www.jfree.org/jfreechart/api/javadoc/overview-summary.html) está la documentación con la API ofrecida por la librería. El autor de la librería ofrece una [guía en formato PDF y el código fuente de los ejemplos](http://object-refinery.com/jfreechart/guide.html) pero estos son de pago. La última versión tiene unos años pero es compatible con Java 1.6.

{{< code file="demo.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:pie-chart.png" optionsthumb1="300x200" title1="Gráfica de tarta"
    image2="image:polar-chart.png" optionsthumb2="300x200" title2="Gráfica de coordenadas polares" >}}
{{< image
    gallery="true"
    image1="image:stacked-xy-bar.png" optionsthumb1="300x200" title1="Gráfica de barras apiladas"
    image2="image:time-series.png" optionsthumb2="300x200" title2="Gráfica de series"
    caption="Ejemplos de gráficas" >}}

Este sería el código fuente de un ejemplo sencillo para una gráfica varias series datos. En el ejemplo primeramente se crear el conjunto de datos, el [Dataset](http://www.jfree.org/jfreechart/api/javadoc/org/jfree/data/general/Dataset.html) de la gráfica, se establecen algunos estilos de visualización con [XYLineAndShapeRenderer](http://www.jfree.org/jfreechart/api/javadoc/org/jfree/chart/renderer/xy/XYLineAndShapeRenderer.html), con la clase factoría [ChartFactory](http://www.jfree.org/jfreechart/api/javadoc/org/jfree/chart/ChartFactory.html) se obtiene la gráfica proporcionándole los datos y finalmente generan un archivo en formato _png_ en un archivo, también se podría generar en un [OutputStream](https://docs.oracle.com/javase/9/docs/api/java/io/OutputStream.html) si fuese el caso de una aplicación web que quisiera enviar la imagen al navegador del cliente o también para incluir la imagen en un archivo PDF.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

{{< image
    gallery="true"
    image1="image:xy-chart.png" optionsthumb1="300x200" title1="Gráfica de series"
    caption="Gráfica de series" >}}

En JavaScript también hay librerías para generar gráficas pero para casos complejos y con muchos datos probablemente sea mejor idea generar las gráficas en el lado del servidor que enviar todos los datos que necesite la gráfica al cliente. En GNU/Linux disponemos del programa [gnuplot][gnuplot] usable desde la línea de comandos y por tanto desde cualquier lenguaje que tenga la capacidad de ejecutar comandos del sistema, [ejecutar un comando del sistema con Java][blogbitix-132] de gnuplot para que nos generase la gráfica. Hay varias posibilidades para visualizar de forma gráfica la información.

{{< sourcecode git="blog-ejemplos/tree/master/JFreeChart" command="./gradlew run" >}}

{{< reference >}}
* [Ejemplo sencillo de como crear un documento PDF con Java y PDFBox][blogbitix-430]
* [JFreeChart Program Examples](https://www.javascan.com/chapter/jfreechart)
* [JFreeChart Tutorial](https://www.tutorialspoint.com/jfreechart/index.htm)
{{< /reference >}}

{{% /post %}}
