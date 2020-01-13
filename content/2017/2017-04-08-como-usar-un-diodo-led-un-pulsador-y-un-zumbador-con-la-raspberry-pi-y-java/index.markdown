---
pid: 221
type: "post"
title: "Cómo usar un diodo LED, un pulsador y un zumbador con la Raspberry Pi y Java"
url: "/2017/04/como-usar-un-diodo-led-un-pulsador-y-un-zumbador-con-la-raspberry-pi-y-java/"
date: 2017-04-09T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:raspberrypi.svg"
tags: ["gnu-linux", "java", "planeta-codigo", "programacion"]
series: ["electronica"]
summary: "El _kit_ de electrónica para la Raspberry Pi incluye varios dispositivos controlables con lo _pines_ GPIO. En el caso de este ejemplo usaré un diodo LED, un zumbador y un pulsador para crear un ejemplo en el que el diodo LED se enciendan y el zumbador emita un sonido cuando el pulsador se active."
---

{{% post %}}

{{< logotype image1="raspberrypi.svg" title1="Raspberry Pi" width1="200" image2="java.svg" >}}

En artículos anteriores ya he comentado [como hacer parpadear un diodo LED][blogbitix-214], [como usar un display LCD de 16 columnas y 2 filas][blogbitix-215] y [como obtener la temperatura y humedad de un sensor DHT11][blogbitix-219], todo estos ejemplo usando varios elementos de [kit de iniciación a la electrónica para la Raspberry Pi 3][blogbitix-212]. En este artículo en el que mostraré cómo usar un LED, un pulsador y un zumbador es mucho más sencillo que los casos del _display_ LCD de 16 filas y 2 columnas y del sensor DHT11. Vistos los ejemplos de artículos anteriores lo más difícil de este es hacer el conexionado con los cables. Para controlar los _pines_ usaré la librería [diozero][diozero] que proporciona clases de alto nivel para cada uno de estos elementos para que desde código Java sea bastante sencillo controlarlos.

El ejemplo consistirá en que cuando se presione el pulsador se encienda el diodo LED y el zumbador se active emitiendo un zumbido audible. Cada uno de estos elementos requiere usar un _pin_ <abbr title="General Purpose Input Output">GPIO</abbr> de los 17 que hay disponibles en la Raspberry Pi 1 que es el modelo que tengo yo o de los 26 _pines_ que poseen versiones posteriores de la Raspberry Pi como la B+, 2 y 3.

Este sería el esquema de conexionado de los elementos. El diodo LED tiene una polaridad de modo que la patita larga que es la parte positiva se conectará al _pin_ GPIO 1 según la nomenclatura de wiringPi o el 18 según la de Broadcom con una resistencia de 200 ohmios entre el _pin_ GIPO y la patita de diodo para que la intensidad que atraviesa el diodo sea menor y no se desgaste. El zumbador también tiene una polaridad que en el caso del _kit_ que he usado viene serigrafiado y con una etiqueta, la parte positiva se conectará a otro _pin_ GPIO y usaré el _pin_ GPIO 2. Para que el pulsador haga contacto bien en la placa de conexiones para hacer pruebas sin soldadura hay que presionar sin forzar pero hasta que quede bien encadado y sin fijo, usaré el _pin_ GPIO 3.

Para el pulsador usaré el método _PULL UP_ (el otro es _PULL DOWN_) donde conectaré una patita del pulsador a tierra y la adyacente al _pin_ GPIO, en [algunas páginas](https://grantwinney.com/using-pullup-and-pulldown-resistors-on-the-raspberry-pi/) se explica haciendo uso de resistencias, sin embargo, el uso de resistencias en la Raspberry Pi no es necesario ya que los _pines_ ya [las tienen incorporadas internamente](https://projects.drogon.net/raspberry-pi/wiringpi/special-pin-functions/).

{{< image
    gallery="true"
    image1="image:cableado.jpg" optionsthumb1="300x200" title1="cableado en la breadboard"
    image2="image:esquema-cableado.png" optionsthumb2="300x200" title2="Esquema del cableado"
    caption="Esquema del cableado" >}}

La librería diozeo para identificar los _pines_ usa la nomenclatura de Broadcom, otras son las nomenclaturas del _header_ o de wiringPi. Hay que tener en cuenta la nomenclatura que se use ya que el número del _pin_ variará en cada una de ellas, también hay que tener en cuenta la versión de la Raspberry Pi ya que hay pequeñas variaciones según la versión. Por ejemplo, según la tabla de referencia siguiente, para la Raspberry Pi 1 y según la nomenclatura de Brodacom el _pin_ GPIO 18 corresponde al número 12 de _header_, el GPIO 21 al número 13 y el GPIO 22 al número 15. Según la nomenclatura de wiringPi el GPIO 1 corresponde al número 1, el GPIO 2 al número 2 y el GPIO 3 al número 3.

{{< image
    gallery="true"
    image1="image:raspberrypi1b-header-rev1.png" optionsthumb1="300x200" title1="Header de pines Raspberry Pi 1 B"
    image2="image:raspberrypi3b-header.png" optionsthumb2="300x200" title2="Header de pines Raspberry Pi 3 B"
    caption="Header de _pines_ Raspberry Pi 1 B y Raspberry Pi 3 B, nomenclatura wiringPi" >}}
{{< image
    gallery="true"
    image1="image:raspberrypi1b-header-rev1-broadcom.png" optionsthumb1="300x200" title1="Header de pines Raspberry Pi 1 B"
    image2="image:raspberrypi3b-header-broadcom.png" optionsthumb2="300x200" title2="Header de pines Raspberry Pi 3 B"
    caption="Headers de _pines_ Raspberry Pi 1 B y Raspberry Pi 3 B, nomenclatura Broadcom" >}}

Usando la librería diozero el código Java para realizar el ejemplo no necesita excesiva explicación. Es posible hacer uso de las [funciones lambdas que incorporó el lenguaje Java en la versión de Java 8][blogbitix-17] y con la sentencia _try-with-resources_ del lenguaje los elementos se finalizará correctamente en caso de producirse alguna excepción, por ejemplo apagando el diodo en caso de que estuviese encendido o apagando el zumbador en su caso.

{{< code file="LedButtonBuzzer.java" language="java" options="" >}}

Este es un pequeño vídeo en el que muestro su funcionamiento.


{{< youtube video="jaqMi53pjf0" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" command="./gradlew executeLedButtonBuzzer" >}}

{{% /post %}}
