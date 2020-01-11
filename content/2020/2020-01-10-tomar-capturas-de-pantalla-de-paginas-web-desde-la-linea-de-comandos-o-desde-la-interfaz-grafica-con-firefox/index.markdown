---
pid: 454
type: "post"
title: "Tomar capturas de pantalla de páginas web desde la línea de comandos o desde la interfaz gráfica con Firefox"
url: "/2020/01/tomar-capturas-de-pantalla-de-paginas-web-desde-la-linea-de-comandos-o-desde-la-interfaz-grafica-con-firefox/"
date: 2020-01-10T17:00:00+01:00
updated: 2020-01-11T20:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
tags: ["planeta-codigo", "programacion"]
summary: "El navegador web Firefox tiene una opción con la que poder tomar una captura de pantalla de una página web desde la línea de comandos, que es útil como parte de un proceso automatizado. Firefox también permite tomar capturas de pantalla de una página web desde su interfaz gráfica o desde la consola web."
---

{{% post %}}

{{< logotype image1="firefox.svg" >}}

Como norma general las pruebas de una aplicación deben estar automatizadas con una herramienta de _testing_. [Para el código Java una herramienta de pruebas es JUnit][blogbitix-410] y [para una aplicación web es Geb][blogbitix-332]. Sin embargo, algunas pruebas que no son de funcionalidad de la aplicación sino en una aplicación web por ejemplo de estilos y de visualización en la pantalla, que la página se muestre correctamente. Para estos casos no queda más que revisar, visualizar y comprobar la corrección visual de la misma, una posibilidad es entrar en la página manualmente mediante su dirección y realizar la comprobación.

Sin embargo, las acciones manuales hay que evitarlas en la medida de lo posible y que sean las menos posibles realizando su automatización ya que consumen muhco tiempo dedicable a tareas de valor. En este caso realizando la automatización se evita abrir el navegador, introducir la URL de la página o navegar hasta ella por cada URL a probar.

Aunque la revisión visual no esté automatizada y dependa de intervención humana al menos evitando las acciones manuales de introducir la URL o navegar hasta ella supone un ahorro de tiempo importante. La correcta visualización de una página puede consistir en revisar una captura de pantalla de la página y la automatización consiste en obtener esa captura de pantalla.

Esta automatización es interesante también ya que guardando los archivos de captura permiten tener un registro del estado de la visualización de una página a lo largo del tiempo y ver los cambios que se han ido realizando.

### Captura de pantalla desde la linea de comandos con Firefox

Para obtener la captura de pantalla el navegador [Firefox][firefox] permite desde la línea de comandos cargar una página a partir de su URL y obtener su captura de pantalla guardándola en un archivo _jpg_ o _png_. Las capturas de pantalla también se pueden tomar en un servidor [GNU][gnu]/[Linux][linux] sin interfaz gráfica con un comando habiendo instalado Firefox previamente para este propósito.

{{< code file="firefox-screenshot.sh" language="bash" options="" >}}

El parámetro _-P_ indica el perfil a usar y hay que crear uno para tomar capturas de pantalla al mismo tiempo que está abierto el perfil personal en una ventana gráfica del navegador. Hay varias formas de crear un nuevo perfil en Firefox. Desde la página de configuración _about:profiles_, con el gestor de perfiles o desde la línea de comandos.

{{< image
    gallery="true"
    image1="resource:firefox-about-profiles.png" optionsthumb1="300x200" title1="Perfiles de usuario en Firefox"
    image2="resource:firefox-gestor-perfiles.png" optionsthumb2="300x200" title2="Gestor de perfiles de Firefox"
    caption="Perfiles de usuario y gestor de perfiles de Firefox" >}}

{{< code file="firefox-gestor-perfiles.sh" language="bash" options="" >}}
{{< code file="firefox-createprofile.sh" language="bash" options="" >}}

Si hay necesidad de tomar varias capturas de pantalla de diferentes URLs de la aplicación o diferentes páginas web, con un script del intérprete de comandos [Bash][bash] y dada una lista de URLs una por línea en un archivo se realiza el bucle. El parámetro _screenshot_ contiene el nombre de la imagen en el que guardar la captura y a continuación la URL de la que tomar la captura, el parámetro _--window-size_ especifica el ancho del navegador al tomar la captura, cambiar el ancho permite observar como se visualiza la página en diferentes resoluciones de ancho (1366, 1600, 1920, 2560, ...).

{{< code file="links.txt" language="plaintext" options="" >}}
{{< code file="firefox-screenshot-links.sh" language="bash" options="" >}}

El resultado son las siguientes capturas de pantalla.

{{< image
    gallery="true"
    image1="resource:google.png" optionsthumb1="300x200" title1="Google"
    image2="resource:duckduckgo.png" optionsthumb2="300x200" title2="DuckDuckGo"
    image3="resource:ubuntu.png" optionsthumb3="300x200" title3="Ubuntu" >}}

{{< image
    gallery="true"
    image1="resource:redhat.png" optionsthumb1="300x200" title1="RedHat"
    image2="resource:archlinux.png" optionsthumb2="300x200" title2="Arch Linux"
    caption="Capturas de pantalla realizadas con Firefox en modo headless" >}}

Con un gran número de páginas validar visualmente cada una de las páginas mediante una imagen aun con la automatización de tomar la captura consume una buena cantidad de tiempo, para reducir el número de capturas a validar el archivo puede limitarse a unas representativas de la aplicación o unas aleatorias de todo el conjunto, con los comandos _sort -R_ y _head -3_ se toman las 3 primeras líneas aleatorias del archivo, el comando _sort_ las ordena de forma aleatoria y el comando _head_ toma el número de líneas indicado.

{{< code file="firefox-screenshot-links-random-firts.sh" language="bash" options="" >}}

### Captura de pantalla desde Firefox

Firefox también permite tomar capturas de pantalla desde la interfaz gráfica, con el botón derecho y la opción del menú emergente _Hacer una captura de pantalla_ de la pantalla completa o de la parte visible en ese momento o también desde el _Inspector_ que se muestra con el botón derecho y la opción _Inspeccionar elemento_ y habilitando la opción _Hacer una captura de pantalla de la página completa_ y si se desea _Captura de pantalla al portapapeles_ con las opciones de los ajustes.

{{< image
    gallery="true"
    image1="resource:firefox-ajustes-inspector.png" optionsthumb1="300x200" title1="Ajustes para mostrar botón de captura en las herramientas del inspector"
    caption="Ajustes para mostrar botón de captura en las herramientas del inspector" >}}

La consola web de Firefox también permite tomar capturas de pantalla escribiendo el comando _:screenshot_.

{{% reference %}}
* [Firefox Headless mode Taking screenshots](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode#Taking_screenshots)
* [Firefox Taking screenshots](https://developer.mozilla.org/en-US/docs/Tools/Taking_screenshots)
* [Firefox Taking screenshots with the web console](https://developer.mozilla.org/en-US/docs/Tools/Taking_screenshots#Taking_screenshots_with_the_web_console)
* [Profile Manager - Create, remove, or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles?redirectlocale=en-US&redirectslug=profile-manager-create-and-remove-firefox-profiles)
* [Read file line by line and perform action for each in bash](https://stackoverflow.com/questions/15396190/read-file-line-by-line-and-perform-action-for-each-in-bash)
{{% /reference %}}

{{% /post %}}
