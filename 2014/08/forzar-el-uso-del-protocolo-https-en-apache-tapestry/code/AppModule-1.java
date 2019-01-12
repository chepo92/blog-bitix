package es.com.blogspot.elblogdepicodev.plugintapestry.services;

...

public class AppModule {

	public static void contributeApplicationDefaults(MappedConfiguration<String, Object> configuration) {
		...
	
		configuration.add(SymbolConstants.SECURE_ENABLED, true);
		configuration.add(SymbolConstants.HOSTPORT, 8080);
		configuration.add(SymbolConstants.HOSTPORT_SECURE, 8443);

		...
	}

	...
}