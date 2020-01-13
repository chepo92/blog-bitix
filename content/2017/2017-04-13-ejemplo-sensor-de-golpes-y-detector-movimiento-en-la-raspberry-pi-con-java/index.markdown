---
pid: 224
type: "post"
title: "Ejemplo sensor de golpes y detector de movimiento en la Raspberry Pi con Java"
url: "/2017/04/ejemplo-sensor-de-golpes-y-detector-de-movimiento-en-la-raspberry-pi-con-java/"
aliases: ["/2017/04/ejemplo-sensor-de-golpes-y-detector-movimiento-en-la-raspberry-pi-con-java/"]
date: 2017-04-13T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:raspberrypi.svg"
tags: ["gnu-linux", "java", "planeta-codigo", "programacion"]
series: ["electronica"]
---

{{% post %}}

{{< logotype image1="raspberrypi.svg" title1="Raspberry Pi" width1="200" image2="java.svg" >}}

Otro par de sensores que incluye el [kit de introducción a la electrónica para la Raspberry Pi][blogbitix-212] son un sensor de golpes o _tilt_ y un detector de movimiento. El funcionamiento de ambos es muy similar, utilizando un _pin_ <abbr title="General Purpose Input Output">GPIO</abbr> como entrada se recibe si el sensor de golpes está activo o si el detector de movimiento ha detectado movimiento. El sensor de golpes es una bolita de mercurio encerrada en una ampolla de cristal. Como el mercurio a temperatura ambiente su estado es líquido puede moverse y como es un metal puede conducir la electricidad cuando está en una determinada posición entre dos filamentos.

El sensor de golpes necesita de tres cables uno para la corriente de 3.3V, otro para tierra y finalmente otro que se conecta como entrada a un _pin_ GPIO. Usando varios cables hembra-hembra y macho-macho hacemos las conexiones entre el sensor y la placa de pruebas sin soldadura o _breadboard_.

{{< image
    gallery="true"
    image1="image:sensores-1.jpg" optionsthumb1="300x200" title1="Sensor de golpes y detector de movimiento"
    image2="image:sensores-2.jpg" optionsthumb2="300x200" title2="Sensor de golpes y detector de movimiento"
    caption="Sensor de golpes y detector de movimiento" >}}

Usando la librería [diozero][diozero] para controlar los _pines_ GPIO desde un programa implementado con Java detectamos si el sensor está activo o no según la posición de la bolita de mercurio. El ejemplo consiste en [encender un diodo LED][blogbitix-214] que ya mostré en un artículo anterior de esta [serie sobre electrónica][blogbitix-serie-electronica] cuando el sensor _tilt_ esté activo. Usaré el _pin_ 18 para el diodo LED y el _pin_ 21 para el sensor según la nomenclatura de Broadcom. Los _pines_ serían el 12 según la nomenclatura del _header_ y 1 según la nomenclatura de wiringPi para el diodo LED y 13 y 2 para el sensor _tilt_.

{{< image
    gallery="true"
    image1="image:cableado-tilt.jpg" optionsthumb1="300x200" title1="Cableado sensor de golpes"
    caption="Cableado sensor de golpes" >}}

{{< code file="Tilt.java" language="java" options="" >}}

En el siguiente vídeo se aprecia como cuando al cambiar de posición del sensor de movimiento se mueve la bolita de mercurio y el diodo LED de ejemplo se enciende y apaga.


{{< youtube video="7Rkou-pJWFY" >}}

El detector de movimiento en teoría es similar en funcionamiento al _tilt_ y la librería diozero proporciona la clase [MotionSensor](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/sandpit/MotionSensor.html) para hacer más sencillo su uso. Digo en teoría porque no he conseguido hacerlo funcionar y he revisado varias veces las conexiones mostradas en otros ejemplos incluido el [ejemplo de osoyoo](http://osoyoo.com/2016/07/14/motionsensor-pi/), no se si es porque me falta algo más que debo tener en cuenta y que no conozco o el sensor no funciona viniendome estropeado. Cuando el sensor detecta movimiento cambia el voltaje de su _pin_ GPIO de datos. Los otros dos _pines_ que utiliza son uno para el voltaje de 5V y el de tierra.

El programa Java para el sensor de movimiento es similar al sensor _tilt_ e igualmente encendería o apagaría un diodo LED cuando detecta movimiento.

{{< image
    gallery="true"
    image1="image:cableado-motion.jpg" optionsthumb1="300x200" title1="Cableado sensor de movimiento"
    caption="Cableado sensor de movimiento" >}}

{{< code file="Motion.java" language="java" options="" >}}

Ambos ejemplos pueden usarse con los siguientes comandos cambiando la dirección IP de la Raspberry Pi y el directorio de la misma a donde se suben los ejemplos.

{{< code file="execute.sh" language="bash" options="" >}}

El siguiente artículo de la sería será sobre cómo usar un _servo motor_ que es diferente de un motor que gira constantemente.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" >}}

{{< reference >}}
* [Raspberry Pi Motion Sensor using a PIR Sensor](https://pimylifeup.com/raspberry-pi-motion-sensor/)
* [PIR motion detector – a sensor for Arduino and Raspberry Pi (1st part)](http://www.meccanismocomplesso.org/en/pir-motion-detector/)
{{< /reference >}}

{{% /post %}}
