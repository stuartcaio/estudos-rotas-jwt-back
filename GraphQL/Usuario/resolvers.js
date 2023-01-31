const User = require('../../src/models/User');

module.exports = {
    Query: {
        usuarios() {
            return User.findAll().then((usuarios) => {
                return usuarios;
            });
        },
    
        usuario(obj, args) {
            return User.findByPk(args.id).then((usuario) => {
                return usuario;
            });
        }
    }
}