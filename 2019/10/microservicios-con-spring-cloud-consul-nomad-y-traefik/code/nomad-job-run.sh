./gradlew assemble

nomad job run nomad/traefik.nomad
nomad job run nomad/configserver.nomad
nomad job run nomad/service.nomad
nomad job run nomad/client.nomad