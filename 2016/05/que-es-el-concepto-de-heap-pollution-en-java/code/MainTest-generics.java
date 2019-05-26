private List<String> strings;

@Before
public void before() {
    strings = new ArrayList<>();
    strings.add("Hello World!");
}

@Test(expected = ClassCastException.class)
public void genericsRaw() {
    List objects = strings;

    objects.add(42); // unchecked warning, heap pollution in strings

    for (String string : strings) {
        System.out.println(string); // ClassCastException is thrown
    }
}

@Test(expected = ClassCastException.class)
public void genericsRawNumber() {
    List objects = strings;
    List<Number> numbers = objects; // unchecked warning

    numbers.add(42); // heap pollution in strings

    for (String string : strings) {
        System.out.println(string); // ClassCastException is thrown
    }
}