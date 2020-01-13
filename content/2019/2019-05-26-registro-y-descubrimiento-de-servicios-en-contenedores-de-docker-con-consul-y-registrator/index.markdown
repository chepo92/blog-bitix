---
pid: 408
type: "post"
title: "Registro y descubrimiento de servicios en contenedores de Docker con Consul y Registrator"
url: "/2019/05/registro-y-descubrimiento-de-servicios-en-contenedores-de-docker-con-consul-y-registrator/"
date: 2019-05-26T11:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:consul.png"
tags: ["planeta-codigo", "programacion", "software"]
series: ["docker", "hashicorp"]
summary: "En los microservicios se hace necesario un servicio de registro y descubrimiento como Eureka o Consul que permita conocer la ubicación de las instancias en cada momento. Las instancias de los servicios se pueden registrar ellas mismas o esta tarea se puede delegar en una en otro servicio. Al usar contenedores de Docker una herramienta que permite delegar el registro y desregistro en Consul de los servicios es GliderLabs Registrator."
---

{{% post %}}

{{< logotype image1="consul.svg" title1="Consul" width1="200" image2="docker.svg" title2="Docker" width2="200" >}}

El registro y descubrimiento de servicios permite a los servicios registrase y a los clientes descubrir la ubicación de otros servicios, la ubicación consiste en la dirección IP y el puerto en el que contactarles. Dado la naturaleza efímera de los servicios donde nuevas instancias de servicios se inician y se detienen en diferentes máquinas y puertos el servicio de descubrimiento es esencial.

La funcionalidad de registro y descubrimiento consiste en dos partes, por un lado cuando se inicia una instancia de un servicio se registra su ubicación en el servicio de registro y descubrimiento y por otro lado los clientes cuando requieren una instancia de un servicio la buscan en el servicio de descubrimiento.

El registro en el servicio de descubrimiento puede hacerse de dos formas, que sea el propio servicio el que se registra en el servicio de descubrimiento o que se sea otro servicio el que lo registra. Para el primer caso escribí un artículo con [Consul][consul] como servicio de descubrimiento en una aplicación de [Spring Boot][spring-boot] que se registra al iniciarse. La ventaja es que es autosuficiente pero adquiere la tarea de autoregistrarse. Por el contrario delegar la trea de registro permite extraerla de los servicios y ofrecer esa funcionalidad por un servicio con esa misión específicamente.

* [Registro y descubrimiento de servicios con Spring Cloud y Consul][blogbitix-206]

En este artículo se usa [GliderLabs Registrator][gliderlabs-registrator] como servicio que se encarga de registrar en un servicio de descubrimiento como Consul los servicios que se inicien en [Docker][docker], aunque soporta otros como [etcd][etcd].

Registrator es un contenedor de Docker, su funcionamiento es escuchar los eventos del demonio de Docker y monitorizar cuando se inician nuevos contenedores o cuando se paran. La monitorización la hace a través del _socket_ del servicio de Docker, para lo que hay que montar un volumen en este contenedor con el archivo _/var/run/docker.sock_ del _host_.

Primero se inicia el servicio de Consul.

{{< code file="consul.sh" language="bash" options="" >}}

Luego se inicia el contenedor Registrator indicando la ubicación con dirección IP y puerto del servicio de Consul.

{{< code file="docker-registrator.sh" language="bash" options="" >}}

Iniciados estos dos servicios en la interfaz de estado de Consul se observa que no hay ningún servicio pero cuando se inicie un nuevo contenedor será registrado en Consul por Registrator. 

{{< image
    gallery="true"
    image1="image:consul.png" optionsthumb1="300x200" title1="Dirección" >}}

En este caso se utiliza como servicio una base de datos [PostgreSQL][postgresql]. Dado que el puerto en el que esté disponible el servicio de PostgreSQL es indiferente al utilizar un servicio de registro y descubrimiento se indica el _-p_ sin indicar el puerto del _host_, de este modo Docker le asigna un puerto público aleatorio.

{{< code file="docker-postgres.sh" language="bash" options="" >}}
{{< code file="docker-ps.sh" language="bash" options="" >}}

En la salida del contenedor de Registrator se emite una traza indicando que el servicio de postgres ha sido registrado en Consul.

{{< code file="docker-registrator.out" language="plaintext" options="" >}}

Una vez iniciado el servicio de postgres en la consola de Consul se muestra con su dirección y puerto en el que se encuentra, en el contenedor utiliza su puerto por defecto _5432_ pero hacia el exterior en este caso al no haber especificado uno Docker le asigna un puerto aleatorio en este caso el _32777_. Este puerto aleatorio es con el que los clientes acceden a la base de datos.

{{< image
    gallery="true"
    image1="image:consul-postgres-1.png" optionsthumb1="300x200" title1="Servicio de postgres registrado en Consul"
    image2="image:consul-postgres-2.png" optionsthumb2="300x200" title2="Servicio de postgres registrado en Consul"
    caption="Servicio de postgres registrado en Consul por Registrator" >}}

En vez de iniciar los servicios individualmente con comandos de Docker creando un archivo de [Docker Compose][docker-compose] con la definición de todos los contenedores se facilita iniciar todos los contenedores con un comando.

{{< code file="docker-compose-up.sh" language="bash" options="" >}}
{{< code file="docker-compose.yml" language="YAML" options="" >}}

El proyecto de [Spring Cloud][spring-cloud] ofrece soporte para ambas tareas de registrar y descubrir servicios, aunque perfectamente la tarea de registro se puede delegar como en este caso a Registrator y utilizar en los servicios de Spring Boot únicamente la parte de descubrimiento.

{{% sourcecode git="blog-ejemplos/tree/master/Registrator" command="./docker-compose-up.sh" %}}

{{% /post %}}
