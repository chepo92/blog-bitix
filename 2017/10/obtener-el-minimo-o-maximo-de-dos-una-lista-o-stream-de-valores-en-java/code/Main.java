Random random = new Random();

int a = random.nextInt(50);
int b = random.nextInt(50);
List<Integer> ints = random.ints(0, 50).limit(20).boxed().collect(Collectors.toList());
IntStream stream = random.ints(0, 50).limit(20);

// Dos valores, mejor usar Math.min()
int min = (a < b) ? a : b;

// Una forma de obtener el mínimo de una lista de valores, mejor usar el método Collections.min()
int min = Integer.MAX_VALUE;
for (int i : ints) {
    if (i < min) {
        min = i;
    }
}
System.out.println(min);

// Dos valores usando el método Math.min()
int min = Math.min(a, b);

// Obtener el mínimo usando el método Math.min()
int min = Collections.min(ints);

// Obtener el mínimo de un stream
int min = stream.min().getAsInt();