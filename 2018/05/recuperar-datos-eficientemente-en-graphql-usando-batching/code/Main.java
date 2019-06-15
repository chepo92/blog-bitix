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

    @Bean
    public GraphQLContextBuilder contextBuilder() {
        return new GraphQLContextBuilder() {
            @Override
            public GraphQLContext build(HttpServletRequest request, HttpServletResponse response) {
                graphql.GraphQLContext data = graphql.GraphQLContext.newContext().build();
                GraphQLContext context = new DefaultGraphQLContext(data, request, response);
                return context;
            }

            @Override
            public GraphQLContext build(Session session, HandshakeRequest request) {
                graphql.GraphQLContext data = graphql.GraphQLContext.newContext().build();
                GraphQLContext context = new DefaultGraphQLContext(data, session, request);
                return context;
            }

            @Override
            public GraphQLContext build() {
                graphql.GraphQLContext data = graphql.GraphQLContext.newContext().build();
                GraphQLContext context = new DefaultGraphQLContext(data);
                return context;
            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
