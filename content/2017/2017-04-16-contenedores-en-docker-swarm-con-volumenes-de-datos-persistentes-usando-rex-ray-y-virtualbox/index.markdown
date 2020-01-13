---
pid: 226
type: "post"
title: "Contenedores en Docker Swarm con volúmenes de datos persistentes usando REX-Ray y VirtualBox"
url: "/2017/04/contenedores-en-docker-swarm-con-volumenes-de-datos-persistentes-usando-rex-ray-y-virtualbox/"
date: 2017-04-16T12:00:00+02:00
updated: 2017-04-16T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:docker.svg"
tags: ["blog", "planeta-codigo"]
series: ["docker"]
summary: "Salvo que un servicio sea sin estado o _stateless_ los contenedores de Docker necesitan persistir datos y que estos sobrevivan a su terminación, como es el caso de un contenedor de una base de datos. Además en un _cluster_ de nodos Docker hay que tener en cuenta que los datos deben estar accesibles para todos los nodos ya que un contenedor que usase los datos podría ser lanzado en cualquiera de ellos. REX-Ray es un sistema de almacenamiento en red que cubre estas necesidades, es simple de instalar, configurar y de iniciar. En el artículo muestro un ejemplo usando REX-Ray junto con Docker Swarm y VirtualBox."
---

{{% post %}}

{{< logotype image1="docker.svg" title1="Docker" width1="200" >}}

Los contenedores de datos son efímeros, se crean y se destruyen y con ellos los datos que tuviesen en su sistema de archivos de modo que cualquier dato que queramos que sobreviva a la vida del contenedor ha de almacenarse de forma externa, este es el caso de los datos de una base de datos como [PostgreSQL][postgresql] o [MongoDB][mongodb]. Además usando [Docker Swarm][docker-swarm] se plantea el problema de que hay varios nodos formando un _cluster_ por lo que los datos han de estar accesibles independientemente del nodo en el que sea iniciado el contenedor que los utilice y significa que los datos no pueden estar almacenados en el nodo ya que un contenedor podría ser iniciado en cualquiera de ellos.

Así que los contenedores iniciados en un _cluster_ de Docker Swarm que usen datos persistentes necesitan un sistema de almacenamiento en red externo a los contenedores y nodos. Una de las opciones disponibles es [REX-Ray][rex-ray] que ofrece una configuración sencilla y múltiples proveedores de computación entre las que están las más populares como [Amazon EC2][amazon-ec2], [Digital Ocean][digital-ocean], [Google Compute Engine][google-compute], [microsoft-azure][microsoft-azure] e incluso [VirtualBox][virtualbox].

En el siguiente ejemplo uso un _cluster_ de nodos Docker, VirtualBox y REX-Ray para proporcionar volúmenes de datos persistentes para un contenedor que tiene una base de datos postgres basándome en el artículo previo [Crear un _cluster_ de contenedores Docker][blogbitix-216] donde explicaba como crear un _cluster_ de nodos con Docker Swarm.

Para la integración entre VirtualBox y REX-Ray hay que iniciar primero un servidor en el _host_ que permite a REX-Ray hacer llamadas remotas a VirtualBox para que gestione los volúmenes de datos.

{{< code file="02-vboxwebsrv.sh" language="bash" options="" >}}

Si hay un _firewall_ hay que permitir el tráfico para el puerto _18083_, en mi caso que uso _ufw_ creando la siguiente regla.

{{< code file="ufw.sh" language="bash" options="" >}}

Con el _cluster_ creado debemos instalar y configurar REX-Ray en cada uno de los nodos ejecutando varios comandos, un comando instala REX-Ray, otro crea el archivo de configuración en _/etc/rexray/config.yml_ y finalmente otro inicia el servicio de REX-Ray. Algunas opciones que se indican en el archivo de configuración de REX-Ray es la ubicación en el _host_ donde se guardan los volúmenes con el parámetro _volumePath_.

{{< code file="03-rex-ray-install.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:instalacion-rex-ray.png" optionsthumb1="300x200" title1="Instalación de REX-Ray en nodos de Docker Swarm con VirtualBox"
    caption="Instalación de REX-Ray en nodos de Docker Swarm con VirtualBox" >}}

Para probar la persistencia de datos usaré un _stack_ iniciado de la misma forma que en artículo [Iniciar un stack de servicios en un cluster de Docker Swarm][blogbitix-220] pero con un contenedor de postgres que guarda los datos en un volumen de REX-Ray en _/var/lib/postgresql/data_. Para iniciar el _stack_ el _custer_ de Docker Swarm uso un archivo de [Docker Compose][docker-compose] con la definición del _stack_ en formato YAML.

{{< code file="docker-compose-stack-postgres.yml" language="YAML" options="" >}}
{{< code file="06-docker-compose-stack-deploy-postgres.sh" language="bash" options="" >}}

En la siguiente captura de pantalla se observa en que nodo ha sido iniciado el contenedor de postgres y que identificativo se le ha asignado.

{{< image
    gallery="true"
    image1="image:stack-deploy-postgres.png" optionsthumb1="300x200" title1="Deploy del stack de postgres"
    caption="Deploy del stack de postgres" >}}

En el _stack_ el volumen de datos postgres está declarado y creado de forma externa. Usando VirtualBox con REX-Ray en el _host_ o anfitrión se crea un archivo que contiene los datos del volumen. Al listar los volúmenes de datos además de los creados _postgres_ y _app_ están los de los discos duros de cada uno de los nodos identificados como _disk.vmdk_. El parámetro _opt=size=5_ indica que el volumen de datos es de una tamaño de 5GiB.

{{< code file="06-create-volumes.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:volumes.png" optionsthumb1="300x200" title1="Volúmenes de datos"
    image2="image:volumes-nautilus.png" optionsthumb2="300x200" title2="Archivos de volúmenes en el sistema de archivos del host"
    caption="Volúmenes de datos" >}}

Para crear algunos datos en la base de datos hay que conectarse al contenedor y lanzar algunas sentencias SQL. Hay que obtener el identificativo del contenedor de postgres, iniciar un proceso _bash_, realizar la conexión a la base de datos con el cliente _psql_ y lanzar las sentencias SQL.

{{< code file="postgres.sh" language="bash" options="" >}}

Destruyendo el _stack_ y volviéndolo a arrancar posiblemente Docker Swarm iniciará el contenedor en otro nodo del _cluster_ pero los datos seguirán estando presentes en la base de datos postgres, se puede comprobar iniciando una nueva sesión bash en el nuevo contenedor, iniciando el cliente de psql y lanzando la consulta _select_ de SQL o con el comando <code>\dt</code> para obtener las tablas de la base de datos, _\d+ company_ para obtener una descripción de la tabla y la consulta SQL _SELECT * FROM company;_.

{{< code file="docker-compose-stack-remove-postgres.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/DockerSwarm" >}}

{{< reference >}}
* [REX-Ray Installation](https://rexray.readthedocs.io/en/v0.3.3/user-guide/installation/)
* [REX-Ray Installation - Docker Machine (VirtualBox)](https://rexray.readthedocs.io/en/v0.3.3/user-guide/installation/#docker-machine-virtualbox)
* [REX-Ray Storage Providers - VirtualBox](https://rexray.readthedocs.io/en/v0.3.3/user-guide/storage-providers/#virtualbox)
* [REX-Ray - Applications](http://rexray.readthedocs.io/en/stable/user-guide/applications/)
{{< /reference >}}

{{% /post %}}
