// Read
System.out.println("");
System.out.println("# build.gradle");
Files.readAllLines(file).stream().forEach(l -> {
    System.out.println(l);
});