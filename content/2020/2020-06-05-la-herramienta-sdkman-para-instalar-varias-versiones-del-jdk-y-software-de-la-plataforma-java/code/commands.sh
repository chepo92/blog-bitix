$ sdk list java
================================================================================
Available Java Versions
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 AdoptOpenJDK  |     | 14.0.1.j9    | adpt    |            | 14.0.1.j9-adpt      
               |     | 14.0.1.hs    | adpt    |            | 14.0.1.hs-adpt      
               |     | 13.0.2.j9    | adpt    |            | 13.0.2.j9-adpt      
               |     | 13.0.2.hs    | adpt    |            | 13.0.2.hs-adpt      
               |     | 12.0.2.j9    | adpt    |            | 12.0.2.j9-adpt      
               |     | 12.0.2.hs    | adpt    |            | 12.0.2.hs-adpt      
               |     | 11.0.7.j9    | adpt    |            | 11.0.7.j9-adpt      
               |     | 11.0.7.hs    | adpt    |            | 11.0.7.hs-adpt      
               |     | 8.0.252.j9   | adpt    |            | 8.0.252.j9-adpt     
               |     | 8.0.252.hs   | adpt    |            | 8.0.252.hs-adpt     
 Amazon        |     | 11.0.7       | amzn    |            | 11.0.7-amzn         
               |     | 8.0.252      | amzn    |            | 8.0.252-amzn        
...
 GraalVM       |     | 20.1.0.r11   | grl     |            | 20.1.0.r11-grl      
...
 Java.net      |     | 15.ea.26     | open    |            | 15.ea.26-open       
               |     | 14.0.1       | open    |            | 14.0.1-open         
               |     | 13.0.2       | open    |            | 13.0.2-open         
               |     | 12.0.2       | open    |            | 12.0.2-open         
               |     | 11.0.7       | open    |            | 11.0.7-open         
               |     | 10.0.2       | open    |            | 10.0.2-open         
               |     | 9.0.4        | open    |            | 9.0.4-open          
               |     | 8.0.252      | open    |            | 8.0.252-open        
...  
================================================================================
Use the Identifier for installation:

    $ sdk install java 11.0.3.hs-adpt
================================================================================

$ sdk install java 8.0.252-open
$ sdk install java 11.0.7-open
$ sdk install java 14.0.1-open
$ sdk default java 11.0.7-open

$ sdk use java 8.0.252-open
$ java -version
openjdk version "1.8.0_252"
OpenJDK Runtime Environment (build 1.8.0_252-b09)
OpenJDK 64-Bit Server VM (build 25.252-b09, mixed mode)

$ sdk use java 11.0.7-open
$ java -version
openjdk version "11.0.7" 2020-04-14
OpenJDK Runtime Environment 18.9 (build 11.0.7+10)
OpenJDK 64-Bit Server VM 18.9 (build 11.0.7+10, mixed mode)

$ sdk use java 14.0.1-open
$ java -version
openjdk version "14.0.1" 2020-04-14
OpenJDK Runtime Environment (build 14.0.1+7)
OpenJDK 64-Bit Server VM (build 14.0.1+7, mixed mode, sharing)

$ sdk upgrade