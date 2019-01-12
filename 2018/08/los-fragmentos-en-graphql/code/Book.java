package io.github.picodotdev.blogbitix.graphql;

...

public class Book extends Publication {
    
    private Long id;
    private String title;
    private Author author;
    private LocalDate date;
    private List<Comment> comments;

    public Book(Long id, String title, Author author, LocalDate date, List<Comment> comments) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
        this.comments = comments;
    }

    ...
}