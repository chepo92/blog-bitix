// Intercept methods
Foo foo = new ByteBuddy()
        .subclass(Foo.class)
        .method(isDeclaredBy(Foo.class)).intercept(FixedValue.value("One!"))
        .method(named("foo")).intercept(FixedValue.value("Two!"))
        .method(named("foo").and(takesArguments(1))).intercept(FixedValue.value("Three!"))
        .make()
        .load(Main.class.getClassLoader(), ClassLoadingStrategy.Default.WRAPPER)
        .getLoaded()
        .newInstance();

System.out.println();
System.out.printf("%s.bar(): %s\n", foo.getClass().getName(), foo.bar());
System.out.printf("%s.foo(): %s\n", foo.getClass().getName(), foo.foo());
System.out.printf("%s.foo(Object o): %s\n", foo.getClass().getName(), foo.foo("¡Hello World!"));