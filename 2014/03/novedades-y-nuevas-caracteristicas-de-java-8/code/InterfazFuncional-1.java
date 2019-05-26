Collections.sort(personas, new Comparator<User>() {
    public int compare(Persona p1, Persona p2) {
        return p1.getAltura().compareTo(p2.getAltura());
    }
});