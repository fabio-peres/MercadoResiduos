'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //create tables
    await queryInterface.sequelize.query(`
    CREATE TABLE public.cell_phone_company (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL);`
    );

    await queryInterface.sequelize.query(`
    INSERT INTO public.cell_phone_company (name)
      VALUES ('Algar'),
      ('Claro'),
      ('Oi'),
      ('Tim'),
      ('Vivo');`
    );

    await queryInterface.sequelize.query(`
    CREATE TABLE public.chip (
      id SERIAL PRIMARY KEY,
      caller_id VARCHAR(50) NOT NULL,
      ip VARCHAR(50),
      icc_id VARCHAR(50),
      dt_activation TIMESTAMP,
      cell_phone_company_id INT);`
    );

    await queryInterface.sequelize.query(`
    CREATE TABLE public.module_brand (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL);`
    );

    await queryInterface.sequelize.query(`
    INSERT INTO public.module_brand (name)
      VALUES ('Suntech');`
    );

    await queryInterface.sequelize.query(`
    CREATE TABLE public.module (
      id SERIAL PRIMARY KEY,
      imei VARCHAR(50) NOT NULL,
      is_active BOOLEAN NOT NULL,
      module_brand_id INT NOT NULL,
      chip_id INT);`
    );

    await queryInterface.sequelize.query(`
    CREATE TABLE public.vehicle_brand (
      id SERIAL PRIMARY KEY,
      name varchar(50) NOT NULL);`
    );

    await queryInterface.sequelize.query(`
    INSERT INTO public.vehicle_brand (name)
      VALUES ('Chevrolet'),
      ('Fiat'),
      ('Volkswagen'),
      ('Ford'),
      ('Hyundai'),
      ('Toyota'),
      ('Renault'),
      ('Honda'),
      ('Nissan');`
    );

    await queryInterface.sequelize.query(`
    CREATE TABLE public.vehicle_model (
      id SERIAL PRIMARY KEY,
      name varchar(50) NOT NULL,
      vehicle_brand_id INT NOT NULL);`
    );

    await queryInterface.sequelize.query(`
    CREATE TABLE public.vehicle (
      id serial PRIMARY KEY,
      plate varchar(50) NOT NULL,
      vehicle_model_id INT NOT NULL,
      module_id INT);`
    );

    //foreign key
    await queryInterface.sequelize.query(`
    ALTER TABLE public.chip 
    ADD CONSTRAINT chip_company FOREIGN KEY (cell_phone_company_id) 
    REFERENCES public.cell_phone_company (id);
      `
    );

    await queryInterface.sequelize.query(`
    ALTER TABLE public.module 
    ADD CONSTRAINT module_brand FOREIGN KEY (module_brand_id) 
    REFERENCES public.module_brand (id);
      `
    );
    await queryInterface.sequelize.query(`
    ALTER TABLE public.module 
    ADD CONSTRAINT module_chip FOREIGN KEY (chip_id) 
    REFERENCES public.chip (id);
      `
    );
    await queryInterface.sequelize.query(`
    ALTER TABLE public.vehicle_model 
    ADD CONSTRAINT vehicle_brand FOREIGN KEY (vehicle_brand_id) 
    REFERENCES public.vehicle_brand (id);
      `
    );
    await queryInterface.sequelize.query(`
    ALTER TABLE public.vehicle
    ADD CONSTRAINT vehicle_model FOREIGN KEY (vehicle_model_id) 
    REFERENCES public.vehicle_model (id);
      `
    );
    await queryInterface.sequelize.query(`
    ALTER TABLE public.vehicle
    ADD CONSTRAINT vehicle_module FOREIGN KEY (module_id) 
    REFERENCES public.module (id);
      `
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DROP TABLE public.cell_phone_company`);
    await queryInterface.sequelize.query(`DROP TABLE public.chip`);
    await queryInterface.sequelize.query(`DROP TABLE public.module`);
    await queryInterface.sequelize.query(`DROP TABLE public.vehicle_brand`);
    await queryInterface.sequelize.query(`DROP TABLE public.vehicle_model`);
    await queryInterface.sequelize.query(`DROP TABLE public.vehicle`);
  }
};
