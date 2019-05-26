public interface Math { 
    int add(int a, int b);
 
    default int multiply(int a, int b) {
        return a * b;
    }
}