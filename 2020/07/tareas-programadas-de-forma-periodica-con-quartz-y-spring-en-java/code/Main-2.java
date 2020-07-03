package io.github.picodotdec.blogbitix.quartzspring;

...

@SpringBootApplication
@EnableScheduling
public class Main implements ApplicationListener {

    private static final Logger logger = LogManager.getLogger(Main.class);

    @Autowired
    private JavaJob javaJob;

    ...

    @Bean
    public JavaJob javaJob() {
        return new JavaJob();
    }

    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        if (event instanceof ApplicationStartedEvent) {
            ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(5);
            scheduler.scheduleAtFixedRate(javaJob::jobWithFixedRate, 0, 2, TimeUnit.SECONDS);
            scheduler.scheduleWithFixedDelay(javaJob::jobWithDelay, 0, 2, TimeUnit.SECONDS);
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
