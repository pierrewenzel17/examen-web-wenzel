import {schema} from "./openapiSchema.js";

const swaggerDoc = {
    openapi: '3.0.1',
    info: {
        version: '0.0.1',
        title: 'Music API',
        description: 'User management API',
        contact: {
            name: 'Marc Petitdemange',
            email: 'marc.petitdemange57@gmail.com'
        }
    },
    components: {
      schemas : schema,
    },
    servers: [{
        'url' : 'http://localhost:3000/'
    }],
    "paths": {
        "/musics": {
            "get": {
                "description": "Recupere la liste de TOUTES les musiques",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "204": {
                        "description": "No Content"
                    }
                }
            }
        },
        "/musics/random": {
            "get": {
                "description": "Recupere une musique de manière aléatoire dans la liste des musiques",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "204": {
                        "description": "No Content"
                    }
                }
            }
        },
        "/musics/{id}": {
            "get": {
                "description": "Recupere une musique selon un id passé dans l'URL",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "204": {
                        "description": "No Content"
                    }
                },
            },
            "parameters" : [{
                "in": "path",
                "name" : "id",
                "schema" : {
                    "type" : "integer"
                },
                "required" : "true"
            }]
        },
        "/musics/title/{title}": {
            "get": {
                "description": "Recherche les musiques à partir de leur titre. Renvoie un tableau avec les musiques dont le titre correspond au paramètre passé dans l'URL.",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "204": {
                        "description": "No Content"
                    }
                }
            },
            "parameters" : [{
                "in": "path",
                "name" : "title",
                "schema" : {
                    "type" : "string"
                },
                "required" : "true"
            }]
        },
        "/musics ": {
            "post": {
                "description": "Ajoute une musique dans la liste",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "409": {
                        "description": "Music already exist"
                    }
                },
                "requestBody" : {
                    "content" : {
                        "application/json" : {
                            "schema" : {
                                "$ref" : "#components/schemas/Music"
                            }
                        }
                    }
                }
            }
        },
        "/musics/{id} ": {
            "put": {
                "description": "Edite la musique dont l'identifiant est passé dans l'URL",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                },
                "requestBody" : {
                    "content" : {
                        "application/json" : {
                            "schema" : {
                                "$ref" : "#components/schemas/Music"
                            }
                        }
                    }
                }
            },
            "parameters" : [{
                "in": "path",
                "name" : "id",
                "schema" : {
                    "type" : "integer"
                },
                "required" : "true"
            }]
        },
        "/musics/{id}  ": {
            "delete": {
                "description": "Supprime la musique dont l'id est passé dans l'URL de la liste",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                }
            },
            "parameters" : [{
                "in": "path",
                "name" : "id",
                "schema" : {
                    "type" : "integer"
                },
                "required" : "true"
            }]
        },

    }
};

export {swaggerDoc}
