---
pid: 54
type: "post"
title: "Introducción a Bitnami"
url: "/2014/11/introduccion-a-bitnami/"
date: 2014-11-29T10:45:45+01:00
updated: 2017-05-28T01:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:bitnami.svg"
tags: ["hardware", "gnu-linux", "planeta-codigo", "software", "software-libre"]
---

{{% post %}}

{{< logotype image="bitnami.svg" title="Bitnami" width="200" >}}

Instalar algunas aplicaciones, herramientas o servicios no siempre es sencillo y rápido. En la mayoría de los casos los pasos están explicados suficientemente pero en la práctica nos pueden surgir dudas o problemas que no están documentados que pueden hacer que la experiencia de instalación no sea agradable o necesitar dependencias que hay que instalar a la vez para obtener un funcionamiento correcto. Además, sin emplear una máquina virtual se necesita instalar en el propio equipo o servidor cuando quizá solo interesa evaluar el producto con lo que al hacer la desinstalación se acaba con archivos temporales que quizá no se eliminen y permanezcan ocupando espacio para siempre o hasta ser eliminados.

[Bitnami][bitnami] es una amplia colección de servicios populares que permite instalarlos y disponer de ellos rápidamente completamente configurados sin necesidad de dedicar tiempo a conocer como instalarlos, además, si empleamos virtualización con [VirtualBox][virtualbox] se consigue que el equipo quede completamente limpio una vez que el servicio sea desinstalado bastando únicamente eliminar la máquina virtual. Esta colección de servicios se pueden instalar en el propio equipo, en una máquina virtual con VirtualBox, [VMware][vmware], [KVM][kvm] o en la nube por ejemplo de [Amazon EC2][amazon-ec2], [microsoft-azure][microsoft-azure] o [Google Cloud][google-cloud] y próximamente usando [Docker][docker].

¿Alguna vez has querido probar [Wordpress][wordpress], [Redmine][redmine], [Drupal][drupal], [MediaWiki][mediawiki], [phpBB][phpbb], [Liferay][liferay], [Jenkins][jenkins], [Plone][plone], [Alfresco][alfresco], ...? Estos son solo unos pocos ejemplos de [todos los servicios que nos ofrece Bitnami](https://bitnami.com/stacks) listos para que empecemos a usarlos en unos pocos minutos, hay muchos otros disponibles y en un futuro se agregarán más según las peticiones que realicen los usuarios de Bitnami. Algunas aplicaciones están compuestas de una pila completa de servicios como por ejemplo LAMP (Linux, Apache, MySQL, PHP) o LAPP (Linux, Apache, PostgreSQL, PHP) que incluyen una lista completa de dependencias que necesitan como FastCGI, OpenSSL, phpMyAdmin, ModSecurity, SQLite, Varnish, ImageMagick, xDebug, Xcache, OpenLDAP, ModSecurity, Memcache, OAuth, PEAR, PECL, APC, GD o cURL. Adicionalmente podemos usar una única pila como LAMP para instalar varios [módulos](https://bitnami.com/stack/lamp/modules) en vez de instalar cada aplicación individualmente (Drupal, MediaWiki, ...) de forma que todas las aplicación compartan la infraestructura de la misma pila.

En un futuro parece que Bitnami ofrecerá soporte para [Docker][docker] haciendo que no necesitemos ni siquiera un entorno de virtualización, ahorrando espacio en disco y ofreciendo el máximo rendimiento que ofrezca la máquina sin ningún tipo de penalización que impone virtualizar.

### ¿Cómo empezar a usar Bitnami?

A continuación explicaré la opción de usar Bitnami con VirtualBox, para el ejemplo usaré la aplicación de [GitLab][gitlab]. En la [guía de inicio rápido de Bitnami](https://docs.bitnami.com/virtual-machine/) están explicadas otras opciones y preguntas frecuentes, en este caso nos interesa la [sección para VirtualBox](https://docs.bitnami.com/virtual-machine/get-started-virtualbox/).

Teniendo instalado previamente VirtualBox, primeramente necesitaremos descargar la imagen del disco que contiene la [aplicación de Bitnami para GitLab](https://bitnami.com/stack/gitlab). Accedida a la sección [_Local Install_](https://bitnami.com/stack/gitlab/virtual-machine) pulsamos el botón _Download_ según la versión del sistema operativo que prefiramos, en este caso usaré la basada en [Debian][debian]. A continuación hay que crear una máquina virtual en VirtualBox mediante la opción _Importar servicio virtualizado..._ del menú _Archivo_ donde hay que seleccionar el archivo de extensión _ova_ y cambiaremos la memoria asignada a la máquina virtual al menos 2048 MiB.

{{< image
    gallery="true"
    image1="image:virtualbox-importar-servicio-virtualizado.png" optionsthumb1="300x200" title1="Importación de servicio virtualizado en VirtualBox"
    image2="image:virtualbox-gitlab.png" optionsthumb2="300x200" title2="Máquina virtual de GitLab"
    caption="Importación de servicio virtualizado de Bitnami en VirtualBox" >}}

Una vez importado el servicio y creada la máquina virtual la tratamos como cualquier otra máquina virtual para iniciarla la máquina virtual está lista para ser iniciada. Una vez iniciada completamente en la terminal se solicita un inicio de sesión con el usuario y contraseña que da acceso a una terminal para realizar tareas administrativas, en la misma página de inicio de sesión se indica el usuario y contraseña a usar y se indica la dirección IP (en el caso de las capturas mostradas es la _192.168.1.3_) que es necesario usar para acceder al servicio con el navegador. En el primer inicio de sesión se solicita cambiar la contraseña.

Accediendo con el navegador a la dirección _https\://192.168.1.3_ se accede a la aplicación de GitLab que pide un usuario y contraseña para iniciar sesión, el usuario y contraseña están indicados en la página de descarga de la imagen del servicio.

{{< image
    gallery="true"
    image1="image:gitlab-inicio-sesion.png" optionsthumb1="300x200" title1="Inicio de sesión de GitLab"
    image2="image:gitlab.png" optionsthumb2="300x200" title2="GitLab"
    caption="Servicio de GitLab" >}}

En definitiva, Bitnami es de utilidad si se necesita usar cualquiera de los servicios que ofrece tanto para probarlos con una máquina virtual o para instalarlos en la nube de Amazon EC2, Azure o en Google Cloud. La nube evita adquirir hardware y posibilita escalarlo según las necesidades siempre estando dispuestos a pagar su coste, en algunos casos un mini PC como los [Brix](https://amzn.to/2rauzYV), [NUC](https://amzn.to/2s8GYtI) o [Cubi](https://amzn.to/2r07KGS) que soportan cantidades de memoria de 16 GiB y algunos 32 GiB son mas que suficientes para una infraestructura interna de una empresa pequeña que incluya control de versiones, gestor de peticiones, integración continua, base de datos, servidor de aplicaciones, ... estos ordenadores pequeños en tamaño pero con una capacidad de proceso y memoria nada despreciable son una opción a considerar para algunas tareas y pueden actuar perfectamente como servidores en los que alojar algunos servicios para consumo interno.

{{< reference >}}
* [Bitnami](https://bitnami.com)
* [Wikipedia Bitnami](https://en.wikipedia.org/wiki/Bitnami)
* [Bitnami, Una tienda de Aplicaciones para Servidores](http://www.jsitech.com/generales/bitnami-una-tienda-de-aplicaciones-para-servidores/)
* [Introducción a Docker][blogbitix-49]
* [Guía de inicio básico de Docker][blogbitix-50]
* [Cómo crear una imagen para Docker usando un Dockerfile][blogbitix-51]
* [Introducción a Ansible][blogbitix-52]
* [Integración entre Ansible y Docker][blogbitix-53]
* [Introducción al gestor de proyectos y tareas Redmine][blogbitix-57]
* [Instalar y usar plugin ágil en Redmine][blogbitix-59]
* [Introducción e inicio a Drupal][blogbitix-60]
{{< /reference >}}

{{% /post %}}
