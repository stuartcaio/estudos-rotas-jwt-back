const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserController{
    inicio = (req, res) => {
        res.status(200).json({mensagem: 'Bem-vindo ao meu sistema!'});
    }

    mostrar = (req, res) => {
        User.findAll().then((usuarios) => {
            res.status(200).json(usuarios);
        });
    }

    adicionar = (req, res) => {
        User.findOne({where: {email: req.body.email}}).then((existe) => {
            if(existe){
                res.status(401).json({mensagem: 'Este e-mail já existe.'});
            } else{
                User.create({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                }).then(() => {
                    res.status(201).json({mensagem: 'Usuário criado com sucesso.'});
                }).catch(() => {
                    res.status(401).json({mensagem: 'Não foi possível criar o usuário.'});
                });
            }
        });
    }

    editar = (req, res) => {
        User.findByPk(req.params.id).then((user) => {
            if(user){
                user.update({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                }).then(() => {
                    res.status(201).json({mensagem: 'Usuário editado com sucesso.'});
                }).catch(() => {
                    res.status(401).json({mensagem: 'Não foi possível editar o usuário.'});
                });
            } else{
                res.status(404).json({mensagem: 'Este usuário não existe.'});
            }
        });
    }

    excluir = (req, res) => {
        User.findByPk(req.params.id).then((user) => {
            if(user){
                user.destroy({
                    where: {id: req.params.id}
                }).then(() => {
                    res.status(200).json({mensagem: 'Usuário excluído com sucesso.'});
                }).catch(() => {
                    res.status(400).json({mensagem: 'Não foi possível excluir o usuário.'});
                });
            } else{
                res.status(404).json({mensagem: 'Este usuário não existe.'});
            }
        });
    }

    logar = (req, res) => {
        User.findOne({where: {email: req.body.email}}).then(async (existe) => {
            const conferirSenha = (req.body.senha == existe.senha);
            console.log(conferirSenha)

            if(existe){
                if(!conferirSenha){
                    res.status(401).json({mensagem: 'E-mail ou senha incorretos.'});
                } else{
                    res.status(201).json({mensagem: 'Usuário logado com sucesso!'});
                }
            } else{
                res.status(401).json({mensagem: 'E-mail ou senha incorretos.'});
            }
        });
    }

    sistema = (req, res) => {
        res.status(200).json({mensagem: 'Você logou no sistema.'});
    }
}

module.exports = UserController;