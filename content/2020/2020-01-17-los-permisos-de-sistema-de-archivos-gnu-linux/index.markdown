---
pid: 455
type: "post"
title: "Los permisos del sistema de archivos de GNU/Linux"
url: "/2020/01/los-permisos-del-sistema-de-archivos-de-gnu-linux/"
date: 2020-01-17T19:15:00+01:00
updated: 2020-01-21T20:15:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:linux.svg"
tags: ["gnu-linux", "planeta-codigo"]
summary: "El sistema de permisos de GNU/Linux por defecto es menos capaz que el de Windows basado en listas de control o ACLs pero es más sencillo y suficiente para muchos casos y usuarios. Cada archivo o directorio tiene unos bits de control que determinan los permisos de lectura, escritura y ejecución para el propietario, grupo y el resto de usuarios. Los comandos _ls_, _chmod_ y _chown_ permiten listar los permisos de los archivos y cambiarlos."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

En un sistema multiprogramado como son cualquiera de los actuales modernos que son utilizados por varios usuarios y programas es necesario que tengan algún mecanismo de seguridad y permisos para proteger los recursos. En el caso del sistema de archivos GNU/Linux usa un sistema simple pero suficiente para una buena parte de casos de uso.

En [GNU][gnu]/[Linux][linux] implemenan un [control de acceso discrecional](https://es.wikipedia.org/wiki/Control_de_Acceso_Discrecional) o DAC en el que los permisos de cada archivo se dividen en lectura, escritura y ejecución, identificados por las letras _rwx_ respectivamente, para el propietario del archivo, el grupo de usuarios al que pertenece y para el resto de usuarios, identificados estos grupos con las letras _ugo_ respectivamente. Para saber si se posee el permiso de lectura, escritura y ejecución se utiliza un bit para cada uno de ellos. Para el conjunto de usuario, grupo y resto de usuarios en total se utilizan 9 bits. Estos 9 bits forman la cadena _rwxrwxrwx_ que para escribirlos de forma numérica y más simple se pueden utilizar base octal, por ejemplo 744 se traduce a binario en 111100100 significando que el usuario tiene permisos para leer, escribir y ejecutar el archivo, dados los tres primeros bits, y el grupo de usuario y resto de usuarios solo tienen el permiso de lectura.

Con el comando para listar el contenido de un directorio _ls -lha_ se muestra el listado en formato largo con la opción _-l_ que incluye los permisos, las unidades de tamaño en formato legible para humanos con la opción _-h_, con la opción _-a_ incluye los archivos ocultos que son los que empiezan por _._ y con la opción _\-\-group-directories-first_ los directorios primero.

En los listados del comando _ls_ el primer caracter indica si el archivo es un archivo regular o un directorio que se identifican por la letra _d_ como el directorio _Descargas_, si fuese una _l_ indicaría que es un enlace como el enlace _.steampath_. El propietario de los archivos es mi usuario _picodotdev_, salvo en el caso del directorio superior referenciado con _.._ que es el superusuario _root_.

{{< code file="ls.sh" language="plaintext" options="" >}}

Para cambiar los permisos de un archivo se utiliza el comando _chmod_ pudiendo utilizarse de varias formas. El primer caso establece todos los bits dando permisos de lectura, escritura y ejecución al usuario propietario de archivo, y de lectura para los usuarios del grupo y para el resto de usuarios. El segundo caso da permisos de lectura al usuario en el archivo indicado. El tercer caso quita los permisos de escritura al resto de usuarios. El cuarto caso da permisos de ejecución a todos, al propietario del archivo, a los usuarios de su grupo y al resto de usuarios.

{{< code file="chmod.sh" language="bash" options="" >}}

El comando _chown_ permite cambiar el propietario del archivo. En este caso se establece como propietario del archivo el usuario _root_.

{{< code file="chown.sh" language="bash" options="" >}}

En el caso de los directorios tener el permiso de lectura significa poder listar el contenido del directorio (_ls_), el permiso de escritura poder crear archivos, renombrar y eliminar archivos (por ejemplo con _touch_, _mkdir_) y el de ejecución en un directorio otorga acceso al contenido de los archivos (se concede dependiendo de los propios permisos del archivo).

En el permiso de ejecución en vez de una _x_ puede aparecer una _s_ en en los permisos de grupos de usuario y grupo y significa que al ejecutar el archivo en vez de tomar como usuario de ejecución el del usuario o grupo del usuario que lo ejecuta se toma el usuario y grupo del archivo, estos son los _setuid_ y _setgid_. Si en en el bit de ejecución del grupo otros aparece una _t_ indica que el directorio es _sticky_ y solo el dueño del directorio o el usuario _root_ pueden renombrar o eliminar archivos.

* `r`: lectura.
* `w`: escritura.
* `x`: ejecución.
* `u`: usuario.
* `g`: grupo.
* `o`: otros.
* `a`: todos (usuario, grupo y otros).
* `+`: añadir permisos.
* `-`: quitar permisos.
* `d`: directorio.
* `l`: enlace simbólico.
* `s`: _setuid_ y _setgid_.
* `t`: _sticky_.

Estos son algunos ejemplos de permisos en directorios.

El usuario _archie_ tiene acceso al directorio _Documents_. Puede listar, crear archivos, renombrar y eliminar cualquier archivo en _Documents_ independientemente de los permisos de esos archivos. Su posibilidad de acceder al contenido de los archivos dependen de los permisos del archivo.

{{< code file="permissions-1.sh" language="plaintext" options="" >}}

En este caso sin el permiso de lectura en el directorio _archie_ tiene acceso completo pero no puede crear, renombrar ni eliminar archivos. Puede listar los archivos y acceder al contenido de los archivos si los permisos de ese archivo lo permiten.

{{< code file="permissions-2.sh" language="plaintext" options="" >}}

_archie_ no puede listar los archivos del directorio pero si conocer el nombre de un archivo existente puede listarlo, renombrarlo, eliminarlo y acceder a su contenido (si los permisos del archivo lo permiten). También puede creer nuevos archivos.

{{< code file="permissions-3.sh" language="plaintext" options="" >}}

_archie_ solo es capaz de acceder a los archivos que conoce (si los permisos de ese archivo lo permiten). No puede listar archivos existentes ni crear, renombrar o eliminar ninguno de ellos.

{{< code file="permissions-4.sh" language="plaintext" options="" >}}

Debe tenerse en cuenta que los anteriores son permisos sobre directorios y son independientes de los permisos de los archivos individuales. Cuando se crea un nuevo archivo es el directorio el que cambia, este es el por qué se necesitan permisos en el directorio.

Otro ejemplo, en este caso para un archivo, no un directorio. La primera letra no es una _d_ sino un _-_, con lo que _foobar_ es un archivo, no un directorio. Los permisos del propietario son _rw-_ de modo que el propietario (_archie_) tiene la capacidad de leer y escribir pero no de ejecutarlo. El permiso de ejecución no es necesario si los archivos son de texto o datos. Los permisos de grupo son _r\-\-_, de modo que el grupo tiene la habilidad de leer el archivo pero no de escribir en él de ninguna forma, esencialmente es un archivo de solo lectura para el grupo. Los permisos para el grupo de otros es el mismo.

{{< code file="permissions-5.sh" language="plaintext" options="" >}}

Otros esquemas más flexibles pero más complejos son las [listas de control de acceso](https://wiki.archlinux.org/index.php/Access_Control_Lists) o ACL y los sistemas de control de acceso obligatorio o MAC, GNU/Linux también soporta este tipo de seguridades [activando ACL](https://wiki.archlinux.org/index.php/Access_Control_Lists) o [activando SELinux](https://wiki.archlinux.org/index.php/SELinux). Las ACL permiten dar permisos específicos a cualquier usuario o grupo para cualquier archivo.

En la [wiki de Arch Linux sobre permisos de archivo y atributos](https://wiki.archlinux.org/index.php/File_permissions_and_attributes) se explica detalladamente y con ejemplos el sistema de permisos en GNU/Linux.

{{% reference %}}
* [setuid](https://en.wikipedia.org/wiki/Setuid)
* [Sticky bit](https://en.wikipedia.org/wiki/Sticky_bit)
* [Access Control Lists](https://wiki.archlinux.org/index.php/Access_Control_Lists)
{{% /reference %}}

{{% /post %}}
