---
pid: 272
type: "post"
title: "Implementar funcionalidades comunes en Java con la librería Lombok"
url: "/2017/10/implementar-funcionalidades-comunes-en-java-con-la-libreria-lombok/"
date: 2017-10-21T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Java es un lenguaje verboso además requerir realizar las definiciones de forma explícita y con poco azúcar sintáctico (o como diría algún otro, poco veneno para ratas), esto hace que el número de líneas de código necesarias sea mayor que en otros lenguajes. Que Java sea verboso, explícito y con poco azúcar sintáctico no es necesariamente un inconveniente ya que la mayor parte del tiempo los programadores la dedicamos a leer código ya escrito sin embargo a mayor número de líneas mayor tiempo se requiere en mantenerlas. Un ejemplo claro está en los _beans_ con múltiples propiedades donde por cada propiedad es necesario definir un método _get_ y un método _set_ además [implementar de forma correcta los métodos _equals_ y _hashCode_][blogbitix-199], el método _toString_, utilizar el [patrón builder][blogbitix-99], múltiples constructores con combinaciones de propiedades o comprobaciones para valores no nulos en parámetros.

[Lombok][lombok] es una pequeña librería Java que hace posible eliminar todo ese código repetitivo necesario en cada _bean_ o clase Java utilizando varias anotaciones. Usarla no requiere ninguna complicación basta añadirla a la lista de dependencias de compilación y las anotaciones serán procesadas. Los IDEs serán conscientes de los métodos implementados por las anotaciones instalando un complemento.

Las anotaciones proporcionadas por Lombok son las siguientes, en la documentación se explica detalladamente que hace cada una de ellas y un ejemplo de código bastante ilustrativo comparando el código usando las anotaciones y el código Java equivalente:

* [@Getter/@Setter](https://projectlombok.org/features/GetterSetter): proporciona una implementación de los métodos _get_ y _set_.
* [@ToString](https://projectlombok.org/features/ToString): proporciona una implementación del método _toString_ generando una cadena con información de las propiedades.
* [@EqualsAndHashCode](https://projectlombok.org/features/EqualsAndHashCode): proporciona una implementación correcta de los métodos _equals_ y _hashCode_.
* [@NoArgsConstructor, @RequiredArgsConstructor y @AllArgsConstructor](https://projectlombok.org/features/constructor): implementan varios métodos de constructores.
* [@NonNull](https://projectlombok.org/features/NonNull): valida que un argumento no es nulo lanzando una excepción _NullPointerException_ o _IllegalArgumentException_ en caso de que lo sea.
* [@Data](https://projectlombok.org/features/Data): es una combinación de varias anotaciones, _@ToString_, _@EqualsAndHashCode_, _@Getter_ en todos las propiedades y _@Setter_ en todas las propiedades no finales y _@RequiredArgsConstructor_.
* [@Value](https://projectlombok.org/features/Value): hace una clase inmutable.
* [@Builder](https://projectlombok.org/features/Builder): una API para la creación de objetos.
* [@Cleanup](https://projectlombok.org/features/Cleanup): facilita la gestión de recursos de forma automática.
* [@SneakyThrows](https://projectlombok.org/features/SneakyThrows): posibilita lanzar excepciones sin declararlas en los métodos.
* [@Synchronized](https://projectlombok.org/features/Synchronized): otra forma de implementar la sincronización
* [@Getter(lazy=true)](https://projectlombok.org/features/GetterLazy): calcula el valor de una propiedad la primera vez que se llama y la cachea.
* [@Log](https://projectlombok.org/features/log)

Usando algunas de estas anotaciones en una clase Java y su uso en un programa.

{{< code file="Car.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}

Usando [Gradle][gradle] hay que añadir en el archivo de construcción del proyecto _build.gradle_ la dependencia en el ámbito de _compileOnly_.

{{< code file="build.gradle" language="groovy" options="" >}}

Usando un IDE, su complemento para Lombok y añadida la dependencia los métodos que implementa Lombok con las anotaciones son visualizados con el asistente de código.

{{< image
    gallery="true"
    image1="image:lombok-intellij.png" optionsthumb1="300x200" title1="Soporte de Lombok en IntelliJ"
    image2="image:lombok.png" optionsthumb2="300x200" title2="Ejecución del ejemplo"
    caption="Soporte de Lombok en IntelliJ y ejecución del ejemplo" >}}

Las anotaciones de Lombok permiten escribir menos código repetitivo en _beans_ o objetos de transferencia de datos o DTO pero conviene conocer lo que hacen esas anotaciones. Una de las características por las que algunas personas usan otros lenguajes más recientes como [Groovy][groovy] es que en estos requieren menos líneas código para hacer lo mismo que en Java como el caso de los métodos _get_ y _set_ de las propiedades que en Groovy se proporcionan de forma implícita y en Java de forma explícita, con Lombok en Java estos métodos también se pueden proporcionar con anotaciones sin tener que codificarlos.

En el momento de escribir este artículo Lombok no es compatible con Java 9 aunque ya se está trabajando en su soporte y en algún momento lo será.

{{< sourcecode git="blog-ejemplos/tree/master/Lombok" command="./gradlew run" >}}

{{% /post %}}
