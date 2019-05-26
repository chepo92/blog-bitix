package io.github.picodotdev.blogbitix.springcloud.client;

...

import java.net.URI;

@Component
public class ClientService {

    @Autowired
    private LoadBalancerClient loadBalancer;

    @HystrixCommand(fallbackMethod = "getFallback", commandProperties = {
            @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "4"),
            @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "1000")
    })
    public String get() {
        ServiceInstance instance = loadBalancer.choose("service");
        URI uri = instance.getUri();
        return Client.create().resource(uri).get(String.class);
    }

    private String getFallback() {
        return "Fallback";
    }
}
