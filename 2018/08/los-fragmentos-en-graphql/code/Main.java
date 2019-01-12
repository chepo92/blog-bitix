package io.github.picodotdev.blogbitix.graphql;

...

@SpringBootApplication
@ServletComponentScan
public class Main {

    ...

    @Bean
    public ServletRegistrationBean graphQLServletRegistrationBean(LibraryRepository libraryRepository) throws Exception {
        GraphQLSchema schema = SchemaParser.newParser()
                .schemaString(IOUtils.resourceToString("/library.graphqls", Charset.forName("UTF-8")))
                .resolvers(new Query(libraryRepository), new Mutation(libraryRepository), new BookResolver(libraryRepository), new MagazineResolver(libraryRepository))
                .scalars(new GraphQLScalarType("LocalDate", "LocalDate scalar", new LocalDateCoercing()))
                .dictionary(Magazine.class)
                .build()
                .makeExecutableSchema();
        ...
    }

    ...  
}