sudo systemctl start docker.service
docker run --name postgres postgres

sudo systemctl start spring-boot-jaxrs.service
sudo systemctl status spring-boot-jaxrs.service
sudo systemctl stop spring-boot-jaxrs.service
sudo systemctl start spring-boot-jaxrs-postgres.service
sudo systemctl status spring-boot-jaxrs-postgres.service
sudo systemctl stop spring-boot-jaxrs-postgres.service