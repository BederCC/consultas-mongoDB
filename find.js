// Este comando busca y devuelve todos los documentos en la colección 'movies' que tengan el campo 'type' igual a 'movie'.
// Se utiliza para filtrar y recuperar documentos específicos basados en un criterio de búsqueda en MongoDB.
// En este caso, se recuperan únicamente los documentos que representan películas, asumiendo que 'type' es un campo que clasifica el tipo de contenido.

// Ejemplo:
// Si la colección 'movies' contiene documentos de diferentes tipos (por ejemplo, películas y series),
// este comando solo devolverá aquellos documentos donde el campo 'type' tenga el valor 'movie'.

db.movies.find({type: 'movie'})
