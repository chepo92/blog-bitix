---
pid: 266
type: "post"
title: "La triste realidad de Java, versiones antiguas"
url: "/2017/10/la-triste-realidad-de-java-versiones-antiguas/"
aliases: ["/2017/10/la-triste-realidad-de-java-de-versiones-antiguas/"]
date: 2017-10-01T11:30:00+02:00
updated: 2017-10-04T19:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "opinion",]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Algunos desarrolladores que utilizan el lenguaje de programación Java desearían que el tiempo que pasa entre publicación de una nueva versión y la siguiente fuese menor. Las nuevas versiones incorporan modificaciones en el lenguaje y en la API que facilitan el trabajo de los desarrolladores haciendo que escriban menos líneas de código, haciendo que el código fuente sea más legible que al final redunda en software con menos _bugs_, con más funcionalidades, un tiempo de desarrollo menor y con menos costes.

La versión de Java 9 fue publicada en septiembre de 2017 con algunos aplazamientos hasta estar todas las [novedades de Java 9][blogbitix-263] listas, principalmente la nueva modularidad. La versión de [Java 8 también con importantes novedades][blogbitix-17] fue publicada con tres años de anterioridad, en marzo de 2014. En las últimas versiones entre cada una han pasado algunos años.

* JDK 1.0 (Enero 23, 1996)
* JDK 1.1 (Febrero 19, 1997)
* J2SE 1.2 (Diciembre 8, 1998)
* J2SE 1.3 (Mayo 8, 2000)
* J2SE 1.4 (Febrero 6, 2002)
* J2SE 5.0 (Septiembre 30, 2004)
* Java SE 6 (Diciembre 11, 2006)
* Java SE 7 (Julio 28, 2011)
* Java SE 8 (Marzo 18, 2014)
* Java SE 9 (Septiembre 21, 2017)

Y de otros de los populares _frameworks_ para programación de aplicaciones web de servidor como [Apache Struts][struts] y [Spring Framework][spring] que aún se siguen utilizando en versiones como 1 y 3 respectivamente en algunos casos:

* Struts 1.1 (2003)
* Struts 1.2 (2004)
* Struts 1.3 (2008)
* Struts 2 (2007)
* Struts 2.1 (2009)
* Struts 2.2 (2010)
* Struts 2.3 (2011)
* Struts 2.5 (2016)
* Spring Framework 1 (2004)
* Spring Framework 2 (2006)
* Spring Framework 2.5 (2007)
* Spring Framework 3 (2009)
* Spring Framework 3.1 (2011)
* Spring Framework 3.2.5 (2013)
* Spring Framework 4 (2013)
* Spring Framework 4.2 (2015)
* Spring Framework 5 (2017)

En Java 9 el calendario de publicaciones va a cambiar optando por un modelo basado en fechas fijas cada seis meses y cada tres años para las versiones con soporte de largo plazo. Cada una de estas nuevas versiones incorporará las características que estén listas para ser publicadas lo que evitará que si una novedad se retrasa no retrase al resto de novedades que ya estén listas, simplemente se publicará en la siguiente versión al cabo de unos meses. Esto va a hacer que el número de versiones aumente significativamente a lo que hasta ahora ha ocurrido.

Sin embargo, y a pesar de que algunos desarrolladores se han quejado de el tiempo que pasa entre versión y versión y que ahora con el nuevo calendario se le dará solución, ¿en algunos entornos va a cambiar algo? Si resulta que algunas organizaciones ya sean entes públicos o empresas privadas siguen utilizando versiones de Java como la 6 e incluso la 5 que fueron publicadas hace ya más de una década. Una década en el ámbito tecnológico es una eternidad. O de Spring como la 3 del 2009 o incluso de Struts como la 1 en el mejor de los casos del 2008 que ya incluso ni siquiera tiene soporte ni se siguen desarrollando lo que implica falta de soporte de seguridad. Y no es por que cada nueva versión de Java sea incompatible con la anterior, precisamente lo contrario, la compatibilidad hacia atrás es una de las cosas que siempre se le da una gran importancia en la plataforma a veces incluso por encima de nuevas características, tanto que aún código compilado a _bytecode_ en las versiones 1.0, 1.1 y 1.2 funcionaría perfectamente con la JVM de Java 9.

Algunas de estas organizaciones pueden tener necesidad de utilizar versiones durante un periodo de tiempo largo ya sea por el número y tamaño de las aplicaciones que manejan pudiendo ser de un servicio crítico o por el coste que supone reemplazarlas o adaptarlas a tiempos más modernos. Pero usar software de hace una década parece algo excesivo para las aplicaciones nuevas que se desarrollan hoy, aún así si siguen usando versiones antiguas seguro que tendrán motivos. Versiones antiguas de librerías y sin posibilidad de usar las que no estén homologadas en la organización que por desgracia la lista es muy limitada. Generar gráficas con [JFreeChart][jfreechart], PDF con [JasperReports][jasperreports] o [PDFBox][apache-pdfbox], Excel con [Apache POI][apache-poi] son solo algunas de las necesidades habituales pero para otras es raro no encontrar alguna librería que lo facilite en gran medida.

O usan _frameworks_ propios que a mi no me interesa aprender porque además de usar librerías ya antiguas fuera de esa organizaciones no tienen ninguna validez con lo que uno queda encadenado profesionalmente al menos en parte a esa organización y no me parece recomendable para un futuro profesional.

El resultado es que aún celebrando la publicación de una nueva versión de Java en muchas organizaciones pasarán muchos años, quizá algún lustro o una ¡década! antes de que la utilicen como ya pasa ahora. Y esta es la triste realidad de Java en algunos sitios. Posiblemente solo en algunas _startups_ que no tienen una carga tan grande puedan utilizar la última versión de Java al contrario de lo ocurre en otras organizaciones y entornos corporativos mayores.

Algunas empresas se quejan de que faltan trabajadores para cubrir puestos técnicos pero para completar el asunto digamos también que faltan salarios, condiciones laborales dignas, menos subcontratación o externalización u _outsourcing_ y proyectos interesantes en algún aspecto como podría ser el tecnológico que a uno le motive a postular a un puesto de trabajo. Yo al menos aparte del sueldo también valoro en buena medida la tecnología que se vaya a usar en el proyecto buscando que no esté obsoleta y que me permita seguir aprendiendo, al menos con la posibilidad de elegir trabajo.

Y como escuché en cierta charla en [una de las BilboStack][blogbitix-123], luego dirán que Java es una mierda, ya, una mierda, ¿del 2006?, ¿hablamos de Java 9, [jOOQ][jooq], [Gradle][gradle], [Spock][spock], [Lombok][lombok], [Byte Buddy][bytebuddy], [Vavr][vavr], [Spring 5][spring], [Java EE 8][java-ee], [Spring Boot][spring-boot], [WildFly][wildfly], _frameworks_ de servidor basados en componentes desde hace años con similitudes con los que ahora a la gente se le _hace el culo pepsi-cola_ en JavaScript con [React][react] y [Vue][vuejs]?... por mencionar algunas pocas.

Quizá en la capital del reino de súbditos o en la capital de la nación que quiere votar sí o no a su independencia haya más posibilidades de encontrar un trabajo más interesante tecnológicamente pero en el páramo de la periferia no hay tantas posibilidades o de incluso crearlas... quizá algún día.

{{% /post %}}
