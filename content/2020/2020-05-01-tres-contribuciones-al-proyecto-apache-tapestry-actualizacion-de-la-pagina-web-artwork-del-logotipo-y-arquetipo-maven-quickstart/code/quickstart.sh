$ mvn archetype:generate -B \
                       -DarchetypeGroupId=org.apache.tapestry \
                       -DarchetypeArtifactId=quickstart \
                       -DarchetypeVersion=5.5.0 \
                       -DgroupId=com.foo \
                       -DartifactId=foo \
                       -Dpackage=com.foo \
                       -Dversion=1.0
$ ./gradlew run