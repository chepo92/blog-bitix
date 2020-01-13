---
pid: 162
type: "post"
title: "Las cabeceras de cache del protocolo HTTP"
url: "/2016/07/las-cabeceras-de-cache-del-protocolo-http/"
date: 2016-07-22T18:00:00+02:00
updated: 2016-07-24T22:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:html.svg"
tags: ["planeta-codigo", "software", "software-libre", "web"]
summary: "Establecer directivas de cacheo en los recursos devueltos en una página o aplicación web tiene las ventajas de reducir el número de peticiones que llegan al servidor mejorando la latencia y el rendimiento pudiendo atender a más usuarios y mejora los tiempos de carga de las páginas. Usando varias directivas de cacheo la aplicación es capaz de determinar cómo quiere que el contenido devuelto o los recursos sean cacheados por los clientes o servidores de cache intermedios."
---

{{% post %}}

{{< logotype image1="html.svg" title1="HTML" width1="200" >}}

Cachear aquella información que es costosa de generar y es muy solicitada consigue por un lado evitar que el servidor sea capaz de atender todo el tráfico reduciendo la cantidad de capacidad necesaria del servidor y por otro lado consigue que la información sea devuelta en menor tiempo. Para aquella información que no necesite estar completamente actualizada o que no cambia cada poco tiempo es candidata a cachearla en caso necesario. La cache se puede realizar en los navegadores guardando estos recursos como imágenes y hojas de estilos que consiguen reducir el número de peticiones al servidor y mostrando la página más rápidamente al usuario. La cache también se puede hacer en el lado del servidor usando soluciones específicas como [Varnish][varnish], [memcached][memcached] o para los casos más habituales que serán la mayoría las funcionalidades incorporadas en el servidor web como en el caso de [Nginx][nginx].

El cacheo o almacenamiento temporal de datos puede hacerse a diferentes niveles sin ser exclusivos y de diferentes tipos de información. En la base de datos, en la aplicación, a nivel de página, con servidor intermedio o en el cliente.

Según la cantidad de tiempo de expiración que establezcamos como cache para el contenido conseguiremos variar el número de aciertos en la cache, aumentando el tiempo unos pocos segundos el tiempo que almacenamos en la cache el contenido conseguimos aumentar el porcentaje de aciertos en mayor medida. Con un tiempo de cache de un minuto ya se consiguen porcentajes elevados de aciertos según el número de peticiones realizadas en ese periodo de tiempo.

{{< image
    gallery="true"
    image1="image:cache-hit.png" optionsthumb1="300x200" title1="Petición con acierto en cache"
    image2="image:cache-miss.png" optionsthumb2="300x200" title2="Petición con fallo en cache"
    caption="Petición con acierto y fallo en la cache" >}}

En el protocolo HTTP 1.1 se definieron tres mecanismos para las caches:

* Validez: permite usar un recurso sin hacer ninguna comprobación con el servidor ni para revalidarlo. Por ejemplo, la cabecera _Expires_ indica en que momento el recurso puede haberse quedado obsoleto y se debería revalidar. La cabecera _Cache-Control: max-age_ indica durante cuanto tiempo el recurso puede considerarse válido. Esto evita hacer peticiones al servidor si los recursos se consideran válidos.
* Validación: una vez que un recurso se considera que puede ser obsoleto se debería comprobar haciendo una petición al servidor para conocer si sigue siendo válido y si no lo es obtener una nueva versión. Usando las cabeceras _If-Modified-Since_ o _Etag_ puede comprobarse si el recurso ha sido modificado con posterioridad a una fecha o ha variado. Se ha de hacer una petición para comprobar la validez del recurso pero los casos que sigan siendo válidos no hará falta descargarlos de nuevo. Si el recurso sigue siendo válido el servidor responde con el [código de estado 304](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP#3xx:_Redirecciones) y sin el contenido en la respuesta.
* Invalidación: las peticiones que usen los métodos _PUT_, _POST_ y _DELETE_ pueden invalidar recursos ya que modifican el estado del servidor.

El servidor especifica como quiere que el contenido o recursos que devuelve sean cacheados a través de varias directivas del protocolo HTTP, establecidas como cabeceras en la respuesta cuando se solicita el contenido o recurso. Algunas cabeceras realizan funciones similares habiendo cierto solapamiento de funcionalidad. Son las siguientes:

* Cache-Control: private | public, no-cache, no-store, max-age, s-maxage, must-revalidate, no-transform, proxy-revalidate
  * El valor _private_ indica que el recurso es privado para el usuario y no debería ser cacheado. Esto no hace el recurso más seguro ya que la información no se transmite cifrada para ello hay que [usar un protocolo seguro con TLS/SSL][blogbitix-14].
  * _no-cache_ el recurso no debería ser cacheado.
  * _no-store_ el recurso no debería ser almacenado.
  * _max-age_ normalmente se ha usado la directiva _Expires_ pero esta permite establecer el máximo tiempo especificado en segundos a cachear un recurso.
  * _s-maxage_ similar a max-age pero para las caches intermedias entre el cliente y el servidor.
  * _must-revalidate_ cuando un recurso se queda obsoleto no se debe usar sin antes validar contra el servidor si sigue siendo válido.
  * _no-transform_ indica que el contenido original no debe ser modificado, por ejemplo, modificando el recurso para optimizarlo si por ejemplo se trata de una imagen.
  * _proxy-revalidate_ lo mismo que _must-revalidate_ pero para las caches intermedias.
* If-Modified-Since: si el recurso solicitado con su variante no ha sido modificado con posterioridad a una fecha se devolverá un código de estado 304 sin el contenido.
* Expires: es una marca de tiempo que indica cuando el recurso expira, dado que se basa en el tiempo no es muy precisa ya que los relojes de cada ordenador no están perfectamente sincronizados y hay variaciones incluso de minutos. Preferiblemente es mejor usar _Etag_ o _max-age_.
* [Etag](https://es.wikipedia.org/wiki/HTTP_ETag): _entity-tag_ o _etag_ es un código _hash_ único del contenido que permite conocer si el recurso ha cambiado. Si el recurso no ha cambiado no hace falta devolver el recurso, si ha cambiado se devuelve en la misma petición. Al no depender de una marca de tiempo como _Expires_ o _max-age_ es más fiable.
* Vary: indica que el recurso varía según alguna cabecera proporcionada por el cliente como por ejemplo _User-Agent_ o _Accept-Encoding_.
* Pragma: esta es una directiva antigua que indicada como _pragma: no-cache_, se interpreta como _cache-control: no-cache_.

{{< reference >}}
* [A Beginner's Guide to HTTP Cache Headers](http://dev.mobify.com/blog/beginners-guide-to-http-cache-headers/)
* [Header Field Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
* [Capítulo 14. La caché de HTTP](https://librosweb.es/libro/symfony_2_x/capitulo_14.html)
* [14.3. Introducción a la caché de HTTP](https://librosweb.es/libro/symfony_2_x/capitulo_14/introduccion_a_la_cache_de_http.html)
* [14.4. Caducidad y validación HTTP](https://librosweb.es/libro/symfony_2_x/capitulo_14/caducidad_y_validacion_http.html)
{{< /reference >}}

{{% /post %}}
