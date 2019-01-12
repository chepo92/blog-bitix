package io.github.picodotdev.blogbitix.springcloud.proxy;

...

@SpringBootApplication
@EnableDiscoveryClient
@EnableZuulProxy
public class Main {

	public static void main(String[] args) throws Exception {
		SpringApplication application = new SpringApplication(Main.class);
		application.setApplicationContextClass(AnnotationConfigApplicationContext.class);
		SpringApplication.run(Main.class, args);
	}
}