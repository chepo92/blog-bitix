package io.github.picodotdev.plugintapestry.pages;

...

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

...

public class Index {

	private static final Logger logger = LogManager.getLogger(Index.class);

	...

	// Ciclo de vida
	Object onActivate(Object[] context) {
		logger.info("Activating page {}", Index.class.getSimpleName());
		if (context != null && context.length > 0) {
			return Error404.class;
		}
		return null;
	}

	/**
	 * Método del ciclo de vida de la página que es llamado por Tapestry al inicio de la
	 * renderización de la página.
	 */
	void setupRender() {
		logger.info("Rendering page {}", Index.class.getSimpleName());
		logger.info("Host {}", Globals.HOST.get()); // ThreadLocal example

	...
	}

  ...
}