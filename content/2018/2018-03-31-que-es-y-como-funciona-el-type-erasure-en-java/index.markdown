---
pid: 308
type: "post"
title: "Qué es y cómo funciona el type erasure en Java"
url: "/2018/03/que-es-y-como-funciona-el-type-erasure-en-java/"
date: 2018-03-31T10:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Los tipos genéricos en Java se implementaron usando _type erasure_ por simplicidad en la implementación, no incurrir en penalizaciones de rendimiento o memoria y por mantener la compatibilidad con versiones anteriores de Java. Son varios los conceptos que están asociados a la implementación de los tipos genéricos en Java que es recomendable conocer como _type erasure_  y métodos _bridge_ de este artículo pero también _heap pollution_, _non-reifiable_, _wildcards_ y _bound type parameters_."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En la introducción de los [tipos genéricos en Java][blogbitix-138] con la versión 1.5 se decidió implementarlo usando _type erasuse_ que consiste en que en tiempo de ejecución se pierde la información de los tipos genéricos y para la máquina virtual no son distintos de un tipo no genérico, es un proceso que realiza el compilador. Esto tiene sus ventajas y algunas desventajas pero hay dos buenos motivos por los que en Java se decidió implementar los tipos genéricos usando _type erasuse_.

Un motivo es que los tipos al ser en tiempo de ejecución exactamente iguales que los no genéricos de versiones anteriores se mantiene la compatibilidad hacia atrás tanto a nivel de código como a nivel binario lo que significa en un caso que el código fuente no es necesario que sea modificado y en otro que no es necesario recompilarlo y esto es importante para usar nuevas versiones de Java sin ningún tipo de modificación y para que programas antiguos sigan funcionando. El segundo motivo es que el mismo tipo sirve para todas las posibles instancias del tipo genérico, de forma que es eficiente y no se incurre en ninguna penalización de rendimiento o memoria.

La desventaja del _type erasure_ es que en tiempo de ejecución no se pueden hacer algunas optimizaciones, en computación y uso de memoria. Sin embargo, evaluando las ventajas y desventajas los desarrolladores de Java siempre han dado gran importancia en la compatibilidad hacia atrás y por ello prefirieron implementar los _generics_ usando _type erasure_.

El proceso de eliminar los tipos de los genéricos se realiza eliminando todos los parámetros de los tipos parametrizados siendo reemplazados con su restricción (_bound_), con el tipo [Object](https://docs.oracle.com/javase/10/docs/api/java/lang/Object.html) o con con su restricción, si tiene múltiples restricciones se usa la primera.

En Java dos métodos distintos no pueden tener la misma firma, dado que los _generics_ han sido implementados con _type erasure_ también se ha de cumplir que dos métodos no pueden tener la misma firma una vez aplicado el _erasure_. Para no perder las validaciones de tipos el compilador inserta los _cast_ necesarios. El código fuente de una clase genérica sería el siguiente, que el compilador transformaría siguiendo las reglas del _type erasure_.

{{< code file="Generic.java" language="java" options="" >}}
{{< code file="Erased.java" language="java" options="" >}}

Al mismo tiempo que el compilador inserta los _cast_ necesarios para mantener la validación de tipos inserta métodos _bridge_ para mantener el polimorfismo en las clases que extienden de tipos genéricos. Si se extiende la clase _Node_ anterior y se aplica _type erasure_ la firma del método _setData_ de _IntegerNode_ no coincide con el de la clase _Node_. Para solventar este problema el compilador inserta un método _bridge_ para el método _setData_ con un parámetro _Object_ que se encarga de hacer de puente y llamar al método _setData_ que recibe un _Integer_ aplicando un _cast_.

{{< reference >}}
* [Type Erasure](https://docs.oracle.com/javase/tutorial/java/generics/erasure.html)
* [Qué es el concepto de Heap Pollution en Java][blogbitix-141]
* [What are the pros and cons of having Generics as erasure or reifiable?](https://www.quora.com/What-are-the-pros-and-cons-of-having-Generics-as-erasure-or-reifiable?share=1)
{{< /reference >}}

{{% /post %}}
