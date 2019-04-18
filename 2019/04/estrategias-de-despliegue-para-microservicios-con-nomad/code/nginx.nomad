job "nginx" {
  datacenters = ["localhost"]

  type = "service"

  update {
    min_healthy_time = "15s"
    max_parallel = 1
  }

  group "services" {
    count = 5

    task "nginx" {
      driver = "docker"

      config {
        image = "nginx:stable-alpine"
        port_map {
          http = 80
        }
      }

      resources {
        memory = 1024 # MB

        network {
          port "http" {}
        }
      }
    }
  }
}
