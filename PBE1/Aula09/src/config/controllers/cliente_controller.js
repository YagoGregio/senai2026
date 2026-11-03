const cliente = require("../models/cliente_model");

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

const buscar = async (req, res) => {
  try {
    const id_cliente = req.params.id;

    const infoCliente = await cliente.buscar(id_cliente);

    if (infoCliente.length === 0) {
      return res.status(404).json({ message: "Cliente não encontrado" }).end();
    } else {
        delete infoCliente[0].senha; // Remove a senha do objeto antes de enviar a resposta 
      res.status(200).json(infoCliente[0]).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message }).end();
  }
};

const apagar = async (req, res) =>{
    try{
        const id_cliente = req.params.id;

        const numLinhas = await cliente.apagar(id_cliente);

        if(numLinhas == 0){
            res.status(404).json({message: "Não foi possível excluir o cliente"}).end(); 
        } else {
            res.status(204).json({message: "Cliente excluído com sucesso"}).end();
        }
    }catch(err){
        res.status(500).json({error: err.message}).end();
    }
}
module.exports = {
  cadastrar,
  listar,
  buscar,
  apagar
};
