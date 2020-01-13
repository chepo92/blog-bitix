---
pid: 437
type: "post"
title: "Ventajas de usar un tipo específico para los identificadores de las entidades en vez de un tipo básico"
url: "/2019/10/ventajas-de-usar-un-tipo-especifico-para-los-identificadores-de-las-entidades-en-vez-de-un-tipo-basico/"
date: 2019-10-18T16:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="hibernate.svg" title2="Hibernate" width2="200" image3="jooq.png" title3="jOOQ" width3="200" >}}

Al persistir una entidad de dominio en la base de datos su identificador se guarda como un tipo de datos soportado por la base de datos. Si es una base de datos relacional habitualmente es el equivalente a un _bigint_ o en una base de datos de documentos quizá un UUID. En las entidades de dominio el tipo de datos usado para el identificador es el equivalente de la base de datos en el lenguaje de programación. Por ejemplo, si en una base de datos la clave primaria es un _bigint_ el identificador en la entidad de dominio es un [Long](javadoc11:java.base/java/lang/Long.html). Esto es lo mas simple pero tiene algún inconveniente.

El inconveniente es que al ser el identificador un tipo de datos básico cualquier _Long_ es aceptado, con lo que se hacen posibles errores o malos comportamientos al usar un identificador de otra entidad de dominio si también es un _Long_ donde no se debería. El compilador no captura este tipo de errores porque entiende como correcto cualquier _Long_ independientemente de su significado desde el punto de vista de la aplicación.

También en cierta medida es un problema en la legibilidad del código ya que el tipo de dato de una variable no es significativo para saber si es un identificador. También es un problema al trabajar con colecciones, los siguientes ejemplos de código demuestran que los tipos no son todo lo semánticos o significativos que deberían.

{{< code file="Collection-Long.java" language="java" options="" >}}

La solución es crear un tipo para cada identificador de cada entidad y en vez de usar un _Long_ pasar a usar un _ProductoId_, _UsuarioId_, _CompraId_ o como en el ejemplo _EventId_. Estas serían unas posibles implementaciones.

{{< code file="EntityId.java" language="java" options="" >}}
{{< code file="LongId.java" language="java" options="" >}}
{{< code file="EventId.java" language="java" options="" >}}

El tipo de las colecciones ahora son más semánticas además de que el compilador realizará comprobaciones de tipos.

{{< code file="Collection-EventId.java" language="java" options="" >}}

En la popular herramienta ORM de persistencia [Hibernate][Hibernate] o JPA se puede usar el tipo propio para el identificador usando la anotación [@Converter](https://javaee.github.io/javaee-spec/javadocs/javax/persistence/Converter.html) y en otra alternativa de persistencia para Java como [jOOQ][jooq] especificando en el generador el tipo que se quiere usar para una columna. En ambos casos hay que proporcionar una implementación que convierta del tipo de la base de datos al del identificador en el dominio y viceversa. Son muy simples.

{{< code file="EventIdConverter-hibernate.java" language="java" options="" >}}
{{< code file="EventIdConverter-jooq.java" language="java" options="" >}}

En una entidad de Hibernate los identificadores se definen de la siguiente forma.

{{< code file="Event.java" language="java" options="" >}}

En jOOQ en la configuración del generador hay que especificar que para un campo se use un _converter_.

{{< code file="build.gradle" language="groovy" options="" >}}

Con un tipo de datos propio para los identificadores es muy importante [implementar correctamente los métodos equals y hashCode][blogbitix-199] tanto en clases de identificadores como en las entidades de dominio ya que las colecciones de Java se basan en estos métodos para determinar si una colección contiene un elemento.

{{< reference >}}
* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]
{{< /reference >}}

{{% /post %}}
