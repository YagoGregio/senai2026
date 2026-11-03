const express = require('express');
const routes = express.Router();

const {cadastrar, listar,buscar, apagar} = require('../controllers/cliente_controller');

routes.post('/cadastrar', cadastrar);
routes.get('/listar', listar);
routes.get('/buscar/:id', buscar);
routes.delete('/apagar/:id', apagar);
module.exports = routes;