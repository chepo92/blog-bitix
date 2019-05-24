package io.github.picodotdev.plugintapestry.spring;

...

@Configuration
@ComponentScan({ "io.github.picodotdev.plugintapestry" })
@EnableTransactionManagement
public class AppConfiguration {

    @Bean(destroyMethod = "close")
    public DataSource dataSource() {
        BasicDataSource ds = new BasicDataSource();
        ds.setDriverClassName(Driver.class.getCanonicalName());
        ds.setUrl("jdbc:h2:./misc/database/app");
        ds.setUsername("sa");
        ds.setPassword("sa");
        return ds;
    }

    ...

    @Bean
    public ConnectionProvider connectionProvider(DataSource dataSource) {
        return new DataSourceConnectionProvider(dataSource);
    }

    @Bean
    public ExecuteListenerProvider executeListenerProvider() {
        return new ExecuteListenerProvider() {
            @Override
            public ExecuteListener provide() {
                return new JooqExecuteListener();
            }
        };
    }

    @Bean
    public org.jooq.Configuration config(ConnectionProvider connectionProvider, ExecuteListenerProvider executeListenerProvider) {
        DefaultConfiguration config = new DefaultConfiguration();
        config.set(connectionProvider);
        config.set(SQLDialect.H2);
        config.set(executeListenerProvider);
        return config;
    }

    @Bean
    public DSLContext dsl(org.jooq.Configuration config) {
        return DSL.using(config);
    }

    ...
}
