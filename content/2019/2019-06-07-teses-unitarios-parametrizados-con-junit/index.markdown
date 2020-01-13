---
pid: 410
type: "post"
title: "Teses unitarios parametrizados con JUnit"
url: "/2019/06/teses-unitarios-parametrizados-con-junit/"
date: 2019-06-07T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:junit.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Hay múltiples lenguajes y librerías donde cada una publica nuevas versiones. Una vez elegida una esa decisión no tiene que ser para siempre si las circunstancias de un proyecto cambian o una nueva versión incorpora las funcionalidades por las que se eligió otra. Si se reconsideran de nuevo el conjunto de todos los parámetros la decisión puede ser distinta. Esto me ha ocurrido al evaluar de nuevo JUnit comparándolo con Spock, teniendo en cuenta que en JUnit 5 han incorporado los teses parametrizados y el lenguaje que utiliza cada una de ellas."
---

{{% post %}}

{{< logotype image1="junit.png" title1="JUnit" width1="200" image2="java.svg" >}}

En mis preferencias de herramientas que elegiría para un proyecto basado en la plataforma Java estaba [Spock][spock], por la legibilidad de los teses con su lenguaje específico de dominio  o DSL con sus diferentes secciones _given_, _when_, _then_. Otro motivo era la posibilidad de ejercitar un mismo test pero con diferentes parámetros para ejecutar todas las condiciones del sujeto bajo prueba con la sección _where_ y las posibilidades de _mocking_ incorporadas. Pero Spock usa el lenguaje [Groovy]. Es menos verboso, es dinámico pero que no posee igual la asistencia de código de los IDEs y por su naturaleza dinámica con posibilidad de errores de compilación no detectados hasta en tiempo de ejecución. En mis preferencias está el lenguaje Java así que he revisado si estás características de Spock son ofrecidas por [JUnit][junit] desde la última vez que lo use.

El primer motivo de usar Spock sobre la legibilidad del test se puede suplir añadiendo un comentario de línea con la sección. El segundo motivo es que en JUnit también se pueden crear teses parametrizados con varios casos de prueba. Para los teses parametrizados se puede usar la anotación [@ParameterizedTest](https://junit.org/junit5/docs/current/api/org/junit/jupiter/params/ParameterizedTest.html) con una serie de valores que en el test se reciben como un parámetro. 

Aqui se compara el mismo test usando Spock y luego JUnit.

{{< code file="StringLengthCalculatorSpecification.groovy" language="groovy" options="" >}}
{{< code file="StringLengthCalculatorTest.java" language="java" options="" >}}

O si la parametrización es más compleja usando un método que devuelve una lista de parámetros en Junit.

{{< code file="CalculatorSpecification.groovy" language="groovy" options="" >}}
{{< code file="CalculatorTest.java" language="java" options="" >}}

Con estas posibilidades de JUnit y para hacer _mocking_ con [Mockito][mockito] realmente los dos motivos que tenía para usar Spock no son imprescindibles además de disponer de un lenguaje con buena asistencia de código en los IDEs. También para los teses igualmente se aplican las [10 razones que tengo para seguir usando Java][blogbitix-81].

{{% /post %}}
