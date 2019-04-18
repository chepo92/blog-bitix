$ nomad job status nginx
ID            = nginx
Name          = nginx
Submit Date   = 2019-04-18T10:50:11+02:00
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
ID          = 67d4497a
Status      = successful
Description = Deployment completed successfully

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline
services    5        5       5        0          2019-04-18T11:00:22+02:00

Allocations
ID        Node ID   Task Group  Version  Desired  Status   Created  Modified
0bee3ae1  1806498b  services    0        run      running  25s ago  14s ago
295f72ec  1806498b  services    0        run      running  25s ago  14s ago
6b2dcff1  1806498b  services    0        run      running  25s ago  14s ago
94a1a79b  1806498b  services    0        run      running  25s ago  14s ago
f163316f  1806498b  services    0        run      running  25s ago  14s ago

$ nomad alloc status 0bee3ae1
ID                  = 0bee3ae1
Eval ID             = 2c63f7a1
Name                = nginx.services[0]
Node ID             = 1806498b
Job ID              = nginx
Job Version         = 0
Client Status       = running
Client Description  = Tasks are running
Desired Status      = run
Desired Description = <none>
Created             = 39s ago
Modified            = 28s ago
Deployment ID       = 67d4497a
Deployment Health   = healthy

Task "nginx" is "running"
Task Resources
CPU        Memory            Disk     Addresses
0/100 MHz  1004 KiB/1.0 GiB  300 MiB  http: 127.0.0.1:27902

Task Events:
Started At     = 2019-04-18T08:50:12Z
Finished At    = N/A
Total Restarts = 0
Last Restart   = N/A

Recent Events:
Time                       Type        Description
2019-04-18T10:50:12+02:00  Started     Task started by client
2019-04-18T10:50:11+02:00  Task Setup  Building Task Directory
2019-04-18T10:50:11+02:00  Received    Task received by client