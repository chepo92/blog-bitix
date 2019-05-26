// ls -la
System.out.println();
System.out.println("# ls -la");
Files.walk(relative, 1).sorted((p1, p2) -> {
    return p1.getFileName().toString().compareTo(p2.getFileName().toString());
}).forEach(path -> {
    try {
        System.out.println(toLine(path));
    } catch (Exception e) {
        e.printStackTrace();
    }
});

...

private static String toLine(Path path) throws IOException  {
    Map<String, Object> attributtes = Files.readAttributes(path, "posix:*");
    PosixFileAttributes posixFileAttributes = Files.getFileAttributeView(path, PosixFileAttributeView.class).readAttributes();
    String type = (posixFileAttributes.isDirectory()) ? "d": "-";
    String permissions = PosixFilePermissions.toString(posixFileAttributes.permissions());
    String owner = posixFileAttributes.owner().getName();
    String group = posixFileAttributes.group().getName();
    long size = posixFileAttributes.size();
    ZonedDateTime date = posixFileAttributes.lastModifiedTime().toInstant().atZone(ZoneId.of("Europe/Madrid"));
    String lasModified = DateTimeFormatter.ofPattern("d MMM HH:mm").format(date);
    String name = path.getFileName().toString();
    return String.format("%s%s %16s %10s %5d %12s %s", type, permissions, owner, group, size, lasModified, name);
}