$ curl -XPUT 'http://localhost:9200/blogbitix/libro/_mapping' -d '{
    "properties" : {
        "nombre" : {
            "type" : "object",
            "properties" : { 
                "es": { "type" : "string", "index" : "analyzed", "analyzer" : "spanish" },
                "en": { "type" : "string", "index" : "analyzed", "analyzer" : "english" }
            }
        },
        "descripcion" : {
            "type" : "object",
            "properties" : { 
                "es": { "type" : "string", "index" : "analyzed", "analyzer" : "spanish", "store": "yes" },
                "en": { "type" : "string", "index" : "analyzed", "analyzer" : "english", "store": "yes" }
            }
        },
        "etiquetas" : {
            "type" : "object",
            "properties" : { 
                "es": { 
                    "type" : "multi_field",
                    "fields" : {
                        "term" : { "type" : "string", "index" : "analyzed", "analyzer" : "spanish" },
                        "untouched" : {"type" : "string", "index" : "not_analyzed"}
                    }
                },
                "en": { 
                    "type" : "multi_field",
                    "fields" : {
                        "term" : { "type" : "string", "index" : "analyzed", "analyzer" : "english" },
                        "untouched" : {"type" : "string", "index" : "not_analyzed"}
                    }
                }
            }
        },
        "cantidad" : { "type" : "long" }
    }
}
}'