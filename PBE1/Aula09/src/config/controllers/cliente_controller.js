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

module.exports = {
    cadastrar
}