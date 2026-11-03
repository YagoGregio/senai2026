const express = require('express');
const routes = express.Router();

const {cadastrar, listar,buscar} = require('../controllers/cliente_controller');

routes.post('/cadastrar', cadastrar);
routes.get('/listar', listar);
routes.get('/buscar/:id', buscar);
module.exports = routes;