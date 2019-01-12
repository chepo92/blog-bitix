package es.com.blogspot.elblogdepicodev.plugintapestry.services;
...
public class AppModule {
	...
	public static void contributeServiceOverride(MappedConfiguration<Class, Object> configuration, @Local HibernateSessionSource hibernateSessionSource) {
		configuration.add(HibernateSessionSource.class, hibernateSessionSource);
		
		if (isServidorJBoss(ContextListener.SERVLET_CONTEXT)) {
			configuration.add(ClasspathURLConverter.class, new WildFlyClasspathURLConverter());			
		}
	}
	...
	private static boolean isServidorJBoss(ServletContext context) {
		String si = context.getServerInfo();

		if (si.contains("WildFly") || si.contains("JBoss")) {
			return true;
		}
		
		return false;
	}
	...
}