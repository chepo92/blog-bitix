// Java 8
List<String> list = Collections.unmodifiableList(Arrays.asList("a", "b", "c"));

Set<String> set = Collections.unmodifiableSet(new HashSet<>(Arrays.asList("a", "b", "c")));

Map<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);
map.put("c", 3);
map = Collections.unmodifiableMap(map);

// Java 9
List<String> list = List.of("a", "b", "c");
 
Set<String> set = Set.of("a", "b", "c");
 
Map<String, Integer> map = Map.of("a", 1);
