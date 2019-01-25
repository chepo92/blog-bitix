package io.github.picodotdev.blogbitix.javajson;

...

public class Main {

    public static void main(String[] args) throws Exception {
        ...

        // JsonPath
        BufferedReader br = new BufferedReader(new InputStreamReader(Main.class.getResourceAsStream("/store.json")));
        String storeJson = br.lines().collect(Collectors.joining());

        ReadContext readContext = JsonPath.parse(storeJson);

        Map<String, String> expressions = new LinkedHashMap<>();
        expressions.put("authors", "$.store.book[*].author");
        expressions.put("books", "$.store.book[*]");
        expressions.put("cheap-books", "$.store.book[?(@.price < 10)]");
        expressions.put("isbn-books", "$.store.book[?(@.isbn)]");
        expressions.put("first-books", "$.store.book[:2]");
        expressions.put("prices", "$..price");

        expressions.forEach((k, e) -> {
            Object value = readContext.read(e);
            System.out.printf("%s: %s%n", k, value);
        });

    }

    ...
}
