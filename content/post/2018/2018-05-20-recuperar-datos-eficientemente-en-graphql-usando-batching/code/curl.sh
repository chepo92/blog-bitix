curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books{title batchedComments(limit:3){edges{node{text}cursor} pageInfo{startCursor endCursor hasNextPage}}}}"}' http://localhost:8080/graphql
