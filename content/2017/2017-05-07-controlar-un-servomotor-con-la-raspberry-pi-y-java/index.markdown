---
pid: 230
type: "post"
title: "Controlar un servomotor con la Raspberry Pi y Java"
url: "/2017/05/controlar-un-servomotor-con-la-raspberry-pi-y-java/"
date: 2017-05-07T11:00:00+02:00
updated: 2017-05-13T11:40:00+02:00
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

Otro de los elementos que incluye el [kit de iniciación a la Raspberry Pi][blogbitix-212] es un [servomotor](https://es.wikipedia.org/wiki/Servomotor), en concreto uno del modelo SG90. En la [especificación del servomotor SG90](http://akizukidenshi.com/download/ds/towerpro/SG90_a.pdf) está detallado cual es el código de colores de los cables. Rojo para la corriente de 5V, marrón para tierra y naranja para el _pin_ <abbr title="Pulse Width Modulated">PWM</abbr> con el que se controlará el servo motor, el diodo led es simplemente para saber que cuando se enciende el programa Java se ha iniciado. La Raspberry Pi tiene algunos _pines_ con soporte hardware para realizar PWM.

Un servomotor es un elemento distinto de un motor, un motor usa dos cables uno para mover el motor hacia adelante y otro cable para mover el motor hacia atrás. Los servomotores además de utilizar un único cable para controlarlo su funcionalidad es distinta usándose para posicionar el motor en un determinado ángulo que en el caso del SG90 tiene un ángulo de funcionamiento de 180º. Además el servomotor es más complejo, como se explica en el siguiente artículo de título [¿Cual es la diferencia entre un motor DC y servo motor?](http://handyboard.com/hb/faq/hardware-faqs/dc-vs-servo/) el servomotor se compone de varios elementos empaquetados como una pieza. Se compone de un motor DC normal, una unidad de reducción, un sensor de posicionamiento y un circuito de control.

{{< image
    gallery="true"
    image1="image:servomotor.jpg" optionsthumb1="300x200" title1="Servomotor"
    image2="image:cableado.jpg" optionsthumb2="300x200" title2="Cableado en la breadboard"
    caption="Servomotor y cableado" >}}

La función del servomotor es recibir la señal de control y aplicar corriente al motor hasta que que esté en la posición indicada por la señal. Un servomotor no rota libremente sino que como he comentado en el caso del SG90 tiene un ángulo de funcionamiento de entre 0º y 180º. La señal de control es un pulso de anchura modulada o PWM.

Usando la librería [Diozero][diozero] es sencillo controlar un servomotor a través de la clase [Servo](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/sandpit/Servo.html). El constructor recibe tres datos el _pin_ de la Raspberry Pi que controlará el servomotor, según la nomenclatura Broadcom que usa la librería Diozero, la frecuencia del pulso PWD que sirve para controlar la velocidad de rotación y finalmente la posición inicial a establecer. Con el método [pulseWidthMs](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/sandpit/Servo.html#getPulseWidthMs--) y un rango de un valor _float_ entre 0.6 y 2.4 controlaremos la posición o ángulo del servomotor.

El siguiente programa Java cambia en un bucle la posición del servo desde la posición mínima a la máxima. En él he utilizado el _pin_ 18 que en la Raspberry Pi 1 soporta PWD, en las versiones 2 y 3 podríamos haber usado los _pines_ 18 o 19.

{{< code file="Servomotor.java" language="java" options="" >}}


{{< youtube video="g8RsvZ26Cqg" >}}

Aunque he conseguido hacer funcionar el servomotor con este programa no ha sido exento de problemas. Y es que cuando el programa finaliza la Raspberry Pi se me bloquea o se pierde la conectividad de red. No se si por algún _bug_ en la librería Diozero o alguna incompatibilidad con la Raspberry Pi 1 B, quizá en otro modelo de la Raspberry Pi no dé los problemas que a mi me da.

En otros artículos de la serie puedes consultar cómo usar otros [elementos de kit con Java y la Raspberry Pi][blogbitix-212].

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" command="./gradlew executeServomotor" >}}

{{< reference >}}
* [Especificación SG90 servomotor](http://akizukidenshi.com/download/ds/towerpro/SG90_a.pdf)
* [Servomotor](https://es.wikipedia.org/wiki/Servomotor)
{{< /reference >}}

{{% /post %}}
