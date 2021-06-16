console.clear();

const empleados = [{
        id: 1,
        nombre: 'Julián'
    },
    {
        id: 2,
        nombre: 'Andrés'
    },
    {
        id: 3,
        nombre: 'Rincón'
    }
]

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (empleado) {
        return callback(empleado.nombre, null);
    } else {
        return callback(null, `El empleado con Id = ${id} no existe`);
    }
}

const getSalarioById = (id, callback) => {

    const salario = salarios.find((salario) => {
        return salario.id === id;
    });

    if (salario) {
        return callback(salario.salario, null);
    } else {
        return callback(null, `El salario con Id = ${id} no existe`);
    }
}

const id = 3;

getEmpleadoById(id, (empleado, err) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalarioById(id, (salario, err) => {

        if (err) {
            console.log('ERROR!');
            return console.log(err);
        }

        console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
    });
});