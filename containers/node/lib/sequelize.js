const Sequelize = require('sequelize');
module.exports = function () {
    const config = {
        host: '172.18.0.1',
        database: 'mercado',
        user: 'mercado',
        pass: 'mercado123!',
        adapter: 'postgres',
        reconnect: true,
        timezone: '-03:00',
        logging: console.log
    };

    const connector = new Sequelize(config.database, config.user, config.pass, {
        host: config.host,
        dialect: config.adapter,
        timezone: config.timezone,
        reconnect: config.reconnect,
        logging: config.logging
    });

    return connector;
};
