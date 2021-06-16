const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta).then((nombreArchivo) => {
    console.log(`Se creo el ${nombreArchivo}`.green);
}).catch((err) => {
    console.error(err);
});