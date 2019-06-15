package io.github.picodotdev.blogbitix.graphql.resolver;

...

public class Mutation implements GraphQLMutationResolver {

    private LibraryRepository libraryRepository;

    public Mutation(LibraryRepository libraryRepository) {
        this.libraryRepository = libraryRepository;
    }

    public Book addBook(String title, Long author, DataFetchingEnvironment env) throws Exception {
        //String user = request.getHeader("User");
        return libraryRepository.addBook(title, author, env.<AuthContext>getContext());
    }
}