package io.github.picodotdev.blogbitix.jmx.mbean;

public class Hello implements HelloMBean {

    public void sayHello() {
        System.out.println("hello, world");
    }

    public int add(int x, int y) {
        return x + y;
    }

    public String getName() {
        return "Reginald";
    }
}
