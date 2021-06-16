console.clear();

function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 10));
console.log(sumar(5));

// Funciones de flecha
const sumar2 = (a, b) => {
    return a + b
};

console.log(sumar2(10, 12));

// saludar
const saludar = () => {
    return 'Hola Mundo';
}

console.log(saludar());