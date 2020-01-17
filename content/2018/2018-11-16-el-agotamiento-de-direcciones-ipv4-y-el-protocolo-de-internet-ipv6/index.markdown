---
pid: 361
type: "post"
title: "El agotamiento de direcciones IPv4 y el protocolo de internet IPv6"
url: "/2018/11/el-agotamiento-de-direcciones-ipv4-y-el-protocolo-de-internet-ipv6/"
date: 2018-11-16T19:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:nat.png"
tags: ["planeta-codigo"]
summary: "Las direcciones IP de IPv4 que identifican a las computadoras de forma uniquivoca para comunicarse entre si son limitadas y ya se han agotado. Aún siendo casi 4300 millones con el auge de internet en la última década y la que se espera en los próximos años con los dispositivos móviles y los elementos conectados del internet de las cosas la presión sobre el número de direcciones IP será aún mayor. Hasta ahora varias medidas paliativas han permitido mitigar la presión y extender la disponibilidad de direcciones IP. Uno de los principales motivos del desarrollo del protocolo IPv6 es aumentar en varios órdenes de magnitud el número de las direcciones IP disponibles, siendo en este protocolo direcciones de 128 bits en vez de 32 como IPv4. Sin embargo, hay varios motivos por los que aún IPv6 no se está usando ya de forma masiva."
---

{{% post %}}

El protocolo mediante el cual las computadoras intercambian datos mayoritariamente es el [protocolo IPv4][wikipedia-ipv4]. Este protocolo identifica a cada máquina conectada a internet mediante una dirección IP que es un número de 32 bits normalmente escrito en cuatro grupos decimales para ser más fácilmente recordados por los humanos, por ejemplo, _192.169.1.56_. La dirección IP pública que tenemos asignada la podemos obtener de páginas como [cual-es-mi-ip](https://www.cual-es-mi-ip.net/). Un número binario de 32 bits da un máximo teórico de 4.294.967.296 posibles direcciones IP. En la época en que fué desarrollado las primeras redes de computadoras este número parecía adecuado y suficiente, sin embargo, con el éxito de internet y el crecimiento del número de dispositivos conectados el número de direcciones IP libres ya se ha agotado.

> 11111111.11111111.11111111.11111111<br>
> 255.255.255.255<br>
> 127.0.0.1 (dirección _loopback_)

El problema de agotamiento de direcciones IPv4 no es nuevo y ya desde hace alguna década se estaba advirtiendo e implementando medidas en el protocolo para retrasar durante algún tiempo el llegar a agotar las direcciones. Algunas de estas medidas son [CIDR][wikipedia-cidr] y [NAT][wikipedia-nat]. CIDR permite aprovechar mejor o no desperdiciar tantas direcciones IP en los grupos de direcciones estableciendo una máscara para determinar cuál es la parte de dirección de red y cual es la dirección del host dentro de esa red, con CIDR las direcciones IP se identifican con el siguiente formato _255.255.255.255 /8_ donde el último número determina que número de bits corresponden a la dirección de red y que parte a los _hosts_ de esa red, en este caso 24 bits corresponden a la red y 8 bits a identificar al _host_ hasta llegar a 32 bits. NAT permite a los dispositivos de una red compartir la misma dirección IP al conectarse a otras redes o internet, de esta forma en vez de requerirse una dirección pública por cada dispositivo de la red solo es necesaria una para todos los equipos, en los hogares es el enrutador o _router_ el dispositivo el que hace NAT y el que tiene la dirección IP pública asignada. NAT no está exento de inconvenientes ya que los equipos externos a una red no pueden contactar directamente a los equipos internos de una red en la que se hace NAT, para ello hay que usar activación o reenvío de puertos que los _routers_ ofrecen en su panel de administración. Incluso algunos proveedores de internet están implementado un NAT a nivel de proveedor conocido como [CG-NAT][wikipedia-cgnat] para usar una o unas pocas direcciones IP para todos los usuarios del proveedor. A este nivel está llegando la escasez de direcciones IP del protocolo IPv4.

{{< image
    gallery="true"
    image1="image:nat.png" optionsthumb1="300x200" title1="Panel de un router para hacer NAT"
    caption="Panel de un router para hacer NAT" >}}

La solución a largo plazo para la escasez de direcciones IP del protocolo IPv4 es usar una nueva versión de protocolo conocida como [IPv6][wikipedia-ipv6]. En IPv6 las direcciones IP son números de 128 bits dando lugar a 2<sup>128</sup>, aproximadamente 3.4×10<sup>38</sup> o 340.282.366.920.938.463.463.374.607.431.768.211.456 combinaciones teóricas posibles, esto son unas 7.9×10<sup>28</sup> veces más direcciones IP posibles que en IPv4. Las direcciones IPv6 se escriben en ocho grupos de cuatro números hexadecimales, pudiéndose hacer una contracción omitiendo grupos de ceros contiguos con _::_. El enorme número de direcciones de IPv6 hace innecesaria el NAT y CG-NAT y los problemas que estos ocasionan. Estas son unas comparaciones:

* La tierra tiene 4500 millones de años, si se asignan direcciones IPv6 al ritmo de 1000 millones por segundo desde que se formó la tierra hast ahora se usado una trillonésima parte del espacio de direcciones.
* Se puede asignar 4 trillones de direcciones por cada uno de los 510 billones de metros cuadrados de la tierra.

> 11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111:11111111 (no es un error de maquetación, son los 128 bits de una dirección IPv6)<br>
> FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF<br>
> ::1 (dirección _loopback_)

IPv6 ha sido desarrollado hace varios lustros sin embargo su adopción está siendo tan lenta ya que los proveedores de internet y servidores de internet necesitan soportar el nuevo protocolo, los sistemas operativos y equipos de red ya hace tiempo que fueron adaptados y cualquiera que se compre actualmente ya lo soportará. Usar IPv6 puede ocasionar que algunos servidores que no soporten este protocolo aún no puedan ser accedidos. El servicio de nombres de internet ya fue adaptado a IPv6 y seguramente los servidores de los servicios de empresas importantes como [Google][google], [Amazon][amazon], [Facebook][facebook], [Microsoft][microsoft] o [Apple][apple] también lo soportan.

Algunas otras ventajas de IPv6 sobre IPv4 son:

* Procesado simplificado en los enrutadores: la cabecera de los paquetes de IPv6 aunque son más grandes son más simples. Los paquetes no son fragmentados en el tránsito por los _routers_ sino por el equipo emisor. Se ha eliminado el _checksum_ de la cabecera que ahora se considera garantizado a nivel de capa de enlace de modo que los _routers_ no deben recalcular cuando los campos de la cabecera cambian.
* Opciones extensibles: la cabecera de los paquetes tienen una extensión de 40 octetos con opciones adicionales implementadas como extensiones. Esto posibilita extender el protocolo en el futuro sin afectar a el núcleo de la estructura del paquete.
* _Jumbograms_: IPv4 limita el tamaño de los paquetes a una carga de 65.535 (2^16−1) octetos (64 KiB). IPv6 opcionalmente puede manejar paquetes de hasta 4.294,967.295 (2^32−1) octetos (4 GiB).
* Privacidad: ofrece mecanismos para que la dirección IP que permite a cualesquiera dos equipos comunicarse no sea usado potencialmente para el rastreo.
* Multicast: transmitir un paquete a múltiples destinos en una única operación de envío, en IPv4 era opcional pero en IPv6 está dentro de la especificación.

Algunos motivos por los que IPv6 no se ha adoptado aún son:

* Es necesario tiempo para implementar el estándar: IPv6 fué publicado en 1998 pero llevó tiempo implementarlo y probarlo pasando varios años hasta que fué incorporado en los equipos. Los operadores necesitan tiempo para aprender cómo trabajar con esta nueva tecnología.
* Falta de claro beneficio: los usuarios no experimentarán una mejora de rendimiento o redes más fiables. Implementarlo requiere esfuerzo económico y humano. Por ejemplo, si hay software o hardware que no soporta IPv6 es necesario reemplazarlo.
* Falta de incentivo: sin demanda de los usuarios y sin un beneficio claro los proveedores de software no han realizado el cambio.
* Dependencia sobre IPv4: la transición a IPv6 es un esfuerzo distribuido en la que intervienen múltiples organizaciones. Por un tiempo IPv4 y IPv6 coexistirán. Algunos programas no soportan el nuevo protocolo.

Para añadir el soporte de IPv6 en un servidor web hay que usar la siguiente dirección IP en Apache y Nginx para escuchar peticiones en todas las interfaces de red.

> \# Apache<br>
> Listen [::]:80

> \# Nginx<br>
> listen [::]:80 default_server;

En una máquina con [GNU][gnu]/[Linux][linux] se puede ver la dirección IPv6 asignada a cada interfaz de red con el comando `ip -6 addr show`.

[Amazon soporta en algunas regiones IPv6](https://docs.aws.amazon.com/es_es/elasticloadbalancing/latest/classic/elb-internet-facing-load-balancers.html) con lo que si usamos este servicio de computación en la nube se puede usar el nuevo protocolo. Otros actores importantes de la nube también lo soportan como [Digital Ocean][digital-ocean] ([1](https://www.digitalocean.com/community/tutorials/how-to-enable-ipv6-for-digitalocean-droplets)) o [Linode][linode] ([2](https://www.linode.com/docs/networking/native-ipv6-networking/)). En las entidades de registro de dominios basta con añadir un registro AAAA a las zonas DNS.

Los siguientes dos artículos son interesantes, hablan de la evolución de las direcciones de internet y del agotamiento de direcciones, el estado de despliegue y por qué aún no se ha adoptado de forma masiva:

* [A brief history of IPv4 address space exhaustion](https://blogs.igalia.com/dpino/2017/05/25/ipv4-exhaustion/)
* [IPv6 deployment status and transition technologies](https://blogs.igalia.com/dpino/2017/05/30/ipv6-status/)
* [Dive into Lightweight 4over6](https://blogs.igalia.com/dpino/2017/06/05/dive-into-lw4o6/)
* [¿Por qué no está ya operando IPv6 en el mundo? ](http://www.magazcitum.com.mx/?p=568#.WTVf6sklFYh )

Aún queda tiempo hasta que IPv6 sea el protocolo mayoritariamente utilizado, cuanta más escasez de direcciones IPv4 haya más necesidad de migrar habrá pero para ello el soporte en los servidores, hardware y software es necesario. En algunos países el tráfico sobre IPv6 se ha doblado respecto a otros años, en otros países aún no ha sido desplegado de forma significativa. ¿Llegará un momento en que Google tenga en cuenta para el SEO aquellos sitios que soporten IPv6 como ya hace con HTTPS en vez de HTTP?

{{% /post %}}
