Set<Integer> set = new HashSet<>();
Set rawSet = set;
rawSet.add("heap pollution!"); // heap pollution
set.stream().forEach(System.out::println); // ClassCastException

//
Set<Integer> set = new HashSet<>();
set = Collections.checkedSet(set, Integer.class);
Set rawSet = set;
rawSet.add("exception!");  // ClassCastException, no heap pollution
set.stream().forEach(System.out::println);