console.clear();

setTimeout(() => {
    console.log('Hola Mundo');
}, 1000);

const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Julián Andrés Rincón Penagos'
    }

    setTimeout(() => {
        callback({ usuario: user });
    }, 1500);
};

getUsuarioById(10, (usuario) => {
    console.log(usuario);
});