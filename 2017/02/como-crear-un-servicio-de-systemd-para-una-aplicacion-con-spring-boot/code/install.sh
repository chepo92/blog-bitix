./gradlew build
sudo mkdir /var/apps
sudo cp build/libs/SpringBootJaxrs-0.0.1-SNAPSHOT.jar /var/apps
sudo cp misc/spring-boot-jaxrs.service /etc/systemd/system
sudo cp misc/spring-boot-jaxrs-postgres.service /etc/systemd/system
sudo cp misc/postgres.service /etc/systemd/system
sudo chmod ugo+x /etc/systemd/system/spring-boot-jaxrs.service
sudo chmod ugo+x /etc/systemd/system/spring-boot-jaxrs-postgres.service
sudo chmod ugo+x /etc/systemd/system/postgres.service
sudo systemctl daemon-reload