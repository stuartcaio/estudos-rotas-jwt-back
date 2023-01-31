const salgadinhos = require('../itens/Salgadinhos');

const resolvers = {
    Salgadinho: {
        id(obj) {
            return obj.id_salgadinho;
        }
    },
    Query: {
        salgadinhos() {
            return salgadinhos;
        }
    }
}

module.exports = resolvers;