---
pid: 488
type: "post"
title: "Copiar datos de un tipo de objeto a otro con ModelMapper"
url: "/2020/05/copiar-datos-de-un-tipo-de-objeto-a-otro-con-modelmapper/"
aliases: ["/2020/05/copiar-datos-de-un-tipo-de-objeto-a-otro-con-moddelmapper/"]
date: 2020-05-31T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Las clases DTO son clases usadas como contenedores de datos sin ninguna lógica o con muy poca, se construyen con datos copiados de otras clases. Un uso de estas clases DTO es para evitar emplear el uso del patrón _Open Session in View_ ya que aunque ofrece algunos beneficios también tiene algunos inconvenientes. La librería ModelMapper permite realizar los copiados de datos de un objeto origen a una nueva instancia destino de otra clase."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En ocasiones es necesario copiar datos de un tipo de objeto a otro tipo, no es una operación complicada basta con llamar al método _getter_ de la propiedad a copiar para obtener su valor del objeto origen y posteriormente llamar al _setter_ para establecer el valor en objeto destino. Aún siendo una operación sencilla es tediosa y puede complicarse si se han de copiar listas de objetos y si esos objetos a copiar tienen referencias a otros objetos que también hay que copiar. Si además esta es una operación común en el código es conveniente utilizar una librería específica para este propósito, una de ellas es [ModelMapper][modelmapper].

ModelMapper es una librería Java para copiar o _mapear_ propiedades de un tipo de objeto a otro tipo de objeto, permitiendo copiar también los datos de las referencias a los objetos que contengan. Soporta diferentes convenciones, copiados explícitos, conversiones y proveedores para construir los objetos destino e integraciones con diferentes librerías, una de ellas [jOOQ][jooq].

Un posible caso de uso es para evitar emplear [el patrón _Open Session in View_][blogbitix-487] ya que tiene varios inconvenientes. Con una librería como ModelMapper es posible hacer uso de simples objetos contenedores de datos en la vista copiando los datos de las entidades a los objetos DTO. O si para obtener los datos de la vista en vez de usar una librería como Hibernate se opta por una librería como jOOQ permitir copiar los datos de los registros de jOOQ a los mismos DTOs.

El siguiente ejemplo se compone de tres clases que tienen relaciones entre ellas, estas clases podrían ser las entidades si se persistiesen en base de datos con Hibernate.

{{< code file="Order.java" language="java" options="" >}}
{{< code file="Customer.java" language="java" options="" >}}
{{< code file="Address.java" language="java" options="" >}}

La clase DTO es simplemente una nueva clase POJO que contiene los datos de las clases anteriores, para evitar el patrón _Open Session in View_ la vista recibiría una instancia de esta clase.

{{< code file="OrderDTO.java" language="java" options="" >}}

En esta aplicación de [Spring Boot][spring-boot] se construye una instancia de la clase [ModelMapper](http://modelmapper.org/javadoc/org/modelmapper/ModelMapper.html) y posteriormente con su configuración y convenciones por defecto realiza el copiado de datos de una instancia de la clase _Order_ a una nueva instancia de la clase _OrderDTO_. En la salida del programa en la consola se muestran los valores de las propiedades de _OrderDTO_ copiadas de la clase _Order_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

El archivo de contrucción [Gradle][gradle] contiene la dependencia de ModelMapper.

{{< code file="build.gradle" language="groovy" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/ModelMapper" command="./gradlew run" %}}

{{% reference %}}
* [ModelMapper jOOQ Integration](http://modelmapper.org/user-manual/jooq-integration/)
{{% /reference %}}

{{% /post %}}
