const express = require("express")
const pedidos = require("../dados.json")

const mostrarPedidos = (req, res) => {
    res.send(pedidos)
}

const app = express()
const porta = 3000

app.get("/", mostrarPedidos)

app.listen(porta, () => { console.log(`Servidor: http://localhost:${porta}`) });

const calcularIMC = (req, res) => { 
    if(req.body){
        res.send("Pedido recebido, em análise")
        pedidos.push(req.body)
    }else{
        res.send("Erro ao receber pedido")
    }   
}