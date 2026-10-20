const usuario = {
    nome: "Yago Gregio de Oliveira",
    idade: 16,
    email: "yagogregio@gmail.com",
    cidade: "Jaguariúna"
}

const chaves = Object.keys(usuario)

for (let i = 0; i < chaves.length; i++) {
    const chave = chaves[i]

    if (chave === "nome" || chave === "cidade") {
        console.log(chave, usuario[chave])
    }
};
