---
pid: 52
type: "post"
title: "Introducción a Ansible"
url: "/2014/11/introduccion-a-ansible/"
date: 2014-11-15T10:35:39+01:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:ansible.svg"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="ansible.svg" title="Ansible" width="200" >}}

Siempre que nos sea posible deberíamos automatizar las tareas que realizamos. Automatizar tareas hará sencillo realizarlas permitiéndonos hacer todos los despliegues de una aplicación que queramos con menos posibilidades de cometer errores manuales o nos permitirá disponer de una nueva máquina aprovisionada exactamente como pueda estar la máquina de producción en mucho menos tiempo. En el ámbito del aprovisionamiento de máquinas y administración de la infraestructura IT hay varias opciones, entre ellas están [Chef][chef], [Puppet][puppet] y [Ansible][ansible].

En este artículo haré una breve introducción de Ansible que principalmente se emplea en servidores pero también podríamos emplearlo para nuestra propia máquina. Con Ansible podremos:

* Automatizar el aprovisionamiento de máquinas.
* Gestionar la configuración de los servicios de esas máquinas.
* Realizar despliegues y orquestar los servicios.

Hay que destacar que Ansible no necesita instalar un agente (al contrario de Chef o Puppet) en cada una de las máquinas del inventario que queramos administrar lo que lo hace fácil de emplear, usa un modelo «push» en el que la máquina donde se ejecuta Ansible envía por ssh los comandos necesarios a aplicar en vez de ser cada una de las máquinas las que obtienen de un repositorio las recetas a usar. En los artículos [Application Deployment](https://www.ansible.com/application-deployment), [Configuration Management](https://www.ansible.com/configuration-management) y [Continous Delivery](https://www.ansible.com/continuous-delivery) nos describen algunos casos de uso y sus ventajas empleando Ansible.

Para trabajar con Ansible necesitaremos inventariar las máquinas y probablemente definir algunas variables. Podría ser de la siguiente forma en el caso de una máquina para desarrollar.

{{< code file="hosts" language="plaintext" options="" >}}

En el inventario descrito como un archivo en formato INI se asignan los nombres del host o sus direcciones IP, también se pueden hacer agrupaciones de máquinas por ejemplo en base al rol (base de datos, servidor web, ...). Una vez que disponemos del inventario podemos empezar a usar Ansible, por ejemplo haciendo un ping a todas las máquinas o instalando un determinado paquete:

{{< code file="ansible.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:ansible.png" optionsthumb1="300x200" title1="Ansible" >}}

El parámetro -m indica el módulo de Ansible que usamos y a continuación indicamos los parámetros. Ansible dispone de una amplia [colección de módulos](http://docs.ansible.com/list_of_all_modules.html) que nos permiten hacer cantidad de tareas.

Pero en vez de usar Ansible mediante comandos podemos emplear recetas contenidas en [playbooks](http://docs.ansible.com/playbooks.html) descritos en formato YAML en las que definimos varias tareas y podemos usar las variables del inventario. Con el siguiente playbook instalamos varios paquetes en una máquina Arch Linux y hacemos un checkout de dos proyectos de subversion, para ello usamos en la primera tarea el módulo para gestionar paquetes con pacman, hay módulos para los gestores de paquetes de otras distribuciones (apt, yum, ...) y en la segunda tarea hacemos un checkout de dos proyectos usando el módulo del sistema de control de versiones subversion. Los módulos son idempotentes de forma que una vez que el sistema está en el estado deseado no se realiza la operación, esto hace que el mismo playbook pueda ser ejecutado tantas veces como se desee evitando efectos colaterales por reejecuciones, lo importante es el estado que se quiere conseguir, Ansible se encarga de realizar las acciones necesarias para llegar a él desde el estado actual del sistema.

{{< code file="install.yml" language="YAML" options="" >}}

Para ejecutar un playbook usamos el comando ansible-playbook en vez de simplemente el comando ansible.

{{< code file="ansible-playbook-install.sh" language="bash" options="" >}}

En los playbooks podemos usar tareas, grupos de máquinas, variables, variables de grupos, asignar valores a variables, usar condicionales, bucles, hechos (facts, información obtenida por ansible), notificaciones y realizar acciones en base a ellas, aplicar etiquetas a tareas, hacer includes, plantillas (para los archivos de configuración de los servicios, por ejemplo de apache o mysql), esperar a condiciones, cifrar archivos que contengan información sensible y que podamos incluir en una herramienta de control de versiones sin riesgo a comprometer la información, usar roles que aplican todas estas cosas según la función que queramos que tenga una máquina.

El libro [Ansible Up & Running](https://www.ansible.com/ansible-book) es un buen punto de partida que explica los aspectos básicos ya en su versión de vista previa, por supuesto la propia [documentación del proyecto](http://docs.ansible.com/index.html) y los [recursos de evangelización](https://www.ansible.com/resources) están bastante bien. En la siguiente buena y completa presentación se explican con un poco más detalle más cosas:

{{< speakerdeck id="e02a4f70ee4d01312be742839f79c6f5" >}}

También, en el siguiente [repositorio de GitHub hay varios ejemplos](https://github.com/ansible/ansible-examples) que podemos revisar para ver como se organizan los archivos y carpetas y las convenciones en su estructura que se usan implícitamente.

Como me ha ocurrido con la [herramienta Elasticsearch][blogbitix-21] la documentación de Ansible no me ha resultado que esté escrita de forma didáctica para dominarla empezando desde ningún conocimiento, por ello un libro como [Ansible: Up and Running](https://amzn.to/37D5mIC) es una opción interesate para aprender.

{{< amazon
    linkids="4d1cc610f8b4b9439ae029cb32f80c76"
    asins="1491915323" >}}

Habiendo hecho una [introducción a Docker][blogbitix-49] y esta a Ansible en el siguiente artículo comentaré [como usar Docker con Ansible][blogbitix-53].

{{< reference >}}
* [Artículo en la wikipedia](https://en.wikipedia.org/wiki/Ansible_%28software%29)
* [Presentación sobre Ansible](https://speakerdeck.com/slok/ansible-all-the-things)
* [Ansible examples](https://github.com/ansible/ansible-examples)
* [Introducción a Docker][blogbitix-49]
* [Guía de inicio básico de Docker][blogbitix-50]
* [Cómo crear una imagen para Docker usando un Dockerfile][blogbitix-51]
* [Integración entre Ansible y Docker][blogbitix-53]
* [Introducción a Bitnami][blogbitix-54]
{{< /reference >}}

{{% /post %}}
