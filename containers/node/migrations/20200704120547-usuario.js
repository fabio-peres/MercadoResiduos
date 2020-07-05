'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE public.user (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      senha VARCHAR(100) NOT NULL,
      categoria CHAR(1) NOT NULL,
      documento VARCHAR(50) NOT NULL);`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DROP TABLE public.user`);
  }
};
