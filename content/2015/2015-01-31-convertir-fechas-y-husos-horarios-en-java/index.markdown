---
pid: 64
type: "post"
title: "Convertir fechas y husos horarios en Java"
url: "/2015/01/convertir-fechas-y-husos-horarios-en-java/"
aliases: ["/2015/01/fechas-y-husos-horarios-en-java/", "/2015/01/fechas-y-usos-horarios-en-java/"]
date: 2015-01-31T11:32:35+01:00
updated: 2015-08-11T23:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Aunque en muchas aplicaciones no será necesario si desarrollamos una aplicación que trabaje con diferentes paises y fechas probablemente deberemos tener en cuenta múltiples [husos horarios](https://es.wikipedia.org/wiki/Huso_horario) o zonas horarias. Según estos husos horarios, por ejemplo, en el momento que son las 12:00 en Madrid hora local no son las 12:00 en Buenos Aires, si dos ciudades emplean diferente huso horario hay que tenerlo en cuenta para obtener la hora local en cada ciudad.

Hasta la versión 7 de Java el trabajo con fechas era complicado con las clases proporcionadas [GregorianCalendar](https://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html) y [Date](https://docs.oracle.com/javase/7/docs/api/java/sql/Date.html), una alternativa a la API de Java para el manejo de fechas hasta esta versión era emplear la librería [JodaTime][jodatime]. JodaTime ofrece una API mejor y más completa para el manejo de fechas hasta la versión de Java 7. Con la [nueva API para fechas de Java 8](javadoc8:java/time/package-summary.html), [entre otras novedades incluídas][blogbitix-17], la situación ha mejorado pero hasta que tengamos oportunidad de usar esta versión puede que pase bastante tiempo y sigamos obligados a usar JodaTime si tenemos posibilidad de usar esta librería o usar directamente la API de Java 7 si no podemos.

Otro aspecto que debemos tener en cuenta en una aplicación es en que huso horario vamos a guardar las fechas en la base de datos, para simplificar lo recomendable es guardar siempre las fechas en el mismo huso horario. Podemos elegir cualquier huso horario quizá la local del lugar donde estamos o una mas genérica como UTC.

Podemos convertir la fecha de un huso horario a otro ya sea usando JodaTime, Java 7 o Java 8, por ejemplo ¿si en Madrid (España) son las 12:00 que hora sería en ese momento en Buenos Aires (Argentina)? El código que podemos emplear en Java para cambiar de zona horaria y averiguarlo es el siguiente:

{{< code file="Main.java" language="java" options="" >}}
{{< code file="output.txt" language="plaintext" options="" >}}

Java 7 requiere unas pocas líneas de código fuente más y en este caso se hace usando un SimpleDateFormat, en el caso de JodaTime y Java 8 el código es bastante similar.

El huso horario de Madrid es _Europe/Madrid_ y el huso horario de Buenos Aires es _America/Argentina/Buenos_Aires_ en el momento de escribir este artículo Madrid tiene un desplazamiento respecto a UTC de +01:00 y Buenos Aires de -03:00 con lo que entre estas dos ciudades hay una diferencia de cuatro horas en tiempo local. Quizá nos interese conocer el [tiempo local actual en una ciudad](http://www.timeanddate.com/worldclock/) y con el [conversor entre husos horarios](http://www.timeanddate.com/worldclock/converter.html) podemos comprobar que hemos programado correctamente la conversión en código.

Finalmente, hay que tener en cuenta que los [horarios de verano](https://es.wikipedia.org/wiki/Horario_de_verano) que se establecen en cada país con la intención de ajustar normalmente el horario a las horas de luz y de este modo ahorrar energía. Estos horarios de verano los establece cada país y varían más a menudo de lo que podemos creer, a veces son una cuestión política. En el JDK para actualizar estos horarios de verano debemos actualizar el JDK esperando que [Oracle][oracle] los haya actualizado debidamente o usar la herramienta [Timezone Updater Tool](https://www.oracle.com/us/technologies/java/tzupdater-readme-136440.html). El actualizar el JDK o usar la herramienta Timezone Updater Tool en un servidor para esto puede ser un problema o simplemente es algo que no controlamos como desarrolladores de la aplicación por no estar el servidor bajo nuestro control, esta es otra ventaja de usar JodaTime ya que esta librería como dependencia del proyecto si está bajo nuestro control y podemos ir actualizando la versión de la misma en la que los horarios de verano si están actualizados.

{{< reference >}}
* [Java 7 Date API](https://docs.oracle.com/javase/7/docs/api/java/util/Date.html)
* [Java 8 Time API](javadoc8:java/time/package-summary.html)
* [JodaTime][jodatime]
* [Novedades y nuevas características de Java 8][blogbitix-17]
{{< /reference >}}

{{% /post %}}
