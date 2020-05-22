ThreadFactory tf = Thread.builder().virtual().factory();
ExecutorService e = Executors.newUnboundedExecutor(tf);
Future<Result> f = e.submit(() -> { ... return result; }); // spawns a new virtual thread
...
Result y = f.get(); // joins the virtual thread