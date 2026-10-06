const pedidos = require('../../dados/pedidos.json');

const listar = (req,res) => {
    subtotais();
    res.json(pedidos);
};

function subtotais() {
    pedidos.forEach(p => {
        p.subtotais = p.quantidades * p.preco;
    });
}

const criar = (req,res) => { res.json("Em construção") };
const alterar = (req,res) => { res.json("Em construção") };
const excluir = (req,res) => { res.json("Em construção") };
const subtotal = (req,res) => { res.json("Em construção") };

module.exports = {
    criar, listar, alterar, excluir, listar
}