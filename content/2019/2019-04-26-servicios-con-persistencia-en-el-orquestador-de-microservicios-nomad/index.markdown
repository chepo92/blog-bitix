---
pid: 400
type: "post"
title: "Servicios con persistencia en el orquestador de microservicos Nomad"
url: "/2019/04/servicios-con-persistencia-en-el-orquestador-de-microservicos-nomad/"
date: 2019-04-26T19:00:00+02:00
updated: 2019-04-26T20:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:nomad.svg"
tags: ["planeta-codigo", "programacion", "software"]
series: ["hashicorp"]
summary: "Los servicios que necesitan almacenar datos como las bases de datos o un sistema de archivos tienen más restricciones que los servicios sin estado por la necesidad de tener acceso a esos datos. Esto hace que los contenedores puedan no tener tantan libertad para iniciarse en cualquier nodo. En Nomad una estategia es imponer ciertas restricciones a los servicios que almacenen estado para que solo se puedan iniciar en el nodo que donde estén almacenados."
---

{{% post %}}

{{< logotype image1="nomad.svg" title1="Nomad" width1="200" image2="hashicorp.svg" title2="HashiCorp" width2="200" >}}

Algunos servicios no necesitan almacenar ningún estado porque no lo necesitan o porque el estado se mantiene en otro servicio. Que un servicio no necesite mantener estado es bueno porque de esta manera el servicio se puede escalar al número de instancias adecuadas para prestar el servicio, también porque si falla una instancia la petición puede ser reenviada a otra instancia, una instancia que falla puede ser reemplazada sin problema en otro _host_. Sin embargo, hay otro tipo de instancias que si almacenan estado como las bases de datos ya sea [PostgreSQL][postgresql], [MySQL][mysql], [Redis][redis], [MongoDB][mongodb], otra o simplemente archivos en el sistema de archivos.

Las instancias que tienen estado no son tan fáciles de reemplazar dado que los datos son necesarios para su funcionamiento, una instancia de un servicio con estado como no puede iniciarse en otro nodo libremente solo se puede iniciar en el nodo que contenga los datos. Eso o cuando el servicio se inicia en otro nodo los datos son trasladados o por algún mechanismo transparente a los servicios están disponibles en el nuevo nodo.

En [Docker Swarm][docker-swarm] ciertos _drivers_ de volúmenes pueden proporcionar volúmenes accesibles desde cualquier _host_ del _cluster_ pero por defecto _Swarm_ no lo ofrece. En [Kubernetes][kubernetes] los volúmenes pueden ser dispositivos de almacenamiento provenientes de [EBS][amazon-ebs] de modo que si un _pod_ es movido a otro _host_ basta con que el _pod_ sea conectado de nuevo al EBS anterior y los datos están accesibles en el nuevo nodo.

[Nomad][nomad] no proporciona soporte para que el almacenamiento persistente sea migrado a un nuevo nodo de Nomad si el servicio cambiado de ubicación. Para solventar esta limitación en el caso de los servicios con estado estos pueden ser tratados en cierta forma como animales de compañía o _pets_ haciendo que siempre se ubiquen en el mismo nodo, una vez tiene siempre la misma ubicación basta con proporcionar el almacenamiento en el _host_ ya sea en su sistema de archivos o para externalizarlo montando un almacenamiento _EBS_.

Para conseguir que un _job_ de Nomad se ubique siempre en un mismo nodo hay que usar [restricciones o _costraints_ en la especificación del _job_](https://www.nomadproject.io/docs/job-specification/constraint.html). Las restricciones son las reglas que utiliza Nomad para elegir como candidatos los posibles nodos en los que ubicar el _job_, _task group_ o _task_. Se pueden utilizar varios operadores entre los que está el de igualdad utilizado en el ejemplo. Una de las variables utilizables es el identificativo del nodo de Nomad, con él es posible conseguir que el _job_ se ubique siempre en el mismo nodo. Los identificativos de los nodos son asignados por Nomad cuando se unen al _cluster_.

Con los siguientes comandos se inspecciona los nodos que forman parte del cluster de Nomad, entre sus datos está el identificativo de cada nodo formado por una cadena de 36 caracteres. En el modo verboso se emite el identificativo completo y una lista de propiedades del nodo entre los que están detalles de Consul, la CPU, _driver_ que soporta, kernel, sistema operativo, ... En documentación sobre [interpolación de variables](https://www.nomadproject.io/docs/runtime/interpolation.html) hay una lista de variables disponibles.

{{< code file="nomad-status.sh" language="bash" options="" >}}

En este caso solo hay un nodo registrado en Nomad, la siguiente definición de _job_ en el fragmento _constraint_ hace que Nomad lo ubique siempre en él.

{{< code file="mongodb.nomad" language="plaintext" options="" >}}

Como el _job_ se ubica en el mismo nodo siempre montando un directorio del nodo como un volumen de datos en el _job_ y contenedor de [Docker][docker], los datos se persisten en el sistema de archivos y transcienden al tiempo de vida del _job_, se puede iniciar el _job_, insertar datos en la base de datos en este caso de MongoDB, eliminar el _job_, volverlo a iniciar y los mismos datos están presentes en MongoDB.

{{< code file="nomad-job-run.sh" language="bash" options="" >}}
{{< code file="mongodb.sh" language="bash" options="" >}}
{{< code file="nomad-job-stop.sh" language="bash" options="" >}}

Para iniciar [Consul][consul] y Nomad hay que utilizar los siguientes comandos y para el ejecutar _job_ es requisito haber instalado Docker dado que en este ejemplo lo utiliza.

{{< code file="consul-nomad.sh" language="bash" options="" >}}

Las restricciones se han de cumplir para elegir un nodo, por otro lado está también la afinidad. La [afinidad](https://www.nomadproject.io/docs/job-specification/affinity.html) es una preferencia utilizada por Nomad al seleccionar los nodos que tratará de cumplir si hay algún nodo disponible con las propiedades de afinidad deseadas pero si no hay un nodo disponible se elige algún otro.

{{< reference >}}
* [Introducción a Nomad para gestionar aplicaciones y microservicios][blogbitix-398]
* [Estrategias de despliegue para microservicios con Nomad][blogbitix-399]
* [Portworx](https://www.nomadproject.io/guides/stateful-workloads/portworx.html)
* [Ephemeral Disk](https://www.nomadproject.io/docs/job-specification/ephemeral_disk.html)
* [Nomad - our experiences and best practices](https://tech.trivago.com/2019/01/25/nomad-our-experiences-and-best-practices/)
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
