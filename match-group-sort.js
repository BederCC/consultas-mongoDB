[
  {
    $match: {
      // Filtra los documentos para que solo se incluyan aquellos donde:
      // 1. 'type' es igual a 'movie'.
      // 2. 'released' es igual o posterior al 1 de enero del 2000.
      type: "movie",
      released: {
        $gte: ISODate("2000-01-01") // Selecciona las películas lanzadas desde el 1 de enero del 2000 en adelante.
      }
    }
  },
  {
    $group:
      /**
       * Agrupa los documentos por un campo especificado. En este caso, los documentos se agrupan por 'year'.
       * Para cada grupo, calcula el promedio del campo 'runtime'.
       */
      {
        _id: "$year",              // Agrupa los documentos por el campo 'year' (asumiendo que existe un campo llamado 'year').
        average: {
          $avg: "$runtime"         // Calcula el promedio del campo 'runtime' para cada grupo.
        }
      }
  },
  {
    $sort:
      /**
       * Ordena los resultados de la agregación.
       * En este caso, los resultados se ordenan en orden descendente por el valor promedio de 'runtime'.
       */
      {
        average: -1               // Ordena los documentos por el campo 'average' en orden descendente.
      }
  }
]
