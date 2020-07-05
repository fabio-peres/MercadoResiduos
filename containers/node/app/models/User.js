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
            allowNull: false
        },
        documento: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        //Desable fields for not create automatic into table
        createdAt: true,
        updatedAt: true,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'user'
    });
    //Return
    return User;
};
