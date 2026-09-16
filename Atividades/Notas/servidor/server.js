const express = require("express");
const alunos = require("../dados.json");

const mostrarAlunos = (req, res) => {
    calcularMedia();
    res.send(alunos)
}

const calcularMedia = (req, res) => {
    alunos.forEach( n => {
        n.media = (parseFloat(n.nota1 + n.nota2 + n.nota3)/3)
    })
}

const novoAluno = (req, res) => {
    if(req.body) {
        res.send("Notas lançadas com Sucesso!!");
        alunos.push(req.body);
    } else {
        res.send("Erro ao lançar nota do aluno");
    }
}

const app = express()
app.use(express.urlencoded({extended : true}))
const porta = 3000

app.get("/", mostrarAlunos)
app.post("/", novoAluno)
app.post("/media", calcularMedia)

app.listen(porta, () => { 
    console.log(`Servidor: http://127.0.0.1:${porta}`) 
    console.log(`Cliente: http://127.0.0.1:5500/cliente/index.html`)
})