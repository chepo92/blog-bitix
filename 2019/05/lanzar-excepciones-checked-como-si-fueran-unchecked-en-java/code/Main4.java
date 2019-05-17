import java.util.List;

import io.vavr.control.Try;

public class Main4 {

    public static void action(String string) throws Exception {
        if (i.equals("d")) {
            throw new Exception();
        }
    }

    public static void main(String[] args) {
        List<String> list = List.of("a", "b", "c");
        list.stream().forEach(i -> {
            Try.of(() -> action(i));
        });
    }
}