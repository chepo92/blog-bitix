package io.github.picodotdev.plugintapestry.pages;

...

public class Index {

    ...
    
    void setupRender() {
		// ThreadLocal example
		System.out.printf("Host (from page): %s%n", Globals.HOST.get());
		...
	}
		
	...
}