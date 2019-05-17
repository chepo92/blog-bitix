import java.lang.reflect.Field;

import sun.misc.Unsafe;

public class Main3 {

    private static Unsafe getUnsafe() {
        try {
            Field field = Unsafe.class.getDeclaredField("theUnsafe");
            field.setAccessible(true);
            return (Unsafe) field.get(null);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) {
        Exception e = new Exception();
	    Main.getUnsafe().throwException(e);
    }
}