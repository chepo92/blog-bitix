$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books(filter:{title:\"^[OR].*\"}){title}}"}' http://localhost:8080/library
{
  "data": {
    "books": [
      {
        "title": "Ojo en el cielo"
      },
      {
        "title": "Ready Player One"
      }
    ]
  }
}