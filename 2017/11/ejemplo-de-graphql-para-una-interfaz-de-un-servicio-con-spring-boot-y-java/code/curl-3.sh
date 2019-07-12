$ curl -XPOST -H "Content-Type: application/json" -H "User: admin" -d '{"query": "mutation addBook($title: String, $author: Long){addBook(title: $title, author: $author){title}}", "variables": { "title": "El lazarillo de Tormes", "author": 6}}' http://localhost:8080/graphql
{
  "data": {
    "addBook": {
      "title": "El lazarillo de Tormes"
    }
  }
}

$ curl -XPOST -H "Content-Type: application/json" -H "User: admin" -d '{"query": "mutation addBook($title: String, $author: Long){addBook(title: $title, author: $author){title}}", "variables": { "title": "El lazarillo de Tormes", "author": 99}}' http://localhost:8080/graphql
{
  "data": {
    "addBook": null
  },
  "errors": [
    {
      "message": "Internal Server Error(s) while executing query",
      "extensions": null,
      "path": null
    }
  ]
}

io.github.picodotdev.blogbitix.graphql.ValidationException: Invalid author
	at io.github.picodotdev.blogbitix.graphql.repository.LibraryRepository.addBook(LibraryRepository.java:57) ~[main/:na]
	at io.github.picodotdev.blogbitix.graphql.resolver.Mutation.addBook(Mutation.java:18) ~[main/:na]
	at io.github.picodotdev.blogbitix.graphql.resolver.MutationMethodAccess.invoke(Unknown Source) ~[reflectasm-1.11.3.jar:na]
	at com.coxautodev.graphql.tools.MethodFieldResolverDataFetcher.get(MethodFieldResolver.kt:111) ~[graphql-java-tools-4.1.2.jar:na]
  ...

$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "mutation addBook($title: String, $author: Long){addBook(title: $title, author: $author){title}}", "variables": { "title": "El lazarillo de Tormes", "author": 6}}' http://localhost:8080/graphql
{
  "data": {
    "addBook": null
  },
  "errors": [
    {
      "message": "Internal Server Error(s) while executing query",
      "extensions": null,
      "path": null
    }
  ]
}

io.github.picodotdev.blogbitix.graphql.PermissionException: Invalid permissions
	at io.github.picodotdev.blogbitix.graphql.repository.LibraryRepository.addBook(LibraryRepository.java:53) ~[main/:na]
	at io.github.picodotdev.blogbitix.graphql.resolver.Mutation.addBook(Mutation.java:18) ~[main/:na]
	at io.github.picodotdev.blogbitix.graphql.resolver.MutationMethodAccess.invoke(Unknown Source) ~[reflectasm-1.11.3.jar:na]
	at com.coxautodev.graphql.tools.MethodFieldResolverDataFetcher.get(MethodFieldResolver.kt:111) ~[graphql-java-tools-4.1.2.jar:na]
  ...