package io.github.picodotdev.blogbitix.springcloud.client;

...

@SpringBootApplication
@EnableDiscoveryClient
@EnableCircuitBreaker
@EnableHystrixDashboard
public class Main implements CommandLineRunner {

	@Autowired
	private DefaultConfiguration configuration;

	@Autowired
	private ClientService service;
    
	@Override
	public void run(String... args) throws Exception {
		System.out.printf("Valor de propiedad de configuración (%s): %s%n", "config.key", configuration.getKey());
		System.out.printf("Valor de propiedad de configuración (%s): %s%n", "config.password", configuration.getPassword());

    ...
	}

	public static void main(String[] args) throws Exception {
		SpringApplication application = new SpringApplication(Main.class);
		application.setApplicationContextClass(AnnotationConfigApplicationContext.class);
		SpringApplication.run(Main.class, args);
	}
}
