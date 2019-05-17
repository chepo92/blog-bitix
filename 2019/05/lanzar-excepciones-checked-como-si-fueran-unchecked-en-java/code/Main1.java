import java.util.List;

public class Main1 {

    public static void main(String[] args) {
        List<String> list = List.of("a", "b", "c");
        list.stream().forEach(i -> {
            if (i.equals("d")) {
                throw new Exception();
            }
        });
    }
}