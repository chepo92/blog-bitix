$ docker-compose up
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
8d7d4953cb39        mysql:latest        "bash -c chown…"         10 seconds ago      Up 15 seconds       3306/tcp            msqsql_msqsql_1
$ docker exec -it 8d7d4953cb39 bash
root@8d7d4953cb39:/# mysql -uroot -proot blogbitix < /scripts/database.sql
root@8d7d4953cb39:/# mysql -uroot -proot
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| blogbitix          |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

mysql> use blogbitix;
Database changed

mysql> select * from Persons;
+-----------+--------------+---------------+
| person_id | last_name    | first_name    |
+-----------+--------------+---------------+
|         1 | Last name 1  | First name 1  |
|         2 | Last name 2  | First name 2  |
|         3 | Last name 3  | First name 3  |
|         4 | Last name 4  | First name 4  |
|         5 | Last name 5  | First name 5  |
|         6 | Last name 6  | First name 6  |
|         7 | Last name 7  | First name 7  |
|         8 | Last name 8  | First name 8  |
|         9 | Last name 9  | First name 9  |
|        10 | Last name 10 | First name 10 |
+-----------+--------------+---------------+
10 rows in set (0.00 sec)

root@8d7d4953cb39:/# tail -20 /var/log/mysql/mysql.log 
2019-02-04T13:26:48.414716Z	   19 Connect	root@localhost on  using Socket
2019-02-04T13:26:48.414911Z	   19 Query	select @@version_comment limit 1
2019-02-04T13:26:53.629645Z	   19 Query	show databases
2019-02-04T13:26:58.847307Z	   19 Query	SELECT DATABASE()
2019-02-04T13:26:58.847709Z	   19 Init DB	blogbitix
2019-02-04T13:26:58.851495Z	   19 Query	show databases
2019-02-04T13:26:58.853238Z	   19 Query	show tables
2019-02-04T13:26:58.858211Z	   19 Field List	Persons 
2019-02-04T13:27:03.463610Z	   19 Query	show tables
2019-02-04T13:28:20.522918Z	   19 Query	select * from Persons
2019-02-04T13:28:35.275031Z	   19 Quit	