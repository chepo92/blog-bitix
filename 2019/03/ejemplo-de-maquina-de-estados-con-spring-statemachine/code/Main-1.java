package io.github.picodotdev.blogbitix.springstatemachine;

...

@SpringBootApplication
public class Main implements CommandLineRunner {

    public static enum States {
        START, STATE1, CHOICE, CHOICE1, CHOICE2, FORK, TASKS, TASK11, TASK12, TASK13, TASK21, TASK22, TASK23, JOIN, STATE2, END
    }

    public static enum Events {
        START_STATE1, STATE1_CHOICE, CHOICE1_FORK, CHOICE2_FORK, TASK11_TASK12, TASK12_TASK13, TASK21_TASK22, TASK22_TASK23, STATE2_END
    }

    @Autowired
    private ApplicationContext context;

    @Autowired
    private StateMachine<States, Events> machine1;

    @Bean
    public StateMachine<States, Events> buildMachine(DefaultAction action, DefaultErrorAction errorAction, DefaultStateMachineEventListener listener) throws Exception {
        StateMachineBuilder.Builder<States, Events> builder = StateMachineBuilder.builder();

        // https://github.com/spring-projects/spring-statemachine/issues/354
        ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
        taskScheduler.setDaemon(true);
        taskScheduler.initialize();

        builder.configureConfiguration().withConfiguration()
                .taskScheduler(taskScheduler);

        builder.configureStates()
            .withStates()
                .initial(States.START)
                .stateEntry(States.STATE1, action, errorAction)
                .stateDo(States.STATE1, action, errorAction)
                .stateExit(States.STATE1, action, errorAction)
                .choice(States.CHOICE)
                .state(States.CHOICE1)
                .state(States.CHOICE2)
                .fork(States.FORK)
                .state(States.TASKS)
                .join(States.JOIN)
                .state(States.STATE2)
                .end(States.END)
                .and()
                .withStates()
                    .parent(States.TASKS)
                    .initial(States.TASK11)
                    .state(States.TASK12)
                    .end(States.TASK13)
                .and()
                .withStates()
                    .parent(States.TASKS)
                    .initial(States.TASK21)
                    .state(States.TASK22)
                    .end(States.TASK23);

        builder.configureTransitions()
            .withExternal()
                .source(States.START).target(States.STATE1)
                .event(Events.START_STATE1)
                .action(Actions.errorCallingAction(action, errorAction))
                .and()
            .withExternal()
                .source(States.STATE1).target(States.CHOICE)
                .event(Events.STATE1_CHOICE)
                .and()
            .withChoice()
                .source(States.CHOICE)
                .first(States.CHOICE1, new RandomGuard())
                .last(States.CHOICE2)
                .and()
            .withExternal()
                .source(States.CHOICE1)
                .target(States.FORK)
                .event(Events.CHOICE1_FORK)
                .and()
            .withExternal()
                .source(States.CHOICE2)
                .target(States.FORK)
                .event(Events.CHOICE2_FORK)
                .and()
            .withFork()
                .source(States.FORK)
                .target(States.TASKS)
                .and()
            .withExternal()
                .state(States.TASKS)
                .source(States.TASK11)
                .target(States.TASK12)
                .event(Events.TASK11_TASK12)
                .and()
            .withExternal()
                .source(States.TASK12)
                .target(States.TASK13)
                .event(Events.TASK12_TASK13)
                .and()
            .withExternal()
                .source(States.TASK21)
                .target(States.TASK22)
                .event(Events.TASK21_TASK22)
                .and()
            .withExternal()
                .source(States.TASK22)
                .target(States.TASK23)
                .event(Events.TASK22_TASK23)
                .and()
            .withJoin()
                .source(States.TASK13)
                .source(States.TASK23)
                .target(States.JOIN)
                .and()
            .withExternal()
                .source(States.JOIN)
                .target(States.STATE2)
                .and()
            .withExternal()
                .source(States.STATE2)
                .target(States.END)
                .event(Events.STATE2_END);

        StateMachine<States, Events> stateMachine = builder.build();
        stateMachine.addStateListener(listener);
        return stateMachine;
    }

    ...

    public static void main(String... args) {
        SpringApplication.run(Main.class, args);
    }
}
