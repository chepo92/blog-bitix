[picodotdev@archlinux postgres]$ docker-compose up
$ docker exec -it postgres_postgres_1 bash
$ psql -U sa
CREATE DATABASE app;
\c app
\q
[picodotdev@archlinux core]$ ./gradlew updateDatabase