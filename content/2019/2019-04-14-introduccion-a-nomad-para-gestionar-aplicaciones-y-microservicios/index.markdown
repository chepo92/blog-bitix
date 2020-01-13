---
pid: 398
type: "post"
title: "Introducción a Nomad para gestionar aplicaciones y microservicios"
url: "/2019/04/introduccion-a-nomad-para-gestionar-aplicaciones-y-microservicios/"
date: 2019-04-14T13:00:00+02:00
updated: 2019-04-17T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:nomad.svg"
tags: ["planeta-codigo", "programacion", "software"]
series: ["hashicorp"]
summary: "En las aplicaciones basadas en microservicios dado el número de ellos y de instancias tienen han de gestionarse como si fuesen ganado en vez como si fuesen animales de compañía. Nomad es un orquestador de servicios que a diferencia de Docker Swarm permite gestionar servicios con otros sistemas de ejecución además de contenedores docker y a diferencia de Kubernetes es más sencillo."
---

{{% post %}}

{{< logotype image1="nomad.svg" title1="Nomad" width1="200" image2="consul.svg" title2="Consul" width2="200" image3="hashicorp.svg" title3="HashiCorp" width3="200" >}}

En las arquitecturas de aplicaciones basadas en microservicios cada microservicio o simplemente servicio es una aplicación distinta e independiente, son varias aplicaciones que hay que gestionar y desplegar de forma individual o de forma coordinada.

Dado su número hay que automatizar todas las tareas para tratar de conseguir la menor intervención manual, ningún proceso manual si es posible. Para que no sean inmanejables han de tratarse como ganado de forma masiva en vez de como animales de compañía que requieran atención individual para continuar generando valor en un proyecto con el tiempo disponible en vez de dedicarlo a tareas que no lo aportan.

Dado que cada microservicio puede emplear una tecnología diferente es necesario algo que permita tratarlos a todos por igual, esta tecnología son los contenedores que hacen un papel similar al que hacen en el transporte de mercancías en barcos.

Hay varias tecnologías para orquestar o gestionar los microservicios y crear _clusters_ de máquinas en las que desplegarlos, una de ellas es [Docker Swarm][docker-swarm] sencilla e integrada con [Docker][docker] pero no con tantas funcionalidades como otra de las populares que es [Kubernetes][kubernetes] y para usarlo en una máquina local [minikube][minikube], ofrece mas funcionalidad pero añade una complejidad significativa que para algunos casos de uso no compensa además requiere mas tiempo para dominarla. Una solución intermedia conservando la sencillez pero con mas funcionalidad es [Nomad] de [HashiCorp][hashicorp]. Otra de sus características destacadas es que el _cluster_ de Nomad puede estar formado en diferentes centros de datos y proveedores de la nube al mismo tiempo, por ejemplo en [AWS][amazon-web-services], [GCP][google-cloud] entre otros o centros de datos híbridos en la nube y propios. En la sección [Nomad vs. Other Software](https://www.nomadproject.io/intro/vs/index.html) de su documentación se compara con otras opciones.

Nomad es distribuido, con alta disponibilidad y escalable a cientos de nodos en múltiples centros de datos y regiones. No es una solución completa por si sola pero se integra con otras. No ofrece descubrimiento de servicios pero se integra muy bien con [Consul][consul]. No es un balanceador de carga pero se integra con [Nginx][nginx], [Fabio][fabio], [Traefik][traefik] y [HAproxy][haproxy] automatizando su configuración desde Consul. No integra un gestor de secretos pero se integra con [Vault][vault]. No soporta escalado y no integra de por sí varias de estas funcionalidades como Kubernetes pero es más simple.

Nomad a diferencia Docker no solo puede gestionar contenedores docker sino también tareas del sistema y otras como máquinas virtuales [qemu][qemu] o contenedores con [rkt], a diferencia de Kubernetes es mucho mas sencilla pero conservando funcionalidad suficiente para muchos casos de uso. Nomad requiere de otra de las herramientas de HashiCorp que es Consul para el registro y descubrimiento y para la configuración del _cluster_, también se integra con otras de sus herramientas como Vault para guardar cifrados datos sensibles como contraseñas y certificados. Con [Connect](https://www.consul.io/docs/connect/platform/nomad.html) es capaz de proporcionar conexión TLS con autenticación mutua de forma transparente para los servicios.

Los _jobs_ son la unidad de trabajo que contienen la definición de los servicios, se definen en un [archivo de configuración](https://www.nomadproject.io/docs/job-specification/index.html) donde los elementos son el nombre, los grupos de tareas, las tareas y en cada tarea el _driver_ que usa dependiendo del cual se proporciona la configuración apropiada. El _driver_ determina como es gestionada el tipo de tarea puede ser un conteendor de docker, un proceso del sistema, una máquina virtual de _qemu_ o un contenedor _rkt_, a diferencia de Docker Swarm que solo puede gestionar contenedores docker. Se pueden configurar variables de entorno, memoria asignada a cada tarea, propiedades de red y CPU.

Nomad y Nomad cada uno son un binario ejecutable sin ninguna otra dependencia. Basta con descargarlos e incluirlos en el _path_ del sistema. En este ejemplo hay definido un _job_ compuesto por una tarea de un contenedor docker de [nginx][nginx] configurado en un puerto aleatorio y con 1 GB de memoria para cada una de las dos instancias del servicio. Dado que lo usa es necesario [instalar Docker][blogbitix-50].

{{< code file="nginx.nomad" language="plaintext" options="" >}}

Nomad y Nomad se ejecutan con los siguientes comandos en modo desarrollo.

{{< code file="nomad-consul.sh" language="bash" options="" >}}

Iniciados se pueden enviar _jobs_ y ver su estado, dirección y puerto asignado así como los _logs_ generados.

{{< code file="nomad.sh" language="bash" options="" >}}

También poseen una interfaz web integrada en la que consultar la misma información, la de Consul está en el puerto _8500_ y la de Nomad en el _4646_ donde ver el estado de los _jobs_ y el progreso de los despliegues.

{{< image
    gallery="true"
    image1="image:consul.png" optionsthumb1="200x150" title1="Consul"
    image2="image:nomad-1.png" optionsthumb2="200x150" title2="Nomad"
    image3="image:nomad-2.png" optionsthumb3="200x150" title3="Nomad"
    caption="Interfaces web de Consul y Nomad" >}}

Nomad permite varias estrategias para actualizar los _jobs_ a una nueva versión de un servicio, basta modificar la configuración del _job_, volverlo a enviar a Nomad y este se encarga de [actualizar las instancias siguiendo la estrategia _rolling_, _blue/green_ o _canary_][blogbitix-399] definida en el _job_, pero eso lo muestro mas detalladamente en otro artículo.

La [documentación de Nomad](https://www.nomadproject.io/docs/index.html), Nomad y otros productos de HashiCorp dedicados a la infraestructura en la nube esta muy bien explicada y detallada, este artículo solo es un resumen de las partes básicas para conocer como empezar a usarlo. En el siguiente vídeo se hace una pequeña explicación y demostración.

{{< youtube video="A6CuZUoINX0" >}}

{{< reference >}}
* [Estrategias de despliegue para microservicios con Nomad][blogbitix-399]
* [Servicios con persistencia en el orquestador Nomad][blogbitix-400]
* [Nomad – Simple deployment and monitoring of applications](http://targetveb.com/nomad-simple-deployment-monitoring-applications.html)
{{< /reference >}}

{{% /post %}}
