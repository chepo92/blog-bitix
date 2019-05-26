$ awk '/sd|nvme/ {print $3"\t"($6 * 512) / (1024 * 1024)"\t"($10 * 512) / (1024 * 1024)}' /proc/diskstats
