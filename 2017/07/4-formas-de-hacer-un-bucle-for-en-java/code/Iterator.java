Collection<Integer> = Arrays.asList(0, 1, 2, 3, 4);
Iterable it = collection.iterable();
while (it.hasNext()) {
    System.out.println(it.next());
}