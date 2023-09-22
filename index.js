/*******************************CARREGA OS MÓDULOS PRINCIPAIS**************************************/
const express = require("express");


/*****************************************VARIÁVEIS DO SISTEMA*************************************/
let porta = 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo");
});

app.listen(porta, () => {
    console.log(`Servidor ativo na porta ${porta}`)
})