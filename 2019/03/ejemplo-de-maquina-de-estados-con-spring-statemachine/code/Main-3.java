package io.github.picodotdev.blogbitix.springstatemachine;

...

@SpringBootApplication
public class Main implements CommandLineRunner {

    ...

    @Override
    public void run(String... args) throws Exception {
        ...

        machine1.start();
        machine1.sendEvent(Events.TASK11_TASK12);
        machine1.sendEvent(Events.TASK22_TASK23);
        machine1.sendEvent(Events.TASK12_TASK13);
        machine1.sendEvent(Events.STATE2_END);
        machine1.stop();
    }

    public static void main(String... args) {
        SpringApplication.run(Main.class, args);
    }
}
