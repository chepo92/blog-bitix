package io.github.picodotdev.blogbitix.graphql;

...

public class LibraryRepository {

    ...
    private List<Book> books;
    private List<Magazine> magazines;

    public LibraryRepository() {
        this.sequence = 0l;
        ...
        this.books = new ArrayList<>();
        this.magazines = new ArrayList<>();

        ...

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

    public List<Publication> findPublications() {
        List<Publication> publications = new ArrayList<>();
        publications.addAll(books);
        publications.addAll(magazines);
        return publications;
    }

    ...
}
