const colors = require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput,
    confirmar,
    listadoTareasBorrar,
    listadoTareasCompletar
} = require('./helpers/inquirer');

const Tareas = require('./models/Tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();
const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromData(tareasDB)
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const descripcionTarea = await leerInput('Tarea: ');
                tareas.crearTarea(descripcionTarea);
                break;
            case '2':
                tareas.listadoCompletoTareas;
                break;
            case '3':
                tareas.listarTareas(true);
                break;
            case '4':
                tareas.listarTareas(false);
                break;
            case '5':
                const ids = await listadoTareasCompletar(tareas.listadoCompletoTareasArray);
                tareas.completarTareas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoCompletoTareasArray);
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro de eliminar la tarea?');
                    tareas.borrarTarea(id, ok);
                    console.log('La tarea se elimino correctamente');
                }
                break;
        }

        guardarDB(tareas.listadoCompletoTareasArray);

        if (opt !== '0') {
            await pausa();
        }

    } while (opt !== '0')
}

main();