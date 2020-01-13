---
pid: 185
type: "post"
title: "Integrar autenticación OAuth con Keycloak, Shiro, Apache Tapestry y Spring Boot"
url: "/2016/10/integrar-autenticacion-oauth-con-keycloak-shiro-apache-tapestry-y-spring-boot/"
date: 2016-10-07T10:00:00+02:00
updated: 2016-10-08T00:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:keycloak.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "OAuth es un protocolo usado para permitir a una aplicación acceder a los recursos de un usuario sin que este proporcione a la aplicación cliente sus credenciales y manteniendo el control de revocar los permisos concedidos. Es ampliamente usado por los servicios de redes sociales de las empresas más conocidas, también lo podemos usar en nuestras aplicaciones. En el ejemplo usaré Keycloak y una aplicación Java con Spring Boot, Apache Shiro y Apache Tapestry."
---

{{% post %}}

{{< logotype image1="keycloak.png" title1="Keycloak" width1="200" image2="java.svg" >}}

El protocolo [OAuth][oauth] permite a una aplicación cliente acceder a los recursos de un usuario almacenados en otra aplicación sin que el usuario proporcione a la aplicación cliente sus credenciales, además el usuario tiene la capacidad de revocar en caulquier momento los permisos concedidos a la aplicación cliente. El protocolo OAuth es ampliamente usado por empresas como [Google][google], [Facebook][facebook], [Twitter][twitter] en sus aplicaciones y servicios. También aplicando una arquitectura de microservicios, al dividir una aplicación en varios módulos o simplemente varias aplicaciones independientes pero que son usadas al mismo tiempo por el mismo usuario para evitar que el usuario se autentique en cada aplicación individualmente y que cada aplicación implemente la funcionalidad de autenticación podemos centralizarla usando OAuth a modo de autenticación única o [<abbr title="Single Sign-On">SSO</abbr>][sso]. Usando [Keycloak][keycloak] como servidor de OAuth podemos integrarlo en una aplicación Java que use [Apache Shiro][shiro] para la autorización, [Spring Boot][spring-boot] para iniciar la aplicación y [Apache Tapestry][tapestry] como _framework_ web.

En el protocolo OAuth se diferencia las aplicaciones cliente que son capaces de mantener seguras sus credenciales como es el caso de una aplicación web ejecutada en el servidor o las aplicaciones que no son capaces de mantener sus credenciales seguras como es el caso de una aplicación cliente ejecutada en el navegador o en algunos casos nativa en el móvil. Independientemente de la aplicación cliente o de los [varios flujos de autenticación](https://tools.ietf.org/html/rfc6749#page-8) el acceso a los recursos del usuario se hace mediante la obtención de un _token_ que es una cadena de caracteres opaca de cierta longitud pero que descifrada contiene información del usuario autenticado también está firmada digitalmente por el servidor de OAuth para evitar alteraciones. El protocolo define varios flujos para obtener un _token_, obtenido el _token_ con cualquiera de ellos el acceso a los recursos es indiferente del flujo que haya sido empleado.

En una aplicación segura con el _grant_ de tipo _authorization code_ los pasos que se siguen son los siguientes:

* El servidor redirige al usuario al servidor de OAuth cuando intenta acceder a una URL protegida.
* El usuario introduce sus credenciales en una página de inicio de sesión proporcionada por el servidor OAuth, normalmente un usuario y contraseña.
* El servidor OAuth envía al navegador una redirección hacia la aplicación proporcionado un código de autorización en la URL que puede intercambiarse por un _token_.
* El navegador con la redirección envía el código de autorización al servidor, el servidor obtiene de la URL, obtiene el código de autorización y lo usa para intercambiarlo por un _token_ del servidor OAuth proporcionado además las credenciales del cliente.
* Obtenido el _token_ con los permisos adecuados la aplicación ya puede permitir acceso o acceder a los recursos.

Para obtener el _token_ el servidor mantiene seguras sus credenciales como cliente OAuth. Nótese también que con el _token_ el servidor (cliente OAuth) no necesita comunicarse con el servidor OAuth para validar el _token_ ya que está firmado digitalmente, cifrado y tiene concecido un periodo de validadez.

Un cliente se considera inseguro si la aplicación cliente no puede mantener seguras sus credenciales, si las credenciales de la aplicación están en el navegador o en una aplicación nativa del móvil se considera que las credenciales podrían obtenerse. En una aplicación web en un servidor las credenciales de la aplicación se mantienen seguras en el servidor.

El siguiente ejemplo muestra como autenticar con Keycloak como proveedor de OAuth una aplicación Java que usa Shiro para la autorización, Spring Boot y el _framework_ web Apache Tapestry. OAuth y Keycloak también puede usarse para [securizar con OAuth un servicio REST con JAX-RS][blogbitix-180] y crear un [cliente Java para acceder al servicio REST securizado con OAuth][blogbitix-183] emplenado el flujo _client credentials_. Lo mostrado en este artículo solo es una pequeña parte de las opciones y posibilidades que ofrece Keycloak, en las capturas de pantalla mostradas hay muchas pestañas, opciones y campos con funcionalidades adicionales.

Iniciar el servidor OAuth de Keycloak usando [Docker][docker] es muy sencillo con el siguiente comando y archivo de [Docker Compose][docker-compose], en el primer acceso se nos solicitará una clave y contraseña de administración:

{{< code file="docker-compose.yml" language="YAML" options="" >}}
{{< code file="docker-compose.sh" language="bash" options="" >}}

Para el ejemplo crearé un nuevo _realm_ que contendrá los usuarios y en el que registraremos la aplicación cliente.

{{< image
    gallery="true"
    image1="image:keycloak-realm.png" optionsthumb1="300x200" title1="Keycloak realm"
    image2="image:keycloak-client.png" optionsthumb2="300x200" title2="Keycloak client" >}}
{{< image
    gallery="true"
    image1="image:keycloak-client-roles.png" optionsthumb1="300x200" title1="Keycloak client roles"
    image2="image:keycloak-roles.png" optionsthumb2="300x200" title2="Keycloak roles" >}}
{{< image
    gallery="true"
    image1="image:keycloak-users.png" optionsthumb1="300x200" title1="Keycloak users"
    image2="image:keycloak-users-role-mappings.png" optionsthumb2="300x200" title2="Keycloak users role mappings" >}}

Usando uno de los [adaptadores proporcionados por Keycloak](https://keycloak.gitbooks.io/securing-client-applications-guide/content/v/2.2/topics/overview/supported-platforms.html) para la integración en servidores y aplicaciones su uso no es complicado, en este caso usaré el adaptador para Spring Boot. Usándolo básicamente deberemos proporcionar en la configuración las credenciales de la aplicación cliente que hemos registrado previamente en Keycloak. Además indicaremos que URLs de la aplicación requiere autenticación y que roles han de poseer los usuarios autenticados. Al acceder a estas URLs el adaptador de Keycloak redirigirá al servidor para que el usuario se autentique, una vez autenticado se redirigirá a la aplicación de nuevo.

{{< code file="application.yml" language="YAML" options="" >}}

Autenticado el usuario podemos obtener la instancia de [AccessToken](https://www.keycloak.org/docs/javadocs/org/keycloak/representations/AccessToken.html) que representa el _token_ de OAuth, para la autorización podemos usar Apache Shiro y para ellos deberemos implementar un Realm de tipo [AuthorizingRealm](https://shiro.apache.org/static/1.3.2/apidocs/org/apache/shiro/realm/AuthorizingRealm.html). Tiene dos métodos que deberemos implementar [doGetAuthenticationInfo](https://shiro.apache.org/static/1.3.2/apidocs/org/apache/shiro/realm/AuthenticatingRealm.html#doGetAuthenticationInfo-org.apache.shiro.authc.AuthenticationToken-) y [doGetAuthorizationInfo](https://shiro.apache.org/static/1.3.2/apidocs/org/apache/shiro/realm/AuthorizingRealm.html#doGetAuthorizationInfo-org.apache.shiro.subject.PrincipalCollection-), el primero lo usaremos para autenticar al usuario que en este caso teniendo el _AccessToken_ ya estará autenticado con Keycloak y el segundo método nos permitirá obtener los roles y permisos asociados al usuario que podríamos obtenerlos de una base de datos relacional, en el ejemplo los roles también se obtienen del token. Con un filtro realizaremos el inicio de sesión de forma programática del usuario representado por el _AccessToken_ cuando esté presente en la petición.

{{< code file="KeycloakFilter.java" language="java" options="" >}}
{{< code file="AppRealm.java" language="java" options="" >}}

Con Apache Tapestry el filtro se registra en el módulo de la aplicación y con Shiro podemos realizar la autorización necesaria en las páginas u acciones de la aplicación usando anotaciones. En este caso una página pública que no requiere estar autenticado, una página accesible por un usuario autenticado y con rol _user_ y finalmente una página de administración que requiere rol _admin_.

{{< code file="Index.java" language="java" options="" >}}
{{< code file="User.java" language="java" options="" >}}
{{< code file="Admin.java" language="java" options="" >}}
{{< code file="Index.tml" language="html" options="" >}}
{{< code file="User.tml" language="html" options="" >}}
{{< code file="Admin.tml" language="html" options="" >}}

Como la página de inicio no requiere autenticación es accesible por cualquier usuario. Al navegar a la página de usuario o administrador se iniciará el proceso de autenticación primeramente redirigiéndonos al servidor Keycloak para que introduzcamos las credenciales.

{{< image
    gallery="true"
    image1="image:tapestry-index.png" optionsthumb1="300x200" title1="Index"
    image2="image:tapestry-keycloak-login.png" optionsthumb2="300x200" title2="Login" >}}
{{< image
    gallery="true"
    image1="image:tapestry-user.png" optionsthumb1="300x200" title1="User" >}}

Si intentamos acceder a la página de usuario o administrador sin estar autenticados se nos mostrará la página de error 403 y al acceder a la página de administración con un usuario sin rol _admin_ se nos mostrará la página de error 401.

{{< image
    gallery="true"
    image1="image:tapestry-error403.png" optionsthumb1="300x200" title1="Error 403" >}}

Un buen libro sobre OAuth que he leído es [Mastering OAuth 2.0](https://amzn.to/2cUkF9d) que explica detalladamente el protocolo OAuth junto con el resto de formas de obtener un _token_ además del mostrado en este artículo usando las credenciales del cliente.

{{< amazon
    linkids="726dc0d3e4914bc672e6b127da045db2&internal=1"
    asins="1784395404" >}}

Este artículo solo es introductorio a las posibilidades de OAuth y Keycloak, entre otras posibilidades que ofrece Keycloak creo que está permitir registrarse a los usuarios o personalizar los estilos y páginas de autenticación.

{{< sourcecode git="blog-ejemplos/tree/master/Keycloak" command="./gradle run" >}}

{{< plugintapestry >}}

{{< reference >}}
* [OAuth Getting Started](https://oauth.net/getting-started/)
* [OAuth Documentation](https://oauth.net/2/)
* [Keycloak Basics Tutorial Part 1](https://www.youtube.com/watch?v=z-sUzl9eG6M)
* [Keycloak Basics Tutorial Part 2](https://www.youtube.com/watch?v=CXDrGJoCVhc)
* [Keycloak Demo Part 1](https://www.youtube.com/watch?v=B-qIkB9lsLs)
* [Keycloak Demo Part 2](https://www.youtube.com/watch?v=QgWgUg5F_JQ)
{{< /reference >}}

{{% /post %}}
