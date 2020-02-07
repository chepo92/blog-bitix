package io.github.picodotdev.blogbitix.aspects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class Main implements CommandLineRunner {

    ...

    @Override
    public void run(String... args) throws Exception {
        // AspectJ
        System.out.println("");
        System.out.println("AspectJ");
        Foo foo = new Foo();
        foo.echo();
        foo.sum(3, 7);
        foo.sleep();

        ...
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
