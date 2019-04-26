$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                    NAMES
b0d3f42c92fc        mongo:latest        "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        127.0.0.1:20180->27017/tcp, 127.0.0.1:20180->27017/udp   mongodb-ea10d440-1176-3bfb-5301-7ccd17af0281
$ docker exec -it b0d3f42c92fc bash
root@b0d3f42c92fc:/# mongo
MongoDB shell version v4.0.9
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("ba120679-b965-49d0-a774-dff39d6b630a") }
MongoDB server version: 4.0.9
Server has startup warnings: 
2019-04-26T16:47:49.308+0000 I STORAGE  [initandlisten] 
2019-04-26T16:47:49.308+0000 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2019-04-26T16:47:49.308+0000 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
2019-04-26T16:47:50.133+0000 I CONTROL  [initandlisten] 
2019-04-26T16:47:50.133+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2019-04-26T16:47:50.133+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2019-04-26T16:47:50.133+0000 I CONTROL  [initandlisten] 
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

> db.articles.insert({title: "Introducción a la base de datos NoSQL MongoDB", author: "picodotdev", date: new Date(2017,05,18,12,30), tags: ['mongodb', 'database', 'NoSQL'], comments: [{user: "jones", message: "MongoDB is great!"}, {user: "lina", message: "MongoDB is great!"}]})
WriteResult({ "nInserted" : 1 })
> db.articles.insert({title: "Introducción a la base de datos relacional PostgreSQL", author: "picodotdev", date: new Date(2017,05,17,12,00), likes: 100, tags: ['postgresql', 'database', 'SQL'], comments: [{user: "katy", message: "PostgreSQL rocks!"}, {user: "smith", message: "SQL language is powerful!"}]})
WriteResult({ "nInserted" : 1 })
> db.articles.find()
{ "_id" : ObjectId("5cc335873b17081f2ca1d4d5"), "title" : "Introducción a la base de datos NoSQL MongoDB", "author" : "picodotdev", "date" : ISODate("2017-06-18T12:30:00Z"), "tags" : [ "mongodb", "database", "NoSQL" ], "comments" : [ { "user" : "jones", "message" : "MongoDB is great!" }, { "user" : "lina", "message" : "MongoDB is great!" } ] }
{ "_id" : ObjectId("5cc335993b17081f2ca1d4d6"), "title" : "Introducción a la base de datos relacional PostgreSQL", "author" : "picodotdev", "date" : ISODate("2017-06-17T12:00:00Z"), "likes" : 100, "tags" : [ "postgresql", "database", "SQL" ], "comments" : [ { "user" : "katy", "message" : "PostgreSQL rocks!" }, { "user" : "smith", "message" : "SQL language is powerful!" } ] }
> db.articles.count()
2
> exit
bye
root@b0d3f42c92fc:/# exit
exit
$ nomad job stop --purge mongodb
==> Monitoring evaluation "f10589c6"
    Evaluation triggered by job "mongodb"
    Evaluation status changed: "pending" -> "complete"
==> Evaluation "f10589c6" finished with status "complete"