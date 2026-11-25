const produtoModel = require('../models/produtosModel');

const produtoController = {
    async listar (req,res){
        try{
            const produtos = await produtoModel.listarTodos();
            return res.status(200).json(produtos)
        } catch(error){
            console.error("Erro ao listar produtos:", error);
            return res.status(500).json({Messagem: "Erro ao consultar produto"})
        }
    },

    async buscarPorID(req, res) {
        try {
            const id = Number(req.params.id);
            if (!Number.isInteger(id) || id <= 0) {
                return res.status(400).json({ Mensagem: 'id Invalido' });
            }

            const produto = await produtoModel.buscarPorID(id);
            if (!produto) {
                return res.status(404).json({ Mensagem: 'produto não encontrado' });
            }

            return res.status(200).json(produto);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            return res.status(500).json({ Mensagem: 'Erro ao consultar produto' });
        }
    },

async criar(req, res) {
    try {
        const { nome, descricao, preco } = req.body;
        const precoNumero = Number(preco);

        if (!nome || !String(nome).trim() || preco === undefined || preco === ''
            || !Number.isFinite(precoNumero) || precoNumero < 0) {
            return res.status(400).json({ Mensagem: 'Informe valores válidos' });
        }

        const id = await produtoModel.criar({
            nome: String(nome).trim(),
            descricao: descricao ? String(descricao).trim() : null,
            preco: precoNumero
        });

        return res.status(201).json({ Mensagem: 'Produto cadastrado com sucesso', id });
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        return res.status(500).json({ Mensagem: 'Erro ao cadastrar produto' });
    }
},

    async atualizar(req,res){
        const id = Number(req.params.id)
        const {nome, descricao, preco} = req.body;
        const precoNumero = Number(preco);

        if(!Number.isInteger(id) || id <0){
            return res.status(400).json({Mensagem: 'ID invalido'})
        }

        if(!nome || !String(nome).trim() || preco == undefined 
        || preco === '' || Number.isFinite(precoNumero) || precoNumero  < 0){
            return res.status(400).json({Mensagem: 'Nome e/ou preço inválido'})
        }

        const produtoExiste = await produtoModel.buscarPorID(id);

        if(!produtoExiste){
            return res.status(400).json({Mensagem: 'Produto não encontrado'})
        }

        await produtoModel.atualizar(id, {
            nome: String(nome).trim(),
            descricao: descricao ? String(descricao).trim() : null,
            preco: precoNumero
        });

    },

    
    async excluir(req,res){
        try{
            const id = Number(req.params.id);

            if(!Number.isInteger(id) || id <0){
                return res.status(400).json({Mensagem: 'ID inválido'})
            }

            const quantidadeExcluida = await produtoModel.excluir(id);

            if(!quantidadeExcluida === 0){
                return res.status(400).json({Mensagem: 'Produto não encontrado'})
            }

            return res.status(200).json({Mensagem: 'Produto excluido com sucesso'})
        } catch (error){
            console.error('Erro ao excluir produto', error)
            return res.status(500).json({Mensagem: 'Erro ao excluir produto'})
        }
    }
    
}

module.exports = produtoController;