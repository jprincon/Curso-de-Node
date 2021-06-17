require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

console.clear();

const main = async() => {

    const busquedas = new Busquedas();

    let opt = 0;
    do {
        opt = await inquirerMenu();
        console.log({ opt });

        switch (opt) {
            case 1:
                // Mostrar mensaje para que escriba
                const terminoBusqueda = await leerInput('Ciudad: ');

                // Buscar los lugares
                const lugares = await busquedas.ciudad(terminoBusqueda);

                // Seleccionar el lugar
                const idSel = await listarLugares(lugares);

                if (idSel === '0') {
                    continue;
                }
                const lugarSel = lugares.find(lugar => lugar.id === idSel);

                // Guardar en la DB
                busquedas.agregarHistorial(lugarSel.nombre);

                // Datos del clima
                const climaLugar = await busquedas.clima(lugarSel.lat, lugarSel.lng);

                // Mostrar los resultados
                console.clear();
                console.log('\nInformación de la Ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre.green);
                console.log('Descripción:', climaLugar.desc.green);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', climaLugar.temp);
                console.log('Mínima: ', climaLugar.min);
                console.log('Máxima: ', climaLugar.max);
                console.log('Humedad: ', climaLugar.hum);
                break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${ i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }

        if (opt !== 0) {
            await pausa();
        }

    } while (opt !== 0);

    console.clear();
}

main();