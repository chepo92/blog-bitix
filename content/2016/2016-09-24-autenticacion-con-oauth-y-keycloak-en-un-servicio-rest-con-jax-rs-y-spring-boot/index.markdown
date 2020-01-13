---
pid: 180
type: "post"
title: "Autenticación con OAuth y Keycloak en un servicio REST con JAX-RS y Spring Boot"
url: "/2016/09/autenticacion-con-oauth-y-keycloak-en-un-servicio-rest-con-jax-rs-y-spring-boot/"
date: 2016-09-24T12:00:00+02:00
updated: 2016-10-07T09:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:keycloak.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Keycloak es un proveedor de OAuth que podemos usar en nuestras aplicaciones y servicios para proporcionar autenticación, autorización, SSO y también añadir seguridad a los servicios REST que desarrollemos como muestro en este artículo. OAuth tiene varias ventajas sobre usar autenticación _Basic_."
---

{{% post %}}

{{< logotype image1="keycloak.png" title1="Keycloak" width1="200" image2="java.svg" >}}

Una forma de autenticar a los clientes de un servicio REST es usar [autenticación Basic](https://en.wikipedia.org/wiki/Basic_access_authentication) que se basa en añadir una cabecera en la petición en la que se incluye un usuario y contraseña. La autenticación Basic es sencilla pero para que sea segura ha de [usar el protocolo seguro HTTPS][blogbitix-14].

Sin embargo, presenta otros inconvenientes y es que si al servicio van a acceder varios clientes y a uno queremos impedirle el acceso no podremos hacerlo sin cambiar el usuario y contraseña lo que obligará al resto de clientes actualizarse para usar las nuevas credenciales si las comparten, que no siempre es posible sobre todo si esos clientes están fuera de nuestro control. Para solventar el segundo problema tenemos la posibilidad de segurizar el servicio REST con el [protocolo OAuth][oauth].

Teniendo un [servicio web REST implementado con JAX-RS y Spring Boot][blogbitix-178] añadirle seguridad con OAuth mediante el proveedor [Keycloak][keycloak] es lo que muestro en este artículo. En el servicio REST bastará que usemos el [adaptador para Spring Boot de Keycloak](https://keycloak.gitbooks.io/securing-client-applications-guide/content/v/latest/topics/oidc/java/java-adapters.html) y añadamos en Keycloak cierta configuración que consistirá en un _realm_ y el registro de un cliente. Para acceder al servicio REST usaremos el flujo _client\_credentials_ que nos permitirá obtener un _token_ usando las credenciales del cliente.

Iniciado Keycloak con [Docker][docker] y [Docker Compose][docker-compose] accedemos al panel de administración con el navegador, en mi caso en _http\://localhost:9080_ con el usuario _admin_ y contraseña _admin_ según lo indicado en el archivo _docker-compose.yml_.

{{< code file="docker-compose.yml" language="YAML" options="" >}}
{{< code file="docker-compose-up.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:keycloak-login.png" optionsthumb1="300x200" title1="Inicio de sesión de Keycloak" >}}

Creamos un _realm_, en el ejemplo llamado _springbootjaxrs_ y un cliente con id _client_, además crearemos un rol _api_ y se lo asignaremos al cliente.

{{< image
    gallery="true"
    image1="image:keycloak-add-client.png" optionsthumb1="300x200" title1="Registro del cliente"
    image2="image:keycloak-add-role.png" optionsthumb2="300x200" title2="Creación de rol" >}}
{{< image
    gallery="true"
    image1="image:keycloak-service-account-roles.png" optionsthumb1="300x200" title1="Asignación de roles al cliente" >}}

Una vez realizada la configuración en el servidor de OAuth/Keycloak obtendremos la configuración para el adaptador de Keycloak para el servicio REST desde la pestaña _Installation_ que añadiremos en el fichero de configuración de Spring Boot _application.yml_. Además, indicaremos que el cliente solo aceptará _access tokens_ mediante la opción _bearer-only_ de modo que no hará redirecciones para autenticar.

Indicaremos también el rol que deberá poseer el cliente para acceder al servicio REST junto que URLs del servicio estarán autenticadas por OAuth. Añadida la configuración al archivo _application.yml_ el servicio REST es totalmente inconsciente de la autenticación que se realizará con OAuth y Keycloak.

{{< code file="application.yml" language="YAML" options="" >}}
{{< code file="MessageResource.java" language="java" options="" >}}

Iniciado Keycloak y el servicio REST con el comando <code>gradlew run</code> podemos iniciar el proceso de obtención de un _access token_ y llamar al servicio proporcionando el _access token_ obtenido y ver que pasa si no proporcionamos _token_ o uno modificado o inválido. Para obtener el _access token_ podemos emplear _curl_ accediendo al _endpoint_ de Keycloak para obtenerlos.

{{< code file="curl-token.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:keycloak-access-token.png" optionsthumb1="300x200" title1="Obtención de un token" >}}

Obtenido el _access token_ si no lo proporcionamos en la llamada al servicio REST observaremos que la respuesta que obtenemos es un [código de estado HTTP 401][wikipedia-http-status-codes] indicando que se necesitan proporcionar las credenciales que con OAuth es un _token_.

{{< code file="curl-401.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:client-no-token.png" optionsthumb1="300x200" title1="Llamada al servicio REST sin token" >}}

Proporcionando el token mediante una cabecera de la petición el servicio nos devolverá los datos que proporciona. Si el _token_ no es válido obtendremos un error HTTP 401.

{{< code file="curl.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:client-ouath.png" optionsthumb1="300x200" title1="Llamada al servicio REST con token"
    image2="image:client-token-tampered.png" optionsthumb2="300x200" title2="Llamada al servicio REST con token inválido" >}}

Para usar Keycloak en una aplicación Java con Spring Boot deberemos añadir algunas dependencias al proyecto que usando [Gradle][gradle] como herramienta de construcción serían las siguientes.

{{< code file="build.gradle" language="groovy" options="" >}}

Un buen libro sobre OAuth que he leído es [Mastering OAuth 2.0](https://amzn.to/2cUkF9d) que explica detalladamente el protocolo OAuth junto con el resto de formas de obtener un _token_ además del mostrado en este artículo usando las credenciales del cliente.

{{< amazon
    linkids="726dc0d3e4914bc672e6b127da045db2&internal=1"
    asins="1784395404" >}}

En el siguiente artículo mostraré un [cliente del servicio REST autenticado con OAuth en Java][blogbitix-183] que haga las mismas llamadas que con _curl_ pero usando código Java mediante la librería [HttpComponents][http-components].

{{< sourcecode git="blog-ejemplos/tree/master/SpringBootJaxrsOauth" command="./gradle run" >}}

{{< reference >}}
* [Servicio web REST implementado con JAX-RS y Spring Boot][blogbitix-178]
* [Integrar autenticación OAuth con Keycloak, Shiro, Apache Tapestry y Spring Boot"][blogbitix-185]
* [Securing RESTful Web Services with OAuth2](https://blog.pivotal.io/pivotal-cloud-foundry/products/securing-restful-web-services-with-oauth2)
* [Implementing the client credentials grant type](http://docs.apigee.com/api-services/content/oauth-20-client-credentials-grant-type)
* [What are Keycloak's OAuth2 / OpenID Connect endpoints?](https://stackoverflow.com/questions/28658735/what-are-keycloaks-oauth2-openid-connect-endpoints)
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
{{< /reference >}}

{{% /post %}}
