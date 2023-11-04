const Sequelize = require("sequelize");
const conexaoBD = require("../database/database");

const Category = conexaoBD.define("categories",
{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primeryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING,

});

module.exports = Category;