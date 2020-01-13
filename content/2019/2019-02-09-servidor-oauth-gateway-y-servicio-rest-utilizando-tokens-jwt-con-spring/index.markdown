---
pid: 382
type: "post"
title: "Servidor OAuth, gateway y servicio REST utilizando tokens JWT con Spring"
url: "/2019/02/servidor-oauth-gateway-y-servicio-rest-utilizando-tokens-jwt-con-spring/"
aliases: ["/2019/02/servidor-oauth-gateway-y-servicio-utilizando-tokens-jwt-con-spring/"]
date: 2019-02-08T20:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "programacion", "software", "spring"]
series: ["spring-cloud"]
---

{{% post %}}

{{< logotype image1="spring.svg" title1="Spring" width1="200" image2="java.svg" >}}

Hace unos días encontré un [articulo del blog técnido de los desarrolladores de Idealista](https://www.idealista.com/labs/blog/spring-framework/autenticando-el-api-de-idealista-hipotecas-con-spring-oauth2-y-zuul/). En él comentaban que tenían una API para realizar simulaciones hipotecarias usando [Spring][spring] como _framework_, [Spring Security OAuth][spring-security-oauth] como forma de autenticación y autorización y JWT como forma de codificar el _token_ que otorga el servidor OAuth y contiene la información necesaria para que el servidor de recursos permita o no el acceso al recurso que aloja.

Ya había oído mencionar JWT pero este artículo me ha permitido conocer su utilidad, y no es poca. Como se menciona en el artículo JWT tiene la ventaja de que que no es necesario persistirlo en una base de datos y contiene toda la información que el servidor de recursos necesita para realizar la autorización ya que es capaz de cargar con información arbitraria que el servicio desee en el momento de la emisión, la autenticación y comprobación de que ha sido emitido por el servidor OAuth la realiza sabiendo que el _token_ está firmado.

Los _tokens_ son una serie de caracteres aparentemente sin sentido al estar _hasheados_ y firmados con una clave compartida entre servidor OAuth y el servidor de recurso o para mayor seguridad mediante clave privada en el servidor OAuth y su clave pública asociada en el servidor de recursos, con la firma el servidor de recursos el capaz de comprobar la autenticidad del _token_ sin necesidad de comunicarse con él. Los _tokens_ de OAuth son más cortos, los _tokens_ JWT con más largos ya que contienen información adicional. Se componen de tres partes separadas por un punto, una cabecera con el algoritmo _hash_ utilizado y tipo de _token_, un documento JSON con datos y una firma de verificación.

El hecho de que los _tokens_ JWT no sea necesario persistirlos en base de datos elimina la necesidad de tener su infraestructura, como desventaja es que no es tan fácil de revocar el acceso a un _token_ JWT y por ello se les concede un tiempo de expiración corto. En el articulo se analizaba su infraestructura y hay varios elementos configurables de diferentes formas, son:

* El servidor OAuth que proporciona los tokens, realiza la autenticación y proporciona las autorizaciones.
* El servidor del recurso al que se le envía el _token_, en base a las autorizaciones otorgadas por el servidor OAuth al token y las autorizaciones necesarias para acceder al recurso concedo o no acceso al recurso.
* En el caso de múltiples servicios con múltiples recursos es conveniente un _gateway_ para que sea el punto de entrada de todos los servicios, de esta forma los clientes solo necesitarán conocer el _gateway_ en vez de los múltiples servicios individuales. El _gateway_ se encarga de hacer de _proxy_ en base a información en la petición como ruta, _host_, parámetros, cabeceras, ... de redirigir la petición al servicio encargado de atenderla y devolver la respuesta. Un ejemplo de _gateway_ es [Zuul][netflix-zuul] como ya he mostrado en el artículo [Proxy para microservicios con Spring Cloud Netflix y Zuul][blogbitix-354].

Puede haber más elementos en la infraestructura y quizá sea el caso de un sistema real como sería un servidor de descubrimiento con [Eureka][netflix-eureka] o un servidor de configuración con [Spring Cloud Config][spring-cloud-config], en la [serie de artículos sobre Spring Cloud][blogbitix-serie-spring-cloud] los muestro. Para este ejemplo obvio estos otros servidores y me centro en los más relacionados con el artículo. Aunque lógicamente son diferentes servicios se puede crear uno que proporcione varios de ellos al mismo tiempo, por ejemplo, un servicio que haga al mismo tiempo de servidor de OAuth y de _gateway_ que es una de las posibles cambios que dejan al final en el artículo de Idealista.

Spring ha creado su propio proyecto de _gateway_ para sustituir a Zuul, [Spring Cloud Gateway][spring-cloud-gateway] y será el que use en este artículo. Soporta [Spring Boot][spring-boot] 2, [Spring Framework][spring-framework] 5, coincidencia por cualquier parámetro de la petición, filtros y transformaciones o predicados, el patrón _circuit breaker_, limitación de peticiones y reescritura de rutas.

Los servicios los mantengo separados ya que al combinarlos pueden surgir problemas de integración al usar diferentes versiones de librerías de Spring aún cuando todos los proyectos son de Spring. Por ejemplo, Spring Cloud Gateway utiliza Spring WebFlux que puede ser diferente del lo que utilice Spring Security OAuth y la integración puede no estar exenta de problemas.

{{< image
    gallery="false"
    image1="logotype:oauth.svg" optionsthumb1="200x200" title1="OAuth"
    image2="logotype:jwt.svg" optionsthumb2="318x168" title2="JWT" >}}

### Servidor OAuth

Empezando por el servidor OAuth y las dependencias que necesita, son _spring-security-oauth2_ y para generar _tokens_ JWT _spring-security-jwt_, el resto son dependencias necesarias de Spring Boot

{{< code file="oauth/build.gradle" language="groovy" options="" >}}

La clase principal de Spring Boot y que inicia la aplicación no tiene nada especial salvo la necesaria anotación _@EnableAuthorizationServer_ para habilitar el servidor OAuth.

{{< code file="oauth/Main.java" language="java" options="" >}}

La parte importante está en la clase de configuración. La clase _JwtAccessTokenConverter_ se encarga de codificar el token, la clase _TokenStore_ de generarlos, _DefaultTokenServices_ contiene referencias a ambos, los métodos heredados _configure()_ configuran diferentes aspectos del servicio como los requisitos para acceder a los _endpoint_ para ver el contenido de un _token_ o los clientes OAuth que reconoce. Para cada cliente se necesita proporcionar el identificativo del cliente, su clave privada o _secret_, identificativo del recurso, que tipos de concesiones, _grants_, formas o flujos de obtener el _token_, que autoridades y ámbitos o _scopes_ se le asigna al token.

{{< code file="oauth/AuthorizationServerConfiguration.java" language="java" options="" >}}

El servidor OAuth de ejemplo se inicia con el comando _./gradlew oauth:run_. Para obtener un _token_ se realiza con las siguientes peticiones. Por defecto, se solicita autenticación _basic_ pero la invocación al método _allowFormAuthenticationForClients()_ hace que los parámetros de las credenciales se puedan indicar por parámetros.

Con el _endpoint_ _/oauth/check\_token_ se decodifica el _token_. En la página de JWT hay una herramienta para decodificar el token y verificar de la firma introduciendo clave de firma en la casilla.

{{< code file="oauth/curl.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:encoded-decoded-jwt.png" optionsthumb1="600x450" title1="Token JWT codificado y decodificado"
    caption="Token JWT codificado y decodificado" >}}

### Servidor Gateway

El servidor _gateway_ en realidad no interviene en la lógica de OAuth porque la autorización se delega en cada servicio que contiene el recurso. Como se indicaba en Idealista estaría bien que el _gateway_ librase de la responsabilidad de autorización a los servicios de los recursos para hacerlos más sencillos, creo que Spring Security en el momento del artículo no está soportado en Spring WebFlux que utiliza el _gateway_.

Lo único necesario par definir el _gateway_ son las dependencias del proyecto, poco más que _spring-cloud-starter-gateway_, y la configuración de enrutado que _matchea_ peticiones según el parámetro _predicates_, reescribe la URL hacia el servicio  según el filtro _RewritePath_ y finalmente redirige la petición a la ubicación del servicio indicada en _uri_. Se inicia con _./gradlew gateway:run_.

{{< code file="gateway/build.gradle" language="groovy" options="" >}}
{{< code file="gateway/application.yml" language="Yaml" options="" >}}

### Servicio, servidor de recurso

Dado que el servicio interpreta los _tokens_ JWT y aplica reglas de seguridad necesita las mismas dependencias que utiliza el servidor OAuth.

{{< code file="service/build.gradle" language="groovy" options="" >}}

El recurso es muy simple, solo devuelve un mensaje.

{{< code file="service/DefaultController.java" language="java" options="" >}}

El servicio comparte configuración similar al servidor de Ouath par el _JwtAccessTokenConverter_, _TokenStore_ y _DefaultTokenServices_. En el método configure se define que el _endpoint_ _/_ requiere el rol _CLIENT_ que se obtiene del token JWT enviado. Hay que utilizar la anotación _@EnableResourceServer_, se inicia con el comando _./gradlew service:run_.

Hay que recalcar que el servicio para verificar el _token_ y comprobar la autorización no necesita comunicarse con el servidor OAuth toda la información que necesita está en el _token_.

{{< code file="service/ResourceServerConfiguration.java" language="java" options="" >}}

Si no se envía el _token_ JWT se produce un error de autenticación con código de error _401 Unauthorized_, si se envía un token correcto y la autoridad requerida del recurso la petición se devuelve el mensaje u el código de estado _200 OK_, si se envía un _token_ JWT con una autoridad que no corresponde con la necesaria para el recurso, en el ejemplo una autoridad _DUMMY_, se devuelve un código de estado _403 Forbbiden_.

{{< code file="service/curl.sh" language="bash" options="" >}}

Los _tokens_ JWT además de firmar se pueden cifrar, en el ejemplo se usa una conexión no segura con el protocolo HTTP usando una conexión segura HTTPS ya se proporcionaría confidencialidad para los _tokens_ y es lo recomendado.

{{% sourcecode git="blog-ejemplos/tree/master/SpringOauth" command="./gradlew oauth:run, ./gradlew gateway:run, ./gradlew service:run" %}}

{{< reference >}}
* [Using JWT with Spring Security OAuth](https://www.baeldung.com/spring-security-oauth-jwt)
* [Secure Spring REST API using OAuth2](http://websystique.com/spring-security/secure-spring-rest-api-using-oauth2/)
* [Spring Boot Security OAuth2 Jwt Auth Example](https://www.devglan.com/spring-security/spring-boot-oauth2-jwt-example)
* [Spring Boot – OAuth Server](https://www.jorgehernandezramirez.com/2017/04/17/spring-boot-oauth-server/)
* [Spring OAuth2 "Full authentication is required to access this resource"](https://stackoverflow.com/questions/23950068/spring-oauth2-full-authentication-is-required-to-access-this-resource)
* [Issue with having multiple WebSecurityConfigurerAdapter in spring-boot](https://stackoverflow.com/questions/52606720/issue-with-having-multiple-websecurityconfigureradapter-in-spring-boot)
* [Spring Security 5: There is no PasswordEncoder mapped for the id "null"](https://stackoverflow.com/questions/49654143/spring-security-5-there-is-no-passwordencoder-mapped-for-the-id-null)
{{< /reference >}}

{{% /post %}}
