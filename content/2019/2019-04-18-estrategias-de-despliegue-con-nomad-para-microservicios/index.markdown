---
pid: 399
type: "post"
title: "Estrategias de despliegue para microservicios con Nomad"
url: "/2019/04/estrategias-de-despliegue-para-microservicios-con-nomad/"
date: 2019-04-18T10:00:00+02:00
updated: 2019-04-18T11:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:nomad.svg"
tags: ["planeta-codigo", "programacion", "software"]
series: ["hashicorp"]
summary: "Ciertos servicios requieren que al hacer un despliegue el servicio continue funcionando. Para esto no es posible parar todas las instancias de un servicio a la vez, actualizarlar y volverlas a iniciar porque durante este proceso se dejaría de prestar el servicio durante un corto periodo de tiempo en el mejor de los casos. Hay que hacer el despliegue de forma progresiva en las instancias. Algunas estrategias son _Rolling Update_, _Blue/Green_ y _Canary_, el orquestador de servicios Nomad soporta y realiza de forma automatizada los despliegues usando una de estas estrategias."
---

{{% post %}}

{{< logotype image1="nomad.svg" title1="Nomad" width1="200" image2="hashicorp.svg" title2="HashiCorp" width2="200" >}}

El ciclo de vida de una aplicación no consiste solo en desarrollarla, incluye también su puesta en producción o despliegue en un entorno de pruebas, pero también una vez la aplicación está desplegada en algún momento será necesario actualizarla con una nueva versión.

Las aplicaciones monolíticas tienen otros problemas pero en el aspecto de despliegue es sencillo ya que solo hay una aplicación, basta con desplegar la nueva versión. En una aplicación con arquitectura de microservicios es un reto mayor debido a que hay múltiples aplicaciones.

En cualquiera de ellas puede darse el caso de que para ganar en escalabilidad o para aumentar la disponibilidad o tolerancia a fallos es posible que haya varias instancias, las cuales han de ser actualizadas con el requisito si es necesario de que el servicio no deje de prestar su servicio, es decir que el despliegue no suponga una caída del servicio.

Hay varias estrategias para desplegar una nueva versión de una aplicación:

* _Rolling update_: actualizar todas las instancias de forma progresiva. Una vez se termina de actualizar una se espera un tiempo y se actualiza la siguiente hasta que todas estén actualizadas.
* _Blue/Green_: manteniendo en funcionamiento las instancias con la versión antigua se crea el mismo número de instancias con la nueva versión y se redirige tráfico hacia ellas. Una vez se ha comprobado que la nueva versión funciona correctamente se promociona la nueva versión y se eliminan las instancias de con la versión antigua. Esta estrategia permite volver a la versión anterior rápidamente si se detecta algún problema.
* _Canary_: se siguen manteniendo las instancias con la versión antigua, a diferencia de la estrategia _blue/green_ se crea un número menor de instancias con la versión nueva que el número de instancias con la versión antigua. Una vez comprobado que la nueva versión es correcta se promociona la nueva versión y se actualizan todas las instancias restantes mediante _rolling update_ a la nueva versión. También permite volver a la versión antigua si se detecta algún problema.

[Docker Swarm][docker-swarm] permite la estrategia de despliegue _rolling update_ sin embargo las estrategias _blue/green_ y _canary_ son interesante para tratar de que un error en una versión nueva no afecte al funcionamiento de la aplicación y obligue hacer un _rollback_ que posiblemente tarde más tiempo durante el cual el servicio funcionará con el defecto descubierto. [Nomad][nomad] permite despliegues con las estrategias _blue/gree_ y _canary_.

Para actualizar un servicio en Nomad basta con modificar la definición del _job_ y enviarlo a _Nomad_, y este se encarga de orquestar la actualización en las instancias según la estrategia de despliegue 
configurada. En este caso se actualiza la versión de _nginx_ de la versión _nginx:stable-alpine_ a _nginx:alpine_ usando una estrategia _rolling update_ para las cinco instancias del servicio.

La estrategia de despliegue en _Nomad_ se define en la [sección de configuración _update_](https://www.nomadproject.io/docs/job-specification/update.html). El parámetro _min\_healthy\_time_ es el tiempo que se espera cuando se hace un _rolling update_ para considerar una instancia como sana y continuar la actualización con la siguiente, _max\_parallel_ indica el número de instancias que se migran al mismo tiempo. El parámetro _canary_ indica el número de instancias que se crean en las estrategias _blue/green_ y _canary_, en la primera el número de instancias coincidirá con el parámetro _canary_ que indica el número de instancias de un servicio. Nomad con los parámetros _health\_check_, _min\_healthy\_time_, _healthy\_deadline_, _progress\_deadline_, _stagger_ y _auto\_revert_ se puede poner unos límites para considerar válido un despliegue y en caso de no serlo realizar un _rollback_ de forma autmática.

{{< code file="nginx.nomad" language="plaintext" options="" >}}
{{< code file="nomad-job-run.sh" language="bash" options="" >}}

En el caso de los despliegues _blue/green_ y _canary_ una vez comprobado que la versión de los nuevos servicios funcionan correctamente se promocionan y actualizan el resto de instancias en el caso de _canary_ o se detienen las instancias antiguas en el caso de _blue/green_.

{{< code file="nomad-promote.sh" language="bash" options="" >}}

Desde la línea de comandos se puede observar el estado del servicio y el proceso de actualización, el primero es el estado previo a realizar el despliegue, el segundo durante el proceso de actualización con _rolling update_ y el tercero una vez finalizado el proceso de despliegue y marcado como exitoso en el que todas las instancias han pasado de la versión 0 a la 1.

{{< code file="nomad-status-before.sh" language="bash" options="" >}}
{{< code file="nomad-status-after.sh" language="bash" options="" >}}

{{< asciinema id="241669" caption="Progreso del despliegue rolling update en Nomad" >}}

El proceso de despliegue también se puede monitorizar desde la interfaz web que ofrece Nomad.

{{< image
    gallery="true"
    image1="image:nomad-rolling-update-before.png" optionsthumb1="300x200" title1="Antes del proceso de despliegue rolling update en Nomad"
    image2="image:nomad-rolling-update-while.png" optionsthumb2="300x200" title2="Durante el proceso de despliegue rolling update en Nomad"
    image3="image:nomad-rolling-update-after.png" optionsthumb3="300x200" title3="Después del proceso de despliegue rolling update en Nomad"
    caption="Progreso del despliegue rolling update en Nomad" >}}

En este ejemplo los servicios están en contenedores docker, también se observa que la versión de los contenedores en ejecución pasan de la versión _stable-alpine_ a _alpine_.

{{< code file="docker-ps-before.sh" language="bash" options="" >}}
{{< code file="docker-ps-after.sh" language="bash" options="" >}}

Nomad y [Consul][consul] se inician con los siguientes comandos en modo desarrollo comentados en el artículo [Introducción a Nomad para gestionar aplicaciones y microservicios][blogbitix-398].

{{< code file="consul-nomad.sh" language="bash" options="" >}}

{{< reference >}}
* [Introducción a Nomad para gestionar aplicaciones y microservicios][blogbitix-398]
* [Servicios con persistencia en el orquestador Nomad][blogbitix-400]
{{< /reference >}}

{{% /post %}}
