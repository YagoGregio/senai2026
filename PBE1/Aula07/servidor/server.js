const express = require("express");
const itens = require("../patrimonios.json");

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

const buscarPatrimonio = (req, res) => {
    const id = req.params.id;

    let encontrou = false;

    itens.forEach((item) => {
        if (item.id == id){
            res.send(item)
            encontrou = true
        }
    });

    if (!encontrou){
        res.status(404).send("Patrimonio não encontrado")
    }
};

const excluirPatrimonio = (req, res) => {
    const id = req.params.id;
    const indice = itens.findIndex(item => item.id == id);

    if (indice === -1) {
        return res.status(404).send("Patrimonio não encontrado!");
    }

    itens.splice(indice, 1);
    res.send("Patrimonio excluído com sucesso!");
};

const alterarPatrimonio = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    const item = itens.find(i => i.id == id);

    if (!item) {
        return res.status(404).send("Patrimonio não encontrado!");
    }

    item.item = dados.item;
    item.local = dados.local;
    item.dataRegistro = dados.dataRegistro;
    item.valor = dados.valor;
    item.patrimonio = dados.patrimonio;

    res.send("Patrimonio alterado com sucesso!");
};

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const porta = 3000;

app.get("/", mostrarPatrimonio);
app.get("/:id", buscarPatrimonio);
app.post("/", novoPatrimonio);
app.delete("/:id", excluirPatrimonio);
app.put("/:id", alterarPatrimonio)

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`);
});