import java.io.BufferedReader;
import java.io.FileReader;

public class Main {

    public static void main(String[] args) {
        try {
            readLine();
        } catch (Exception e) {
            e.printStackTrace();
            for (Throwable t : e.getSuppressed()) {
                t.printStackTrace();
            }
        }
    }

    private static String readLine() throws Exception {
        System.out.println("0");
        String line = null;
        Exception exception = null;
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            System.out.println("1");
            throwException(null);
            line = br.readLine();
        } catch (Exception e) {
            System.out.println("2");
            exception = e;
        } finally {
            System.out.println("3");
            throwException(exception);
        }
        System.out.println("4");
        return line;
    }

    private static void throwException(Exception supressed) throws Exception {
        Exception e = new Exception();
        if (supressed != null) {
            e.addSuppressed(supressed);
        }
        throw e;
    }
}