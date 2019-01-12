$ java -version
java version "10.0.1" 2018-04-17
Java(TM) SE Runtime Environment 18.3 (build 10.0.1+10)
Java HotSpot(TM) 64-Bit Server VM 18.3 (build 10.0.1+10, mixed mode)

$ jshell
|  Welcome to JShell -- Version 10.0.1
|  For an introduction type: /help intro

jshell> String string = null;
string ==> null

jshell> System.out.println(string.toLowerCase());
|  java.lang.NullPointerException thrown
|        at (#2:1)

// Optional
jshell> Optional<String> optional = Optional.ofNullable(string);
optional ==> Optional.empty

jshell> if (optional.isPresent()) {
   ...>   System.out.println(optional.get().toLowerCase());
   ...> }

jshell> System.out.println(optional.orElse("null").toLowerCase());
null