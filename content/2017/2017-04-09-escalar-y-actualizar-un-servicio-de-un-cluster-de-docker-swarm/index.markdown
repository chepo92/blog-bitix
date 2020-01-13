---
pid: 223
type: "post"
title: "Escalar y actualizar un servicio de un cluster de Docker Swarm"
url: "/2017/04/escalar-y-actualizar-un-servicio-de-un-cluster-de-docker-swarm/"
date: 2017-04-09T11:00:00+02:00
updated: 2017-04-16T13:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:docker.svg"
tags: ["blog", "planeta-codigo"]
series: ["docker"]
summary: "Ya tenemos un _cluster_ formado por varios nodos con algún servicio ejecutándose en el _cluster_ de Docker Swarm. Si surge la necesidad los servicios del _cluster_ se pueden escalar cambiando el número de instancias de contenedores que forma el servicio para atender las necesidades computacionales o para ofrecer el servicio a más usuarios. Por otro lado, pasado un tiempo muy posiblemente se publicará una nueva imagen de los contenedores, el servicio se puede actualizar para que los contenedores utilicen esa nueva imagen."
---

{{% post %}}

{{< logotype image1="docker.svg" title1="Docker" width1="200" >}}

Una vez que ya hemos [creado un _cluster_ de nodos con Docker Swarm][blogbitix-216] y hemos desplegado algunos servicios ya sea directamente mediante comandos para crear servicios o mediante un [_stack_ con un archivo similar a un Docker Compose][blogbitix-220] al cabo de un tiempo necesitaremos hacer otras operaciones. Dos de esas operaciónes básicas son escalar hacia arriba o hacia abajo un servicio cambiando el número de instancias de contenedores desplegadas o actualizar la imagen que utilizan los servicios por otra diferente posiblemente más nueva.

En la documentación de [Docker][docker] están detallados y comentados los [comandos para escalar un servicio](https://docs.docker.com/engine/swarm/swarm-tutorial/scale-service/). Por ejemplo, en el _cluster_ de ejemplo formado por tres nodos, uno con el rol de _manager_ y otros dos como _worker_, ejecutándose en [VirtualBox][virtualbox] y desplegando un servicio para el servidor [nginx][nginx] con inicialmente una réplica o instancia podemos escalar el servicio para que se cree alguna instancia o contenedor más del servicio con el siguiente comando <code>docker service scale</code>.

{{< code file="06-nginx-scale.sh" language="bash" options="" >}}

Al igual que cuando se crea un contenedor para un servicio en el _cluster_ [Docker Swarm][docker-swarm] si no se indica alguna restricción decidirá en qué nodos se crean las nuevas instancias o contenedores del servicio.

{{< image
    gallery="true"
    image1="image:nginx-service-1.png" optionsthumb1="300x200" title1="Servicio de nginx con una réplica"
    image2="image:nginx-service-4.png" optionsthumb2="300x200" title2="Servicio de nginx escalado a cuatro réplicas"
    caption="Servicio de nginx antes y después de escalarlo" >}}
{{< image
    gallery="true"
    image1="image:nginx-service-scale.png" optionsthumb1="300x200" title1="Escalado del servicio de nginx"
    caption="Escalado del servicio de nginx" >}}

Por otro lado, una vez desplegados en un _cluster_ algunos servicios llegará el momento en que queramos actualizar algún parámetro del servicio, uno de ellos será probablemente la imagen del servicio cuando se publique una nueva. En la página de documentación [Aplicando actualizaciones a un servicio](https://docs.docker.com/engine/swarm/swarm-tutorial/rolling-update/) está explicada esta funcionalidad y los comandos junto con sus opciones que hay que utilizar.

En el ejemplo al crear el _cluster_ se usa la última imagen de docker para nginx, en un entorno de producción es más recomendable establecer una versión en concreto para evitar que la imagen que se usa no varía desde que se prueba hasta que se despliega. El siguiente _script_ actualiza la imagen a la versión _nginx:1.10-alpine_ en todas las réplicas del servicio de nginx en el _cluster_.

{{< code file="06-nginx-update.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:nginx-service-update.png" optionsthumb1="300x200" title1="Actualización de la imagen del servicio de nginx"
    caption="Actualización de la imagen del servicio de nginx" >}}

Docker Swarm realiza el proceso de actualización siguiendo los siguientes pasos:

* Detiene el primer contenedor o tarea a actualizar.
* Programa la actualización del contenedor o tarea detenida.
* Inicia una nueva tarea actualizado.
* Si la tarea actualizada retorna su estado como _RUNNING_ se espera un tiempo determinado y se inicia el proceso de actualización de una nueva tarea.
* Si, en cualquier momento durante la actualización, una tarea retorna su estado como _FAILED_, se detiene la actualización.

Por defecto, el planificador actualiza las tareas o contenedores del servicio de uno en uno. Con la opción _--update-parallelism_ se especifica el número de tareas del servicio que se actualizan simultáneamente. La opción _--update-delay_ especifica el tiempo de espera desde que se actualiza la tarea de un servicio y la siguiente. Se puede describir como una combinación de segundos, minutos o horas, de modo que 1m30s indica una espera de 1 minuto y 30 segundos.

En los [archivos en formato YAML de los _stacks_ de Docker Compose](https://docs.docker.com/compose/compose-file/) hay una sección en cada servicio en el que se indica el número de contenedores que se desea que esté formado el servicio así como las opciones de paralelismo y tiempo de espera entre actualización. Para actualizar el _stack_ basta con hacer de nuevo el _deploy_, ya sea la imagen usada, el número de réplicas u otros parámetros.

{{< code file="docker-compose-stack-app.yml" language="YAML" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/DockerSwarm" >}}

{{% /post %}}
