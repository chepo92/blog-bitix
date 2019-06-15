package io.github.picodotdev.blogbitix.graphql.repository;

...

public class LibraryRepository {

    private long sequence;
    private List<Book> books;
    private List<Comment> comments;
    private List<Author> authors;
    private List<Magazine> magazines;

    public LibraryRepository() {
        this.sequence = 0l;
        this.books = new ArrayList<>();
        this.comments = new ArrayList<>();
        this.authors = new ArrayList<>();
        this.magazines = new ArrayList<>();

        Author a1 = new Author(nextId(), "Philip K. Dick");
        Author a2 = new Author(nextId(), "George R. R. Martin");
        Author a3 = new Author(nextId(), "Umberto Eco");
        Author a4 = new Author(nextId(), "Andreas Eschbach");
        Author a5 = new Author(nextId(), "Ernest Cline");
        Author a6 = new Author(nextId(), "Anónimo");

        this.authors.addAll(List.of(a1, a2, a3, a4, a5, a6));

        LongStream.range(1, 10).forEach(i -> this.comments.add(new Comment(i,"Comment " + i)));

        this.books.addAll(
            List.of(
                new Book(nextId(), "Ojo en el cielo", a1, LocalDate.of(1957, 1, 1), this.comments),
                new Book(nextId(), "Muerte de la luz", a2, LocalDate.of(1977, 1, 1), this.comments),
                new Book(nextId(), "El nombre de la rosa", a3, LocalDate.of(1980, 1, 1), this.comments),
                new Book(nextId(), "Los tejedores de cabellos", a4, LocalDate.of(1995, 1, 1), this.comments),
                new Book(nextId(), "Ready Player One", a5, LocalDate.of(2011, 1, 1), this.comments)
            )
        );

        this.magazines.addAll(
            List.of(
                new Magazine(nextId(), "Muy interesante", 65L),
                new Magazine(nextId(), "PC Actual", 90L)
            )
        );
    }

    ...
}
