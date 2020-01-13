---
pid: 269
type: "post"
title: "Obtener el mínimo o máximo de dos, una lista o stream de valores en Java"
url: "/2017/10/obtener-el-minimo-o-maximo-de-dos-una-lista-o-stream-de-valores-en-java/"
date: 2017-10-12T11:00:00+02:00
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

Si tenemos dos valores y queremos obtener el menor con una línea de código, podemos obtenerlo con un a sentencia _if_ o con el operador condicional _? :_. Si queremos obtener el menor de tres valores con sentencias _if_ o el operador _? :_  el problema aparentemente sencillo se complica y si optamos por usar una lista de valores tratándola como si el tamaño fuese desconocido quizá usemos un bucle _for_ junto con una variable que mantenga el menor valor encontrado hasta el momento usando un _if_ que compare el valor menor encontrado con el valor actual de la lista.

Sin embargo, en la API de Java hay dos métodos que permiten simplificar esta tarea, para dos valores podemos usar el método [Math.min()](https://docs.oracle.com/javase/9/docs/api/java/lang/Math.html#min-int-int-) y para una lista de valores de tamaño desconocido podemos usar el método [Collections.min()](https://docs.oracle.com/javase/9/docs/api/java/util/Collections.html#min-java.util.Collection-). Usando un [Stream](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html) aún es más sencillo ya que estos poseen un método [Stream.min()](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html#min-java.util.Comparator-) y [Stream.max()](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html#max-java.util.Comparator-) que devuelven el valor mínimo y máximo.

Este sería el código para los casos de comparar dos elementos, una lista y un stream de valores. Se que se puede probar con [la herramienta JShell][blogbitix-265] incluída entre [otras novedades de Java 9][blogbitix-264]. En la lista de 20 valores aleatorios el menor es el 2 y entre la variable _a_ y _b_ el valor mínimo es 19. 

{{< code file="Main.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:min-max.png" optionsthumb1="300x200" title1="Diferentes formas de obtener el valor mínimo y máximo"
    caption="Diferentes formas de obtener el valor mínimo y máximo" >}}

Para obtener el máximo sería similar pero usando el método [Math.max()](https://docs.oracle.com/javase/9/docs/api/java/lang/Math.html#max-int-int-), [Collections.max()](https://docs.oracle.com/javase/9/docs/api/java/util/Collections.html#max-java.util.Collection-) o [Stream.max()](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html#max-java.util.Comparator-).

{{% /post %}}
