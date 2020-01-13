---
pid: 179
type: "post"
title: "Monitorizar con eventos de Google Analytics una página web"
url: "/2016/09/monitorizar-con-eventos-de-google-analytics-una-pagina-web/"
date: 2016-09-18T12:00:00+02:00
updated: 2016-09-19T23:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:google-analytics.svg"
tags: ["planeta-codigo", "programacion"]
summary: "Conociendo cómo usar los eventos de Analytics podemos conocer información interesante acerca de qué forma los usuarios interactúan con nuestra propia página web. Cualquier cosa que podamos realizar con JavaScript o ante cualquier evento que podamos reaccionar podemos medirla con Analytics."
---

{{% post %}}

{{< logotype image1="google-analytics.svg" title1="Google Analytics" width1="200" >}}

No se mucho de [Google Analytics][google-analytics] únicamente lo que he aprendido aplicándolo en mi propia bitácora. Cuando [cambié de herramienta para generar de forma estática la bitácora][blogbitix-0] pude personalizar en mucha mayor medida que lo que podía primeramente con [Blogger][blogger] y después tenía con [Octopress][octopress].

Google Analytics además de proporcionarnos diversa información interesante sobre las visitas que recibimos en una página web puede servirnos para analizar el comportamiento de los usuarios, como interaccionan con la página, qué acciones realizan o que funcionalidades son usadas. La forma con la que podemos agregar información propia de la aplicación o página web es mediante los eventos de Analytics. Después de [instalar el _script_ de Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/) podemos enviar eventos simplemente con la siguiente linea de código JavaScript.

{{< code file="ad-enter.js" language="JavaScript" options="" >}}

La información del evento de compone de categoría (_category_), acción (_action_), etiqueta (_opt\_label_), valor  (_opt\_value_) y si no supone interacción (_opt\_noninteraction_). Deberemos proporcionar valores según queramos estructurar los eventos obligatoriamente para categoría y acción siendo el resto opcionales. En mi bitácora uso Analytics para además de visualizar la información que proporciona sobre visitas, ubicación de los usuarios, idioma, plataforma y navegador que usan, páginas más visitadas, origen de las visitas para lanzar unos cuantos eventos que me proporcionen información sobre las pulsaciones que se realizan en el menú de categorías y en los enlaces de redes sociales, en la lista de artículos recientes, artículos destacados y en el _widget_ de ShareThis y si se hace en el del inicio del artículo o en el del final. En la sección _Comportamiento > Eventos_ se agrega toda la información de los eventos, además podremos monitorizar en tiempo real los eventos que se estén produciendo en la sección _Tiempo real > Eventos_.

El parámetro _opt_noninteraction_ afecta al porcentaje de rebote, un evento interactivo se considerará como una acción que ha realizado el usuario después de visitar la página, si ese evento lo consideramos como un objetivo podemos hacer que esa interacción no se considere en el porcentaje de rebote. Por ejemplo, si el usuario permanece en la página 30 segundos podemos lanzar un evento que indique tal circunstancia con un _timeout_ y esa visita no se considere en el porcentaje de rebote.

Podemos medir cualquier cosa que deseemos incluso podemos conocer cuantos usuarios usan un bloqueador de anuncios como [AdBlock][adblockplus]. Este es el código JavaScript que uso para conocer cuantos usuarios lo tiene activado o no.

{{< code file="ad-block.js" language="JavaScript" options="" >}}

En la sección [Seguimiento de eventos](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) de la documetación de Google Analytics y en el resto de secciónes hay más detalles sobre esta herramienta. Para cualquier cosa que podamos reaccionar mediente un evento con JavaScript podemos medirla con Analytics, sirviéndonos para extraer información valiosa sobre los usuarios que nos permitan medir, entender y luego mejorar la experiencia de usuario de nuestra propia página web.

Como para cualquier otra cosa en la que queramos profundizar una buena forma es con algunos libros específicos dedicados al tema. Los siguientes son dos libros de los [muchos libros sobre Google Analytics](https://amzn.to/2cH8SXR) disponibles en [Amazon][amazon].

{{< amazon
    linkids="4babfb60d80236251c0ef398bc3ab757&internal=1,c179f357fbd31e18d25e93fd13c9729e&internal=1"
    asins="0596158009,148420266X" >}}

{{% /post %}}
