$ curl -XGET 'http://localhost:9200/blogbitix/libro/_search?pretty=true' -d '{
    "query" : {
        "fuzzy" : { "descripcion.es": "tapestry" }
    },
    "facets": {
        "etiquetas": { "terms": { "field": "etiquetas.es.untouched" } }
    }
}'