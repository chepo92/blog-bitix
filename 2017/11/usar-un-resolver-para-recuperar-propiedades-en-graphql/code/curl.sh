$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books{title isbn}}"}' http://localhost:8080/graphql
{
  "data": {
    "books": [
      {
        "title": "Ojo en el cielo",
        "isbn": "9664c44a-9b70-4f8e-8db9-960c16bd3d9c"
      },
      {
        "title": "Muerte de la luz",
        "isbn": "b2cadd23-827c-4057-ae65-e3fbcbafee03"
      },
      {
        "title": "El nombre de la rosa",
        "isbn": "57ccc845-8792-40ed-9561-d75070399c8b"
      },
      {
        "title": "Los tejedores de cabellos",
        "isbn": "f035727e-8a7d-4a34-9604-1f5b22c249a7"
      },
      {
        "title": "Ready Player One",
        "isbn": "40393df6-7bfb-4132-97d4-bd98ebbfd565"
      }
    ]
  }
}