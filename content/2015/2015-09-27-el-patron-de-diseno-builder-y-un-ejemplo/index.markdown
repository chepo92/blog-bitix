---
pid: 99
type: "post"
title: "Ejemplo del patrón de diseño Builder"
url: "/2015/09/ejemplo-del-patron-de-diseno-builder/"
date: 2015-09-27T12:00:00+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Construir objetos es una tarea básica en los lenguajes orientados a objetos. En Java, las instancias de una clase se crean con la palabra clave reservada _new_ y un método especial llamado constructor. Al diseñar una clase debemos tener algunas cuestiones para evitar varios constructores _telescópicos_, evitar constructores que son combinación de varios argumentos opcionales y permitir obtener instancias de objetos con estado válido. Si se nos presentan estas situaciones podemos usar el patrón de diseño _Builder_ que consiste en básicamente en una clase especializada en construir instancias de otra clase que podemos hacer usable con una API fluida y alguna cosa más deseable que explico en el artículo."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Al escribir los métodos constructores de instancias de una clase puede ocurrirnos que algunos de ellos tienen una lista larga de argumentos (cuatro o más parámetros puede considerarse larga) o el caso de que otros algunos argumentos son opcionales. En el caso de una lista larga de argumentos algunos puedan tomar valores por defecto creando métodos telescópicos (donde hay varios constructores y cada uno solo añade un nuevo argumento al anterior), en el caso de argumentos opcionales nos obliga a crear un constructor por cada combinación de argumentos, peor aún, ambas cosas se pueden producir a la vez.

Por ejemplo, supongamos que tenemos una entidad de dominio _Usuario_ en la que el correo electrónico es requerido siendo opcionales su nombre, apellidos teléfono o dirección. Sin usar el patrón de diseño _Builder_ probablemente tendríamos los siguientes constructores o tener solo el último de ellos y en los no necesarios usar como valor del argumento _null_.

{{< code file="Usuario-1.java" language="java" options="" >}}

Como vemos no son pocos constructores debido a las combinaciones de los parámetros opcionales, esta forma requiere una buena cantidad de líneas de código y si decidiesemos escribir solo el constructor con todos los parámetros al usarlo tendremos dificultades para saber a que argumento responde cada variable y probablemente deberemos consultar la firma del constructor para saber que lugar ocupa cada argumento, esto dificulta la legibilidad.

{{< code file="Usuario-2.java" language="java" options="" >}}

En este caso solo hay tres argumentos opcionales si hubiera más el número de combinaciones y por tanto de constructores aumentaría considerablemente. Puede que en vez de usar constructores usemos un método _set_ de JavaBean de forma que tengamos un solo constructor y múltiples métodos _set_ o un constructor con los argumentos requeridos y un _set_ por cada argumento opcional.

{{< code file="Usuario-3.java" language="java" options="" >}}

Sin embargo, esta solución aunque permite reducir el número de constructores también tiene problemas, uno de ellos es que el constructor y los _set_ no obligan a crear un objeto con estado consistente o válido, otro es que usando los _set_ de los JavaBean nos impide hacer el objeto inmutable, si no es devolviendo una nueva instancia, que con las [nuevas características funcionales añadidas en Java 8][blogbitix-17] y en la programación cocurrente es deseable.

La solución a los constructores telescópicos y combinación de argumentos es usar el patrón de diseño _Builder_. Por ejemplo, empleando el mismo caso que los anteriores de la siguiente forma.

{{< code file="Usuario.java" language="java" options="" >}}

{{< code file="UsuarioBuilder.java" language="java" options="" >}}

Su uso sería de la siguiente manera algo más autoexplicativa y legible que la opción de usar constructores.

{{< code file="Main.java" language="java" options="" >}}

La instancia de la clase _UsuarioBuilder_ en su uso recoge los datos usando una API fluida, el método _build_ es el que construye la instancia del usuario mediante el constructor con visibilidad de paquete en el que se valida que los datos al construir el objeto _Usuario_ sean válidos, en este caso que el _email_ es requerido.

En el libro [Effective Java](https://amzn.to/2FngVHS) en el _Item #2_ se comenta más detalladamente este patrón junto a otra buena colección de cosas sobre los constructores y más cosas sobre Java, es uno en mi lista de [8+ libros recomendables para mejorar como programadores][blogbitix-55].

{{< amazon
    linkids="b669e63080013f19e959a9d5b80e3f77"
    asins="0321356683" >}}

En el apartado de referencia puedes encontrar más artículos que he escrito sobre otros patrones de diseño.

{{< reference >}}
* [8+ libros para mejorar como programadores][blogbitix-55]
* [Patrones de diseño en la programación orientada a objetos][elblogdepicodev-97]
* [Ejemplo del patrón de diseño _No Operation_][blogbitix-8]
* [Ejemplo del patrón de diseño _Command_][elblogdepicodev-101]
* [Ejemplo del patrón de diseño _State_][elblogdepicodev-170]
* [Implementación de máquina de estados finita (FSM) con Java 8][blogbitix-93]
* [Patrón múltiples vistas de un mismo dato en Tapestry][blogbitix-83]
* [Novedades y nuevas caracteristicas de Java 8][blogbitix-17]
{{< /reference >}}

{{% /post %}}
