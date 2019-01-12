// Delegating a method call
Class<? extends Source> sourceClass = new ByteBuddy()
        .subclass(Source.class)
        .method(named("hello")).intercept(MethodDelegation.to(Target.class))
        .make()
        .load(Main.class.getClassLoader(), ClassLoadingStrategy.Default.WRAPPER)
        .getLoaded();

String message = sourceClass.newInstance().hello("World");
System.out.println();
System.out.println(message);