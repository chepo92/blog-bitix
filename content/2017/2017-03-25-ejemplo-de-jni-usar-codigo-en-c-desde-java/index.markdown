---
pid: 217
type: "post"
title: "Ejemplo de JNI, usar código en C desde Java"
url: "/2017/03/ejemplo-de-jni-usar-codigo-en-c-desde-java/"
date: 2017-03-25T10:00:00+01:00
updated: 2017-03-25T10:05:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["gnu-linux", "java", "planeta-codigo", "programacion"]
series: ["electronica"]
summary: "Para tareas muy específicas que requieran alto rendimiento, baja latencia, tiempo real o haya restricciones de tiempo el lenguaje Java y la JVM pueden mostrar algunas limitaciones obligando a escribir alguna sección crítica de un programa en un lenguaje nativo como C o C++. Para hacer posible la integración entre Java y C existe en Java la API JNI. En este artículo mostraré como realizar un programa Java que emite el mensaje Hola Mundo desde una biblioteca compartida en C y usando JNI."
---

{{% post %}}

{{< logotype image1="java.svg" image2="gnu.svg" title2="SVG" width2="200" image3="linux.svg" title3="Linux" wdth3="200" width3="200" >}}

Nunca hasta ahora había tenido necesidad de crear un programa que no estuviese completamente escrito en el lenguaje Java. La [API de Java][javadoc-8] ofrece multitud de clases para cualquier funcionalidad que necesitemos desde estructuras de datos hasta algoritmos de búsqueda o criptografía. También porque el rendimiento de un programa en Java es suficiente y similar a un programa equivalente escrito en C o C++ gracias a las optimizaciones que implementa la máquina virtual de Java o <abbr title="Java Virtual Machine">JVM</abbr> aún siendo los programas Java compilados a una representación intermedia de _bytecode_ independiente de la arquitectura de procesador y sistema operativo en archivos de extensión _class_ y posteriormente interpretados y traducidos a la arquitectura de ejecución, lo que le proporciona a Java la conocida frase _"Write once, run anywhere"_.

Sin embargo, en casos que se necesita un alto rendimiento para tareas muy específicas o evitar las imposiciones de la máquina virtual como las paradas que realiza para el recolector de basura una solución es escribir esa funcionalidad crítica en lenguaje C, C++ e incluso en [Go][go]. El caso de necesidad que me he encontrado es acceder a un sensor de temperatura DHT11 del [kit de iniciación a la electrónica para la Raspberry Pi][blogbitix-212] para leer de él la temperatura y humedad. La forma que tiene el sensor DHT11 de proporcionar los datos tiene restricciones de tiempo, cuando se le requieren los valores envía 80 bits de datos donde un pulso de 27μs significa un 0 y un pulso de más de ese tiempo hasta 70μs significa un 1. Estas restricciones de tiempo del sensor y el hecho de que es en una modesta en potencia [Raspberry Pi][raspberrypi] 1 donde lo usaré hace que Java no sea capaz de leer correctamente los valores del sensor.

Acceder desde Java a código nativo en C requiere usar [Java Native Interface o por sus siglas JNI](https://docs.oracle.com/javase/8/docs/technotes/guides/jni/spec/jniTOC.html). Lo primero que hay que realizar es crear una clase que declare los métodos que serán implementados de forma nativa declarando estos métodos usando la palabra reservada _native_ y que serán enlazados por la JVM cargando una librería compartida con [System.loadLibrary()](javadoc8:java/lang/System.html#loadLibrary-java.lang.String-). Creada la clase Java se ha de generar el archivo de cabecera _.h_ propia del lenguaje C con el programa de utilidad del JDK _javah_. Con el archivo de cabecera se implementa la función y se crea una librería compartida en [GNU][gnu]/[Linux][linux] usando el [compilador gcc][gcc]. Con la librería compartida se puede iniciar el programa Java. Si la biblioteca compartida no se encuentra se lanzará una excepción del tipo [UnsatisfiedLinkError](javadoc8:java/lang/UnsatisfiedLinkError.html).

{{< image
    gallery="true"
    image1="image:UnsatisfiedLinkError.png" optionsthumb1="300x200" title1="Excepción UnsatisfiedLinkError cuando no se encuentra la librería de código nativo"
    caption="Excepción UnsatisfiedLinkError cuando no se encuentra la librería de código nativo" >}}

Algunas otras necesidades para hacer uso de JNI son:

* Acceder a características dependientes de la plataforma necesitadas por la aplicación que no están soportadas en la librería estándar de Java.
* Ya hay una librería escrita en otro lenguaje y se quiere hacer accesible a código Java a través de JNI.
* Se quiere implementar una pequeña parte de código crítico en un lenguaje de bajo nivel como ensamblador.

Desde los métodos de código nativo se puede:

* Crear, inspeccionar y actualizar objetos Java (incluyendo arrays y strings).
* Llamar a métodos Java.
* Capturar y lanzar excepciones.
* Cargar y obtener información de clases.
* Realizar validación de tipos en tiempo de ejecución.

Los comandos para generar el archivo de cabecera de C y compilarlo con el código nativo en una librería compartida con gcc son:

{{< code file="build.sh" language="bash" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

La cabecera usa varias definiciones de tipos definidas en los archivos _jni.h_ y el archivo que variará según el sistema operativo _jni\_md.h_. En la [estructura JNIEnv](http://xdprof.sourceforge.net/doxygen/structJNIEnv__.html) con múltiples funciones de integración en C y Java, también varias definiciones de los tipos Java para usarlos en C como _jobject_, _jstring_, _jint_, _jboolean_, _jlong_, _jdouble_, _jchar_, etc.

El programa que emite el mensaje _Hello World!_ desde código nativo en C debe cargar y enlazar la librería de código nativo con el código de la clase Java. Esto se muestra en el bloque de inicialización _static_ de la clase, en este caso usándo el método [System.load()](javadoc8:java/lang/System.html#load-java.lang.String-), la librería de código nativo de extensión _.so_ en GNU/Linux como en este caso al construirse el proyecto se incluye en el archivo _.jar_ del artefacto resultante se extráe al directorio temporal y se carga desde esa ubicación temporal. En el programa se llama al método _print_ implementado en código nativo y en el código C se usa la función _printf_ de la librería _stdio_ para emitir el mensaje:

{{< code file="JniHelloWorld.java" language="java" options="" >}}
{{< code file="JniHelloWorld.c" language="C" options="" >}}
{{< code file="JniHelloWorld.h" language="C" options="" >}}

La librería compartida para un sistema _amd64_ la he compilado en mi equipo de escritorio y para la versión _arm_ en la Raspberry Pi e incluido en el directorio _src/main/resources_ de código fuente del ejemplo.

{{< code file="execute.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:JniHelloWorld-amd64.png" optionsthumb1="300x200" title1="Mensaje en la terminal emitido desde código nativo (amd64)"
    image2="image:JniHelloWorld-arm.png" optionsthumb2="300x200" title2="Mensaje en la terminal emitido desde código nativo (ARM)"
    caption="Mensaje en la terminal emitido desde código nativo en un sistema amd64 y ARM" >}}

Ente ejemplo usa Java 8 y requiere instalar el compilador gcc para compilar la librería con código nativo. [Gradle][gradle] ofrece soporte para [compilar código nativo con su plugin](https://docs.gradle.org/3.4.1/userguide/native_software.html), sin embargo, he preferido usar y conocer los comandos javah y gcc sin usar Gradle. En el siguiente artículo mostraré el ejemplo del sensor DHT11 usando JNI y código nativo en C llamando a métodos de un objeto Java desde código C.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" command="./gradlew executeJniHelloWorldLocal" >}}

{{< reference >}}
* [GO: Call me maybe, Java!](https://blog.dogan.io/2015/08/15/java-jni-jnr-go/)
* [Java Native Interface Specification](https://docs.oracle.com/javase/8/docs/technotes/guides/jni/spec/jniTOC.html)
* [Java Programming Tutorial, Java Native Interface (JNI)](http://www3.ntu.edu.sg/home/ehchua/programming/java/JavaNativeInterface.html)
{{< /reference >}}

{{% /post %}}
