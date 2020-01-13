---
pid: 379
type: "post"
title: "Log de SQLs y de SQLs lentas en MySQL y PostgreSQL"
url: "/2019/02/log-de-sqls-y-de-sqls-lentas-en-myql-y-postgresql/"
date: 2019-02-04T13:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:mysql.svg"
tags: ["planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="mysql.svg" title1="MySQL" width1="300" image2="postgresql.svg" title2="PotgreSQL" width2="200" >}}

La información generalmente y en la mayoría de los casos es de las cosas más importantes de una aplicación. Para guardarla se suelen emplear bases de datos relacionales por sus propiedades de consistencia, transaccionalidad y propiedades ACID aunque más recientemente se ha popularizado otros sistemas no SQL como [Redis][redis] o [Mongo][mongodb] para diferentes casos de uso.

Dos de las bases de datos relacionales más usadas son [PostgreSQL][postgresql] y [MySQL][mysql]. El rendimiento de una aplicación en buena parte depende del acceso a la base de datos relacional. Por ello conviene saber cuáles, cuántas consultas se están lanzando al servidor y el tiempo tardan, además suele ser útil monitorizar especialmente las consultas que consideramos lentas al superar cierto umbral de tiempo. Con la información de que consultas, cuantas y las lentas se toman tomar acciones  asegurar el buen funcionamiento del sistema, para mejorar el rendimiento de la aplicación optimizando las consultas lentas u optimizando la aplicación para que realice menos consultas al servidor de base de datos si es que hay un [problema de 1+N típico en las librerías ORM como Hibernate][blogbitix-26].

Que una SQL tarde mucho en ejecutarse y consuma muchos recursos del sistema en CPU o memoria potencialmente es un problema grave que posiblemente afecte a funcionalidades importantes de una aplicación, será más acusado si hay un volumen relevante de usuarios usando el sistema simultáneamente. Las consecuencias van desde la caída del servicio hasta tiempos de respuesta elevados. 

### MySQL

Para activar la generación de logs y de SQLs lentas en MySQL hay que añadir la siguiente configuración a MySQL. Las sentencias lentas que superan cierto tiempo de ejecución son emitidas al archivo _mysql-slow.log_, según la configuración indicada aquellas que superen 10 segundos. Dado que el ejemplo de consulta es sencilla y la base de datos no es grande la sentencia no aparece en el log de SQLs lentas.

{{< code file="mysql/docker-compose.yml" language="Yaml" options="" >}}
{{< code file="mysql/configuration/mysql.cnf" language="Ini" options="" >}}
{{< code file="mysql/scripts/database.sql" language="Sql" options="" >}}
{{< code file="mysql/bash.sh" language="bash" options="" >}}

### PostgreSQL

En el caso de PostgeSQL el archivo de log se ubica según el valor de la propiedad _log\_directory_ y _log\_filename_. Se activa el log con la propiedad _logging\_collector_. Las sentencias con errores también se incluyen en el mismo archivo. Para obtener los tiempos que tardan las sentencias en ejecutarse hay que establecer un umbral en milisegundos para que la sentencia sea incluida en el log, con el valor 0 se incluyen todas las sentencias en el log en la propiedad _log\_min\_duration\_statement_.

{{< code file="postgresql/docker-compose.yml" language="Yaml" options="" >}}
{{< code file="postgresql/configuration/postgresql.conf" language="plaintext" options="" >}}
{{< code file="postgresql/scripts/database.sql" language="Sql" options="" >}}
{{< code file="postgresql/bash.sh" language="bash" options="" >}}

Como los archivos de log de sentencias ejecutadas potencialmente serán grandes hay que rotarlos y monitorizar o limitar su tamaño. En PostgreSQL usando las directivas de configuración, _log\_rotation\_age_ o _log\_rotation\_size_, en MySQL posiblemente con el comando [logrotate](https://linux.die.net/man/8/logrotate).

{{< reference >}}
* [MySQL Server Logs](https://dev.mysql.com/doc/refman/8.0/en/server-logs.html)
* [PostgreSQL Error Reporting and Logging](https://www.postgresql.org/docs/current/runtime-config-logging.html)
* [How to see log files in MySQL?](https://stackoverflow.com/questions/5441972/how-to-see-log-files-in-mysql)
* [How to enable MySQL Query Log?](https://stackoverflow.com/questions/6479107/how-to-enable-mysql-query-log)
* [How to log PostgreSQL queries?](https://stackoverflow.com/questions/722221/how-to-log-postgresql-queries)
* [PostgreSQL: Error Reporting and Logging](http://www.postgresql.org/docs/current/static/runtime-config-logging.html)
{{< /reference >}}

{{% /post %}}
