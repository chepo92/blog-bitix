---
pid: 381
type: "post"
title: "Proyecto de mejora de Smart TV usando una VPN para acceder a contenido restringido por IP"
url: "/2019/02/proyecto-de-mejora-de-smart-tv-usando-una-vpn-para-acceder-a-contenido-restringido-por-ip/"
date: 2019-02-08T16:50:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: "external"
tags: ["patrocinado", "software"]
---

{{% post %}}

Las TV inteligentes o Smart TVs son cada vez más comunes, bien en la propia televisión, o con dispositivos externos o con miniPCs o, [como ya vimos en su momento][blogbitix-5], con una Raspberry Pi
En este artículo veremos que hay cierto contenido o algunos servicios a los que no podréis acceder por estar limitados geográficamente, es decir, que solo podréis acceder a ellos si os conectáis desde una dirección IP localizada en la región en la que se presta el servicio. Empecemos con algunos conceptos básicos.

### Direcciones IP

Para conectarse a internet es necesario disponer de un identificador público (una dirección IP) reconocido por otros elementos de internet, estos identificadores son entregados por los proveedores de acceso a internet a sus clientes como parte del servicio de conexión a internet.

{{< image
    gallery="false"
    image1="image:direccion.jpg" optionsthumb1="600x450" title1="Dirección" >}}

Para racionalizar y dirigir la asignación de direcciones se crearon organismos que gestionan las direcciones en cada uno de los continentes, esto genera una primera división de las direcciones IP en función del organismo que gestione la dirección IP que estamos utilizando.

Además de esto, cuando un proveedor solicita la asignación de un grupo de direcciones ha de identificar en qué país se utilizarán cada uno de los distintos grupos asignados, de tal manera que conociendo la dirección IP de una conexión es posible conocer de forma altamente fiable el país de origen de dicha conexión.

### Servicios limitados geográficamente

Existen servicios populares como Hulu que no pueden verse fuera de los EEUU o servicios como Netflix que varían su catálogo en función del país en el que se tenga la suscripción, además de países que restringen algunos tipos de contenidos por motivos políticos o legales.

Además, algunos canales de televisión ofrecen a sus suscriptores un servicio de _streaming_ de contenidos que solo está disponible si la dirección IP desde la que se realiza la conexión pertenece al mismo país que el servicio.

{{< image
    gallery="false"
    image1="image:pagina-bloqueada.jpg" optionsthumb1="600x450" title1="Página bloqueada" >}}

### Evitando las limitaciones geográficas

Existen dos formas en las que puede evitar este tipo de limitaciones, en primer lugar, el uso de proxies, y en segundo lugar el uso de VPNs.

No es el objetivo de este artículo entrar en detalles sobre [qué es una VPN](https://www.expressvpn.com/es/what-is-vpn) o [qué es un proxy](https://es.wikipedia.org/wiki/Servidor_proxy), si lo deseas puedes seguir los vínculos para leer con más detalle acerca de ambos elementos, la VPN introduce un nivel adicional de seguridad al encriptar todo el tráfico de extremo a extremo, lo que evita que pueda inyectarse código malicioso, cosa que es más difícil de garantizar en un servidor proxy. Adicionalmente, las VPNs, al crear un túnel privado, suelen ofrecer mayor estabilidad en la conexión, cosa que os será muy útil si vais conectar a un servicio de _streaming_.

### Cosas a tener en cuenta al evaluar un servicio de VPN

Hay una serie de puntos que es necesario tener en cuenta a la hora de buscar un buen servicio de VPN para acceder a servicios de TV por internet:

1. Compatibilidad, es necesario que exista una versión del cliente de VPN para el dispositivo que se utilice, o en su defecto que pueda ser utilizado en un rúter doméstico.
2. Múltiples servidores, cuantos más servidores tenga disponibles el servicio de VPN más fácil será que encontremos uno dentro de la región a la que pretendemos conectarnos.
3. Velocidades altas, este punto es muy importante y hay que evaluarlo con cuidado, pues muchos servicios de VPN provocan una reducción importante de la velocidad de la conexión o incluso no lo proporcionan de forma estable.
4. Ausencia de límites de transmisión, los servicios de _streaming_ consumen un volumen importante de datos, por lo que es importante que el servicio no tenga límites de transmisión.
5. Seguridad, el uso de una VPN nos permite añadir un nivel adicional de seguridad a la conexión, normalmente ofrecen diversos grados de encriptación, servicios de garantía de anonimato o ausencia de registros, son capacidades que pueden resultar muy interesantes a la hora de elegir un buen servicio de VPN.

### ¿Cómo puede conectarse a una VPN con nuestra Smart TV?

Hay tres formas de conectar nuestra Smart TV a internet mediante una VPN, las detallamos a continuación:

1. Conectar la Smart TV a una VPN mediante un rúter.
En este caso hay que usar un dispositivo enrutador que permita la instalación del cliente de VPN o que incluya el cliente de VPN directamente en su propio software, esta opción es la más ventajosa desde el punto de vista del rendimiento y además permite proporcionar seguridad no solo a nuestra Smart TV sino a todos los elementos de la red.
2. Configurar la VPN directamente en la Smart TV
Un buen proveedor de servicios de VPN proporcionará software instalable para nuestros dispositivo e instrucciones detalladas para la instalación, 
3. Uso de _add-ons_ de Kodi para Smart TVs que soporten Kodi.
Si tienes instalado OpenELEC o Kodi, hay diversos _add-ons_ que pueden ayudarte a conectar a una VPN, como por ejemplo Zomboided.

La elección del método de conexión dependerá de los requisitos personales, establecer la VPN en el enrutador hará que todo el tráfico de la red esté protegido y seguro, pero restará independencia a la hora de cambiar la configuración de conexión del servidor VPN pues puede penalizar a otros servicios que use en el resto de los dispositivos. La segunda opción es la más versátil pues permite instalar el software de cliente que recomiende el proveedor y cambiar la configuración de conexión de la Smart TV sin perturbar el normal funcionamiento del resto de dispositivos.

{{% /post %}}
