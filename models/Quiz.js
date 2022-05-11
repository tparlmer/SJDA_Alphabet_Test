const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Quiz model
class Quiz extends Model {}

Quiz.init(
    {
        // Table Column definitions go here (see 13.1.5 for reference)
        // TODO: add all necessary values to store quiz data from frontend
    },
    {
        // Table configuration options go here
        sequelize,
        // maybe timestamps should be false, we'll see
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = Quiz;