package io.github.picodotdev.blogbitix.graphql;

...

@SpringBootApplication
public class Main {

    public static final Logger logger = LoggerFactory.getLogger(Main.class);

    @Bean
    public LibraryRepository buildLibraryRepository() {
        return new LibraryRepository();
    }

    @Bean
    public GraphQLSchema graphQLSchema(LibraryRepository libraryRepository) throws IOException {
        return SchemaParser.newParser()
                .schemaString(IOUtils.resourceToString("/library.graphqls", Charset.forName("UTF-8")))
                .resolvers(new Query(libraryRepository), new Mutation(libraryRepository), new BookResolver(libraryRepository), new MagazineResolver(libraryRepository))
                .scalars(GraphQLScalarType.newScalar().name("LocalDate").description("LocalDate scalar").coercing(new LocalDateCoercing()).build())
                .dictionary(Magazine.class)
                .build()
                .makeExecutableSchema();
    }

    @Bean
    public GraphQLErrorHandler graphQLErrorHandler() {
        return new GraphQLErrorHandler() {
            @Override
            public List<GraphQLError> processErrors(List<GraphQLError> errors) {
                List<GraphQLError> clientErrors = errors.stream()
                        .filter(this::isClientError)
                        .collect(Collectors.toList());

                List<GraphQLError> serverErrors = errors.stream()
                        .filter(e -> !isClientError(e))
                        .map(GraphQLErrorAdapter::new)
                        .collect(Collectors.toList());

                serverErrors.forEach(error -> {
                    logger.error("Error executing query ({}): {}", error.getClass().getSimpleName(), error.getMessage());
                });

                List<GraphQLError> e = new ArrayList<>();
                e.addAll(clientErrors);
                e.addAll(serverErrors);
                return e;
            }

            protected List<GraphQLError> filterGraphQLErrors(List<GraphQLError> errors) {
                return errors.stream()
                        .filter(this::isClientError)
                        .collect(Collectors.toList());
            }

            protected boolean isClientError(GraphQLError error) {
                return !(error instanceof ExceptionWhileDataFetching || error instanceof Throwable);
            }
        };
    }

    ...

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
