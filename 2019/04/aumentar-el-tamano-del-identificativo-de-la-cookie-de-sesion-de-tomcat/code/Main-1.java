package io.github.picodotdev.springsession;

...

@SpringBootApplication
@ComponentScan("io.github.picodotdev.springsession")
public class Main {

	private static final int SESSION_ID_LENGTH = 64;

	@Bean
	public WebServerFactoryCustomizer<TomcatServletWebServerFactory> cookieProcessorCustomizer() {
		return (TomcatServletWebServerFactory factory) -> {
			factory.addContextCustomizers((Context context) -> {
				if (context.getManager() == null) {
					context.setManager(new StandardManager());
				}
				context.getManager().getSessionIdGenerator().setSessionIdLength(SESSION_ID_LENGTH);
			});
		};
	}

    ...

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Main.class, args);
	}
}