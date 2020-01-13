---
pid: 233
type: "post"
title: "Luces navideñas con la Raspberry Pi y Java"
url: "/2017/05/luces-navidenas-con-la-raspberry-pi-y-java/"
date: 2017-05-14T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:raspberrypi.svg"
tags: ["gnu-linux", "java", "planeta-codigo", "programacion"]
series: ["electronica"]
summary: "Con diferentes sensores y dispositivos de salida de electrónica se pueden realizar proyectos muy interesantes. En el siguiente usaré múltiples diodos LED que se encenderán y apagarán de forma aleatoria cada cierto tiempo. El resultado será muy vistoso y lo utilizaré cuando lleguen las fechas como luces navideñas."
---

{{% post %}}

{{< logotype image1="raspberrypi.svg" title1="Raspberry Pi" width1="200" image2="java.svg" >}}

Como muestra de lo que se puede hacer con la Raspberry Pi usando los _pines_ GPIO haré un ejemplo que consistirá en múltiples diodos LED de diferentes colores enciendan y apaguen simulando una especie de luces navideñas. Como yo tengo la Raspbperry Pi 1 B con 26 _pines_ de los cuales solo 17 son GPIO podré usar hasta 17 diodos LED, aunque solo usaré 15. En el [kit de iniciación a la electrónica para la Raspberry Pi][blogbitix-212] viene incluidos 24 diodos LED de diferentes colores 6 blancos, 6 rojos, 6 amarillos y 6 verdes, también es necesario una resistencia por cada diodo de unos 200 ohmios de los cuales en el _kit_ se incluyen 20 de este valor.

Aunque con muchos más LED el ejemplo no es más complicado que el ejemplo que ya mostré de [encender y apagar un diodo LED][blogbitix-214]. Usaré diodos de diferentes colores y dispuestos de forma aleatoria para darle un aspecto desordenado, para darle un aspecto más caótico los LEDs se encenderán y apagarán de forma aleatoria. Usaré el lenguaje de programación Java y la librería de alto nivel [diozero][diozero] para controlar el encendido y apagado de los diodos.

Esta es la foto del cableado usando múltiples cables macho-macho para conectar los _pines_ con el polo positivo de los diodos pasando por la resistencia y también múltiples cables para conectar el polo negativo del diodo con tierra. Usando una placa _breadboard_ para realizar las conexiones sin soldadura y una placa de extensión wiringPi para conectar la Raspberry Pi con la placa _breadboard_ con un cable de 26 _pines_ en mi caso por el modelo que tengo de RPi este es el aspecto de cableado.

{{< image
    gallery="true"
    image1="image:arbol-navidad-01.jpg" optionsthumb1="300x200" title1="Cableado de las luces LED del árbol de navidad"
    image2="image:arbol-navidad-02.jpg" optionsthumb2="300x200" title2="Cableado de las luces LED del árbol de navidad" >}}
{{< image
    gallery="true"
    image1="image:arbol-navidad-03.jpg" optionsthumb1="300x200" title1="Cableado de las luces LED del árbol de navidad"
    image2="image:arbol-navidad-04.jpg" optionsthumb2="300x200" title2="Cableado de las luces LED del árbol de navidad" >}}
{{< image
    gallery="true"
    image1="image:arbol-navidad-05.jpg" optionsthumb1="300x200" title1="Cableado de las luces LED del árbol de navidad"
    caption="Cableado de las luces LED del árbol de navidad" >}}

Cada cierto tiempo los diodos cambian de estado, algunos se encenderán, otros se apagarán y otros seguirán en el estado que estaban. Para ello generaré un booleano aleatorio para cada uno de los diodos que determinará si debe estar encendido o apagado. Este es el programa Java junto con la parte relevante del archivo [Gradle][gradle] para compilar y construir el ejemplo y el comando que uso para ejecutarlo.

{{< code file="ChristmasTree.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="execute.sh" language="bash" options="" >}}

Esta aplicación para la Raspberry Pi queda bastante vistosa y no es muy complicado de realizar a pesar del del lío de cables que resulta. Este es un vídeo de su funcionamiento.


{{< youtube video="F2BChbcyr5g" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaRasberriPi" command="./gradlew executeChristmasTree" >}}

{{% /post %}}
