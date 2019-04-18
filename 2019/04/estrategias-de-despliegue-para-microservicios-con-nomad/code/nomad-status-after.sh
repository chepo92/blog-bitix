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
services    0       0         5        0       5         0

Latest Deployment
ID          = 8b96049d
Status      = successful
Description = Deployment completed successfully

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline
services    5        5       5        0          2019-04-18T11:06:59+02:00

Allocations
ID        Node ID   Task Group  Version  Desired  Status    Created    Modified
a6a1423a  1806498b  services    1        run      running   33s ago    22s ago
c529ec57  1806498b  services    1        run      running   45s ago    34s ago
1cda0083  1806498b  services    1        run      running   57s ago    46s ago
aff0eaf9  1806498b  services    1        run      running   1m9s ago   58s ago
d9e3a0c9  1806498b  services    1        run      running   1m21s ago  1m11s ago
6b2dcff1  1806498b  services    0        stop     complete  7m10s ago  1m9s ago
94a1a79b  1806498b  services    0        stop     complete  7m10s ago  44s ago
0bee3ae1  1806498b  services    0        stop     complete  7m10s ago  1m21s ago
295f72ec  1806498b  services    0        stop     complete  7m10s ago  32s ago
f163316f  1806498b  services    0        stop     complete  7m10s ago  57s ago
