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

    ...

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
