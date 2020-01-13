---
pid: 165
type: "post"
title: "Configurar Nginx para cachear respuestas del servidor de aplicaciones"
url: "/2016/07/configurar-nginx-para-cachear-respuestas-del-servidor-de-aplicaciones/"
date: 2016-07-30T13:00:00+02:00
updated: 2016-07-31T01:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:nginx.svg"
tags: ["planeta-codigo", "software", "software-libre", "web"]
summary: "Las caches son un recurso utilizado para aumentar el rendimiento y evitar malgastar recursos. Si una petición es muy costosa pero que no cambia muy a menudo o no se necesitan que los datos estén totalmente actualizados cachear el resultado de esa petición evitará tener que recalcularla para cada petición, si se realizan muchas peticiones el aumento de rendimiento será drásticamente mejor usando además un menor número de recursos de los sistemas. Hay soluciones específicas para cacheo pero si nuestra necesidades no son extremadamente avanzadas el cacheo ofrecido por Nginx probablemente sea suficiente."
---

{{% post %}}

{{< logotype image1="nginx.svg" title1="Nginx" width1="300" >}}

Los servidores web son muy eficientes devolviendo al cliente archivos estáticos. Tradicionalmente el contenido estático formado por hojas de estilo, archivos JavaScript, imágenes o vídeos de una página o aplicación web han sido devueltos por un servidor web evitando que el servidor de aplicaciones tenga que procesar una gran cantidad de peticiones, aún hoy se sigue haciendo. En caso de que los recursos estáticos estén alojados en el servidor de aplicaciones en vez de en el servidor web, porque los recursos estáticos se empaquetan con la aplicación, el servidor web puede cachearlos evitando que peticiones lleguen al servidor de aplicaciones. En este artículo comentaré cual es la configuración necesaria a añadir en el servidor web [Nginx][nginx] que hace de _proxy_ para que cachee el resultado de las peticiones así indicadas del servidor de aplicaciones, la aplicación genera el contenido y establece las cabeceras de cache indicando como quiere que se cachee el contenido devuelto.

Para que el servidor web realice el cacheo de los recursos en la aplicación esta ha de devolver en las cabeceras de respuesta como quiere que los recursos sean cacheados usando las cabeceras _Last-Modified_, _Expires_, _Cache-Control_ quizá _Etag_. [Las cabeceras de cache del protocolo HTTP][blogbitix-162] establecen el comportamiento deseado para la cache.

Hay que modificar el archivo de configuración de Nginx para que cachee el contenido. La directiva _proxy\_cache\_path_ indica donde se guardarán el contenido cacheado, cual es el tamaño de los metadatos de la caché y el tiempo de inactividad para cachear pasado el cual los recursos serán descartables. La directiva _proxy\_cache\_key_ permite diferenciar los recursos en la cache, _add\_header X-Proxy-Cache_ añade una cabecera para la respuesta de Nginx con el resultado de cache que nos permite conocer si se produjo un acierto en la caché, un fallo o se ignoró la cache. Lo que es útil para depurar la aplicación u obtener información. Con _proxy\_pass_ hacemos que Nginx haga de _proxy_ para el servidor de aplicaciones o la aplicación.

{{< code file="nginx.conf" language="plaintext" options="" >}}
{{< code file="docker-compose.yml" language="YAML" options="" >}}

La siguiente pequeña aplicación Java que usa el [framework Spark][spark] expone dos recursos para probar el funcionamiento de cache de Nginx, un recurso añade cabeceras de cacheo para la respuesta y otro no añade las cabeceras de respuesta. Atendiendo a las cabeceras establecidas por la aplicación y Nginx configurado para hacer de _proxy_ y cache devolverá el contenido deseado de su cache o solicitándolo a la aplicación y cacheándolo si así se indica en las cabeceras de respuesta.

{{< code file="Main.java" language="java" options="" >}}

La primera petición que se realiza al recurso _cache_ devuelve un [código de estado 200 de HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP#2xx:_Peticiones_correctas) y Nginx en la cabecera _X-Proxy-Cache_ indica que se ha producido un _MISS_ o fallo en la cache, la segunda petición realizada antes de que pase el minuto del tiempo de expiración devuelve un [código de estado 304](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP#3xx:_Redirecciones) y Nginx en la cabecera _X-Proxy-Cache_ un _HIT_ o acierto en la cache, finalmente pasado más de un minuto del tiempo de expiración se devuelve un código de estado 200 y Nginx en la cabecera _X-Proxy-Cache_ un _EXPIRED_. En las trazas de Nginx vemos las peticiones que se producen sus códigos de estado y después de este los bytes transferidos de contenido, nótese que en los casos de los 304 los bytes transferidos son 0, bytes de datos ahorrados y evitado que la petición llegue a la aplicación que son unos de los objetivos de las caches. En el recurso _nocache_ de la aplicación Nginx no cachea el contenido devuelto ya que en este no se establecen las cabeceras de cache en la respuesta.

{{< image
    gallery="true"
    image1="image:nginx-cache-peticion-miss.png" optionsthumb1="300x200" title1="Fallo en la cache de Nginx"
    image2="image:nginx-cache-peticion-hit.png" optionsthumb2="300x200" title2="Acierto en la cache de Nginx" >}}
{{< image
    gallery="true"
    image1="image:nginx-cache-peticion-expired.png" optionsthumb1="300x200" title1="Expiración en la cache de Nginx"
    image2="image:curl-cache-miss-hit-expired.png" optionsthumb2="300x200" title2="Fallo, acierto y expiración en la cache de Nginx con curl"
    caption="Fallo, acierto y expiración que produce en la cache de Nginx al realizar peticiones" >}}

{{< code file="nginx.out" language="plaintext" options="" >}}
{{< code file="curl-cache.sh" language="bash" options="" >}}

Hay servidores específicos para realizar tareas de cache como [Varnish][varnish] con más opciones de las que ofrece Nginx. Para los casos no complicados usando Nginx evitamos añadir una nueva pieza a la arquitectura de la aplicación. Entre los productos que ofrece Amazon está [Cloudfront](https://aws.amazon.com/es/cloudfront/) que es una cache para recursos estáticos con el añadido de que de forma automática está distribuida geográficamente de forma que los recursos se sirven por un servidor más cercano al cliente evitando un mal rendimiento por la latencia. En el artículo [servir recursos estáticos de un CDN en Apache Tapestry][blogbitix-34] comento como usar esta red de distribución de contenido ofrecida por Amazon.

{{< sourcecode git="blog-ejemplos/tree/master/NginxCache" command="./gradlew build, cd docker, docker-compose up" >}}

{{< reference >}}
* [Servir recursos estáticos desde un CDN en Apache Tapestry][blogbitix-34]
* [Nginx Caching](https://serversforhackers.com/nginx-caching)
{{< /reference >}}

{{% /post %}}
