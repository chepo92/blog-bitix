---
pid: 213
type: "post"
title: "Ejemplo Hello World con Java en la Raspberry Pi"
url: "/2017/03/ejemplo-hello-world-con-java-en-la-raspberry-pi/"
date: 2017-03-04T11:00:00+01:00
updated: 2017-03-04T23:00:00+01:00
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

Este artículo es introductorio a los siguientes que escribiré y publicaré sobre el [kit de iniciación a la electrónica para la Raspberry Pi][blogbitix-212]. Antes de empezar a cacharrear con los sensores y dipositivos de entrada y salida, con los _pines_ GPIO y para hacerlo de forma cómoda crearé un entorno de desarrollo y despliegue en la [Raspberry Pi][raspberrypi] usando [SSH][ssh], [rsync][rsync] para copiar los artefactos del equipo de desarrollo a la RPi y [Ansible][ansible] usándolo desde [Gradle][gradle] para lanzar comandos y ejecutar los ejemplos de forma remota aunque si no se quiere usar Ansible se pueden lanzar los comandos mediante SSH.

En la Raspberry Pi deberemos instalar por supuesto [Java][java] (es posible usar Java 8) junto con SSH y rsync, configurar el servidor SSH en la RPi modificando el archivo _/etc/ssh/sshd\_config_, habilitar el servidor SSH, copiar nuestra [clave pública ssh generada previamente][blogbitix-13] al archivo _~/.ssh/authorized\_keys_ del usuario e instalar [Python][python] como requerimiento de Ansible. Los programas Java los escribiremos en un equipo más potente que la Raspberry Pi ya sea un portátil o un equipo de sobremesa con un IDE ya sea [IntelliJ][intellij], [eclipse][eclipse] u otro, también deberemos instalar Gradle, Ansible y rsync. En Arch Linux con los siguientes comandos del gestor de paquetes:

{{< code file="pacman-raspberrypi.sh" language="bash" options="" >}}
{{< code file="authorized_keys" language="plaintext" options="" >}}
{{< code file="pacman.sh" language="bash" options="" >}}

Con la ayuda de unas tareas para la herramienta de construcción Gradle haremos el despliegue y la ejecución de la librería _jar_ del proyecto de los ejemplos y de las dependencias que necesiten. El archivo de construcción de Gradle sería el siguiente en el que la tarea _copyDependencies_ copia las dependencias al directorio _build/libs_. La tarea _upload_ ejecutan el comando <code>rsync</code> para subir el archivo _jar_ y las dependencias del proyecto a la Raspberry Pi. Finalmente, una tarea como _executeHelloWorld_ ejecutará el comando en la Raspberry Pi para lanzar el programa Java. Con SSH también se puede lanzar el comando de forma remota cambiando la dirección IP de la Raspberry Pi por la que tenga asignada.

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="executeSSH.sh" language="bash" options="" >}}
{{< code file="executeGradle.sh" language="bash" options="" >}}

El programa de ejemplo es universal gracias a la idea _«Write once, run anywhere»_ posibilitado por la máquina virtual o <abbr title="Java Virtual Machine">[JVM][jvm]</abbr> y el _bytecode_, está compilado en un sistema con arquitectura x64 (el de mi equipo) y ejecutado en un sistema con arquitectura arm (el de la RPi). No se diferencia en nada al que usaríamos para lo mismo en cualquier otro sistema distinto de la Raspberry Pi.

{{< code file="HelloWorld.java" language="java" options="" >}}

El resultado de este ejemplo es un mensaje en la terminal que es emitido por un programa Java ejecutado en la Raspberry Pi y lanzado de forma remota.

{{< image
    gallery="true"
    image1="image:java-raspberrypi-hello-world.png" optionsthumb1="300x200" title1="Ejemplo Hello World con Java en la Raspberry Pi"
    caption="Ejemplo Hello World con Java en la Raspberry Pi" >}}

En los siguientes artículos de la serie mostraré ya como usar diferentes elementos de salida como diodos LED, zumbador, _display_ LCD 1602 o de entrada como un pulsador.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRaspberryPi" command="./gradlew executeHelloWorld" >}}

{{% /post %}}
