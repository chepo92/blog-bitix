// Path
System.out.println("# info");
Path relative = Paths.get(".");
Path absolute = relative.toAbsolutePath().normalize();

System.out.printf("Relative: %s%n", relative);
System.out.printf("Absolute: %s%n", absolute);
System.out.printf("Name count: %d%n", absolute.getNameCount());
System.out.printf("Parent: %s%n", absolute.getParent());
System.out.printf("Subpath(0, 2): %s%n", absolute.subpath(0, 2));