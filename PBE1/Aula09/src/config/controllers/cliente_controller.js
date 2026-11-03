const cliente = require('../models/cliente_model');

const cadastrar = async (req, res) => {
    try {
        const { nome, cpf, email, senha } = req.body;

        let retorno = await cliente.cadastrar(req.body);

        res.json(retorno).status(201).end();
    } catch (err) {
        res.json({ error: err.message }).status(500).end();
    }
};

const listar = async (req, res) => {
    try {
        let clientes = await cliente.listar();

        res.status(200).json(clientes).end();
    } catch (err) {
        res.status(500).json({ error: err.message }).end();
    }

};

module.exports = {
    cadastrar,
    listar
}