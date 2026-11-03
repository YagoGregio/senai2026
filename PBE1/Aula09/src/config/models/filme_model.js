const con = require("../db");

const cadastrarFilme = async ({ nome, idioma, quantidade }) => {
  const [result] = await con.query(
    "INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?);",
    [nome, idioma, quantidade],
  );

  return {
    id: result.insertId,
    nome: nome,
    idioma: idioma,
    quantidade: quantidade,
  };
};

const listarFilme = async () => {
  const [filmes] = await con.query("SELECT * FROM filmes;");

  return filmes;
};