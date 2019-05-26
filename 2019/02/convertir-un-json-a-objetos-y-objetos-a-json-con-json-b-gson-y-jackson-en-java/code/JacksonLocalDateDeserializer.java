package io.github.picodotdev.blogbitix.javajson;

...

public class JacksonLocalDateDeserializer extends JsonDeserializer<LocalDate> {

    @Override
    public LocalDate deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        return LocalDate.parse(p.getValueAsString(), DateTimeFormatter.ISO_LOCAL_DATE);
    }
}