public class Main2 {

    @SuppressWarnings("unchecked")
    static <T extends Throwable> void sneakyThrow(Throwable t) throws T {
        throw (T) t;
    }

    static <T extends Throwable> void nonSneakyThrow(T t) throws T {
        throw t;
    }

    public static void main(String[] args) {
        Exception e = new Exception();
        sneakyThrow(e);    // No problems here
        //nonSneakyThrow(e); // Error: Unhandled exception: java.lang.Exception
    }
}