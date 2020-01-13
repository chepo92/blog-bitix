---
pid: 23
type: "post"
title: "Presentación de Blog Stack"
url: "/2014/05/presentacion-blog-stack/"
date: 2014-05-04T11:51:38+02:00
updated: 2014-05-06T21:00:00+02:00
comments: true
rss: true
sharing: true
imagePost: "logotype:blogstack.png"
tags: ["software", "software-libre", "gnu-linux", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="blogstack.png" title="Blog Stack" width="300" >}}

Con este artículo quiero presentar un nuevo proyecto, Blog Stack. [Blog Stack](http://www.blogstack.info/) (BS) es una agregador, planeta, o fuente de información de bitácoras sobre programación, desarrollo, desarrollo ágil, software, software libre, hardware, gnu/linux o en general temas relacionados con la tecnología.

{{< image
    gallery="true"
    image1="image:blogstack-portada.png" optionsthumb1="300x200" title1="Portada de Blog Stack" >}}

Otro agregador o planeta no es ninguna idea nueva pero BS incorpora alguna cosa adicional como poder suscribirse a únicamente el contenido etiquetado en que cada uno esté interesando (programación, desarrollo-ágil, java, python, linux, ubuntu, ...) o recibir el contenido publicado en todas las bitácoras agregadas sin tener que suscribirse individualmente a cada una de ellas. BS aún está en desarrollo y posiblemente vaya incorporando nuevas ideas que me surjan o se me propongan pero en el estado actual ya cumple con la función básica de agregador.

Como comento en la [página de pregutnas frecuentes](http://www.blogstack.info/faq) hay varios motivos por los que he iniciado el proyecto, la semilla es que quería hacer un proyecto personal con cierta utilidad para otras personas empleando de alguna forma el _framework_ para el desarrollo de aplicaciones web [Apache Tapestry](http://tapestry.apache.org/). Como catalizador de la semilla ha sido que recientemente, abril de 2014, [Planeta Linux](http://planetalinux.org/) ha dejado de estar accesible dejando un gran vacío entre las bitácoras sobre gnu/linux y el software libre y por tanto al igual que en el caso de muchos otros blogeros los artículos que publicaba en mi bitácora sobre estos temas ya no son agregados en este planeta y van a dejar de llegar a muchos potenciales lectores. Al menos, solo ha sido durante unas semanas, después de escribir un correo electrónico a la persona que se encarga de su mantenimiento preguntándole por la situación finalmente Planeta Linux está disponible. Por otro lado también tengo mi bitácora agregada a [Planeta Código](http://planetacodigo.com/) y [Bitacoras.com](http://bitacoras.com/) pero creo que se les podría hacer algunos añadidos para tener un mejor agregador, planeta, o fuente de información o al menos con alguna idea diferente. Desde darle un mejor aspecto hasta el permitir incluir el contenido que en la mayoría de agregadores es filtrado por seguridad como [vídeos de Youtube](https://www.youtube.com/) o [Vimeo](http://vimeo.com/), [presentaciones de Speaker Deck](http://speakerdeck.com/), [Gist de GitHub](http://gist.github.com/), [comentarios de Disqus](http://disqus.com/) y permitir monetizar el contenido con [publicidad de AdSense](https://www.google.com/adsense/) o el programa de [afiliados de Amazon](https://afiliados.amazon.es/) directamente desde Blog Stack. Como decía a través de las etiquetas los lectores pueden suscribirse únicamente a los temas que les interesen sin tener que suscribirse a cada bitácora de forma individual o descubrir nuevas bitácoras que se agreguen y su contenido sin tener que buscarlas. Otro planeta en el que tengo mi [antigua bitácora](https://elblogdepicodev.blogspot.com.es/) agregada es [Planeta Arch Linux](http://planeta.archlinux-es.org/) pero aún estoy esperando a que me agreguen [el nuevo](https://picodotdev.github.io/blog-bitix/) supongo que por falta de tiempo por parte de las personas encargadas de su mantenimiento, en cualquier caso tampoco he recibido al menos una respuesta.

También quería poner a las bitácoras personales y al contenido, en los que algunos se escriben valiosas píldoras de conocimiento concentrado, en el lugar que se merecen en esta época de redes sociales en las que lo relevante es compartirlo o comentarlo, esto también es importante y valioso pero no siempre más que el propio contenido que parece que queda relegado en un segundo plano más allá de los titulares o entradillas. Por último, a veces encontrar las bitácoras de esas personas que publican contenido interesante no siempre es sencillo y a las nuevas bitácoras en los inicios les cuesta llegar a un número amplio de lectores hasta que es conocido o indexado en las páginas de resultados de los buscadores en las primeras posiciones. Blog Stack permitirá descubrir nuevo contenido a través de las etiquetas en las que se publican los artículos, también permitirá descubrir nuevas bitácoras que se agreguen y quizá en un futuro a medida que se vaya conociendo y en el que se vayan agregando bitácoras y atrayendo lectores hacer que el inicio de una bitácora no sea escribir para uno mismo.

Blog Stack es algo más que el agregador, es software libre con [licencia AGPL](http://www.gnu.org/licenses/agpl-3.0.html) y el [código fuente](https://github.com/picodotdev/blog-stack) usado para generarlo está disponible en un repositorio de GitHub. Cualquiera podría usarlo para crear un agregador de temática similar o de otra (deportes, música, conciertos, cocina, arte, ciencia, educación, ocio, juegos, moda, noticias, literatura, cine, sociedad, economía, política, ...) y con las herramientas que ofrece GitHub cualquiera podría colaborar con su desarrollo, es más, sería bien recibido, a través de código con «pull request» o creando «issues» con cualquier sugerencia o problema que se detecte. Blog Stack está desarrollado usando [Java](https://www.oracle.com/es/technologies/java/overview/index.html) y el _framework_ [Apache Tapestry](http://tapestry.apache.org/) no como aplicación web sino como motor de plantillas para generar el contenido. Usar Tapestry de esta forma no es lo habitual pero el modelo «pull» seguido por Tapestry en las plantillas que generan el html y el conjunto controlador + plantilla que siguen los componentes me resulta mejor que la separación entre controlador y vista que es lo habitual en encontrar en la mayoría de motores de plantillas o _frameworks_ web. Además, si en un futuro BS se generase en vez como contenido estático mediante una aplicación web prácticamente podría reutilizar todo el código de la aplicación. El funcionamiento de BS es similar a [Octopress](http://octopress.org/) (con el que estoy bastante contento al usarlo en mi bitácora) generando el sitio de forma estática en [OpenShift](https://www.openshift.com/) y posteriormente hospedado en [GitHub Pages](https://pages.github.com/), generar el contenido de forma estática tiene algunas limitaciones pero por el momento es suficiente y para el proyecto es importante que sea una solución cuyo coste sea bajo. En el inicio está solo en la compra del dominio, con [DonDominio](http://dondominio.com/) 10€ anuales. Con un poco de suerte la publicidad permitirá que BS genere en ingresos sus propios gastos lo que garantiza que el coste no lo asuma yo, si fuera así posiblemente pasado un tiempo provocaría que acabase cerrando el servicio.

Si tienes una bitácora sobre programación, desarrollo ágil, software, software libre, gnu/linux, hardware, tecnología o demás temas relacionados solo tienes que indicármelo como explico en la [página de preguntas frecuentes](http://www.blogstack.info/faq) y en un poco de tiempo haré que BS agregue el contenido de tu bitácora. Y si estás interesado en información sobre estos temas y quieres descubrir nuevo contenido solo debes suscribirte a alguna de las etiquetas o a la [fuente atom de la portada](http://www.blogstack.info/feed.atom.xml). Por el momento, solo esta agregado el contenido de mis bitácoras pero espero que después de leer esta presentación algunos blogeros se animen a que agregue su contenido.

En las próximas semanas publicaré en mi blog de forma más detallada [como está montado tecnológicamente Blog Stack por 10€ al año][blogbitix-24] y como he resuelto algunos asuntos comunes en las páginas o aplicaciones web.

¡Hola planeta!

{{< reference >}}
* [Arquitectura y hospedaje de Blog Stack][blogbitix-24]
{{< /reference >}}

{{% /post %}}
