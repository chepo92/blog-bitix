package io.github.picodotdev.blogbitix.graphql.misc;

...

public class PermissionException extends Exception implements GraphQLError {

    public PermissionException(String message) {
        super(message);
    }

    @Override
    public Map<String, Object> getExtensions() {
        Map<String, Object> extensions = new LinkedHashMap<>();
        extensions.put("foo", "bar");
        extensions.put("fizz", "whizz");
        return extensions;
    }

    @Override
    public List<SourceLocation> getLocations() {
        return null;
    }

    @Override
    public ErrorType getErrorType() {
        return null;
    }
}
