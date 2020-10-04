const { Router } = require('express');
const routes = Router();

const usuarioRoute = require('./UsuarioRoute');
routes.use('/api', usuarioRoute);

module.exports = routes;
