const Sequelize = require('sequelize');
module.exports = function (app) {
    const User = app.connector.define('user', {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        categoria: Sequelize.ENUM('C', 'V'),
        documento: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'user'
    });

    return User;
};
