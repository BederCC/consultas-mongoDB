// Este comando busca y devuelve todos los documentos en la colección 'movies' que tengan el campo 'type' igual a 'movie'.
// Se utiliza para filtrar y recuperar documentos específicos basados en un criterio de búsqueda en MongoDB.
// En este caso, se recuperan únicamente los documentos que representan películas, asumiendo que 'type' es un campo que clasifica el tipo de contenido.

// Ejemplo:
// Si la colección 'movies' contiene documentos de diferentes tipos (por ejemplo, películas y series),
// este comando solo devolverá aquellos documentos donde el campo 'type' tenga el valor 'movie'.

db.movies.find({type: 'movie'})



// Este objeto de consulta se utiliza para buscar documentos en una colección de MongoDB que cumplan con dos condiciones:
// 1. El campo 'type' debe ser igual a 'movie'.
// 2. El campo 'released' debe ser una fecha igual o posterior al 1 de enero del 2000.

// Se utiliza en conjunto con el método 'find()' para recuperar películas que se lanzaron a partir del año 2000.
// La función '$gte' (greater than or equal) indica que solo se seleccionarán los documentos donde la fecha de lanzamiento
// ('released') sea mayor o igual a la fecha especificada.

// Ejemplo de uso en una consulta:
// Si quieres encontrar todas las películas lanzadas desde el año 2000 en adelante, usarías la siguiente consulta:

db.movies.find({
    type: 'movie',             // Filtra solo los documentos donde 'type' es igual a 'movie'
    released: {                // Aplica una condición al campo 'released'
        $gte: ISODate('2000-01-01') // Selecciona fechas iguales o posteriores al 1 de enero del 2000
    }
})
