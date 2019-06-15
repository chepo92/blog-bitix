$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "mutation addBook($title: String, $author: Long){addBook(title: $title, author: $author){title}}", "variables": { "title": "El lazarillo de Tormes", "author": 6}}' http://localhost:8080/graphql
{
  "data": {
    "addBook": null
  },
  "errors": [
    {
      "errorType": "DataFetchingException",
      "extensions": null,
      "message": "Invalid author",
      "path": [
        "addBook"
      ],
      "locations": [
        {
          "line": 1,
          "column": 49
        }
      ]
    }
  ]
}

$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "mutation addBook($title: String, $author: Long){addBook(title: $title, author: $author){title}}", "variables": { "title": "El lazarillo de Tormes", "author": 6}}' http://localhost:8080/graphql
{
  "data": {
    "addBook": null
  },
  "errors": [
    {
      "errorType": "DataFetchingException",
      "extensions": {
        "foo": "bar",
        "fizz": "whizz"
      },
      "message": "Invalid permissions",
      "path": [
        "addBook"
      ],
      "locations": [
        {
          "line": 1,
          "column": 49
        }
      ]
    }
  ]
}