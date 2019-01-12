package io.github.picodotdev.blogbitix.graphql;

...

@SpringBootApplication
@ServletComponentScan
public class Main {

    public static final Logger log = LoggerFactory.getLogger(DefaultGraphQLErrorHandler.class);

    @Bean
    public LibraryRepository buildLibraryRepository() {
        return new LibraryRepository();
    }

    @Bean
    public ServletRegistrationBean graphQLServletRegistrationBean(LibraryRepository libraryRepository) throws Exception {
        GraphQLSchema schema = SchemaParser.newParser()
                .schemaString(IOUtils.resourceToString("/library.graphqls", Charset.forName("UTF-8")))
                .resolvers(new Query(libraryRepository), new Mutation(libraryRepository), new BookResolver())
                .build()
                .makeExecutableSchema();

        ...

        return new ServletRegistrationBean(new SimpleGraphQLServlet(schema, new DefaultExecutionStrategyProvider(), null, null, null, errorHandler, contextBuilder, null), "/library");
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
