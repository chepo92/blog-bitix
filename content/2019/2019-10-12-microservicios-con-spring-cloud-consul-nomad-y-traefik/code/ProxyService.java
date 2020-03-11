package io.github.picodotdev.blogbitix.springcloud.client;

...

@Component
public class ProxyService {

    @Autowired
    private LoadBalancerClient loadBalancer;

    @Autowired
    private Tracing tracing;

    @Autowired
    private Tracer tracer;

    private CircuitBreakerConfig circuitBreakerConfiguration;
    private TimeLimiterConfig timeLimiterConfiguration;
    private HttpClient client;

    public ProxyService() {
        circuitBreakerConfiguration = CircuitBreakerConfig.custom()
                .failureRateThreshold(50)
                .recordExceptions(IOException.class, TimeoutException.class)
                .build();

        timeLimiterConfiguration = TimeLimiterConfig.custom()
                .timeoutDuration(Duration.ofMillis(2500))
                .cancelRunningFuture(true)
                .build();

        client = HttpClient.newBuilder().version(HttpClient.Version.HTTP_2).build();
    }

    public String get() {
        ServiceInstance instance = loadBalancer.choose("traefik");
        URI uri = instance.getUri();
        String resource = String.format("%s%s", uri.toString().replace("127.0.0.1", "traefik"), "/service");        
        HttpRequest.Builder r = null;
        try { 
            r = HttpRequest.newBuilder(new URI(resource)).GET();
        } catch (Exception e) {
            return getFallback();
        }
        final HttpRequest.Builder request = r;

        Span span = tracer.newTrace().start();
        TraceContext.Injector<HttpRequest.Builder> injector = tracing.propagation().injector((HttpRequest.Builder carrier, String key, String value) -> { carrier.header(key, value); });
        injector.inject(span.context(), request);
        System.out.printf("Client Span (traceId: %s, spanId: %s)%n", span.context().traceIdString(), span.context().spanIdString());

        CircuitBreaker circuitBreaker = CircuitBreaker.of("resilience4jCircuitBreakerProxyService", circuitBreakerConfiguration);
        TimeLimiter timeLimiter = TimeLimiter.of(timeLimiterConfiguration);

        Supplier<CompletableFuture<String>> get = () -> {
            return CompletableFuture.supplyAsync(() -> {
                try { 
                    HttpResponse<String> response = client.send(request.build(), HttpResponse.BodyHandlers.ofString());
                    return response.body();
                } catch (Exception e) {
                    return getFallback();
                }
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
