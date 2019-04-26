$ nomad node status
ID        DC         Name       Class   Drain  Eligibility  Status
44511e01  localhost  archlinux  <none>  false  eligible     ready

$ nomad node status 44511e01
ID            = 44511e01
Name          = archlinux
Class         = <none>
DC            = localhost
Drain         = false
Eligibility   = eligible
Status        = ready
Uptime        = 1h40m31s
Driver Status = docker,exec,java,qemu,raw_exec

Node Events
Time                       Subsystem  Message
2019-04-26T17:57:41+02:00  Cluster    Node registered

Allocated Resources
CPU          Memory      Disk
0/30400 MHz  0 B/31 GiB  0 B/16 GiB

Allocation Resource Utilization
CPU          Memory
0/30400 MHz  0 B/31 GiB

Host Resource Utilization
CPU             Memory          Disk
3288/30400 MHz  5.2 GiB/31 GiB  (tmpfs)

Allocations
No allocations placed

$ nomad node status -verbose 44511e01
ID          = 44511e01-34b8-c1e6-7fe5-60be0ff35d0e
Name        = archlinux
Class       = <none>
DC          = localhost
Drain       = false
Eligibility = eligible
Status      = ready
Uptime      = 1h44m39s

Drivers
Driver    Detected  Healthy  Message                                                                         Time
docker    true      true     Healthy                                                                         2019-04-26T17:57:41+02:00
exec      true      true     Healthy                                                                         2019-04-26T17:57:41+02:00
java      true      true     Healthy                                                                         2019-04-26T17:57:41+02:00
qemu      true      true     Healthy                                                                         2019-04-26T17:57:41+02:00
raw_exec  true      true     Healthy                                                                         2019-04-26T17:57:41+02:00
rkt       false     false    Failed to execute rkt version: exec: "rkt": executable file not found in $PATH  2019-04-26T17:57:41+02:00

Node Events
Time                       Subsystem  Message          Details
2019-04-26T17:57:41+02:00  Cluster    Node registered  <none>

Allocated Resources
CPU            Memory          Disk
100/30400 MHz  1.0 GiB/31 GiB  300 MiB/16 GiB

Allocation Resource Utilization
CPU           Memory
19/30400 MHz  38 MiB/31 GiB

Host Resource Utilization
CPU             Memory          Disk
4564/30400 MHz  5.5 GiB/31 GiB  (tmpfs)

Allocations
ID                                    Eval ID                               Node ID                               Task Group  Version  Desired  Status   Created                    Modified
cd45371d-501a-1373-dfde-bb16c4ff20d3  ab9f5675-b5cb-9e5f-8e20-cb308dbfba32  44511e01-34b8-c1e6-7fe5-60be0ff35d0e  services    3        run      running  2019-04-26T18:14:28+02:00  2019-04-26T18:16:32+02:00

Attributes
consul.datacenter             = localhost
consul.revision               = ea5210a30
consul.server                 = true
consul.version                = 1.4.4
cpu.arch                      = amd64
cpu.frequency                 = 3800
cpu.modelname                 = Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz
cpu.numcores                  = 8
cpu.totalcompute              = 30400
driver.docker                 = 1
driver.docker.bridge_ip       = 172.17.0.1
driver.docker.os_type         = linux
driver.docker.runtimes        = runc
driver.docker.version         = 18.09.4-ce
driver.docker.volumes.enabled = true
driver.exec                   = 1
driver.java                   = 1
driver.java.runtime           = OpenJDK Runtime Environment (build 1.8.0_212-b01)
driver.java.version           = 1.8.0_212
driver.java.vm                = OpenJDK 64-Bit Server VM (build 25.212-b01, mixed mode)
driver.qemu                   = 1
driver.qemu.version           = 3.1.0
driver.raw_exec               = 1
kernel.name                   = linux
kernel.version                = 5.0.7-arch1-1-ARCH
memory.totalbytes             = 33592107008
nomad.advertise.address       = 127.0.0.1:4646
nomad.revision                = 18dd59056ee1d7b2df51256fe900a98460d3d6b9
nomad.version                 = 0.9.0
os.name                       = arch
os.signals                    = SIGQUIT,SIGTTOU,SIGFPE,SIGTRAP,SIGTSTP,SIGINT,SIGURG,SIGTTIN,SIGUSR1,SIGIO,SIGIOT,SIGKILL,SIGSTOP,SIGCONT,SIGILL,SIGPROF,SIGSEGV,SIGSYS,SIGTERM,SIGXFSZ,SIGHUP,SIGWINCH,SIGABRT,SIGBUS,SIGCHLD,SIGPIPE,SIGUSR2,SIGXCPU,SIGALRM
unique.cgroup.mountpoint      = /sys/fs/cgroup
unique.consul.name            = archlinux
unique.hostname               = archlinux
unique.network.ip-address     = 127.0.0.1
unique.storage.bytesfree      = 16795955200
unique.storage.bytestotal     = 16796053504
unique.storage.volume         = tmpfs

Meta