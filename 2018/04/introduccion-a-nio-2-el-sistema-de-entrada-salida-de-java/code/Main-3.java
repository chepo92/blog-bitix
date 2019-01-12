// File operations
Path file = Paths.get("build.gradle");
Path backup = Paths.get("build.gradle.backup");
Path rename = Paths.get("build.gradle.backup.1");
Files.copy(file, backup, StandardCopyOption.REPLACE_EXISTING);
Files.move(backup, rename, StandardCopyOption.REPLACE_EXISTING);
Files.delete(rename);