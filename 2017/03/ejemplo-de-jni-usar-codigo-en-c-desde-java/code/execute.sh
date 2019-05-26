$ ./gradlew build
$ java -classpath build/classes/main:build/resources/main io.github.picodotdev.blogbitix.javaraspberrypi.JniHelloWorld
$ ssh -t 192.168.1.101 'cd /home/raspberrypi/scripts/javaraspberrypi && java -classpath "*" io.github.picodotdev.blogbitix.javaraspberrypi.JniHelloWorld'