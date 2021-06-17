const fs = require('fs');

const axios = require('axios');
const { leerInput } = require('../helpers/inquirer');

class Busquedas {
    historial = [];
    dbPath = './db/database.json';

    constructor() {
        this.leerDB();
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    /** Capitalizar cada una de las palabras en la búsqueda*/
    get historialCapitalizado() {
        // Mi solución
        /* this.historial.forEach((lugar, i) => {
            const idx = `${ i + 1}.`.green;
            
            const nombres = lugar.split(' ');
            let lugarSel = [];
            nombres.forEach(nombre => {
                nombre = nombre.substr(0, 1).toUpperCase() + nombre.substr(1, nombre.length);
                lugarSel.push(nombre);
            });
            lugar = lugarSel.join(', ');
            console.log(`${idx} ${lugar}`);
        }); */

        // Solución del profesor
        return this.historial.map(lugar => {

            let palabras = lugar.split(' ');
            palabras = palabras.map(palabra => palabra[0].toUpperCase() + palabra.substr(1));

            return palabras.join(' ');
        });
    }

    async ciudad(lugar = '') {

        try {
            // Realizar petición HTTP
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

        } catch (error) {
            console.log('\nBúsqueda sin resultados'.green);
            return [];
        }
    }

    async clima(lat = '', lon = '') {
        try {

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsWeather, lat, lon }
            });

            const resp = await instance.get();

            return {
                desc: resp.data.weather[0].description,
                min: resp.data.main.temp_min,
                max: resp.data.main.temp_max,
                hum: resp.data.main.humidity,
                temp: resp.data.main.temp
            }

        } catch (error) {
            console.log('Error'.red, error);
        }
    }

    /** Permite agregar una ciudad al historial */
    agregarHistorial(lugar = '') {

        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return;
        }

        this.historial.unshift(lugar.toLocaleLowerCase());

        // Guardar en DB
        this.guardarDB();
    }

    /** Guardar en la base de datos */
    guardarDB() {
        const payLoad = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payLoad));
    }

    /** Leer el archivo JSON de la base de datos */
    leerDB() {
        if (!fs.existsSync(this.dbPath)) {
            return null;
        }

        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);

        this.historial = data.historial;
    }
}

module.exports = Busquedas;