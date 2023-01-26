const Sequelize = require('sequelize');
const db = require('../config/dbConnect');

const User = db.define('estudos-jwt-rotas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permissao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;