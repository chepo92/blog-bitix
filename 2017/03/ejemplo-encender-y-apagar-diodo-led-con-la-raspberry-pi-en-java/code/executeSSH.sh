$ ./gradlew upload
$ ssh -t 192.168.1.101 'cd /home/raspberrypi/scripts/javaraspberrypi && sudo java -classpath "*" io.github.picodotdev.blogbitix.javaraspberrypi.PinBlink'