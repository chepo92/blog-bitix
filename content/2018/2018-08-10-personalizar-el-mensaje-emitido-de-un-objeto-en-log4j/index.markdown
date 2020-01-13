---
pid: 338
type: "post"
title: "Personalizar el mensaje emitido de un objeto en Log4j"
url: "/2018/08/personalizar-el-mensaje-emitido-de-un-objeto-en-log4j/"
date: 2018-08-10T18:00:00+02:00
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

Usar una librería como [Log4j][log4j] es probablemente indispensable en una aplicación para obtener información de su funcionamiento, mensajes informativos, advertencias, errores o excepciones que se están produciendo o se han producido. Los mensajes que se emiten contienen información útil para monitorización en tiempo real o su inspección pasado un tiempo.

En cada punto de la aplicación en la que se desea emitir una traza es necesario proporcionar el formato del mensaje y sus parámetros extraídos de las propiedades de los objetos con la intención obtener una traza con los valores de determinadas propiedades. Si es habitual emitir una traza de ciertas clases para evitar poner la misma traza en diferentes puntos de la aplicación Log4j posee una funcionalidad para transformar en objeto en un mensaje personalizado como se comenta en su [documentación para mensajes](https://logging.apache.org/log4j/2.x/manual/messages.html).

El método _toString()_ muy posiblemente no es la mejor solución para transformar un objeto a un [String](https://docs.oracle.com/javase/10/docs/api/java/lang/String.html) de modo que sea emitido por Log4j, quizá su valor no sea lo desedeado, se use este método para otro tipo de funcionalidad y no sirve en el caso de querer diferentes mensajes en diferentes lugares de la aplicación.

En Log4j implementando una clase de tipo [Message](http://logging.apache.org/log4j/log4j-2.3/log4j-api/apidocs/org/apache/logging/log4j/message/Message.html) se transforman esas instancias en el mensaje de información personalizado. En el caso de la implementación de _Message_ en _SimpleProductMessage_ genera una traza con solo su identificativo y su nombre para la clase _Product_. En el caso de _ProductMessage_ genera una traza más completa con su identificativo, nombre y color.

El método heredado de [getFormattedMessage()](http://logging.apache.org/log4j/log4j-2.3/log4j-api/apidocs/org/apache/logging/log4j/message/Message.html#getFormattedMessage()) es el encargado de generar la traza en este caso utilizando como apoyo los métodos también heredados [getFormat()](http://logging.apache.org/log4j/log4j-2.3/log4j-api/apidocs/org/apache/logging/log4j/message/Message.html#getFormat()) que contiene el patrón del mensaje y [getParameters()](http://logging.apache.org/log4j/log4j-2.3/log4j-api/apidocs/org/apache/logging/log4j/message/Message.html#getParameters()) que devuelve como parámetros para el patrón del mensaje los valores de las propiedades.

{{< code file="SimpleProductMessage.java" language="java" options="" >}}
{{< code file="ProductMessage.java" language="java" options="" >}}
{{< code file="Product.java" language="java" options="" >}}

En los siguientes casos se utilizan diferentes formas para emitir la traza. En el primer caso se utiliza la forma habitual de proporcionar el patrón y sus parámetros, el segundo caso utiliza el método _toString()_ del objeto. En el tercer y cuarto caso se utilizan las clases que implementan la interfaz _Message_ emitiendo un mensaje diferente cada una de ellas sin tener que proporcionar el patrón ni extraer las propiedades de la clase _Producto_ ya que son estas implementaciones en las que se delega esto.

{{< code file="Main.java" language="java" options="" >}}

En todos estos casos las trazas emitidas son las mismas salvo en el caso de _ProductMessage_ que muestra una traza con más información.

{{< code file="System.out" language="plaintext" options="" >}}

En la [API de Log4j](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/index.html) hay multitud de clases [Message](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/index.html) ya implementadas, por ejemplo, [MapMessage](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/message/MapMessage.html) para objetos del tipo [Map](https://docs.oracle.com/javase/10/docs/api/java/util/Map.html) entre otros muchos.

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="log4j2.yaml" language="YAML" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/Log4j" command="./gradlew run" >}}

{{% /post %}}
