---
pid: 76
type: "post"
title: "Nueva visita a 5+ opciones de «hosting» para aplicaciones"
url: "/2015/04/nueva-visita-a-5-plus-opciones-de-hosting-para-aplicaciones/"
date: 2015-04-17T19:56:10+02:00
updated: 2018-04-05T19:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:hugo.svg"
tags: ["programacion", "planeta-codigo"]
summary: "En esta nueva revisión de las opciones de alojamiento que disponemos incluyo algunas nuevas que en su momento no conocía. Dependiendo de las necesidades y del presupuesto que tengamos podemos optar por un servidor propio, un proveedor de _hosting_, usar alguna de las nubes más utilizadas o algún otro PaaS o IaaS."
---

{{% post %}}

Hace tres años escribí un artículo sobre [varias opciones de _hosting_][elblogdepicodev-5-opciones-de-hosting-para-aplicaciones] que disponemos para hospedar aplicaciones o páginas web. En ese artículo comentaba varias posibilidades desde un servidor propio usando una  Raspberry Pi, proveedores de _hosting_, [Amazon EC2][amazon-ec2], [Google App Engine][google-appengine], [Jelastic][jelastic], [OpenShift][openshift], [AppFog][appfog], [Cloud Foundry (VMWare)][cloudfoundry], [Heroku][heroku], [Azure (Microsoft)][microsoft-azure] y [Google Compute (Google Cloud Platform)][google-compute]. Pasado todo este tiempo en este artículo revisaré las opciones de hospedaje con algunas nuevas que en su momento no conocía, otras siguen siendo totalmente válidas.

### Servidor propio

Si queremos una opción para algo simple y para nosotros mismos podemos utilizar un servidor propio usando como _hardware_ por ejemplo una [Raspberry Pi 4](https://amzn.to/2umoNav), con la segunda versión de este miniordenador que ahora tiene 4 núcleos y 1 GiB de memoria puede servirnos para cantidad de cosas interesantes. Además de la Raspberry Pi 2 hay multitud de dispositivos similares, en la [página de Arch Linux ARM][archlinuxarm] podemos ver los modelos soportados en esta distribución. Otro modelo destacado es la [Cubox-i](http://www.solid-run.com/products/cubox-i-mini-computer/cubox-i-specifications/) también con 4 núcleos y en el modelo más potente con 2 GiB de memoria aunque bastante más caro que la Raspberry Pi.

Uno de los usos para los que nos puede servir es para albergar con [ownCluod][owncloud] tu información personal como archivos, fotos, calendarios, contactos pudiendo acceder desde cualquier dispositivo ya sea el ordenador personal, teléfono inteligente o dispositivo móvil. Su punto a favor es que tus datos están bajo tu control. Aunque esta opción es posible se puede optar por otras opciones que comento más adelante, uno de los motivos es que no es fiable el servicio que podemos ofrecer ya que depende la conexión a internet que podemos tener en nuestra casa y por los cortes de corriente que se pueden producir o los fallos en el _hardware_ que puede provocar que perdamos los datos si no tenemos copias de seguridad.

Con esta opción tendremos un control total del _software_ instalado sin ninguna limitación, sin embargo, si necesitamos escalar la aplicación tendremos más dificultades si necesitamos comprar _hardware_ nuevo.

{{< image
    gallery="false"
    image1="logotype:raspberrypi.svg" optionsthumb1="137x168" title1="Raspberry Pi" >}}

### Proveedor de _hosting_

La siguiente opción a considerar puede ser un servidor ofrecido por muchos registradores de dominios. Si el tráfico del servicio que planeamos ofrecer no es muy alto (y así serán en los inicios) es una opción adecuada. En la mayoría de las opciones de este tipo estaremos limitados en el lenguaje de programación que podremos usar generalmente [PHP][php] o la base de datos generalmente [MySQL][mysql].

Mucha gente usa esta opción para albergar su bitácora con [WordPress][wordpress] que incluso para un tráfico considerable es suficiente, por supuesto es válida para las empresas que quieran tener presencia en internet aunque solo sea para incluir su dirección teléfono de contacto y una breve descripción y los productos que ofrece. Para estos usos el coste de esta opción puede estar entre 1€/mes y 20€/mes aparte del coste del dominio.

Hay multitud de proveedores algunos de los más conocidos son [DonDominio][dondominio], [Arsys][arsys], [Piensa Solutions][piensasolutions], ... pero ninguno de estos y en otros casos muy pocos ofrecen _hosting_ para aplicaciones de la plataforma Java. No tendremos libertad en la tecnología que usamos ni siquiera en las versiones de la misma.

Una opción es el [_hosting_ Java](https://www.anw.es/alojamiento-web/alojamiento-hosting-java.html) de [anw](https://www.anw.es) que tiene unas opciones interesantes que no poseen otros a unos precios similares a los que se ofrecen en este tipo de _hosting_, en algunos apartados superiores a la competencia como la RAM o cuota de [MySQL][mysql]. A destacar las opciones de tener una máquina virtual de Java dedicada con una versión específica, incluye el dominio gratis y con una centena de cuentas de correo, posibilidad de certificado SSL con [Let's encrypt][letsencrypt], pudiendo elegir entre varios de los más populares servidores de aplicaciones Java ([Tomcat][tomcat], [Glassfish/Payara][payara] o [WildFly][wildfly]), varias cantidades de memoria RAM según el plan contratado que en picos de carga puntuales pueden ser sobrepasados sin caída de servicio como ocurriría en otras opciones y base de datos MySQL. Poseen un [panel de administración](https://www.youtube.com/watch?v=aZFC_8MyLeM) con el que administrar la versión del JDK, el servidor de aplicaciones y la aplicación. Es una opción sencilla contando con soporte técnico sin necesidad de tener que administrar el servidor como en otras opciones de _hosting_ pero en la que se posee un buen control de la aplicación. En otras opciones ofrecen también alojamiento web con el popular [WordPress][wordpress].

### Amazon EC2, Azure, Google Cloud

Si la aplicación o proyecto crece las nubes de [Amazon EC2][amazon-ec2], [microsoft-azure][microsoft-azure] y [Google Cloud][google-cloud] se adaptan a las necesidades que tengamos ahora y, mejor aún, en el futuro. Y si en un futuro es necesario nos proporcionan flexibilidad pudiendo ampliar o reducir los recursos consumidos. Son algo más caras que otras opciones pero por lo que ofrecen son buenas opciones, por ejemplo, Amazon EC2 ofrece [varios servicios](http://aws.amazon.com/es/products/) que enriquecen su oferta de [infraestructura como servicio][iaas] (IaaS, _Infrastructure as a service_). En estas opciones de IaaS tendremos gran control sobre el _software_ que instalamos, deberemos tener en cuenta que los datos que maneja la aplicación estarán hospedados en los sistemas de la nube elegida.

En estas opciones IaaS tenemos libertad de elegir el lenguaje de programación que queremos emplear para en la aplicación ya sea [Java][java], [PHP][php], [Python][python], [C#][csharp] o [Ruby][ruby], ... también tendremos libertad en la base de datos [MySQL][mysql], [PosgreSQL][postgresql], [Redis][redis], ... o en el servidor de aplicaciones o servidor web.

En Amazon EC2 el coste puede variar dependiendo de los recursos que reservemos, para una aplicación mediana una instancia _t1.small_ con 2GiB de memoria reservada previamente y 50 GiB de espacio de disco SSD durante 3 años cuesta unos 332.00€ por reservar la instancia durante ese periodo y unos 2€ adicionales al mes, a esto deberemos sumar el coste del dominio. En la [calculadora de Amazon EC2](http://calculator.s3.amazonaws.com/index.html) podemos estimar el coste según los recursos que necesitemos.

{{< image
    gallery="false"
    image1="logotype:amazon-web-services.png" optionsthumb1="268x118" title1="Amazon Web Services"
    image2="logotype:microsoft-azure.png" optionsthumb2="218x118" title2="Microsoft Azure"
    image3="logotype:google-cloud.png" optionsthumb3="401x66" title3="Google Cloud" >}}

### Linode, Digital Ocean

Algunas opciones totalmente válidas para muchos casos que también nos proporcionan flexibilidad son [Linode][linode] y [Digital Ocean][digital-ocean], también entran dentro de la categoría de IaaS. El coste de los planes ofrecidos por cada una de estas es muy sencillo en Linode empieza desde los 10€/mes hasta los 80€/mes y en Digital Ocean desde los 5€/mes pasando por los 80€/mes hasta los 640€/mes. Salvo los planes de volúmenes altos de Digital Ocean los precios son similares a Linode según las características disponibles en ambos.

Estas opciones son totalmente válidas tanto para proyectos personales como un blog con WordPress como para proyectos profesionales. La nube de Amazon ofrece multitud de servicios que en algunos casos son útiles pero si no nos son necesarios las opciones comentadas en este apartado serán suficientes y algo más baratas.

{{< image
    gallery="false"
    image1="logotype:linode.png" optionsthumb1="268x117" title1="Linode"
    image2="logotype:digital-ocean.png" optionsthumb2="218x144" title2="Digital Ocean" >}}

### Otras

Hay otro tipo de opciones conocidas como [plataforma como servicio][paas] (PaaS, _Platform as a service_) como [OpenShift][openshift], [AppFog][appfog], [Cloud Foundry][cloudfoundry], [Heroku][heroku]. De entre estas destacaré OpenShift ya que proporciona una capa gratuita con la que tendremos lo que ellos denominan _gears_, nos ofrecen gratuitamente 3 con 512 MiB de memoria y 1 GiB de espacio en disco. Esta opción es la que he utilizado para construir [Blog Stack][blogstack], en el artículo [Arquitectura y hospedaje de Blog Stack][blogbitix-24] detallo técnicamente el proyecto en el que el único coste es el dominio (12€/año).

### Notas finales

Las opciones son múltiples para hospedar nuestra aplicación. Si se trata de algo para uso personal una Raspberry Pi pueda valernos, si se trata de una web presencial estática que no requiera programación un proveedor de _hosting_ será suficiente. Si queremos tener flexibilidad y más libertad en las herramientas del proyecto las nubes de Amazon, Azure o Google nos servirán. Si no necesitamos todos los servicios de los anteriores Linode o Digital Ocean ofrecen unos planes de precios muy sencillos y previsibles. Finalmente están los PaaS que permiten desentendernos de la infraestructura y centrarnos en la aplicación.

{{< reference >}}
* [5 opciones de hosting para aplicaciones Java](https://elblogdepicodev.blogspot.com.es/2012/02/5-opciones-de-hosting-para-aplicaciones.html)
* [Arquitectura y hospedaje de Blog Stack][blogbitix-24]
{{< /reference >}}

{{% /post %}}
