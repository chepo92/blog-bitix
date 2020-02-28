---
pid: 441
type: "post"
title: "Interfaz de monitorización e instrumentalización con JMX en aplicaciones Java"
url: "/2019/11/interfaz-de-monitorizacion-e-instrumentalizacion-con-jmx-en-aplicaciones-java/"
date: 2019-11-08T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:jconsole.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "JMX es una forma sencilla e integrada en la plataforma Java de monitorizar e instrumentalizar ciertas operaciones de funcionamiento interno de la aplicación que no tenga que ver con el ámbito de negocio que resuelve sino en el aspecto técnico. Unos casos de uso son activar una característica de la aplicación mientras la aplicación está funcionando o limpiar una cache de modo que los datos que almacena se actualicen de nuevo de la fuente origen en tiempo real y sin necesidad de reniciarla, cualquier otro realizable con código Java es posible."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Las aplicaciones Java tienen a su disposición integradas en la propia plataforma Java una interfaz para monitorizar su estado y realizar acciones de instrumentalización para modificar algún comportamiento o cambiar alguna configuración en tiempo real mientras la aplicación está funcionando sin necesidad de reiniciarla. La especificación que proporciona esta interfaz es _Java Management Extensions_ (JMX).

JMX define una serie de recursos a ser administrados, estos ha de instrumentalizarse con el lenguaje Java definiendo unos objetos _MBeans_ que accedan a los recursos. Una vez el recurso ha sido instrumentalizado es gestionado por una agente JMX. El agente JMX controla los recursos y los hace disponibles a las aplicaciones de gestión, el objeto principal del agente es el _MBean server_ donde los _MBean_ son registrados. Los recursos puede ser accedidos a través de diferentes protocolos mediante adaptadores y conectores. Un adaptador HTML muestra un _MBean_ en el navegador y un conector se encarga de la comunicación entre la la aplicación de gestión y el agente JMX.

La instrumentalización se implementa con los objetos _MBean_ similares a los objetos JavaBean que siguen varios patrones de diseño establecidos por la especificación JMX. Un _MBean_ puede representar un dispositivo, una aplicación o un recurso que necesite ser administrado. Los _MBean_ exponen una interfaz de gestión que consiste en:

* Un conjunto de propiedades de lectura, escritura o ambas.
* Un conjunto de operaciones invocables.
* Una autodescripción.

Además de propiedades y operaciones los _MBean_ también pueden emitir notificaciones cuando ocurren ciertos eventos. Una aplicación práctica de JMX es [cambiar de forma dinámica los niveles de log][blogbitix-467] para obtener más información de una funcionalidad o en caso de un error sin necesidad de reiniciar el servidor ni necesidad de hacer cambios en el repositorio de código de la aplicación para simplemente obtener mayor detalle de trazas.

### Ejemplo de JMX en una aplicación Java

Un _MBean_ no es más que una interfaz que una clase Java implementa.

{{< code file="HelloMBean.java" language="java" options="" >}}
{{< code file="Hello-java.java" language="java" options="" >}}

Creada la interfaz y la implementación del _MBean_ ha de registrarse en el servidor de _MBean_. Los _MBean_ se registra en un dominio junto con una serie de propiedades clave/valor.

{{< code file="Main-java.java" language="java" options="" >}}

Iniciando la aplicación que registra un _MBean_ en el servidor de _MBean_ la plataforma Java incluye la herramienta _JConsole_ de monitorización y gestión que cumple con la especificación JMX. [VisualVM][visualvm] es otra herramienta de monitorización para una máquina virtual de Java, el soporte para visualizar y realizar operaciones sobre _MBans_ hay que añadirlo con un complemento o _plugin_. Se inician con el siguiente comando y hay que abrir un diálogo para conectarse a uno de los agentes locales iniciados por una máquina virtual.

{{< code file="jconsole-visualvm.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:jconsole.png" optionsthumb1="650x450" title1="Herramienta de monitorización e instrumentalización JConsole"
    caption="Herramienta de monitorización e instrumentalización JConsole" >}}

Realizada la conexión al agente se muestran las propiedades y operaciones de los MBean registrados con la posibilidad de cambiar sus valores, invocar las operaciones y obtener sus resultados. La propia plataforma Java proporciona numerosos _MBean_ como se muestra en el árbol lateral de la imagen.

{{< image
    gallery="true"
    image1="image:jconsole-mbean.png" optionsthumb1="300x250" title1="Instrumentalización de un MBean en JConsole"
    image2="image:visualvm-mbean.png" optionsthumb2="300x250" title2="Instrumentalización de un MBean en VisualVM"
    caption="Instrumentalización de un MBean en JConsole y VisualVM" >}}

En el caso de que la aplicación esté contenida dentro de una aplicación web y desplegada en un servidor de aplicaciones como [Tomcat][tomcat] o [WildFly][wildfly] registrar un _MBean_ es similar al caso del ejemplo de la aplicación Java y posteriormente administrados con la herramienta JConsole.

### Ejemplo de JMX con Spring Boot

El ejemplo anterior muestra como usar JMX en una aplicación Java, Spring ofrece soporte para implementar JMX en aplicaciones que usen este _framework_ con las anotaciones [@ManagedResource](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jmx/export/annotation/ManagedResource.html), [@ManagedAttribute](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jmx/export/metadata/ManagedAttribute.html), [@ManagedOperation](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jmx/export/annotation/ManagedOperation.html), [@ManagedOperationParameters](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jmx/export/annotation/ManagedOperationParameters.html), ([@ManagedOperationParameter](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jmx/export/annotation/ManagedOperationParameter.html)) y [@EnableMBeanExport](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/EnableMBeanExport.html).

El mismo _MBean_ de la aplicación Java implementado con spring es el siguiente, lo único que cambia son las anotaciones prporcionadas para que Spring descubra de forma automática los _MBean_ disponibles y los registre sin necesidad de hacerlo de forma explícita.

{{< code file="HelloMBean.java" language="java" options="" >}}
{{< code file="Hello-spring.java" language="java" options="" >}}

Por autoconfiguración y la anotación [@EnableMBeanExport](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/EnableMBeanExport.html) los _MBean_ se autodescubren y registran en el servidor _MBean_.

{{< code file="Main-springboot.java" language="java" options="" >}}

Tanto en el ejemplo de _MBean_ con Java como con Spring el puerto RMI para acceder a JMX se configura con varias propiedades de la máquina virtual o con un archivo _properties_ de configuración.

{{< code file="jmxremote-1.properties" language="plaintext" options="" >}}

### Cómo añadir acceso remoto y añadir seguridad securizad a JMX

Por defecto JMX solo es accesible desde la maquina local, esto en producción no es muy útil pero activar el acceso remoto requiere añadir nuevas propiedades de configuración para proporcionar seguridad realizando autenticación y usando una comunicación segura con SSL. Para la comunicación segura se requiere crear un _keystore_.

{{< code file="keystore.sh" language="bash" options="" >}}
{{< code file="jmxremote-2.properties" language="plaintext" options="" >}}
{{< code file="jmxremote-ssl.properties" language="plaintext" options="" >}}

Los archivos _jmxremote.password_ y _jmxremote.access_ configuran la autenticación mediante clave y contraseña además de la autorización a las operaciones que el usuario tiene permiso para realizar. Estos archivos han tener restringidos los permisos de lectura para el usuario que inicia la aplicación o se produce una excepción.

{{< code file="jmxremote.password" language="plaintext" options="" >}}
{{< code file="jmxremote.access" language="plaintext" options="" >}}

{{< code file="permissions.sh" language="plaintext" options="" >}}

{{< code file="jconsole.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:jconsole-remote.png" optionsthumb1="650x450" title1="Acceso remoto a la herramienta de monitorización e instrumentalización JConsole"
    caption="Acceso remoto a la herramienta de monitorización e instrumentalización JConsole" >}}

El acceso remoto también es posible mediante una [aplicación Java que actúe como cliente del servidor _MBean_](https://docs.oracle.com/javase/tutorial/jmx/remote/custom.html).

{{% sourcecode git="blog-ejemplos/tree/master/JavaJMX" command="./gradlew run" %}}

{{< reference >}}
* [Monitoring and Management Using JMX Technology](https://docs.oracle.com/javase/7/docs/technotes/guides/management/agent.html)
* [Tutorial Java Management Extensions (JMX)](https://docs.oracle.com/javase/tutorial/jmx/index.html)
* [Securing remote JMX](https://gquintana.github.io/2016/09/01/Securing-remote-JMX.html)
* [Spring JMX](https://docs.spring.io/spring/docs/5.2.0.RELEASE/spring-framework-reference/integration.html#jmx)
* [Spring Boot Monitoring and Management over JMX](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/html/spring-boot-features.html#boot-features-jmx)
* [Basic Introduction to JMX](https://www.baeldung.com/java-management-extensions)
* [JMX with Spring Framework](http://actimem.com/java/jmx-spring/)
{{< /reference >}}

{{% /post %}}
