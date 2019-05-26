$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books(filter:{title:\"^Ready.*\"}){title comments{edges{node{text}cursor} pageInfo{startCursor endCursor hasNextPage}}}}"}' http://localhost:8080/library
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
            },
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
            },
            {
              "node": {
                "text": "Comment 7"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo3"
            },
            {
              "node": {
                "text": "Comment 8"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo4"
            },
            {
              "node": {
                "text": "Comment 9"
              },
              "cursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo5"
            }
          ],
          "pageInfo": {
            "startCursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDox",
            "endCursor": "aW8uZ2l0aHViLnBpY29kb3RkZXYuYmxvZ2JpdGl4LmdyYXBocWwuQ29tbWVudDo5",
            "hasNextPage": false
          }
        }
      }
    ]
  }
}