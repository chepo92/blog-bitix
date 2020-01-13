---
pid: 424
type: "post"
title: "Administrar secretos y proteger datos sensibles con Vault"
url: "/2019/07/administrar-secretos-y-proteger-datos-sensibles-con-vault/"
date: 2019-07-27T18:30:00+02:00
updated: 2019-07-27T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:vault.svg"
tags: ["planeta-codigo", "programacion", "software"]
series: ["hashicorp"]
summary: "Herramientas de aprovisionamiento como Chef, Puppet y Ansible solucionan el problema de la seguridad de los secretos de forma similar, utilizando una única clave de cifrado. Los datos cifrados están siempre a un secreto (contraseña, clave, ...) de ser descifrados y generalmente no está bien protegidos dado que en un entorno elástico cada servidor necesita disponer de este secreto para descifrar los datos. Adicionalmente el acceso a los datos cifrados no está registrado de modo que si hay una intrusión no está claro que dato ha sido accedido y por quien. Utilizar variables de entorno para proporcionar secretos tampoco es seguro, y en entornos Docker suele usarse."
---

{{% post %}}

{{< logotype image1="vault.svg" title1="Vault" width1="200" image2="hashicorp.svg" title2="HashiCorp" width2="200" >}}

La seguridad es un aspecto muy importante de los sistemas informáticos, no darle la consideración necesaria puede dar lugar a caídas de servicio y robo de datos potencialmente ocasionando importantes pérdidas de dinero, sanciones y pérdida de confianza de los clientes y proveedores de una organización.

La seguridad se mantiene mediante mecanismos de autenticación identifican al solicitante solicitante, de autorización permitiendo realiza únicamente las acciones para las que se tienen permisos y mediante firma y cifrado para impedir la modificación de los datos y el acceso a la información sin las credenciales y autorización requerida. 

La infraestructura informática de los sistemas actuales es cada vez más compleja por el número y tipo de las distintas de piezas que emplean como bases de datos, sistemas de mensajes u otros servicios, también por el aspecto efímero en la tendencia actual de microservicios como por la utilización de entornos en la nube con una infraestructura no confiable al estar fuera del control de una organización y estar compartida con otras organizaciones.

No es seguro utilizar archivos sin cifrar aún utilizando los permisos del sistema de archivos dado que una intrusión en el sistema posibilita el acceso al secreto. Cifrarlos los archivos es el mismo caso de herramientas como [Chef][chef], [Puppet][puppet] y [Ansible][ansible]. Utilizar variables de entorno para proporcionar secretos tampoco es seguro ya que aunque los secretos no están en el sistema de archivos se pueden inspeccionar las variables de entorno de un proceso.

{{< code file="commands.sh" language="bash" options="" >}}

Por otra parte las contraseñas y claves han de rotarse regularmente para limitar en el tiempo el acceso ante el filtrado de las credenciales en un sistema o para denegar el acceso a una persona que en algún momento haya tenido credenciales de acceso como un empleado que ya no pertenece a la compañía.

### Vault

[Vault][vault] es una herramienta para acceder de forma segura a secretos. Un secreto es cualquier cosa a la que se quiera tener severamente controlado como claves de API, contraseñas y certificados. Vault proporciona una interfaz para cualquier secreto a la vez que mantiene un control de acceso y un _log_ de acceso detallado.

* [Introduction to Vault](https://www.vaultproject.io/docs/what-is-vault/index.html)
* [Use Cases](https://www.vaultproject.io/docs/use-cases/index.html)

Las características principales de Vault se engloban en tres aspectos de la seguridad: cifrado, control de acceso y ciclo de vida.

* Almacenamiento seguro de secretos: se pueden almacenar secretos arbitrarios clave/valor. Los secretos son cifrados previamente a ser almacenados en el almacenamiento persistente de modo que obtener acceso al almacenamiento persistente no es suficiente para acceder a los secretos. Vault puede almacenar los secretos en disco, [Consul][consul] y más.
* Secretos dinámicos: puede [generar secretos bajo demanda para bases de datos][blogbitix-428] o algunos sistemas como AWS. Por ejemplo, cuando una aplicación necesita acceso a una base de datos SQL solicita a Vault unas credenciales, Vault genera unas credenciales con los permisos adecuados. Después de crear estos secretos dinámicos también los revoca automáticamente una vez pasado su tiempo de concesión.
* Cifrado de datos: puede cifrar y descifrar datos sin almacenarlos. Esto permite definir parámetros de seguridad y los desarrolladores almacenar los datos cifrados en localizaciones como bases de datos sin tener que diseñar sus propios métodos de cifrado.
* Concesión y renovación: todos los secretos en Vault tienen un tiempo de concesión asociado. Al finalizar la concesión Vault los revoca automáticamente, los clientes pueden solicitar renovar las concesiones mediante las API disponibles de Vault.
* Revocación: integra la funcionalidad de revocación, no solo secretos individuales sino jerarquías de secretos. La revocación asiste en la rotación de las claves así como cerrar el sistema en caso de intrusión.

### Conceptos

Los motores de secretos son uno de los conceptos en el ámbito de Vault. Son componentes que permite almacenar, generar o cifrar datos. Algunos motores de secretos simplemente almacenan y leen datos, otros se conectan a otros servicios y generan credenciales dinámicamente bajo demanda. Otros motores de secretos proporcionan el cifrado como servicio, _tokens_ de un solo uso, certificados y mucho más.

* [Secrets Engines](https://www.vaultproject.io/api/secret/index.html)
* [KV Secrets Engine](https://www.vaultproject.io/docs/secrets/kv/index.html)
* [Databases Secrets Engine](https://www.vaultproject.io/docs/secrets/databases/index.html)
* [RabbitMQ Secrets Engine](https://www.vaultproject.io/docs/secrets/rabbitmq/index.html)
* [PKI Secrets Engine](https://www.vaultproject.io/docs/secrets/pki/index.html)
* [SSH Secrets Engine](https://www.vaultproject.io/docs/secrets/ssh/index.html)

Otro concepto es la [autenticación](https://www.vaultproject.io/docs/auth/index.html). Permiten realizar la autenticación y son responsables de asignar una identidad y un conjunto de _policies_ a un usuario. Por ejemplo, para los desarrolladores el método de autenticación de GitHub es fácil de usar pero para servidores el método _AppRole_ es el recomendado

Los secretos necesitan [almacenamiento](https://www.vaultproject.io/docs/configuration/storage/index.html). Algunos tipos de almacenamiento son mejores para la alta disponibilidad y otros facilitan la copia de seguridad y la restauración. Puede ser en memoria, sistema de archivos, una herramienta como Consul o varias bases de datos entre ellas bases de datos relacionales.

La [auditoria](https://www.vaultproject.io/docs/audit/index.html) permite obtener una trazabilidad de las operaciones que se han realizado, dado que todas las operaciones se realizan mediante una API el _log_ de auditoría es simplemente cada interacción autenticada con Vault, incluidas los errores. Puede ser un archivo o un _socket_.

Todo en Vault está basado en _paths_. Las [_policies_](https://www.vaultproject.io/docs/concepts/policies.html) permiten o deniegan el acceso a ciertos _paths_.  Poseen la siguiente sintaxis, donde las _capabilities_ son las operaciones CRUD permitidas.

{{< code file="policy.hcl" language="plaintext" options="" >}}

### Instalación y un caso de uso

La [instalación de Vault](https://www.vaultproject.io/docs/install/index.html) es muy sencilla ya que es un único binario sin más dependencias. En una distribución [GNU][gnu]/[Linux][linux] estará en los repositorios oficiales. En [Arch Linux][archlinux] se instala con el comando.

{{< code file="install.sh" language="bash" options="" >}}

En el siguiente ejemplo en modo desarrollo de uso de Vault se inicia, se realiza la autenticación con el _token_ _root_ de superusuario y se crea un secreto. Aquí solo se muestra el caso de uso de guardar y recuperar secretos, otros son generar credenciales para conectarse a una base de datos y proporcionar cifrado y descifrado como servicio.

{{< code file="vault.sh" language="bash" options="" >}}
{{< code file="secret.sh" language="bash" options="" >}}

Vault al igual que otras de las herramientas de [HashiCorp][hashicorp] como Consul y [Nomad][nomad] posee una interfaz gráfica accesible mediante el navegador que permite realizar las mismas operaciones que a través de la API o desde la linea de comandos.

{{< image
    gallery="true"
    image1="image:vault-ui-1.png" optionsthumb1="300x200" title1="Interfaz gráfica de Vault"
    image2="image:vault-ui-2.png" optionsthumb2="300x200" title2=""
    caption="Interfaz gráfica de Vault" >}}

Vault a igual que otras de las herramientas de HashiCorp tiene una muy buena documentación en formato de [guía](https://learn.hashicorp.com/vault) y en formato de [documentación](https://www.vaultproject.io/docs/). En una aplicación Java el proyecto [Spring][spring] facilita su uso con [Spring Vault][spring-vault] y [Spring Cloud Vault][spring-cloud-vault].

{{< reference >}}
* [An Intro to Vault](https://www.baeldung.com/vault)
{{< /reference >}}

{{% /post %}}
