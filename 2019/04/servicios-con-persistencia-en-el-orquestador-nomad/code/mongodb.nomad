job "mongodb" {
  datacenters = ["localhost"]

  type = "service"

  constraint {
    attribute = "${node.unique.id}"
    value     = "44511e01-34b8-c1e6-7fe5-60be0ff35d0e"
  }

  group "services" {
    count = 1

    task "mongodb" {
      driver = "docker"

      config {
        image = "mongo:latest"

        port_map {
          port = 27017
        }
        volumes = [
          "/home/picodotdev/Software/nomad/mongodb:/data/db/"
        ]
      }

      resources {
        memory = 1024 # MB

        network {
          port "port" {}
        }
      }
    }
  }
}
