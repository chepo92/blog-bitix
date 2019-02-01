package io.github.picodotdev.blogbitix.javajson;

...

public class Main {

    public static void main(String[] args) throws Exception {
        Comprador comprador = buildComprador();
        ...

        // JSON-B
        JsonbConfig config = new JsonbConfig().withAdapters(new JsonbLocalDateAdapter());

        Jsonb jsonb = JsonbBuilder.create(config);
        json = jsonb.toJson(comprador);
        comprador = jsonb.fromJson(json, Comprador.class);
        System.out.printf("JSON-B: %s%n", json);
        System.out.printf("JSON-B (comprador): %s, %s, %d%n", comprador.getNombre(), comprador.getFechaNacimiento(), comprador.getDirecciones().size());

        // Gson
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(LocalDate.class, new GsonLocalDateTypeAdapter());
        Gson gson = builder.create();;

        json = gson.toJson(comprador);
        comprador = gson.fromJson(json, Comprador.class);
        System.out.printf("Gson: %s%n", json);
        System.out.printf("Gson (comprador): %s, %s, %d%n", comprador.getNombre(), comprador.getFechaNacimiento(), comprador.getDirecciones().size());

        // Jackson
        ObjectMapper mapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addSerializer(LocalDate.class, new JacksonLocalDateSerializer());
        module.addDeserializer(LocalDate.class, new JacksonLocalDateDeserializer());
        mapper.registerModule(module);

        json = mapper.writeValueAsString(comprador);
        comprador = mapper.readValue(json, Comprador.class);
        System.out.printf("Jackson: %s%n", json);
        System.out.printf("Jackson (comprador): %s, %s, %d%n", comprador.getNombre(), comprador.getFechaNacimiento(), comprador.getDirecciones().size());
        
        ...
    }

    private static Comprador buildComprador() {
        Comprador comprador = new Comprador();
        comprador.setNombre("Juan");
        comprador.setFechaNacimiento(LocalDate.now());
        comprador.getDirecciones().add(buildDireccion());
        comprador.getDirecciones().add(buildDireccion());
        return comprador;
    }

    private static Direccion buildDireccion() {
        return new Direccion("calle", "ciudad", "codigoPostal", "pais");
    }
}
