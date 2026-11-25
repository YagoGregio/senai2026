const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/produtoController');

routes.get ('/', produtoController.listar);
routes.get ('/:id', produtoController.buscarPorID)
routes.post('/', produtoController.criar)
routes.put('/:id', produtoController.atualizar)
routes.delete('/:id', produtoController.excluir)


module.exports = routes