const express = require('express');
const routes = express.Router();

const {cadastrar, listar} = require('../controllers/cliente_controller');

routes.post('/cadastrar', cadastrar);
routes.get('/listar', listar);
module.exports = routes;