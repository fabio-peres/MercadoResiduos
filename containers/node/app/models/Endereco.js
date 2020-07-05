const Sequelize = require('sequelize');
module.exports = function (app) {
    const User = app.connector.define('endereco', {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        logradouro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        numero: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false
        },
        usuario_id: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            references: { model: 'usuario', key: 'id' }
        }
    }, {
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'endereco'
    });

    return User;
};
