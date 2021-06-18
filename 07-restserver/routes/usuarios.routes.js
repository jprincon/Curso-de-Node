const { Router } = require('express');
const { usuarioGet, usuarioDelete, usuarioPut, usuarioPost } = require('../controllers/usuario.controller');

const router = Router();

router.get('/', usuarioGet);

router.post('/', usuarioPost);

router.put('/', usuarioPut);

router.delete('/:id', usuarioDelete);


module.exports = router;