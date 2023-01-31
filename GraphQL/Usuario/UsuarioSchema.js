const { gql } = require('apollo-server');

const usuarioSchema = gql`
    type Usuario {
        id: Int!,
        nome: String,
        email: String,
        senha: String,
        permissao: String
    }

    type Query {
        usuarios: [Usuario],
        usuario(id: Int): Usuario
    }
`;

module.exports = usuarioSchema;