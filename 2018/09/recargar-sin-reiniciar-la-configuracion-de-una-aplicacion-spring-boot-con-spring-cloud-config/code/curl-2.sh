$ curl -i -X POST  http://localhost:8080/
Hello world (http://localhost:8080/, value)
$ curl -i -X POST  http://localhost:8081/
Hello world (http://localhost:8081/, value)

$ vim configserver/misc/config/service.yml
# config.key: secret

$ curl -X POST -d 'path=service' http://localhost:8090/monitor
["service"]

$ curl http://localhost:8080/
Hello world (http://localhost:8080/, secret)

$ curl http://localhost:8081/
Hello world (http://localhost:8081/, secret)