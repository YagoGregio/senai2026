const express = require("express")
const pedidos = require("../dados.json")

const mostrarPedidos = (req, res) => {
    calcularSubtotais()
    res.send(pedidos)
}

const novoPedido = (req, res) => {
    if (req.body) {
        res.send("Pedido recebido, em análise")
        pedidos.push(req.body)
    } else {
        res.send("Erro ao receber pedido")
    }
}

const calcularSubtotais = () => {
    pedidos.forEach(p=>{
        p.subtotal = p.precoUnitario * p.quantidade
    })
}

const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.post("/", novoPedido)
app.get("/", mostrarPedidos)

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://localhost:${porta}`)
})