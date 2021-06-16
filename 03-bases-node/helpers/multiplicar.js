const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {

        let nombreArchivo = '';

        let salida = '======================================\n'.green;
        salida += 'Tabla de Multiplicar del: '.green + base.toString().magenta + '\n';
        salida += '======================================\n'.green;

        let salidaFs = '======================================\n';
        salidaFs += 'Tabla de Multiplicar del: ' + base + '\n';
        salidaFs += '======================================\n';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.red} ${i} ${'='.red} ${ base * i} \n`;
            salidaFs += `${base} x ${i} = ${ base * i} \n`;
        }

        try {
            nombreArchivo = `./salida/tabla-${base}.txt`;
            fs.writeFileSync(nombreArchivo, salidaFs);
        } catch (error) {
            reject(error)
        }

        if (listar) {
            console.log(salida);
        }
        resolve(nombreArchivo);
    });
}

module.exports = {
    crearArchivo
}