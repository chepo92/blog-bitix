$ docker exec -it 25135430da0d bash
root@25135430da0d:/# psql javers admin
javers=# \dt
              List of relations
 Schema |        Name        | Type  | Owner
--------+--------------------+-------+------
 public | jv_commit          | table | admin
 public | jv_commit_property | table | admin
 public | jv_global_id       | table | admin
 public | jv_snapshot        | table | admin
(4 rows)
