---
pid: 10
type: "post"
title: "El servidor de aplicaciones JBoss/WildFly"
url: "/2014/02/el-servidor-de-aplicaciones-jboss-slash-wildfly/"
aliases: ["/2014/02/servidor-de-aplicaciones-jboss-slash-wildfly/"]
date: 2014-02-07T22:35:31+01:00
updated: 2016-03-14T18:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:wildfly.svg"
tags: ["java", "programacion", "software", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="wildfly.svg" title="WildFly" width="300" >}}

Para una pequeña (o no tan pequeña) aplicación web desarrollada en la plataforma Java un servidor como [Tomcat](http://tomcat.apache.org/) o [Jetty](http://www.eclipse.org/jetty/) es suficiente. Pero una aplicación grande o un entorno empresarial probablemente empiece a requerir funcionalidades que Tomcat no proporciona de por si. En algunos casos una librería puede suplir esta carencia, este podría ser el caso de [Hibernate](http://hibernate.org/) para la persistencia o [Apache Shiro](http://shiro.apache.org/) para la seguridad de la aplicación. Sin embargo, cuando sea posible y tenga sentido es buena idea seguir alguna de las especificaciones o APIs que proporciona la plataforma [Java EE](https://en.wikipedia.org/wiki/Java_Platform,_Enterprise_Edition) ya que de esta manera podremos cambiar de implementación sin necesidad de modificar el código de la aplicación y permite integrar dos sistemas diferentes si ambos siguen una determinada especificación. Un ejemplo podría ser el caso de Hibernate con la especificación JPA que proporciona una funcionalidad equivalente (de hecho esta especificación se basa en Hibernate y se puede usar Hibernate como implementación a través de la API que define JPA) o de integración de sistemas con JMS.

Los servidores de aplicaciones se pueden distinguir por la cantidad de especificaciones que implementan, sus versiones, perfiles y la versión de Java EE que cumplen. Por una parte tendríamos los contenedores de _servlets_ y JSP como podrían ser Apache Tomcat y Jetty, estos cumplen con un perfil web e implementan una parte de las especificación que engloba Java EE. Por otra parte están los servidores que cumplen con toda las especificaciones que define Java EE y se les suele denominar _full profile_ o perfil completo. Ejemplos de servidores de aplicaciones full profile son:

* [Glashfish](https://glassfish.java.net/): la implementación de referencia de un servidor de aplicaciones.
* [Weblogic](https://www.oracle.com/us/products/middleware/cloud-app-foundation/weblogic/suite/overview/index.html): el servidor de aplicaciones propietario que adquirió Oracle con la compra de la antigua BEA Systems.
* [Apache Geronimo](http://geronimo.apache.org/): servidor de aplicaciones proporcionado por la fundación Apache. Las implementaciones de las especificaciones son proporcionadas por muchos de los proyectos de la propia fundación.
* [JBoss](https://www.jboss.org/overview/)/[WildFly](http://wildfly.org/): servidor de aplicaciones que adquirió [RedHat](http://www.redhat.com/) de la comunidad JBoss pero al contrario que Oracle y Weblogic con licencia libre de software libre.

De la plataforma Java EE hay varias versiones que a medida que se van publicando mejoran y amplían las especificaciones que ya estaban disponibles en una versión anterior o se incluyen nuevas especificaciones que han de soportar los servidores de aplicaciones si quieren certificarse como _full profile_. La última versión al momento de escribir esta entrada es la Java EE 7 publicada en abril de 2013. En la [introducción y nuevas características de Java EE][blogbitix-131] comento un poco más, aunque este listado no es completo las especificaciones más destaclables son:

* JSF (2.2): para desarrollar aplicaciones web sucesor de los JSP.
* Servlets (3.1) y JSPs (2.3): los _servlets_ son la base a partir de la cual desarrollar aplicaciones web dinámicas y los JSP una forma de _servlet_ en el que la mayor parte de el código HTML, similar a PHP.
* CDI (1.0): proporciona inyección de dependencias de forma parecida a _frameworks_ como Spring.
* EJB (3.2): beans gestionados por un contenedor administrando su ciclo de vida y proporcionales funcionalidades como persistencia y transacciones. Suelen usarse para incluir la lógica de negocio de la aplicación.
* Bean Validation (1.1): funcionalidad que mediante anotaciones permite indicar restricciones sobre los valores que pueden contener los beans.
* JPA (2.1): especificación que proporciona persistencia en una base de datos.
* JTA (1.2): especificación que proporciona transaccionalidad.
* JMS (2.0): especificación que permite a las aplicaciones comunicarse mediante mensajes de forma desacoplada.
* JAX-RS (2.0): especificación sobre los servicios web basados en el modelo REST sobre el protocolo HTTP.
* JAX-WS (1.3): especificación sobre servicios web basados en XML.
* JavaMail (1.5): especificación para el envío de mensajes de correo electrónico.

De entre los servidores de aplicaciones mencionados anteriormente está JBoss. WildFly es un servidor de aplicaciones Java desarrollado por [Red Hat][redhat] que implementa las especificaciones Java EE. Es un servidor con una licencia libre y es la versión para la comunidad que Red Hat renombra como JBoss para su catálogo de productos destinados a las empresas.

WildFly arranca tremendamente rápido (unos 10 segundos, no mucho más que un Tomcat que ofrece muchas menos funcionalidades), tiene una licencia de software libre, ofrece soporte y detrás está una compañía que claramente apuesta por el software libre en su modelo de negocio. En sus versiones de JBoss, la 7.1, y 8 de WildFly ya no se producen los errores de conflictos entre librerías que se producían anteriormente con el _classpath hell_, ya que en vez de seguir un modelo jerárquico como antes sigue un modelo OSGi con JBoss Modules. Ahora se basa en módulos y cada war, ear o jar está aislado del resto. Puede administrarse mediante linea de comandos y a través de una consola web evitándose los conflictos. Para diferenciar más claramente la versión comercial de la ofrecida a la comunidad JBoss ha pasado a llamarse WildFly para la versión de la comunidad y la relación con JBoss será similar a la que tienen [RHEL](http://www.redhat.com/products/enterprise-linux/) con [Fedora](https://fedoraproject.org/) y desde hace poco con [CentOS](http://www.centos.org/).

A continuación unas pocas capturas de pantalla de la página de inicio de WildFly y de la consola de administración:

{{< image
    gallery="true"
    image1="image:wildfly.png" optionsthumb1="300x200"
    image2="image:wildfly-admin-1.png" optionsthumb2="300x200" title2="Consola de administración" >}}
{{< image
    gallery="true"
    image1="image:wildfly-admin-2.png" optionsthumb1="300x200" title1="Consola de administración" >}}

En las [notas de publicación de WildFly 8](http://wildfly.org/news/2014/02/11/WildFly8-Final-Released/) pueden consultarse las numerosas e interesantes funcionalidades añadidas. También en el siguiente [vídeo](http://wildfly.org/news/2013/11/21/WildFly-8-Webinar/) se explican muchos de los detalles que incorpora.

En posteriores entradas y siguiendo la serie de entradas de seguridad ([I][elblogdepicodev-181], [II][elblogdepicodev-182], [III][elblogdepicodev-183], [IV][blogbitix-1], [V][blogbitix-2] y [VI][blogbitix-3]) comentaré como crear certificados para usarlos con el protocolo seguro SSL y como configurar diferentes servidores web y de aplicaciones Java, entre ellos WildFly, para usar SSL y el protocolo HTTPS.

{{< reference >}}
* [Introducción y nuevas características de Java EE 7][blogbitix-131]
* [Generar y convertir claves y certificados con OpenSSL][blogbitix-13]
* [Configurar SSL/TLS en un servidor Tomcat, JBoss, WildFly, Lighttpd, Nginx o Apache][blogbitix-14]
* [Configurar HTTP/2 en Nginx, Apache HTTPD, WildFly o Jetty][blogbitix-129]
* [WildFly](http://wildfly.org/)
* [JBoss](http://jbossas.jboss.org/)
{{< /reference >}}

{{% /post %}}
