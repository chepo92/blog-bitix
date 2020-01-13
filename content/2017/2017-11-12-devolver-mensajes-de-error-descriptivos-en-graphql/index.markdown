---
pid: 279
type: "post"
title: "Devolver mensajes de error descriptivos en GraphQL"
url: "/2017/11/devolver-mensajes-de-error-descriptivos-en-graphql/"
date: 2017-11-12T11:30:00+01:00
updated: 2019-06-15T01:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:graphql.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["graphql"]
---

{{% post %}}

{{< logotype image1="graphql.svg" title1="GraphQL" width1="200" >}}

Por defecto [GraphQL][graphql] devuelve errores con mensajes descriptivos para los errores del cliente como son los errores de sintaxis en la sentencia de consulta o mutación, en el caso de que el campo solicitado no exista o no se ha indicado ninguno. En el caso de Java si se lanza una excepción en la clase repositorio que guarda los datos o en la lógica de negocio y no se captura GraphQL indicará que se ha producido un error interno en el servidor. Esto no es muy descriptivo y es mejor indicar errores más útiles para el usuario de la API como podría ser que no se tienen permisos para realizar la modificación o el error que se ha producido al validar los datos y por los que la operación no se ha completado.

Los errores en GraphQL usando el lenguaje Java se gestionan implementando en una clase la interfaz [GrapQLError](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/GraphQLError.java), este podría ser en caso de una excepción que además de heredar de [Exception](https://docs.oracle.com/javase/9/docs/api/java/lang/Exception.html) implemente la interfaz _GraphQLError_. Sin embargo, GraphQL cuando una clase hereda únicamente de _Exception_ lo considera un error interno del servidor y para no dar información interna del servicio a los clientes como mensaje indica únicamente _Internal Server Error(s) while executing query_.

{{< code file="curl-default-errors.sh" language="bash" options="" >}}

Para que GraphQL muestre el error personalizado deseado lanzando excepciones hay que adaptar esa excepción y que implementa _GraphQLError_ con una clase que únicamente implemente la interfaz _GraphQLError_ pero no herede de _Exception_. Esta sería una clase adaptador necesaria.

{{< code file="GraphQLErrorAdapter.java" language="java" options="" >}}

Para adaptar las clases excepción hay que cambiar el comportamiento de la clase _GraphQLErrorHandler_ de modo que transforme las excepciones a la clase _GraphQLError_ propia. Esta clase se indica al construir el objeto _SimpleGraphQLServlet_ y _ServletRegistrationBean_.

{{< code file="Main.java" language="java" options="" >}}

En el caso de este ejemplo solo un usuario de nombre _admin_ tiene permitido hacer modificaciones en la colección de libros guardados en la clase repositorio _LibraryRepository_. Por otro lado, cuando se añade un libro se hace una validación de los datos comprobando que el autor del libro a añadir exista en la librería. Estas son las peticiones válidas.

{{< code file="curl.sh" language="bash" options="" >}}

Y estas las inválidas que devuelve los mensajes propios más descriptivos de los errores o validaciones realizadas en el servidor de más utilidad para un usuario del servicio.

{{< code file="curl-custom-errors.sh" language="bash" options="" >}}

La interfaz _GraphQLError_ posee el método _getMessage()_ para devolver la descripción del mensaje pero con el método _getExtensions()_ es posible incluir cualquier dato en forma de clave-valor que deseemos como un código de error o cualquier otra información deseada. El caso de la excepción _PermissionException_ devuelve dos datos adicionales _foo_ y _fizz_, en un caso real se implementaría una lógica más útil para devolver estos datos adicionales posiblemente proporcionándolos en el constructor u obteniéndolos con la referencia a algún objeto.

{{< code file="PermissionException.java" language="java" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/GraphQL" command="./gradlew run" >}}

{{< reference >}}
* [Ejemplo de GraphQL para una interfaz de un servicio con Spring Boot y Java][blogbitix-275]
* [Execution](https://graphql-java.readthedocs.io/en/v5/execution.html)
* [GraphQLError.java](https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/GraphQLError.java)
{{< /reference >}}

{{% /post %}}
