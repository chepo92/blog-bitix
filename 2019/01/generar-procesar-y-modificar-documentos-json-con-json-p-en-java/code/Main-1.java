package io.github.picodotdev.blogbitix.javajson;

...

public class Main {

    public static void main(String[] args) throws Exception {
        Comprador comprador = buildComprador();
        String json = "";

        // JSON-P
        JsonObject jsonp = Json.createObjectBuilder()
            .add("name", comprador.getNombre())
            .add("edad", comprador.getEdad())
            .add("direcciones", Json.createArrayBuilder().add(
                Json.createObjectBuilder()
                    .add("calle", comprador.getDirecciones().get(0).getCalle())
                    .add("ciudad", comprador.getDirecciones().get(0).getCiudad())
                    .add("codigoPostal", comprador.getDirecciones().get(0).getCodigoPostal())
                    .add("pais", comprador.getDirecciones().get(0).getPais())
                    .build())
                .add(Json.createObjectBuilder()
                    .add("calle", comprador.getDirecciones().get(1).getCalle())
                    .add("ciudad", comprador.getDirecciones().get(1).getCiudad())
                    .add("codigoPostal", comprador.getDirecciones().get(1).getCodigoPostal())
                    .add("pais", comprador.getDirecciones().get(1).getPais()))
                    .build()
            ).build();
        json = jsonp.toString();
        jsonp = Json.createReader(new StringReader(json)).readObject();
        System.out.printf("JSON-P: %s%n", json);
        System.out.printf("JSON-P (JsonObject): %s%n", jsonp.toString());
        
        ...
    }

    private static Comprador buildComprador() {
        Comprador comprador = new Comprador();
        comprador.setNombre("Juan");
        comprador.setEdad(30);
        comprador.getDirecciones().add(buildDireccion());
        comprador.getDirecciones().add(buildDireccion());
        return comprador;
    }

    private static Direccion buildDireccion() {
        return new Direccion("calle", "ciudad", "codigoPostal", "pais");
    }
}
