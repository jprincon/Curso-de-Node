const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [{
            value: 1,
            name: `${'1.'.green} Buscar cidad`
        },
        {
            value: 2,
            name: `${'2.'.green} Historial`
        },
        {
            value: 0,
            name: `${'0.'.green} Salir`
        },
    ]
}];

/** Esta función lanza un menú de opciones y no necesita de argumentos */
const inquirerMenu = async() => {

    console.clear();
    console.log('========================'.green);
    console.log(' Seleccione una opción  '.white);
    console.log('========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

/**## Leer Input 
 * Esta función me genera un input de entrada para la aplicación.
 * Se debe enviar cómo parámetro el mensaje que se quiere mostrar
 * en consola.*/
const leerInput = async(mensaje) => {
    const question = [{
        type: 'input',
        name: 'descripcion',
        message: mensaje,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }];

    const { descripcion } = await inquirer.prompt(question);
    return descripcion;
}

const pausa = async() => {

    const opcionPausa = [{
        type: 'input',
        message: `Presione ${'ENTER'.green} par continuar`,
        name: 'opcion'
    }];

    console.log('\n');
    const opcion = await inquirer.prompt(opcionPausa);
    return opcion;
}

const listarLugares = async(lugares = []) => {

    const choices = lugares.map((lugar, index) => {

        const id = `${ ((index + 1) + '.').green}`;
        return {
            value: lugar.id,
            name: `${id} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const listaTareas = [{
        type: 'list',
        name: 'id',
        message: 'Seleccione lugar:',
        choices
    }]

    console.log('');
    const { id } = await inquirer.prompt(listaTareas);
    return id;
}

const listadoTareasCompletar = async(tareas = []) => {

    const choices = tareas.map((tarea, index) => {

        const id = `${ ((index + 1) + '.').green}`;
        return {
            value: tarea.id,
            name: `${id} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const listaTareas = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Completar tareas',
        choices
    }]

    console.log('');
    const { ids } = await inquirer.prompt(listaTareas);
    return ids;
}

const confirmar = async(msg = '') => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message: msg
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    listadoTareasCompletar,
    confirmar
}