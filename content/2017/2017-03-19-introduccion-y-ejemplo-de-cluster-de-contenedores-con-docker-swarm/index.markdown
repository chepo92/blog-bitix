---
pid: 216
type: "post"
title: "Introducción y ejemplo de cluster de contenedores con Docker Swarm"
url: "/2017/03/introduccion-y-ejemplo-de-cluster-de-contenedores-con-docker-swarm/"
date: 2017-03-19T12:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:docker.svg"
tags: ["gnu-linux", "planeta-codigo"]
series: ["docker"]
summary: "Las funcionalidades de Docker Swarm están incorporadas en Docker para gestionar _clusters_ de nodos con contenedores de los servicios que deseemos. En artículo comentaré algunas de las propiedades de _networkning_ distribuido incorporado en Docker, como crear un _cluster_ de nodos Docker usando VirtualBox con máquinas virtuales para simular múltiples máquinas junto con como lanzar un servicio en el _cluster_ que en este caso consistirá en un servidor web nginx."
---

{{% post %}}

{{< logotype image1="docker.svg" title1="Docker" width1="200" >}}

En [artículos anteriores de la serie sobre Docker][blogbitix-serie-docker] comentaba varias de las herramientas de [Docker][docker] como [Docker Compose][docker-compose], Dockerfile o [Docker Machine][docker-machine] con ejemplos de como usarlo en local. Una de las herramientas que me quedaba por investigar era [Docker Swarm][docker-swarm] para crear _clusters_ de nodos para contenedores Docker en un entorno de producción. A partir de la versión 1.12 de Docker se han incorporado varias características a Docker para usaar contenedores de forma distribuida y que a pesar de la complejidad subjacente que debe haber es realmente simple usarlo.

Una de las características es el _networking_ que hace trasnparente la comunicación en red distribuida que se hace entre los nodos y los contenedores de esos nodos. Además permite crear redes por software para que los contenedores conectados a esas redes se comuniquen de forma privada. Otra característica interesante de Docker Swarm es que se encarga de monitorizar el estado de los servicios recreando contendores si alguno deja de funcionar. También a través del denominado _routing mesh_ da igual al nodo del _cluster_ por el que se acceda y da igual en que nodo esté el contenedor que Docker Swarm con esta propiedad se encargará de hacer llegar la petición al contenedor. Además, a lo que en Docker Swarm se denomina servicio se realiza balanceo de carga entre la instancias del mismo que haya en el _cluster_ y al servicio se le asigna un DNS y dirección IP por el que puede ser accedido por otros servicios.

En el siguiente ejemplo para crear el _cluster_ de nodos Docker usaré Docker Machine para crear las máquinas de los nodos en máquinas virtuales de [VirtualBox][virtualbox] aunque su funcionamiento es similar si usásemos la nube de [Amazon EC2][amazon-ec2], [Digital Ocean][digital-ocean] u otros.

El siguiente _script_ crea primeramente varios nodos cada uno en una máquina virtual, luego establece el nodo 01 como _manager_ y los nodos 02 y 03 como _workers_ usando un _token_ para unirlos al _cluster_ según su rol. Los nodos _manager_ se encargan de mantener el estado del _cluster_ y los que a través de ellos los comandos de los servicios deben ser lanzados, en un entorno de producción posiblemente tendríamos 3 nodos _manager_ para soportar tolerancia a fallos. Finalmente, se obtiene lista los nodos del _cluster_. El comando <code>docker-machine env node-01</code> permite establecer el entorno contra el que el comando <code>docker</code> lanzará las operaciones como si de la máquina local se tratase.

{{< code file="01-cluster-create.sh" language="bash" options="" >}}

Una vez creado los nodos es cuando podemos empezar a crear servicios en el _cluster_. Los servicios son una definición de los contenedores de Docker que queremos que el _cluster_ ejecute. En el ejemplo definiré el servicio de un servidor web [nginx][nginx], primeramente crearé una red por software en el _cluster_ a la que los servicios pueden conectarse que en el ejemplo (aunque para este no es necesario) utilizaré para hacer una consulta DNS con la herramienta [drill](https://linux.die.net/man/1/drill) para ver el nombre de dominio y dirección IP que asigna Docker Swarm al servicio del servidor web. Con _docker service create_ se crean los servicios, algunos de los parámetros del comando son el nombre del servicio que queremos asignarle, los puertos que expone en este caso el 80 y 443 en el _host_ para que sea accesible desde fuera del _cluster_, la redes a las que está conectado y finalmente la imagen del contenedor del servicio que en este caso será la versión de [nginx con Alpine para Docker](https://hub.docker.com/_/nginx/). Se pueden listar los servicios que contiene el _cluster_ con _docker service ls_ y los procesos de cada nodo donde podemos ver en que nodos se está ejecutando los contenedores con _docker ps_.

{{< code file="06-nginx-create.sh" language="bash" options="" >}}

Una de las propiedades interesantes del _networking_ de Docker Swarm es que ofrece incorporado balanceo de carga, esto es, si el servicio de nginx del ejemplo estuviese formado por dos instancias las peticiones se distribuirían entre las instancias usando el método _round-robin_. Otra característica interesante si se observa el ejemplo con detalle es que da igual el nodo al que hagamos la petición que la respuesta se obtendrá igualmente, esto es, aunque la petición se haga al nodo 01 y realmente el contenedor del servidor nginx se esté ejecutando en el nodo 02 la petición se realizará correctamente gracias al _routing mesh_ del _neworking_ de Docker Swarm, esto es gracias a que cada servicio tiene asignada una dirección IP, como se ha visto anteriormente en la salida del comando <code>drill</code>.

En este vídeo de [asciinema][asciinema] se ve en funcionamiento todos los anteriores comandos. Y en la aplicación de VirtualBox estarán las máquinas virtuales de cada uno de los nodos que crea el ejemplo. En el vídeo se aprecia que el servicio de nginx se está ejecutando en el nodo 02 cuando se listan los procesos de Docker de cada nodo con _docker ps_, nótese sin embargo que al hacer un petición HTTP a cualquiera de los nodos se devuelve la página de inicio de nginx ya que gracias al _routing mesh_ de Docker Swarm la petición se redirige de forma transparente para el cliente y el servicio al nodo donde realmente se está ejecutando el contenedor de nginx.

{{< asciinema id="107868" caption="Introducción y ejemplo de cluster de contenedores con Docker Swarm" >}}

{{< image
    gallery="true"
    image1="image:maquinas-virtuales-cluster.png" optionsthumb1="300x200" title1="Máquinas virtuales de los nodos del _cluster_ de Docker Swarm"
    caption="Máquinas virtuales de los nodos del cluster de Docker Swarm" >}}

Los comandos para eliminar un servicio del _cluster_ y eliminar completamente el _cluster_ son los siguientes.

{{< code file="nginx-remove.sh" language="bash" options="" >}}
{{< code file="cluster-remove.sh" language="bash" options="" >}}

Un libro que me ha gustado mucho y que recomiendo leer sobre Docker Swarm es [The Devops 2.1 Toolkit](https://amzn.to/2mIirti) que lo explica detalladamente y todo el libro está orientado a como usarlo en un entorno de producción. Un libro más introductorio que también he leído y que está bastante bien es [Docker in Action](https://amzn.to/2mF3Xtj).

{{< amazon
    linkids="a6c4acab72c208d29232f2e0a8edb8ee,2101ae950cfcfe9e69b6cc1210e4bf2c"
    asins="1633430235,1542468914" >}}

Finalmente, quizás si estás usando GNU/Linux y VirtualBox como yo al crear los nodos con el comando <code>docker-machine</code> te produzca el siguiente error (quizá se corrija en futuras versiones de Docker o VirtualBox).

{{< code file="vboxnet0-error.out" language="plaintext" options="" >}}

La solución que he encontrado para que funcione es asignar una dirección IP al adaptador puente solo-anfitrión y levantar la interfaz que usa Docker para comunicarse con las máquinas virtuales previamente a crear el nodo. En [Arch Linux][archlinux] con los siguientes comandos.

{{< code file="01-vboxnet0-configure.sh" language="bash" options="" >}}

Se puede definir un conjunto de servicios como una unidad en un archivo en _stacks_ de forma similar a como es posible hacer con Docker Compose cosa que mostraré en otro artículo.

{{< sourcecode git="blog-ejemplos/tree/master/DockerSwarm" >}}

{{% /post %}}
