const { Router } = require('express');
const { usuarioGet, usuarioDelete, usuarioPut, usuarioPost } = require('../controllers/usuario.controller');

const router = Router();

// Título de la sección de una ruta
/**
 * @swagger
 * tags:
 *      name: Usuarios
 *      description: Servicios para Usuarios
 */

// Esquema-Modelo del Servicio
/**
 * @swagger
 * components:
 *      schemas:
 *          Usuario:
 *              type: object
 *              required:
 *                  -title
 *                  -autor
 *              properties:
 *                  id:
 *                      type: string
 *                      description: Identificador único del Usuario
 *                  nombre:
 *                      type: string
 *                      description: Nombre del Usuario
 *                  correo:
 *                      type: string
 *                      description: Correo del Usuario
 *                  contra:
 *                      type: string
 *                      description: Contraseña del Usuario 
 *              example:
 *                  id: ijui-olio-polo-qied
 *                  nombre: julián andrés rincón penagos
 *                  correo: jarincon@uniquindio.edu.co
 *                  contra: 1234657890
 */


// Servicio para un Get por ID
/**
 * @swagger
 * /api/usuario/{id}:
 *      get:
 *          summary: devuelve un usuario por ID
 *          tags: [Usuarios]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: El Id del Usuario      
 *          responses: 
 *              200:
 *                  description: Un registro de Usuario por ID
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Usuario'
 *              404:
 *                  description: Registro de Usuario no encontrado
 */
router.get('/:id', usuarioGet);

// Servicio para un GetAll
/**
 * @swagger
 * /api/usuario:
 *      get:
 *          summary: devuelve una lista de Usuarios
 *          tags: [Usuarios]
 *          responses: 
 *              200:
 *                  description: Arreglo de Usuarios
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Usuario'
 */
router.get('/', usuarioGet);

/**
 * @swagger
 * /api/usuario:
 *      post:
 *          summary: Crear un nuevo usuario
 *          tags: [Usuarios]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario' 
 *          responses: 
 *              200:
 *                  description: El libro se creo correctamente
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Usuario'
 *              500: 
 *                  description: Error para crear el Usuario - Error en el Servidor 
 */
router.post('/', usuarioPost);

/**
 * @swagger
 * /api/usuario:
 *      put:
 *          summary: Crear un nuevo usuario
 *          tags: [Usuarios]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario' 
 *          responses: 
 *              200:
 *                  description: El libro se creo correctamente
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Usuario'
 *              404:
 *                  description: El usuario no esta registrado
 *              500: 
 *                  description: Error para actualizar el Usuario - Error en el Servidor 
 */
router.put('/', usuarioPut);

/**
 * @swagger
 * /api/usuario/{id}:
 *      delete:
 *          summary: devuelve un usuario por ID
 *          tags: [Usuarios]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                      type: string
 *                required: true
 *                description: El Id del Usuario      
 *          responses: 
 *              200:
 *                  description: El usuario de elimino correctamente
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Usuario'
 *              404:
 *                  description: Usuario no encontrado
 */
router.delete('/:id', usuarioDelete);

module.exports = router;