package es.com.blogspot.elblogdepicodev.plugintapestry.services;

...

public class AppModule {

	....

	public static void contributeSecurityConfiguration(Configuration<SecurityFilterChain> configuration, SecurityFilterChainFactory factory) {
		configuration.add(factory.createChain("/admin/**").add(factory.authc()).add(factory.ssl()).build());
	}

	....
}
