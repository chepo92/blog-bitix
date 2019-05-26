
$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books(filter:{title:\"^Ready.*\"}){title comments(limit:3){edges{node{text}cursor} pageInfo{startCursor endCursor hasNextPage}}}}"}' http://localhost:8080/library
{
  "data": {
    "books": [
      {
        "title": "Ready Player One",
        "comments": {
          "edges": [
            {
              "node": {
                "text": "Comment 1"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDox"
            },
            {
              "node": {
                "text": "Comment 2"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDoy"
            },
            {
              "node": {
                "text": "Comment 3"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDoz"
            }
          ],
          "pageInfo": {
            "startCursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDox",
            "endCursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDoz",
            "hasNextPage": true
          }
        }
      }
    ]
  }
}