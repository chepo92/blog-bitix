cd "C:\Program Files\Oracle\VirtualBox\"
VBoxManage.exe modifyvm "macOS 10.15 Catalina" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
VBoxManage.exe setextradata "macOS 10.15 Catalina" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac11,3"
VBoxManage.exe setextradata "macOS 10.15 Catalina" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage.exe setextradata "macOS 10.15 Catalina" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Mac-F2238BAE"
VBoxManage.exe setextradata "macOS 10.15 Catalina" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage.exe setextradata "macOS 10.15 Catalina" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1