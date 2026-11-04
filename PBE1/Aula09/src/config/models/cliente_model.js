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
  const [clientes] = await con.query("SELECT id_cliente,nome,cpf,email FROM clientes;");

  return clientes;
};

const buscar = async (id_cliente) => {
  const [result] = await con.query(
    "SELECT * FROM clientes WHERE id_cliente = ?;",
    [id_cliente],
  );

  return result;
};

const apagar = async (id_cliente) => {
  const [result] = await con.query(
    "DELETE FROM clientes WHERE id_cliente = ?;",
    [id_cliente],
  );

  return result.affectedRows > 0; // Retorna true se algum registro foi deletado, caso contrário, retorna false
};


const alterar = async (req, res) => {};

module.exports = {
  cadastrar,
  listar,
  buscar,
  apagar,
  alterar
};
