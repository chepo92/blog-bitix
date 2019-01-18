package io.github.picodotdev.blogbitix.javajson;

...

public class Main {

    public static void main(String[] args) throws Exception {
        ...

        jsonp = Json.createPatchBuilder().add("/telefono", "111111111").remove("/direcciones/0").build().apply(jsonp);
        System.out.printf("JSON-P (JsonPatch): %s%n", jsonp.toString());

        ...
}
