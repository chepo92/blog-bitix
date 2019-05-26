$ curl http://client.127.0.0.1.xip.io:8095/actuator/metrics
$ curl http://client.127.0.0.1.xip.io:8095/actuator/metrics/hystrix.requests
$ curl http://client.127.0.0.1.xip.io:8095/actuator/metrics/hystrix.circuit.breaker.open
$ curl http://client.127.0.0.1.xip.io:8095/actuator/metrics/hystrix.fallback
$ http://client.127.0.0.1.xip.io:8095/actuator/metrics/hystrix.latency.total
$ http://client.127.0.0.1.xip.io:8095/actuator/metrics/hystrix.errors

$ curl http://client.127.0.0.1.xip.io:8095/actuator/prometheus
