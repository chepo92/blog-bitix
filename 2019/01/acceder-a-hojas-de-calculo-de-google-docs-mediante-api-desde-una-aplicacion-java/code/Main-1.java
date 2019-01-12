package io.github.picodotdev.javagoogleapi;

...

public class Main {

    ...

    private static Credential getCredentialsApiKey() {
        return new GoogleCredential().createScoped(SCOPES);
    }

    ...

    public static void main(String... args) throws IOException, GeneralSecurityException {
        NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
        Sheets service = new Sheets.Builder(httpTransport, jsonFactory, getCredentialsApiKey()).setApplicationName(APPLICATION_NAME).build();

        ...
    }
}