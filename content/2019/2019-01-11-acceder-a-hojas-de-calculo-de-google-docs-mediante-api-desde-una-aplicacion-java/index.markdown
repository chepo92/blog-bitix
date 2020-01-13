---
pid: 372
type: "post"
title: "Acceder a hojas de cálculo de Google Docs mediante API desde una aplicación Java"
url: "/2019/01/acceder-a-hojas-de-calculo-de-google-docs-mediante-api-desde-una-aplicacion-java/"
date: 2019-01-12T18:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="google.svg" title2="Google" width2="350" >}}

[Google ofrece numerosos productos de desarrollo](https://developers.google.com/products/develop/) que permiten automatizar tareas e realizar integración con servicios, aplicaciones y documentos de Google creando un programa con un lenguaje de programacion. [Las API que ofrece Google](https://developers.google.com/api-client-library/java/apis/) desde [Drive][google-drive], [Sheets][google-sheets], [Sides][google-slides], [GMail][google-gmail], [Calendar][google-calendar], [Contacts][google-contacts], [Street View][google-streetview], [AdSense][google-adsense], [Analytics][google-analytics], [Youtube][youtube],  [Speech][google-speech] y muchos más.

* [Google API Client Libraries](https://developers.google.com/api-client-library/)
* [Google API Client Libraries, Java](https://developers.google.com/api-client-library/java/)

Para acceder a los servicios mediante APIs hay que obtener unas credenciales. Un ejemplo es el siguiente usando un API _key_ para acceder a una hoja de cálculo compartida para cualquier usuario que tenga el enlace o identificativo del documento en Google Drive. Cada servicio de Google ofrece una API distinta según su contexto y datos que maneja.

{{< code file="Main-1.java" language="java" options="" >}}

Las hojas de cálculo se utilizan para contener información, son fácilmente editables por los usuarios y se convierten casi en una forma de base de datos. Con [las APIs que ofrece Google para Spreadsheets](https://developers.google.com/sheets/api/) esta información es utilizable en una aplicación, un buen caso de uso es aquel en el que ciertos datos o parámetros potencialmente cambian cada cierto tiempo o según reglas de negocio. Por ejemplo, se puede crear una hoja de cálculo con los precios, descripciones, existencias, disponibilidad o gastos de envío de los productos e importar esta información en la base de datos de una aplicación usando una API de Google, en vez de crear una aplicación _backoffice_ de edición a medida para editar esa información, la aplicación consistiría en procesar el documento e insertar su información en la base de datos.

Como contrapartida de estas integraciones hay que tener en cuenta que una aplicación se hace dependiente del servicio los servicios de Google que utilice, hay que evaluar si esta dependencia es deseable.

{{< youtube video="0rpgVE_nrIk" >}}

Otro posible aplicación es utilizar documentos de texto en Google Drive como plantillas de correos electrónicos, se permite una edición sencilla y posteriormente se importan en la aplicación para que los utilice. A un documento de Google Drive se accede mediante esta petición HTTP GET. Las hojas de cálculo tamibén están disponibles mediante una interfaz REST sin embargo usando las APIs que ofrece Google para cada lenguaje es más cómodo que tratar con los datos en crudo en formato JSON.

{{< code file="curl-1.sh" language="bash" options="" >}}
{{< code file="curl-2.sh" language="bash" options="" >}}

Para las hojas de cálculo hay dos formas de autorización para una aplicación. Mediante una API _key_ con permisos de utilización de la API permite acceder a cualquier documento público, compartido de forma pública o para los usuarios que tengan el enlace o identificativo del documento. La otra más segura es creando una cuenta de servicio de forma que el documento se comparta únicamente con esa cuenta de servicio como si de cualquier otro usuario se tratase en vez de hacerlo público o para cualquiera que tenga el enlace.

{{< code file="Main-2.java" language="java" options="" >}}

Laa API _key_ se crean en la página de [Credenciales](https://console.developers.google.com/apis/credentials) para lo que previamente hay que crer un proyecto. Para leer el documento hay que compartirlo al menos para cualquiera que tenga acceso al enlace, al compartirlo se especifica si se hace en modo solo lectura o con permisos de ecritura.

{{< image
    gallery="true"
    image1="image:google-credentials.png" optionsthumb1="300x200" title1="Google Credentials"
    image2="image:google-api-key.png" optionsthumb2="300x200" title2="Google API Key"
    image3="image:google-document-share.png" optionsthumb3="300x200" title3="Compartir documento en Google Drive"
    caption="Google Credentials, API Key y compartir documento" >}}

El enlace al compartir el documento o al editarlo contiene el identificativo de documento. Con la API _key_ o cuenta de servicio, el identificativo del documento y el documento compartido al menos para cualquiera que tenga el enlace la información del documento está accesible para una aplicación mediante una API REST o de forma programática con una implementación de la API con Java, este programa Java imprime el contenido de las celdas de la hoja de cálculo en la terminal. Se necesita una expresión que identifique la hoja y el contenido de las celdas de las que se quieren datos con un [rango en notación A1](https://developers.google.com/sheets/api/guides/concepts#a1_notation).

{{< image
    gallery="true"
    image1="image:google-spreadsheet.png" optionsthumb1="300x200" title1="Hoja de cálculo de Google"
    image2="image:google-document.png" optionsthumb2="300x200" title2="Documento de Google"
    caption="Hoja de cálculo y documento de Google" >}}

{{< code file="Main-3.java" language="java" options="" >}}
{{< code file="gradlew-run.sh" language="Bash" options="hl_lines=7-8" >}}

El método de API _key_ obliga a hacer público el documento lo que no es deseable desde el punto de vista de seguridad aunque es un poco más simple que crear una cuenta de servicio. Para no hacer público el documento pero permitir acceder a una aplicación hay que crear una cuenta de servicio en la página [Cuentas de servicio](https://console.developers.google.com/iam-admin/serviceaccounts) seleccionando o creando un proyecto.

{{< image
    gallery="true"
    image1="image:google-service-account.png" optionsthumb1="300x200" title1="Cuenta de servicio de Google"
    caption="Cuenta de servicio de Google" >}}

Al crear una cuenta de servicio y una clave se genera un archivo en formato JSON con las credenciales que hay que guardar y utilizar en una aplicación para acceder a los documentos compartidos con esta cuenta de servicio.

{{< code file="blogbitix-119471bc8ebf.json" language="plaintext" options="" >}}

En vez de compartir el documento con cualquiera que tenga en enlace, con una cuenta de servicio el documento se puede compartir únicamente con esa cuenta de servicio, la cuenta de servicio posee un correo electrónico que la identifica, el documento se puede compartir únicamente con esta cuenta de servicio como si de cualquier otro usuario se tratase.

{{< image
    gallery="true"
    image1="image:google-document-share-service-account.png" optionsthumb1="300x200" title1="Documento compartido con cuenta de servicio"
    caption="Documento compartido con cuenta de servicio" >}}

El siguiente código Java accede a un documento utilizando las credenciales de una cuenta de servicio.

{{< code file="Main-4.java" language="java" options="" >}}

En el caso de Java hay que incluir la dependencia que proporciona la implementación de la API de Google Spreadsheets para Java como se muestra usando [Gradle][gradle].

{{< code file="build.gradle" language="groovy" options="" >}}

Google ofrece un [explorador para probar las peticiones y permisos de los documentos](https://developers.google.com/apis-explorer/#p/sheets/v4/) o [explorar cualquier otra API de Google](https://developers.google.com/apis-explorer/#p/) por ejemplo esta de Drive para [exportar un documento en un formato determinado](https://developers.google.com/apis-explorer/#p/drive/v3/drive.files.export) directamente desde una web sin tener que crear una aplicación, también se pueden [hacer peticiones desde las páginas de documentación](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get).

{{< sourcecode git="blog-ejemplos/tree/master/JavaGoogleApi" >}}

{{< reference >}}
* [Google API Client Library for Java, Javadoc](https://googleapis.github.io/google-api-java-client/releases/1.25.0/javadoc/index.html)
* [Google Sheets API v4, Javadoc](https://developers.google.com/resources/api-libraries/documentation/sheets/v4/java/latest/)
* [Código fuente Google APIs](https://github.com/googleapis/)
{{< /reference >}}

{{% /post %}}
