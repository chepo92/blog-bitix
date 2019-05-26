$ curl -XGET 'http://localhost:9200/blogbitix/libro/_search?pretty=true' -d '{
    "query" : {
        "fuzzy" : { "descripcion.es": "tapestry" }
    },
    "suggest": {
        "suggest1" : {
            "text" : "tapestyr desarrallo",
            "term" : {
                "field" : "descripcion.es"  
            }
        }
    }
}'