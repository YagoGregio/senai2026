function listarProfessores(req, res) {
    //criar uma lista simples de professores
    const professores = [
    {
        id: 1,
        nome: "Luis Fernando"
    },

    {
        id: 2,
        nome: "Reenye"
    },

    {
        id: 3,
        nome: "Jansen Leite"
    },

    {
        id: 4,
        nome: "Wellington"
    },

    {
        id: 5,
        nome: "Robson"
    }

    ];

    //Envia a lista de professores como uma resposta JSON
    res.json(professores);
}

module.exports = {
    listarProfessores
};