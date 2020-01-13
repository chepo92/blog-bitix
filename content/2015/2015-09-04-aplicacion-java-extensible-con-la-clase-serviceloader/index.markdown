---
pid: 94
type: "post"
title: "Aplicación Java extensible con la clase ServiceLoader"
url: "/2015/09/aplicacion-java-extensible-con-la-clase-serviceloader/"
date: 2015-09-12T10:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Java ofrece un mecanismo incluido en el propio JDK para hacer las aplicaciones extensibles o ampliables en un momento posterior al de desarrollo. La clase _ServiceLoader_ permite obtener las implementaciones definidas en el _classpath_ de una determinada interfaz. En este artículo explico esta clase y muestro un ejemplo sencillo de como usarla."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Puede que al desarrollar una aplicación necesitamos que esta sea extensible, esto significa que en el momento de desarrollo no conocemos las implementaciones de un determinado servicio que se proporcionarán en un futuro. Un servicio no es más que la implementación de una determinada interfaz que definimos en el momento de desarrollo. Java con la clase [ServiceLoader](javadoc8:java/util/ServiceLoader.html) proporciona un mecanismo estándar e incorporado en el JDK para cargar servicios con alguna propiedad interesante.

A través de la clase _ServiceLoader_ y con su método estático [load](javadoc8:java/util/ServiceLoader.html#load-java.lang.Class-) cargamos los servicios que implementen una determinada interfaz, en el parámetro de tipo _Class_ indicamos la interfaz del servicio. Por ejemplo, supongamos que tenemos la siguiente definición de servicio:

{{< code file="Saludador.java" language="java" options="" >}}

En el momento de desarrollar esta aplicación podemos definir unos cuantos servicios que implementen la interfaz _Saludador_ pero deseamos que en futuro podamos o un tercero pueda añadir más servicios para otros _locales_. La implementación de estos servicios en Español, Inglés y Euskera sería:

{{< code file="EspanolSaludador.java" language="java" options="" >}}
{{< code file="InglesSaludador.java" language="java" options="" >}}
{{< code file="EuskeraSaludador.java" language="java" options="" >}}

Iniciando la aplicación podemos obtener los servicios disponibles para ser usados con el siguiente código:

{{< code file="Main1.java" language="java" options="" >}}

Para obtener el mensaje de saludo en el idioma que deseemos basta con obtenerlo de la lista si está disponible y usarlo:

{{< code file="Main2.java" language="java" options="" >}}

La clase _ServiceLoader_ busca los servicios en los archivos _META-INF/services/[interfaz]_ que haya disponibles en cualquiera de las librerías jar incluidas en el _classpath_, en el caso de este ejemplo el archivo sería _META-INF/services/io.github.picodotdev.serviceloader.Saludador_ y este su contenido con las tres implementaciones de servicios incluidas en el ejemplo:

{{< code file="io.github.picodotdev.serviceloader.Saludador" language="plaintext" options="" >}}

La salida para el programa _Main1.java_ y _Main2.java_ respectivamente es:

{{< code file="System.out" language="plaintext" options="" >}}

Esta es una forma interesante de hacer extensible o ampliable una aplicación en un futuro. Destacar que simplemente incluyendo en el _classpath_ una librería que incluya en el directorio _META-INF/services_ un archivo con el nombre de la interfaz con su nombre cualificado, _io.github.picodotdev.serviceloader.Saludador_, las nuevas implementaciones de servicios se devolverán usando el método _Service.load(Saludador.class)_ que se encargará de buscar los archivos en las librerías jar que los tengan.

Este mecanismo es que el se usa para permitir definir nuevos proveedores de ratios entre divisas en la librería de referencia [Java Money][java-money] (JSR-354) que proporciona una [API para el trabajo con importes monetarios, ratios y divisas en Java][blogbitix-90]. En otro artículo mostraré [cómo definir un nuevo proveedor de ratios en esta API de Java Money][blogbitix-95].

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/ServiceLoader) está en uno de mis repositorios de GitHub.

{{< reference >}}
* [ServiceLoader](javadoc8:java/util/ServiceLoader.html)
{{< /reference >}}

{{% /post %}}
