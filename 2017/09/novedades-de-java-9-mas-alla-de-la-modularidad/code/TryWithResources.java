// A final resource
final Resource resource1 = new Resource("resource1");
// An effectively final resource
Resource resource2 = new Resource("resource2");

// Java 7, 8
try (Resource r1 = resource1;
     Resource r2 = resource2) {
    ...
}

// New and improved try-with-resources statement in Java SE 9
try (resource1;
     resource2) {
    ...
}