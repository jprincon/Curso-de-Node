const fs = require('fs');

const fileName = './db/data.json';

/** ## Guardar los datos en la base de datos
 * Método: guardarDB
 * Argumento: lista de tareas de la instancia tarea
 */
const guardarDB = (data) => {

    try {
        fs.writeFileSync(fileName, JSON.stringify(data));
    } catch (error) {
        console.log(error.red);
    }
}

const leerDB = () => {
    if (!fs.existsSync(fileName)) {
        return null;
    }

    const info = fs.readFileSync(fileName, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    console.log(data);

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}