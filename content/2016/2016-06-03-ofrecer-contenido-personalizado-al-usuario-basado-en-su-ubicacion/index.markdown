---
pid: 147
type: "post"
title: "Ofrecer contenido personalizado al usuario basado en su ubicación"
url: "/2016/06/ofrecer-contenido-personalizado-al-usuario-basado-en-su-ubicacion/"
date: 2016-06-03T19:00:00+02:00
updated: 2016-06-06T19:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:linux.svg"
tags: ["planeta-codigo", "programacion", "software", "software-libre"]
summary: "Cuando navegamos por internet el navegador envía mútiple información sobre nosotros y algunas páginas web recopilan esa información y la procesan para ofrecer contenido personalizado que creen nos resultaría de interés. Contenido con mayor relevancia para el usuario mejora la experiencia de usuario y la páginas web mejorarán su ratio de conversión y facturación. La información que proporcionamos sin ser conscientes son las _cookies_, la dirección IP, el navegador que usamos, el sistema operativo, nuestra resolución de pantalla, la hora a la que accedemos a la página, ... en base a ella y aunque la información está impersonalizada sirve para identificarnos como inequivocamente usuarios. Con la dirección IP y usando una base de datos es posible obtener al menos el país desde el que se accede a una web y muy posiblemente la ciudad."
---

{{% post %}}

{{< logotype image1="linux.svg" image2="gnu.svg" image3="java.svg" >}}

Un usuario cuando navega por internet proporciona diversa información que las páginas web pueden utilizar para personalizar el contenido que le muestran. La información que el usuario proporciona es el navegador que utiliza, sistema operativo y dirección IP. Con las _cookies_ las páginas web pueden almacenar información en su navegador que persista en varias sesiones. Amazon por ejemplo personaliza el contenido que ve el usuario cuando accede a la página de inicio mostrando diferentes categorías de productos en los que puede estar más interesado, por ejemplo, productos visitados en anteriores sesiones, relacionados o similares. Si el usuario ha visitado un producto con anterioridad es muy posible que esté interesado en comprar ese producto con lo que Amazon se lo muestra de nuevo en la siguiente sesión o le envía un correo electrónico al día siguiente como recordatorio. Una página de eventos, viajes, hoteles, restaurantes, museos, el tiempo, ... puede mostrar información basada en la localización, por ejemplo, si alguien está en Madrid quizá esté interesando dependiendo de la búsqueda que haga en eventos, hoteles o museos en esa ciudad.

En [Arch Linux][archlinux] al igual que en muchas otras distribuciones [GNU][gnu]/[Linux][linux] hay unos comandos y unos paquetes que contienen una base de datos que en base a la dirección IP proporciona el país, ciudad, código postal y coordenadas geográficas de latitud y longitud, son [geoip](https://www.archlinux.org/packages/extra/x86_64/geoip/) con información del país y [geoip-database-extra](https://www.archlinux.org/packages/extra/any/geoip-database-extra/) para obtener información de la ciudad. La localización de un usuario también puede obtenerse usando una consulta que implique red de datos hacia algún servicio y si el usuario en su navegador lo permite proporcionar la información de su geoposicionamiento, la diferencia es que la petición que haga uso de red añade algo de latencia a la respuesta de la aplicación tampoco requieren pedir permisos al usuario para activar su geoposicionamiento. La información proporcionada por _geoip_ quizá no sea tan exacta en todos los casos que los anteriores métodos pero más que suficiente en la mayoría. En caso de querer la mejor precisión se puede optar primeramente pedir al usuario que comparta su localizacion mediante el navegador, luego o en la primera petición hasta que el usuario comparta su posición por usar la base de datos de _geoip_, si esta no es exacta aunque seguramente proporcione al menos el país pero no proporciona la ciudad se puede optar por usar algún servicio que implique red.

Instalados los paquetes con las bases de datos de geoposicionamiento en la distribución GNU/Linux su uso desde la línea de comandos es el siguiente, indicando la dirección IP o nombre de dominio de la que queramos conocer su ubicación:

{{< code file="geoiplookup-85.84.77.93.sh" language="bash" options="" >}}
{{< code file="geoiplookup-8.8.8.8.sh" language="bash" options="" >}}
{{< code file="geoiplookup-marca.es.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:geoiplookup.png" optionsthumb1="300x200" title1="Comando para obtener información de geoposicionamiento en base a la dirección IP"
    caption="Comando para obtener información de geoposicionamiento en base a la dirección IP" >}}

Otra opción es usar otra base de datos de geolocalización para direcciones IP, en vez de instalar un paquete en el sistema y usar el comando `geoiplookup` y procesar su salida con las bases de datos de [MaxMind GeoLite2 para paises](http://geolite.maxmind.com/download/geoip/database/GeoLite2-Country.mmdb.gz) y [ciudades](http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz) dispondremos de una API accessible desde el lenguaje de programación que prefiramos. En este ejemplo usaré Java pero hay _bindings_ para los lenguajes más populares.

Este sería el código para obtener la información de forma más sencilla que lanzar un proceso del sistema y _parsear_ su resultado, además con GeoLite2 la aplicación no necesitará que el sistema tenga un paquete instalado y será más autocontenida. La base de datos de geolocalización se proporciona en un archivo que es posible distribuir con la aplicación.

En el siguiente ejemplo no incluyo la base de datos en el código fuente del proyecto ya que ocupa casi 65MiB. Descargada, descomprimida y ubicada en el directorio _src/main/resources_ la aplicación se iniciar con el comando `./gradlew run`.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

{{< image
    gallery="true"
    image1="image:geolite2.png" optionsthumb1="300x200" title1="Información de geoposicionamiento en base a la dirección IP con GeoLite2"
    caption="Información de geoposicionamiento en base a la dirección IP con GeoLite2" >}}

GeoLite2 tiene una [licencia Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/4.0/) y no tiene coste, MaxMind proporciona además otras bases de datos más completas pero con un coste, 50$ para la base de datos de paises más 24$ para las actualizaciones y 370$ para la base de datos de ciudades más 100$ para las actualizaciones.

En una aplicación web Java en la interfaz [ServletResquest](https://docs.oracle.com/javaee/7/api/javax/servlet/ServletRequest.html) y con el método [getRemoteAddr()](http:s//docs.oracle.com/javaee/7/api/javax/servlet/ServletRequest.html#getRemoteAddr--) obtenemos la dirección IP del usuario, ya solo nos queda [lanzar un proceso del sistema desde Java][blogbitix-132] que invoque al comando `geoiplookup` con la dirección IP obtenida o usar la API Java u de otro lenguaje de MaxMind GeoLite2, obtener la salida del proceso, interpretarla y hacer con ella lo que queramos hacer en la aplicación. En una aplicación web adicionalmente somos libres de usar la [API de geoposicionamiento](https://en.wikipedia.org/wiki/W3C_Geolocation_API) implementada en los navegadores.

Proporcionar contenido personalizado al usuario probablemente ayuda a mejorar la conversión de un sitio de comercio electrónico y la experiencia del usuario ofreciéndole productos o servicios en los que de alguna forma esté interesado ya sea como en este caso basado en su ubicación, pero como en el caso de Amazon según las visitas anteriores y en otros podría ser en base al sistema operativo o navegador como hace Google cuando accedemos a su buscador indicándonos que nos instalemos [Chrome][google-chrome] si usamos [Firefox][firefox].

{{< sourcecode git="blog-ejemplos/tree/master/JavaGeolocation/" command="./gradlew run" >}}

{{< reference >}}
* [Lanzar proceso del sistema con Java][blogbitix-132]
* [Geolocation software](https://en.wikipedia.org/wiki/Geolocation_software)
* [W3C Geolocation API](https://en.wikipedia.org/wiki/W3C_Geolocation_API)
{{< /reference >}}

{{% /post %}}
