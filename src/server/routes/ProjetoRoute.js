const express = require('express');
const routes = express.Router();
const controle = require('../controller/ProjetoController');

routes.route('/projetos').get(controle.listar);
routes.route('/projetos').post(controle.incluir);
routes.route('/projetos').put(controle.alterar);
routes.route('/projetos/:id').delete(controle.excluir);
routes.route('/projetos/:id').get(controle.obterPeloId);
routes.route('/projetos/filtro/:filtro').get(controle.filtrar);

module.exports = routes;