curl http://127.0.0.1:8093/service/actuator/prometheus | grep "service.invocations"
# HELP service_invocations_total Total service invocations
# TYPE service_invocations_total counter
service_invocations_total 20.0
