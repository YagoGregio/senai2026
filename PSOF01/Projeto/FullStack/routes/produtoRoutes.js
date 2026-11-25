const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get ('/', produtoController.listar);
router.get ('/:id', produtoController.buscarPorID)
router.post('/', produtoController.criar)


module.exports = router