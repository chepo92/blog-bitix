---
pid: 212
title: "Desempaquetado del kit de iniciación a la electrónica para la Raspberry Pi"
url: "/2017/02/desempaquetado-del-kit-de-iniciacion-a-la-electronica-para-la-raspberry-pi/"
date: 2017-02-25T11:00:00+01:00
updated: 2017-02-25T23:30:00+01:00
language: "es"
sharing: true
comments: true
promoted: false
tags: ["blog-stack", "gnu-linux", "planeta-codigo", "planeta-linux", "programacion"]
series: ["electronica", "desempaquetado"]
---

{{% post %}}
{{< links >}}
{{< postslinks >}}

{{< logotype image1="raspberrypi.svg" title1="Raspberry Pi" width1="200" >}}

En el año 2012 compré una de las primeras Raspberry Pi que estuvieron disponibles a la venta, una placa modelo B de 256 MiB. La Raspberry Pi es un pequeño computador en una placa del tamaño de una tarjeta de crédito a un precio que aún se sigue manteniendo en las nuevas versiones de unos 40€ a los que hay que sumar algunos complementos necesarios como una tarjeta SD o microSD y un cargador con conector miniUSB. Las versiones iniciales que es la que tengo se componían de:

* CPU 700 Mhz, un núcleo ARM11 de 32 bits
* Memoria de 256 MiB
* Ethernet 100 MB
* Lector tarjeta SD
* 2 x USB 2.0
* HDMI
* 26 pines, 17 de propósito general o GPIO
* Salida de audio
* Salida de vídeo

Después de unos años se han lanzado versiones notablemente mejoradas, hasta la fecha la última es la [Raspberry Pi 3](http://amzn.to/2mmu6Os) de esta placa que multiplica por 4 la cantidad de memoria RAM hasta 1 GiB y con una CPU de 4 núcleos a una frecuencia de 1.2 Ghz basados en los procesadores ARM Cortex-A53 de 64 bits, incluyendo WIFI N y Bluetooth 4.1, 4 conectores USB, lector microSD y 26 pines GPIO. Aunque la finalidad original de este computador es el aprendizaje de programación y electrónica el uso principal que le he dado hasta ahora ha sido para hacer descargas P2P via torrent. Esta placa es muy popular debido a su bajo coste aunque hay que sumarle posteriormente el precio de una tarjeta microSD y el cargador para proporcionarle energía, su éxito no solo es debido a su coste ya que hay opciones aún más potentes en algunos aspectos a precio similar que no son tan populares, el valor diferenciador de la Raspberry Pi es el apoyo y soporte de la comunidad.

<div class="media" style="text-align: center;">
    {{< figure year="2017" pid="212"
        image1="raspberrypi1b.jpg" thumb1="raspberrypi1b-thumb.jpg" title1="Raspberry Pi 1 B"
        image2="raspberrypi3b.jpg" thumb2="raspberrypi3b-thumb.jpg" title2="Raspberry Pi 3 B"
        caption="Placas modelos Raspberry Pi 1 B y 3 B" >}}
</div>

<div class="media-amazon" style="text-align: center;">
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01CD5VC92&linkId=8984621587929046662fba2b79079f5e"></iframe>
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01DDFFOYK&linkId=079335c8a813f0df668ada2e897b7562"></iframe>
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00J29BR3Y&linkId=4c06245cfc2383a7972edcbe3e42333a"></iframe>
</div>

Hace unas semanas compré un [kit de electrónica básico para la Raspberry Pi](http://amzn.to/2mgnpko) pero que incluye una buena cantidad de sensores y elementos de electrónica y sirve para cualquier placa con pines GPIO. Como el _kit_ es para la Raspberry Pi 3 y viene con un cable de extensión de 40 pines (cantidad de pines que tiene la Raspberry Pi 3) y yo tengo la 1 debí comprar también un [cable de extensión de 26 pines](http://amzn.to/2lSYiDF) (los que tiene la Raspberry Pi 1) para la matriz de puntos con la que hacer pruebas sin soldar los elementos. El precio del _kit_ no es muy caro, de unos 30€ y el barómetro no venía soldado con sus pines por lo que si queremos usarlo deberemos hacer la soldadura primero con un [soldador de electrónica](http://amzn.to/2mtXv8L) y [estaño](http://amzn.to/2lSTYUU).

El contenido del _kit_ es el siguiente que viene en una estupenda caja de plástico para guardar todos los componentes de forma ordenada:

* 1 x GPIO to breadboard 40-pin breakout interface
* 1 x solderless prototype breadboard
* 40 x pin jumper wires (male to male 15cm)
* 2 x 8 pin Jumper Wires (female to female 20cm)
* 24 x LED (6 x Bright White, 6 x Red, 6 x Yellow, 6 x Green)
* 65 x resistors (200ohm x 20pcs, 1Kohm x 20pcs, 10Kohm x 20pcs, 1Mohm x 5pcs)
* 3 x photoresistor (light sensor)
* 5 x push buttons
* 3 x potentiometer (10kilohm adjustable resistor)
* 1 x A/D converter
* 1 x DHT11 Temperature/Humidity sensor
* 1 x motion sensor
* 1 x mercury tilt switch sensor
* 1 x I2C 1602 alphanumeric LCD
*	1 x servo motor
* 1 x piezo Buzzer
* 1 x BMP180 Pressure/Temperature Sensor
* 1 x relay
* 1 x Infrared Remote Controller and Receiver(VS1838B)
* 1 x Raspberry Pi/Arduino 8-Channel TTL Logic Level Converter

<div class="media" style="text-align: center;">
    {{< figure year="2017" pid="212"
        image1="caja.jpg" thumb1="caja-thumb.jpg" title1="Caja"
        image2="componentes-1.jpg" thumb2="componentes-1-thumb.jpg" title2="Componentes"
        caption="Caja, componentes y sensores" >}}
    {{< figure year="2017" pid="212"
        image1="display-1.jpg" thumb1="display-1-thumb.jpg" title1="Display 16x02"
        image2="display-2.jpg" thumb2="display-2-thumb.jpg" title2="Display 16x02 con adaptador I2C"
        caption="Display 16x02 y adaptador I2C" >}}
    {{< figure year="2017" pid="212"
        image1="breadboard-1.jpg" thumb1="breadboard-1-thumb.jpg" title1="Breadboard"
        image2="breadboard-2.jpg" thumb2="breadboard-2-thumb.jpg" title2="Breadboard y adaptador"
        caption="Breadboard y adaptador" >}}
    {{< figure year="2017" pid="212"
        image1="adaptador-breadboard.jpg" thumb1="adaptador-breadboard-thumb.jpg" title1="Breadboard"
        image2="diodos-resistencias.jpg" thumb2="diodos-resistencias-thumb.jpg" title2="Diodos, botones, resistencias y fotoresistores"
        caption="Adaptador breadboard, diodos, botones, resistencias y fotoresistores" >}}
</div>

<div class="media-amazon" style="text-align: center;">
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01MDUP97N&linkId=a16adfaf3d471a1e94dc0590c0d615be"></iframe>
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00W9F5LR6&linkId=5668053b0c5cb1aa9ff20db0e39790e8"></iframe>
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01KC2AQJK&linkId=e45d6edd69dac157bd5ddf58be2cb301"></iframe>
  <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B008DEYEAW&linkId=1f3f2cae44a45a28da37ac44749ed329"></iframe>
</div>

La matriz de conexiones o _breadboard_ es una forma cómoda de hacer pruebas sin tener que hacer soldaduras, los puntos en vertical de la mitad superior e inferior están conectados entre si de modo que con los cables macho-macho podamos poner y quitar conexiones. La matriz está numerada horizontalmente con números y verticalmente con letras de forma que cada punto sea identificable individualmente. Las dos filas de puntos superiores suelen usarse para proporcionar un voltaje de 5V y la conexión de tierra, las dos filas de puntos inferiores para proporcionar un voltaje de 3.3V y tierra. La placa está dividida en dos mitades verticalmente de las letras A-D y E-F formando columnas verticales de puntos conectadas en grupos de 5.

Mi intención para este _kit_ es hacer unos pequeños ejemplos usando en cada uno de ellos uno o varios elementos y con el lenguaje de programación Java y la librería [Diozero][diozero]. Entre los ejemplos estará encender y apagar un LED, usar el _display_ de 16x2 caracteres, el sensor de temperatura y humedad, el sensor de infrarrojos, el motor, los pulsadores, el sensor de movimiento, los detectores de luz, el detector de golpes, etc...

En la página del fabricante o distribuidor mayorista [Osoyoo](http://osoyoo.com/) hay colgados varios ejemplos usando varios de estos elementos. También deberemos hacernos con las referencias de los pines para saber las conexiones que debemos hacer con los cables junto con la tabla de referencia de colores de las resistencias. Para usar las tablas de referencia debemos saber que hay varias formas de numerar los pines. Está la del _header_ del 1 al 26 o del 1 al 40 secuencialmente según la disposición en el _header_, la que utiliza la librería [wiringPi][wiringpi] y [Pi4J][pi4j] para numerar los pines GPIO y la de Broadcom que utiliza la librería Diozero. Estas tablas de referencia de nomenclatura son importantes porque cada una numera los pines de forma diferente, por ejemplo, según la numeración de wiringPi el pin número 3 corresponde al GPIO 8 cuando según la nomenclatura de Broadcom el mismo pin corresponde al GPIO 0 en el modelo RPi 1 modelo B rev1 y al GPIO 2 en la RPi 3.

<div class="media" style="text-align: center;">
    {{< figure year="2017" pid="212"
        image1="raspberrypi1b-header-rev1.png" thumb1="raspberrypi1b-header-rev1-thumb.png" title1="Header de pines Raspberry Pi 1 B"
        image2="raspberrypi3b-header.png" thumb2="raspberrypi3b-header-thumb.png" title2="Header de pines Raspberry Pi 3 B"
        caption="Header de pines Raspberry Pi 1 B y Raspberry Pi 3 B, nomenclatura wiringPi" >}}
    {{< figure year="2017" pid="212"
        image1="raspberrypi1b-header-rev1-broadcom.png" thumb1="raspberrypi1b-header-rev1-broadcom-thumb.png" title1="Header de pines Raspberry Pi 1 B"
        image2="raspberrypi3b-header-broadcom.png" thumb2="raspberrypi3b-header-broadcom-thumb.png" title2="Header de pines Raspberry Pi 3 B"
        caption="Headers de pines Raspberry Pi 1 B y Raspberry Pi 3 B, nomenclatura Broadcom" >}}
    {{< figure year="2017" pid="212"
        image1="codigo-colores-resistencias.jpg" thumb1="codigo-colores-resistencias-thumb.jpg" title1="Código de colores de las resistencias"
        caption="Código de colores de las resistencias" >}}
</div>

Un ejemplo básico sin necesidad de programar nada es encender un diodo LED. Los elementos a usar son el diodo LED, una resistencia, los cables macho-macho, el cable de extensión y la matriz de puntos. Para ello conectamos el cable de extensión a la matriz de puntos donde con los cables macho-macho haremos las conexiones en los agujeros de la matriz de puntos. Usaremos la conexión de voltaje de 3.3V y una resistencia de 200 ohmios para que el LED no reciba demasiada intensidad. Los diodos LED tienen dos patitas, una más corta que la otra que indican la polaridad, la corta es el polo negativo y se conecta a tierra, la larga es el polo positivo que se conecta a uno de los extremos de la resistencia y el otro extremo de esta la voltaje de 3.3V.

<div class="media" style="text-align: center;">
    {{< figure year="2017" pid="212"
        image1="hola-mundo-led.jpg" thumb1="hola-mundo-led-thumb.jpg" title1="Ejemplo conexión LEDs"
        image2="raspberrypi.jpg" thumb2="raspberrypi-thumb.jpg" title2="Raspberry Pi"
        caption="Ejemplo conexión LEDs y Raspberry Pi" >}}
</div>

Con el programa [Fritzing](http://fritzing.org/home/) podremos prototipar y documentar el esquema de  conexiones que realicemos de los proyectos. Posee numerosos modelos, elementos electrónicos y dispositivos de entrada y salida aunque no he encontrado el correspondiente la placa de extensión de wiringPi.

<div class="media" style="text-align: center;">
    {{< figure year="2017" pid="212"
        image1="fritzing.png" thumb1="fritzing-thumb.png" title1="Fritzing"
        caption="Fritzing" >}}
</div>

En el siguiente artículo explicaré como crear un programa Java para encender y apagar varias veces un diodo LED con la librería Doizero. Además explicaré como con [Gradle][gradle], [SSH][ssh] y [Ansible][ansible] hacerlo de forma cómoda desde nuestra máquina de desarrollo y no directamente desde la más lenta Raspberry Pi.

_Software. Hardware. Complete._

{{% /post %}}
