$ gcc -I"/usr/lib/jvm/java-8-openjdk/include" -I"/usr/lib/jvm/java-8-openjdk/include/linux" -shared -fPIC -L/usr/lib -lwiringPi -o libdht11-arm.so Dht11.c
