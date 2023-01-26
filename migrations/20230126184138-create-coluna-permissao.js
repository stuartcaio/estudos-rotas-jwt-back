'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('estudos-jwt-rotas', 'permissao', {
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('estudos-jwt-rotas', 'permissao');
  }
};
