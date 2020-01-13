---
pid: 420
type: "post"
title: "Los tipos de módulos de JPMS añadidos a partir de Java 9"
url: "/2019/07/los-tipos-de-modulos-de-jmps-anadidos-a-partir-de-java-9/"
date: 2019-07-07T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Los módulos de Java dotan a la plataforma de nuevas características. Para garantiza la compatibilidad con las librerías existentes y permitir una transición progresiva de una versión sin módulos a una con módulos la plataforma de módulos de Java define varios tipos de módulos."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Con la [publicación de Java 9][blogbitix-263] el 2017 se introdujo la importante novedad de los módulos que proporciona a la plataforma Java varias características como encapsulación fuerte, interfaces bien definidas y dependencias explícitas. Todos las clases se organizan en paquetes y en Java 9 también en módulos para lo cual fue necesario reorganizar en módulos todos los paquetes de los que se compone la API de Java.

Antes de Java 9 todas las clases se proporcionaban en una lista ordenada de archivos _jar_, lo que se conocía como el _classpath_ y donde cualquier clase tenía acceso a cualquier otra que se encontrase en él respetando los ámbitos de visibilidad (_public_, _protected_, _private_ y _package_). En la definición de cada módulo en su archivo _module-info.java_ se debe especificar cuales son los módulos requeridos para su funcionamiento no permitiendo la máquina virtual de Java el acceso a ninguna otra clase de otros módulos ni a ninguna clase de los paquetes no exportados.

Para mantener la compatibilidad hacia atrás y hacer más sencillo la transición hacía los módulos, algunas librerías puede que ya no tengan mantenimiento, se pueden dar tres tipos de módulos.

* Módulos con nombre: están compuestos por las librerías que tienen su definición de módulo en el archivo _module-info.java_ y son colocados en el _modulepath_ al iniciar la aplicación. Únicamente leen los módulos que explícitamente se ha indicado en la definición del módulo con la palabra _requires_ y tiene acceso a los paquetes y sus clases exportados de los módulos requeridos.
* Módulos automáticos: son las librerías que no tienen una definición de módulo pero que son colocadas en el _modulepath_. La máquina virtual de Java le asigna un nombre de módulo de forma automática según el nombre de la librería o según la propiedad _Automatic-Module-Name_ del archivo de manifiesto. Leen todos los otros módulos del sistema, los que se encuentren en el _modulepath_ (incluidos todos los otros automáticos) y de la imagen del JDK, y todas las clases del módulo anónimo. Los módulos automáticos son necesarios para que no requerir convertir una librería a un módulo, esto es no requerir convertir a un módulo todo el código ya existente lo cual es un problema ya que muchas librerías ya no tienen mantenimiento. Ya que no tienen una definición de módulo se exportan todos los paquetes.
* Módulo anónimo: todas las librerías (incluso las que tienen su definición del módulo) que se colocan el _classpath_ forman el módulo anónimo. Leen todos los módulos del sistema y tienen acceso a todos sus paquetes exportados.

Ya se han publicado varios libros que explican detalladamente la modularidad introducida en Java 9. Cualquiera de ellos es una guía completa de la modularidad de Java.

{{< amazon
    linkids="9c7874501bb32fa3318e285022e0207a,59d96101c25f9c16c4427b8ee9daef1a"
    asins="1484225910,1484227123" >}}

{{% /post %}}
