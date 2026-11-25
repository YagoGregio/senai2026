require('dotenv').config();

const express = require('express');

const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');


const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use('/api/produtos', produtoRoutes);

app.get('/api', (req, res) => {
    res.json({ mensagem: 'API de produtos funcionando!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

console.log('DB:', process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME);