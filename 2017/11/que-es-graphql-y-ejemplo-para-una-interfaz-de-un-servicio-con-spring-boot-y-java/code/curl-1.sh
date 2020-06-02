$ curl -XPOST -H 'Content-Type: application/json' -d '{"query":"query{books{title}}"}' http://localhost:8080/graphql
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

$ curl -XPOST -H 'Content-Type: application/json' -d '{"query":"query{authors{name}}"}' http://localhost:8080/graphql
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

$ curl -XPOST -H 'Content-Type: application/json' -d '{"query":"query{books{title author{name}}}"}' http://localhost:8080/graphql
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