const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

// Define table columns and configuration (https://sequelize.org/docs/v6/core-concepts/model-basics/)
User.init(
    {
        // Table Column definitions go here (see 13.1.5 for reference)
        // other potential values:
            //password
            //email
            //id
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grade: {
            type: Number,
            allowNull: false,
        }
    },
    {
        // Table configuration options go here
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;