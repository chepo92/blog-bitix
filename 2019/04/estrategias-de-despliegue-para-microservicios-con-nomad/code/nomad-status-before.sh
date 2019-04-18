$ nomad job status nginx
ID            = nginx
Name          = nginx
Submit Date   = 2019-04-18T19:13:07+02:00
Type          = service
Priority      = 50
Datacenters   = localhost
Status        = running
Periodic      = false
Parameterized = false

Summary
Task Group  Queued  Starting  Running  Failed  Complete  Lost
services    0       0         5        0       0         0

Latest Deployment
ID          = 81f57b6d
Status      = successful
Description = Deployment completed successfully

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline
services    5        5       5        0          2019-04-18T19:23:23+02:00

Allocations
ID        Node ID   Task Group  Version  Desired  Status   Created  Modified
3747eb07  d18851d5  services    0        run      running  29s ago  13s ago
500575e9  d18851d5  services    0        run      running  29s ago  13s ago
c8094cf3  d18851d5  services    0        run      running  29s ago  13s ago
ea58300c  d18851d5  services    0        run      running  29s ago  13s ago
ead6d23f  d18851d5  services    0        run      running  29s ago  13s ago

$ nomad alloc status 3747eb07
ID                  = 3747eb07
Eval ID             = 781fb5f2
Name                = nginx.services[3]
Node ID             = d18851d5
Job ID              = nginx
Job Version         = 0
Client Status       = running
Client Description  = Tasks are running
Desired Status      = run
Desired Description = <none>
Created             = 56s ago
Modified            = 40s ago
Deployment ID       = 81f57b6d
Deployment Health   = healthy

Task "nginx" is "running"
Task Resources
CPU        Memory           Disk     Addresses
0/100 MHz  788 KiB/1.0 GiB  300 MiB  http: 127.0.0.1:29939

Task Events:
Started At     = 2019-04-18T17:13:08Z
Finished At    = N/A
Total Restarts = 0
Last Restart   = N/A

Recent Events:
Time                       Type        Description
2019-04-18T19:13:08+02:00  Started     Task started by client
2019-04-18T19:13:07+02:00  Task Setup  Building Task Directory
2019-04-18T19:13:07+02:00  Received    Task received by client