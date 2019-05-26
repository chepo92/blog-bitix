$ curl -XPUT 'http://localhost:9200/blogbitix/libro/1' -d '{
    "nombre" : {
        "es": "PlugIn Tapestry",
        "en": "PlugIn Tapestry"
    },
    "descripcion" : {
        "es": "Desarrollo de aplicaciones y páginas web con Apache Tapestry",
        "en": "Development of applications and web pages with Apache Tapestry"
    },
    "etiquetas" : {
        "es": ["libro", "tecnologia", "tapestry", "java", "español"],
        "en": ["book", "tecnology", "tapestry", "java", "spanish"]
    },
    "cantidad" : 1000
}'

$ curl -XPUT 'http://localhost:9200/blogbitix/libro/2' -d '{
    "nombre" : {
        "es": "Tapestry 5 - Desarrollo rápido de aplicaciones web en Java",
        "en": "Tapestry 5 - Rapid web application development in Java"
    },
    "descripcion" : {
        "es": "Una guía completa presentando Apache Tapestry y su aproximación inovadora para la construcción de aplicaciones web modernas",
        "en": "A comprehensive guide, introducing Apache Tapestry and its innovative approach to building modern web applications"
    },
    "etiquetas" : {
        "es": ["libro", "tecnologia", "tapestry", "java", "inglés"],
        "en": ["book", "tecnology", "tapestry", "java", "english"]
    },
    "cantidad" : 1000
}'

$ curl -XPUT 'http://localhost:9200/blogbitix/libro/3' -d '{
    "nombre" : {
        "es": "Tapestry in Action",
        "en": "Tapestry in Action"
    },
    "descripcion" : {
        "es": "Tapestry in Action e la introducción definitiva a Tapestry 3 escrito por Howard Lewis Ship, el creador de Tapestry",
        "en": "Tapestry in Action is the definitive introduction to Tapestry 3 written by Howard Lewis Ship, the creator of Tapestry"
    },
    "etiquetas" : {
        "es": ["libro", "tecnologia", "tapestry", "java", "inglés"],
        "en": ["book", "tecnology", "tapestry", "java", "english"]
    },
    "cantidad" : 1000
}'