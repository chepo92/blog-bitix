package io.github.picodotdev.blogbitix.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import java.util.List;

public class Query implements GraphQLQueryResolver {
    
    private LibraryRepository libraryRepository;

    public Query(LibraryRepository libraryRepository) {
        this.libraryRepository = libraryRepository;
    }

    ...

    public List<Book> books(BookFilter filter) {
        return libraryRepository.findBooks(filter);
    }

    ...
}
