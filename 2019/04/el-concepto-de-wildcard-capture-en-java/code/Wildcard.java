import java.util.ArrayList;
import java.util.List;

public class Wildcard {

    public void foo(List<?> list) {
        fooHelper(list);
    }

    private <T> void fooHelper(List<T> list) {
        T object = list.get(0);
        list.set(0, object);
    }

    public <T> void bar(List<T> list) {
        T object = list.get(0);
        list.set(0, object);
    }

    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        Wildcard wildcard = new Wildcard();
        wildcard.foo(list);
        wildcard.bar(list);
    }
}