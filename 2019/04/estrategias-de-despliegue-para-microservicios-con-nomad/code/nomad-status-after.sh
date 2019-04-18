$ nomad job status nginx
ID            = nginx
Name          = nginx
Submit Date   = 2019-04-18T19:17:54+02:00
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
ID          = ba20066a
Status      = successful
Description = Deployment completed successfully

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline
services    5        5       5        0          2019-04-18T19:29:19+02:00

Allocations
ID        Node ID   Task Group  Version  Desired  Status    Created    Modified
fabcf384  d18851d5  services    1        run      running   2m36s ago  2m20s ago
ccb57008  d18851d5  services    1        run      running   2m53s ago  2m37s ago
b06c743d  d18851d5  services    1        run      running   3m10s ago  2m54s ago
56733896  d18851d5  services    1        run      running   3m28s ago  3m12s ago
71c8bb5b  d18851d5  services    1        run      running   3m45s ago  3m29s ago
500575e9  d18851d5  services    0        stop     complete  8m31s ago  3m44s ago
c8094cf3  d18851d5  services    0        stop     complete  8m31s ago  3m10s ago
3747eb07  d18851d5  services    0        stop     complete  8m31s ago  2m53s ago
ea58300c  d18851d5  services    0        stop     complete  8m31s ago  3m27s ago
ead6d23f  d18851d5  services    0        stop     complete  8m31s ago  2m35s ago