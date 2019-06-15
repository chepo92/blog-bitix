$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books($include: Boolean!) { books { id title date @include(if: $include) }}", "variables": { "include": true }}' http://localhost:8080/graphql
