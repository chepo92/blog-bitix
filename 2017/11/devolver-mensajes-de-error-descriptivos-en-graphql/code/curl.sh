$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books{title}}"}' http://localhost:8080/library
{
  "data": {
    "books": [
      {
        "title": "Ojo en el cielo"
      },
      {
        "title": "Muerte de la luz"
      },
      {
        "title": "El nombre de la rosa"
      },
      {
        "title": "Los tejedores de cabellos"
      },
      {
        "title": "Ready Player One"
      }
    ]
  }
}

$ curl -XPOST -H "Content-Type: application/json" -H "User: admin" -d '{"query": "mutation addBook($title: String, $author: Long){addBook(title: $title, author: $author){title}}", "variables": { "title": "El lazarillo de Tormes", "author": 6}}' http://localhost:8080/library
{
  "data": {
    "addBook": {
      "title": "El lazarillo de Tormes"
    }
  }
}