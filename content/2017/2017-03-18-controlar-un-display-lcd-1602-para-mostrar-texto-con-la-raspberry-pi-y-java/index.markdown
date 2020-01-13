---
pid: 215
type: "post"
title: "Controlar un display LCD 1602 para mostrar texto con la Raspberry Pi y Java"
url: "/2017/03/controlar-un-display-lcd-1602-para-mostrar-texto-con-la-raspberry-pi-y-java/"
aliases: ["/2017/03/controlar-un-display-1602-para-mostrar-texto-con-la-raspberry-pi-y-java/"]
date: 2017-03-18T10:00:00+01:00
updated: 2017-03-19T02:00:00+01:00
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

Uno de los motivos por los que compré el [kit de iniciación a la electrónica para la Raspberry Pi][blogbitix-212], además de cacharrear un poco, era en concreto controlar el _display_ LCD de 16 columnas y 2 filas. En el _kit_ el _display_ viene con un adaptador con el bus de comunicación I2C. El _display_ se puede usar sin este bus pero requiere utilizar muchos más _pines_ GPIO de datos de los limitados 17 que ofrece la Raspberry Pi 1 y los 26 de las Raspberry Pi B+, 2  y 3. Controlar el _display_ con I2C requiere únicamente 2 pines, por contra sin usar I2C requiere un número significativamente mayor 4 u 8 pines.

El _display_ 1602 con su adaptador para el bus I2C que viene con el _kit_ ya incorporado en la parte trasera es el siguiente.

{{< image
    gallery="true"
    image1="image:display-lcd-1602.jpg" optionsthumb1="300x200" title1="Display LCD 16 columnas y 2 filas"
    image2="image:adaptador-bus-i2c-1602.jpg" optionsthumb2="300x200" title2="Adaptador bus I2C para display 1602"
    caption="Display LCD 1602 y adaptador bus I2C" >}}

El esquema de conexionado para controlar el _display_ requiere usar los _pines_ de la Raspberry Pi _SDA_ y _SDL_ además de un _pin_ para proporcionar un voltaje de 5V y otro _pin_ para la tierra. El _pin_ _SDA_ es el número 2 según la numeración de _pines_ de la Raspberry Pi y el _SDL_ es el 5. El _pin_ _SDA_ es utilizado en el bus I2C para transmitir los datos y el _SDL_ para la señal de reloj o sincronización. Utilizando la placa de extensión wiringPi de 26 _pines_ los _pines_ _SDA_ y _SDL_ se encuentran identificados por su nombre y el de la placa de extensión de 40 _pines_ que viene con el _kit_ de iniciación también, deberemos identificar estos _pines_ y realizar las conexiones adecuadamente.

{{< image
    gallery="true"
    image1="image:breadboard-cableado.jpg" optionsthumb1="300x200" title1="Cableado en la breadboard"
    image2="image:esquema-cableado.png" optionsthumb2="300x200" title2="Esquema del cableado"
    caption="Cableado en la breadboard" >}}

Hay que emplear varios cables macho-macho y hembra-hembra para conectar a los _pines_ del adaptador I2C del _display_  a los _pines_ del voltaje de 5V, tierra, _SDA_ y _SDL_ de la placa de pruebas sin soldadura.

{{< image
    gallery="true"
    image1="image:cables-macho-macho-hembra-hembra.jpg" optionsthumb1="300x200" title1="Unión cables macho-macho y hembra-hembra"
    caption="Unión cables macho-hembra" >}}

El siguiente paso será activar el bus I2C en la Raspberry Pi que por defecto está desactivado. Esto requiere añadir unos parámetros en la configuración de arranque y cargar unos módulos del kernel que finalmente crearán un dispositivo tal que en _/dev/i2c-0_ o _/dev/i2c-0_. Si instalamos el paquete _i2c-tools_ podremos detectar el _display_ en el bus I2C, en la captura de pantalla en la dirección 27 que hay que usar al construir la instancia del controlador del _display_. Estos cambios en la configuración de inicio requieren reiniciar la Raspberry Pi. En un sistema con la distribución [Arch Linux ARM][archlinuxarm] los cambios son los siguientes.

{{< code file="configuration.txt" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:i2cdetect.png" optionsthumb1="300x200" title1="Detectción del display 1602 en el bus I2C"
    caption="Detectción del display 1602 en el bus I2C" >}}

Según la [especificación del _display_ 1602](https://www.sparkfun.com/datasheets/LCD/HD44780.pdf) este componente soporta varios comandos para controlarlo, algunos son para limpiar el texto, cambiar la dirección de escritura, añadir caracteres personalizados y emitir texto en la línea o posición del _display_ que queramos. No es simple el controlar el _display_ a bajo nivel ya que hay que trabajar en momentos con binario y usar bytes, por ello para el ejemplo usaré la librería [diozero][diozero] que ya trae una implementación de controlador con funciones de alto nivel _I2CLcd_ que en versiones más recientes de la librería ha sido renombrada a [HD44780Lcd](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html) mucho más cómoda que enviar _bytes_ a bajo nivel al bus I2C, el [código fuente de la clase HD44780Lcd](https://github.com/mattjlewis/diozero/blob/master/diozero-core/src/main/java/com/diozero/HD44780Lcd.java) está disponible y podemos verlo si hay curiosidad.

En mi caso con la Raspberry Pi 1 he tenido que utilizar la versión 0.9 de la librería diozero porque la 0.8 me generaba un _stacktrace_ de una excepción _java.lang.UnsupportedOperationException_. Obtener esta versión de la librería como aún era de desarrollo y no estaba publicada en [Maven Central][mavencentral] la he descargado de un [google drive que ha creado el autor](https://drive.google.com/drive/u/0/folders/0B2Kd_bs3CEYaZ3NiRkd4OXhYd3c) y usado en [Gradle][gradle] como una dependencia del sistema de ficheros. Como librería subyacente de diozero para controlar los _pines_ GPIO he usado [pigpio](http://abyz.co.uk/rpi/pigpio/).

{{< code file="java.lang.UnsupportedOperationException" language="plaintext" options="" >}}

En el ejemplo mostraré un texto en cada una de las lineas del _display_ y usaré una de las funciones del para mostrar caracteres personalizados con los que es posible crear _emojis_ o caracteres nuevos. El controlador de diozero ya contiene una buena colección de caracteres personalizados que definen el patrón de 5x8 puntos que siguen, los nombres de estos caracteres personalizados están en la clase interna _Characters_ de [HD44780Lcd](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html) aunque también podemos definir nuevos. El ejemplo es el siguiente donde se muestra el uso de los métodos [setText](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#setText-int-java.lang.String-) y [setCharacter](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#setCharacter-int-int-char-), también el constructor donde hay que indicar la dirección asignada al dispositivo en el bus I2C que siendo la 27 corresponde con el valor definido en una constante. Pero también hay otros métodos como [clear](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#clear--), [cursorOff](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#cursorOff--) y [cursorOn](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#cursorOn--) para apagar y encender el cursor, [displayOff](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#displayOff--)
[displayOn](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#displayOn--) para apgar y encender el _display_ y [createChar](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#createChar-int-byte:A-) para crear nuevos caracteres definidos como una _array_ de 8 posiciones donde cada _byte_ indica los pixeles encendidos de cada fila del caracter de 5x8 y con [setCharacter](http://static.javadoc.io/com.diozero/diozero-core/0.9/com/diozero/HD44780Lcd.html#setCharacter-int-int-char-) para emitir uno de los 8 posibles que se pueden usar al mismo tiempo. Además de estos también hay otros pocos métodos más relacionados con el cursor.

{{< code file="Lcd.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="executeSSH.sh" language="bash" options="" >}}
{{< code file="executeGradle.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:mensaje-lcd-1602.jpg" optionsthumb1="300x200" title1="Mensaje en LCD 1602"
    caption="Mensaje en LCD 1602" >}}

{{< youtube video="V6msjQNDPuU" >}}

Pudiendo mostrar mensajes en _display_ es posible mostrar cualquier información que un programa sea capaz de capturar como temperatura y humedad del correspondiente sensor en el mismo _kit_, estado de un pulsador, espacio disponible en el disco del sistema, y memoria libre, _uptime_ del sistema, fecha y hora, ... cualquier cosa que se nos ocurra.

El ejemplo parece simple, y el programa Java lo es, pero requiere conocer varias cosas que en internet está dispersas como activar el bus I2C o conocer la librería diozero para controlar el _display_ que simplifica enormemente el código y nos evita comunicarnos a más bajo nivel con el _display_, realizar las conexiones eléctricas también requiere algo de conocimiento. Averiguar todo esto me costó una buena cantidad de tiempo.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" command="./gradlew executeLcd" >}}

{{% /post %}}
