$ curl -XGET 'http://localhost:9200/blogbitix/libro/_search?pretty=true' -d '{
    "query" : {
        "fuzzy" : { "descripcion.es": "tapestry" }
    }
}'