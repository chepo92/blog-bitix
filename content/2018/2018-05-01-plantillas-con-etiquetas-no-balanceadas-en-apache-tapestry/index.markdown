---
pid: 317
type: "post"
title: "Plantillas con etiquetas no balanceadas en Apache Tapestry"
url: "/2018/05/plantillas-con-etiquetas-no-balanceadas-en-apache-tapestry/"
date: 2018-05-01T10:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
summary: "Apache Tapestry es uno de los mejores _frameworks_ web para Java que he usado, sin embargo, también tiene algún incordio o curiosidad. Una de ellas es que las plantillas han de ser XML bien formado y en este caso que comento en el que necesitaríamos una plantilla con etiquetas desbalanceadas nos obliga a buscar una solución, esta es la que uso."
---

{{% post %}}

{{< logotype image1="apache-tapestry-icon-light.svg" >}}

Las plantillas en [Apache Tapestry][tapestry] son XHTML, esto quere decir que al ser [archivos xml han de estar bien formados](https://es.wikipedia.org/wiki/Validaci%C3%B3n_XML#Documento_Bien_Formado) con sus etiquetas bien balanceadas y anidadas. Esto tiene la ventaja de que Tapestry nos avisará cuando se intente generar código HTML mal formado con el contenido de plantilla, una especie de compilación que si no es correcta no pasará desapercibida como en otros _frameworks_ y que puede generar otro tipo de errores. Sin embargo, también tiene una desventaja y es que si necesitamos generar una etiqueta de inicio dentro de un componente _if_ la plantilla no será válida.

Supongamos que queremos generar un contenido a tres columnas de una serie de elementos, en cada tercer elemento de la fila tendremos que cerrar la fila anterior y abrir una nueva. El ejemplo de lo que no se puede hacer es el siguiente:

{{< code file="template-1.tml" language="html" options="" >}}

En este ejemplo las etiquetas _div_ de apertura y cierre hacen que el XML de la plantilla no esté bien balanceado. No se si habrá otra forma mejor pero esta es el rodeo que uso para tener una plantilla bien balanceada y generar el contenido HTML necesario. En el código Java del componente creo un método que devuelve un mapa de trozos de HTML que no podría incluir en la propia plantilla, cada trozo de HTML tiene una clave asociada por la que identificarlo, en este caso _open_ y _close_.

{{< code file="Component.java" language="java" options="" >}}

Usando estos métodos en la plantilla el código de la plantilla _tml_ ya bien formado quedaría de la siguiente manera, usando el componente [OutputRaw](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/OutputRaw.html) se emite el trozo HTML de apertura o cierre:

{{< code file="template-2.tml" language="html" options="" >}}

Esta pequeña «ñapa» que no es muy habitual en las plantillas pero que en algún caso puede ser necesario emplear es una forma de hacer las plantillas _tml_ bien formadas en circunstancias donde incluyéndolo en la plantilla no lo sería.

Prefiero que Tapestry me valide que el XML de la plantilla esté bien formado evitando que se pudiera generar HTML con etiquetas no balanceadas y me obligue a hacer este rodeo que la posibilidad de generar HTML con etiquetas mal balanceadas que los navegadores aceptan pero que en algún caso podría provocar una desmaquetación, aunque en los casos que se aplique esta solución hay que tener especial cuidado ya que como no se realiza ninguna validación al emitir etiquetas de forma «cruda» el HTML generado podría estar mal balanceado.

{{< plugintapestry >}}

{{% /post %}}
