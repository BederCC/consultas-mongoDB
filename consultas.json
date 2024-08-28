// Este comando inserta un único documento en la colección 'users'.
// Se utiliza para añadir un nuevo usuario con sus detalles específicos como nombre, email, edad, dirección y pasatiempos.

db.users.insertOne({
    name: "",       // Nombre del usuario (cadena de texto)
    email: "",      // Correo electrónico del usuario (cadena de texto)
    age: 0,         // Edad del usuario (número)
    address: {      // Dirección del usuario (objeto anidado)
        street: "", // Calle (cadena de texto)
        city: "",   // Ciudad (cadena de texto)
        state: "",  // Estado o provincia (cadena de texto)
        zip: ""     // Código postal (cadena de texto)
    },
    hobbies: []     // Lista de pasatiempos del usuario (arreglo de cadenas de texto)
})
