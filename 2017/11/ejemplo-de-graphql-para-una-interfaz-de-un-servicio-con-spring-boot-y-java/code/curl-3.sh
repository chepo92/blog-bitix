$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books{title}}"}' http://localhost:8080/graphql
$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Authors{authors{name}}"}' http://localhost:8080/graphql
$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query BooksWithAuthors{books{title author{name}}}"}' http://localhost:8080/graphql