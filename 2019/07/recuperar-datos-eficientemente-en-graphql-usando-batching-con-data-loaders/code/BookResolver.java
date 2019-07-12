package io.github.picodotdev.blogbitix.graphql.resolver;

...

public class BookResolver implements GraphQLResolver<Book> {

    ...

    public CompletableFuture<String> getDataLoaderIsbn(Book book, DataFetchingEnvironment environment) throws InterruptedException {
        DataLoader<Book, String> dataLoader = environment.getDataLoader(IsbnDataLoader.class.getSimpleName());
        return dataLoader.load(book);
    }

    ...
}
