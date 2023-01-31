const express = require('express');
const router = require('./src/routes/rotas');
const { ApolloServer } = require('apollo-server');
const cors = require('cors');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const userSchema = require('./GraphQL/Usuario/UsuarioSchema.js');
const userResolver = require('./GraphQL/Usuario/resolvers');
const salgadinhoSchema = require('./GraphQL/Salgadinho/SalgadinhoSchema');
const salgadinhoResolver = require('./GraphQL/Salgadinho/resolvers');
const app = express();
const porta = 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(router);

const typeDefs = [userSchema, salgadinhoSchema];
const resolvers = [userResolver, salgadinhoResolver];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = new ApolloServer({schema});

server.listen().then(({url}) => {
    console.log(url);
});

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}.`);
});