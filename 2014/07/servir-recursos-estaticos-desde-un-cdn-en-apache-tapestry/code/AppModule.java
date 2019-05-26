package es.com.blogspot.elblogdepicodev.plugintapestry.services;

...

public class AppModule {

	private static final Logger logger = LoggerFactory.getLogger(AppModule.class);

	public static final String CDN_DOMAIN_PROTOCOL = "cdn.protocol";
	public static final String CDN_DOMAIN_HOST = "cdn.host";
	public static final String CDN_DOMAIN_PORT = "cdn.port";
	public static final String CDN_DOMAIN_PATH = "cdn.path";

	...

	public static void contributeServiceOverride(MappedConfiguration<Class, Object> configuration, @Local HibernateSessionSource hibernateSessionSource) {
		configuration.add(HibernateSessionSource.class, hibernateSessionSource);
		// Servicio para usar un CDN lazy, pe. con Amazon CloudFront
		configuration.addInstance(AssetPathConverter.class, CDNAssetPathConverterImpl.class);

		if (isServidorJBoss(ContextListener.SERVLET_CONTEXT)) {
			configuration.add(ClasspathURLConverter.class, new WildFlyClasspathURLConverter());
		}
	}

	public static void contributeApplicationDefaults(MappedConfiguration<String, Object> configuration) {
		...

		configuration.add(CDN_DOMAIN_PROTOCOL, "http");
		configuration.add(CDN_DOMAIN_HOST, "s3-eu-west-1.amazonaws.com");
		configuration.add(CDN_DOMAIN_PORT, null);
		configuration.add(CDN_DOMAIN_PATH, null);
	}

	...
}