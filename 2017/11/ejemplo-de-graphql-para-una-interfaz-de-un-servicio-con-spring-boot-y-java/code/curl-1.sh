$ curl "http://localhost:8080/library?query=\{books\{title\}\}"
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

$ curl "http://localhost:8080/library?query=\{authors\{name\}\}"
{
  "data": {
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
    ]
  }
}

$ curl "http://localhost:8080/library?query=\{books\{title+author\{name\}\}\}"
{
  "data": {
    "books": [
      {
        "title": "Ojo en el cielo",
        "author": {
          "name": "Philip K. Dick"
        }
      },
      {
        "title": "Muerte de la luz",
        "author": {
          "name": "George R. R. Martin"
        }
      },
      {
        "title": "El nombre de la rosa",
        "author": {
          "name": "Umberto Eco"
        }
      },
      {
        "title": "Los tejedores de cabellos",
        "author": {
          "name": "Andreas Eschbach"
        }
      },
      {
        "title": "Ready Player One",
        "author": {
          "name": "Ernest Cline"
        }
      }
    ]
  }
}