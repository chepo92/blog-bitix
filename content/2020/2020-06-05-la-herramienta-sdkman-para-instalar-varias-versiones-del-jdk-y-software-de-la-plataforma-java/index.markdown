---
pid: 489
type: "post"
title: "La herramienta SDKMAN para instalar varias versiones del JDK y software de la plataforma Java"
url: "/2020/06/la-herramienta-sdkman-para-instalar-varias-versiones-del-jdk-y-software-de-la-plataforma-java/"
date: 2020-06-05T18:00:00+02:00
date: 2020-06-05T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:sdkman.svg"
tags: ["java", "planeta-codigo"]
summary: "En ocasiones es necesario tener instaladas varias versiones de JDK según el proyecto, unos quizá usen Java 8 y otros quizá usen Java 11 o posterior. El gestor de software SDKMAN permite instalar múltiples versiones del JDK de forma simultánea y usar la deseada a conveniencia. Adicionalmente también permite instalar otras herramientas de la plataforma Java como Gradle y Maven o lenguajes como Groovy entre otros SDK comunes disponibles."
---

{{% post %}}

{{< logotype image1="sdkman.svg" >}}

Cuando usaba [Windows][windows] para instalar el JDK para programar en Java siempre me lo descargaba de la página de [Oracle][oracle], el típico instalador de Windows con un asistente que dejaba el JDK instalado en el sistema. Desde que uso [GNU][gnu]/[Linux][linux] siempre he usado la versión del JDK del proyecto [OpenJDK][openjdk] del que el JDK de Oracle toma como fuente y posteriormente la empresa de Larry Ellison añade sus modificaciones y extensiones algunas no libres.

El inconveniente surge cuando hay que instalar una nueva versión, lo que posiblemente implica desinstalar la antigua y repetir el proceso de instalación con la nueva. En Windows hasta donde he conocido un proceso manual que ahora con WinGet al estilo de los gestores de paquetes de GNU/Linux lo mantenga actualizado al actualizar el sistema sin apenas intervención por parte del usuario.

Pero ahora con el nuevo ciclo de desarrollo del JDK que publica una nueva versión cada seis meses y una versión de soporte a largo plazo cada tres años las versiones son enormemente frecuentes a los que los usuarios de Java estábamos acostumbrados con una publicación cada dos o más años. Al mismo tiempo han surgido múltiples implementaciones o distribuciones del JDK, por ejemplo Amazon ofrece [Corretto][amazon-corretto] también están [AdoptOpenJDK][adoptopenjdk] entre algunas otras menos populares. Tener múltiples versiones o implementaciones del JDK en el sistema implica habitualmente tener que cambiar una variable de entorno para indicar cual es el directorio _home_ del JDK que se desea usar. Esta gestión de la versión del JDK es manual y poco práctica ya que afecta a nivel global del sistema lo que impide usar diferentes versiones de JDK según la aplicación o proyecto, quizá unos proyectos usen Java 8 y otros Java 11 u otro más reciente.

### Qué es SDKMAN y qué ventajas tiene

SDKMAN es un gestor de paquetes basado en línea de comandos para instalar y mantener actualizado software de la plataforma Java no solo para el JDK sino que para otras muchas librerías, utilidades y SDK comunes como las herramientas de construcción [Gradle][gradle] y [Maven][maven], lenguajes para la plataforma como [Groovy][groovy], [Ceylon][ceylon] o [Scala][scala], la nombrada utilidad para crear software de código nativo [GraalVM][graalvm] com importantes mejoras en rendimiento en tiempo de ejecución y consumo de memoria. La herramienta [SDKMAN][sdkman] tiene las ventajas de poder instalar varias versiones del JDK, múltiples implementaciones y poder usar una versión distinta según el proyecto, permite solucionar los problemas anteriores.

En los últimos años hasta ahora siempre he usado el paquete de la distribución [Arch Linux][archlinux] que uso para el JDK y Gradle pero a partir de ahora empezaré a usar SDKMAN ya que permite tener instaladas simultáneamente varias versiones, tiene versiones adicionales que no están disponibles en la distribución y permite cambiar fácilmente entre versiones sin necesidad de permisos de superusuario. La desventaja que tiene SDKMAN es que al no usar el paquete de la distribución no se puede instalar ningún paquete que requiera Java, en el caso de Arch Linux los paquetes del JDK como _jdk11-openjdk_ proporcionan la depdendencia _java-environment_ que es necesaria para algunos otros paquetes como _intellij-idea-community-edition_. La solución es [instalar los programas mediante Flatpak][blogbitix-362] si están disponibles en esta forma de distribución de software.

### Instalación

La instalación de SDKMAN consiste en ejecutar los siguientes comandos, el primero descarga e instala los _scripts_ de SDKMAM en la carpeta personal del usuario, _~/.sdkman_. También modifica los archivos de configuración del intérprete de comandos _bash_ o _zsh_ que permiten establecer las variables de entorno que necesita cuando se inicia una nueva terminal. Los dos últimos permiten comprobar que la instalación se ha realizado correctamente.

SDKMAN solo está disponible de forma nativa para los sistemas UNIX entre ellos GNU/Linux pero no Windows dado que está basado en _scripts_ de bash. Para Windows es necesario utilizar _Windows Linux Subsystem_ o WLS, Cygwin o MSYS+MinGW.

{{< code file="install.sh" language="bash" options="" >}}

### Uso

La utilidad de línea de comandos SDKMAN es _sdk_, una utilidad sencilla con varias operaciones para instalar, actualizar, desinstalar o usar la última versión o una determinada versión. Las notas de ayuda de la utilidad son bastante explicativas de cómo usar esta herramienta.

El término _candidate_ hace referencia al paquete de software, puede ser un JDK o un SDK. El término _versión_ indica la versión afectada por el comando del paquete de software _candidate_ previamente indicado. Si estas notas no son suficientes hay una [guía de uso](https://sdkman.io/usage).

{{< code file="usage.sh" language="bash" options="" >}}

En la página de SDKMAM hay una [lista de JDK](https://sdkman.io/jdks) y [SDK](https://sdkman.io/sdks) disponibles en este gestor de software. Los comandos más habituales son _list_ para listar candidatos y versiones disponibles, _install_ para instalar software, _upgrade_ para actualizar a la última versión el candidato indicado o todos los instalados si no se indica ninguno, _use_ para usar una versión específica de un candidato durante la sesión de la terminal, _default_ para establecer la versión por defecto de un candidato y _uninstall_ para desinstalar un candidato y versión. En el siguiente ejemplo se muestra como instalar varias versiones del JDK, usarlas y cambiar entre versiones.

{{< code file="commands.sh" language="bash" options="" >}}

En la [distribución inmutable Fedora Silverblue][blogbitix-483] esta herramienta es especialmente útil ya que todo el software que instala lo hace en la carpeta personal del usuario, ni pedir permisos de administrador del sistema para instalar o desinstalar candidatos.

{{% /post %}}
