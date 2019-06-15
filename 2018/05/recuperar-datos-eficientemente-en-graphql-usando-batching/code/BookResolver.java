package io.github.picodotdev.blogbitix.graphql.resolver;

...

public class BookResolver implements GraphQLResolver<Book> {

    private LibraryRepository libraryRespository;

    public BookResolver(LibraryRepository libraryRespository) {
        this.libraryRespository = libraryRespository;
    }

    public String getIsbn(Book book) throws InterruptedException {
        System.out.printf("Getting ISBN %d...", book.getId());
        Thread.sleep(3000);
        System.out.printf("ok%n");
        return UUID.randomUUID().toString();
    }

    public String getBatchedIsbn(Book book, DataFetchingEnvironment environment) throws InterruptedException {
        DefaultGraphQLContext context = environment.getContext();
        Map<Long, String> isbns = (Map<Long, String>) context.getData().get("batchedIsbn");
        return isbns.get(book.getId());
    }

    public CommentsConnection getComments(Book book, String after, Long limit) {
        ...
    }

    public CommentsConnection getBatchedComments(Book book, String after, Long limit, DataFetchingEnvironment environment) {
        DefaultGraphQLContext context = environment.getContext();
        Map<Long, CommentsConnection> batchedComments = (Map<Long, CommentsConnection>) context.getData().get("batchedComments");
        return batchedComments.get(book.getId());
    }
}
