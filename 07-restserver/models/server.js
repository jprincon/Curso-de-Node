/** Iniciar el servidor express */
const express = require('express');
const cors = require('cors');
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Rutas de la Aplicación
        this.usuariosPath = '/api/usuario';

        // Middlewares: Función que siempre se ejecuta
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

        // Generar la documentación
        this.documentacion();
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

    /** Generar la documentación con Swagger */
    documentacion() {
        const swaggerOptions = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Documentación Node-Server',
                    description: 'Documentación de los servicios del API Node-Server',
                    version: '1.0.0',
                    contact: {
                        name: 'jarincon@uniquindio.edu.co'
                    }
                },
                servers: [{
                    url: 'http://localhost:3000'
                }]
            },
            apis: ['./routes/*.js']
        };

        const swaggerDocs = swaggerJsDoc(swaggerOptions);
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    }
}

module.exports = Server;