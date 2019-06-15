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

    ...
}
