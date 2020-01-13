---
pid: 42
type: "post"
title: "Compilar y cargar de forma dinámica una clase Java"
url: "/2014/09/compilar-y-cargar-de-forma-dinamica-una-clase-java/"
date: 2014-09-12T19:49:55+02:00
updated: 2015-05-30T00:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["programacion", "java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Desde la versión 1.6 del JDK disponemos de una API para acceder al compilador desde un programa Java. En el ejemplo de este artículo utilizaré varias clases de esa API para conseguir compilar un archivo con la definición de una clase Java y posteriormente instanciarla y usarla. En posteriores artículos comentaré un ejemplo práctico y muy útil con el que podemos sacar provecho de esta funcionalidad.

Las clases que necesitaremos de esa API son:

* [JavaCompiler](https://docs.oracle.com/javase/7/docs/api/javax/tools/JavaCompiler.html) que es la interfaz para acceder al compilador desde un programa Java.
* [JavaFileManager](https://docs.oracle.com/javase/7/docs/api/javax/tools/JavaFileManager.html) que es una abstracción para gestionar los archivos fuente y las clases. Usaremos uno propio llamado ClassFileManager.
* [SimpleJavaFileObject](https://docs.oracle.com/javase/7/docs/api/javax/tools/SimpleJavaFileObject.html) clase que contiene el código fuente Java.

Y también necesitaremos redefinir algunas:

* La clase ClassFileManager que extiende [ForwardingJavaFileManager](https://docs.oracle.com/javase/7/docs/api/javax/tools/ForwardingJavaFileManager.html) y se encargará de cargar los objetos JavaClassObject con un ClassLoader.
* La clase JavaClassObject que extiende [SimpleJavaFileObject](https://docs.oracle.com/javase/7/docs/api/javax/tools/SimpleJavaFileObject.html) y contendrá el código bytecode generado en memoria por el compilador.
* CharSequenceJavaFileObject clase que extiende [SimpleJavaFileObject](https://docs.oracle.com/javase/7/docs/api/javax/tools/SimpleJavaFileObject.html) y que contiene el código fuente en un objeto de tipo CharSequence.
* La interfaz Configuracion es la interfaz que debe cumplir la clase Java que compilaremos, cargaremos de forma dinámica en la aplicación y posteriormente invocaremos sus métodos.

En el javadoc de las clases hay una descripción más amplia de cada una de ellas.

En el siguiente código suponiendo que disponemos en la variable source de un código Java a compilar y de la que crearemos mas tarde una instancia de la clase que define podemos hacerlo de la forma indicada continuación. Antes de mostrar el código código la clase a compilar y a cargar de forma dinámica en este ejemplo debe cumplir el contrato definido en una determinada interfaz de modo que una vez compilada y cargada sepamos que métodos podemos invocar de esa clase. En este caso el código fuente de la clase a compilar está hardcodeada en un String en el propio programa pero perfectamente podría haber obtenido su contenido de un archivo del disco duro o de una base de datos.

{{< code file="Main1.java" language="java" options="" >}}
{{< code file="Configuracion.java" language="java" options="" >}}

Con este ejemplo puede intuirse el ejemplo práctico que comentaré que no es más que utilizar código Java para definir la configuración de una aplicación, esto tiene varias ventajas sobre utilizar un xml u otro tipo de formato de archivo de configuración de la aplicación (una de ellas que utilizando un IDE el compilador nos informará de errores y nos ofrecerá asistencia al escribir código). Esta idea junto con la posibilidad de monitorizar un archivo para ver si se han producido cambios en él (también con la API de Java) y recargarlo puede darnos como resultado una funcionalidad en la que la configuración se basa en código Java y que la configuración pueda recargarse de forma dinámica, si la aplicación se utiliza en un servidor de aplicaciones podríamos cambiar la configuración sin tener que reiniciar la aplicación.

{{< image
    gallery="true"
    image1="image:main1.png" optionsthumb1="300x200" title1="Salida programa Main1.java" >}}

Casi para terminar las clases de utilidad:

{{< code file="ClassFileManager.java" language="java" options="" >}}
{{< code file="CharSequenceJavaFileObject.java" language="java" options="" >}}
{{< code file="JavaClassObject.java" language="java" options="" >}}

El código fuente completo puede encontrarse en el [siguiente repositorio de GitHub](https://github.com/picodotdev/blog-ejemplos/tree/master/ConfiguracionJava).

En el siguiente artículo comentaré como [monitorizar un archivo con código fuente Java][blogbitix-43] para ver si se han producido cambios en él. Y basándome en estos dos artículos comentaré como disponer de [un archivo de configuración que se recargue al detectase cambios en él][blogbitix-43].

{{% /post %}}
