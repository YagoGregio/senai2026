const express = require('express');
const routes = express.Router();

const {cadastrarFilme, listarFilme, buscarFilme, apagarFilme} = require('../controllers/filme_controller');

routes.post('/cadastrarFilme', cadastrarFilme);
routes.get('/listarFilme', listarFilme);
routes.get('/buscar/:id', buscarFilme);
routes.delete('/apagar/:id', apagarFilme);

module.exports = routes;