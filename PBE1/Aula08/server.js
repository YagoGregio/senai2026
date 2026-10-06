const express = require("express");
const cors = require("cors");

// Colocar o caminho das rotas
const routes = require("./src/controllers/routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta http://localhost:${porta}`);
});