'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuario', {
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
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('usuario');
  }
};
