---
pid: 392
type: "post"
title: "Codificar los datos para evitar ataques XSS en una página web"
url: "/2019/03/codificar-los-datos-para-evitar-ataques-xss-en-una-pagina-web/"
date: 2019-03-24T12:00:00+01:00
date: 2019-03-29T09:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:html.svg"
tags: ["planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="html.svg" title1="HTML" width1="200" image2="java.svg" >}}

Validar los datos es importante para una aplicación pero no es suficiente para crear una aplicación, es más, para crear una aplicación segura es más importante codificar correctamente los datos emitidos por la aplicación. Los ataques XSS se producen precisamente por no codificar correctamente los datos emitidos provenientes de una fuente no confiable. Una fuente no confiable puede ser un parámetro en una aplicación web pero también puede ser cualquier otro dato que incluya una petición HTTP como una cabecera.

El siguiente código de un archivo JSP que obtiene un parámetro de la petición y lo emite en la salida permite a un usuario malicioso insertar código en la página web, si el dato que se envía es el contenido de _xss.data_ y las _cookies_ no se crearon con las cabeceras _httponly_ el usuario malicioso puede obtener acceso a la sesión del usuario en el sitio web y es un grave fallo de seguridad. En este caso solo se emplea un _alert_ pero el código podría ser más elaborado y realizar una petición a una URL en la que el usuario malicioso reciba los datos de las _cookies_ de sesión.

{{< code file="RequestParameter.jsp" language="html" options="" >}}
{{< code file="user-parameter-xss.data" language="plaintext" options="" >}}

El contenido HTML generado por la aplicación y enviado al navegador sería el siguiente:

{{< code file="RequestParameter.html" language="html" options="" >}}

En este caso al cargar la página en el navegador se muestra un mensaje _alert_ con una ventana emergente pero si el usuario malicioso enviase los datos de las _cookies_ a una URL suya el usuario ni siquiera sería consciente de que le han robado la sesión. Y este fallo de seguridad se produce simplemente por cargar una página de una aplicación insegura por XSS.

{{< image
    gallery="true"
    image1="image:xss.png" optionsthumb1="300x200" title1="XSS"
    image2="image:xss-user.png" optionsthumb2="300x200" title2="XSS"
    caption="XSS" >}}

Pero ¿como consigue el usuario malicioso inyectar su código mediante parámetros u otros datos emitidos por la página insegura? Una opción sería enviar al usuario un enlace especialmente construido para que se aproveche del fallo de seguridad, el medio de hacerlo llegar puede ser un correo electrónico o un enlace en las redes sociales o páginas de gran tráfico como Facebook. Para que el enlace no sea tan evidente se puede utilizar un acortador de enlaces. Los comentarios son otro vector con el que el usuario malicioso puede insertar enlaces o el propio contenido si no son tratados adecuadamente donde sean mostrados como en la página web, de otros médios como correos electrónicos o una aplicación de _backoffice_ de uso interno que incluso puede tener privilegios de realizar acciones especialmente sensibles.

Para evitar los ataques XSS la regla básica es codificar correctamente cualquier dato que se emita como resultado. En el caso de una aplicación web codificar correctamente el dato a emitir depende del contexto donde se incluya el dato para escapar correctamente los caracteres especiales de ese contexto. Los contextos puede ser como HTML, como un atributo de una etiqueta, como contenido HTML, como un bloque de JavaScript o como una variable de JavaScript.

Si el _framework_ web que usamos no proporciona facilidades para evitar ataques XSS al emitir contenido en el resultado en Java se puede usar la librería [OWASP Java Encoder Project](https://www.owasp.org/index.php/OWASP_Java_Encoder_Project) siendo su uso el siguiente. _OWASP Java Encoder Project_ es una librería que no tiene dependencias adicionales por lo que es sencillo incorporarla  en la aplicación.

{{< code file="Encoder.jsp" language="html" options="" >}}

Para los _frameworks_ web populares ya tienen en cuenta el XSS en el comportamiento por defecto al emitir datos.

* [Preventing XSS Vulnerabilities in Web Frameworks (Struts, Tapestry)](https://www.dontpanicblog.co.uk/2012/03/12/xss-vulnerabilities-in-web-frameworks-2/)
* [How to protect against XSS attacks in Grails](https://stackoverflow.com/questions/15144905/how-to-protect-against-xss-attacks-in-grails-app)

No siempre se desea codificar un dato simple según el contexto, a veces se quiere permitir insertar código HTML. La alternativa a la codificación para estos casos es el saneado permitiendo únicamente los elementos que se consideren seguros definiendo una política, por ejemplo, permitiendo etiquetas HTML de enlaces y ciertas etiquetas como _em_, _ul_, _li_. El saneado también se puede hacer con [jsoup][jsoup] pero esta incluye otras funcionalidades que si no son necesarias con [WASP Saniticer](https://www.owasp.org/index.php/OWASP_Java_HTML_Sanitizer_Project) es suficiente.

* [Cómo filtrar contenido HTML de forma segura con jsoup][blogbitix-48]

Un ataque de XSS también puede producirse en contenidos distintos al HTML como pueden ser documentos JSON o XML en los que también hay que escapar los datos según su contexto para evitar por ejemplo que alguien cambien la estructura del XML o JSON previsto por la aplicación. El XSS es similar al problema de inyección de SQL si al construir las sentencias se insertan en ella datos en vez de usar en el caso de Java la clase [PreparedStatement](javadoc11:java.sql/java/sql/PreparedStatement.html) con parámetros. 

{{< reference >}}
* [OWASP Java Encoder Project](https://www.owasp.org/index.php/OWASP_Java_Encoder_Project)
* [OWASP Java HTML Sanitizer Project](https://www.owasp.org/index.php/OWASP_Java_HTML_Sanitizer_Project)
* [Cross Site Tracing (XST)](https://www.owasp.org/index.php/Cross_Site_Tracing)
* [MDN Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
{{< /reference >}}

{{% /post %}}
