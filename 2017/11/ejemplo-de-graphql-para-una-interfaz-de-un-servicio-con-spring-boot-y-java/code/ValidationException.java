package io.github.picodotdev.blogbitix.graphql.misc;

...

public class ValidationException extends Exception implements GraphQLError {

    public ValidationException(String message) {
        super(message);
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
