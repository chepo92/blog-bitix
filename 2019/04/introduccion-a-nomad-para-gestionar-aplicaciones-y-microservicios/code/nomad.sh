$ nomad job plan nginx.nomad
$ nomad job run nginx.nomad
==> Monitoring evaluation "b2b07746"
    Evaluation triggered by job "nginx"
    Allocation "60f3d102" created: node "58823be1", group "services"
    Allocation "6e12ae8f" created: node "58823be1", group "services"
    Evaluation within deployment: "0dddab79"
    Allocation "6e12ae8f" status changed: "pending" -> "running" (Tasks are running)
    Allocation "60f3d102" status changed: "pending" -> "running" (Tasks are running)
    Evaluation status changed: "pending" -> "complete"
==> Evaluation "b2b07746" finished with status "complete"

$ nomad job status nginx
ID            = nginx
Name          = nginx
Submit Date   = 2019-04-14T13:31:53+02:00
Type          = service
Priority      = 50
Datacenters   = localhost
Status        = running
Periodic      = false
Parameterized = false

Summary
Task Group  Queued  Starting  Running  Failed  Complete  Lost
services    0       0         2        0       0         0

Latest Deployment
ID          = 0dddab79
Status      = running
Description = Deployment is running

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline
services    2        2       2        0          2019-04-14T13:42:04+02:00

Allocations
ID        Node ID   Task Group  Version  Desired  Status   Created  Modified
60f3d102  58823be1  services    0        run      running  12s ago  1s ago
6e12ae8f  58823be1  services    0        run      running  12s ago  1s ago

$ nomad alloc status 60f3d102
ID                  = 60f3d102
Eval ID             = b2b07746
Name                = nginx.services[1]
Node ID             = 58823be1
Job ID              = nginx
Job Version         = 0
Client Status       = running
Client Description  = Tasks are running
Desired Status      = run
Desired Description = <none>
Created             = 56s ago
Modified            = 45s ago
Deployment ID       = 0dddab79
Deployment Health   = healthy

Task "nginx" is "running"
Task Resources
CPU        Memory           Disk     Addresses
0/100 MHz  820 KiB/1.0 GiB  300 MiB  http: 127.0.0.1:28421

Task Events:
Started At     = 2019-04-14T11:31:54Z
Finished At    = N/A
Total Restarts = 0
Last Restart   = N/A

Recent Events:
Time                       Type        Description
2019-04-14T13:31:54+02:00  Started     Task started by client
2019-04-14T13:31:53+02:00  Task Setup  Building Task Directory
2019-04-14T13:31:53+02:00  Received    Task received by client

$ nomad alloc logs 60f3d102
172.17.0.1 - - [14/Apr/2019:11:33:17 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0" "-"
172.17.0.1 - - [14/Apr/2019:11:33:17 +0000] "GET /favicon.ico HTTP/1.1" 404 154 "-" "Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0" "-"