const app_sequelize = require( 'sequelize' );

const Sequelize = new app_sequelize.Sequelize( 'database', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
} );

const Users = Sequelize.define( 'person',
    // Описание таблиц
    {
        id: {
            type: app_sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        lastname: {
            type: app_sequelize.DataTypes.TEXT,
            allowNull: false
        },
        firstname: {
            type: app_sequelize.DataTypes.TEXT,
            allowNull: false
        },
        age: {
            type: app_sequelize.DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }

);

module.exports = { Sequelize, Users };