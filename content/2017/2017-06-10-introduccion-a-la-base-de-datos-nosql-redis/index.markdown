---
pid: 240
type: "post"
title: "Introducción a la base de datos NoSQL Redis"
url: "/2017/06/introduccion-a-la-base-de-datos-nosql-redis/"
date: 2017-06-11T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:redis.svg"
tags: ["gnu-linux", "planeta-codigo", "programacion"]
summary: "Redis es una de las bases de datos NoSQL en este caso de tipo clave-valor. Los valores pueden ser de diferentes tipos y tiene una amplia colección de operaciones disponibles para usar según el tipo de datos asociado a la clave."
---

{{% post %}}

{{< logotype image1="redis.svg" title1="Redis" width1="200" >}}

[Redis][redis] es una de las bases de datos para almacenar información de los conocidas como [NoSQL][nosql]. Almacena los datos en memoria por lo que es muy rápido y es usada como base de datos, como cache o _broker_ de mensajes. Los datos no se almacenan en tablas como en los sistemas relacionales tradiciones [<abbr title="Relational Database Management System">RDBMS</abbr>][rdbms] como [PostgreSQL][postgresql] o [MySQL][mysql] sino en estructuras de datos como cadenas, _hashes_, listas, conjuntos, conjuntos ordenado con rangos, _bitmaps_, _hyperloglogs_ e índices geoespaciales. Incorpora replicación, _scripting_ con LUA, desalojo <abbr title="Least Recently Used">LRU</abbr>, transacciones, diferentes niveles de persistencia en disco y alta disponibilidad con [Redis Sentinel](https://redis.io/topics/sentinel) y paticionamiento con [Redis Cluster](https://redis.io/topics/cluster-tutorial).

El punto más crítico en el rendimiento en una aplicación suele estar en la base de datos relacional, dado que han de garantizar las propiedades ACID y almacenan grandes cantidades de datos en disco son lentas (comparativamente) además de presentar dificultades para escalar horizontalmente. Redis almacena los datos en memoria por lo que es significativamente más rápida que una base de datos relacional aunque con la limitación de no poder almacenar las grandes cantidades de datos medidos hoy en día en terabytes o TiB (1024 GiB) que podría almacenar una base de datos relacional. Para la necesidad de acceder datos de forma rápida, de cachear datos a los que acceder rápido, datos a los que se acceden frecuentemente, datos precalculados, hay grandes cantidades de escrituras o necesidad de escalar Redis es una opción a tener en cuenta.

Redis es un sistema de datos clave-valor en el que cada clave tiene asociado un tipo de datos y unos datos que almacena. Según el tipo de datos de la clave se pueden realizar diferentes [operaciones o comandos de consulta](https://redis.io/commands).

* [Operaciones con cadenas](https://redis.io/commands#string)
* [Operaciones con sets](https://redis.io/commands#set)
* [Operaciones con sorted sets](https://redis.io/commands#sorted_set)
* [Operaciones con lists](https://redis.io/commands#list)
* [Operaciones con hashes](https://redis.io/commands#hash)
* [Operaciones genéricas con keys](https://redis.io/commands#generic)

Usando [Docker][docker] se puede iniciar una instancia de Redis con un archivo descriptor del contenedor en formato _yml_ y el comando <code>docker-compose up</code>. Redis al igual que otras bases de datos posee un _shell_ de linea de comandos, _redis-cli_. Iniciada la instancia del contenedor y el servicio de Redis se puede iniciar una sesión de _sh_ y con ella el _shell_.

{{< code file="docker-compose.sh" language="bash" options="" >}}
{{< code file="docker-compose.yml" language="YAML" options="" >}}

Hay multitud de [clientes para los lenguajes de programación](https://redis.io/clients) más populares y otros menos usados, en Java uno de los clientes más conocidos es [Jedis](https://github.com/xetorthio/jedis). En el siguiente ejemplo un cliente Java se conecta a la instancia de Redis y lanza los varios comandos para almacenar cadenas, un _set_, _set_ ordenados, lista, _hash_ y algunas operaciones sobre claves. Este ejemplo desde Java realiza las mismas operaciones que las realizadas en el _shell_ de Redis anterior.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

Cada comando de Redis tiene una complejidad de tiempo ejecución, para obtener el mejor rendimiento hay que analizar los datos para almacenarlos en la estructura de datos adecuada de las que ofrece Redis junto con los comandos que son utilizados y su complejidad indicada en la documentación del comando en [notación Big O](https://en.wikipedia.org/wiki/Big_O_notation). Redis solo es uno de los sistemas NoSQL, hay otros conocidos con [MongoDB][mongodb] orientado a documentos o [Cassandra][cassandra] híbrido entre clave-valor y tabular.

Para un conocimiento mucho más detallado de las posibilidades de esta base de datos el libro [Mastering Redis](https://amzn.to/2s9CYfJ) o [Redis in Action](https://amzn.to/2rio3vH) son un buen inicio.

{{< amazon
    linkids="8459459236559fee49442452db7fb5b2,3d85e30c0781f28d90d25591d5183d0d"
    asins="1783988185,1617290858" >}}

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoRedis" command="docker-compose up, ./gradlew run" >}}

{{< reference >}}
* [Documentación Redis](https://redis.io/documentation)
* [Introducción a la base de datos relacional PostgreSQL][blogbitix-236]
* [Introducción a la base de datos NoSQL MongoDB][blogbitix-237]
* [Usar la base de datos NoSQL MongoDB con Java][blogbitix-239]
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
