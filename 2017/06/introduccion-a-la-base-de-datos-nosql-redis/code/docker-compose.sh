$ docker-compose up
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
1f1ad19d64ce        redis:alpine        "docker-entrypoint..."   17 seconds ago      Up 15 seconds       0.0.0.0:6379->6379/tcp   redis_redis_1
$ docker exec -it 1f1ad19d64ce sh
/data # redis-cli 
127.0.0.1:6379> set string 'Hello World!'
OK
127.0.0.1:6379> get string
"Hello World!"
127.0.0.1:6379> sadd set string1 string2 string3
(integer) 3
127.0.0.1:6379> smembers set
1) "string3"
2) "string2"
3) "string1"
127.0.0.1:6379> zadd sortedSet 1 string1 2 string2 3 string3
(integer) 3
127.0.0.1:6379> zrange sortedSet 0 -1
1) "string1"
2) "string2"
3) "string3"
127.0.0.1:6379> rpush list string1 string2 string3
(integer) 3
127.0.0.1:6379> lrange list 0 -1
1) "string1"
2) "string2"
3) "string3"
127.0.0.1:6379> hmset hash property1 string1 property2 string2 property3 string3
OK
127.0.0.1:6379> hgetall hash
1) "property1"
2) "string1"
3) "property2"
4) "string2"
5) "property3"
6) "string3"
127.0.0.1:6379> rename string hello
OK
127.0.0.1:6379> expire hello 10
(integer) 1
127.0.0.1:6379> type set
set
127.0.0.1:6379> keys *
1) "sortedSet"
2) "set"
3) "hash"
4) "list"
127.0.0.1:6379>