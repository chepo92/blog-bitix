---
pid: 155
type: "post"
title: "Cómo optimizar un sitio web con compresión GZIP en Nginx y Apache HTTPD"
url: "/2016/07/como-optimizar-un-sitio-web-con-compresion-gzip-en-nginx-y-apache-httpd/"
date: 2016-07-02T12:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:nginx.svg"
tags: ["planeta-codigo", "software", "software-libre", "web"]
summary: "Comprimir el contenido es de utilidad para aquellos usuarios a los que se les factura por los datos transmitidos o tienen límites de transferencia en sus contratos con los proveedores de banda ancha o red móvil. Modificando la configuración del servidor web que usemos haremos que nuestra página o aplicación web comprima el contenido que envía a los navegadores de los usuarios reduciendo los datos transferidos y optimizando el sitio web."
---

{{% post %}}

{{< logotype image1="nginx.svg" title1="Nginx" width1="300" image2="apache.svg" title2="Apache HTTPD" width2="200" >}}

Con las velocidades de transferencia que proporciona la fibra, el ADSL incluso el 4G o 3G de los móviles transmitir el contenido de una web desde el servidor al cliente ya no es el factor más determinante en el tiempo de carga de una página, lo es más la latencia de la red y el establecimiento de múltiples conexiones. Aún así hay usuarios que por una red de baja calidad o que esté saturada pueden tener tasas de transferencia bajas o puede que al usuario se le facture por la cantidad de datos que transmite. Por estos motivos aún hoy es buena idea activar en el servidor la compresión GZIP para que los datos transmitidos se compriman y reduzcan de forma significativa. La compresión GZIP es una optimización que podemos realizar para cualquier página web. Para mejorar la latencia en el establecimiento de conexiones es aconsejable [configurar HTTP/2 en el servidor web][blogbitix-129] para mejorar la velocidad de carga de la página.

Dependiendo del servidor web la configuración que deberemos añadir será diferente, en este artículo mostraré la configuración a usar para dos de los servidores web más populares en internet, que son [Nginx][nginx] y [Apache HTTPD][apache-httpd].

### Nginx

Usando varias [directivas de Nginx para la compresión](http://nginx.org/en/docs/http/ngx_http_gzip_module.html) la activamos, establecemos el nivel de compresión, el tamaño de los _buffers_ dedicados a la compresión y finalmente los _mimetypes_ de los archivos que queremos sean comprimidos antes de enviarse al cliente (el texto plano, contenido CSS, JSON, XML, RSS y JavaScript). El _mimetype_ _text/html_ no hace falta indicarlo porque siempre está activo y para los formatos de archivos que ya están comprimidos es innecesario como fotos o vídeos.

{{< code file="nginx.conf" language="plaintext" options="" >}}

Para probarlo usaré un contenedor de [Docker][docker] en el que personalizaré la configuración y usaré mi propia bitácora como página web a servir. Para conocer Docker puedes consultar otra [serie de artículos sobre Docker][blogbitix-serie-docker] dedicados a esta tecnología de contenedores. Escrito el archivo de configuración, el contenedor se inicia con:

{{< code file="docker-nginx.sh" language="bash" options="" >}}

En la siguiente captura se aprecia que Nginx devuelve la cabecera de respuesta _Content-Enconfing: gzip_ indicando que el contenido ha sido comprimido antes de su transmisión por la red. Haciendo que Nginx haga de servidor web para mi propia bitácora se pueden apreciar la significativa diferencia en kilobytes transmitidos entre el tamaño que tienen y lo transferido para algunos recursos. Por ejemplo, el HTML de la página de inicio tiene un tamaño sin comprimir de 34,11 KB y comprimido un tamaño mucho menor 8,38 KB, una diferencia de 25,73 KB aproximadamente un ratio de compresión del 75%. Para el recurso _bootstrap.min.css_ que ya está minificado eliminando caracteres innecesarios es aún más significativo de 118,43 KB a 23,36, 95,04 KB menos un 80% de reducción.

Unos pocos kilobytes no son mucho para un único recurso pero si tenemos en cuenta que una página tiene varias docenas y hacemos una multiplicación por cada acceso a una página la cantidad de datos ahorrados en la transferencia es notable.

{{< image
    gallery="true"
    image1="image:nginx-no-gzip.png" optionsthumb1="300x200" title1="Nginx configurado sin compresión GZIP"
    image2="image:nginx-gzip.png" optionsthumb2="300x200" title2="Nginx configurado con compresión GZIP"
    caption="Nginx configurado sin y con compresión GZIP" >}}

### Apache HTTPD

Activado el módulo para realizar la compresión al igual que el caso de Nginx podemos establecer la cantidad de memoria reservada para la compresión, el nivel de compresión y los _mimetypes_ del contenido a comprimir. Con las [directivas adicionales de la documentación](http://httpd.apache.org/docs/current/mod/mod_deflate.html) se puede personalizar aún más el proceso de compresión.

{{< code file="httpd.conf" language="plaintext" options="" >}}
{{< code file="docker-httpd.sh" language="bash" options="" >}}

Vemos una reducción en la transferencia similar a la conseguida en Nginx. En Apache el recurso a servir ha de tener cierto tamaño siendo de unos pocos bytes opta por servirlo sin comprimir ya que considerará que no producirá un ahorro significativo.

{{< image
    gallery="true"
    image1="image:apache-httpd-no-gzip.png" optionsthumb1="300x200" title1="Apache HTTPD configurado sin compresión GZIP"
    image2="image:apache-httpd-gzip.png" optionsthumb2="300x200" title2="Apache HTTPD configurado con compresión GZIP"
    caption="Apache HTTPD configurado sin y con compresión GZIP" >}}

La compresión se hace en cada petición que se hace al servidor que con los avanzados procesadores actuales con eficientes instrucciones específicas para la tarea implementadas en el hardware salvo un tráfico muy elevado no tiene por que notarse en gran medida el procesado de cada recurso. Si el tráfico fuese elevado y la carga de compresión se notase Nginx y Apache ofrecen la posibilidad de [precomprimir los recursos](http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html) y de forma similar [precomprimir los recursos en apache](http://httpd.apache.org/docs/current/mod/mod_deflate.html#precompressed).

La compresión es otra de las configuraciones básicas aconsejable hacer en un servidor web junto con:

* Añadir cifrado y autenticación con TLS/SSL.
* Añadir el soporte para el protocolo HTTP/2 que ya incluyen los navegadores.
* Redirigir el tráfico del dominio raíz al subdominio www.
* Redirigir el tráfico de HTTP a HTTPS.

Estas funcionalidades las puedes consultar en el resto de artículos de la [serie web][blogbitix-serie-web].

{{< sourcecode git="blog-ejemplos/tree/master/CompresionGzip" command="./docker-nginx.sh o ./docker-httpd.sh" >}}

{{< reference >}}
* [Module ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)
* [Apache Module mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html)
* [How To Optimize Your Site With GZIP Compression](http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/)
{{< /reference >}}

{{% /post %}}
