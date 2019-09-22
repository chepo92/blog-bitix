$ curl -XPOST -H "Content-Type: application/json" -d '{"query": "query Books{books{none}}"}' http://localhost:8080/graphql
{
  "data": null,
  "errors": [
    {
      "message": "Validation error of type FieldUndefined: Field 'none' in type 'Book' is undefined",
      "locations": [
        {
          "line": 1,
          "column": 19
        }
      ],
      "description": "Field 'none' in type 'Book' is undefined",
      "validationErrorType": "FieldUndefined",
      "errorType": "ValidationError",
      "extensions": null,
      "path": null
    }
  ]
}
