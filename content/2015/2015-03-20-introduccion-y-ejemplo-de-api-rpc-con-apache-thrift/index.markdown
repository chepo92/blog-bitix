---
pid: 72
type: "post"
title: "Introducción y ejemplo de API RPC con Apache Thrift"
url: "/2015/03/introduccion-y-ejemplo-de-api-rpc-con-apache-thrift/"
date: 2015-03-20T17:03:18+01:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Las aplicaciones están pasando de ser elementos aislados, grandes y monolíticos a ser desarrolladas como varios microservicios que colaboran entre si para en conjunto ofrecer la funcionalidad deseada. Aunque los microservicios presentan sus propias problemáticas resuelven algunas que poseen los sistemas monolíticos, entre algunas de sus caracteríticas deseables están: mayor cohesión, menor acoplamiento, menor tamaño, mayor independencia de la tecnología usando la más adecuada en cada situación, más fácilmente reemplazables y despliegues más sencillos. También, la funcionalidad ofrecida por una aplicación puede quererse consumirse desde otra aplicación surgiendo de esta forma una API. Para ofrecer una API de una aplicación que pueda consumirse internamente, desde diferentes dispositivos o por terceras partes podemos usar [SOAP][soap] o [REST][rest] pero también han surgido algunas alternativas como [Apache Thrift][thrift] supliendo algunas carencias de las anteriores aún basándose en el mismo concepto de llamada a código en una máquina remota (Remote Procedure Call, [RPC][rpc]) ya visto en algunas opciones más antiguas como la misma SOAP, [RMI][rmi] o [CORBA][corba]. En este artículo explicaré algunas diferencias entre SOAP, REST y Apache Thrift y mostraré un ejemplo sencillo con código de cómo empezar a usar Apache Thrift.

En los modelos RPC las llamadas a métodos se hacen a través de la red de forma transparente aunque tendremos que tener en cuenta que se utilizando un medio no fiable y con un rendimiento menor que llamadas en la misma máquina que notaremos más si se usan muchas llamadas. SOAP es una forma de RPC en la que se utiliza XML, algunas críticas a SOAP son que el XML utilizado para la comunicación es complejo y los servicios SOAP no son fácilmente consumibles desde por ejemplo un navegador. Por otra parte, las API REST tratan de solventar algunas de las deficiencias de SOAP como por ejemplo estar expuestas como recursos fácilmente accesibles utilizando los mismos mecanismos de la web y un formato para el intercambio de datos como [JSON][json] más sencillo y fácilmente consumible que XML. Sin embargo, algunas críticas que se le están haciendo REST son:

* APIs asíncronas: el modelo RESTful de petición y respuesta no se adapta bien a un modelo donde hay necesidad de enviar datos de forma asíncrona evitando sondear continuamente el servidor con peticiones que consumen recursos de red y de servidor. El modelo asíncrono envía nuevos datos únicamente cuando estos se hacen disponibles.
* Orquestación y experiencia de la API: la granularidad de una API REST no se adapta correctamente a algunas situaciones haciendo necesario realizar varias peticiones HTTP lo que añade carga al cliente, servidor y la red. Orquestando APIs internas en el servidor y publicando una que esté adaptada a lo que necesitan los diferentes clientes supone un mejor rendimiento y simplicidad.
* SDKs vs APIs: los usuarios de las APIs finalmente las consumen desde un lenguaje de alto nivel como [JavaScript][javascript], [Python][python], [Ruby][ruby], [Java][java], [PHP][php], [C#][csharp], etc. con lo que los proveedores de las APIs necesitan ofrecer librerías cliente para algunos de estos lenguajes.
* Protocolos binarios: los formatos binarios son más eficientes que el texto plano, lo que es útil en dispositivos limitados como los utilizados en el internet de las cosas (IoT).
* Alta latencia: la sobrecarga que introduce el protocolo http en cada petición no lo hace adecuado en situaciones en que una baja latencia es necesaria para proporcionar un rendimiento óptimo.

Por otra parte algunos otros puntos a favor de RPC son:

* Se tiene _type safety_ y puede enviar excepciones que puede ser manejadas con la misma infraestructura ofrecida por el lenguaje de programación usado.
* Si se hacen grandes volúmenes de llamadas y datos o hay requerimientos de ancho de banda se pueden usar protocolos de transporte más eficientes que HTTP.

Apache Thrift es un _framework_ para desarrollar servicios eficientes e interoperables en diferentes lenguajes. Los lenguajes soportados en cualquier combinación de cliente y servidor son C++, Java, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, OCaml y Delphi y alguno más. Para generar el código del servidor o cliente lo primero que debemos hacer es definir la interfaz del servicio en la que estén incluidas las operaciones, parámetros y retornos junto con sus tipos. A partir de esta interfaz Apache Thrift generará el cliente o servidor en el lenguaje que deseemos. Una vez publicada una versión de la interfaz podremos modificarla sin provocar problemas de compatibilidad en los clientes como ocurría en RMI. Una desventaja de Apache Thrift es que obliga a usar esta tecnología para consumir los servicios, en este sentido una API REST es más agnóstica en la que basta con el protocolo HTTP y JSON. Se puede optar por un modelo en el que de cara al exterior se ofrece una API REST pero internamente se usan APIs RPC. Veamos un ejemplo con Apache Thrift.

Primeramente, para usar Apache Thrift debemos instalar el paquete en la distribución que usemos. En Arch Linux con:

{{< code file="pacman.sh" language="bash" options="" >}}

A continuación deberemos definir la interfaz del servicio, supongamos que queremos hacer un servicio que nos ofrezca un mensaje de ping, la hora del servidor y la suma de dos números. La interfaz de este servicio usando el DSL es:

{{< code file="Service.thrift" language="plaintext" options="" >}}

Podemos elegir cualesquiera lenguajes deseemos de la amplia lista soportada anterior, en este caso usaré Java tanto para el servidor como para el cliente. Usando el comando <code>thrift</code> e indicando el lenguaje y la interfaz generamos los artefactos:

{{< code file="gradlew.sh" language="bash" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Esto nos genera unas clases en Java y una interfaz que implementaremos para proporcionar la funcionalidad del servicio, en el caso del ejemplo la interfaz es _Service.Iface_. Para que los clientes puedan consumir este servicio debemos iniciar el servidor que no será más que un programa Java que escucha las peticiones de los clientes en un puerto.

{{< code file="Server.java" language="java" options="" >}}

Una vez están los servicios disponibles podemos consumirlos con las siguientes siguientes líneas de código de una implementación de cliente, basta hacer uso de las clase _Service.Client_ generada a partir de la interfaz del servicio.

{{< code file="Client.java" language="java" options="" >}}

Ejecutando el cliente y llamando a los métodos de la interfaz del servicio veremos en la terminal la siguiente salida:

{{< image
    gallery="true"
    image1="image:cliente.png" optionsthumb1="300x200" title1="Salida de consola del cliente"
    image2="image:servidor.png" optionsthumb2="300x200" title2="Salida de consola del servidor" >}}

Si te interesan las arquitecturas de aplicaciones con microservicios ya sea con API RPC o REST un libro muy interesante y recomendable es [Building Microservices](https://amzn.to/2Fm8ywj). Proporciona una visión detallada de los diferentes aspectos que deben tratar este tipo de aplicaciones.

{{< amazon
    linkids="231228ef7b66c3a75e0547307191c3db"
    asins="1491950358" >}}

Apache Thrift no es la única herramienta para hacer llamadas RPC, una muy similar es [gRPC][grpc] de [Google][google] e igualmente interesante al hacer uso de HTTP/2 y Protocol Buffers.

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/HolaMundoThrift) lo puedes encontrar en mi repositorio de GitHub.

{{< reference >}}
* [Is REST losing its flair? REST API Alternatives](http://www.programmableweb.com/news/rest-losing-its-flair-rest-api-alternatives/analysis/2013/12/19)
* [What is the advantage of using Thrift, as opposed to exposing an HTTP REST API?](http://www.quora.com/What-is-the-advantage-of-using-Thrift-as-opposed-to-exposing-an-HTTP-REST-API)
* [Creating a public API with Apache Thrift](http://willwarren.com/2012/01/24/creating-a-public-api-with-apache-thrift/)
* [Thrift vs Protocol Buffers vs Avro - Biased Comparison](http://es.slideshare.net/IgorAnishchenko/pb-vs-thrift-vs-avro)
{{< /reference >}}

{{% /post %}}
