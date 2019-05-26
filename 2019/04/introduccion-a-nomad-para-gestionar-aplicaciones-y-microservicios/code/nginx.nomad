job "nginx" {
  datacenters = ["localhost"]

  type = "service"

  update {
    stagger      = "30s"
    canary       = 2
    max_parallel = 2
  }

  group "services" {
    count = 2

    task "nginx" {
      driver = "docker"

      config {
        image = "nginx:alpine"
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
