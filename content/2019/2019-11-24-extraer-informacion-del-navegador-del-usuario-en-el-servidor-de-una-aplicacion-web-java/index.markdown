---
pid: 444
type: "post"
title: "Extraer información del navegador del usuario en el servidor de una aplicación web Java"
url: "/2019/11/extraer-informacion-del-navegador-del-usuario-en-el-servidor-de-una-aplicacion-web-java/"
date: 2019-11-24T00:15:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En una aplicación web dependiendo de las características del cliente si es de escritorio, móvil u otro dispositivo y tamaño, lenguaje o [dependiendo de la ubicación mediante su dirección IP][blogbitix-147] puede servirse diferente contenido adaptado a las propiedades del cliente.

La comprobación desde el navegador se realiza con JavaScript, con la propiedad [window.navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID) se obtienen propiedades básicas del agente del usuario como navegador, versión y plataforma. Con la librería JavaScript [Modernizr][modernizr] se obtiene las características que soporta el navegador. Pero el código JavaScript se ejecuta en el cliente y la primera petición de un usuario llega al servidor cuando aún no se ha cargado ninguna página ni código JavaScript, sólo se dispone del agente de usuario, lenguaje preferido y dirección IP con lo que es necesario una librería en el lado de servidor que procese el agente del usuario u otra información que este envíe para actúa en consecuencia.

En la primera petición de un usuario a una aplicación Java con la librería [browscap-java](https://github.com/blueconic/browscap-java) es posible procesar el agente del usuario y conocer su navegador y versión, tipo de dispositivo, plataforma y versión. Con esta información la aplicación es capaz adaptar el contenido al cliente, por ejemplo si se trata de una versión antigua de un navegador al que hay que seguir ofreciendo soporte porque algunos usuarios siguen usándolo y para el que hay que devolver un JavaScript especial por no soportar algunas características de navegadores más modernos.

En este ejemplo se hace uso de la librería _browscap-java_ y se imprime en la salida de la aplicación la información que esta proporciona interpretando la cadena del agente del usuario. Se observa que en mi caso uso [GNU][gnu]/[Linux][linux], [Firefox][firefox] en la versión 70 de la versión de escritorio. Los navegadores envían una cabecera del protocolo HTTP, _User-Agent_, en la que incluyen información y la firma del navegador o agente del usuario. En el servidor para recuperar la cabecera basta con utilizar el método [HttpServletRequest.getHeader()](https://javaee.github.io/javaee-spec/javadocs/javax/servlet/http/HttpServletRequest.html#getHeader-java.lang.String-) o usando Spring MVC con la anotación [@RequestHeader](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestHeader.html).

{{< code file="IndexController.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Accediendo a la dirección del controlador _http\://localhost:8080_ se obtienen los siguientes resultados dependiendo de con que navegador se acceda, en estos ejemplos con Firefox de escritorio, con Chrome de escritorio, y con Firefox de Android.

{{< code file="response-firefox-desktop.txt" language="plaintext" options="" >}}
{{< code file="response-chrome-desktop.txt" language="plaintext" options="" >}}
{{< code file="response-firefox-android.txt" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaUserAgent" command="./gradlew run" %}}

{{< reference >}}
* [MDN User-Agent](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/User-Agent)
* [Firefox user agent string reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox)
* [Browser detection using the user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
* [NavigatorID.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent)
{{< /reference >}}

{{% /post %}}
