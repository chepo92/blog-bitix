package io.github.picodotdev.blogbitix.springstatemachine;

...

@SpringBootApplication
public class Main implements CommandLineRunner {

    ...

    @Override
    public void run(String... args) throws Exception {
        Random random = new Random();

        machine1.start();
        machine1.getExtendedState().getVariables().put("variable", 42);
        machine1.sendEvent(new GenericMessage<>(Events.START_STATE1, Collections.singletonMap("key", 31)));
        machine1.sendEvent(Events.STATE1_CHOICE);
        machine1.sendEvent((machine1.getState().getId() == States.CHOICE1) ? Events.CHOICE1_FORK : Events.CHOICE2_FORK);
        machine1.sendEvent(Events.TASK11_TASK12);
        machine1.sendEvent(Events.TASK21_TASK22);
        machine1.sendEvent(Events.TASK12_TASK13);
        machine1.sendEvent(Events.TASK22_TASK23);
        machine1.sendEvent(Events.STATE2_END);
        machine1.stop();

        ...
    }

    public static void main(String... args) {
        SpringApplication.run(Main.class, args);
    }
}
