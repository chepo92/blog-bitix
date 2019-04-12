package io.github.picodotdev.springsession;

...

@SpringBootApplication
@EnableRedisHttpSession
@ComponentScan("io.github.picodotdev.springsession")
public class Main {

	private static final int SESSION_ID_LENGTH = 64;

	@Bean
	public DefaultCookieSerializer cookieSerializer() {
		DefaultCookieSerializer cookieSerializer = new DefaultCookieSerializer();
		cookieSerializer.setUseBase64Encoding(false);
		return cookieSerializer;
	}

	@Bean
	@Primary
	public RedisOperationsSessionRepository defaultSessionRepository(RedisOperations<Object, Object> sessionRedisOperations) {
		return new DefaultRedisOperationSessionRespository(sessionRedisOperations);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Main.class, args);
	}
}