$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books(filter:{title:\"^Ready.*\"}){title comments(limit:3,after:\"aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDoz\"){edges{node{text}cursor} pageInfo{startCursor endCursor hasNextPage}}}}"}' http://localhost:8080/graphql
{
  "data": {
    "books": [
      {
        "title": "Ready Player One",
        "comments": {
          "edges": [
            {
              "node": {
                "text": "Comment 4"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo0"
            },
            {
              "node": {
                "text": "Comment 5"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo1"
            },
            {
              "node": {
                "text": "Comment 6"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo2"
            }
          ],
          "pageInfo": {
            "startCursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo0",
            "endCursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo2",
            "hasNextPage": true
          }
        }
      }
    ]
  }
}