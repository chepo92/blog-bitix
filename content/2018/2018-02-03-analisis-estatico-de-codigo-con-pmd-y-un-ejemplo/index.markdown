---
pid: 297
type: "post"
title: "Análisis estático de código con PMD y un ejemplo"
url: "/2018/02/analisis-estatico-de-codigo-con-pmd-y-un-ejemplo/"
date: 2018-02-03T22:00:00+01:00
updated: 2018-02-05T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:pmd.png"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="pmd.png" title1="PMD" width1="300" >}}

El mantenimiento de un programa es la parte que más tiempo consume en su desarrollo y realmente son más los proyectos que hay que mantener que los que se empiezan desde cero. Por lo tanto el software se debe diseñar además de para funcionar correctamente y de forma suficientemente eficiente de tal forma que los futuros cambios sean en la medida de lo posible sencillos de realizar. Hay varios motivos por los que un software necesita mantenimiento según sus categorías:

* Correctivo: por la necesidad de corregir errores.
* Adaptativo: por adaptación a un nuevo entorno o mejora con un nuevo sistema operativo o tecnologías.
* Perfeccionamiento: corrección de errores o adición de nuevas funcionalidades.
* Preventivo: para mejorar la calidad o prevenir futuros errores.

En el libro [Building Maintable Software (Java Edidtion)](http://amzn.to/2BSalVR) en varios capítulos repasan varios aspectos y proporciona consejos sobre cómo desarrollar software más fácilmente mantenible. Algunos son tan sencillos como evitar métodos con muchas líneas de código, con muchos parámetros, con muchas bifurcaciones por sentencias condicionales o de retorno. Estos aspectos influyen en la facilidad de realizar teses, la facilidad de reutilizar el código siendo más fácil probar y reutilizar métodos que hacen pocas cosas que otros que hacen muchas o son complejos.

Estos aspectos del código requiere analizar el código. Si la base de código del software es grande será tedioso y costoso revisarlo manualmente sin embargo hay herramientas como [PMD][pmd] que nos permite automatizar la tarea de análisis. PMD además se puede utilizar para comprobar que el código sigue las normas de estilo definidas para el proyecto o en una organización además de esos otros aspectos que afectan a la facilidad de mantenimiento del software también útil cuando se incorpora una nueva persona a un proyecto para que siga las normas ya establecidas. Al igual que se deben tener teses unitarios y de integración para comprobar el correcto funcionamiento del software con PMD se obtiene un informe con las violaciones de las reglas que quieran aplicar al analizar el código.

En la documentación del proyecto PMD en la sección _Rule Reference_ están la reglas que se puede aplicar y configurar en el análisis, hay una buena cantidad de ellas que en algunos casos permiten modificar los umbrales u otras propiedades para adaptar la validación a lo deseado. Desde convenciones al formatear el código, uso de llaves, tamaño de código, comentarios, de diseño, bloques de código vacíos en sentencias _try-catch_, _if_, ..., _imports_ duplicados, no usados o del mismo paquete y por tanto innecesarios, usos innecesarios de nombres completamente cualificados, de nomenclatura de variables por ejemplo si son demasiado cortas o largas, optimizaciones, código innecesario o no usado que se puede eliminar.

Al heredar un nuevo proyecto cuyo mantenimiento es complicado y grande por no cumplir varias de las reglas anteriores no es posible revisar todo el código completamente manualmente, se puede intuir cuales son algunos de los problemas haciendo una revisión a algunas partes y suponer que en el resto también están. Un buen paso es utilizar PMD para detectar de forma precisa una buena cantidad e ir corrigiéndolas a medida que se van haciendo cambios al código, con el paso del tiempo el mantenimiento si sigue siendo difícil no será por que hay código innecesario, no usado bloques de código vacíos o _imports_ no usados que son completamente innecesarios y eliminables sin riesgo.

Usando la [herramienta de construcción Gradle][elblogdepicodev-98] y su [_plugin_ de PMD](https://docs.gradle.org/current/userguide/pmd_plugin.html) es posible realizar el análisis automatizado del código. Hay una serie de reglas predefinidas que se pueden aplicar con valores generalmente aceptados pero que es posible personalizar.

Suponiendo que con la intención de hacer el software más mantenible se define que el código debe seguir las normas de estilo de Java, en el caso del ejemplo que los métodos no tengan más de 50 líneas, en un informe en formato HTML o XML PMD genera las violaciones a las reglas que encuentre y posteriormente corregirlas si se considera adecuado. Este es un ejemplo de archivo de Gradle de que solo pongo la parte relevante para el ejemplo para usar PMD aplicando unas pocas reglas ya incorporadas en PMD y la de la longitud de los métodos personalizada a una valor de 50 líneas:

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="ruleset.xml" language="XML" options="" >}}

Aplicado el _plugin_ y definidas las reglas en las construcción del proyecto se revisarán y generará un informe con el comando <code>./gradlew check</code>. En el directorio _build/reports/pmd/_ relativo a la raíz del proyecto se genera un conjunto de archivos HTML y XML con los informes del análisis del código. En el informe se indica la clase, la linea y el error que se ha encontrado, con esta información es sencillo modificar el código para que en la siguiente ejecución de la validación el error desaparezca del informe, la myoría de reglas son fáciles de corregir.

Para que en el informe aparezcan datos he cambiado la configuración de longitud a 10 líneas por método como máximo.

{{< image
    gallery="true"
    image1="image:pmd-report.png" optionsthumb1="300x200" title1="Informe de PMD con violaciones a las reglas"
    caption="Informe de PMD con violaciones a las reglas" >}}

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew check" >}}

{{% /post %}}
