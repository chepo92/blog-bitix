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

	@Autowired
	private ProxyService proxy;
    
	@Override
	public void run(String... args) throws Exception {
		System.out.printf("Valor de propiedad de configuración (%s): %s%n", "config.key", configuration.getKey());
		System.out.printf("Valor de propiedad de configuración (%s): %s%n", "config.password", configuration.getPassword());
		System.out.printf("Valor de propiedad de configuración (%s): %s%n", "config.service", configuration.getService());

		for (int i = 0; i < 20000; ++i) {
			String response = (configuration.getService().equals("service")) ? service.get() : proxy.get();
			System.out.printf("Service response: %s%n", response);
			Thread.sleep(100);
		}
	}

	public static void main(String[] args) throws Exception {
		SpringApplication application = new SpringApplication(Main.class);
		application.setApplicationContextClass(AnnotationConfigApplicationContext.class);
		SpringApplication.run(Main.class, args);
	}
}
