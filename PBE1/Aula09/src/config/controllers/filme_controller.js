const filme = require('../models/filme_model');

const cadastrarFilme = async (req, res) => {
    try {
        const {nome, idioma, quantidade} = req.body;

        let retorno = await filme.cadastrarFilme(req.body);

        res.json(retorno).status(201).end();
    } catch (err) {
        res.status(500).json({error: err.message}).end();
    }
};

const listarFilme = async (req, res) => {
  try {
    let filmes = await filme.listarFilme();

    res.status(200).json(filmes).end();
  } catch (err) {
    res.status(500).json({ error: err.message }).end();
  }
};