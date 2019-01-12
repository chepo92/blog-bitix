$ docker ps -q --filter label=com.docker.swarm.service.name=postgres_postgres
ac90f7e1e7b5
$ docker exec -it ac90f7e1e7b5 /bin/bash
postgres-# psql --username=postgres
postgres=# CREATE TABLE COMPANY(                                                                                   
postgres(#    ID             SERIAL PRIMARY KEY     NOT NULL,
postgres(#    NAME           TEXT                   NOT NULL,
postgres(#    AGE            INT                    NOT NULL,
postgres(#    ADDRESS        CHAR(50),
postgres(#    SALARY         REAL
postgres(# );
CREATE TABLE
postgres=# \dt
          List of relations
 Schema |  Name   | Type  |  Owner   
--------+---------+-------+----------
 public | company | table | postgres
(1 row)
postgres=# \d+ company
                                                 Table "public.company"
 Column  |     Type      |                      Modifiers                       | Storage  | Stats target | Descrip
tion 
---------+---------------+------------------------------------------------------+----------+--------------+--------
-----
 id      | integer       | not null default nextval('company_id_seq'::regclass) | plain    |              | 
 name    | text          | not null                                             | extended |              | 
 age     | integer       | not null                                             | plain    |              | 
 address | character(50) |                                                      | extended |              | 
 salary  | real          |                                                      | plain    |              | 
Indexes:
    "company_pkey" PRIMARY KEY, btree (id)
postgres=# INSERT INTO COMPANY (name, age, address, salary) VALUES ('Company A', 21, '13, Rue del Percebe', 45000);
INSERT 0 1
postgres=# SELECT * FROM company;
 id |   name    | age |                      address                       | salary
----+-----------+-----+----------------------------------------------------+--------
  3 | Company A |  21 | 13, Rue del Percebe                                |  45000
(1 row)