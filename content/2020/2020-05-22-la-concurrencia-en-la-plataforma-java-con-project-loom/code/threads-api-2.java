Thread thread1 = Thread.builder().virtual().task(() -> System.out.println("Hello")).build();
Thread thread2 = Thread.builder()
                      .virtual()
                      .name("bob")
                      .task(() -> System.out.println("I'm Bob!"))
                      .start();