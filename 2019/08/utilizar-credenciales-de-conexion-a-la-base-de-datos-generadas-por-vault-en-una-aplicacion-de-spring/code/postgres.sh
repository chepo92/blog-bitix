$ docker run --rm -it -p "5432:5432" -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres postgres:alpine
docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
8fedf0ef1342        postgres:alpine     "docker-entrypoint.s…"   22 seconds ago      Up 20 seconds       0.0.0.0:5432->5432/tcp   serene_leavitt

$ docker exec -it 8fedf0ef1342 bash
bash-5.0# psql -U postgres
psql (11.4)
Type "help" for help.

postgres=# CREATE DATABASE app;
CREATE DATABASE
postgres=#