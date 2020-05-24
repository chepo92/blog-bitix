---
pid: 486
type: "post"
title: "El problema de seguridad tabnabbing y phising en los enlaces en nuevas pestañas a páginas externas y cómo solucionarlo"
url: "/2020/05/el-problema-de-seguridad-tabnabbing-y-phising-en-los-enlaces-en-nuevas-pestanas-a-paginas-externas-y-como-solucionarlo/"
date: 2020-05-24T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:html.svg"
tags: ["planeta-codigo", "seguridad", "web"]
summary: "A medida que las personas dependen en mayor medida para operar en internet como compras, acceso a cuentas bancarias o trámites administrativos la seguridad de las aplicaciones web es más crítica. Una parte de la seguridad es responsabilidad del usuario pero otra parte importante es responsabilidad del sitio web. Un potencial problema de seguridad está en los simples y aparentemente inocentes enlaces abiertos en nuevas páginas si al mismo tiempo es posible insertar contenido en la página que otros usuarios obtengan. El resultado es una vulnerabilidad de _tabnabbing_ y _phising_."
---

{{% post %}}

{{< logotype image1="html.svg" >}}

Es bueno conocer los problemas de seguridad más comunes en las aplicaciones web. Aún siendo la lista de [los 10 problemas de seguridad más importantes](https://owasp.org/www-project-top-ten/) muy conocidos aún siguen siendo de los más importantes por seguir habiendo aplicaciones vulnerables a ellos y por su gravedad para la seguridad de los datos así como para explotar una aplicación.

Aún así no son los únicos importantes, algunos ni siquiera requieren complejas técnicas para explotarlos. Uno de ellos son los enlaces externos que se abren en páginas en blanco. El problema de seguridad reside en que el modo de funcionamiento por defecto de estos enlaces se permite el acceso a la ventana origen desde la página abierta. Esto hace que la página abierta potencialmente sea capaz de tomar el control de la ventana origen y modificar su contenido, por ejemplo cargando una página maliciosa para hacer un peligroso ataque de suplantación de identidad o _phising_ que simule una página legítima con la intención de robar las contraseñas de algún servicio importante de un usuario.

{{< code file="page.xhtml" language="html" options="hl_lines=8-9" >}}

{{< image
    gallery="true"
    image1="image:link-target-blank-1.png" optionsthumb1="300x200" title1="Página con enlaces a otras páginas abiertas en una ueva pestaña"
    caption="Página con enlaces a otras páginas abiertas en una ueva pestaña" >}}

El problema es que los navegadores cuando se abre un enlace en una página en blanco o nueva, el navegador hace accesible a la ventana abierta el [objeto Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) de la página que lo abre. Y teniendo acceso al objeto _Window_ una página maliciosa cargada tiene la posibilidad de cargar una nueva página en la página original o acceder a las cookies entre ellas las que permiten mantener la sesión en el servidor. Por ejemplo, con la variable _window.location_ es posible cargar una página de autenticación falsa que le pida al usuario introducir sus datos y realmente realice el robo de la contraseña.

{{< code file="external.xhtml" language="html" options="hl_lines=7" >}}

Es un problema peligroso porque se aprovecha de los navegadores basados en pestañas, en este caso en una página fuera de la atención del usuario se carga un contenido nuevo, el usuario inadvertido al volver a esa pestaña puede pensar que el contenido cambiado de esa pestaña es legítimo sin ser consciente de que no lo es, sin embargo, ser víctima de este peligro de seguridad conocido como [tabnabbing](https://en.wikipedia.org/wiki/Tabnabbing) combinado con [phising](https://es.wikipedia.org/wiki/Phishing). Por ello se recomienda y es importante comprobar que el dominio de la página mostrado por el navegador en la barra de direcciones se corresponda con el contenido, que la página utilice un protocolo seguro no es suficiente si el ataque es de _phising_.

Este ataque es realmente sencillo pero ha de complementarse con una forma de ataque [XSS](https://es.wikipedia.org/wiki/Cross-site_scripting) no tanto por permitir insertar código JavaScript pero si por permitir insertar contenido inseguro sin control de forma que otros usuarios tangan posibilidad de abrirlos y ser potenciales victimas en este caso enlaces que abran una página maliciosa.

El enlace que abre una página en una nueva pestaña es vulnerable a _tabnabbing_. Al ir al enlace se abre una pestaña, el usuario pierde el foco de la página original y en ella la página abierta carga una nueva página produciéndose el _tabnabbing_.

{{< image
    gallery="true"
    image1="image:link-target-blank-2.png" optionsthumb1="300x200" title1="Problema de tabnnabing en enlaces que abren páginas en uneva pestaña" >}}
{{< image
    gallery="true"
    image1="image:link-target-blank-3.png" optionsthumb1="300x200" title1="Problema de tabnnabing en enlaces que abren páginas en uneva pestaña"
    caption="Problema de tabnnabing en enlaces que abren páginas en uneva pestaña" >}}

La solución más sencilla es añadir el atributo _rel="noopener noreferrer"_ a los enlaces que se abran en una nueva página, esto informa al navegador para que no proporcione a la página abierta el acceso a la variable _window.opener_, como se muestra en el segundo enlace del ejemplo de código _page.html_, si la página abierta hace uso de ella se produce un error de JavaScript.

{{< image
    gallery="true"
    image1="image:link-target-blank-4.png" optionsthumb1="300x200" title1="La variable window.opener es nula en el enlace seguro"
    caption="La variable window.opener es nula en el enlace seguro" >}}

Otras medidas recomendables son [codificar los datos para evitar ataques XSS][blogbitix-392] y [filtrar el contenido enviado por los usuarios o devuelto por la página][blogbitix-48] sobre todo si proviene de fuentes externas a la aplicación ya sea de formularios introducidos por el usuario, parámetros, cabeceras u otras aplicaciones.

{{% reference %}}
* [window.opener](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener)
{{% /reference %}}

{{% /post %}}
