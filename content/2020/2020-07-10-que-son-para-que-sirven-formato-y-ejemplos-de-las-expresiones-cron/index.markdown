---
pid: 499
type: "post"
title: "Qué son, para qué sirven, formato y ejemplos de las expresiones cron"
url: "/2020/07/que-son-para-que-sirven-formato-y-ejemplos-de-las-expresiones-cron/"
date: 2020-07-10T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:exrpresion-cron.png"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

Las expresiones _cron_ son el equivalente de expresiones regulares para seleccionar fechas, instantes de tiempo o periodos. Normalmente se utilizan para [planificar la ejecución de tareas automatizadas en librerías como Spring o Quartz][blogbitix-497] o _cron_ de [GNU][gnu]/[Linux][linux] en los momentos seleccionados llegando a la precisión del segundo. Algunas expresiones de fechas pueden ser sencillas como a las 10:15 AM de todos los días o tan complejas como a las 10:15 de cada tercer viernes de cada mes.

Los propósitos de planificar tareas con expresiones _cron_ son ejecutar procesos automatizados, por ejemplo enviar un correo electrónico a un determinada hora de cada día o generar un informe a las 3:00 de la noche de cada viernes.

### Formato y posibles valores en cada campo

El formato de las expresiones _cron_ se compone de varios campos separados por un espacios.

{{< code file="formato-cron.txt" language="plaintext" options="" >}}

Según el campo hay varios valores posibles. En los valores numéricos de _day-of-week_ los días empiezan por domingo, el valor 1 es domingo, el lunes es 2 y el 7 es el sábado.

<table class="table">
   <thead class="thead-light">
       <th>Campo</th>
       <th>Requerido</th>
       <th>Valores permitidos</th>
       <th>Caracteres especiales permitidos</th>
   </thead>
   <tbody>
       <tr>
           <td>Seconds</td>
           <td>Sí</td>
           <td>0-59</td>
           <td>, - * /</td>
       </tr>
       <tr>
           <td>Minutes</td>
           <td>Sí</td>
           <td>0-59</td>
           <td>, - * /</td>
       </tr>
       <tr>
           <td>Hours</td>
           <td>Sí</td>
           <td>0-23</td>
           <td>, - * /</td>
       </tr>
       <tr>
           <td>Day of month</td>
           <td>Sí</td>
           <td>1-31</td>
           <td>, - * / L W</td>
       </tr>
       <tr>
           <td>Month</td>
           <td>Sí</td>
           <td>0-11 o JAN-DEC</td>
           <td>, - * /</td>
       </tr>
       <tr>
           <td>Day of week</td>
           <td>Sí</td>
           <td>1-7 o SUN-SAT</td>
           <td>, - * ? / L #</td>
       </tr>
       <tr>
           <td>Year</td>
           <td>No</td>
           <td>vacío o 1970-2099</td>
           <td>, - * /</td>
       </tr>
   </tbody>
</table>

Los significados de los valores son:

* `*` (todos): es usado para seleccionar cada unidad de tiempo. Por ejemplo, _*_ en el campo minuto significa cada minuto.
* `?` (cualquiera): es utilizando en los campos _day-of-month_ y _day-of -week_ para denotar un valor arbitrario. Por ejemplo, si se quiere seleccionar las fechas de _el quinto día de cada mes_ independientemente del día de la semana, entonces se especifica un _?_ en el campo _day-of-week_.
* `–` (rango): es usado para seleccionar rangos de valores. Por ejemplo, _7-11_ en el campo _hour_ significa entre las 7 y las 11.
* `,` (valores): es usado para especificar varios valores. Por ejemplo, _MON,WED,FRI_ en el campo _day-of-week_ significa el lunes, miércoles y viernes.
* `/` (incrementos): es usado para especificar valores en incrementos. Por ejemplo, el valor _5/15_ en el campo _minute_ significa en el minuto 5 y con incrementos de 15 minutos siendo los minutos de cada hora seleccionados 5, 20, 35 y 50.
* `L` (último): tiene diferentes significados según el campo en el que se usa. Por ejemplo, si es aplicado al campo _day-of-month_, entonces significa el último día de cada mes, el día 31 para enero o anterior en otros meses con menos días. Puede usarse con un desplazamiento como _L-3_, esto significa _3 días antes del último día del mes_. En el campo _day-of-week_ significa el _último día de la semana_. También puede usarse con otro valor en el campo _day-of-week_, como _6L_ lo que significa el _último viernes_ del mes.
* `W` (día entre semana): es usado para especificar en día entre semana (de lunes a viernes) más cercano dado un día del mes. Por ejemplo, si se especifica _10W_ en el campo _day-of-month_ significa _el día entre semana más cercano al 10 de cada mes_. De modo que si el día 10 del més es sábado se selecciona el viernes 9 y si el día 10 es domingo se selecciona el lunes 11. Si se especifica 1W en en _day-of-month_ y el día 1 es sábado, entonces se selecciona el dia lunes 3, esto es, no se salta al mes anterior.
* `#` (ocurrencia): es usado para especificar el cardinal de la ocurrencia de una semana del mes. Por ejemplo, _el tercer viernes del mes_ se indica con _6#3_ en el campo _day-of-week_.

Los valores `/`, `L`, `W` y `#` son caracteres no estándares, para comprobar si están soportados hay que consultar la documentación de la implementación de las expresiones _cron_, varía según la herramienta.

### Ejemplos y generador de expresiones cron

Las expresiones _cron_ complejas son dífíciles de crear, para asegurar que la expresión cron está bien construida o para generarlas de forma sencilla hay alguna utilidad en internet, una de ellas es este [generador y explicador de expresiones cron](https://freeformatter.com/cron-expression-generator-quartz.html).

Algunos ejemplos de expresiones con su explicación son los siguientes.

<table class="table">
   <thead class="thead-light">
       <th width="300px">Expresión cron</th>
       <th>Explicación</th>
   </thead>
   <tbody>
       <tr>
           <td>0 0 12 * * ?</td>
           <td>Cada día a las 12:00 PM (12 del medio día)</td>
       </tr>
       <tr>
           <td>0 15 10 * * *</td>
           <td>Cada día a las 10:15 AM</td>
       </tr>
       <tr>
           <td>0 15 10 * * ? 2005</td>
           <td>Cada día a las 10:15 AM durante el año 2005</td>
       </tr>
       <tr>
           <td>0 * 14 * * ?</td>
           <td>Cada minuto de la hora 14, de cada día</td>
       </tr>
       <tr>
           <td>0 0/5 14 * * ?</td>
           <td>Cada 5 minutos de la hora 14 empezando en el minuto 0, de cada día</td>
       </tr>
       <tr>
           <td>0 0/5 14,18 * * ?</td>
           <td>Cada 5 minutos de las horas 14 y 18 empezando en el minuto 0, de cada día</td>
       </tr>
       <tr>
           <td>0 0-5 14 * * ?</td>
           <td>Cada minuto entre 0 y 5 de la hora 14, de cada día</td>
       </tr>
       <tr>
           <td>0 10,44 14 ? 3 WED</td>
           <td>A las 14:10 y 14:44 de cada miércoles de marzo</td>
       </tr>
       <tr>
           <td>0 15 10 ? * MON-FRI</td>
           <td>A las 10:15 AM de cada lunes, martes, miércoles, jueves y viernes</td>
       </tr>
       <tr>
           <td>0 15 10 15 * ? </td>
           <td>A las 10:15 AM del día 15 de cada mes</td>
       </tr>
       <tr>
           <td>0 15 10 L * ?</td>
           <td>A las 10:15 AM del último día del mes</td>
       </tr>
       <tr>
           <td>0 15 10 ? * 6L</td>
           <td>A las 10:15 AM del último viernes del mes</td>
       </tr>
       <tr>
           <td>0 15 10 ? * 6L 2002-2005</td>
           <td>A las 10:15 AM de cada viernes del mes de los años 2002, 2003, 2004 y 2005</td>
       </tr>
       <tr>
           <td>0 15 10 ? * 6#3</td>
           <td>A las 10:15 AM del tercer viernes de cada mes</td>
       </tr>
       <tr>
           <td>0 0 12 1/5 * ?</td>
           <td>A las 12 PM (12 del medio día) cada cinco días del mes, empezando desde el primer día del mes</td>
       </tr>
       <tr>
           <td>0 11 11 11 11 ?</td>
           <td>Cada 11 de noviembre a las 11:11 AM</td>
       </tr>
   </tbody>
</table>

{{% reference %}}
* [Cron Expressions](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm)
* [Cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression)
* [Cron expression](https://riptutorial.com/spring/example/21209/cron-expression)
* [Cron Trigger Tutorial](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)
{{% /reference %}}

{{% /post %}}
