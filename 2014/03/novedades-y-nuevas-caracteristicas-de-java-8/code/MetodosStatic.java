public interface Persona {

    String getNombre();
    int getAltura();

    static String toStringDatos() {
        return getNombre() + " " + getAltura();
    }
}