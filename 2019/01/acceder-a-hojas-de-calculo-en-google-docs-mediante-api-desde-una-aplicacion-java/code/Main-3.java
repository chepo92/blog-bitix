package io.github.picodotdev.javagoogleapi;

...

public class Main {

    ...

    public static void main(String... args) throws IOException, GeneralSecurityException {
        ...

        Sheets service = new Sheets.Builder(httpTransport, jsonFactory, getCredentialsApiKey()).setApplicationName(APPLICATION_NAME).build();
        ValueRange response = service.spreadsheets().values().get(SPREADSHEET_ID, RANGE).setKey(API_KEY).execute();
        List<List<Object>> values = response.getValues();

        if (values == null || values.isEmpty()) {
            System.out.println("No data found.");
            return;
        }

        for (List<Object> row : values) {
            System.out.println(row.stream().map(Object::toString).collect(java.util.stream.Collectors.joining(", ")));
        }
    }
}