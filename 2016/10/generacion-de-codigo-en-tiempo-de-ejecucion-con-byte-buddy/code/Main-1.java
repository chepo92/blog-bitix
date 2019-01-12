// Create a Class
DynamicType.Unloaded<?> unloaded = new ByteBuddy()
        .subclass(Object.class)
        .name("io.github.picodotdev.blobitix.holamundobytebuddy.Object")
        .method(named("toString")).intercept(FixedValue.value("Hello World!"))
        .make();

Class<?> objectClass = unloaded.load(Main.class.getClassLoader(), ClassLoadingStrategy.Default.WRAPPER)
        .getLoaded();

Object object = objectClass.newInstance();
System.out.printf("%s: %s\n", object.getClass().getName(), object.toString());