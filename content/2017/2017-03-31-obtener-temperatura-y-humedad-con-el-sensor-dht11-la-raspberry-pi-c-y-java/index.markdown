---
pid: 219
type: "post"
title: "Obtener la temperatura y humedad con el sensor DHT11, la Raspberry Pi, C y Java"
url: "/2017/03/obtener-la-temperatura-y-humedad-con-el-sensor-dht11-la-raspberry-pi-c-y-java/"
aliases: ["/2017/03/obtener-temperatura-y-humedad-con-el-sensor-dht11-la-raspberry-pi-c-y-java/"]
date: 2017-03-31T19:00:00+02:00
updated: 2017-04-02T10:15:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:raspberrypi.svg"
tags: ["gnu-linux", "java", "planeta-codigo", "programacion"]
series: ["electronica"]
summary: "El _kit_ de iniciación a la electrónica para la Raspberry Pi tiene un sensor para la temperatura y humedad, el modelo DHT11. Obtener la información requiere restricciones de tiempo, este es un caso de uso justificado para usar lenguaje C y JNI para integrarlo con Java. En el ejemplo el código C llama a un método de una clase Java con dos valores enteros o lanza una excepción en caso de que al realizar la lectura haya habido algún error en la transmisión de los bits."
---

{{% post %}}

{{< logotype image1="raspberrypi.svg" title1="Raspberry Pi" width1="200" image2="java.svg" >}}

Entre los varios sensores incluídos en el [kit de iniciación para la Raspberry Pi][blogbitix-212] está el sensor de temperatura y humedad con el modelo DHT11. El DHT11 es un sensor muy básico pero suficiente y válido si el objetivo es trastear un poco con hardware.

En la [especificación del sensor DHT11](http://www.micropik.com/PDF/dht11.pdf) está descrita su funcionamiento y forma de comunicación. Utiliza 3 cables, uno para la corriente de 3.3V, otro para tierra y finalmente uno de datos que se conecta a cualquier _pin_ <abbr title="General Purpose Input Output">GPIO</abbr> de la Raspberry Pi. Según la especificación el sensor proporciona sus datos en unos 4 ms cuando se le emite un pulso bajo durante unos pocos microsegundos y a continuación uno alto durante otros pocos microsegundos, momento a partir del cual el sensor emite 40 bits de información empezando por un pulso bajo de inicio y a continuación el propio bit con un pulso alto, según sea la duración del pulso alto el bit se considera un 0 si es menor de unos 27μs y un 1 si dura más de ese tiempo hasta unos 80μs momento en el que se emite el siguiente bit de información. Los primeros 8 bits corresponden a la parte entera de la humedad, los siguientes 8 bits a la parte decimal de la humedad, el tercer grupo de 8 bits a la parte entera de la temperatura y 8 bits más para la parte decimal. El último grupo de 8 bits hasta completar los 40 bits son de _checksum_ para detectar errores en la transmisión. El porcentaje de errores en la transmisión significativo en este sensor y quizá haya que realizar varias lecturas del sensor para obtener una correcta.

Dada las restricciones de tiempo que utiliza el sensor en el ejemplo usaré el lenguaje C para obtener los valores de temperatura y humedad y <abbr title="Java Native Interface">JNI</abbr> para acceder a ellos desde Java. Aún usando C se producen errores en la obtención de los valores ya que el método usado por el sensor y transmitir los datos basados en tiempo de microsegundos no es muy fiable. Usando Java la situación sería peor por las restricciones que impone la máquina virtual con sus paradas para la recolección de basura por ejemplo. Así que el ejemplo consistirá en una combinación de C y Java con JNI un poco más avanzado que el [Ejemplo de JNI, usar código en C desde Java][blogbitix-217].

{{< image
    gallery="true"
    image1="image:dht11-1.jpg" optionsthumb1="300x200" title1="Sensor DHT11"
    image2="image:dht11-2.jpg" optionsthumb2="300x200" title2="Sensor DHT11"
    caption="Sensor DHT11" >}}

Lo primero que deberemos hacer para acceder a la información del sensor desde Java es crear una clase que contenga un método nativo que realizará la lectura de la información en C. Con la utilidad _javah_ obtendremos el archivo de cabecera que implementará el programa en C. Finalmente, siguiendo la especificación se escribe el código C que realice la lectura que en este caso usará la librería [wiringPi][wiringpi] para la interacción con los _pines_ GPIO de la Raspberry Pi.

El código en C invocará el método _setTemperatureHumidity_ pasando como parámetros los datos de temperatura y humedad leídos del sensor, el método nativo _read_ es utilizado por el código Java que controla el sensor para realizar la lectura en el código C.

{{< code file="Dht11.java" language="java" options="" >}}
{{< code file="Dht11.h" language="C" options="" >}}
{{< code file="Dht11.c" language="C" options="" >}}

El código en C del sensor hay que compilarlo en la Raspberry Pi con el compilador [gcc][gcc] obteniendo una librería con código nativo que Java y JNI cargará y enlazará de forma dinámica en el programa Java. Ya que el código C usa la librería wiringPi ha de instalarse previamente junto con el compilador gcc. Obtenida la librería la copiamos mediante FTP o SSH de la Raspberry Pi a nuestro equipo de desarrollo. El código C realiza la lectura usando la librería wiringPi siguiendo la especificación de como se transmiten los datos por el sensor, realizada una lectura correcta usa varias de las funciones de la estructura [JNIEnv](http://xdprof.sourceforge.net/doxygen/structJNIEnv__.html) para obtener la referencia a un método de la clase DHT11 e invocarlo con los valores obtenidos del sensor o lanza una excepción si la lectura ha sido errónea.

{{< code file="install-packages.sh" language="bash" options="" >}}

El comando para compilar la librería de código nativo a partir del código en C y el archivo de cabecera generado con _javah_ es el siguiente.

{{< code file="compile.sh" language="bash" options="" >}}

Para facilitar la ejecución la librería la proporcionó ya compilada y ubicada en el directorio _src/main/resources_ de modo que será incluida en el archivo _jar_ generado por [Gradle][gradle] en el ejemplo y que la clase DHT11 extraerá al directorio temporal del sistema y cargará para su uso.

La clase Java del ejemplo que hace uso del sensor realiza una lectura cada 3 segundos e imprime en la terminal y en el _display_ 1602 el último valor obtenido correctamente de la temperatura y humedad.

{{< code file="TemperatureHumidity.java" language="java" options="" >}}

Este es el esquema de conexiones que he utilizado para el ejemplo y una foto del cableado real, he usado del _pin_ GPIO número 2 según la nomenclatura de wiringPi para el cable de datos del sensor DHT11 que se corresponde con pin número 13 según la nomenclatura del _header_ de la Raspberry Pi. Para ver el cableado del _display_ 1602 más detalladamente y la activación del bus de comunicación I2C que necesita consulta el artículo [Controlar un display LCD 1602 para mostrar texto con la Raspberry Pi y Java][blogbitix-215].

{{< image
    gallery="true"
    image1="image:cableado.jpg" optionsthumb1="300x200" title1="Cableado sensor DHT11 y display 1602"
    caption="Cableado sensor DHT11 y display 1602" >}}

Ejecutando el programa del ejemplo y usando el display 1602 (16 columnas y 2 filas) se muestra la temperatura y humedad obtenida del sensor.

{{< image
    gallery="true"
    image1="image:temperature-humidity.jpg" optionsthumb1="300x200" title1="Cableado ejemplo y funcionando"
    image2="image:display.jpg" optionsthumb2="300x200" title2="Cableado ejemplo y funcionando"
    caption="Cableado ejemplo y funcionando" >}}

En el kernel de Linux hay un módulo que proporciona también los valores del sensor, sin embargo, no he conseguido obtener la temperatura y humedad usándolo. Lo he probado con el kernel 4.4 de Arch Linux ARM y en la versión 4.9 veo que hay cambios en este módulo que quizá lo hagan funcionar. Para usar el módulo del kernel hay que añadir un poco de configuración para el inicio de la Raspberry Pi. En los archivos _/sys/devices/platform/dht11@0/iio:device0/in\_temp\_input_ y _/sys/devices/platform/dht11@0/iio:device0/in\_temp\_input_ estarán la temperatura y humedad respectivamente.

{{< code file="kernel-module-config.txt" language="plaintext" options="" >}}
{{< code file="cat.sh" language="bash" options="" >}}

Para ejecutar el ejemplo con ya todo instalado uso uno de los siguientes dos comandos.

{{< code file="execute.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" command="./gradlew executeTemperatureHumidity" >}}

{{< reference >}}
* [Java programming with JNI](https://www.ibm.com/developerworks/java/tutorials/j-jni/j-jni.html)
* [Accessing 1-wire Protocol Devices from Java](http://hirt.se/blog/?p=493)
* [How to Set Up the DHT11 Humidity Sensor on the Raspberry Pi](http://www.circuitbasics.com/how-to-set-up-the-dht11-humidity-sensor-on-the-raspberry-pi/)
* [Sensores de temperatura DHT11](http://www.prometec.net/sensores-dht11/)
* [dht11.c](https://github.com/Hexalyse/RPi-weather-log/blob/master/dht11.c)
* [Read DHT11/22 Temperature & Humidity Sensor from Raspberry Pi](http://www.uugear.com/portfolio/read-dht1122-temperature-humidity-sensor-from-raspberry-pi/)
* [Digital output temperature and humidity sensor DHT11 - DHT22](https://arduino-info.wikispaces.com/DHT11-Humidity-TempSensor)
* [A DHT11 Class for Arduino](http://playground.arduino.cc/Main/DHT11Lib)
* [torvalds/linux/blob/master/drivers/iio/humidity/dht11.c](https://github.com/torvalds/linux/blob/master/drivers/iio/humidity/dht11.c)
* [RaspberryPi DHT11 temperature and humidity sensor driver](http://www.tortosaforum.com/raspberrypi/dht11driver.htm)
{{< /reference >}}

{{% /post %}}
