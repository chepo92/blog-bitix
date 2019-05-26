$ sudo su
# crontab -e
0 */6 * * * sleep ${RANDOM:0:2}m ; certbot renew --quiet --renew-hook "systemctl restart nginx.service"