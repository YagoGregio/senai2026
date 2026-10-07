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
    const info = req.body;

    const busca = clientes.find((dado) => dado.id == id);

    Object.keys(info).forEach((i) => {
        busca[i] = info[i];
    });

    res.send("Alteração realizada com sucesso!").end();
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