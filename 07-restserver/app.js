require('dotenv').config();

const Server = require("./models/server");


/** Iniciar el servidor */
const server = new Server();

// Escuchar al puerto
server.listen();