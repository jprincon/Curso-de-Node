const { response, request } = require('express');

/**  */
const usuarioGet = (req = request, res = response) => {

    const {
        orderby = 'nombre',
            type = 'asc',
            apikey
    } = req.query;

    res.status(200).json({
        ok: true,
        msg: 'prueba de get - Controlador',
        orderby,
        type,
        apikey
    });
};

const usuarioPost = (req, res) => {

    const body = req.body;

    res.status(201).json({
        ok: true,
        msg: 'prueba de post',
        body
    });
};

const usuarioPut = (req, res) => {

    const body = req.body;

    res.status(202).json({
        ok: true,
        msg: 'prueba de put'
    });
};

const usuarioDelete = (req, res) => {

    const id = req.params.id;

    res.status(200).json({
        ok: true,
        msg: 'prueba de delete id = ' + id,
        id
    });
};

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}