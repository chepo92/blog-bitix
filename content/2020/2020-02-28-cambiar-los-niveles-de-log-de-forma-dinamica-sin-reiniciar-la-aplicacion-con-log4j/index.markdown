---
pid: 467
type: "post"
title: "Cambiar los niveles de log de forma dinámica sin reiniciar la aplicación con Log4j"
url: "/2020/02/cambiar-los-niveles-de-log-de-forma-dinamica-sin-reiniciar-la-aplicacion-con-log4j/"
date: 2020-02-28T19:00:00+01:00
update: 2020-02-28T20:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
summary: "Ocurre un bug en producción o en un entorno de pruebas se desea obtener más información. Actualizar el archivo de trazas para obtener más información requiere modificar el archivo de configuración, desplegarlo en el entorno y reiniciar la aplicación, este proceso consume tiempo dependiendo del nivel de automatización de la organización. Para reducir el tiempo necesario para obtener la información con Log4j hay dos posibilidades para cambiar dinámicamente los niveles de trazas de la aplicación sin necesidad de reiniciarla."
---

{{% post %}}

{{< logotype image1="java.svg" >}}


Las trazas son muy útiles para tener un registro de lo que ha realizado una aplicación, también son muy útiles en tiempo de desarrollo y para depurar la aplicación. Cada traza se emite con un nivel de prioridad, en el momento de desarrollo puede que nos interese las trazas de más bajo nivel de _debug_, _trace_ o _info_, en el entorno de producción donde la aplicación debe funcionar correctamente las trazas de _debug_ e _info_ se omiten y las aplicaciones se suele configuran con un nivel mínimo de _warn_ o _error_ para que las trazas sean registradas.

Sin embargo, cuando se descubre un error en producción o se quiere obtener más información con los niveles de _info_ de qué es lo que está ocurriendo la aplicación requiere al menos cambiar el archivo de configuración de las trazas con su _commit_ al un repositorio de control de versiones, la actualización del archivo de configuración desplegado en el entorno de producción y un reinicio de la aplicación. Este proceso de desarrollo y operaciones requiere tiempo más o menos dependiendo del nivel de automatización que posee la aplicación, en cualquier caso consume tiempo de personas y retrasa el tiempo necesario para obtener información y por tanto para resolver el problema.

¿Te imaginas lo bueno que sería que cuando hay un _bug_ en producción o se necesita poder reconfigurar los niveles de trazas de dinámicamente sin reiniciar la aplicación ni despliegues? Una de las librerías más populares en Java para emitir trazas [Log4j][log4j] permite cambiar de forma dinámica el nivel de las trazas para cada _logger_.

El requisito para que cambiar el nivel de las trazas sea útil es que deben estar incluidas previamente en la aplicación, con un nivel de traza y mensaje adecuado.

Hay dos posibilidades:

* Utilizar la opción _monitorInterval_ con la que Log4j monitoriza según el tiempo configurado el archivo de configuración de las trazas para conocer si ha tenido cambios y reconfigurar los niveles de trazas cuando detecta cambios.
* Utilizar la clase [Configurator](https://logging.apache.org/log4j/2.x/log4j-core/apidocs/org/apache/logging/log4j/core/config/Configurator.html). Esta clase no es parte de la API pública lo que implica que puede cambiar pero permite cambiar los niveles de trazas de forma programática.

En este ejemplo de código se utiliza la clase _Configurator_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="log4j2.yaml" language="yaml" options="" >}}

El nivel de trazas según se inicia la aplicación para el _logger_ es _info_ por configuración, según se ejecuta el programa se cambia el nivel de trazas a _error_ y finalmente se restablece el nivel de trazas a _info_. Se observa que cuando el nivel de las trazas está a nivel _error_ la traza de nivel _info_ no se emite, como es lo esperado. Al restablecer el nivel a _info_ se emiten ambas trazas.

{{< code file="System.out" language="plaintext" options="" >}}

Para cambiar el nivel de trazas de una aplicación de forma programática se puede [ofrecer una interfaz JMX en la aplicación][blogbitix-441] o si se trata de una aplicación web una página de configuración que ofrezca la funcionalidad.

La reconfiguración de los niveles de trazas deben ser temporales ya que la aplicación dependiendo de su carga emite más trazas que con los niveles _warn_ y _error_. Si las trazas se guardan en un archivo, guardar mayor cantidad de ellas hace que su tamaño pueda ser significativo e incluso llenar el almacenamiento provocando malfuncionamiento en la aplicación. Para evitar que el archivo de trazas llene el almacenamiento persistente es posible [limitar por tamaño, por fecha y rotar los archivos de trazas][blogbitix-442].

{{% reference %}}
* [Log4j Configuration](https://logging.apache.org/log4j/2.x/manual/configuration.html)
* [How do I set a logger’s level programmatically?](https://logging.apache.org/log4j/2.x/faq.html#reconfig_level_from_code)
* [Dynamically Changing log4j log level](https://stackoverflow.com/questions/4598702/dynamically-changing-log4j-log-level)
{{% /reference %}}

{{% /post %}}
