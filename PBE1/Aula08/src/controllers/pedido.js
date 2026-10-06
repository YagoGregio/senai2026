const pedidos = require('../../dados/pedidos.json');

const listar = (req, res) => {
    calcTotais();
    res.json(pedidos);
};

function calcTotais() {
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

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    const item = pedidos.find(i => i.id == id);

    if (!item) {
        return res.status(404).send("Pedido não encontrado!");
    }

    item.id = dados.id;
    item.cliente_id = dados.cliente_id;
    item.produto = dados.produto;
    item.preco = dados.preco;
    item.quantidade = dados.quantidade;

    res.send("Pedido alterado com sucesso!");
};

const excluir = (req, res) => {
    const id = req.params.id;
    const indice = pedidos.findIndex(item => item.id == id);

    if (indice === -1) {
        return res.status(404).send("Pedido não encontrado!");
    }

    pedidos.splice(indice, 1);
    res.send("Pedido excluído com sucesso!");
}
const subtotal = (req, res) => { res.json("Em construção") };

module.exports = {
    criar, listar, alterar, excluir, subtotal
}