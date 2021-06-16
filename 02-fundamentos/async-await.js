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

// Definición de una función con async
const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleadoById(id);
        const salario = await getSalarioById(id);
        return `${empleado.nombre} recive un salario de ${salario.salario}`;
    } catch (error) {
        throw error;
    }
};

// Una forma de usar Async-Await
const id = 10;

getInfoUsuario(id).then((msg) => {
    console.log('Info generada existosamente');
    console.log(msg);
}).catch((err) => {
    console.log('Error para obtener la info del usuario');
    console.log(err);
});