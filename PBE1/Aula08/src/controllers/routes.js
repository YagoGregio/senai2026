const express = require('express');
const router = express.Router();

const Cliente = require("./cliente");

router.get("/clientes", Cliente.listar);
router.post("/clientes", Cliente.criar);
router.put("/clientes/:id", Cliente.alterar);
router.delete("/clientes/:id", Cliente.excluir);


const Pedidos = require("./pedido");

router.get("/pedidos", Pedidos.listar);
router.post("/pedidos", Pedidos.criar);
router.put("/pedidos/:id", Pedidos.alterar);
router.delete("/pedidos/:id", Pedidos.excluir);


const rotaInicial = (req,res) => {
    res.json("MVC respondendo");
}

router.get("/", rotaInicial);

module.exports = router;