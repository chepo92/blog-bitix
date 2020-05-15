$ toolbox run dnf search openjdk
Last metadata expiration check: 5 days, 18:10:47 ago on Sun May 10 00:09:19 2020.
======================= Name & Summary Matched: openjdk ========================
java-11-openjdk-demo.x86_64 : OpenJDK Demos 11
java-1.8.0-openjdk-demo.x86_64 : OpenJDK Demos 8
java-latest-openjdk-demo.x86_64 : OpenJDK Demos 14
java-11-openjdk-jmods.x86_64 : JMods for OpenJDK 11
java-11-openjdk-src.x86_64 : OpenJDK Source Bundle 11
java-11-openjdk.x86_64 : OpenJDK Runtime Environment 11
java-11-openjdk.i686 : OpenJDK Runtime Environment 11
java-latest-openjdk-jmods.x86_64 : JMods for OpenJDK 14
java-1.8.0-openjdk-src.x86_64 : OpenJDK Source Bundle 8
java-latest-openjdk-src.x86_64 : OpenJDK Source Bundle 14
....

$ sudo dnf install java-11-openjdk.x86_64
$ java -version