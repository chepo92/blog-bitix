package io.github.picodotdev.blogbitix.log4j;

...

public class Main {

    private static final Logger logger = LogManager.getLogger(Main.class);

    public static void main(String[] args) {
        ...

        logger.info(new SecuredMessage("Tarjeta de crédito: 1111 1111 1111 1111, DNI: 11111111A", Arrays.asList("(\\d{4} \\d{4} \\d{4} \\d{1})(?=\\d{3})", "(\\d{6})(?=\\d{2}[A-Z])")));
        logger.info("Tarjeta de crédito: 1111 1111 1111 1111, DNI: 11111111A");
    }
}
