package io.github.picodotdev.blogbitix.javajson;

...

public class JsonbLocalDateAdapter implements JsonbAdapter<LocalDate, JsonString> {

    @Override
    public JsonString adaptToJson(LocalDate obj) throws Exception {
        return Json.createValue(obj.format(DateTimeFormatter.ISO_LOCAL_DATE));
    }

    @Override
    public LocalDate adaptFromJson(JsonString obj) throws Exception {
        return LocalDate.parse(obj.getString(), DateTimeFormatter.ISO_LOCAL_DATE);
    }
}
