---
pid: 371
type: "post"
title: "Las contraseñas e información sensible en el código fuente o bytecode de Java no son seguras"
url: "/2019/01/las-contrasenas-e-informacion-sensible-en-el-codigo-fuente-o-bytecode-de-java-no-son-seguras/"
date: 2019-01-04T19:00:00+01:00
updated: 2019-01-05T13:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "seguridad"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En Java el código fuente se compila a una representación en _bytecode_ independiente de la arquitectura del procesador y sistema operativo donde posteriormente se ejecuta. Este _bytecode_ es un formato binario pero que puede ser decompilado fácilmente con la herramienta _javap_ incluida en el propio JDK o examinado su contenido simplemente con un editor de texto hexadecimal. Con estas herramientas es fácil ver las instrucciones del programa para la máquina virtual y los caracteres de las cadenas que fueron incluidas en el código fuente.

Lógicamente, de este modo _hardcodear_ una contraseña en el código fuente hace que el código fuente sea inseguro pero es que incluso distribuir el binario compilado no es seguro ya que cualquier usuario que tenga acceso al binario de la aplicación es potencialmente capaz de recuperar la contraseña, tener acceso al binario quizá no sea sencillo pero aparte de eso no hay ninguna medida de seguridad adicional que añada más dificultad. Quien dice contraseña dice igualmente una clave privada de cifrado simétrico usada para cifrar o descifrar datos o un _bearer token_ de OAuth. En definitiva es un problema de seguridad.

Compilado el programa y utilizando la herramienta _javap_ se puede obtener el valor de la contraseña. ¿Adivinas cual es la contraseña en este archivo binario de _bytecode_ examinado el contenido?

{{< image
    gallery="true"
    image1="image:java-class-hex.png" optionsthumb1="300x200" title1="Contenido hexadecimal de un archivo binario de bytecode Java"
    image2="image:c-bin-hex.png" optionsthumb2="300x200" title2="Contenido hexadecimal de un archivo binario de C"
    caption="Contenido hexadecimal de un archivo binario de bytecode Java y C" >}}

El siguiente ejemplo sencillo de un programa Java incluye una cadena con una supuesta contraseña. Se observa que en el archivo visualizado en formato hexadecimal o decompilado los caracteres de la cadena son fácilmente reconocibles.

{{< code file="Main.java" language="java" options="" >}}

Para compilar este pequeño programa se utiliza el comando _javac_ que genera el archivo de _bytecode_ _Main.class_.

{{< code file="javac.sh" language="bash" options="" >}}

Para decompilar este pequeño programa se utiliza el comando _javap_, con él se ven las instrucciones interpretadas por la máquina virtual de Java y la cadena con la contraseña.

{{< code file="javap.sh" language="bash" options="" >}}

Que el contenido de la constante de las cadenas del programa sea incluido en el binario y examinable con un editor hexadecimal no es exclusivo de Java, en otros lenguajes de programación como C y formatos de ejecutables como ELF para Linux se da el mismo caso al examinar el binario como se observa en las imágenes anteriores. Seguramente en la mayoría de lenguajes, como C#, ocurra lo mismo.

{{< code file="Main.c" language="C" options="" >}}
{{< code file="gcc.sh" language="bash" options="" >}}

Una solución para evitar este problema de seguridad es [ubicar la contraseña a un archivo de configuración incluso con los valores sensibles cifrados][blogbitix-351] y que sean descifrados únicamente por la aplicación en el momento de iniciarse. En el caso de ubicar este archivo de configuración en un servidor se puede proteger mediante permisos para que solo los administradores o algunos desarrolladores tenga acceso a él y no cualquier usuario que consiga acceso al sistema.

{{% /post %}}
