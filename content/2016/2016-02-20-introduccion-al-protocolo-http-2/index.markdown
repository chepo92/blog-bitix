---
pid: 127
type: "post"
title: "Introducción al protocolo HTTP/2"
url: "/2016/02/introduccion-al-protocolo-http-2/"
date: 2016-02-20T20:00:00+01:00
updated: 2016-02-26T21:10:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache.svg"
tags: ["planeta-codigo", "web"]
summary: "La tecnología avanza inexorablemente respondiendo a nuevas necesidades o mejor a las existentes. El protocolo HTTP se ha mantenido sin grandes cambios durante más de 15 años, sin embargo, para reducir las latencias en la carga de las páginas y ser más eficiente se ha desarrollado una nueva especificación que ya promete reducir estos problemas. HTTP/2 no es compatible hacia atrás pero se puede usar junto con HTTP 1.1 y los dispositivos que usen aprovecharse de sus ventajas. Los navegadores más populares ya lo han implementado y los servidores web o de aplicaciones ya ofrecen soporte para ser usado."
---

{{% post %}}

La velocidad de carga de una web en el navegador es importante, tanto que añadir unos pocos cientos de milisegundos en un sitio de comercio electrónico afecta en un porcentaje significativo el abandono, la conversión y en definitiva las compras que se realizan. Un tiempo de más de 100ms ya es percibido por los usuarios. Por este motivo además Google lo tiene en cuenta a la hora del posicionamiento en su buscador, con lo que mejorar y tener un tiempo de carga bajo de las páginas producirá más compras y más visitas por tráfico orgánico que se traducirá también en más compras.

Desde hace quince años el protocolo usado para la transferencia desde el servidor al navegador del HTML, CSS, JavaScript, imágenes y demás recursos de la página ha sido el [protocolo de transferencia de hypertexto](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol) o HTTP. Con el cada vez mayor ancho de banda que ofrece mayores velocidades de transferencia de los dispositivos conectados a internet el tiempo de carga de una página ha dejado de estar tan limitado por la velocidad de transferencia a ser la latencia una parte importante del tiempo. Con el objetivo de disminuir la latencia y el tiempo de carga de las páginas se publicó primero el protocolo [SPDY](https://es.wikipedia.org/wiki/SPDY) y posteriormente basado en él HTTP/2 en mayo de 2015 con varias mejoras.

HTTP/2 no mofidifica la semántica de protocolo HTTP con lo que los conceptos de métodos HTTP, códigos de estado, URIs y cabeceras siguen siendo los mismos. Algunas de las mejoras que ofrece son:

* Multiplexación y concurrencia: solo es necesaria una conexión <abbr title="Transmission Control Protocol">TCP</abbr> para enviar todos los recursos de la página, además la transmisión de varios recursos es posible que sea simultánea sin necesidad de que termine una para iniciar otra lo que evita el problema _head-of-line blocking_ de HTTP 1.1 que era ordenado y bloqueante.
* Descarga de dependencias: el cliente puede priorizar los recursos.
* Compresión de cabeceras: para reducir la sobrecarga de las cabeceras en cada petición se consigue de dos formas, usando un algoritmo de compresión y evitando enviarlas según los valores anteriores transmitidos.
* Envío desde el servidor: el servidor proactivamente puede enviar recursos al cliente para que sean cacheados.

Una diferencia que lo hace incompatible hacia atras es que es binario pero se puede usar junto con la versión anterior y cuando se establezca la conexión negociando el protocolo elegir el mejor según las características de ambas partes, los protocolos binarios son más eficientes de procesar, más compactos e igual de importante menos propensos a errores comparados los los basados en texto.

Establecer una conexión TCP requiere 3 paquetes entre el cliente y servidor reduciendo el número de ellas la latencia baja. Si la distancia entre el cliente y el servidor es lejana simplemente por cuestiones físicas de la velocidad a la que viaja la luz o los impulsos eléctricos, la latencia entre ellos estando situados en las antípodas es de unos 300-400ms (por paquete). Simplemente con la multiplexación y la concurrencia se reduce considerablemente esta sobrecarga en la transmisión al evitar tener que establecer varias conexiones. Además, tiene otras mejoras para los desarrolladores y hace innecesarias algunas de las optimizaciones que se realizaban con HTTP 1.1, como:

* Ya no es necesario concatenar ficheros eliminado el problema _head-of-line blocking_ y pudiendo transmitir varios ficheros simultáneamente.
* Ya no es necesario incluir el contenido de estilos, imágenes y JavaScript junto con el HTML para evitar conexiones TCP adicionales, igual que en la concatenación de ficheros.
* Ya no es necesario usar múltiples dominios para paralelizar la descarga.

Algunas prácticas de optimización siguen siendo utilizables:

* Reducir consultas <abbr title="Domain Name System">DNS</abbr> por la latencia de envío de paquetes.
* Seguir usando redes de descarga de contenido o <abbr title="Content Delivery Network">CDN</abbr>, cuanto más cercano esté el servidor del cliente menor será la latencia impuesta por las leyes físicas.
* Seguir usando la caché del cliente evitando retransmitir el recurso.
* Minimizar el contenido de los recursos, menor será las cantidad de datos a transmitir y procesar.
* Eliminar redirecciones innecesarias.

Aunque para usar HTTP/2 no es necesario usar cifrado <abbr title="Transport Layer Security ">TLS</abbr> los navegadores [Firefox][firefox], [Micrsoft Edge][microsoft-edge] y [Google Chrome][google-chrome] han anunciado que en sus implementaciones solo lo soportarán si se usa con cifrado TLS.

En un capítulo del libro  [High Performance Browser Networking](http://chimera.labs.oreilly.com/books/1230000000545/ch12.html), en [HTTP/2 explicado](https://bagder.gitbooks.io/http2-explained/content/es/index.html) y en la sección de referencia del final del artículo se detallan más los conceptos del protocolo HTTP/2.

En definitiva el protocolo HTTP/2 supone una mejora de rendimiento para los clientes y optimización de recursos tanto para los clientes como para los servidores. Ya está implementado por los navegadores más populares y añadiendo el soporte en lado del servidor los clientes compatibles se beneficiarán de él.

En el siguiente artículo comentaré cómo poner esto en práctica y [configurar HTTP/2 con el servidor web Nginx, Apache HTTPD y el servidor de aplicaciones Java WildFly o Jetty][blogbitix-129].

{{< reference >}}
* [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2)
* [HTTP](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [HTTP/2 FAQ](https://http2.github.io/faq/)
* [High Performance Browser Networking - HTTP/2](http://chimera.labs.oreilly.com/books/1230000000545/ch12.html)
* [Libro HTTP/2 explicado](https://bagder.gitbooks.io/http2-explained/content/es/index.html)
* [Introducing HTTP/2](https://blog.cloudflare.com/introducing-http2/)
* [CloudFlare HTTP/2](https://www.cloudflare.com/http2/)
* [HTTP/2 For Web Developers](https://blog.cloudflare.com/http-2-for-web-developers/)
* [Tools for debugging, testing and using HTTP/2](https://blog.cloudflare.com/tools-for-debugging-testing-and-using-http-2/)
* [Configurar SSL/TLS en un servidor Tomcat, JBoss, WildFly, Lighttpd, Nginx o Apache][blogbitix-14]
{{< /reference >}}

{{% /post %}}
