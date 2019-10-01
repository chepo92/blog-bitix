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

    // Hibernate
    @Bean(name = "sessionFactory")
    public LocalSessionFactoryBean sessionFactoryBean(DataSource dataSource) {
        Map<String, Object> m = new HashMap<>();
        m.put("hibernate.dialect", H2Dialect.class.getCanonicalName());
        m.put("hibernate.hbm2ddl.auto", "validate");
        // Debug
        m.put("hibernate.generate_statistics", true);
        m.put("hibernate.show_sql", true);

        Properties properties = new Properties();
        properties.putAll(m);

        //
        LocalSessionFactoryBean sf = new LocalSessionFactoryBean();
        sf.setDataSource(dataSource);
        sf.setPackagesToScan("io.github.picodotdev.plugintapestry.entities");
        sf.setHibernateProperties(properties);
        return sf;
    }

    // jOOQ
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

    @Bean
    public ServletContextInitializer initializer() {
        return new ServletContextInitializer() {
            @Override
            public void onStartup(ServletContext servletContext) throws ServletException {
                servletContext.setInitParameter("tapestry.app-package", "io.github.picodotdev.plugintapestry");
                servletContext.setInitParameter("tapestry.use-external-spring-context", "true");
                servletContext.addFilter("filter", AppFilter.class).addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST, DispatcherType.ERROR), false, "/*");
                servletContext.addFilter("app", TapestrySpringFilter.class).addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST, DispatcherType.ERROR), false, "/*");
                servletContext.setSessionTrackingModes(EnumSet.of(SessionTrackingMode.COOKIE));
            }
        };
    }

    // Tomcat
    @Bean
    public ConfigurableServletWebServerFactory webServerFactory() {
        Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
        Http11NioProtocol protocol = (Http11NioProtocol) connector.getProtocolHandler();
        connector.setScheme("http");
        connector.setSecure(false);
        connector.setPort(8080);

        TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory();
        factory.addAdditionalTomcatConnectors(connector);
        factory.getSession().setTimeout(Duration.ofMinutes(10));
        factory.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/error404"));
        factory.addErrorPages(new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error500"));
        return factory;
    }

    // Servicios
    @Bean
    public ProductoEventAdapter productoEventAdapter() {
        return new ProductoEventAdapter();
    }
    
    @Bean
    public HibernateProductoDAO hibenateProductoDAO(SessionFactory sessionFactory) {
        return new DefaultHibernateProductoDAO(sessionFactory);
    }
    
    @Bean
    public JooqProductoDAO jooqProductoDAO(DSLContext context) {
        return new DefaultJooqProductoDAO(context);
    }

    @Bean
    public DummyService dummyService() {
        return new DummyService();
    }
}
