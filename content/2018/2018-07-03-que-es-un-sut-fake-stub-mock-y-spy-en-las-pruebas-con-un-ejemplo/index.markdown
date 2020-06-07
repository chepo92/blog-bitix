---
pid: 331
type: "post"
title: "Qué es un SUT, fake, stub, mock y spy en las pruebas con un ejemplo"
url: "/2018/07/que-es-un-sut-fake-stub-mock-y-spy-en-las-pruebas-con-un-ejemplo/"
date: 2018-07-04T10:00:00+02:00
updated: 2020-06-07T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Las pruebas unitarias y de integración tratan de probar que el comportamiento del sujeto bajo prueba es el esperado. Este sujeto bajo prueba usará colaboradores que en las pruebas deben ser reemplazados por _fakes_ para probar las condiciones deseadas del de sujeto bajo prueba. Depdendiendo del comportamiento asignado al colaborador tenemos varios tipos: _stub_, _mock_ o _spy_."
---

{{% post %}}

Al desarrollar pruebas unitarias o de integración se emplean varios términos que no son imprescindibles conocer para hacer una prueba pero si es recomendable conocerlos para saber que diferencias hay entre ellos y saber que posibilidades tenemos para construir la prueba. Los términos básicos son sujeto bajo prueba o _subject under test_ o SUT, _fake_, _mock_, _stub_ y _spy_.

En una prueba el objeto bajo prueba es el elemento del que se quiere probar su comportamiento y que las pruebas verificarán que para los casos de prueba funciona según lo esperado. Dado que raramente el sujeto bajo prueba funciona de forma aislada sino que que se comunica con otros elementos estos colaboradores han de reemplazarse preprogramado su comportamiento, a los colaboradores se les denomina impostores o _fakes_ ya que no son los objetos reales que se usan en el programa en ejecución pero simulan su comportamiento.

Según el tipo de doble o _fake_ que sea un objeto están los siguientes tipos:

* _Stub_: es un _fake_ al que se le reprograman sus valores de retorno y se proporciona al objeto bajo prueba teniendo control sobre cuales son los valores que usa el sujeto bajo control.
* _Mock_: es un _fake_ que después de terminada la prueba puede ser examinado para comprobar si las interacciones con el sujeto bajo prueba han sido las correctas, se puede probar si un método ha sido llamado o cuántas veces ha sido llamado junto con sus parámetros. Adicionalmente al igual que los _stub_ puede preprogramarse su comportamiento. Si solo se necesita preprogramar los resultados se suele utilizar un _stub_ y solo cuando además se necesitan verificar las interacciones se usa un _mock_.
* _Spy_: es un _fake_ en el que solo un subconjunto de métodos son _fake_ y a menos que explícitamente sean _mockeados_ el resto de métodos son los reales.

Los colaboradores permiten hacer los casos de prueba deterministas haciendo que siempre produzcan el mismo resultado y las pruebas no se vean afectados por condiciones externas, los colaboradores evitan efectos colaterales, evitan depender del entorno de computación, hacen que las pruebas sean rápidas por no necesitar de sistemas externos como una base de datos o servicio de red y permiten probar comportamientos inusuales en un entorno real.

En el ejemplo se quiere probar un sistema de alarma que cuando detecte en tres mediciones consecutivas que la temperatura está por encima de cierto valor suene una alarma. Los elementos de este sistema serán una clase _Monitor_ que obtiene las temperaturas de un sensor y si detecta la condición de una temperatura elevada hace sonar una alarma. El monitor será el sujeto bajo prueba y el sensor y la alarma los colaboradores. El sensor será un _fake_ de tipo _stub_ ya que solo se necesita preprogramar sus valores de retorno de temperaturas y la alarma un _fake_ de tipo _mock_ ya que se debe comprobar que el monitor ha llamado una vez al método que haría sonar la alarma, esto es se necesitan verificar las interacciones.

{{< image
    gallery="true"
    image1="image:monitor.png" optionsthumb1="650x450" title1="Sistema simulado"
    caption="Sistema de control de temperatura simulado" >}}

{{< code file="Sensor.java" language="java" options="" >}}
{{< code file="Alarm.java" language="java" options="" >}}
{{< code file="Monitor.java" language="java" options="" >}}
{{< code file="MonitorSpec.groovy" language="groovy" options="" >}}

Se pueden hacer más casos de prueba como por ejemplo probar que tras dos temperaturas altas siendo la siguiente baja y posteriormente otra alta la alarma no es disparada.

En el libro [Java Testing with Spock](https://amzn.to/2MMSV2J) explican toda esta teoría básica de pruebas además de explicar bastante detalladamente todas las posibilidades de la herramienta de _testing_ [Spock][spock].

Los dobles permiten susituir dependencias y programar su comportamiento, en algunos casos no es posibler o no es deseable. Si se quiere probar un componente que accede a una base de datos el doble puede tener diferencias con la base de datos real. Para estos casos se usan pruebas de integración, la dificultad está disponer de estas dependencias en el entorno de prueba. La herramienta [Testcontainers sirve para realizar pruebas de intergración en Java usando contendores Docker][blogbitix-490].

{{< amazon
    linkids="b57d8e90599c681fc8e794027e17bea3"
    asins="1617292532" >}}

{{< sourcecode git="blog-ejemplos/tree/master/TestingStubMock" command="./gradlew test" >}}

{{< reference >}}
* [Mock object](https://en.wikipedia.org/wiki/Mock_object)
{{< /reference >}}

{{% /post %}}
