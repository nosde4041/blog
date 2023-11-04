/***************************************** CARREGA OS MÓDULOS PRINCIPAIS ****************************/

const express = require("express");
const conexaoBD = require("./database/database");


/***************************************** CARREGA OS CONTROLLERS ***********************************/

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

/***************************************** VARIÁVEIS DO SISTEMA *************************************/

let porta = 8080;

/***************************************** CRIANDO AS INSTÂNCIAS ***********************************/

const app = express();

/***************************************** DEFININDO A VIEW ENGINE **********************************/

app.set("view engine", "ejs");

/***************************************** CONECTANDO O BD ******************************************/

conexaoBD.
    authenticate().then(() => {
        console.log("conectado com sucesso");
    }).catch((erro) => {
        console.log(erro);
    })

/***************************************** ARQUIVOS ESTÁTICOS ***************************************/

/***************************************** DEFININDO OS ENDPOINTS ***********************************/

app.use("/", categoriesController);
app.use("/", articlesController);


app.listen(porta, () => {
    console.log(`Servidor ativo na porta ${porta}`)
})