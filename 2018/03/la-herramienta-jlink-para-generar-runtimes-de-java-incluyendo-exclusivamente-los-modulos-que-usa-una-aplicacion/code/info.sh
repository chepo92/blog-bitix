$ du -sh build/distributions/jlink
 38M	build/distributions/jlink

$ build/distributions/jlink/bin/java --list-modules
blogbitix.http
java.base@10
jdk.incubator.httpclient@10

$ tree build/distributions/jlink
build/distributions/jlink
├── bin
│   ├── java
│   ├── keytool
│   └── run
├── conf
│   ├── net.properties
│   └── security
│       ├── java.policy
│       ├── java.security
│       └── policy
│           ├── README.txt
│           ├── limited
│           │   ├── default_US_export.policy
│           │   ├── default_local.policy
│           │   └── exempt_local.policy
│           └── unlimited
│               ├── default_US_export.policy
│               └── default_local.policy
├── include
│   ├── classfile_constants.h
│   ├── darwin
│   │   └── jni_md.h
│   ├── jni.h
│   ├── jvmti.h
│   └── jvmticmlr.h
├── legal
│   ├── java.base
│   │   ├── COPYRIGHT
│   │   ├── LICENSE
│   │   ├── aes.md
│   │   ├── asm.md
│   │   ├── cldr.md
│   │   ├── icu.md
│   │   ├── public_suffix.md
│   │   └── zlib.md
│   └── jdk.incubator.httpclient
│       ├── COPYRIGHT -> ../java.base/COPYRIGHT
│       └── LICENSE -> ../java.base/LICENSE
├── lib
│   ├── classlist
│   ├── jli
│   │   └── libjli.dylib
│   ├── jrt-fs.jar
│   ├── jspawnhelper
│   ├── jvm.cfg
│   ├── libjava.dylib
│   ├── libjimage.dylib
│   ├── libjsig.dylib
│   ├── libnet.dylib
│   ├── libnio.dylib
│   ├── libosxsecurity.dylib
│   ├── libverify.dylib
│   ├── libzip.dylib
│   ├── modules
│   ├── security
│   │   ├── blacklist
│   │   ├── blacklisted.certs
│   │   ├── cacerts
│   │   ├── default.policy
│   │   ├── public_suffix_list.dat
│   │   └── trusted.libraries
│   ├── server
│   │   ├── Xusage.txt
│   │   ├── libjsig.dylib
│   │   └── libjvm.dylib
│   └── tzdb.dat
└── release