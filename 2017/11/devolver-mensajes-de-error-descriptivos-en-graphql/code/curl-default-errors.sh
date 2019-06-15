$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books{none}}"}' http://localhost:8080/graphql
{
  "data": null,
  "errors": [
    {
      "message": "Validation error of type FieldUndefined: Field 'none' in type 'Book' is undefined",
      "locations": [
        {
          "line": 1,
          "column": 19
        }
      ],
      "description": "Field 'none' in type 'Book' is undefined",
      "validationErrorType": "FieldUndefined",
      "errorType": "ValidationError",
      "extensions": null,
      "path": null
    }
  ]
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