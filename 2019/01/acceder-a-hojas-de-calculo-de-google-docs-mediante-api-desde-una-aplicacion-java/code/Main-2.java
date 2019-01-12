package io.github.picodotdev.javagoogleapi;

...

public class Main {

    ...
    
    private static final String CREDENTIALS_FILE_PATH = "/blogbitix-119471bc8ebf.json";

    ...

    private static Credential getCredentialsServiceAccount(NetHttpTransport httpTransport, JsonFactory jsonFactory) throws IOException {
        InputStream in = Main.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
        return GoogleCredential.fromStream(in, httpTransport, jsonFactory).createScoped(SCOPES);
    }

    public static void main(String... args) throws IOException, GeneralSecurityException {
        NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
        Sheets service = new Sheets.Builder(httpTransport, jsonFactory, getCredentialsServiceAccount(httpTransport, jsonFactory)).setApplicationName(APPLICATION_NAME).build();

        ...
    }
}