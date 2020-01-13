---
pid: 62
type: "post"
title: "Conferencia BilboStack 2015"
url: "/2015/01/conferencia-bilbostack-2015/"
date: 2015-01-18T13:00:00+01:00
updated: 2016-01-31T10:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:bilbostack.png"
tags: ["planeta-codigo"]
series: ["bilbostack"]
---

{{% post %}}

{{< logotype image="bilbostack.png" title="BilboStack" width="300" >}}

Un año más una de las primeras conferencias del año se ha celebrado en Bilbao, la [BilboStack][bilbostack] 2015. Esta edición del 2015 ha sido la cuarta entrega donde varios profesionales del sector de las tecnologías han hablado de diversos temas, desde programación hasta metodologías de desarrollo y algunas otras cosas relacionadas con la tecnología y el desarrollo. Cada año la BilboStack acoge a más asistentes en la [Universidad de Deusto](http://www.deusto.es) dando lugar este año a un cambio de ubicación dentro de la propia universidad para poder dar cabida a todos de forma más cómoda. Como en ediciones anteriores este año ha seguido manteniéndose gratuita, lo único necesario ha sido el registro para adquirir la entrada.

{{< image
    gallery="true"
    image1="image:universidad.jpg" optionsthumb1="300x200" title1="Universidad de Deusto" >}}

Hasta el momento el formato de la conferencia ha sido presentaciones de 45 minutos en dos tracks simultáneos en horario únicamente de mañana y durante un día, siendo la agenda de este 2015 la siguiente:

<table class="table">
    <thead class="thead-light">
        <th class="thead-light" width="140px">Hora</th>
		<th>Track 1</th>
	</thead>
	<tbody>
		<tr>
			<td style="vertical-align: top;">9:00 - 9:45</td>
			<td>Desarrollo de aplicaciones web con .NET en MAC: open source, multiplataforma e incluso gratuito <em>por Ibon Landa</em></td>
		</tr>
		<tr>
			<td>10:00 - 10:45</td>
			<td>Google es ciego <em>por Oihana Alberdi</em></td>
		</tr>
		<tr>
			<td>11:15 - 12:00</td>
			<td>Descubriendo los Beacons <em>por Borja Reinares</em></td>
		</tr>
		<tr>
			<td>12:15 - 13:00</td>
			<td>¿Qué es eso de IoT? <em>por Quique Martinez</em></td>
		</tr>
		<tr>
			<td>13:15 - 14:00</td>
			<td>Bomberos pirómanos <em>por Ujue Agudo y Aritz Suescun</em></td>
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
			<td style="vertical-align: top;">9:00 - 9:45</td>
			<td>Errores comunes en la visualización de datos y algunas soluciones <em>por Pablo Garaizar</em></td>
		</tr>
		<tr>
			<td>10:00 - 10:45</td>
			<td>ReactJS: un enfoque distinto a la UI en JavaScript <em>por Eduard Tomás</em></td>
		</tr>
		<tr>
			<td>11:15 - 12:00</td>
			<td>Creando directivas para AngularJs <em>por Hugo Biarge</em></td>
		</tr>
		<tr>
			<td>12:15 - 13:00</td>
			<td>WordPress al limite <em>por Asier Marqués</em></td>
		</tr>
		<tr>
			<td>13:15 - 14:00</td>
			<td>Arquitectura frontend de CartoDB <em>por Javi Santana</em></td>
		</tr>
	</tbody>
</table>

{{< image
    gallery="true"
    image1="image:track1.jpg" optionsthumb1="300x200" title1="Sala track 1" >}}
{{< image
    gallery="true"
    image1="image:track2.jpg" optionsthumb1="300x200" title1="Sala track 2" >}}

Como cada año no puede faltar alguna presentación del ubicuo JavaScript y en las presentaciones de años anteriores ha habido de PHP, Python, Groovy y .NET pero aún no ha habido ninguna de Java (a pesar de que será uno de los más usados por los asistentes). Después de revisar la agenda de este año he asistido únicamente y a todas a las presentaciones del track 1. Del track 2 me llamaban la atención la de ReactJS, pero es una herramienta que ya conozco y que me parece de lo mejor para su propósito aún así intuía que iba a conocer poco nuevo después de escribir el artículo [Ejemplo lista de tareas con Backbone y React][blogbitix-20] y usarlo en el ejemplo simple pero ilustrativo mostrado. También me llamaba la atención Wordpress al límite y Arquitectura frontend de CartoDB. A continuación un resumen breve de cada una de las presentaciones a las que he asistido.

<hr>

### Desarrollo de aplicaciones web con .NET en MAC: open source, multiplataforma e incluso gratuito <em>por Ibon Landa</em>

Yo me muevo alrededor de la plataforma [Java][java] en vez de [.NET][dotnet] pero parece que Microsoft está dando un giro a su plataforma para dar cabida a opciones como [Linux][linux] o [Mac][mac] y hacerla un poco más abierta tanto en su desarrollo como en su comunidad. Creo que más bien por necesidad que por ser buenos, en el ámbito empresarial y de servidores Java está mucho más establecido y tiene algunas comunidades y projectos más cerca del software libre y del código abierto como [Apache][apache], [Spring][spring] o [JBoss][jboss] que además proporcionan proyectos de gran calidad y utilidad sin costes de licencias. El software libre, el código abierto y el coste de las licencias son argumentos de venta y se toman en consideración, si Microsoft no quiere dejar aislado a .NET en su propia plataforma Windows que aún con una gran cuota en el escritorio, en un futuro probablemente disminuya y mucha menos cuota en los servidores, no le queda más remedio que abrirse. Pero esta solo es mi opinión, en cualquier caso me parece un buen paso y bienvenido es.

La nueva plataforma de .NET comentada en la presentación aparte de ser agnóstico en el sistema operativo trata de ser agnóstico y quizá por facilidad de implementación cualquiera de ellos en las herramientas de desarrollo, de este modo, en esta nueva versión para el desarrollo no será necesario [Microsoft Visual Studio][microsoft-visual-studio] y podrá hacerse con cualquier editor de texto ([Sublime][sublime-text], [vim][vim], [emacs][emacs] o notepad) y desde la terminal. Esta nueva visión agnóstica de las herramientas hace que puedan ser utilizadas las que más adecuadas consideremos para una tarea aparte de las que ofrezca la propia Microsoft como [Grunt][grunt], [Bower][bower], [Karma][karma], [Jasmine][jasmine].

Después de la presentación me planteo aprender algo de .NET porque siendo pragmático hay una buena cantidad de ofertas de trabajo solicitando conocimientos en esta plataforma y algunas aparentemente interesantes.

{{< image
    gallery="true"
    image1="image:dotnet.jpg" optionsthumb1="300x200" title1="Desarrollo de aplicaciones web con .NET en MAC o Linux" >}}

### Google es ciego <em>por Oihana Alberdi</em>

El título de la presentación viene motivado porque Google procesa el contenido no como lo vemos nosotros en el navegador sino por ejemplo sin estilos, de modo que dando importancia como está definido el contenido en el html de una página y haciendo que sea accesible mejoraremos como es indexada la página por Google y por tanto su posicionamiento en el buscador, pero también mejorando la accesibilidad de una página ayudaremos a que las personas con algún tipo de impedimento pueda acceder el contenido de forma más cómoda.

En la mejora de la accesibilidad de una página intervienen tanto diseñadores (tipografía, colores, estilos externalizados) como desarrolladores (código html limpio, javascript no intrusivo) y pueden ayudarse de herramientas como [validadores de HTML](http://validator.w3.org/), [validadores de CSS](http://jigsaw.w3.org/css-validator/), [validadores de accesibilidad](http://www.tawdis.net/). También podemos comprobar como se ve una página sin estilos (como es accedida por google), con javascript deshabilitado, añadiendo atributos alt (como a imágenes), añadiendo teclas de acceso, ... algunas de estas cosas pueden probarse rápidamente con el [plugin web developer de Firefox](https://addons.mozilla.org/es/firefox/addon/web-developer/).

{{< image
    gallery="true"
    image1="image:google-es-ciego.jpg" optionsthumb1="300x200" title1="Google es ciego" >}}

### Descubriendo los Beacons <em>por Borja Reinares</em>

La verdad es que no conocía de nada que eran en el mundo tecnológico los _beacons_ salvo por lo poco que puede proporcionar su nombre, en la descripción de la charla no aparecía ningún texto de descripción. Mediante algún [artículo](https://www.20minutos.es/noticia/2052004/0/beacons/mejor-que-gps/geolocalizacion/) he podido conocer algo sobre ellos y por donde podía ir la charla. La alternativa era la presentación de [AngularJS][angular] y personalmente estando más convencido de la opción [Backbone][backbone] y [ReactJS][react] prefería conocer algo de los _beacons_.

Como su nombre indica un _beacon_ o baliza es un dispositivo que emite una señal identificable, por bluethooth ([Bluethooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy), BLE). Posteriormente, un dispositivo como un teléfono inteligente (Android, iPhone o Windows Phone) con una aplicación instalada permite procesar esa señal para ofrecer alguna función útil para el usuario en base a la distancia hasta la baliza (0,5 metros, 2m, 30m), estas sol algunas [aplicaciones de los _beacons_ con BLE](https://en.wikipedia.org/wiki/Bluetooth_low_energy#Applications). Algunos usos que se están dando a esta tecnología es en las Apple Store o en algunas tienda de ropa de EEUU.

BLE es distinto de NFC, BLE es una comunicación de 1:N, consume batería y el usuario no tiene que hacer nada, por el contrario, NFC es una comunicación 1:1, no consume energía (considerable) y necesita la intervención del usuario. Entre los retos de los _beacons_ que debe resolver es el consumo de energía, necesita una aplicación instalada en el dispositivo, la reticencia del usuario a perder privacidad o problemas legales de protección de datos.

Los _beacons_ y BLE puede ser un nuevo campo tecnológico, veremos si realmente se convierte en útil y se implanta su uso o si finalmente desaparece y posteriormente resurge como un nuevo concepto basado en el anterior que finalmente sea usado.

{{< image
    gallery="true"
    image1="image:beacons.jpg" optionsthumb1="300x200" title1="Descubriendo los Beacons" >}}

### ¿Qué es eso de IoT? <em>por Quique Martinez</em>

El [internet de las cosas](https://es.wikipedia.org/wiki/Internet_de_las_cosas) (IoT) es otro palabro que aprender, salvo que ahora tiene un nombre molón es la consecuencia de la evolución de la tecnología, no es más que encontrar una aplicación útil a los dispositivos que tienen tendencia a ser cada vez más pequeños, baratos, que pueden usar múltiples sensores y con la posibilidad de estar conectados a internet.

El número de estos dispositivos aumentará rápidamente en los próximos años tratando de ofrecer funciones útiles tanto para las empresas como para las personas. Por ejemplo, quizá en un futuro un seguro requiera que el vehículo asegurado disponga un dispositivo de estos con sensores como acelerómetro, velocímetro u otros datos cuantificables que puedan ser utilizados para determinar sin en un accidente se circulaba a más de 120 km/h o hacer una llamada de emergencia en su caso.

Otro nuevo área tecnológico en el que descubrir aplicaciones útiles y con gran potencial.

{{< image
    gallery="true"
    image1="image:iot.jpg" optionsthumb1="300x200" title1="Internet de las cosas (IoT)" >}}

### Bomberos pirómanos <em>por Ujue Agudo y Aritz Suescun</em>

Durante el desarrollo de un proyecto de software en algún momento alguien (cliente, usuario, desarrollador, consultor, jefe de proyecto, diseñador, ...) involucrado puede tener la sensación o certeza de que el producto que se está desarrollando no resuelve en alguna medida las necesidades del cliente y los usuarios y/o no es motivo de orgullo de los que lo realizan. El concepto de bombero pirómano trata de identificar estos problemas y hacerlos visibles para todos los involucrados y "prender un  fuego" con ellos como haría un pirómano. Sin embargo, estos fuegos pueden presentar peligros para el proyecto en el momento que no son tomadas medidas para apagarlos o resolverlos como haría un bombero. De esta forma se presenta el concepto de bombero pirómano formado por estos dos opuestos.

En [Biko](https://www.biko2.com/) siguen tres ideas para mantener estos fuegos controlados:

1. Quemar cuanto antes. Cuanto antes se prenda el fuego más margen de maniobra habrá en el proyecto haciendo con más garantías de que cumpla su objetivo y evitará malgastar tiempo, dinero y esfuerzo en el desarrollo.
2. Todo el equipo comparte la misma visión del proyecto. El esfuerzo es compartido por todos los involucrados evitando sorpresas cuando un fuego obliga a cambiar las funcionalidades según las restricciones que presenten los involucrados como prioridades o el mismo proyecto en tiempo o coste.
3. Mantener equilibrio constante. En el momento que aparece un fuego hay que tomar medidas para apagarlo evitando así perder el control del proyecto.

{{< image
    gallery="true"
    image1="image:bomberos-piromanos.jpg" optionsthumb1="300x200" title1="Bombero pirómano" >}}

<hr>

Por desgracia este año no ha sido posible grabar en vídeo las presentaciones pero pasados unos días seguro que se publican las diapositivas, sin embargo, con únicamente las diapositivas pierde mucho del contenido respecto a la presentación dada en vivo. En algunas presentaciones al menos se ha recogido el audio:

* Desarrollo de aplicaciones web con .NET en MAC: open source, multiplataforma e incluso gratuito _por Ibon Landa_ [Diapositivas](https://www.slideshare.net/ibonilm/open-source-and-cross-platform-net)
* Errores comunes en la visualización de datos y algunas soluciones _por Pablo Garaizar_ [Diapositivas](https://www.slideshare.net/txipi/bilbostack2015-garaizar)
* Creando directivas para AngularJs _por Hugo Biarge_ [Diapositivas y demos](https://onedrive.live.com/?cid=2BFC01CE6CF4BF53&id=2BFC01CE6CF4BF53!14323)
* ReactJS: un enfoque distinto a la UI en JavaScript _por Eduard Tomás_ [Diapositivas](https://www.slideshare.net/eduardtomas/introduccin-a-reactjs)
* Wordpress al límite _por Asier Marqués_
* Arquitectura de CartoDB _por Javi Santana_

Había en una lista de reproducción de YouTube de [elComite][elcomite] están disponibles casi todas las presentaciones de las ediciones 2012, 2013 y 2014 con las que saciar tu curiosidad. Para el año que viene si tienes posibilidad de ofrecerte para grabar las presentaciones con una cámara para poder publicarlas más tarde casi seguro que los organizadores estarían agradecidos y dispuestos a darte facilidades para ello.

Nuevamente esta edición de la BilboStack ha sido excelente gracias a sus organizadores, ponentes, Universidad de Deusto y asistentes, esperemos que en el 2016 continuemos disfrutando de esta gran conferencia.

{{% /post %}}
