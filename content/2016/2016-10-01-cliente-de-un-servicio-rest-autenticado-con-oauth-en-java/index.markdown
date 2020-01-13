---
pid: 183
type: "post"
title: "Cliente de un servicio REST autenticado con OAuth en Java"
url: "/2016/10/cliente-de-un-servicio-rest-autenticado-con-oauth-en-java/"
aliases: ["/2016/10/cliente-de-un-servicio-rest-autenticado-con-oauth2-en-java/"]
date: 2016-10-01T11:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Teniendo un servicio REST securizado con OAuth2 al invocarlo deberemos realizar el flujo necesario para obtener un _access token_ y posteriormente enviarlo al servicio REST como forma de autenticación y autorización. Usando un cliente programado en el lenguaje Java y usando la librería HttpClient podemos hacer las peticiones HTTP necesarias para la invocación del servicio."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Explicaba como llamar a un servicio REST autenticado con OAuth2 en el artículo [autenticación con OAuth y Keycloak en un servicio REST con JAX-RS y Spring Boot][blogbitix-180]. Para ello usaba la utilidad _curl_ para hacer las peticiones HTTP _get_ y _post_ necesarias tanto para obtener el _access token_ usando el flujo _client\_credentials_ como para una vez obtenido el _access token_ llamar al servicio REST. En una aplicación usaremos un lenguaje de programación para llmar al servicio, en este ejemplo mostraré como llamarlo usando un cliente programado en lenguaje Java que hará las mismas peticiones _get_ y _post_ pero usando la librería [HttComponents][apache-httpcomponents] en vez de _curl_.

Primero añadiremos como dependencia del proyecto la librería HttComponents. Como en las diferentes llamadas el intercambio de datos se realiza mediante el [formato JSON][json] añadiremos otro par dependencias para procesar los datos en este formato, en este caso usando la API de [JSON-P][json-p] y una implementación.

{{< code file="build.gradle" language="groovy" options="" >}}

Este sencillo cliente realiza varias peticiones _get_ y _post_. Una para obtener la configuración de los _endpoints_, el que nos interesa es el de obtener un _access token_, otra petición para obtener el _access token_ y finalmente con el _access token_ invocar al servicio mediante otra petición.

{{< code file="ClientMain.java" language="java" options="" >}}

Iniciado [Keycloak][keycloak] con [Docker][docker], configurado el _realm_ y creado un cliente junto con un rol e iniciado el servicio REST podemos ejecutar el cliente que invoque al servicio. El resultado de las trazas que obtendremos en la terminal será el siguiente.

{{< code file="System.out" language="plaintext" options="" >}}

En las trazas vemos el _endpoint_ para obtener _access token_, el _access token_ obtenido, _refresh token_ y tiempos de expiración de los mismos, finalmente los datos devueltos por el servicio. Como se observa los _access token_ son una cadena opaca bastante larga de caracteres, y es que está cifrada, firmada digitalmente y contiene información como el rol y tiempos de expiración. Enviado el _access token_ al servicio REST el [adaptador de Keycloak para Spring Boot](https://keycloak.gitbooks.io/securing-client-applications-guide/content/v/2.2/topics/oidc/java/java-adapters.html) validará la firma digital del _token_, descifrará la información, validará su tiempo de expiración y se comprobará si tiene el rol necesario para acceder al _endpoint_ del servicio REST. Notar que con la información incluida en el token y el hecho de que está firmado digitalmente no es necesario que el servicio REST se comunique con el proveedor de OAuth para hacer la validación.

El cliente no tiene más salvo que usando la clase [HttpClient](https://hc.apache.org/httpcomponents-client-ga/httpclient/apidocs/org/apache/http/client/HttpClient.html) y haciendo una petición HTTPS con un certificado autofirmado en el servidor deberemos ignorar las comprobaciones de seguridad. Para ello se usan un [SSLConnectionSocketFactory](https://hc.apache.org/httpcomponents-client-ga/httpclient/apidocs/org/apache/http/conn/ssl/SSLConnectionSocketFactory.html) que las ignore.

Un buen libro sobre OAuth que he leído es [Mastering OAuth 2.0](https://amzn.to/2cUkF9d) que explica detalladamente el protocolo OAuth junto con el resto de formas de obtener un _token_ además del mostrado en este artículo usando las credenciales del cliente.

{{< amazon
    linkids="726dc0d3e4914bc672e6b127da045db2&internal=1"
    asins="1784395404" >}}

{{< sourcecode git="blog-ejemplos/tree/master/SpringBootJaxrsOauth" >}}

{{% /post %}}
