---
pid: 428
type: "post"
title: "Generar credenciales de conexión a base de datos bajo demanda con Vault"
url: "/2019/08/generar-credenciales-de-conexion-a-base-de-datos-bajo-demanda-con-vault/"
date: 2019-08-15T09:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:vault.svg"
tags: ["programacion", "planeta-codigo", "software"]
series: ["hashicorp"]
summary: "Una de las funcionalidades proporcionada por Vault es generar credenciales dinámicas para la conexión a bases de datos. Generar las credenciales de forma dinámica proporciona varios beneficios: no hay unas credenciales que usen las aplicaciones que tengan un tiempo de vida indefinido, las aplicaciones no necesitan guardar en su configuración las credenciales, las credenciales se rotan de forma automática y los permisos para obtenerlas se pueden revocar de forma centralizada con Vault para cuales quiera bases de datos que se utilicen. Soporta las bases de datos más populares entre ellas postgres."
---

{{% post %}}

{{< logotype image1="vault.svg" title1="Vault" width1="200" image2="postgresql.svg" >}}

Las base de datos para proteger los datos realizan autenticación del usuario que se conecta. Normalmente utilizando un usuario y contraseña, una vez autenticado el usuario mediante permisos se realiza la autorización de las operaciones que puede realizar, a que bases de datos se puede conectar, que tablas puede acceder y que operaciones puede realizar.

Este modelo de autenticación tiene algunos inconvenientes. Uno de los inconvenientes es que los usuarios y contraseñas para mayor seguridad han de cambiarse con cierta frecuencia para evitar que si las credenciales quedan comprometidas no puedan utilizarse indefinidamente. Otro problema es que cada aplicación ha de conocer las credenciales de la base de datos, esto hace que haya múltiples posibilidades de que las credenciales queden comprometidas. Por otro lado el uso de las credenciales no queda registrado de forma centralizada que es necesario para saber ante una brecha de seguridad qué datos han sido accedidos y por quien.

La herramienta [Vault][vault] de [HashiCorp][hashicorp] da solución a estos problemas generando credenciales de acceso a las bases de datos de forma dinámica, bajo demanda y con un tiempo de concesión limitado. Las credenciales tiene un tiempo de vida limitado si no se renueva su concesión y la generación de las credenciales queda registrado. La forma que tiene Vault de generar credenciales de forma dinámica en una base de datos relacional como [postgres][postgresql] es conectarse a la base de datos con un usuario con permisos para generarlas y ejecutar una sentencia SQL que crea las credenciales.

Para permitir a Vault generar credenciales de conexión hay que activar el _backend_ de bases de datos, configurarlo con la sentencia SQL que se utilizará para generar las credenciales y crear el rol de Vault que genera las credenciales cuando se le solicite. En este ejemplo se muestra para la base de datos postgres pero Vault también soporta otras bases de datos como [MySQL][mysql]. En el ejemplo la base de datos postgres se ejecuta en un contenedor de [Docker][docker] en el que se asignan el usuario y contraseña del usuario _root_ que utiliza Vault para generar las credenciales de forma dinámica.

Con las siguientes comandos se inicia [Consul][consul] y Vault. 

{{< code file="consul.sh" language="bash" options="" >}}
{{< code file="vault.sh" language="bash" options="" >}}
{{< code file="vault.hcl" language="plaintext" options="" >}}

La base de datos se inicia en un contenedor de Docker, se crea una base de datos y una tabla.

{{< code file="postgres.sh" language="bash" options="" >}}

En Vault hay que crear la configuración para conectarse a la base de datos y un rol que contiene la configuración para generar las credenciales y permitir obtenerlas, básicamente es un sentencia SQL con el nombre del usuario y contraseña, los permisos que se le asignan y el tiempo de concesión.

{{< code file="vault-database.sh" language="bash" options="" >}}
{{< code file="vault-role.sh" language="bash" options="" >}}

Las credenciales se generan en el momento de leer una propiedad de Vault.

{{< code file="vault-credentials.sh" language="bash" options="" >}}

En postgres la conexión desde la máquina local se permiten sin necesidad de credenciales, para simular realizar la conexión desde otra máquina hay que iniciar otro contenedor. En la conexión se utilizan las credenciales que ha proporcionado Vault. Dado que se realiza una operación de red hay que desactivar el _firewall_ del sistema o permitir la conexión al puerto de la base de datos que en postgres es el 5432 si fuera necesario. Listando los usuarios de la base de datos con el comando _\du_ se muestra el creado por Vault y si tiempo de validez.

{{< code file="postgres-connect.sh" language="bash" options="" >}}

Si el usuario y contraseña no es correcto no se permite la conexión a la base de datos.

{{< code file="postgres-connect-fail.sh" language="bash" options="" >}}

En las aplicaciones Java que utilizan [Spring][spring] el proyecto [Spring Cloud Vault][spring-cloud-vault] proporciona las utilidades para simplificar en gran medida la obtención de las credenciales a la base de datos utilizando Vault.

Esto permite que únicamente Vault conozca la cuenta _root_ de la base de datos o una con suficientes permisos para crear credenciales, las aplicaciones no almacenan en su configuración las credenciales para conectarse la base de datos solo las de Vault que le permiten obtener unas credenciales para la base de datos con un tiempo de vida limitado y que pueden revocarse desde Vault en caso de un problema de seguridad para cuales quiera bases de datos que se utilicen.

{{< reference >}}
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
* [Introducción a la base de datos relacional PostgreSQL][blogbitix-236]
{{< /reference >}}

{{% /post %}}
