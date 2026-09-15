 //Função responsável para mostrar os alunos
function listarAlunos(req, res){
    
    //criar uma lista simples de alunos
    const alunos = [
        {
            id: 1,
            nome: "João"
        },
        {
            id: 2,
            nome: "Maria"
        },
        {
            id: 3,
            nome: "Carlos"
        }
    ];

    //Envia a lista de alunos como uma resposta JSON
    res.json(alunos);
}

//Exportando a função para que ela possa ser utilizada em outros arquivos
module.exports = {
    listarAlunos
};