$ docker-compose up
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
afc516c44901        mongo:latest        "docker-entrypoint..."   42 seconds ago      Up 41 seconds       0.0.0.0:27017->27017/tcp   mongodb_mongodb_1
$ docker exec -it afc516c44901 bash
root@afc516c44901:/# mongo
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.4
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
>