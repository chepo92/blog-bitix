package io.github.picodotdev.blogbitix.springoauth.service;

...

@RestController
public class DefaultController {

	private Random random;

	public DefaultController() {
		this.random = new Random();
	}

	@RequestMapping("/")
	public String home(HttpServletRequest request) throws Exception {
		return String.format("Hello world (%s)", request.getRequestURL());
	}
}
