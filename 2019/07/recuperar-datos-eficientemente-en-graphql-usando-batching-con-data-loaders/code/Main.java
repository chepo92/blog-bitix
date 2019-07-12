package io.github.picodotdev.blogbitix.graphql;

...

@SpringBootApplication
public class Main {

    ...

    @Bean
    public GraphQLContextBuilder contextBuilder(List<MappedBatchLoaderWithContext<?, ?>> mappedBatchLoaders) {
        return new GraphQLContextBuilder() {
            @Override
            public GraphQLContext build(HttpServletRequest request, HttpServletResponse response) {
                graphql.GraphQLContext data = graphql.GraphQLContext.newContext().build();
                GraphQLContext context = new DefaultGraphQLContext(data, request, response);
                context.setDataLoaderRegistry(buildDataLoaderRegistry(mappedBatchLoaders, context));
                return context;
            }

            @Override
            public GraphQLContext build(Session session, HandshakeRequest request) {
                graphql.GraphQLContext data = graphql.GraphQLContext.newContext().build();
                GraphQLContext context = new DefaultGraphQLContext(data, session, request);
                context.setDataLoaderRegistry(buildDataLoaderRegistry(mappedBatchLoaders, context));
                return context;
            }

            @Override
            public GraphQLContext build() {
                graphql.GraphQLContext data = graphql.GraphQLContext.newContext().build();
                GraphQLContext context = new DefaultGraphQLContext(data);
                context.setDataLoaderRegistry(buildDataLoaderRegistry(mappedBatchLoaders, context));
                return context;
            }
        };
    }

    private DataLoaderRegistry buildDataLoaderRegistry(List<MappedBatchLoaderWithContext<?, ?>> mappedBatchLoaders, GraphQLContext context) {
        DataLoaderRegistry registry = new DataLoaderRegistry();
        for (MappedBatchLoaderWithContext<?, ?> loader : mappedBatchLoaders) {
            registry.register(loader.getClass().getSimpleName(),
                DataLoader.newMappedDataLoader(
                    loader,
                    DataLoaderOptions.newOptions().setBatchLoaderContextProvider(() -> context)
                )
            );
        }
        return registry;
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
