public class Main {

    private static final String SEPARADOR = "sep";

    public static void main(String[] args) {
        List<String> params = new ArrayList<>();

        // Obtener los parámetros de cada "proceso"
        // Nota: Arrancar la máquina virtual consume mucho tiempo, en algunos casos
        // un tiempo considerable comparado con el programa, para evitar arrancar una JVM
        // por cada proceso pasar una lista de argumentos en una sola ejecución.
        List<String> actual = new ArrayList<>();
        for (String arg : args) {
            if (arg.equals(SEPARADOR)) {
                if (!actual.isEmpty()) {
                    params.add(actual);
                    actual = new ArrayList<>();
                }
                continue;
            }
            actual.add(arg);
	}

        if (!actual.isEmpty()) {
            params.add(actual);
        }

        // Procesar cada proceso con sus parámetros
        for (List<String> p : params) {
            procesar(o);
        }
    }
}