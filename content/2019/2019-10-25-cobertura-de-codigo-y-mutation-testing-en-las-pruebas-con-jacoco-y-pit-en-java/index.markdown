---
pid: 438
type: "post"
title: "Cobertura de código y mutation testing en pruebas unitarias con JaCoCo y PIT en Java"
url: "/2019/10/cobertura-de-codigo-y-mutation-testing-en-pruebas-unitarias-con-jacoco-y-pit-en-java/"
aliases: ["/2019/10/cobertura-de-codigo-y-mutation-testing-en-las-pruebas-con-jacoco-y-pit-en-java/"]
date: 2019-10-25T16:30:00+02:00
date: 2019-10-25T18:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "En el caso extremo una cobertura de código del cien por cien pero que no tenga ningún _assert_ pasa los teses pero que en realidad no comprueba nada así que por si sola no es garantía de tener teses efectivos. _Mutation testing_ da una medida adicional a la cobertura de los teses más completa y efectiva que simplemente la cobertura de código ejecutado por los teses unitarios."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Una medida que se suele emplear para medir la calidad o efectividad de los teses unitarios es su cobertura de código que consiste en la cantidad de código ejercitado del total por las pruebas unitarias con los casos de prueba y _fixtures_ empleados. Sin embargo, la cobertura de código no es una medida fiable para conocer si los casos de prueba empleados son precisos y completos. La cobertura de código puede seguir siendo del cien por cien si se sustituye un un mayor que por un mayor que e igual o faltan casos de prueba que ejerciten los límites de las condiciones, los teses seguirán siendo correctos.

Para complementar la cobertura de código y obtener una medida de la precisión y completitud de los teses se emplea _mutation testing_. Esta forma de pruebas analiza el código, realiza operaciones de mutación en el código y posteriormente ejecuta las pruebas contra el código mutado y genera un resultado en el que indica cuáles de las mutaciones realizadas ha sobrevivido pasando todos los teses o cuantas mutaciones han muerto porque los teses han fallado, si alguna mutación sobrevive los teses no son precisos y completos al cien por cien.

[PIT][pit] es una librería que permite realizar _mutation testing_ en Java. Las [operaciones de mutación](https://pitest.org/quickstart/mutators/) que realiza en el código pueden ser en los condicionales, incrementos, invertir negativos, matemáticas, negar condicionales, cambiar los valores de retorno o eliminar llamadas a métodos sin retorno. Un ejemplo de mutaciones son realizar mutaciones en los límites de comparaciones, cambiando un _<_ por un _<=_ y comprobar si con operador mutado la mutación sobrevive pasando todos los teses.

<table class="table">
   <thead class="thead-light">
       <tr class="thead-light">
           <th>Original</th>
           <th>Mutación</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td><</td>
           <td><=</td>
       </tr>
       <tr>
           <td><=</td>
           <td><</td>
       </tr>
       <tr>
           <td>></td>
           <td>>=</td>
       </tr>
       <tr>
           <td>>=</td>
           <td>></td>
       </tr>
  </tbody>
</table>

En siguiente ejemplo, la clase _TicketPriceCalculator_ calcula el precio de los billetes de un grupo de viajeros. La lógica del calculador de precios determina el precio en función de la edad de los pasajeros y de si cumplen la condición de familia se les aplica un descuento.

{{< code file="Passenger.java" language="java" options="" >}}
{{< code file="TicketPriceCalculator.java" language="java" options="" >}}

La siguiente batería de teses proporciona una cobertura de teses del cien por cien tanto para la cobertura del código como para las mutaciones como se muestran en los informes de [JaCoCo][jacoco] para la cobertura de código y de PIT para la cobertura de mutaciones, después de haber realizado cambios tanto en el código como en los teses para obtener estos resultados.

{{< code file="TicketPriceCalculatorTest.java" language="java" options="" >}}

Sin los casos de prueba _calculatePriceForChildNarrowCase_ y _calculatePriceForFreeTicketNarrowCase_ los teses son correctos, pero si PIT con una edad de 16 realiza una operación de mutación cambiando los límites de la condición de _passenger.getAge() > FREE_TICKET_AGE_BELOW && passenger.getAge() <= ADULT_AGE_, la mutación de _<=_ a <_ sobrevive, esto inidica que los teses y casos de prueba no son totalmente precisos. Para que esta mutación no sobreviva hay que añadir estos dos teses que se encargan de comprobar los límites de las condiciones. El valor del caso de prueba que se debe utilizar es el valor del límite a partir del cual una persona se considera adulta, es un niño si su edad está comprendida a partir de _3_ y menor e igual que 18.

{{< image
    gallery="true"
    image1="image:tests-report-correct.png" optionsthumb1="200x150" title1="Informe de teses correcto"
    image2="image:pit-report-fail-1.png" optionsthumb2="200x150" title2="Informe de PIT incorrecto"
    image3="image:pit-report-fail-2.png" optionsthumb3="200x150" title3="Informe de PIT incorrecto"
    caption="Informe de teses correcto y de PIT incorrecto" >}}

El caso de prueba _calculatePriceForFamily_ prueba que una familia esté formada por 2 adultos y 2 menores, PIT realiza las mutaciones para considerar una familia en el caso de ser de 3 adultos o 3 menores, la prueba de _calculatePriceForFamily_ mata estas mutaciones haciendo que los teses sean precisos y completos. La cobertura de teses de mutación llega al cien por cien. En el informe de PIT se observa una descripción y número de mutaciones que ha realizado entre ellas divisiones en vez de multiplicaciones, substracciones en vez de sumas, reemplazo de valores de retorno o cambios y negaciones en condicionales. Los teses _calculatePriceForNoFamilyByNoAdults_ y _calculatePriceForNoFamilyByNoChildren_ completan la cobertura de todas las ramas del método _isFamily_.

{{< image
    gallery="true"
    image1="image:tests-report.png" optionsthumb1="300x200" title1="Informe de pruebas de JUnit"
    image2="image:jacoco-report.png" optionsthumb2="300x200" title2="Informe de cobertura de JaCoCo" >}}
{{< image
    gallery="true"
    image1="image:pit-report-1.png" optionsthumb1="300x200" title1="Informe de mutación de PIT"
    image2="image:pit-report-2.png" optionsthumb2="300x200" title2="Informe de mutación de PIT"
    caption="Informe de pruebas de JUnit, de cobertura de JaCoCo y de mutación de PIT" >}}

Para generar los informes de cobertura de código y de mutación en Java y usando [Gradle][gradle] como herramienta de construcción las herramientas JaCoCo y PIT proporcionan un complemento o _plugin_ que hay que añadir al archivo de construcción además de proporcionar algunas opciones de configuración en la sección _pitest_, entre estas propiedades está _mutators_ en la que se puede indicar los _mutators_ que PIT emplea para lanzar los teses con mutaciones. Los informes se generan en el directorio _build/reports/_. Realizar _mutation testing_ solo requiere cierta configuración en el archivo de construcción del proyecto.

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="gradlew-run.sh" language="bash" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaMutationTesting" command="./gradlew test jacocoTestReport pitest" %}}

{{< reference >}}
* [Mutation testing – PIT nuestro gran amigo](http://qajungle.com/mutation-testing-pit-nuestro-gran-amigo/)
* [Pitest - mutation testing in Java](https://beyondscheme.com/2016/pitest-with-java)
* [Mutation Testing with PITest](https://www.baeldung.com/java-mutation-testing-with-pitest)
* [Mutation Testing con PIT](https://www.adictosaltrabajo.com/2015/11/10/mutation-testing-con-pit/)
{{< /reference >}}

{{% /post %}}
