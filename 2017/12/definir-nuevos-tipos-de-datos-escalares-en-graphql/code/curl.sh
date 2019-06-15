$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Book{books{title date}}"}' http://localhost:8080/graphql
{
  "data": {
    "books": [
      {
        "title": "Ojo en el cielo",
        "date": "1957-01-01"
      },
      {
        "title": "Muerte de la luz",
        "date": "1977-01-01"
      },
      {
        "title": "El nombre de la rosa",
        "date": "1980-01-01"
      },
      {
        "title": "Los tejedores de cabellos",
        "date": "1995-01-01"
      },
      {
        "title": "Ready Player One",
        "date": "2011-01-01"
      }
    ]
  }
}