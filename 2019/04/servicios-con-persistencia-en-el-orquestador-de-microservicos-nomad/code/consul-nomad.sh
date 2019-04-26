$ consul agent -dev -datacenter localhost
==> Starting Consul agent...
==> Consul agent running!
           Version: 'v1.4.4'
           Node ID: '34294bf0-5802-0d94-4acd-cf8c9d090205'
         Node name: 'archlinux'
        Datacenter: 'localhost' (Segment: '<all>')
            Server: true (Bootstrap: false)
       Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)
      Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)
           Encrypt: Gossip: false, TLS-Outgoing: false, TLS-Incoming: false

$ sudo nomad agent -dev -dc localhost
[sudo] password for picodotdev: 
==> No configuration files loaded
==> Starting Nomad agent...
==> Nomad agent configuration:

       Advertise Addrs: HTTP: 127.0.0.1:4646; RPC: 127.0.0.1:4647; Serf: 127.0.0.1:4648
            Bind Addrs: HTTP: 127.0.0.1:4646; RPC: 127.0.0.1:4647; Serf: 127.0.0.1:4648
                Client: true
             Log Level: DEBUG
                Region: global (DC: localhost)
                Server: true
               Version: 0.9.0