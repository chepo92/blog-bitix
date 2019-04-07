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

    @HystrixCommand(fallbackMethod = "getFallback", commandProperties = {
            @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "4"),
            @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "25000")
    })
    public String get() {
        ServiceInstance instance = loadBalancer.choose("proxy");
        URI uri = instance.getUri();
        String resource = String.format("%s%s", uri.toString(), "/service");
        Invocation.Builder builder = ClientBuilder.newClient().target(resource).request();

        Span span = tracer.newTrace().start();
        TraceContext.Injector<Invocation.Builder> injector = tracing.propagation().injector((Invocation.Builder carrier, String key, String value) -> { carrier.header(key, value); });
        injector.inject(span.context(), builder);
        System.out.printf("Proxy Span (traceId: %s, spanId: %s)%n", span.context().traceIdString(), span.context().spanIdString());

        return builder.get().readEntity(String.class);
    }

    private String getFallback() {
        return "Fallback";
    }
}
