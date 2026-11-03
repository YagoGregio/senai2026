const con = require("../db");

const cadastrar = async ({ nome, cpf, email, senha }) => {
  const [result] = await con.query(
    "INSERT INTO clientes VALUES (DEFAULT, ?, ?, ?, ?);",
    [nome, cpf, email, senha],
  );

  return {
    id: result.insertId,
    nome: nome,
    cpf: cpf,
    email: email,
  };
};

const listar = async (req, res) => {
  const [clientes] = await con.query("SELECT * FROM clientes;");

  return clientes;
};

const buscar = async (req, res) => {};

const apagar = async (req, res) => {};

const atualizar = async (req, res) => {};

const alterar = async (req, res) => {};

module.exports = {
  cadastrar,
  listar,
  buscar,
  apagar,
  atualizar,
  alterar,
};
