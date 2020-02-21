---
pid: 465
type: "post"
title: "Las convenciones y guías estilos para el código fuente de Java"
url: "/2020/02/las-convenciones-y-guias-estilos-para-el-codigo-fuente-de-java/"
date: 2020-02-21T18:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:intellij-code-style-1.png"
tags: ["java", "planeta-codigo"]
summary: "Java desde su creación ha definido como parte del lenguaje unas convenciones y guías de estilos como recomendación para ser usadas en el código fuente por los programadores que proporcionan homogeneidad en el código fuente y que facilitan su lectura y mantenimiento. El documento no es muy extenso para leerlo y los entornos de desarrollo integrados como IntelliJ permiten formatear el código fuente siguiendo las reglas preestablecidas con una simple combinación de teclas y herramientas como PMD permiten validar de forma automatizada que el código cumple las reglas con la herramienta de construcción o integración continua."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Todos los lenguajes definen un conjunto de reglas que definen el aspecto del código fuente. Estas convenciones cubren la indentación, comentarios, declaraciones, sentencias espacios en blanco, nomenclatura de nombres y prácticas de programación. Son una forma de mejorar la calidad del código que facilita su legibilidad y mantenibilidad.

Es importante seguir en todo el código fuente las mismas convenciones ya que en proyectos de larga duración la parte más importante es la de mantenimiento. El lenguaje de programación Java define sus propias convenciones que generalmente son aceptadas por los programadores. [Las convenciones y guías de estilos de Java](https://www.oracle.com/technetwork/java/codeconventions-150003.pdf) están recogidas en un documento de recomendable lectura y adhesión al programar. El documento ya tiene unos años pero las reglas existentes desde entonces no han cambiado aún cuando en el lenguaje se han añadido [nuevos elementos como las _lamdas_ en Java 8][blogbitix-17] o la posibilidad de [omitir el tipo para las variables locales de Java 11][blogbitix-350].

Otros lenguajes como [Python][python] y [C#][csharp] definen sus propias convenciones bastante diferentes de las de Java que cambia significativamente el aspecto del código.

### Convenciones de código en Java

Algunas recomendaciones en Java son:

* Una declaración de variable por línea, preferiblemente al inicio de los bloques de código.
* Ajustar la longitud de las líneas a 70 caracteres.
* Al ajustar líneas poner el punto de ruptura después de la coma, antes del operador, alinear la siguiente línea al inicio de la expresión de la línea anterior.
* No dejar un espacio en blanco entre el nombre del método y el paréntesis _(_, la llave de apertura _{_ de inicio del bloque de código en la misma línea precedida por un espacio en blanco y la llave de cierre _}_ indentada a la misma altura que el su bloque.
* Cada línea debería tener una sola sentencia.
* Usar líneas en blanco para separar secciones, entre definición de clases e interfaces, entre métodos, entre variables y la primera sentencia.
* Usar un espacio entre una palabra clave (_if_, _for_, _while_, ...) y el paréntesis a continuación. Todos los operadores excepto el punto _._, los de incremento _++_ y decremento _\-\-_ deben separarse de sus operandos con un espacio.
* Reglas de nomenclatura: los nombres de las clases debería ser nombres con la primera letra de cada palabra que lo compone en mayúscula, las interfaces siguen las mismas reglas de capitalización. Los métodos debería ser verbos con la primera letra en minúscula y las primeras letras de cada palabra en mayúscula. Las variables tiene la capitalización de la primera letra en minúscula y las primeras letras de cada palabra en mayúscula con nombre cortos pero significativos. Las variables de una sola letra deben ser evitadas salvo los casos comúnmente reconocidos como iteradores (_i_, _j_, _k_). Las constantes deben estar con todas las letras en mayúscula con las palabras separadas con una barra baja _\__.

Aparte de las convenciones del propio lenguaje Java otras organizaciones como [Google][google] y [Spring][spring] definen sus propias convenciones cambiando ligeramente las de Java por las preferencias de sus usuarios. Cualquier otra empresa según las preferencias acordadas por sus desarrolladores también puede definir sus variaciones a las convenciones generales de Java, salvo cambiar drásticamente las convenciones generales no hay ningún inconveniente en incorporar pequeñas variaciones lo importante es que todos los desarrolladores sigan las mismas convenciones en todo el código fuente.

* [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
* [Spring Framework Code Style](https://github.com/spring-projects/spring-framework/wiki/Code-Style)

Como ejemplo de pequeñas variaciones prefiero declarar las variables en el momento del primer uso en el que se le puede asignar un valor en vez del inicio del bloque de código o con las pantallas de gran resolución en mi opinión el límite de línea máximo puede ser más amplio que 70 caracteres.

### Ejemplos de código con convenciones de Java

Este es el aspecto de algunos pequeños trozos de código siguiendo las convenciones definidas por Java.

{{< code file="Main.java" language="java" options="" >}}

### Idioma español o inglés para dar nombres

Otro punto a tener en cuenta en el código fuente es si utilizar palabras del lenguaje materno, en nuestro caso español, o utilizar palabras solo en inglés para dar nombres a clases, métodos y variables. Es válido utilizar cualquiera de las dos opciones siempre que se utilice en todo el código fuente.

Aún así yo prefiero utilizar solo inglés por dos motivos:

* El inglés es un lenguaje compacto que normalmente utiliza palabras compuestas por menos caracteres que el español.
* Algunos términos de programación son comúnmente conocidos por sus palabras en inglés como los métodos _get_ y _set_ o patrones de diseño como _Repository_ o _Aggregator_, mezclar otro lenguaje con las palabras en inglés queda raro (_getPrecio()_, _findProductoByNombreAndActivo()_, _CompraRepository_).

{{< code file="EspanolMain.java" language="java" options="" >}}

Por suerte en Java refactorizar cualquier nombre es bastante más sencillo y rápido con el soporte de los IDE. En un lenguaje dinámico hacer un renombrado es básicamente buscar y reemplazar todas las ocurrencias con riesgo de omitir alguna que cause un «error de compilación» en tiempo de ejecución del código erróneo.

### Herramientas automatizadas

Los entornos integrados de desarrollo ofrecen la funcionalidad de formatear el código de forma automática con las reglas que tengan configuradas. En IntelliJ se configuran en _File > Settings > Editor > Code Style_ para que todos los desarrolladores utilicen las mismas reglas, estas se pueden compartir con las opciones de [exportar e importar en otro ordenador](https://github.com/HPI-Information-Systems/Metanome/wiki/Installing-the-google-styleguide-settings-in-intellij-and-eclipse). En estos paneles hay multitud de opciones para personalizar el formateo del código.

{{< image
    gallery="true"
    image1="image:intellij-code-style-1.png" optionsthumb1="200x150" title1="Formateo de código y reglas de estilo en IntelliJ IDEA para Java"
    image2="image:intellij-code-style-2.png" optionsthumb2="200x150" title2="Formateo de código y reglas de estilo en IntelliJ IDEA para Java"
    image3="image:intellij-code-style-3.png" optionsthumb3="200x150" title3="Formateo de código y reglas de estilo en IntelliJ IDEA para Java" >}}
{{< image
    gallery="true"
    image1="image:intellij-code-style-4.png" optionsthumb1="200x150" title1="Formateo de código y reglas de estilo en IntelliJ IDEA para Java"
    image2="image:intellij-code-style-5.png" optionsthumb2="200x150" title2="Formateo de código y reglas de estilo en IntelliJ IDEA para Java"
    image3="image:intellij-code-style-6.png" optionsthumb3="200x150" title3="Formateo de código y reglas de estilo en IntelliJ IDEA para Java" >}}
{{< image
    gallery="true"
    image1="image:intellij-code-style-7.png" optionsthumb1="200x150" title1="Formateo de código y reglas de estilo en IntelliJ IDEA para Java"
    caption="Formateo de código y reglas de estilo en IntelliJ IDEA para Java" >}}

Existen herramientas que automatizan la comprobación de las normas elegidas en un proyecto en el código desde la línea de comandos con la herramienta de construcción como [Gradle][gradle] y aplicable también al código subido al repositorio de control de versiones con la herramienta de integración continua ya sea [Jenkins][jenkins], [GitLab][gitlab] u otra. Una de ellas es [PMD][pmd], otra [Checkstyle][checkstyle], ambas generan un informe con los errores de convenciones con el que es muy fácil realizar los cambios para corregirlos.

* [Análisis estático de código con PMD y un ejemplo][blogbitix-297]

{{% reference %}}
* [Coding conventions](https://en.wikipedia.org/wiki/Coding_conventions)
{{% /reference %}}

{{% /post %}}
