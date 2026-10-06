const clientes = require("../../dados/clientes.json")

const listar = (req, res) => {
    res.json(clientes);
};

const criar = (req, res) => { res.json("Em construção") };
const alterar = (req, res) => { res.json("Em construção") };
const excluir = (req, res) => { res.json("Em construção") };

module.exports = {
    criar, listar, alterar, excluir
}