$ curl "http://localhost:8080/graphql?query=\{books\{title\}authors\{name\}author(id:1)\{name\}\}"
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
    ],
    "authors": [
      {
        "name": "Philip K. Dick"
      },
      {
        "name": "George R. R. Martin"
      },
      {
        "name": "Umberto Eco"
      },
      {
        "name": "Andreas Eschbach"
      },
      {
        "name": "Ernest Cline"
      },
      {
        "name": "Anónimo"
      }
    ],
    "author": {
      "name": "Philip K. Dick"
    }
  }
}