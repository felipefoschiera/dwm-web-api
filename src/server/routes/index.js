const { Router } = require('express');
const routes = Router();

const usuarioRoute = require('./UsuarioRoute');
const projetoRoute = require('./ProjetoRoute');
routes.use('/api', usuarioRoute);
routes.use('/api', projetoRoute);

module.exports = routes;
