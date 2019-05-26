// Java 5
List<String> channels = Collections.<String>emptyList();

List<String> channels = Collections.emptyList();

// Java 7
Map<String, List<String>> userChannels = new HashMap<String, List<String>>();

Map<User, List<String>> userChannels = new HashMap<>();

// Java 8
Predicate<String> nameValidation = (String x) -> x.length() > 0;

Predicate<String> nameValidation = x -> x.length() > 0;

// Java 10
var userChannels = new HashMap<User, List<String>>();

var channels = lookupUserChannels("Tom");
channels.forEach(System.out::println);