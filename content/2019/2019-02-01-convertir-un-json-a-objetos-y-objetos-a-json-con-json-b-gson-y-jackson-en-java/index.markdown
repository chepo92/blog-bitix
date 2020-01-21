---
pid: 378
type: "post"
title: "Convertir un JSON a objetos y objetos a JSON con JSON-B, Gson y Jackson en Java"
url: "/2019/02/convertir-un-json-a-objetos-y-objetos-a-json-con-json-b-gson-y-jackson-en-java/"
date: 2019-02-01T17:30:00+01:00
updated: 2019-02-02T10:15:00+01:00
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

Continuando la serie de pequeños artículos sobre cómo procesar JSON después de ver anteriormente otras dos formas, [Generar, procesar y modificar documentos JSON con JSON-P en Java][blogbitix-374] y [Usar expresiones JSONPath para extraer datos de un JSON en Java][blogbitix-376], en este artículo hay una tercera.

En las dos primeras si los datos son muchos o son todos la tarea de recuperar los datos uno a uno requiere una buena cantidad de código. Dado que un JSON no son nada más que valores, arrays y mapas utilizando la estructuras de datos equivalentes de Java se puede hacer una correspondencia entre los datos del JSON a objetos POJO siguiendo ciertas convenciones.

Una vez que los datos han sido cargados en instancias de objetos se recuperan con los correspondientes métodos _get_ que contengan las instancias, además dado que las propiedades de los objetos tiene un tipo se realiza la conversión adecuada para convertir el dato del JSON al tipo de la propiedad del objeto.

Hay tres librerías distintas populares para hacer este _binding_ entre JSON y objetos. [JSON-B][json-b], [Gson][gson] y [Jackson][jackson] siendo la primera la más estándar en el lenguaje Java. En los siguientes ejemplos dada una cadena con JSON y la clase raíz a la que hacer la correspondencia de las propiedades se crea una instancia de _Comprador_ y múltiples de _Direccion_. La correspondencia entre las propiedades del JSON y del objeto se hace en base al nombre.

Se utilizan los métodos _toJson()_ tanto en JSON-B como en Gson y el método _writeValueAsString()_ en Jackson para convertir a JSON y los métodos _fromJson()_ y _readValue()_ para convertir desde JSON a objetos. Estos métodos devuelven una instancia de la clase raíz indicada y acceder a las propiedades se hace con los correspondientes _getter_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="Comprador.java" language="java" options="" >}}
{{< code file="Direccion.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

Para añadir tipos de datos que no están entre los básicos de JSON como es una fecha cada librería proporciona interfaces o clases abstractas para hacer la conversión desde el dato a un tipo de JSON y desde JSON al tipo del dato. En este caso para un tipo de dato [LocalDate](javadoc11:java.base/java/time/LocalDate.html).

{{< code file="JsonLocalDateAdapter.java" language="java" options="" >}}
{{< code file="GsonLocalDateTypeAdapter.java" language="java" options="" >}}
{{< code file="JacksonLocalDateSerializer.java" language="java" options="" >}}
{{< code file="JacksonLocalDateDeserializer.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaJson" command="./gradlew run" %}}

{{< reference >}}
* [JSON-B Users Guide](http://json-b.net/users-guide.html)
{{< /reference >}}

{{% /post %}}
