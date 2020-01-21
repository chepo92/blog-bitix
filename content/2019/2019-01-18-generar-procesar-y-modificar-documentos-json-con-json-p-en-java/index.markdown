---
pid: 374
type: "post"
title: "Generar, procesar y modificar documentos JSON con JSON-P en Java"
url: "/2019/01/generar-procesar-y-modificar-documentos-json-con-json-p-en-java/"
date: 2019-01-18T18:00:00+01:00
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

Los servicios que ofrecen una API REST normalmente emplean JSON como formato para intercambiar datos tanto en las peticiones como en las respuestas. En Java hay varias formas de generar y procesar JSON para obtener los datos que contiene.

Una de las formas estándar es usando la [especificación JSON-P][json-p] que convierte un JSON a una estructura de objetos Java que representan los datos del JSON como son los objetos [Json](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/Json.html), [JsonObject](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonObject.html), [JsonArray](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonArray.html), [JsonString](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonString.html) o [JsonNumber](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonNumber.html). Esta API permite convertir una cadena de texto en formato JSON a objetos de la API y una jerarquía de objetos de la API a una cadena.

{{< code file="Main-1.java" language="java" options="" >}}
{{< code file="System.out-1" language="plaintext" options="" >}}

JSON-P permite analizar un JSON recibiendo un flujo de eventos en su lectura con la _Stream API_ además de soportar las especificaciones [JSON Pointer](https://tools.ietf.org/html/rfc6901) para construir una referencia a una valor del documento JSON que junto con [JSON Patch](https://tools.ietf.org/html/rfc6902) y [JSON Merge Patch](https://tools.ietf.org/html/rfc7396) permite realizar operaciones de modificación a un documento JSON o un recurso en una API REST con el verbo _PATCH_ de _HTTP_. Las clases en la API son [JsonPointer](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonPointer.html), [JsonPatch](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonPatch.html) y [JsonMergePatch](https://static.javadoc.io/javax.json/javax.json-api/1.1.4/javax/json/JsonMergePatch.html).

En el ejemplo se agrega un nuevo campo y se elimina un elemento de un array a un documento JSON haciendo uso de JSON Pointer y JSON Patch. En los documentos de las especificaciones se incluyen algunos ejemplos.

{{< code file="Main-2.java" language="java" options="" >}}
{{< code file="System.out-2" language="plaintext" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

JSON-P es una API de bajo nivel para procesar JSON y un tanto engorrosa de utilizar, no es la única forma utilizable. También está la especificación [JSON-B][json-b] que va un poco más lejos que JSON-P y ofrece una forma de hacer una correspondencia entre el JSON y tipos propios en Java que siguen las convenciones de los [Java Bean][java-bean], con esto se aprovecha la validación de tipos de Java. Las librerías [Gson][gson] y [Jackson][jackson] también ofrece soporte para tratar con JSON de forma parecida a JSON-B. Otra alternativa es utilizar [JsonPath][jsonpath] que permite extraer datos de una cadena JSON con expresiones de selección. 

{{% sourcecode git="blog-ejemplos/tree/master/JavaJson" command="./gradlew run" %}}

{{< reference >}}
* [Usar expresiones JSONPath para extraer datos de un JSON en Java][blogbitix-376]
* [Convertir un JSON a objetos y objetos a JSON con JSON-B, Gson y Jackson en Java][blogbitix-378]
{{< /reference >}}

{{% /post %}}
