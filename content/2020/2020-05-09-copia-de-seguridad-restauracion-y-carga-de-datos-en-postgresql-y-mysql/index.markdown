---
pid: 481
type: "post"
title: "Copia de seguridad, restauración y carga de datos en PostgreSQL y MySQL"
url: "/2020/05/copia-de-seguridad-restauracion-y-carga-de-datos-en-postgresql-y-mysql/"
date: 2020-05-09T09:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:postgresql.svg"
tags: ["planeta-codigo", "programacion"]
summary: "Siempre es recomedable tener una copia de seguridad de algo tan importante como suelen ser los datos en una base de datos. Esa copia de seguridad sirve para en caso de desastre restaurar la mayor parte de los datos, también sirven para restaurarlos en otras máquinas diferentes a la principal. Tanto PostgreSQL como MySQL tienen comandos para hacer copias de seguridad y restaurarlas, también tiene opciones para cargar datos de forma masiva de forma rápida y más eficiente que con sentencias SQL."
---

{{% post %}}

{{< logotype image1="postgresql.svg" image2="mysql.svg" >}}

Los datos contenidos en las bases de datos relacionales son de los más importante en una aplicación. Hacer copias de seguridad o volcados de forma regular es indispensable para poder restaurar los datos en caso de desastre en el servidor. Las bases de datos proporcionan herramientas para hacer estas copias de seguridad y restaurado tanto de los datos como del esquema de las bases de datos. Las copias de seguridad y restaurado también nos sirven para disponer en nuestro entorno de desarrollo de una base de datos con datos reales con los que probar la aplicación.

En la base de datos [PosgreSQL][postgresql] disponemos de los comandos [_pg\_dump_](https://www.postgresql.org/docs/current/app-pgdump.html) para hacer la copia de seguridad o extraer el esquema y los datos y el comando [_pg\_restore_](https://www.postgresql.org/docs/current/app-pgrestore.html) para cargarlos en un nuevo servidor u otro esquema. En [MySQL][mysql] disponemos de los comandos [mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html) y depende de como hagamos las copias de seguridad [mysqlimport](https://dev.mysql.com/doc/refman/8.0/en/mysqlimport.html).

### PostgreSQL

Los comandos básicos para hacer la copia de seguridad y restauración en PostgreSQL de una base de datos completa son lo siguientes:

{{< code file="postgresql-backup.sh" language="bash" options="" >}}

PosgreSQL usando un formato de copia de seguridad personalizado con la opción _-Fc_ permite restaurar posteriormente partes de la base de datos, por ejemplo, una tabla o un índice en concreto.

{{< code file="postgresql-backup-format-custom.sh" language="bash" options="" >}}

También es posible separar la definición y los datos de las copias de seguridad con las opciones _--schema-only_ y _--data-only_.

{{< code file="postgresql-schema-data.sh" language="bash" options="" >}}

Como las bases de datos pueden llegar a ser de varias decenas de GiB generar las copias de seguridad comprimidas que reducirán su tamaño notablemente. Los volcados con la opción _-Fc_ ya está comprimidos con lo que esto solo es necesario si generamos volcados en archivos _.sql_.

{{< code file="postgresql-compress.sh" language="bash" options="" >}}

### MySQL

En MySQL los comandos de copia de seguridad y restauración son similares.

{{< code file="mysql-backup.sh" language="bash" options="" >}}

Con la opción _--extended-insert_ la importación posterior del volcado será algo más rápida al incluir setencias _insert_ con múltiples datos de vez de un _insert_ por cada fila.

{{< code file="mysql-backup-extended-insert.sh" language="bash" options="" >}}

También es posible separar los datos de la definición del esquema con las opciones _--no-data_ y _--no-create-info_.

{{< code file="mysql-schema-data.sh" language="bash" options="" >}}

Para generar y restaurar copias de seguridad comprimidas se debe usar el comando _gzip_ y _gunzip_.

{{< code file="mysql-compress.sh" language="bash" options="" >}}

### Carga masiva de datos

Si se desean cargar datos de una fuente externa de forma masiva a una base de datos PostgreSQL o MySQL en vez de generar un archivo con varios cientos de miles las sentencias _insert_ es mejor generar un archivo en formato _csv_ o _txt_ con algunos delimitadores y usar el comando [_COPY_](https://www.postgresql.org/docs/current/sql-copy.html) en PostgreSQL o el comando [_LOAD DATA_](https://dev.mysql.com/doc/refman/8.0/en/load-data.html) en MySQL complemento de [SELECT ... INTO](https://dev.mysql.com/doc/refman/8.0/en/select-into.html). Estos comandos están diseñados para cargar datos de forma masiva en la base de datos con lo que la importación será mucho más rápida.

En ambos casos las exportaciones e impotaciones soportan archivos en formato texto y csv con la posibilidad de personalizar los caracteres seperadores de las columnas y las columnas en las que importar los datos.

{{< code file="postgresql-copy.sh" language="bash" options="" >}}
{{< code file="mysql-load.sh" language="bash" options="" >}}

{{% reference %}}
* [Populating a Database, Performance Tips](https://www.postgresql.org/docs/current/populate.html)
{{% /reference %}}

{{% /post %}}
