package io.github.picodotdev.blogbitix.springcloud.client;

...

@Component
public class Resilience4jProxyService {

    @Autowired
    private LoadBalancerClient loadBalancer;

    @Autowired
    private Tracing tracing;

    @Autowired
    private Tracer tracer;

    private CircuitBreakerConfig circuitBreakerConfiguration;
    private TimeLimiterConfig timeLimiterConfiguration;

    public Resilience4jProxyService() {
        circuitBreakerConfiguration = CircuitBreakerConfig.custom()
                .failureRateThreshold(50)
                .recordExceptions(IOException.class, TimeoutException.class)
                .build();

        timeLimiterConfiguration = TimeLimiterConfig.custom()
                .timeoutDuration(Duration.ofMillis(2500))
                .cancelRunningFuture(true)
                .build();
    }

    public String get() {
        ServiceInstance instance = loadBalancer.choose("proxy");
        URI uri = instance.getUri();
        String resource = String.format("%s%s", uri.toString(), "/service");
        Invocation.Builder builder = ClientBuilder.newClient().target(resource).request();

        Span span = tracer.newTrace().start();
        TraceContext.Injector<Invocation.Builder> injector = tracing.propagation().injector((Invocation.Builder carrier, String key, String value) -> { carrier.header(key, value); });
        injector.inject(span.context(), builder);
        System.out.printf("Client Span (traceId: %s, spanId: %s)%n", span.context().traceIdString(), span.context().spanIdString());

        CircuitBreaker circuitBreaker = CircuitBreaker.of("resilience4jCircuitBreakerProxyService", circuitBreakerConfiguration);
        TimeLimiter timeLimiter = TimeLimiter.of(timeLimiterConfiguration);

        Supplier<CompletableFuture<String>> get = () -> {
            return CompletableFuture.supplyAsync(() -> {
                return builder.get().readEntity(String.class);
            });
        };
        Callable<String> getLimiter = TimeLimiter.decorateFutureSupplier(timeLimiter, get);
        Callable<String> getCircuitBreaker = CircuitBreaker.decorateCallable(circuitBreaker, getLimiter);

        return Try.of(getCircuitBreaker::call).recover((throwable) -> getFallback()).get();
    }

    private String getFallback() {
        return "Fallback";
    }
}
