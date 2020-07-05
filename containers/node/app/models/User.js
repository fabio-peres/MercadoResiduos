const Sequelize = require('sequelize');
module.exports = function (app) {
    const User = app.connector.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
