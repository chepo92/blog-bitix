int alturaMedia = personas.stream()
    .mapToInt((Persona p) –> { return p.getAltura(); })
    .average();