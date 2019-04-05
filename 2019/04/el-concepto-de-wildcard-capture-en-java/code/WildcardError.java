import java.util.ArrayList;
import java.util.List;

public class WildcardError {

    public void foo(List<?> list) {
        Object object = list.get(0);
        list.set(0, object);
    }

    // @SuppressWarnings("unchecked")
    public void bar(List list) {
        Object object = list.get(0);
        list.set(0, object);
    }

    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        WildcardError wildcard = new WildcardError();
        wildcard.foo(list);
        wildcard.bar(list);
    }
}