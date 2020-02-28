package io.github.picodotdev.blogbitix.log4j;

...

public class Main {

    private static final Logger logger = LogManager.getLogger(Main.class);

    public static void main(String[] args) {
        ...
        Main.changeLogLevelDynamically();
    }

    ...

    private static void changeLogLevelDynamically() {
        Configurator.setLevel(logger.getName(), Level.ERROR);
        logger.info("info trace");
        logger.error("error trace");

        logger.error("");

        Configurator.setLevel(logger.getName(), Level.INFO);
        logger.info("info trace");
        logger.error("error trace");
    }
}
