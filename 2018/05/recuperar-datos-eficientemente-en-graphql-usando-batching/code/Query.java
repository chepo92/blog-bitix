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

        SelectedField batchedIsbn = getField(environment, "batchedIsbn");
        if (Objects.nonNull(batchedIsbn)) {
            System.out.printf("Getting %d ISBNs...", books.size());
            Thread.sleep(3000);
            System.out.printf("ok%n");
            Map<Long, String> isbns = books.stream().map(b -> b.getId()).collect(Collectors.toMap(
                Functions.identity(),
                v -> UUID.randomUUID().toString()
            ));;
            context.getData().put("batchedIsbn", isbns);
        }

        SelectedField batchedComments = getField(environment, "batchedComments");
        if (Objects.nonNull(batchedComments)) {
            Thread.sleep(3000);
            String after = (String) batchedComments.getArguments().get("after");
            Long limit = (Long) batchedComments.getArguments().get("limit");
            BookResolver resolver = new BookResolver(libraryRepository);
            Map<Long, CommentsConnection> commentsConnections = books.stream().collect(Collectors.toMap(
                k -> k.getId(),
                v -> resolver.getComments(v, after, limit)
            ));
            context.getData().put("batchedComments", commentsConnections);
        }
        return books;
    }

    ...
}
