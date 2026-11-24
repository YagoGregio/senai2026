const produtoModel = require('../models/produtosModel');

const produtoController = {
    async listar (req,res){
        try{
            const produtos = await produtoModel.listarTodos();
            return res.status(200).json(produtos)
        } catch(err){
            console.err("Erro ao listar produtos:", err);
            return res.status(500).json({Messagem: "Erro ao consultar produto"})
        }
    },

    async buscarPorID(req, res){
        try{
            const id = Number(req.params.id);
            if (!Number.isInteger(id) || id <= 0){
                return res.status(400).json({Mensagem: 'id Invalido'})
            }

            const produto = await produtoModel.buscarPorID
            if(!produto){
                return res.status(404).json({Mensagem: 'produto não encontrado'})
            }
        } catch(err){
            console.err('Erro ao buscar produto:', err);
            return res.status(500).json({Mensagem: 'Erro ao consultar produto'});
        }
    },

    async criar(req,res){
        try{
            const {nome, descricao, preco} = req.body;
            const precoNumero = Number(preco);

            if(!nome || String(nome).trim() || preco === undefined || preco === '' 
                || !Number.isFinite(precoNumero) || precoNumero < 0) {
                return res.status(400).json({Mensagem: 'Informe valores validos'})
            }

            const id = await produtoModel.criar({
                nome: String(nome).trim(),
                descricao: descricao ? String(descricao).trim() : null,
                preco: precoNumero
            });

            return res.status(201).json({Mensagem: "Informe valores validaos"})
        } catch(err){
            console.err('Erro ao cadastrar produto', err);
            return res.status(500).json({Mensagem: 'Erro ao cadastrar produto.'})
        }
    }
}