$ yaourt -S cups hplip
# systemctl start org.cups.cupsd.service
# systemctl start avahi-daemon.service
# systemctl enable org.cups.cupsd.service
# systemctl enable avahi-daemon.service