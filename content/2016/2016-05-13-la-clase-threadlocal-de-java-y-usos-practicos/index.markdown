---
pid: 142
type: "post"
title: "La clase ThreadLocal de Java y usos prácticos"
url: "/2016/05/la-clase-threadlocal-de-java-y-usos-practicos/"
date: 2016-05-13T17:00:00+02:00
updated: 2016-05-14T13:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "En Java existe una clase con la que podemos asociar un dato al hilo o _thread_ que ejecuta el código. Podemos usar esta clase para evitar incluir en cada método el parámetro de ese dato si es usado en multitud de métodos simplificando en gran medida el código. En las aplicaciones web este dato puede ser el usuario que se ha autenticado, el dominio por el que se ha accedido a la aplicación, el dispositivo móvil, el idioma del usuario o cualquier otra información que queramos esté disponible de forma global en el hilo de ejecución."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En algunos casos nos encontramos con que un determinado dato lo pasamos como parámetro en sucesivas llamadas a métodos, obligándonos a declararlo en cada uno de ellos. En una aplicación web el dato podría ser el usuario autenticado, el dominio por el que se ha accedido a la aplicación, el dispositivo móvil, el idioma del usuario, su preferencia de divisa o cualquier otra información no relativa al usuario pero que igualmente la aplicación necesita en muchos sitios y usa esta información contextual para variar su funcionalidad. En una aplicación web podemos obtener el dominio por el que es accedido la aplicación con la clase [Request](https://docs.oracle.com/javaee/7/api/javax/servlet/ServletRequest.html), asociando el dato como un atributo de la petición lo tendremos disponible de forma global en la capa de presentación. Sin embargo, este objeto _request_ solo estará disponible en la capa de presentación de la aplicación con la intención de que la capa de lógica de negocio sea independiente de la tecnología o _framework_ web. Para hacer que algún dato global también esté disponible en la capa de lógica de negocio podemos usar la clase [ThreadLocal](javadoc8:java/lang/ThreadLocal.html).

La clase _ThreadLocal_ básicamente asocia un dato con el [Thread](javadoc8:java/lang/Thread.html) que ejecuta el código, teniendo una variable global en la aplicación con la referencia a la clase _ThreadLocal_ podemos acceder al dato desde cualquier punto de la aplicación. Si necesitásemos varios datos tendríamos varias instancias globales de _ThreadLocal_.

Las variables globales es algo a evitar pero para algunos datos podemos hacer una excepción ya que entendemos que las ventajas son mayores que las desventajas, uno de los mayores peligros de las variables globales es la concurrencia si varios hilos modifican el dato global, como el dato asociado a _ThreadLocal_ es local al hilo no hay peligro, simplemente deberemos asegurarnos de que una vez el hilo de ejecución termine limpiar el dato para que la siguiente petición en una aplicación web que procese ese hilo no use una dato anterior de otra petición.

La clase _ThreadLocal_ es bastante simple tiene un método para establecer el dato con [set](javadoc8:java/lang/ThreadLocal.html#set-T-), para obtenerlo con [_get_](javadoc8:java/lang/ThreadLocal.html#get--), para eliminarlo con [_remove_](javadoc8:java/lang/ThreadLocal.html#remove--) y desde Java 8 para establecer el valor inicial con una interfaz funcional [Supplier](javadoc8:java/util/function/Supplier.html) con el método [withInitial](javadoc8:java/lang/ThreadLocal.html#withInitial-java.util.function.Supplier-).

Veamos un ejemplo en el que crearemos un filtro que detecte el dominio por el que se accede a la aplicación y lo deje disponible en una variable _ThreadLocal_ de modo que la aplicación lo tenga disponible desde cualquier capa de la aplicación. Primero crearemos una clase con variables estáticas globales que contendrá la referencia a la instancia _ThreadLocal_.

{{< code file="Globals.java" language="java" options="" >}}

A continuación el filtro que obtiene el dominio de la _request_ y lo deja en el _ThreadLocal_ de forma global. Al usar una clase _ThreadLocal_ es importante limpiar el dato correctamente, en este caso usando un bloque _try_ con su _finally_ para que aunque se produzca una excepción el dato acabe desasociado del _thread_ al finalizar la petición, de lo contrario tendremos una fuga de memoria.

{{< code file="AppFilter.java" language="java" options="" >}}

Finalmente, podemos acceder al dato desde cualquier punto de la aplicación, en este caso desde la capa de presentación en la página _Index_ de una aplicación usando [Apache Tapestry][tapestry] y desde la capa de lógica de negocio o servicios que es independiente de la capa de presentación.

{{< code file="Index.java" language="java" options="" >}}
{{< code file="DefaultJooqProductoDAO.java" language="java" options="" >}}

Con el filtro y las anteriores clases en la consola se imprimirán los mensajes con el dominio por el que ha sido accedida la aplicación, en este caso _localhost_.

{{< code file="System.out" language="plaintext" options="" >}}

En definitiva, en ciertos casos el uso selectivo de _ThreadLocal_ simplifica el código evitando incluir un parámetro en multitud de métodos y si el dato ha de recuperarse de la base de datos evita realizar la misma consulta varias veces haciendo el programa más eficiente.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry/" command="./gradlew run" >}}

{{< reference >}}
* [Alternatives to Global Variables ](https://dzone.com/articles/alternatives-to-global-variables)
{{< /reference >}}

{{% /post %}}
