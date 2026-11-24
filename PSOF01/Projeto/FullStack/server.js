require("dotenv").config();

const express = require("express");
const cors = require("cors");

const produtrosRoutes = require("./routes/produtroRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/produtos', produtroRoutes)

const port = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})