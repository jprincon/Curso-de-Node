const Tarea = require("./Tarea");

/** Crea una lista de Tareas del tipo Tarea */
class Tareas {
    _listado = {};

    /** ## Lista de tareas
     * Devuelve un array de las tareas
     */
    get listadoCompletoTareasArray() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    /** ## ListadoCompletoTareas 
     * Devuelve una lista completa de las tareas */
    get listadoCompletoTareas() {

        console.log('');
        this.listadoCompletoTareasArray.forEach((tarea, id) => {
            if (tarea.completadoEn) {
                console.log(`${((id + 1)+'. ').green} ${tarea.descripcion} :: ${'Completada'.green}`);
            } else {
                console.log(`${((id + 1)+'. ').green} ${tarea.descripcion} :: ${'Pendiente'.red}`);
            }
        });
    }

    constructor() {
        this._listado = {};
    }

    listarTareas(completadas) {
        console.log('');
        this.listadoCompletoTareasArray.forEach((tarea, id) => {

            if (completadas) {
                if (tarea.completadoEn) {
                    console.log(`${((id + 1)+'. ').green} ${tarea.descripcion} :: ${tarea.completadoEn.green}`);
                }
            } else {
                if (!tarea.completadoEn) {
                    console.log(`${((id + 1)+'. ').green} ${tarea.descripcion} :: ${'Pendiente'.red}`);
                }
            }
        });
    }

    /** Método que convierte un arreglo de tareas a instancias de la clase Tareas */
    cargarTareasFromData(tareas = []) {
        tareas.forEach((tarea) => {
            // console.log(tarea);
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(descripcion = '') {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    borrarTarea(id = '', ok = false) {
        if (this._listado[id] && ok) {
            delete this._listado[id];
        }
    }

    completarTareas(ids = []) {
        this.listadoCompletoTareasArray.forEach(tarea => {

            if (ids.includes(tarea.id)) {
                tarea.completadoEn = new Date().toISOString();
            } else {
                tarea.completadoEn = null;
            }
        });
        console.log('\n Actualización realizada correctamente');
    }
}

module.exports = Tareas;