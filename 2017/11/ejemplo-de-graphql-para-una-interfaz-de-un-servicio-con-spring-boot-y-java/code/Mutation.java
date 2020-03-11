package io.github.picodotdev.blogbitix.graphql.resolver;

...

public class Mutation implements GraphQLMutationResolver {

    private LibraryRepository libraryRepository;

    public Mutation(LibraryRepository libraryRepository) {
        this.libraryRepository = libraryRepository;
    }

    public Book addBook(String title, Long author, DataFetchingEnvironment env) throws Exception {
        DefaultGraphQLContext context = (DefaultGraphQLContext) env.getContext();
        return libraryRepository.addBook(title, author, context.getHttpServletRequest().getHeader("User"));
    }
}