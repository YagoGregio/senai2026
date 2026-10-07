const dados = require("./dados.json");

const busca = dados.find((item) => item.id === 2);

const alteracao = {
    telefone: "9999-9999",
    senha: "novasenha123",
};

const chaves = Object.keys(alteracao);

console.log(busca);

chaves.forEach((chave) => {
    console.log(chave);
    console.log(busca[chave]);
    busca[chave] = alteracao[chave];
    console.log(busca[chave]);
});

console.log(busca);

const alterar = (req, res) => {
    const id = req.params.id;
    const info = req.body;

    const busca = dados.find((dado) => dado.id == id);

    Object.keys(info).forEach((i) => {
        busca[i] = info[i];
    });

    res.send("Alteração realizada com sucesso!").end();
};

let cliente = {
    email: "joao@gmaill.com",
    telefone: "5862-7899",
};

console.log(Object.keys(cliente));

dados.forEach((item) => {
    if (item.id === 2) {
        cliente.id = item.id;
        cliente.nome = item.nome;
        cliente.senha = item.senha;
    }
});

Object.keys(cliente).forEach((key) => {
    cliente[key] = dados[key];
});