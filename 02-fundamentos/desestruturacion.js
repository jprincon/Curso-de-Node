const persona = {
    nombre: 'Julián Andrés',
    apellido: 'Rincón Penagos',
    titulo: 'Magister en Ciencias de la Educación',
    edad: 31,
    getNombre: function() {
        return `${ nombre } ${ apellido } - ${ titulo }`
    }
}

// Para extraer cada una de las propiedades de forma larga
const nombre1 = persona.nombre;
const apellido1 = persona.apellido;
const titulo1 = persona.titulo;

console.log(nombre1, apellido1, titulo1);

const { nombre, apellido, titulo, edad = 0 } = persona;
console.log(nombre, apellido, titulo, edad);

// Crear una función tradicional - se puede desestructurar en los argumentos de la función
function imprimePersona({ nombre, apellido, titulo, edad = 0 }) {
    console.log(nombre, apellido, titulo, edad);
}

imprimePersona(persona);

// Desestructurar arreglos - Ejemplo con uso y sin uso
const personas = ['Julián', 'Milena', 'Joel'];

const p1 = personas[0];
const p2 = personas[1];
const p3 = personas[2];

console.log(p1, p2, p3);

const [pp1, pp2, pp3] = personas;
console.log(pp1, pp2, pp3);

// Para obtener solo uno de los elementos
const [, , a3] = personas;
console.log(a3);