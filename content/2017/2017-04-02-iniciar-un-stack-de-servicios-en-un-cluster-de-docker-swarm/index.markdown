---
pid: 220
type: "post"
title: "Iniciar un stack de servicios en un cluster de Docker Swarm"
url: "/2017/04/iniciar-un-stack-de-servicios-en-un-cluster-de-docker-swarm/"
date: 2017-04-02T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:docker.svg"
tags: ["blog", "planeta-codigo"]
series: ["docker"]
summary: "Los _stacks_ en Docker Swarm son definiciones en un archivo de texto en formato YAML de múltiples servicios además de volúmenes, redes de software y secretos. Esta definición de un _stack_ ejecutado en un _cluster_ de nodos Docker Swarm permite iniciar múltiples contenedores además de los otros elementos que necesiten para su funcionamiento. Los _stacks_ son el equivalente para Docker Swarm de los archivos multicontenedor de Docker Compose, y el formato de ambos muy similar."
---

{{% post %}}

{{< logotype image1="docker.svg" title1="Docker" width1="200" >}}

Con [Docker Compose][docker-compose] se pueden [definir en un único archivo un conjunto de contenedores][blogbitix-87] que forma un servicio o aplicación y que se lanzan como una unidad. En vez de ejecutar los comandos individuales que inician cada contenedor el archivo en formato [yaml][yaml] de Docker Compose define varios contenedores y al ser un archivo de texto es añadible a un sistema de control de versiones para registrar los cambios. La información del archivo de Docker Compose es la misma que se indicaría en el comando para iniciar un contenedor individual.

En versiones más recientes se ha modificado ligeramente el formato del archivo de Docker Compose para añadirle las características necesarias que necesita [Docker Swarm][docker-swarm], la [herramienta integrada en Docker que permite crear _clusters_ de nodos][blogbitix-216] que ejecuten contenedores [Docker][docker]. A estos archivos ahora se les denomina como _stacks_. Así hay nuevas secciones como _services_, _networks_, _volumes_ y _secrets_ entre otras para soportar algunas funcionalidades adicionales. La sección _services_ es similar a la que usábamos en Docker Compose y define los contenedores. Por ejemplo, para definir que el servicio se componga de un contenedor con un servidor web [nginx][nginx] usaríamos el siguiente archivo. El parámetro _version_ es muy importante ya que indica las opciones soportadas en el archivo.

{{< code file="docker-compose-stack-nginx.yml" language="YAML" options="" >}}

A destacar las opciones _deploy_ y _replicas_ ya que indican cuantas instancias o contenedores de ese servicio habrá en el _cluster_. Al igual que con los comandos de Docker Swarm era posible crear redes por software a las cuales conectar los contenedores para que se puedan comunicar entre sí en la sección _networks_ de cada servicio se indica las redes a las que conectarlo y en la sección a nivel raíz del archivo las redes a crear.

También hay una sección propia para definir los volúmenes que dependiendo del _driver_ se integra con diferentes plataformas de computación como [Amazon EC2][amazon-ec2], [Digital Ocean][digital-ocean], [VirtualBox][virtualbox] con [REX-Ray][rexray], .... Los volúmenes proporcionan persistencia a los efímeros contenedores, por un lado almacenar datos que deban sobrevivir a la vida de un contenedor en su sistema de archivos es inadecuado ya que sus datos no son compartidos si se inicia otra instancia del contenedor y son eliminados cuando el contenedor desaparece, por otro lado en un _cluster_ de contenedores Docker si un contenedor de un servicio finaliza inexperadamente Docker Swarm puede decidir reiniciarlo en cualquier otro nodo del _cluster_ para mantener el estado del servicio por lo que los archivos compartidos no pueden estar tampoco en el _host_ que hospeda los contenedores. Por estos motivos Docker Swarm necesita de un sistema de persistencia, que en este caso son los volúmenes definidos en la sección del mismo nombre _volumes_.

Para mayor seguridad se ha incorporado la sección _secrets_ en la que se especifican elementos de datos como archivos que en el contenedor se montan en el directorio _/run/secrets/_. Algunos elementos sensibles como usuarios y contraseñas al proporcionarse como parámetros o variables de entorno aparecen haciendo un listado de procesos del sistema con sus respectivos comandos de lanzamiento y parámetros, lo que es un problema de seguridad. Hay otros elementos sensibles como claves SSH, claves privadas o certificados que ahora con los _secrets_ no es necesario incluirlos en la propia imagen del contenedor.

La forma de iniciar y eliminar un _stack_ en un _cluster_ de nodos Docker Swarm es el siguiente:

{{< code file="06-docker-compose-stack-deploy-nginx.sh" language="bash" options="" >}}
{{< code file="docker-compose-stack-remove-nginx.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:nginx-service.png" optionsthumb1="300x200" title1=""
    caption="Cluster de nodos de Docker Swarm con servicio de nginx replicado con 2 instancias" >}}

En la captura de la terminal se aprecia como estando el _cluster_ formado por tres nodos y el servicio estando replicado con dos instancias Docker Swarm ha decidido iniciar una instancia de contenedor nginx en el _nodo-01_ y otra en el _nodo-03_ pero perfectamente podría haber iniciado una de ellas en el _nodo-02_. Gracias a las capacidades de _networking_ de Docker Swarm con [Routing Mesh](https://docs.docker.com/engine/swarm/ingress/) al cualquier nodo que se le haga una petición al puerto 80 del servicio de nginx devolverá una respuesta, incluso si se hace en el ejemplo la petición al _nodo-02_ la respuesta será devuelta aunque en ese nodo no tenga una instancia de contenedor ejecutándose, realmente redirigirá la petición de forma transparente para el cliente la petición a un nodo que si tenga una instancia de nginx. También, al estar el servicio replicado con dos instancias Docker Swarm realizará automáticamente un [balanceo de carga](https://docs.docker.com/docker-cloud/getting-started/deploy-app/9_load-balance_the_service/) _round-robin_ repartiendo las peticiones entre cada una de las instancias de nginx.

De los _volumes_ y _secrets_ en posteriores entregas de esta [serie de artículos sobre Docker][blogbitix-serie-docker] las comentaré de forma específica. El _stack_ de servicios mostrado en este ejemplo es muy sencillo. Aunque también sencillo en el mismo código fuente del ejemplo incluyo otro _stack_ formado por un servicio de nginx y una aplicación Java con [Spring Boot][spring-boot] que hace uso de _secrets_ y _volumes_.

{{< code file="docker-compose-stack-app.yml" language="YAML" options="" >}}

Un libro que me ha gustado mucho y que recomiendo leer sobre Docker Swarm es [The Devops 2.1 Toolkit](https://amzn.to/2mIirti) que lo explica detalladamente y todo el libro está orientado a como usarlo en un entorno de producción. Un libro más introductorio que también he leído y que está bastante bien es [Docker in Action](https://amzn.to/2mF3Xtj).

{{< amazon
    linkids="a6c4acab72c208d29232f2e0a8edb8ee,2101ae950cfcfe9e69b6cc1210e4bf2c"
    asins="1633430235,1542468914" >}}

Docker Swarm es una opción simple y que está integrada en Docker pero no ofrece todas las funcionalidades de algunas otras opciones que el algunos casos de uso algo más avanzados son necesarias o convenientes. [Nomad][nomad] es otra opción simple para gestionar un conjunto de aplicaciones o servicios pero con algunas funcionalidades adicionales que no posee Docker Swarm como escribo en [Introducción a Nomad para gestionar aplicaciones y microservicios][blogbitix-398].

{{< sourcecode git="blog-ejemplos/tree/master/DockerSwarm" >}}

{{< reference >}}
* [Deploy a stack to a swarm](https://docs.docker.com/engine/swarm/stack-deploy/)
* [Compose file reference](https://docs.docker.com/compose/compose-file/)
{{< /reference >}}

{{% /post %}}
