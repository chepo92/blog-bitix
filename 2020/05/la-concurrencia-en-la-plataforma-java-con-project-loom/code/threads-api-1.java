Thread thread = Thread.startVirtualThread(() -> System.out.println("Hello"));
thread.join();