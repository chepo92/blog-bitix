package io.github.picodotdev.blogbitix.aspects;

...

@SpringBootApplication
@EnableAspectJAutoProxy
public class Main implements CommandLineRunner {

    ...

    @Override
    public void run(String... args) throws Exception {
        ...

        // Java Proxy
        System.out.println("");
        System.out.println("Java Proxy");
        IFoo fooProxy = (IFoo) new LogProxy((IFoo) new ProfileProxy(new Foo()).getProxy()).getProxy();
        fooProxy.echo();
        fooProxy.sum(3, 7);
        fooProxy.sleep();
    }
}
