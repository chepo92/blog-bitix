---
pid: 153
type: "post"
title: "El lenguaje de programación, framework y librerías importan"
url: "/2016/06/el-lenguaje-de-programacion-framework-y-librerias-importan/"
date: 2016-06-25T12:00:00+02:00
updated: 2016-06-26T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:hugo.svg"
tags: ["opinion", "planeta-codigo", "programacion", "software"]
---

{{% post %}}

Para programar hay una abundancia tremenda de lenguajes, librerías, _frameworks_, tecnologías, etc... disponibles para desarrollar un proyecto. Esto es muy bueno ya que podremos elegir la combinación de cualquiera de ellas que más se ajuste a las necesidades del proyecto, las que mejor conozcamos ya o según nuestras preferencias en base a sus características incluyendo su comunidad, documentación, si tiene un desarrollo activo, fecha de la última versión u otros motivos que consideremos. El lado malo de esta abundancia es que requiere analizar seguramente no todas pero al menos las más nombradas, más usadas, con mejor documentación o con un mantenimiento activo. Por la cantidad de opciones dicha tarea de análisis requiere tiempo y esfuerzo que no debe abrumarnos considerando que cualquiera de ellas vale.

Algunas personas piensan que las herramientas no son importantes quizá creen que hay tantas que da igual cualquiera de ellas o que solo importan las personas, «lo que hay entre el teclado y la silla». Entre varias herramientas adecuadas ciertamente en un proyecto no serán lo más importante ni usar alguna en concreto es un fin pero eso no quiere decir que no sean importantes. Son importantes porque afectan de forma notable al desarrollo del proyecto, por poner un ejemplo no es lo mismo un lenguaje o _framework_ que evita errores de compilación en producción, un <abbr title="Integrated Development Environment">IDE</abbr> que los detecta según se escribe el código o que permite hacer _refactors_ con más garantías de no introducir errores que un lenguaje en el que necesitas teses que cubran la totalidad del código simplemente para detectarlos, no es lo mismo el número de lineas necesarias o su verbosidad pero es más importante la legibilidad si va a ser mantenido durante mucho tiempo, no es lo mismo elegir una herramienta ampliamente probada que una implementada por nosotros con el tiempo necesario a dedicar a desarrollarla y que probablemente finalmente sea menos flexible que otra existente, no es lo mismo una base de datos relacional que garantiza la integridad de los datos que una base de datos NoSQL sin validación de esquema. Yendo a un extremo creo que nadie considera siquiera usar ensamblador para hacer una aplicación web o usar Java, hasta el momento, para programar un sistema operativo de alto rendimiento que exprima el máximo potencial del hardware. Pero entre algunas opciones equivalentes cualquiera, con matices, nos servirá, por ejemplo, usar el lenguaje [PHP][PHP], [C#][csharp] o [Java][Java] para hacer una aplicación web usando para cada opción los _frameworks_ [Symfony][symfony], [ASP.NET MVC][dotnet-mvc] o [Apache Tapestry][tapestry]. Hay grados de lo adecuado que es una herramienta para una necesidad.

Por otro lado las herramientas consideradas en el inicio de un proyecto no son inmutables durante toda su existencia y cambian en la medida que las necesidades del proyecto cambian. En una _startup_ al principio se necesitará una combinación de herramientas que permita probar la viabilidad del proyecto y evolucionar rápidamente el producto o servicio. Más tarde según se estabiliza el proyecto y crece surgirán nuevas necesidades como mayor fiabilidad, menos errores y escalabilidad tanto en cantidad de código y número de personas trabajando al mismo tiempo en el mismo código fuente.

También suele haber alguna discusión en si utilizar _frameworks_ o no utilizarlos, usarlos evita tener que desarrollar nosotros mismos mucho código, nos ahorrará tiempo, tendremos mayor flexibilidad y menos errores pero usándolos el proyecto tendrá esa dependencia lo que implica que el código se deberá adaptar a él que aún así igual es algo que queremos para estructurar correctamente el código según el marco de trabajo ofrecido. Por otro lado he presenciado comentarios desfavoreciendo el uso de _frameworks_, la mayoría de programadores no tienen los conocimientos y tiempo de implementar su propia alternativa con la misma calidad y en la mayoría de los casos basta con reutilizar alguna que cubra la necesidad y más importante esté ampliamente probada.

Para mi lo importante es que para cualquier librería o _framework_ que elijamos tengamos en un futuro la posibilidad de reemplazarlo sin estar encadenados a él y sin tener que reescribir el proyecto entero, esto forma parte de las más básicas buenas prácticas de desarrollo, precisamente las aplicaciones que se desarrollan en capas y los _frameworks_ que separan modelo, de vista, de controlador tratan de minimizar ese impacto.

Cada proyecto es distinto y hay que conocer sus requerimientos para seleccionar las herramientas que contribuyan al éxito o a la menor cantidad de dificultades, si se tratan de un proyecto en la plataforma Java probablemente varias herramientas serán las que indico en el artículo [herramientas para un proyecto Java][blogbitix-84]. Si no está clara la plataforma también puedes echarle un vistazo a [10 razones para seguir usando Java][blogbitix-81] y [novedades y nuevas características de Java 8][blogbitix-17].

La tecnologías, lenguajes, librerías, _frameworks_, ... son herramientas a usar para conseguir un fin que es hacer realidad el proyecto, producto o servicio con un componente informático, las herramientas no son un fin en si mismo, no son lo más importante, lo más importante es resolver la necesidad de alguien normalmente con restricciones de tiempo y coste, pero desde luego no son irrelevantes y no da igual usar cualquiera. Son las herramientas equivalentes de un fontanero, pintor, carpintero u otros profesionales que tienen cantidad de ellas para realizar multitud de tareas específicas de forma efectiva y rápida junto con su conocimiento y experiencia. Los lenguajes de programación, _frameworks_ y librerías de no ser importantes no existirían tantas incluso varias con diferentes propiedades para la misma necesidad.

{{% /post %}}
