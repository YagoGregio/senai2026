const clientes = require("../../dados/clientes.json")

const listar = (req, res) => {
    res.json(clientes);
};

const criar = (req, res) => {
    const dados = req.body;
    dados.id = Number(clientes[clientes.length - 1].id + 1);
    clientes.push(dados);
    res.status(201).json(dados);
};

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    const item = clientes.find(i => i.id == id);

    if (!item) {
        return res.status(404).send("Cliente não encontrado!");
    }

    item.id = dados.id;
    item.cpf = dados.cpf;
    item.nome = dados.nome;

    res.send("Cliente alterado com sucesso!");
};

const excluir = (req, res) => {
    const id = req.params.id;
    const indice = clientes.findIndex(item => item.id == id);

    if (indice === -1) {
        return res.status(404).send("Cliente não encontrado!");
    }

    clientes.splice(indice, 1);
    res.send("Cliente excluído com sucesso!");
}

module.exports = {
    criar, listar, alterar, excluir
}