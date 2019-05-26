// Con Java 8
// Clase se utilidad para hacer la inicialización más simple
public class Maps {
    public static <K, V> Map.Entry<K, V> entry(K key, V value) {
        return new AbstractMap.SimpleEntry<>(key, value);
    }

    public static <K, U> Collector<Entry<K, U>, ?, Map<K, U>> entriesToMap() {
        return Collectors.toMap((e) -> e.getKey(), (e) -> e.getValue());
    }
}

Map<String, String> map = Stream.of(
    Maps.entry("puerta", "door"),
    Maps.entry("coche", "car"),
    Maps.entry("gato", "cat"),
    Maps.entry("casa", "house")
).collect(Maps.entriesToMap()));

List<String> list = Stream.of("puerta", "coche", "gato", "casa").collect(toList());

Set<String> set = Stream.of("puerta", "coche", "gato", "casa").collect(toSet());


