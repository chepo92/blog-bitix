package io.github.picodotdev.blogbitix.aspects;

...

@SpringBootApplication
@EnableAspectJAutoProxy
public class Main implements CommandLineRunner {

    ...

    @Bean
    public Foo foo() {
        return new Foo();
    }

    @Bean
    public Aspects aspects() {
        return new Aspects();
    }

    @Override
    public void run(String... args) throws Exception {
        ...

        // Spring AOP
        System.out.println("");
        System.out.println("Spring AOP (AspectJ anotations)");
        fooBean.echo();
        fooBean.sum(3, 7);
        fooBean.sleep();

        ...
    }
}
