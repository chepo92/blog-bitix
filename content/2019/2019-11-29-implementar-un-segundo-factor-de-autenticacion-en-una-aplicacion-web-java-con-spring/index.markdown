---
pid: 445
type: "post"
title: "Implementar un segundo factor de autenticación en una aplicación web Java con Spring"
url: "/2019/11/implementar-un-segundo-factor-de-autenticacion-en-una-aplicacion-web-java-con-spring/"
date: 2019-11-29T18:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:autenticacion-2fa-1.png"
tags: ["java", "planeta-codigo", "programacion", "seguridad", "spring"]
summary: "El segundo factor de autenticación es una medida adicional en la autenticación que proporciona una notable mayor seguridad que utilizar solo un usuario y contraseña. Utilizando Spring y la aplicación para _smatphone_ Google Authenticator se puede implementar en una aplicación Java el segundo factor de autenticación o _2FA_ con códigos temporales o _TOTP_."
---

{{% post %}}

{{< logotype image1="java.svg" image2="spring.svg" title2="Spring" width2="200" >}}

Comúnmente para realizar el proceso de autenticar a un usuario se ha realizado simplemente con el método de usuario y contraseña. Sin embargo, verificar la identidad mediante usuario y contraseña para algunos usuarios no es suficientemente seguro dado que los usuarios pueden elegir contraseñas débiles con pocos caracteres o sin usar una combinación que incluya letras, números y símbolos, pueden elegir contraseñas comunes muy utilizadas fáciles de adivinar con un ataque de diccionario, pueden usar la misma contraseña para varios servicios de modo que si las contraseñas de un servicio son descubiertas cualquier otro servicio que las utilice potencialmente corre un riesgo de seguridad. Usar solo usuario y contraseña no proporciona la suficiente seguridad para ciertos servicios que permiten realizar transacciones que involucra dinero, tratan datos sensibles o son servicios atractivos para ser atacados.

Para que las contraseñas sean seguras las aplicaciones en sus bases de datos [guardar las contraseñas usando _Salted Password Hashing_][blogbitix-75], los usuarios por su parte deben utilizar un generador de contraseñas, utilizar una contraseña distinta para cada servicio y [guardalas en una base de datos cifrada como KeePassXC][blogbitix-196] para recordar cada una de ellas. Las contraseñas son algo que se conoce, cualquier persona que conozca la contraseña puede autenticarse, más recientemente una capa adicional de seguridad es requerir algo que se tiene, el segundo factor de autenticación o 2FA.

La aplicación [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en) para dispositivos móviles [Android][android] permite utilizarse como segundo factor de autenticación, esta aplicación genera códigos con un tiempo corto de duración que son requeridos en un segundo paso de la autenticación después de introducir el usuario y contraseña. Con un segundo factor de autenticación se requiere algo que se sabe, el usuario y contraseña, y algo que se tiene, el dispositivo móvil que genera códigos con lo que aunque la contraseña quede comprometida no se podría realizar la autenticación sin poseer el segundo factor de autenticación.

Dado que los códigos de verificación tienen un tiempo de vida corto, habitualmente de 30 segundos, y acceder al generador del segundo factor de autenticación requiere acceso físico al dispositivo móvil la combinación de que las credenciales queden comprometidas es significativamente más difícil y por tanto la seguridad aumenta al mismo tiempo. Los principales servicios de internet como [Google][google], [Amazon][amazon], [Twitter][twitter] y otros servicios utilizados por millones de usuarios permiten ya utilizar 2FA, un fallo en su seguridad por la cantidad de usuarios e importante información que registran les supodría una muy mala imagen, pérdida de ingresos, costes, reputación, usuarios o dependiendo de la gravedad del fallo y los datos comprometidos multas millonarias.

A través de [Spring Security][spring-security] y la librería [aerogear-otp-java](https://github.com/aerogear/aerogear-otp-java) una aplicación Java puede implementar el segundo factor de autenticación, incluso posibilitar de que el requerimiento de solicitar segundo factor de autenticación sea opcional según la preferencia de un usuario o como forma de que los usuarios progresivamente habiliten el 2FA. El primer paso es proporcionar al usuario una clave secreta a través de un código QR que codifica una clave secreta que se utiliza para generar los códigos de verificación, el usuario debe escanearlo con la aplicación Google Authenticator con la cámara para que genere código de 6 dígitos con una validez de 30 segundos en el momento de autenticarse, este paso se realiza en el momento de registrarse o de activar el 2FA si es opcional. Con Google Authenticator el código en vez con la cámara también se puede introducir mediante el teclado si la aplicación se lo proporciona en forma de texto en vez de como imagen QR. La ventaja del código QR es que es más rápido y cómodo.

El primer paso de la autenticación utilizando 2FA es introducir el usuario y contraseña. El segundo paso es introducir el código del segundo factor de autenticación. Introducidos ambos el usuario es redirigido a la página de inicio.

{{< image
    gallery="true"
    image1="image:autenticacion-2fa-1.png" optionsthumb1="200x150" title1="Autenticación con segundo factor de autenticación"
    image2="image:autenticacion-2fa-2.png" optionsthumb2="200x150" title2="Autenticación con segundo factor de autenticación"
    image3="image:autenticacion-2fa-3.png" optionsthumb3="200x150" title3="Autenticación con segundo factor de autenticación"
    caption="Autenticación con segundo factor de autenticación" >}}

{{< image
    gallery="true"
    image1="image:google-authenticator.png" optionsthumb1="300x200" title1="Aplicación Google Authenticator con varios generadores de códigos temporales"
    caption="Aplicación Google Authenticator con varios generadores de códigos temporales" >}}

Validado el código del 2FA al usuario se le asignan los permisos que le corresponden en el sistema y que le otorgan permisos para realizar acciones, en este caso entrar a la página de inicio.

La implementación en código contiene las clases que representan una cuenta en el sistema, en _InMemoryAccountRepository_ se crean dos usuarios _admin_ y _user_ con sus contraseñas en el ejemplo en texto plano y los roles que tiene asignados que les otorgarán permisos para realizar acciones en la aplicación.

{{< code file="AccountRepository.java" language="java" options="" >}}
{{< code file="InMemoryAccountRepository.java" language="java" options="" >}}
{{< code file="Account.java" language="java" options="" >}}

La configuración de seguridad en Spring Security indica para cada URL que permisos se requieren. Para acceder a la página de contenido _/home_ de la aplicación se requiere el rol _USER_, a la página de inicio de sesión _/login_ se permite acceder a los usuario no autenticados donde introducen sus credenciales de usuario y contraseña, una vez validado el usuario y contraseña el usuario autenticado tiene el rol _PRE\_AUTH\_USER_, dependiendo de si el usuario en su prefrencia usa 2FA o no en el manejador de autenticación exitosa _SecondFactorAuthenticationSuccessHandler_ redirige al usuario a la página _/home_ o la página _/code_ para intorducir el código de verificación del segundo factor autenticación. Al usuario autenticado exitosamente de forma completa se le sustituye el permiso _PRE\_AUTH\_USER_ por los que tenga asignado, en el ejemplo el rol _USER_.

La verificación del código del segundo paso de autenticación se realiza en la clase _CodeController_ con la clase _Totp_ a partir del código enviado y el código secreto con el cual se generó la imagen de código QR.

{{< code file="WebSecurityConfig.java" language="java" options="" >}}
{{< code file="WebMvcConfig.java" language="java" options="" >}}
{{< code file="SecondFactorAuthenticationSuccessHandler.java" language="java" options="" >}}
{{< code file="Utils.java" language="java" options="" >}}
{{< code file="UserDetailsAdapter.java" language="java" options="" >}}
{{< code file="UserDetailsServiceAdapter.java" language="java" options="" >}}

El código QR es una imagen generada a partir del código secreto y una información adicional que al usurio le permite identificar la cuenta, hay _webs_ que permiten [decodificar una imagen QR](https://zxing.org/w/decode.jspx) para analizar que información incorpora, en esta la información de la cuenta _Spring2FA (admin)_ y el secreto _6YFX5TVT76OHHNMS_ utilizado para generar los códigos temporales. En el HTML devuelto se incluye una imagen con la información embebida en el enlace de la imagen, la imagen se genera por un servicio de Google.

{{< image
    gallery="true"
    image1="image:qr-code-decoder.png" optionsthumb1="300x200" title1="Decodificador de imágenes código QR"
    caption="Decodificador de imágenes código QR" >}}

{{< code file="login.xhtml" language="html" options="" >}}

Las dependencias de librerías son las siguientes.

{{< code file="build.gradle" language="groovy" options="" >}}

Este ejemplo está hecho con la infraestructura que proporciona Spring pero el proceso de autenticación es igualmente implementable con cualquier otro _framework_ o librería.

Muchos de los servicios populares en internet implementan 2FA como medida de proteger las cuentas de los usuarios y la información en esos servicios. Hay bancos que como contraseña de acceso solo tienen un número de seis dígitos con el riesgo que representa sus usuarios por la importancia que tiene la banca en línea de los datos que se trata.

{{% sourcecode git="blog-ejemplos/tree/master/Spring2FA" command="./gradlew run" %}}

{{< reference >}}
* [Two Factor Auth with Spring Security](https://www.baeldung.com/spring-security-two-factor-authentication-with-soft-token)
* [Redirect to Different Pages after Login with Spring Security](https://www.baeldung.com/spring_redirect_after_login)
* [Two Step Login Example](https://github.com/altfatterz/two-step-login/)
{{< /reference >}}

{{% /post %}}
