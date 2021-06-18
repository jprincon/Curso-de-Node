/** Iniciar el servidor express */
const express = require('express');
const cors = require('cors');
const app = express();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Rutas de Usuarios
        this.usuariosPath = '/api/usuarios';

        // Middlewares: Función que siempre se ejecuta
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    /** ## Routes
     *  Se genera un Middleware para cada unas de las rutas que se usará en la aplicación
     */
    routes() {
        /** Configurar las rutas */
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    /** ## Middlewares
     *  Establece todos los middlewares de la aplicación
     */
    middlewares() {

        // Para el CORS de la App
        app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Generando el contenido estático
        this.app.use(express.static('public'));


    }

    /** ## Listen
     *  Escucha al puerto ${ port } específico de la aplicación
     */
    listen() {

        /** Escuchando al puerto de la aplicación */
        this.app.listen(this.port, () => {
            console.log(`El RESTServer esta corriendo en http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;