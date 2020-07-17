---
pid: 500
type: "post"
title: "Las 3 formas de guardar datos en el navegador con JavaScript"
url: "/2020/07/las-3-formas-de-guardar-datos-en-el-navegador-con-javascript/"
date: 2020-07-17T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:localstorage.png"
tags: ["javascript", "planeta-codigo"]
summary: "En el navegador del usuario hay varias formas de guardar información con diferentes propósitos que perdure entre las visitas realizadas en varias sesiones. Los navegadores ofrecen tres formas de guardar datos: cookies, LocalStorage y SessionStorage e IndexedDB cada una con diferentes características y utilizables con código JavaScript."
---
 
{{% post %}}

{{< logotype image1="html.svg" image2="javascript.svg" >}}

Las aplicaciones web utilizan la arquitectura cliente/servidor comunicándose mediante la red para enviar y recibir datos. El cliente ya sea un navegador web en un ordenador de escritorio o portátil o bien sea un dispositivo móvil inicia las solicitudes al servidor y el servidor devuelve una respuesta. La respuesta del servidor puede ser contenido HTML o datos en formato JSON en el caso de recursos REST o [GraphQL][graphql].

Aún con la cada vez mayor ancho de banda de las redes cada petición al servidor con comunicación mediante la red implica una latencia en la respuesta de unas decenas de milisegundos que se aprecia en la fluidez de las aplicaciones. Para evitar estas latencias y mejorar la experiencia de uso de las aplicaciones web hay varias estrategias, reducir el número de peticiones de una página web o aplicación web, reducir la cantidad de datos transmitidos y cuando sea posible cachear los recursos y datos para no tener que solicitarlos en cada petición ni en futuras visitas al servidor.

Los navegadores web modernos ofrecen tres formas diferentes de almacenar o persistir datos en lado del cliente cada una siendo más apropiada según las necesidades, estas tres formas de guardar datos son con las _cookies_, LocalStorage o SessionStorage y finalmente IndexedDB. Los datos están accesibles aún sin conexión con el servidor desde donde se descargó la página siguiendo la [política de mismo origen](https://www.w3.org/Security/wiki/Same_Origin_Policy) para mantener la seguridad y que solo la página origen tenga acceso a los datos almacenados. Una aplicación puede utilizar una o varias de estas formas de guardar datos al mismo tiempo que perduran al cierre del navegador y de las páginas estando disponible en futuras sesiones.

En los navegadores se pueden inspeccionar estos datos almacenados en el lado del cliente utilizando las herramientas para desarrolladores, en el navegador [Firefox][firefox] en la sección _Almacenamiento_ de las herramientas para desarrolladores.

Dado que los datos se almacenan en el navegador del usuario hay que tener en cuenta en que el propio usuario tiene acceso a ellos y es capaz de modificarlos, de modo que si estos datos se envían al servidor hay que tratarlos como una fuente de datos no confiable y validarlos en el lado del servidor si es necesario para evitar fallos de seguridad ni ser datos que comprometan la seguridad.

### Guardar datos en el navegador con cookies

El protocolo HTTP es un protocolo sin estado, esto significa que cada petición al servidor es independiente y no comparten información. Las _cookies_ son la forma de convertir el protocolo HTTP a un protocolo con estado identificando al usuario en las diferentes peticiones. Las _cookies_ son unos pequeños datos guardados por el navegador y enviados al servidor en cada petición al servidor.

Las _cookies_ se utilizan para mantener la sesión, para ofrecer personalización o para realizar seguimiento de usuarios. Cuando se realiza la autenticación en un servidor la sesión se mantiene creado una _cookie_ que contiene un identificativo de sesión y en el lado del servidor el identificativo de la sesión se mantiene en memoria o externalizada del servidor en una base de datos como [Redis][redis] o relacional. El identificativo de la sesión guardado en una _cookie_ no es más que al menos 128 bits aleatorios únicos para cada usuario.

* [Datos de sesión externalizados con Spring Session][blogbitix-70]
* [Aumentar el tamaño del identificativo de la cookie de sesión de Tomcat o Spring Session][blogbitix-397]

Las propiedades de las _cookies_ son:

* Se mantienen en el cliente.
* Se envían en cada petición al servidor.
* Su tamaño es muy reducido, no pueden superar los 4 KiB.
* Tienen una fecha de expiración.
* Tienen un nombre y guardan un valor.
* Las _cookies_ solo se envían al dominio origen.
* Pueden crearse sin la posibilidad de que desde JavaScript sean accesibles por seguridad.
* Se pueden crear tanto en el lado del servidor, como en el lado del cliente con JavaScript.

Desde JavaScript se pueden crear _cookies_, buscar por nombre, obtener sus valores, modificar y eliminar.

{{< code file="Cookies.js" language="javascript" options="" >}}

{{< image
    gallery="true"
    image1="image:cookie.png" optionsthumb1="650x450" title1="Datos almacenados con cookies"
    caption="Inspección de datos almacenados con cookies" >}}

* [Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

### Guardar datos en el navegador con LocalStorage y SessionStorage

Las _cookies_ tiene la limitación de que son pequeñas y de enviarse en cada petición al servidor incluidas las peticiones de solicitudes de recursos como imágenes y hojas de estilo lo que aumenta la cantidad de datos transmitidos en el caso de realizar por cada página solicitada con muchos recursos un gran número de peticiones. Aunque el navegador soporte la [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) algunos navegadores en el modo privado y restringidos impiden su uso para proteger la privacidad y el rastreo de los usuarios.

El sistema de persistencia [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) y [SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) tiene las propiedades:

* La cantidad de datos que se pueden guardar es de hasta 5 MiB.
* Los datos almacenados no se transmiten, solo se almacenan en el navegador.
* No tienen fecha de expiración.
* Almacenan datos clave-valor.
* Las claves-valor están asociadas a un dominio.

La diferencia entre LocalStorage y SessionStorage está en que en el último caso los datos son eliminados al cerrar todas las pestañas del navegador del dominio asociado al SessionSotrage, sus datos están limitados a la sesión. Se permiten las operaciones de inserción, lectura, modificación, eliminación y búsqueda. 

{{< code file="LocalStorageSessionStorage.js" language="javascript" options="" >}}

Otra de las características de LocalStorage y SessionStorage es que permiten establecer un manejador de evento o _listener_ cuando se realizan cambios. La singularidad de este mecanismo es que permite comunicar varias pestañas de la misma aplicación sin necesidad de realizar la comunicación a través del servidor.

{{< code file="StorageListener.js" language="javascript" options="" >}}

{{< image
    gallery="true"
    image1="image:localstorage.png" optionsthumb1="650x450" title1="Datos almacenados con LocalStorage"
    caption="Inspección de datos almacenados con LocalStorage" >}}

* [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
* [Window: storage event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

### Guardar datos en el navegador con IndexedDB

En el caso de querer grandes cantidades de datos o de poder buscar datos por varias claves la otra forma disponible es IndexedDB. Sus propiedades son:

* Permite almacenar grandes cantidades de datos.
* Permite almacenar datos estructurados.
* Cada base de datos tiene múltiples espacios de almacenamiento e índices.
* Permite búsquedas por varias claves e índices eficientemente.
* Soporta transaccionalidad.

Los espacios de almacenamiento de datos relacionados se denominan _objectStore_. Los datos se acceden por una clave primaria pero con la diferencia de que puede haber varios índices, cada uno indexando los datos con una clave diferente. Se permiten las operaciones de inserción, lectura, modificación, eliminación y búsqueda. 

{{< code file="IndexedDB.js" language="javascript" options="" >}}

{{< image
    gallery="true"
    image1="image:indexeddb.png" optionsthumb1="650x450" title1="Datos almacenados con IdexedDB"
    caption="Inspección de datos almacenados con IndexedDB" >}}

* [Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
* [Working with IndexedDB](https://developers.google.com/web/ilt/pwa/working-with-indexeddb)
* [IDBObjectStore](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore)
* [IDBIndex](https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex)
* [IDBTransaction](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction)
* [IDBCursor](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor)
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [IndexedDB with usability (idb)](https://github.com/jakearchibald/idb)

{{% /post %}}
