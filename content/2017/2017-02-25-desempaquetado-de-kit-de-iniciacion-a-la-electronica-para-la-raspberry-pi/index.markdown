---
pid: 212
type: "post"
title: "Desempaquetado del kit de iniciación a la electrónica para la Raspberry Pi"
url: "/2017/02/desempaquetado-del-kit-de-iniciacion-a-la-electronica-para-la-raspberry-pi/"
date: 2017-02-25T11:00:00+01:00
updated: 2017-02-25T23:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:raspberrypi.svg"
tags: ["gnu-linux", "planeta-codigo", "programacion"]
series: ["electronica", "desempaquetado-tecnologia"]
---

{{% post %}}

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

Después de unos años se han lanzado versiones notablemente mejoradas, hasta la fecha la última es la [Raspberry Pi 4][amazon-raspberrypi] de esta placa que multiplica por 4 la cantidad de memoria RAM hasta 1 GiB y con una CPU de 4 núcleos a una frecuencia de 1.2 Ghz basados en los procesadores ARM Cortex-A53 de 64 bits, incluyendo WIFI N y Bluetooth 4.1, 4 conectores USB, lector microSD y 26 _pines_ GPIO. Aunque la finalidad original de este computador es el aprendizaje de programación y electrónica el uso principal que le he dado hasta ahora ha sido para hacer descargas P2P via torrent. Esta placa es muy popular debido a su bajo coste aunque hay que sumarle posteriormente el precio de una tarjeta microSD y el cargador para proporcionarle energía, su éxito no solo es debido a su coste ya que hay opciones aún más potentes en algunos aspectos a precio similar que no son tan populares, el valor diferenciador de la Raspberry Pi es el apoyo y soporte de la comunidad.

{{< image
    gallery="true"
    image1="image:raspberrypi1b.jpg" optionsthumb1="300x200" title1="Raspberry Pi 1 B"
    image2="image:raspberrypi3b.jpg" optionsthumb2="300x200" title2="Raspberry Pi 3 B"
    caption="Placas modelos Raspberry Pi 1 B y 3 B" >}}

{{< amazon
    linkids="f255c1cf8b7c2bf2208ecf942269269a,6bf3dcdc2d625453497098a500d2b8cf,51a1f2fee89ad8791b2e51bd197ea7d3,a6529005eab78be2bf5cd65027219ab0"
    asins="B07TC2BK1X,B014I8TVLI,B07W5H9LQJ,B07FCMBLV6" >}}

Hace unas semanas compré un [kit de electrónica básico para la Raspberry Pi](https://amzn.to/30Fpsle) pero que incluye una buena cantidad de sensores y elementos de electrónica y sirve para cualquier placa con _pines_ GPIO. Como el _kit_ es para la Raspberry Pi 3 y viene con un cable de extensión de 40 _pines_ (cantidad de _pines_ que tiene la Raspberry Pi 3) y yo tengo la 1 debí comprar también un [cable de extensión de 26 pines](https://amzn.to/2lSYiDF) (los que tiene la Raspberry Pi 1) para la matriz de puntos con la que hacer pruebas sin soldar los elementos. El precio del _kit_ no es muy caro, de unos 30€ y el barómetro no venía soldado con sus _pines_ por lo que si queremos usarlo deberemos hacer la soldadura primero con un [soldador de electrónica](https://amzn.to/3fk9AsE) y [estaño](https://amzn.to/30FRYmQ).

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

{{< image
    gallery="true"
    image1="image:caja.jpg" optionsthumb1="300x200" title1="Caja"
    image2="image:componentes-1.jpg" optionsthumb2="300x200" title2="Componentes"
    caption="Caja, componentes y sensores" >}}
{{< image
    gallery="true"
    image1="image:display-1.jpg" optionsthumb1="300x200" title1="Display 16x02"
    image2="image:display-2.jpg" optionsthumb2="300x200" title2="Display 16x02 con adaptador I2C"
    caption="Display 16x02 y adaptador I2C" >}}
{{< image
    gallery="true"
    image1="image:breadboard-1.jpg" optionsthumb1="300x200" title1="Breadboard"
    image2="image:breadboard-2.jpg" optionsthumb2="300x200" title2="Breadboard y adaptador"
    caption="Breadboard y adaptador" >}}
{{< image
    gallery="true"
    image1="image:adaptador-breadboard.jpg" optionsthumb1="300x200" title1="Breadboard"
    image2="image:diodos-resistencias.jpg" optionsthumb2="300x200" title2="Diodos, botones, resistencias y fotoresistores"
    caption="Adaptador breadboard, diodos, botones, resistencias y fotoresistores" >}}

{{< amazon
    linkids="415695f2e7f3ef590a8f4c93b8bda126,e45d6edd69dac157bd5ddf58be2cb301"
    asins="B06VTH7L28,B01KC2AQJK" >}}

La matriz de conexiones o _breadboard_ es una forma cómoda de hacer pruebas sin tener que hacer soldaduras, los puntos en vertical de la mitad superior e inferior están conectados entre si de modo que con los cables macho-macho podamos poner y quitar conexiones. La matriz está numerada horizontalmente con números y verticalmente con letras de forma que cada punto sea identificable individualmente. Las dos filas de puntos superiores suelen usarse para proporcionar un voltaje de 5V y la conexión de tierra, las dos filas de puntos inferiores para proporcionar un voltaje de 3.3V y tierra. La placa está dividida en dos mitades verticalmente de las letras A-D y E-F formando columnas verticales de puntos conectadas en grupos de 5.

Mi intención para este _kit_ es hacer unos pequeños ejemplos usando en cada uno de ellos uno o varios elementos y con el lenguaje de programación Java y la librería [Diozero][diozero]. Entre los ejemplos estará encender y apagar un LED, usar el _display_ de 16x2 caracteres, el sensor de temperatura y humedad, el sensor de infrarrojos, el motor, los pulsadores, el sensor de movimiento, los detectores de luz, el detector de golpes, etc...

En la página del fabricante o distribuidor mayorista [Osoyoo](http://osoyoo.com/) hay colgados varios ejemplos usando varios de estos elementos. También deberemos hacernos con las referencias de los _pines_ para saber las conexiones que debemos hacer con los cables junto con la tabla de referencia de colores de las resistencias. Para usar las tablas de referencia debemos saber que hay varias formas de numerar los pines. Está la del _header_ del 1 al 26 o del 1 al 40 secuencialmente según la disposición en el _header_, la que utiliza la librería [wiringPi][wiringpi] y [Pi4J][pi4j] para numerar los _pines_ GPIO y la de Broadcom que utiliza la librería Diozero. Estas tablas de referencia de nomenclatura son importantes porque cada una numera los _pines_ de forma diferente, por ejemplo, según la numeración de wiringPi el pin número 3 corresponde al GPIO 8 cuando según la nomenclatura de Broadcom el mismo pin corresponde al GPIO 0 en el modelo RPi 1 modelo B rev1 y al GPIO 2 en la RPi 3.

{{< image
    gallery="true"
    image1="image:raspberrypi1b-header-rev1.png" optionsthumb1="300x200" title1="Header de _pines_ Raspberry Pi 1 B"
    image2="image:raspberrypi3b-header.png" optionsthumb2="300x200" title2="Header de _pines_ Raspberry Pi 3 B"
    caption="Header de _pines_ Raspberry Pi 1 B y Raspberry Pi 3 B, nomenclatura wiringPi" >}}
{{< image
    gallery="true"
    image1="image:raspberrypi1b-header-rev1-broadcom.png" optionsthumb1="300x200" title1="Header de _pines_ Raspberry Pi 1 B"
    image2="image:raspberrypi3b-header-broadcom.png" optionsthumb2="300x200" title2="Header de _pines_ Raspberry Pi 3 B"
    caption="Headers de _pines_ Raspberry Pi 1 B y Raspberry Pi 3 B, nomenclatura Broadcom" >}}
{{< image
    gallery="true"
    image1="image:codigo-colores-resistencias.jpg" optionsthumb1="300x200" title1="Código de colores de las resistencias"
    caption="Código de colores de las resistencias" >}}

Un ejemplo básico sin necesidad de programar nada es encender un diodo LED. Los elementos a usar son el diodo LED, una resistencia, los cables macho-macho, el cable de extensión y la matriz de puntos. Para ello conectamos el cable de extensión a la matriz de puntos donde con los cables macho-macho haremos las conexiones en los agujeros de la matriz de puntos. Usaremos la conexión de voltaje de 3.3V y una resistencia de 200 ohmios para que el LED no reciba demasiada intensidad. Los diodos LED tienen dos patitas, una más corta que la otra que indican la polaridad, la corta es el polo negativo y se conecta a tierra, la larga es el polo positivo que se conecta a uno de los extremos de la resistencia y el otro extremo de esta la voltaje de 3.3V.

{{< image
    gallery="true"
    image1="image:hola-mundo-led.jpg" optionsthumb1="300x200" title1="Ejemplo conexión LEDs"
    image2="image:raspberrypi.jpg" optionsthumb2="300x200" title2="Raspberry Pi"
    caption="Ejemplo conexión LEDs y Raspberry Pi" >}}

Con el programa [Fritzing](http://fritzing.org/home/) podremos prototipar y documentar el esquema de  conexiones que realicemos de los proyectos. Posee numerosos modelos, elementos electrónicos y dispositivos de entrada y salida aunque no he encontrado el correspondiente la placa de extensión de wiringPi.

{{< image
    gallery="true"
    image1="image:fritzing.png" optionsthumb1="300x200" title1="Fritzing"
    caption="Fritzing" >}}

En el siguiente artículo explicaré como crear un programa Java para encender y apagar varias veces un diodo LED con la librería Doizero. Además explicaré como con [Gradle][gradle], [SSH][ssh] y [Ansible][ansible] hacerlo de forma cómoda desde nuestra máquina de desarrollo y no directamente desde la más lenta Raspberry Pi.

_Software. Hardware. Complete._

{{% /post %}}
