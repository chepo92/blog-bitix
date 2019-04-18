$ nomad job status nginx
ID            = nginx
Name          = nginx
Submit Date   = 2019-04-18T10:55:59+02:00
Type          = service
Priority      = 50
Datacenters   = localhost
Status        = running
Periodic      = false
Parameterized = false

Summary
Task Group  Queued  Starting  Running  Failed  Complete  Lost
services    0       0         5        0       1         0

Latest Deployment
ID          = 8b96049d
Status      = running
Description = Deployment is running

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline
services    5        1       0        0          2019-04-18T11:05:59+02:00

Allocations
ID        Node ID   Task Group  Version  Desired  Status    Created    Modified
d9e3a0c9  1806498b  services    1        run      running   4s ago     4s ago
0bee3ae1  1806498b  services    0        stop     complete  5m53s ago  4s ago
295f72ec  1806498b  services    0        run      running   5m53s ago  5m42s ago
6b2dcff1  1806498b  services    0        run      running   5m53s ago  5m42s ago
94a1a79b  1806498b  services    0        run      running   5m53s ago  5m42s ago
f163316f  1806498b  services    0        run      running   5m53s ago  5m42s ago
