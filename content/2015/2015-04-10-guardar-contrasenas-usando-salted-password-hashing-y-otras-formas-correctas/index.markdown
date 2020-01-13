---
pid: 75
type: "post"
title: "Guardar contraseñas usando «Salted Password Hashing» y otras formas correctas"
url: "/2015/04/guardar-contrasenas-usando-salted-password-hashing-y-otras-formas-correctas/"
date: 2015-04-10T18:55:04+02:00
updated: 2019-10-02T21:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-shiro.png"
tags: ["java", "programacion", "seguridad", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="apache-shiro.png" title1="Apache Shiro" width1="300">}}

Para cada servicio deberíamos emplear una contraseña de una longitud de al menos 8 caracteres que incluya letras en minúscula, mayúscula, números y símbolos, una herramienta que podemos utilizar para generar contraseñas más seguras con los criterios que indiquemos es [Strong Password Generator][strongpasswordgenerator]. Sin embargo, recordar cada una de estas contraseñas es muy difícil de modo que es habitual que utilicemos la misma contraseña para varios o todos los servicios y no empleando todos los criterios anteriores o usar una herramienta con la que [Guardar contraseñas de forma segura con KeePassXC][blogbitix-196]. Por otro lado, los desarrolladores no deberíamos guardar en la base de datos las contraseñas que nos entregan los usuarios en texto plano, para evitar guardalas en texto plano hace un tiempo se utilizaba únicamente una función de _hashing_ unidireccional como MD5 o SHA, de este modo si la base de datos fuese comprometida en teoría no podrían conocer la contraseña original. En este artículo comentaré que aún guardando las contraseñas con una función de _hashing_ no es suficiente para hacerlas seguras y comentaré una implementación con [Apache Shiro][shiro] de una de las ideas propuestas, también con [Spring Security][spring-security] es posible.

### Algo de teoría y algunas explicaciones

Aunque guardemos las contraseñas con MD5 o alguna variante de SHA hoy en día no es suficiente para que en caso de que alguien obtenga los _hashes_ de las contraseñas de la base de datos pueda averiguarlas o dar con una que genere el mismo _hash_, usando estas funciones se pueden encontrar colisiones en un tiempo razonable y por tanto ya no se consideran seguras. Dada la computación actual de los procesadores y las tarjetas gráficas una contraseña débil puede romperse usando un [ataque de fuerza bruta](https://es.wikipedia.org/wiki/Ataque_de_fuerza_bruta) y quizá antes con un [ataque de diccionario](https://es.wikipedia.org/wiki/Ataque_de_diccionario) que pruebe las más comunes. Muchos usuarios no tienen contraseñas largas ni utilizan letras en minúscula, mayúscula, números y símbolos, muchos usuarios utilizan contraseñas sencillas para ser recordadas más fácilmente, y aún _hasheando_ las contraseñas pueden ser averiguadas. También se pueden usar [tablas arcoiris](https://es.wikipedia.org/wiki/Tabla_arco%C3%ADris) o _rainbow tables_ con los _hashes_ precalculados de las contraseñas de un diccionario con lo que el tiempo empleado para romper una puede requerir poco tiempo de computación.

También hay que tener en cuenta que muchos usuarios usan la misma contraseña para múltiples servicios por lo que basta que alguien obtenga la contraseña original de un servicio y podrá acceder a otros más interesantes para alguien con malas intenciones por mucha seguridad que tenga esos otros servicios, este es uno de los motivos de la autenticación en dos pasos (que emplea algo que sé, la contraseña, y algo que tengo, como el móvil) y la recomendación de usar una contraseña diferente para cada servicio. Las contraseñas por si solas tienen la seguridad más baja de los diferentes servicios donde se usen.

Con _Salted Password Hashing_ el uso de _rainbow tables_ que aceleren el ataque no serían posibles por la entropía añadida por los _salt_. Aún así conociendo el _salt_ y la función de _hash_ empleada seguiría siendo posible un ataque de fuerza bruta y de diccionario. Con _Salted Password Hashing_ se usa en la función de _hash_ y un dato variable denominado _salt_ que añade suficiente entropía y es diferente para cada contraseña, en la base de datos se guarda el resultado de la función de _hash_ junto con el _salt_, esto es, el resultado de SHA-512(contraseña + _salt_) y también el _salt_.

{{< image
    gallery="false"
    image1="logotype:java.svg" optionsthumb1="127x218" title1="Java" >}}

### Ejemplo de _Salted Password Hashing_ usando Apache Shiro

Antes de comentar alguna opción más que dificulte los ataques de fuerza bruta o de diccionario veamos como implementar _Salted Password Hashing_ empleando Apache Shiro como librería de autenticación y autorización para los usuarios. El ejemplo será simple sin guardar los datos en una base de datos pero suficiente para mostrar que se debe añadir al proyecto para que Shiro compruebe las contraseñas usando una función de _hash_ y un _salt_. Partiré de un ejemplo que hice para el [libro PlugIn Tapestry][blogbitix-12] sobre el desarrollo de aplicaciones web con el _framework_ [Apache Tapestry][tapestry]. Básicamente deberemos crear un nuevo _Realm_ que devuelva los datos del usuario, el _hash_ y el _salt_. Una implementación suficiente para el ejemplo sería la siguiente, la parte importante está en el método _doGetAuthenticationInfo_, las clases _SimpleAuthenticationInfo_ y _HashedCredentialsMatcher_ y en la inicialización _static_ de la clase:

{{< code file="Realm.java" language="java" options="" >}}

Las contraseñas _hasheadas_ tendrán la siguiente forma, podemos guardarlas codificadas en formato hexadecimal o en formato Base64:

{{< code file="hashed-password.txt" language="plaintext" options="" >}}

En el ejemplo tratándose de una aplicación web usando Apache Tapestry se debe modificar la configuración para que se utilice el nuevo _Realm_ el antiguo guardaba las contraseñas en texto plano (_shiro-users.properties_).

{{< code file="AppModule.java" language="java" options="" >}}

El cambio de _Realm_ para el usuario no supone ninguna modificación y podrá seguir autenticandose con su misma contraseña. En el ejemplo con _root_ como usuario y _password_ como contraseña.

{{< image
    gallery="true"
    image1="image:formulario-inicio-sesion.png" optionsthumb1="300x200" title1="Formulario de inicio de sesión" >}}

Este es todo el código que necesitamos para la implementación de contraseñas codificadas con una función de _hashing_, en este caso SHA-512, y un _salt_, no es mucho y además es bastante simple la implementación con Shiro y en este caso en una aplicación usando el _framework_ Apache Tapestry. Estas pocas líneas de código pueden aumentar notablemente la seguridad de las contraseñas que guardamos en la base de datos. En el caso de que la base de datos se vea comprometida será más difícil para alguien con malas intenciones obtener las contraseñas originales.

El siguiente ejemplo de [_federatedaccounts_](https://github.com/tynamo/tynamo-federatedaccounts/tree/master/tynamo-federatedaccounts-test/src/test/java/org/tynamo/security/federatedaccounts/testapp/services) puede verse como usar está técnica de _hash_ con _salt_ usando una base de datos. Básicamente es lo mismo pero accediendo a base de datos para obtener el _hash_ de la contraseña y el _salt_ con una entidad JPA.

### Otras opciones que añaden más seguridad

Aún así como comento este ejemplo de _Salted Password Hashing_ aunque dificulta un ataque aún es viable usar fuerza bruta o un diccionario. En el artículo [Password Security Right Way](https://stormpath.com/blog/password-security-right-way/) comentan tres ideas más. Una es usar como función de _hash_ [Bcrypt](http://bcrypt.sourceforge.net/) no porque sea más segura que SHA-512 sino porque es más lenta y esto puede hacer inviable la fuerza bruta o de diccionario, hay [planes de proporcionar Bcrypt en Apache Shiro](https://issues.apache.org/jira/browse/SHIRO-290) en futuras versiones. En el ejemplo como alternativa a bcrypt se usan varios millones de iteraciones de aplicación de la función para añadir tiempo de cálculo al _hash_, este tiempo adicional no es significativo en el cálculo de un _hash_ pero en un ataque de fuerza bruta puede aumentarlo de forma tan significativa que sea inviable. La segunda idea interesante es además de _hashear_ la clave es cifrarla de modo que aún habiendo sido comprometida la base de datos se necesite la clave privada de cifrado que también debería ser comprometida para producir el ataque. La tercera es partir el _hash_ y distribuirlo entre varios sistemas de modo que sea necesario romperlos todos para obtener en _hash_ original, lo que dificulta aún más un ataque.

Para implementar la segunda opción deberemos proporcionar implementaciones propias de [CredentialsMatcher](https://shiro.apache.org/static/1.2.3/apidocs/org/apache/shiro/authc/credential/CredentialsMatcher.html) y de [SimpleHash](https://shiro.apache.org/static/1.2.3/apidocs/org/apache/shiro/crypto/hash/SimpleHash.html), quizá esto sea tema para otro artículo.

### Código fuente del ejemplo

El [código fuente completo del ejemplo][ejemplo-plugin-tapestry] está alojado en un repositorio de GitHub, es completamente funcional y puedes probarlo en tu equipo. Una vez descargado el siguiente comando e introduciendo en el navegador _http\://localhost:8080/PlugInTapestry_, en la página que se muestra hay un botón para iniciar sesión:

{{< code file="gradlew.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:iniciar-sesion.png" optionsthumb1="300x200" title1="Botón de inicio de sesión" >}}

### Nota final

En este artículo recomiendo leer los interesantes enlaces del apartado de referencia del final, de ellos los siguientes dos son bastante completos [Password Security the Right Way](https://stormpath.com/blog/password-security-right-way/) y [The RIGHT Way: How to Hash Properly](https://crackstation.net/hashing-security.htm) aunque todos merecen el tiempo dedicado a una lectura detenida. Para terminar mucho de esto es fútil si se permiten contraseñas sencillas por lo que exigir contraseñas con cierta fortaleza de la forma comentada al principio también es necesario si la seguridad de la aplicación es un requisito importante.

{{< reference >}}
* [Password Security the Right Way](https://stormpath.com/blog/password-security-right-way/)
* [How To Safely Store A Password](http://codahale.com/how-to-safely-store-a-password/)
* [Password Security with Stormpath](https://stormpath.com/product/password_security/)
* [Strong Password Hashing With Apache Shiro](https://stormpath.com/blog/strong-password-hashing-apache-shiro/)
* [The RIGHT Way: How to Hash Properly](https://crackstation.net/hashing-security.htm#properhashing)
* [Apache Shiro, Hashing and Corresponding Matchers](http://shiro.apache.org/realm.html#Realm-HashingandCorrespondingMatchers)
* [Apache Shiro, Hashing Credentials](http://shiro.apache.org/realm.html#Realm-HashingCredentials)
http://tynamo.org/tapestry-security+guide<br>
* [Strong Password Generator](http://strongpasswordgenerator.com/)
* [Encriptar y guardar contraseñas en base de datos](http://www.arumeinformatica.es/blog/encriptar-y-guardar-contrasenas-en-base-de-datos/)
* [Seguridad en el almacenamiento de Passwords/Contraseñas](http://www.michael-pratt.com/blog/8/Seguridad-en-el-almacenamiento-de-PasswordsContrasenas/)
* [Usuarios con contraseñas repetidas: ciberdelincuentes felices](http://www.osi.es/ca/node/4522)
* [Un HASH MD5 en la password no sustituye a SSL](http://www.elladodelmal.com/2015/03/un-hash-md5-en-la-password-no-susituye.html)
* [Ataque de fuerza bruta](https://es.wikipedia.org/wiki/Ataque_de_fuerza_bruta)
* [Ataque de diccionario](https://es.wikipedia.org/wiki/Ataque_de_diccionario)
* [Tablas arcoiris o _rainbow tables_](https://es.wikipedia.org/wiki/Tabla_arco%C3%ADris)
{{< /reference >}}

{{% /post %}}
