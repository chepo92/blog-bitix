package io.github.picodotdev.blogbitix.graphql;

...

public class Magazine extends Publication {
    
    private Long id;
    private String name;
    private Long pages;

    public Magazine(Long id, String name, Long pages) {
        this.id = id;
        this.name = name;
        this.pages = pages;
    }
    
    ...
}