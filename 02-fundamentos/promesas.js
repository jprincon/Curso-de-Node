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

const getEmpleadoById = (id) => {


    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((empleado) => {
            return empleado.id === id;
        });

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`El empleado con Id = ${id} no existe`);
        }
    });

    return promesa;
}

const getSalarioById = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find((salario) => {
            return salario.id === id;
        });

        if (salario) {
            resolve(salario);
        } else {
            reject(`El salario con Id = ${id} no existe`);
        }
    });

    return promesa;
}

const id = 3;

// Esta opción es mejor que usar callbacks, pero hay otra forma de hacer promesas en cadena
getEmpleadoById(id).then((empleado) => {
    console.log(empleado);

    getSalarioById(id).then((salario) => {
        console.log(`${empleado.nombre} recive un salario de ${salario.salario}`);
    }).catch((err) => {
        console.error(err);
    })
}).catch((err) => {
    console.error(err);
});

// Promesas en cadena
let nombre;
getEmpleadoById(id)
    .then((empleado) => {
        console.log(empleado);
        nombre = empleado.nombre;
        return getSalarioById(id);
    })
    .then((salario) => {
        console.log(salario);
        console.log(`${nombre} recive un salario de ${salario.salario}`);
    })
    .catch((err) => {
        console.log(err);
    });