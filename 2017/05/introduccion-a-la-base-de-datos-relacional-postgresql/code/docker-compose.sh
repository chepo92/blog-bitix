$ docker-compose up
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
aaef07b82d44        postgres:alpine     "docker-entrypoint..."   9 minutes ago       Up 9 minutes        5432/tcp            postgresql_postgres_1
$ docker exec -it aaef07b82d44 bash
bash-4.3# 