package io.github.picodotdev.pattern.builder;

public class Main {
  
  public static void main(String[] args) {
    Usuario usuario = new UsuarioBuilder()
        .email("nombre.apellido@gmail.com")
        .nombre("Nombre", "Apellido")
        .telefono("555123456")
        .direccion("c\\ Rue el Percebe 13").build();   
  }
}