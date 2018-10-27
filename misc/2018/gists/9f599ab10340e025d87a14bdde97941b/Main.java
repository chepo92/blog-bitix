plugins {
    id 'java'
    id 'application'
}

mainClassName = 'io.github.picodotdev.blogbitix.uberjar.Main'

repositories {
    jcenter()
}

dependencies {
    compile 'org.fusesource.jansi:jansi:1.17.1'

}

jar {
    manifest {
        attributes 'Main-Class': mainClassName
        attributes 'Class-Path': configurations.compile.collect { it.name }.join(' ')
    }
}

task copyDependencies(type: Copy) {
    group = 'Custom'
    description = 'Copies runtime dependencies'
    from configurations.runtime
    into "$buildDir/dependencies"
}

task uberJar(type: Jar) {
    manifest {
        attributes 'Main-Class': mainClassName
    }
    classifier 'uberjar'
    from { configurations.compile.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
}

task sourcesJar(type: Jar) {
    group = 'Custom'
    description = 'Builds sources jar'
    classifier 'sources'
    from sourceSets.main.allSource
}

task javadocJar(type: Jar, dependsOn: javadoc) {
    group = 'Custom'
    description = 'Builds javadoc jar'
    classifier 'javadocdoc'
    from javadoc.destinationDir
}

artifacts {
    archives uberJar
    archives sourcesJar
    archives javadocJar
}

distributions {
    main {
        baseName = "$archivesBaseName-bin"
    }
    docs {
        baseName = "$archivesBaseName-docs"
        contents {
            from(libsDir) {
                include sourcesJar.archiveName
                include javadocJar.archiveName
            }
        }
    }
}

jar.dependsOn copyDependencies
distZip.dependsOn sourcesJar, javadocJar