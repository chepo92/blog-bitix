package io.github.picodotdev.blogbitix.springcloud.client;

...

@SpringBootApplication
@EnableDiscoveryClient
@EnableCircuitBreaker
@EnableHystrixDashboard
public class Main implements CommandLineRunner {

  ...

	@Bean
	HystrixMetricsBinder hystrixMetricsBinder() {
		return new HystrixMetricsBinder();
	}
    
  ...

	public static void main(String[] args) {
		SpringApplication application = new SpringApplication(Main.class);
		application.setApplicationContextClass(AnnotationConfigApplicationContext.class);
		SpringApplication.run(Main.class, args);
	}
}
