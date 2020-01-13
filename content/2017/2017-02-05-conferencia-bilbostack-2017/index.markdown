---
pid: 208
type: "post"
title: "Conferencia BilboStack 2017"
url: "/2017/02/conferencia-bilbostack-2017/"
date: 2017-02-05T00:00:00+01:00
updated: 2017-02-08T21:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "image:universidad-de-deusto-1.jpg"
tags: ["planeta-codigo"]
series: ["bilbostack"]
---

{{% post %}}

Cuando me inscribí en la [BilboStack][bilbostack] para reservar entrada no me llamaron mucho la atención las presentaciones del programa pero ya a una semana de decidir a cuales iba a ir definitivamente he tenido dificultades para elegir y en varios casos me hubiese gustado ir a las de los dos _tracks_. Como años anteriores la BilboStack se ha celebrado en Bilbao en el mismo emplazamiento de la [Universidad de Deusto][universidad-de-deusto] pero volviendo como en años precedentes al edificio de las ingenierías. Otro cambio ha sido que este año fueron cuatro presentaciones por _track_ cuando en años anteriores fueron cinco.

El número de asistentes ha sido numeroso quedando algo de sitio libre en el _track 2_ que era un aula pero en la sala de conferencias del _track 1_ aunque tiene cómodas butacas salvo por su estrechez el sitio libre era inexsitente de modo que en algunas presentaciones ha habido algunos asistentes que han debido estar de pie.

{{< image
    gallery="true"
    image1="image:bilbostack-2017.jpg" optionsthumb1="300x200" title1="BilboStack 2017"
    caption="BilboStack 2017" >}}
{{< image
    gallery="true"
    image1="image:universidad-de-deusto-1.jpg" optionsthumb1="300x200" title1="Universidad de Deusto"
    image2="image:universidad-de-deusto-2.jpg" optionsthumb2="300x200" title2="Universidad de Deusto"
    caption="Universidad de Deusto" >}}

Este era el programa completo con su horario, temas muy distintos y variados como Xamarin, _internet of things_, el siempre presente JavaScript con Angular y Node, Lean Analytics y DDD entre algunos otros de la siguiente agenda:

<table class="table">
    <thead class="thead-light">
        <th class="thead-light" width="140px">Hora</th>
        <th>Track 1</th>
    </thead>
    <tbody>
        <tr>
            <td>09:30-10:20</td>
            <td>Xamarin.Forms en el mundo real™ : Verdades y Mitos <em>por Josué Yeray</em></td>
        </tr>
        <tr>
            <td>10:30-11:20</td>
            <td>Una visión de Angular 2 y TypeScript <em>por Hugo Biarge</em></td>
        </tr>
        <tr>
            <td>11:20-11:50</td>
            <td>Café</td>
        </tr>
        <tr>
            <td>11:50-12:40</td>
            <td>Lights, Camera, Node! <em>por Catalina Oyaneder</em></td>
        </tr>
        <tr>
            <td>12:50-13:40</td>
            <td>Domain-Driven Design, uniendo negocio con el software <em>por Gorka Laucirica y Beñat Espiña</em></td>
        </tr>
    </tbody>
</table>

<table class="table">
    <thead class="thead-light">
        <th class="thead-light" width="140px">Hora</th>
        <th>Track 2</th>
    </thead>
    <tbody>
        <tr>
            <td>09:30-10:20</td>
            <td>Invisible o desaparece... <em>por Isabel Cabezas y Juliet Moreiro</em></td>
        </tr>
        <tr>
            <td>10:30-11:20</td>
            <td>Érase una vez... el Design System <em>por Naiara Abaroa</em></td>
        </tr>
        <tr>
            <td>11:20-11:50</td>
            <td>Café</td>
        </tr>
        <tr>
            <td>11:50-12:40</td>
            <td>Agile for scrummies <em>por Jorge Uriarte</em></td>
        </tr>
        <tr>
            <td>12:50-13:40</td>
            <td>Lean Analytics, mi faro de cabecera <em>por Carlos Iglesias</em></td>
        </tr>
    </tbody>
</table>

{{< image
    gallery="true"
    image1="image:track-1.jpg" optionsthumb1="300x200" title1="Track 1"
    image2="image:track-2.jpg" optionsthumb2="300x200" title2="Track 2"
    caption="Agenda" >}}

Al igual que en ediciones previas hago un pequeño resumen de las presentaciones a las que asistí. Los resúmenes no le hace justicia a las grandes ponencias que fueron en realidad pero espero haber captado y transmitir aquí escuetamente las ideas básicas que se expusieron. Y con este es el tercer resumen consecutivo que escribo de la BilboStack, los anteriores (y posteriores que si tengo oportunidad espero escribir) de esta serie de artículos están al final de este artículo.

### Invisible o desaparece... <em>por Isabel Cabezas y Juliet Moreiro</em>

El <abbr title="Internet of Things">IoT</abbr> o esos pequeños dispositivos que tienen conexión a internet están surgiendo como una forma de ayudarnos en algunas situaciones cotidianas como cambiar la ruta cuando hay un accidente para no llegar a un atasco o encender la calefacción antes de llegar a casa o antes de levantarnos, espejos que proporcionan información como notificaciones o el tiempo o un centro comercial que te posiciona y ofrece ofertas según la localización en la que estas y tus hábitos de consumo. Aparatos como [Amazon Echo](https://www.microsoft.com/cognitive-services/en-us/) son asistentes a través de los cuales mediante comandos de voz podemos realizar acciones como pedir comida a domicilio.

Estos aparatos conectados a internet nos ofrecen una nuevo área posibilidades. Muestra de ellos es la demostración presentada que consistía en base a los mensajes escritos en [Twitter][twitter] iluminar una lámpara [PLAYBULB](https://www.amazon.com/PLAYBULB-Candle-Bluetooth-Flameless-Android/dp/B00O4LHNNS/) con color verde si eran positivos, rojo si eran negativos y azul si eran neutros haciendo uso de [Microsoft Cognitive Services](https://www.microsoft.com/cognitive-services/en-us/) y de [algunas de sus APIs](https://azure.microsoft.com/es-es/services/cognitive-services/) para evaluar el sentido de los mensajes. Por ejemplo el mensaje _BilboStak is an awesome event!_ se evaluará como positivo y sumará a la media para que la lampara cambie a color verde.

El _hardware_ era la propia lámpara y una placa de computación [Intel Edison](https://software.intel.com/es-es/iot/hardware/edison) junto con un servicio en la nube de Azure pero perfectamente podría ser una [Raspberry Pi][raspberrypi] u otra de las numerosas pequeñas placas que están surgiendo en este nuevo mercado. El [código fuente del ejemplo](https://github.com/isabelcabezasm/notwificador) está compartido en un repositorio de GitHub.

{{< reference >}}
* [Presentación](https://es.slideshare.net/isabelcabezas/bilbostack-17-invisible-o-desaparece)
{{< /reference >}}

{{< image
    gallery="true"
    image1="image:invisible-o-desaparece.jpg" optionsthumb1="300x200" title1="Invisible o desaparece..." >}}

### Érase una vez... el Design System <em>por Naiara Abaroa</em>

El diseño de una página es una parte importante de la misma, no considerarlo así seguramente nos encontremos con problemas.

1. Requiere de un conocimiento específico para hacerlo bien y esta es la habilidad que posee un _front-designer_.
2. Falta de arquitectura de CSS a pesar de que existen herramientas como Sass o less se sigue produciendo código espagueti.
3. Hay duplicidades y está poco estructurado.
4. Falta de coherencia en la tipografía, color, ...
5. Problemas de especifidad al no considerar la evaluación en cascada y el orden de precedencia de _inline_, _id_, clases y elementos con lo que se ha de usar el denostado _!important_ como último recurso.
6. Mezcla de varias convenciones, en el nombrado de elementos.

La solución es el _Design System_ consiguiendo primero claridad, segundo eficiencia y finalmente «belleza». Siguiendo el [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) se consigue una mayor reutilización y facilidad de mantenimiento combinándolo con herramientas como [Sketch](https://www.sketchapp.com/) para el desarrollo de _mockups_.

Algunos recursos de diseño e implementaciones conocidas de _Design Systems_ son:

* [Material Design](https://material.io/) y su [guía](https://material.io/guidelines/material-design/introduction.html)
* [Lightning Design System](https://www.lightningdesignsystem.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Foundation](https://foundation.zurb.com/)
* Y el propio que ha comenzado a desarrollar Naiara, [nakDS](https://github.com/nabaroa/nakDS) que ha compartido en su GitHub

{{< reference >}}
* [Presentación](https://nabaroa.github.io/erase-una-vez-el-design-system/#/)
{{< /reference >}}

{{< image
    gallery="true"
    image1="image:design-system.jpg" optionsthumb1="300x200" title1="Érase una vez... el Design System" >}}

### Agile for scrummies <em>por Jorge Uriarte</em>

La situación respecto a las metodologías de desarrollo ha cambiado, hace 10 años había resistencia al cambio ahora se aplica pero tampoco resuelve mágicamente los problemas del desarrollo de todos los casos donde se usa.

Algunas esencias de _scrum_ que permanecerán son:

* En el producto: no detallar en exceso el _backlog_ ya que cambiará.
* En las historias: siendo completas, entregables individualmente y según el valor que aportan.
* En los equipos: siendo estos autoorganizados, multidisciplinares, alineados, dueños del proceso y autónomos.
* En las entregas: serán incrementales y continuas.
* En el proceso: no estará sacralizado y cambiará con el fin de mejorar al igual que tratan de conseguir las retrospectivas.

Un sistema ágil es una aproximación a la incertidumbre. Incertidumbre que siempre está presente en los desarrollos de software al tratar de responder preguntas como ¿que hay que hacer? ¿cuanto tiempo se tardará? ¿que tecnología se usará?. Para evitar los problemas que genera la incertidumbre un _work in progress_ o WIP pequeño es un buen arma. Lo terminado elimina incertidumbres, se considera que es lo menos que se puede hacer ahora que de el máximo valor. Una consecuencia es que en el flujo de desarrollo habrá menos cosas pero pasando más rápido. Esto se resume en título del libro [Stop Starting, Start Finishing!](https://amzn.to/2kB2fw9) y que tiene la siguiente reseña.

> This booklet tells the story of Justin - a project manager who achieved remarkable results with his team by doing very simple things! This guide covers the core concepts of Kanban for knowledge work, and shows how limiting your amount of work-in-progress can lead to getting things done better and faster.

{{< amazon
    linkids="3fb69c8c67a77d17456e3a5fca1ce831"
    asins="0985305169" >}}

La combinación de un WIP pequeño junto con un sistema _pull_ en el que no se construye lo no necesario, no se prueba lo que no se puede entregar, no se desarrolla lo que no se puede probar y no se especifica lo no se puede desarrollar produce una reducción de tiempos de entrega, hay mayor predictibilidad y elimina rehacer trabajo.

{{< reference >}}
* [Presentación](https://es.slideshare.net/Gailen/agile-forscrummiesbilbaostack)
{{< /reference >}}

{{< image
    gallery="true"
    image1="image:agile-for-scrummies.jpg" optionsthumb1="300x200" title1="Agile for scrummies" >}}

### Domain-Driven Design, uniendo negocio con el software <em>por Gorka Laucirica y Beñat Espiña</em>

El _Domain-Driven Design_ o DDD se centra en el dominio de la aplicación, la lógica de negocio y lo que quiere el negocio de la aplicación.

Los modelos anémicos con _getters_ y _setters_ se consideran un antipatrón y hace que la lógica esté dispersa. En el patrón MVC los controladores pueden contener múltiples responsabilidades generando duplicidad de código. Aplicar los principios [SOLID][solid] generan código limpio y una [arquitectura hexagonal](http://alistair.cockburn.us/Hexagonal+architecture) ayuda a no crear en la aplicación una dependencia con el _framework_ posibilitando usar por ejemplo Symfony como herramienta y no como base.

DDD se divide en patrones estratégicos (_bounded context_) que no tienen código y tácticos (_entities_, agregados, eventos de dominio, factorías, repositorios) que si tienen código. Hay un servicio para cada caso de uso de la aplicación. Para cosas simples junto con su curva de aprendizaje esto seguramente será demasiado complejo pero en los casos en los que haya lógica de negocio, equipos medianos/grandes si será útil.

Un ejemplo de aplicación donde han aplicado DDD es [Kreta](https://github.com/kreta/kreta).

{{< reference >}}
* Libro [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php)
{{< /reference >}}

{{< image
    gallery="true"
    image1="image:domain-driven-design.jpg" optionsthumb1="300x200" title1="Domain-Driven Design, uniendo negocio con el software" >}}

<hr>

Nuevamente gracias la dedicación de los organizadores por crear otra edición de este gran pequeño evento anual, los ponentes que altruistamente colaboran compartiendo su conocimiento y a la Universidad de Deusto por acoger un año más uno de los mejores eventos para desarrolladores de Bilbao y alrededores.

{{% /post %}}
