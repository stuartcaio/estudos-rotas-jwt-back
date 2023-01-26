const express = require('express');
const router = require('./src/routes/rotas');
const cors = require('cors');
const app = express();
const porta = 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(router);

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}.`);
});