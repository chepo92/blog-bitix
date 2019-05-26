$ curl -XGET 'http://localhost:9200/blogbitix/libro/_search?pretty=true' -d '{
    "query" : {
        "query_string": {  
            "query": "Tapestry"
        }
    },
    "highlight" : {
        "fields" : {
            "descripcion.es" : { }
        }
    }
}'