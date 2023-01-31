const { gql } = require('apollo-server');

const salgadinhoSchema = gql`
    type Salgadinho {
        id: Int,
        empresa: String,
        data: String,
        usuario: String
    }

    type Query {
        salgadinhos: [Salgadinho]
    }
`;

module.exports = salgadinhoSchema;