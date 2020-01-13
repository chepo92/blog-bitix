---
pid: 74
type: "post"
title: "Evitar iniciar varias veces la máquina virtual Java para procesos cortos"
url: "/2015/04/evitar-iniciar-varias-veces-la-maquina-virtual-java-para-procesos-cortos/"
date: 2015-04-03T22:22:51+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Si en una aplicación o proyecto tenemos necesidad de ejecutar uno o varios procesos múltiples veces donde únicamente cambian los parámetros, de forma seguida y el tiempo de ejecución de esos procesos es corto probablemente quizá veamos que la mayor parte del tiempo empleado de los procesos sea empleado en iniciar la máquina virtual Java (JVM). Digo quizá porque usando [Ubuntu][ubuntu] en la [nube de Amazon EC2][amazon-ec2] el tiempo de inicio era de varios segundos, sin embargo, en mi ordenador personal usando [Arch Linux][archlinux] y con un [disco SSD de Samsung][blogbitix-18] los tiempos que obtengo son de unos pocos milisegundos, quizá la larga [lista de dependencias del paquete de Java 7 en Ubuntu](http://packages.ubuntu.com/trusty/openjdk-7-jdk) (probablemente del paquete [openjdk-7-jre](http://packages.ubuntu.com/trusty/openjdk-7-jre)) y ocupando considerablemente más megas en disco tenga algo que ver:

{{< image
    gallery="true"
    image1="image:tiempo-inicio-jvm.png" optionsthumb1="300x200" title1="Tiempo de inicio de la JVM" >}}

Por ejemplo, supongamos que tenemos unos procesos que tienen que ejecutarse de forma regular cada cierto tiempo variando los parámetros que se indica en cada uno de ellos. La ejecución de los procesos podría ser:

{{< code file="script-1.sh" language="bash" options="" >}}

A continuación pondré una idea para esta situación, quizá no es algo que se de muy a menudo pero en una ocasión esto me ha servido para evitar que el tiempo de inicio de la JVM sea el mayor tiempo empleado por los programas cortos. Consiste en iniciar una única máquina virtual para todos los procesos, con todos los parámetros de cada uno siendo el programa al iniciarse el que determine los parámetros de cada proceso individual. Por ejemplo, reescribiendo los ejemplos anteriores de la siguiente forma:

{{< code file="script-2.sh" language="bash" options="" >}}

Esto iniciará una única máquina virtual en vez de 6 de forma que evitemos mucho del tiempo empleado en el inicio de las JVM, dependiendo del tiempo empleado por los procesos el tiempo total posiblemente se reduzca considerablemente. Pasando todos los parámetros al único proceso deberemos determinar que parámetros son de cada uno, para ello en el ejemplo se usa el parámetro _sep_ y la _\\_ para poderlos ponerlos en varias lineas y la llamada sea más legible.

A continuación, el código para obtener los parámetros de cada proceso en el programa que inicia la única máquina virtual Java que se inicia.

{{< code file="Main.java" language="java" options="" >}}

El programa Java con el que he medido el tiempo de inicio de la JVM es el siguiente:

{{< code file="Test.java" language="java" options="" >}}

{{< reference >}}
* [Novedades y nuevas características sobre Java 8][blogbitix-17]
* [Más artículos sobre Java][blogbitix-tag-java]
{{< /reference >}}

{{% /post %}}
