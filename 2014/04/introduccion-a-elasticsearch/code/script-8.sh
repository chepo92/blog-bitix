$ curl -XGET 'http://localhost:9200/blogbitix/libro/_search?pretty=true' -d '{
    "query" : {
        "bool" : {
            "must" : {
                "fuzzy" : { "descripcion.es": "tapestry" }
            },
            "must_not" : {
                "query_string" : {
                    "fields" : ["descripcion.es"],
                    "query" : "\"tapestry 3\""
                }
            },
            "should" : [{ 
                "match" : {
                    "descripcion.es" : {
                        "query" : "guía",
                        "type" : "phrase"
                    }
                }
            }]
        }
    }
}'