---
pid: 397
type: "post"
title: "Aumentar el tamaño del identificativo de la cookie de sesión de Tomcat o Spring Session"
url: "/2019/04/aumentar-el-tamano-del-identificativo-de-la-cookie-de-sesion-de-tomcat-o-spring-session/"
date: 2019-04-12T17:00:00+02:00
updated: 2019-04-12T19:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:tomcat.svg"
tags: ["java", "planeta-codigo", "seguridad", "spring"]
---

{{% post %}}

{{< logotype image1="tomcat.svg" title1="Tomcat" width1="200" image2="java.svg" image3="spring-boot.svg"  >}}

El protocolo HTTP es un protocolo sin estado que quiere decir que entre las peticiones no se comparte estado ni se recuerda ningún dato. Por otro lado las _cookies_ es pequeño conjunto de datos que son almacenados en el cliente y son enviados en cada petición que se hace a un sitio web, cada sitio web mantiene su propia colección de _cookies_, dos sitios distintos no comparten sus _cookies_. Para mantener estado entre dos peticiones se hace uso de las _cookies_.

En Java los servidores web envían al cliente una _cookie_ con simplemente un identificativo de la sesión, el estado se suele mantener en el servidor en memoria, en almacenamiento de disco o [persistido en una base de datos como Redis][blogbitix-70]. El identificativo de la sesión por defecto usando un contenedor de _servlets_ como [Tomcat][tomcat] tiene una longitud de 16 bytes que codificados en hexadecimal da lugar a 32 caracteres o 128 bits. Para aumentar la seguridad por si alguien intenta adivinar el identificativo de cualquier usuario que tenga sesión iniciada por fuerza bruta de casualidad es posible aumentar el número de caracteres para identificar la _cookie_ de sesión. La clase de la API que lo permite en Tomcat es [Manager](https://tomcat.apache.org/tomcat-9.0-doc/config/manager.html).

Según [Insufficient Session-ID Length](https://www.owasp.org/index.php/Insufficient_Session-ID_Length) un identificativo con solo 64 bits (32 de entropía) un atacante haciendo 1000 intentos por segundo y 10000 sesiones válidas tarda solo 7,15 minutos en obtener una sesión válida (32 bit = 4294967296 / 10.000 = 429496, a 1000 intentos por segundo da 429 segundos o 7,15 minutos). Con 128 bits el tiempo crece a 292 años haciendo 10000 intentos por segundo y teniendo 100000 sesiones válidas, pero podría reducirse si el número de intentos por segundo aumentase o sesiones aumentase.

Los datos se guardan en el servidor y la _cookie_ con el identicativo de sesión no ocupa mucho aún pasando de 32 caracteres hexadecimales a una cifra mayor como 128, el número de caracteres no es significativo para el rendimiento pero se dificulta en varios órdenes de magnitud la dificultad de adivinar una _cookie_. 

Unsando [Spring Boot][spring-boot] y _Tomcat_ basta con usar la clase _Manager_ para cambiar el valor por defecto de longitud de la sesión.

{{< code file="Main-1.java" language="java" options="" >}}

Persistiendo la sesión en [Redis][redis] con [Spring Sesion][spring-session] por defecto el identificativo de la sesión es generado a partir de un [UUID](javadoc11:java.base/java/util/UUID.html), el identificativo de la sesión tiene el mismo valor por defecto de 128 bits pero para cambiar la longitud hay que proporcionar una clase que cambia el comportamiento.

{{< code file="Main-2.java" language="java" options="" >}}
{{< code file="DefaultRedisOperationSessionRespository.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:spring-session.png" optionsthumb1="600x450" title1="Longitud del identificativo de sesión de 64 bytes o 128 caracteres hexadecimales"
    caption="Longitud del identificativo de sesión de 64 bytes o 128 caracteres hexadecimales" >}}

{{< code file="session-id.txt" language="java" options="" >}}

Un libro dedicado a la seguridad muy bueno que he leído es [Iron-Clad Java Applications](https://amzn.to/2DeAdi1), tiene montón de detalles dedicados a la seguridad de las aplicaciones web sean seguras, incluido como este dedicado a la longitud de los identificativos de la sesión.

Una clave asimétrica considerada segura puedes ser de 2048 bits pero se puede [generar una de hasta 8192 bits][blogbitix-13] con el mismo esfuerzo lo que aumenta la seguridad de forma exponencial ante un ataque de fuerza bruta que con el aumento de la capacidad de cómputo y en el futuro puede ser viable. El tiempo de cómputo requerido por usar una clave de mayor tamaño no creo que sea significativo para la mayoría de los casos pero igualmente la seguridad aumenta.

{{% sourcecode git="blog-ejemplos/tree/master/SpringSession" command="./gradlew run" %}}

{{< reference >}}
* [How to change the session id length in Spring Boot](https://stackoverflow.com/questions/35062780/how-to-change-the-session-id-length-in-spring-boot)
* [Spring Session, Allow for configuration of session id generation and format](https://github.com/spring-projects/spring-session/pull/204)
{{< /reference >}}

{{% /post %}}
