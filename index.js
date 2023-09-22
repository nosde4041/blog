/***************************************** CARREGA OS MÓDULOS PRINCIPAIS ****************************/
const express = require("express");


/***************************************** VARIÁVEIS DO SISTEMA *************************************/
let porta = 8080;

/***************************************** INSTANCIANDO O EXPRESS ***********************************/
const app = express();

/***************************************** DEFININDO A VIEW ENGINE **********************************/
app.set("view engine", "ejs");

/***************************************** ARQUIVOS ESTÁTICOS ***************************************/

/***************************************** DEFININDO OS ENDPOINTS ***********************************/
app.get("/", (req, res) => {
    res.render("index")
});

app.listen(porta, () => {
    console.log(`Servidor ativo na porta ${porta}`)
})