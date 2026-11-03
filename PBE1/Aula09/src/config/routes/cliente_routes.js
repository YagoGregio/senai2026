const express = require('express');
const routes = express.Router();
const clienteCadastrar = require('../controllers/cliente_controller');

routes.post('/clientes', clienteCadastrar.cadastrar);

module.exports = routes;