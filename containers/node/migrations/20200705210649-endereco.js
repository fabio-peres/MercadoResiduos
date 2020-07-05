'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE public.endereco (
      id SERIAL PRIMARY KEY,
      logradouro VARCHAR(100) NOT NULL,
      numero VARCHAR(10) NOT NULL,
      bairro VARCHAR(100) NOT NULL,
      cep VARCHAR(15) NOT NULL,
      cidade VARCHAR(100) NOT NULL);`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DROP TABLE public.endereco`);
  }
};
