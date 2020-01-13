---
pid: 114
type: "post"
title: "Monitorizar estado de sitios web con Uptime Robot"
url: "/2015/12/monitorizar-estado-de-sitios-web-con-uptime-robot/"
date: 2015-12-11T17:00:00+01:00
updated: 2015-12-15T18:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:uptime-robot.png"
tags: ["planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="uptime-robot.png" title="Uptime Robot" width="300" >}}

Los sitios web que ofrecen su servicio de forma ininterrumpida por diferentes causas pueden dejar de funcionar ya sea porque se ha perdido la conexión con la base de datos, se ha llenado el disco de la máquina impidiendo su normal funcionamiento u otras causas. En algunos tipos de servicio como páginas de presencia en internet puede dar una mala imagen pero en los sitios de comercio electrónico la pérdida del servicio es especialmente importante ya que además implica perder ventas o clientes. Para conocer de la forma más inmediata posible el mal funcionamiento y poder restaurar el servicio podemos usar alguna herramienta que monitorice su estado. Para monitorizar el funcionamiento de sitios web una de ellas muy sencilla es [Uptime Robot][uptimerobot].

{{< image
    gallery="true"
    image1="image:uptime-robot.png" optionsthumb1="300x200" title1="Uptime Robot"
    caption="Uptime Robot" >}}

Una vez registrados y con acceso al panel de control podemos crear un _monitor_. Tenemos la posibilidad de crear diferentes tipos:

* <abbr title="Hypertext Transfer Protocol">HTTP</abbr>: que comprueba que la respuesta obtenida sea un código de estado 200.
* _keyword_: que comprueba que en la respuesta obtenida esté presente una palabra clave.
* _ping_: que simplemente comprueba que la máquina que ofrece el servicio responda (aunque el servicio web puede que no).
* _port_: comprueba que un determinado puerto esté accesible. En la [página de preguntas frecuentes](https://uptimerobot.com/faq) están comentados los diferentes tipos de monitores.

{{< image
    gallery="true"
    image1="image:nuevo-monitor.png" optionsthumb1="300x200" title1="Nuevo monitor HTTP"
    caption="Nuevo monitor HTTP" >}}

En el momento que un monitor detecte una caída de servicio podemos establecer que nos notifique por correo electrónico, [Twitter][twitter], _web-hook_, [Slack][slack], <abbr title="Short Message Service">SMS</abbr> o alguna más de forma que nos enteremos de la circunstancia inmediatamente. También podemos establecer el intervalo de tiempo de la monitorización desde como mínimo cada 5 minutos. En el panel de control podemos ver algunas estadísticas de cada monitor y de la cuenta, también se pueden reiniciar las estadísticas de cada monitor.

{{< image
    gallery="true"
    image1="image:dashboard.png" optionsthumb1="300x200" title1="Dashboard"
    caption="Dashboard" >}}
{{< image
    gallery="true"
    image1="image:blogstack.png" optionsthumb1="300x200" title1="Monitor Blog Stack"
    caption="Monitor Blog Stack" >}}

En el plan gratuito de Uptime Robot podemos crear 50 monitores, en el [plan de pago](http://uptimerobot.com/pricing) se pueden establecer tiempos de monitorización a partir de 1 minuto en vez de 5 y crear más monitores.

Hay otras herramientas de monitorización similares pero la mayoría son de pago. También hay herramientas que se pueden instalar en el navegador o como una aplicación de escritorio pero no las recomiendo ya que las alertas solo nos llegarían cuando los estemos usando.

Perfectamente podemos usar Uptime Robot sobre el _endpoint_ _health_ de una [aplicación que usa Spring Boot Actuator][blogbitix-113] para proporcionar información y métricas.

{{< reference >}}
* [Uptime Robot][uptimerobot]
* [Los 10 mejores servicios gratuitos para monitorizar sitios web](http://www.herramientas10.com/10-servicios-gratuitos-monitorizar-sitios-web_155.html)
* [Cómo puedes monitorizar una página web](http://papelesdeinteligencia.com/como-puedes-monitorizar-una-pagina-web/)
{{< /reference >}}

{{% /post %}}
