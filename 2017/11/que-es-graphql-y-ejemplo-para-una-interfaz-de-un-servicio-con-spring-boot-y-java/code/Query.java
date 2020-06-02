package io.github.picodotdev.blogbitix.graphql.resolver;

...

public class Query implements GraphQLQueryResolver {

    private LibraryRepository libraryRepository;

    public Query(LibraryRepository libraryRepository) {
        this.libraryRepository = libraryRepository;
    }

    public List<Book> books(BookFilter filter, DataFetchingEnvironment environment) throws InterruptedException  {
        List<Book> books = libraryRepository.findBooks(filter);
        DefaultGraphQLContext context = environment.getContext();

        ...

        return books;
    }

    public List<Publication> publications() {
        return libraryRepository.findPublications();
    }

    public Book book(Long id) {
        return libraryRepository.findBookById(id).orElse(null);
    }

    public List<Author> authors() {
        return libraryRepository.getAuthors();
    }

    public Author author(Long id) {
        return libraryRepository.findAuthorById(id).orElse(null);
    }

    private SelectedField getField(DataFetchingEnvironment environment, String name) {
        return environment.getSelectionSet().getField(name);
    }
}
