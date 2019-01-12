package io.github.picodotdev.blogbitix.springcloud.service;

...

@RestController
public class DefaultController {

	@Autowired
	private DefaultConfiguration configuration;

	private Random random;

	public DefaultController() {
		this.random = new Random();
	}

	@RequestMapping("/")
	public String home(HttpServletRequest request) throws Exception {
		// Timeout simulation
		//Thread.sleep(random.nextInt(2000));

		return String.format("Hello world (%s, %s)", request.getRequestURL(), configuration.getKey());
	}
}
