$ mkdir java-application && cd java-application
$ gradle init --type java-application --test-framework spock
$ tree java-application/
$ tree java-application
java-application
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    ├── main
    │   └── java
    │       └── App.java
    └── test
        └── groovy
            └── AppTest.groovy

7 directories, 8 files

$ mkdir java-library && cd java-library
$ gradle init --type java-library --test-framework spock
$ tree java-library/
java-library/
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    ├── main
    │   └── java
    │       └── Library.java
    └── test
        └── groovy
            └── LibraryTest.groovy

7 directories, 8 files