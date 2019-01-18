package io.github.picodotdev.blogbitix.javajson;

...

public class Main {

    public static void main(String[] args) throws Exception {
        ...

        JsonPatch jsonPatch = Json.createPatchBuilder().add("/telefono", "111111111").remove("/direcciones/0").build();
        jsonp = Json.createPatchBuilder().add("/telefono", "111111111").remove("/direcciones/0").build().apply(jsonp);
        System.out.printf("JSON-P (JsonPatch): %s%n", jsonPatch.toString());
        System.out.printf("JSON-P (JsonObject): %s%n", jsonp.toString());

        ...
}
