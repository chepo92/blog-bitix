---
pid: 336
type: "post"
title: "Identificar todas las trazas de una petición en una aplicación web Java con Log4j"
url: "/2018/07/identificar-todas-las-trazas-de-una-peticion-en-una-aplicacion-web-java-con-log4j/"
aliases: ["/2018/07/identificar-todas-las-trazas-de-una-peticion-en-una-aplicacion-web-con-log4j/"]
date: 2018-07-30T19:45:00+02:00
updated: 2018-07-30T21:45:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En una aplicación web hay múltiples usuarios realizando peticiones al servidor de modo que al usar una librería de _logging_ como [Log4j][log4j] las trazas de información de los diferentes usuarios aparecerán intercaladas. En esta maraña de trazas resulta difícil obtener la secuencia de trazas de una petición siendo la diferencia entre descubrir la causa de un error o pasar varias horas revisando trazas sin encontrar nada significativo en la inmensa cantidad de ellas relativas a otras peticiones. La librería Log4j proporciona un mecanismo para seguir la secuencia completa de trazas de una petición con el [concepto denominado _fish tagging_](https://logging.apache.org/log4j/2.x/manual/thread-context.html).

En el contexto de una aplicación web para seguir la secuencia de trazas de una petición consiste en asignar variables con información al _thread_ que ejecuta la petición, el contenido de estas variables está disponible para emitirse en la traza. Asignando a cada petición un identificativo aleatorio único cuando se inicia la petición, en una aplicación web Java podría ser en un filtro, las trazas emitidas de cada petición quedarán relacionadas por compartir el mismo identificativo de contexto. Este identificativo significa que encontrada una relevante es posible obtener el resto de las peticiones muy fácilmente con un filtro usando ese identificativo.

El filtro podría ser el siguiente, el identificativo se genera de forma aleatoria con la clase [UUID](https://docs.oracle.com/javase/10/docs/api/java/util/UUID.html) del JDK de Java, se asigna al [ThreadContext](https://logging.apache.org/log4j/2.0/log4j-api/apidocs/org/apache/logging/log4j/ThreadContext.html) y al finalizar se limpia de información la variable de contexto en la cláusula _finally_ de un _try-catch_.

{{< code file="AppFilter.java" language="java" options="" >}}

El emitir trazas no cambia en absoluto si utilizamos esta técnica para identificar trazas.

{{< code file="Index.java" language="java" options="" >}}

En el formato usado para determinar el contenido de la trazas se pueden referenciar las variables deseadas a incluir en la traza.

* _%X_ muestra el contenido completo del _Map_.
* _%X{key}_ muestra el valor de una clave especifica del _Map_.

{{< code file="log4j2.yaml" language="YAML" options="" >}}

Y este es el resultado de emitir varias trazas habiendo establecido un identificativo en el _ThreadContext_, todas las trazas emitidas por ese _Thread_ incluirán el mismo identificativo.

En este conjunto las tres primeras corresponden a la petición de una página en la siguiendo el ciclo de vida de una página de [Apache Tapestry][tapestry] se llama primero al método _activate_ y posteriormente al método _setupRender_, estas tres poseen el mismo _UUID_ ya que se ejecutan en la misma petición. Las otras dos corresponden cada una de ellas a una petición AJAX que realiza la página _Index_ al cargarse en el navegador del cliente, cada una de estas dos peticiones AJAX se procesan en un nuevo hilo y por consiguiente poseen un _UUID_ diferente.

{{< code file="System.out" language="plaintext" options="" >}}

Para emitir trazas de forma relacionada esta no es la única posibilidad, también puede interesar [identificar con marcadores las trazas realacionadas emitidas en diferentes clases de una aplicación][blogbitix-9] en diferentes clases pero pertenecientes a la misma funcionalidad, contexto delimitado o _bounded context_.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{% /post %}}
