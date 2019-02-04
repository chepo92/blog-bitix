$ docker-compose up
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
448b3ab5684d        postgres:latest     "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        5432/tcp            postgresql_postgres_1
$ docker exec -it 448b3ab5684d bash
root@448b3ab5684d:/# psql -U postgres -d blogbitix -f /scripts/database.sql
CREATE TABLE
INSERT 0 10
root@448b3ab5684d:/# psql -U postgres
psql (11.1 (Debian 11.1-3.pgdg90+1))
Type "help" for help.

postgres=# \l
                                 List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
-----------+----------+----------+------------+------------+-----------------------
 blogbitix | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
(4 rows)

postgres=# \connect blogbitix
You are now connected to database "blogbitix" as user "postgres".

blogbitix=# select * from Persons;
 person_id |  last_name   |  first_name   
-----------+--------------+---------------
         1 | Last name 1  | First name 1
         2 | Last name 2  | First name 2
         3 | Last name 3  | First name 3
         4 | Last name 4  | First name 4
         5 | Last name 5  | First name 5
         6 | Last name 6  | First name 6
         7 | Last name 7  | First name 7
         8 | Last name 8  | First name 8
         9 | Last name 9  | First name 9
        10 | Last name 10 | First name 10
(10 rows)

root@005d4f42cf44:/# tail /var/lib/postgresql/data/log/postgresql-2019-02-04_151958.log 
2019-02-04 15:19:58.980 GMT [25] LOG:  database system was shut down at 2019-02-04 15:19:57 GMT
2019-02-04 15:19:58.990 GMT [1] LOG:  database system is ready to accept connections
2019-02-04 15:20:13.526 GMT [46] LOG:  statement: select * from Persons;
2019-02-04 15:20:13.527 GMT [46] LOG:  duration: 1.555 ms