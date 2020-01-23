---
pid: 446
type: "post"
title: "Nube privada para documentos personales con Nextcloud y OnlyOffice"
url: "/2019/12/nube-privada-para-documentos-personales-con-nextcloud-y-onlyoffice/"
aliases: ["/2019/12/nube-privada-de-documentos-personales-con-nextcloud-y-onlyoffice/"]
date: 2019-12-05T12:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:nextcloud-inicio.png"
tags: ["planeta-codigo", "software", "software-libre"]
summary: "Empresas como Google ofrecen servicios gratuitos que los usuarios pueden utilizar, algunos de ellos a cambio de entregrarles documentos con información personal con la consiguiente potencial pérdida de privacidad. Algunos de estos servicios son sustituibles con alternativas como Nextcloud y OnlyOffice que permiten a sus usuarios ser dueños de su información ya sea utilizando una Raspberry Pi como servidor que debe ser administrada o incluso en la nube con servicios como DigitalOcean o AWS."
---

{{% post %}}

{{< logotype image1="nextcloud.svg" title1="Nextcloud" width1="200" image2="onlyoffice.svg" title2="OnlyOffice" width2="200" >}}

Una cuenta de Google da acceso a múltiples servicios gratuitos, útiles y con un servicio más que correcto. Algunas de estos servicios está el de correo electrónico de [GMail][google-gmail], la sincronización y unidad de documentos de [Google Drive][google-drive], calendario para apuntar citas y recordatorios con [Google Calendar][google-calendar], el acceso a la _suite_ ofimática colaborativa [Google Docs][google-docs] o fotos con [Google Photos][google-photos]. Estos son los servicios que uso de Google por su comodidad.

Los servicios en la nube permiten guardar los documentos e información fuera del dispositivo donde se usen, esto permite tener sincronizados y compartir todos los documentos entre varios dispositivos como el ordenador personal en casa, tener disponibles los documentos en el ordenador del trabajo y en un dispositivo móvil como un _smartphone_ en cualquier lugar. El problema de los servicios en la nube es que no somos realmente propietarios de nuestra información y documentos, son entregados a esos servicios como los de Google, esto genera una pérdida de privacidad sin ser conscientes de los usos que le pueda dar Google. Para proteger nuestra privacidad hay alternativas para disponer de nuestra propia nube que proporcione la mayoría de estos servicios.

[Nextcloud][nextcloud] es un software que permite alojar en nuestro propio servidor nuestros documentos sustituyendo a varios de los servicios de Google. Nextcloud permite almacenar archivos y documentos ofimáticos, fotos, música, calendarios, un visor de PDF, editor de _markdown_, gestor de tareas o nuestros contactos. Permite complementos con los que añadir las funcionalidad que necesitemos como un reproductor de música o un paquete ofimático con [OnlyOffice][onlyoffice] que sustituya a Google Docs.

Una [Raspberry Pi 4][raspberrypi] o una de sus [7 computadoras alternativas][blogbitix-304] similares es una buena opción como servidor por su pequeño tamaño, bajo consumo, totalmente silencioso con un recomendable disipador pasivo y suficiente para ejecutar con normalidad Nexcloud con los 4 GiB de memoria del modelo con más capacidad. Hay [otras placas similares][blogbitix-304] o incluso se puede utilizar un [Intel NUC][blogbitix-363] que permiten más cantidad de memoria y sus procesadores son más capaces. Para una nube privada una Raspberry Pi es interesante por su pequeño tamaño y bajo consumo eléctrico dado que su funcionamiento sería constante.

{{< amazon
    linkids="6e87726b77e92056e7ac168add1bc747,bef0fad42b2cc046799c66f7fa220c0f,d64d66fda7d25defd2018c4119aa7e46,df5c52be4ca21b9991d26145edb0b642,39ee0802cdc202ce8259d463b59224ed"
    asins="B07TC2BK1X,B07XNVPK8X,B073JWXGNT,B014I8U33I,B07VMXHJ4Q" >}}

Usando [Docker][docker] y el [repositorio de GitHub](https://github.com/ONLYOFFICE/docker-onlyoffice-nextcloud) es sencillo iniciar el servidor de Nextcloud realizando los siguientes pasos.

* Instalar Docker.
* Descargar o clonar el repositorio de GitHub.
* Iniciar con Docker Compose los contenedores de Nextcloud y OnlyOffice.
* Acceder _http\://localhost_ y realizar la configuración incial, introducir el usuario y contraseña de administrador.
* Ejecutar _bash set_configuration.sh_.
* Añadir el complemento de OnlyOffice.
* Acceder a _http\://localhost_.

Este archivo de Docker Compose incluye Nextcloud con OnlyOffice sin usar una base de datos externa.

{{< code file="docker-compose.yml" language="yaml" options="" >}}
{{< code file="docker-compose-up.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:nextcloud-configuracion.png" optionsthumb1="300x200" title1="Configuración de Nextcloud"
    image2="image:nextcloud-inicio.png" optionsthumb2="300x200" title2="Inicio de Nextcluod"
    image3="image:nextcloud-archivos.png" optionsthumb3="300x200" title3="Archivos en Nextcloud"
    caption="Configuración y archivos en Nextcloud" >}}

[OnlyOffice es un paquete ofimático alternativa a Microsoft Office][blogbitix-143] que ofrece un editor de documentos de texto, una hoja de cálculo y una aplicación para realizar presentaciones integrables en Nextcloud. Son aplicaciones con menos opciones que las ofrecidas por Microsoft Office pero suficientes para un uso sencillo, también dispone de una versión como aplicaciones de escritorio.

{{< image
    gallery="true"
    image1="image:nextcloud-onlyoffice-documento.png" optionsthumb1="300x200" title1="Documento con OnlyOffice"
    image2="image:nextcloud-onlyoffice-hoja-de-calculo.png" optionsthumb2="300x200" title2="Hola de cálculo con OnlyOffice"
    image3="image:nextcloud-onlyoffice-presentacion.png" optionsthumb3="300x200" title3="Presentación con OnlyOffice"
    caption="Ofimática con OnlyOffice y Nextcloud alternativa a Google Docs" >}}

Otras utilidades es un reproductor de música, calendario o galería de fotos, hay un complemento para añadir estas funcionalidades.

{{< image
    gallery="true"
    image1="image:nextcloud-visor-pdf.png" optionsthumb1="300x200" title1="Visor de documento PDF"
    image2="image:nextcloud-calendario.png" optionsthumb2="300x200" title2="Calendario"
    image3="image:nextcloud-visor-fotos.png" optionsthumb3="300x200" title3="Vidor de fotos"
    caption="Aplicaciones y complementos" >}}

Con [WebDAV](https://en.wikipedia.org/wiki/WebDAV) los documentos son accesibles como si fuese una unidad local proporcionando la misma funcionalidad de Google Drive. En GNOME con el explorador de archivos Nautilus es posible conectarse a dispositivo WebDAV, en el caso de Nextcloud la dirección es _dav\://localhost/remote.php/dav/files/admin_.

{{< image
    gallery="true"
    image1="image:nextcloud-webdav.png" optionsthumb1="300x200" title1="Archivos en el explorador de archivos Nautilus con WebDAV"
    image2="image:nextcloud-administracion.png" optionsthumb2="300x200" title2="Opciones de administración"
    caption="Archivos en el explorador de archivos Nautilus con WebDAV y opciones de administración" >}}

Con las [aplicaciones para _smatphone_](https://nextcloud.com/install/#) los documentos quedan accesibles en cualquier lugar teniendo un dispositivo móvil, _smartphone_ o tableta. Tener una nube propia que esté accesible en internet hace necesario tener un dominio propio, añadir seguridad para lo que es necesario configurar Nextcloud de modo que utilice el protocolo seguro que cifre las comunicaciones con TLS, esto requiere obtener [un certificado autofirmado][blogbitix-13] al menos o mejor obteniendolo de [Let's Encrypt][letsencrypt], que proporciona certificados de forma automatizada y gratuita. Otra medida para aumentar la seguridad es utilizar un segundo factor de autenticación o _2FA_.

Hay [ejemplo de archivo de Docker Compose para tener Nexcloud con un certificado](https://github.com/nextcloud/docker/blob/master/.examples/docker-compose/with-nginx-proxy/postgres/fpm/docker-compose.yml) creado y renovado de forma automática con Let's Encrypt a través del contenedor [jrcs/letsencrypt-nginx-proxy-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion) y configurando las variables de entorno _LETSENCRYPT\_HOST_, _LETSENCRYPT\_EMAIL_ con el dominio propio para Nexcloud y un correo electrónico.

{{< reference >}}
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
