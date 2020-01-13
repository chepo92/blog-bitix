---
pid: 211
type: "post"
title: "Servidores Cloud VPS de Clouding.io para hospedar blogs y páginas web"
url: "/2017/02/servidores-cloud-vps-de-cloudingio-para-hospedar-blogs-y-paginas-web/"
date: 2017-02-28T22:00:00+01:00
updated: 2017-11-06T20:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: true
imagePost: "logotype:cloudingio.png"
tags: ["planeta-codigo", "patrocinado"]
summary: "Al escribir este artículo patrocinado sobre Clouding.io he podido probar de primera mano el crear un servidor virtual basado en la computación en la nube. Después de probarlo me parece una opción sencilla y sin complicaciones, adecuada y más que suficiente para proyectos de presencia en internet, blogs, pequeños y medianos proyectos de páginas web. Además, con soporte en español en caso de necesitar algún tipo de asistencia o ayuda."
---

{{% post %}}

{{< logotype image1="cloudingio.png" title1="Clouding.io" width1="300" >}}

Toda página web, blog y servicio que está accesible en internet ha de ser hospedado en algún servidor. Por motivos de fiabilidad, también coste y flexibilidad se suele contratar un servicio de hospedaje de los muchos que hay en internet. Desde no hace tanto tiempo ha surgido una modalidad de hospedaje que permite mayor flexibilidad, la llamada [cloud computing][cloud-computing] o computación en la nube, cuya características diferenciadoras son permitir variar de forma elástica, aumentando o reduciendo, los recursos de computación utilizados ya sea de procesador, memoria, almacenamiento o transferencia de datos. Otra característica de la computación en la nube es que es inmediata (en cuestión de minutos) sin necesidad de trámites administrativos o tiempos de espera, los servicios de computación en la nube incluyen paneles de administración para los servidores accesibles a través de un navegador con aplicaciones sencillas o incluso interfaces basadas en linea de comandos de modo que es posible automatizar las tareas de sistemas con [DevOps][devops].

Hay múltiples opciones de computación en la nube algunas con más servicios y funcionalidades pero también más complejas y no necesarias para proyectos sencillos y no muy grandes. Una de las opciones de computación en la nube sencilla pero suficiente en muchos casos es [Clouding.io][cloudingio] que en la opción más básica ofrece un servidor con **1 núcleo de CPU, 1 GiB de memoria, 25 GiB de almacenamiento persistente de estado sólido o SSD y 2 TiB de datos de transferencia a un precio de 10€ + IVA al mes** (unos 12€), precio similar a otras opciones de servidores en la nube. Para un página web con archivos estáticos de presencia en internet o un blog como Blog Bitix que solo utiliza recursos estáticos (HTML, CSS, JavaScript e imágenes) lo más básico ya sería suficiente y para un blog con [Wordpress] utilizando 2 GiB y un precio de 12 € + IVA al mes también debería ser más que suficiente para un tráfico respetable en cantidad. Una de las ventajas del _cloud computing_ es la elasticidad que permite cambiar en cualquier momento los recursos reservados según las necesidades como la cantidad de memoria, núcleos de procesador o espacio en disco, tanto para reservar más recursos o para disminuir los recursos utilizados y también el coste. En la página de Clouding.io está la simple política de precios según los recursos reservados. **Desde 1 GiB hasta 32 GiB de memoria, desde 1 hasta 16 cores de CPU y desde 25 GiB hasta 1900 GiB de almacenamiento SSD** por servidor cubriendo las necesidades hasta de las aplicaciones más exigentes.

{{< image
    gallery="true"
    image1="image:web-cloudingio.png" optionsthumb1="300x200" title1="Página web de Clouding.io"
    caption="Página web de Clouding.io" >}}

Algunas de las características de Clouding.io algo más detalladas en su página web es que ofrecen soporte en español y discos SSD rápidos para el almacenamiento además de las siguientes:

* Potente: Cores Intel Xeon, Red Cisco 20Gbps, Ceph Storage, OpenStack KVM, Cache Inteligente y Discos SSD.
* Estable: Triple Réplica, Auto Reparación, Datacenter Tier 4, Calidad Empresarial, Protección de Red, Hosting DNS.
* Flexible: Cloud Hosting por Horas, Windows Cloud, Linux Cloud, Configuración a medida, Ampliaciones temporales, Activación inmediata.
* Fácil: Soporte de Calidad, Cloud Pros, Teclado y Monitor Remoto, Como y cuando quieras, DIY: Hazlo tú mismo, Comunidad.

En el blog de Clouding.io hay artículos interesantes y tiene una comunidad con una base de conocimiento y una sección de preguntas y respuestas para resolver cualquier duda que nos surja, todo en español. Las imágenes de sistemas operativos que ofrecen son las siguientes en las que se incluyen la opción de [Windows][windows] aunque siendo este un blog más afín al software libre recomiendo una de las versiones de [GNU][gnu]/[Linux][linux], una ventaja es que el precio es más barato. De [Ubuntu][ubuntu] hay múltiples versiones aunque siendo el propósito prestar un servicio durante periodos de tiempo largos lo recomendable es utilizar una versión <abbr title=”Long Term Support”>LTS</abbr> o de soporte prolongado:

* **CentOS 7**, 6, 5
* **Debian 8**, 7
* **Ubuntu 16.04**, 14.04 y versiones no LTS
* Docker (Ubuntu 14.04)
* Magento 2.0 (Ubuntu 16.04)
* Prestashop 1.6.x (Ubuntu 16.04)
* Plesk 12 (Ubuntu 14.04)
* Plesk 12 (Windows 2012 R2)
* Plesk 12.5 (Ubuntu 14.04)
* **Plesk Onyx** (17.0 Ubuntu 16.04)
* VestaCP 0.9.8 (Ubuntu 14.04)
* Windows 10 Professional (Español)
* Windows 2003 R2 Datacenter (English)
* Windows 2008 R2 Datacenter (English)
* Windows 2012 R2 Datacenter (English)
* **Windows 2016 Datacenter** (English)
* Windows 8.1 Professional (Español)

Para probar su servicio ofrecen un cupón de 5€, que con la opción más básica son unos 15 días de uso continuado para evaluar su servicio sin compromiso. El registro requiere validar una cuenta de correo electrónico, móvil y tarjeta de crédito. Requerir el móvil y la tarjeta de crédito para probar el servicio es algo excesivo pero quizá necesario para evitar _spam_ y usos no deseados. Realizado el registro ya está disponible el acceso al panel de administración desde el que crear nuevos servidores, arrancarlos, modificarlos, pararlos o eliminarlos.

{{< image
    gallery="true"
    image1="image:registro.png" optionsthumb1="300x200" title1="Pasos de verificación del registro"
    caption="Registro" >}}

Completado el registro accediendo al panel de administración en la sección servidores podremos crear las instancias y con que cantidad de recursos reservados, para ajustar el precio y dada la elasticidad de los servidores se puede empezar por las opciones mínimas e ir subiendo hasta que los recursos sean suficientes para el correcto funcionamiento de servidor según los recursos necesarios.

{{< image
    gallery="true"
    image1="image:panel-administracion.png" optionsthumb1="300x200" title1="Panel de administración"
    caption="Panel de administración" >}}

Como utilidad Clouding.io ofrece un panel donde gestionar los registros DNS del dominio que contratemos y conocer los nombre de _host_ y direcciones IP de los servidores de DNS de Clouding.io. Casi seguro que la entidad registradora del dominio que le asignemos al servicio para su acceso también tenga la opción de administrar los registros DNS, usar el de Clouding.io es más por unificar en un solo sitio toda la administración del servidor. En las opciones avanzadas se pueden administrar multitud de tipos de registro DNS.

{{< image
    gallery="true"
    image1="image:dns.png" optionsthumb1="300x200" title1="Administración DNS"
    caption="Administración DNS" >}}

La sección principal es la de _Servidores_ donde hay tres pestañas: una para los servidores, otra para las reglas de _firewall_ para controlar el tráfico entrante y saliente de cada servidor y otra para las _llaves SSH_ que usaremos para conectarnos desde nuestro equipo de forma segura. Seleccionado las características del servidor (memoria, procesadores y espacio en disco) al cabo de unos momentos el servidor se iniciará y estará disponible para que nos conectemos mediante SSH o desde la terminal con interfaz web ofrecida. Desde el listado de servidores podremos pararlo, reiniciarlo, redimensionarlo o eliminarlo. En la pestaña _Acceso_ obtendremos el nombre de _host_ asignado y la dirección IP privada y pública asignada, así como la contraseña del usuario _root_. En la pestaña _Estadísticas_ monitorizaremos el estado del servidor y conoceremos si es necesario redimiensionarlo en algún parámetro.

{{< image
    gallery="true"
    image1="image:servidor.png" optionsthumb1="300x200" title1="Parámetros de acceso de un servidor"
    image2="image:acceso.png" optionsthumb2="300x200" title2="Parámetros de acceso de un servidor"
    caption="Un servidor y sus parámetros de acceso" >}}
{{< image
    gallery="true"
    image1="image:nuevo-servidor.png" optionsthumb1="300x200" title1="Nuevo servidor"
    caption="Nuevo servidor" >}}

Las reglas del _firewall_ por defecto son demasiado permisivas, si solo necesitamos que el puerto 80, el del servidor web, esté abierto el resto de reglas para otros puertos se pueden eliminar para evitar posibles agujeros de seguridad. Una cosa buena es que se pueden crear múltiples reglas de seguridad y aplicar a cada servidor la más conveniente.

{{< image
    gallery="true"
    image1="image:firewall.png" optionsthumb1="300x200" title1="Reglas de firewall"
    caption="Reglas de firewall" >}}

Las llaves SSH son necesarias para conectarnos al servidor y lanzar comandos desde la terminal. Generada una llave SSH desde el apartado _Llaves SSH_ descargaremos la clave privada, la añadiremos al directorio _~/.ssh_ y configuraremos el archivo _~/.ssh/config_ para acceder al servidor.

{{< image
    gallery="true"
    image1="image:llaves-ssh.png" optionsthumb1="300x200" title1="Claves SSH"
    caption="Claves SSH" >}}
{{< code file="config" language="plaintext" options="" >}}
{{< code file="clouding.pem" language="plaintext" options="" >}}

En los ajustes veremos el saldo disponible que se irá descontando según los recursos consumidos durante el periodo de tiempo utilizados. Una cosa importante es que aunque el servidor esté apagado seguirá contabilizándose en la facturación. Podemos elegir recibir notificaciones cuando el saldo de la cuenta sea bajo para realizar una recarga.

{{< image
    gallery="true"
    image1="image:ajustes.png" optionsthumb1="300x200" title1="Ajustes, facturación e informes"
    caption="Ajustes, facturación e informes" >}}

Una de las primeras cosas aconsejables realizar es tener acceso mediante SSH descargando la clave privada desde le apartado _Llaves SSH_, con GNU/Linux no se necesita mucho más para conectarse al servidor, en Windows se puede utilizar un programa como [PuTTY][putty]. En cualquier caso siempre está disponible el acceso vía web. Otra de las cosas que a realizar es acceder al servidor SSH mediante un dominio propio que también con anterioridad hay que registrar. Y también es recomendable actualizar todos los paquetes o actualizaciones de seguridad del sistema.

{{< image
    gallery="true"
    image1="image:ssh.png" optionsthumb1="300x200" title1="Acceso mediante SSH"
    image2="image:consola-vnc.png" optionsthumb2="300x200" title2="Acceso mediante consola VNC"
    caption="Acceso mediante SSH y consola VNC" >}}

Con acceso vía SSH al servidor ya es posible administrarlo con una herramienta como [Ansible][ansible] instalando paquetes, actualizar el servidor y configurar servicios como los servidores web [nginx][nginx] o [Apache][apache-httpd], [Docker][docker] y otra multitud de tareas que permite esta herramienta.

{{< image
    gallery="true"
    image1="image:nginx.png" optionsthumb1="300x200" title1="Servidor NGINX"
    caption="Servidor NGINX" >}}

He encontrado en su blog algunos artículos interesantes y base de conocimiento. Otros artículos de interés son los que escribí en la [serie web][blogbitix-serie-web] en la que comentaba aspectos como HTTP/2, HTTPS, redirecciones o GZIP.

En definitiva Clouding.io es una opción de computación en la nube sencilla, con una política de precios simple y adecuada para proyectos desde pequeños de páginas web y presencia en internet hasta medianos que requieren una base de datos y tenga un tráfico ya notable, con soporte en español y que se puede probar sin compromiso. Al ser computación en la nube ofrece gran flexibilidad y ajustar el precio a los recursos consumidos, al usar discos SSD el buen rendimiento ya lo he notado al probar su servicio cuando he actualizado los paquetes del servidor e instalado el de nginx. Según las características anunciadas de redundancia la fiabilidad es destacable para que no haya caídas de servicio.

{{% /post %}}
