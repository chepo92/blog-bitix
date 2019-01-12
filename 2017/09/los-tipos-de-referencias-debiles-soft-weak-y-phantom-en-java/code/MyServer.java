 public class MyServer implements Closeable {
   private static final FinalizableReferenceQueue frq = new FinalizableReferenceQueue();
   // You might also share this between several objects.

   private static final Set<Reference<?>> references = Sets.newConcurrentHashSet();
   // This ensures that the FinalizablePhantomReference itself is not garbage-collected.

   private final ServerSocket serverSocket;

   private MyServer(...) {
     ...
     this.serverSocket = new ServerSocket(...);
     ...
   }

   public static MyServer create(...) {
     MyServer myServer = new MyServer(...);
     final ServerSocket serverSocket = myServer.serverSocket;
     Reference<?> reference = new FinalizablePhantomReference<MyServer>(myServer, frq) {
       public void finalizeReferent() {
         references.remove(this):
         if (!serverSocket.isClosed()) {
           ...log a message about how nobody called close()...
           try {
             serverSocket.close();
           } catch (IOException e) {
             ...
           }
         }
       }
     };
     references.add(reference);
     return myServer;
   }

   public void close() {
     serverSocket.close();
   }
 }