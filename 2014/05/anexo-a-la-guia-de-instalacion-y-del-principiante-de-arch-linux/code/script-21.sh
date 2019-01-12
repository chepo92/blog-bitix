# pacman -S grub efibootmgr dosfstools
# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub --recheck
# grub-mkconfig -o /boot/grub/grub.cfg