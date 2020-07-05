'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'endereco',
      'usuario_id',
      {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
        references: { model: 'usuario', key: 'id' }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
