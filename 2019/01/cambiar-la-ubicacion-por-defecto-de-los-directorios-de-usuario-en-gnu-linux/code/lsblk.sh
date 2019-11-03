$ lsblk -o +uuid,name
NAME          MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT                       UUID                                   NAME
sda             8:0    0 465,8G  0 disk                                                                          sda
└─sda1          8:1    0 465,8G  0 part  /run/media/picodotdev/bmovenegro f0fe2765-00aa-4c2a-adef-83a3264b8f4f   sda1
nvme0n1       259:0    0 465,8G  0 disk                                                                          nvme0n1
├─nvme0n1p1   259:1    0   511M  0 part  /boot                            7869-6341                              nvme0n1p1
└─nvme0n1p2   259:2    0 465,3G  0 part                                   3067348f-58f4-48fd-be4b-7cb3aae80dd1   nvme0n1p2
  └─lvm       254:0    0 465,3G  0 crypt                                  c0fVvN-1QTv-HccD-tyEt-cl49-GM7M-xDNGJQ lvm
    └─vg-root 254:1    0 465,3G  0 lvm   /                                4b561dc9-bbd6-4433-bc53-c879bde68042   vg-root