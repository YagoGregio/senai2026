const express = require("express");
const itens = require("../dados.json");

const mostrarPatrimonio = (req, res) => {
    res.send(itens)
}

const novoPatrimonio = (req, res) => {
    if (req.body) {
        res.send("Patrimonio cadastrado com sucesso!");
        itens.push(req.body)
    } else {
        res.send("Falha ao cadastrar patrimonio!");
    }
}

const excluirPatrimonio = (req, res) => {
    const id = req.params.id;

    itens.forEach((pedido, indice) => {
        if (pedido.id == id) {
            itens.splice(indice, 1);
        }
    });
};

const alterarPatrimonio = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    itens.forEach((pedido) => {
        if (pedido.id == id) {
            pedido.item = dados.item;
            pedido.local = dados.local;
            pedido.dataRegistro = dados.dataRegistro;
            pedido.valor = dados.valor;
            pedido.patrimonio = dados.patrimonio;
        };
    });
};

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const porta = 3000;

app.get("/", mostrarPatrimonio);
app.post("/", novoPatrimonio);
app.delete("/:id", excluirPatrimonio);
app.put("/:id", alterarPatrimonio)

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`);
});