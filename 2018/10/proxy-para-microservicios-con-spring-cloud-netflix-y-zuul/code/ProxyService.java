package io.github.picodotdev.blogbitix.springcloud.client;

...

@Component
public class ProxyService {

    @Autowired
    private LoadBalancerClient loadBalancer;

    @HystrixCommand(fallbackMethod = "getFallback", commandProperties = {
            @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "4"),
            @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "25000")
    })
    public String get() {
        ServiceInstance instance = loadBalancer.choose("proxy");
        URI uri = instance.getUri();
        String resource = String.format("%s%s", uri.toString(), "/service");
        return Client.create().resource(resource).get(String.class);
    }

    private String getFallback() {
        return "Fallback";
    }
}
