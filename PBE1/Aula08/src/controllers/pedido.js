const pedidos = require('../../dados/pedidos.json');

const listar = (req,res) => {
    subtotais();
    res.json(pedidos);
};

function subtotais() {
    pedidos.forEach(p => {
        p.subtotais = p.quantidade * p.preco;
    });
}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(pedidos[pedidos.length - 1].id + 1);
    pedidos.push(dados);
    res.status(201).json(dados);
};

const alterar = (req,res) => { res.json("Em construção") };
const excluir = (req,res) => { res.json("Em construção") };
const subtotal = (req,res) => { res.json("Em construção") };

module.exports = {
    criar, listar, alterar, excluir, subtotal
}