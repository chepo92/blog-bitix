$ jlink --module-path build/classes/java/main --add-modules "blogbitix.http" --launcher "run=blogbitix.http/io.github.picodotdev.blogbitix.http.Main" --output build/distributions/jlink

$ ./gradew jlink