$ curl -i -X POST  http://localhost:8080/
Hello world (http://localhost:8080/, value)

$ vim configserver/misc/config/service.yml
# config.key: secret

$ curl -i -X POST  http://localhost:8080/actuator/refresh
HTTP/1.1 200
Content-Type: application/vnd.spring-boot.actuator.v2+json;charset=UTF-8
Transfer-Encoding: chunked
Date: Sat, 22 Sep 2018 21:19:03 GMT

["config.key"]

$ curl http://localhost:8080/
Hello world (http://localhost:8080/, secret)