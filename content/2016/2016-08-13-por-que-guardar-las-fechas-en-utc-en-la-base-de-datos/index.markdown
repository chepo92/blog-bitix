---
pid: 168
type: "post"
title: "Por qué guardar las fechas en UTC en la base de datos"
url: "/2016/08/por-que-guardar-las-fechas-en-utc-en-la-base-de-datos/"
date: 2016-08-13T01:00:00+02:00
updated: 2016-08-14T02:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="postgresql.svg" title2="PostgreSQL" width2="200" >}}

Es rara la aplicación que trabajado con bases de datos no maneje fechas, quizá es menos habitual aplicaciones que trabajan con fechas y diferentes horarias, esto es haciendo alguna conversión entre zonas horarias. Si se nos presenta el caso de trabajar con fechas y diferentes zonas horarias haremos bien en hacer que las fechas que guardemos en la base de datos estén en la misma zona horaria al menos y convertirla posteriormente a la zona horaria que necesite la aplicación. <abbr title="Coordinated Universal Time">UTC</abbr> además de ser una zona horaria neutra evita el problema de que algunas bases de datos o lenguajes de programación para los campos fecha no guarda las zonas horarias con lo que puede ocurrirnos que guardemos la fecha en una zona horaria y la recuperemos en otra produciendo posiblemente incoherencias en las fechas por una hora.

### ¿Por qué elegir UTC?

Principalmente porque es una zona horaria neutra, universal y que elimina ambigüedades ya que que no tiene <abbr title="Daily Saving Time">DST</abbr> o horario de verano y podremos guardar las fechas sin temor a que al recuperarlas estén en otra zona horaria si la base de datos o el lenguaje de programación para guardarlas no las soporta.

Otros motivos que se mencionan en un comentario en inglés [Always store dates/times in UTC (in the database)](http://ideas.kentico.com/forums/239189-kentico-product-ideas/suggestions/6825844-always-store-dates-times-in-utc-in-the-database) y algún otro en [DateTime values should always be stored in UTC](http://blog.abodit.com/2010/02/datetime-values-should-always-be-stored-in-utc/) son que:

* Calcular duraciones de tiempo es simple. El periodo de tiempo entre la 2:30 AM UTC y las 3:30 AM UTC es siempre una hora cosa que no ocurre en las horas que hay cambio de horario pudiendo ser el periodo entre cero y dos horas.
* No hay fechas inválidas cuando se adelanta la hora por ejemplo de las 2:00 AM a las 3:00 AM, pudiendo ser que las 2:30 AM en esa zona horaria no exista.
* Se evitan problemas al ordenar o agrupar fechas pudiendo ser el caso de que una fecha con tiempo 2:59 AM sea antes que las 2:01 AM por causa del cambio horario.
* Los cambios horarios están sujetos a cambios nada predecibles y varían a lo largo del tiempo con relativa frecuencia con lo para calcular de forma fiable cuantas horas hay entre dos fechas se necesita guardar las variaciones históricas de DST. Ni las fechas de cambios DST son constantes ni las zonas horarias se mantienen fijas para las localizaciones.

Una vez recuperada la fecha en UTC podemos [convertir de diferentes formas una fecha de una zona horaria a otra en Java][blogbitix-64] y en cualquier otro lenguaje con las facilidades que proporcione según la zona horaria a visualizar la fecha.

### ¿Cúal es el caso que puede dar problemas?

Uno en el que la hora a guardar coincida con un cambio de hora de la zona horaria en la que guardemos las fechas. Por ejemplo, en España el año 2016 el cambio de horario de verano (DST/CEST) a horario de invierno (CET) se hará el 30 de octubre momento en el que a las 3:00 (CEST) volverán a ser las 02:00 pero con diferente zona horaria (CET).

### Ejemplo

Supongamos que tenemos la fecha 30 de octubre a las 02:30 CEST y la guardamos en la base de datos pero sin la zona horaria pasando a estar implícita. En esta fecha y hora se produce un cambio horario de horario de verano a horario de invierno en España. Al recuperar la fecha será 30 de octubre a las 02:30 CET, la diferencia está entre el <abbr title="Central European Summer Time">CEST</abbr> y <abbr title="Central European Time">CET</abbr> o la diferencia horaria +02:00 y +01:00. Una hora de diferencia entre la original y la que recuperamos de la base de datos después de hacer la conversión.

Esto puede probarse con el siguiente ejemplo de código de un programa Java que guarda y recupera de una base de datos [PostgreSQL][postgresql] una fecha que está en el intervalo de cambio horario. En el ejemplo utilizaré [Docker][blogbitix-serie-docker].

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}
{{< code file="docker-compose.yml" language="YAML" options="" >}}

Tabajar con fechas no es simple, es muy curioso y no debemos hacer [suposiciones sobre las fechas que son incorrectas](http://infiniteundo.com/post/25509354022/more-falsehoods-programmers-believe-about-time) en las aplicaciones.

{{< sourcecode git="blog-ejemplos/tree/master/DateTimeDatabase" command="cd misc/docker/postgresql/, docker-compose up, ./gradlew run" >}}

{{< reference >}}
* [Convertir fechas y husos horarios en Java][blogbitix-64]
* [Always store dates/times in UTC (in the database)](http://ideas.kentico.com/forums/239189-kentico-product-ideas/suggestions/6825844-always-store-dates-times-in-utc-in-the-database)
* [Por qué guardar los importes con al menos un decimal más de la precisión necesaria][blogbitix-389]
{{< /reference >}}

{{% /post %}}
