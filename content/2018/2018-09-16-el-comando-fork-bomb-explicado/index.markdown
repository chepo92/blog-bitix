---
pid: 347
type: "post"
title: "El comando fork bomb explicado"
url: "/2018/09/el-comando-fork-bomb-explicado/"
date: 2018-09-16T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

El siguiente aparente, gracioso e inocente conjunto de caracteres que parecen una colección de varios extraños _emojis_ es un comando que si se ejecuta en una terminal de GNU/Linux crea gran cantidad de procesos de forma continua hasta que los recursos del sistema se agotan causando que sea inusable haya que reiniciarlo generando los problemas que de ello se deriven si el reinicio es forzado, este comando es el comando [fork bomb](https://en.wikipedia.org/wiki/Fork_bomb) para el intérprete de comandos [bash][bash].

> :(){ :|:& };:

Analizando detalladamente este conjunto de caracteres es un comando _bash_ que se compone de la definición de una función de nombre _:_, los paréntesis _( )_ definen la función, que en su cuerpo entre las llaves _{ }_ recursivamente se llama a si misma dos veces con un _pipeline |_ que ejecuta el primer comando enviando su salida al segundo, con el caracter _&_ no se espera a que termine y los pone en segundo plano de modo no se puedan terminar con lo que seguirán consumiendo recursos. Cada uno de los procesos de la función se llama de nuevo a la función recursivamente y repitiendo el proceso. Como consecuencia el número de procesos del sistema crece de forma exponencial que en poco tiempo termina por agotar los recursos del sistema.

A continuación de la función se encuentra el comando _:_ que realiza la primera llamada a la función que desencadena el _fork bomb_. Esta llamada inicial está separada por el caracter _;_ que sirve para escribir varios comandos uno a continuación de otro en una misma línea. El primer comando es la definición de la función y el segundo hace la llamada a la función e inicia el _fork bomb_.

Este _fork bomb_ crea procesos en el sistema de forma exponencial (1, 2, 4, 8, 16, 32, ..., 2^n) hasta que el sistema agota los recursos de procesador o memoria en un periodo de tiempo muy corto, menos de unos pocos segundos desde su inicio dada la capacidad de procesamiento de los sistemas actuales. Como consecuencia el sistema requerirá un reinicio.

Dado el problema que causa este aparente comando u otro similar una buena recomendación a seguir es no ejecutar ningún comando obtenido de internet que no se sepa lo que hace y de igual modo ningún programa o _script_ de _shell_ no obtenido de una fuente de confianza. En las distribuciones [GNU][gnu]/[Linux][linux] la fuentes confiables son los repositorios oficiales.

Para GNU/Linux y los sistemas operativos en general uno de sus requisitos es que sean seguros e implementan medidas para que así sean incluso con el apoyo de los procesadores a nivel de hardware pero hacen lo que se les dice y no están a salvo de las estupideces por desconocimiento que pueda cometer el usuario.

{{< youtube video="Q9Mdy7H8Qmc" >}}

{{< reference >}}
* [Fork Bomb](https://en.wikipedia.org/wiki/Fork_bomb)
{{< /reference >}}

{{% /post %}}
