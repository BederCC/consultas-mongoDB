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


// Este comando inserta varios documentos en la colección 'users' al mismo tiempo.
// Es útil cuando se necesita añadir múltiples usuarios en una sola operación.

db.users.insertMany([
    {
        name: "",       // Nombre del primer usuario (cadena de texto)
        email: "",      // Correo electrónico del primer usuario (cadena de texto)
        age: 0,         // Edad del primer usuario (número)
        address: {      // Dirección del primer usuario (objeto anidado)
            street: "", // Calle (cadena de texto)
            city: "",   // Ciudad (cadena de texto)
            state: "",  // Estado o provincia (cadena de texto)
            zip: ""     // Código postal (cadena de texto)
        },
        hobbies: []     // Lista de pasatiempos del primer usuario (arreglo de cadenas de texto)
    },
    {
        name: "",       // Nombre del segundo usuario (cadena de texto)
        email: "",      // Correo electrónico del segundo usuario (cadena de texto)
        age: 0,         // Edad del segundo usuario (número)
        address: {      // Dirección del segundo usuario (objeto anidado)
            street: "", // Calle (cadena de texto)
            city: "",   // Ciudad (cadena de texto)
            state: "",  // Estado o provincia (cadena de texto)
            zip: ""     // Código postal (cadena de texto)
        },
        hobbies: []     // Lista de pasatiempos del segundo usuario (arreglo de cadenas de texto)
    }
    // Puedes añadir más documentos según sea necesario
])

// Este comando elimina una colección completa en la base de datos actual.
// Se utiliza cuando ya no necesitas la colección y deseas eliminar todos sus documentos y el esquema asociado.
// Ten en cuenta que esta operación es irreversible y eliminará permanentemente todos los datos en la colección.
db.collectionName.drop()
