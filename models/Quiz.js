const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Quiz model
class Quiz extends Model {}

Quiz.init(
    {
        // Table Column definitions go here (see 13.1.5 for reference)
        // TODO: add all necessary values to store quiz data from frontend
        // This may be better designed with 1 column for responses per user?
        
        // foreign key that relates to the primary key in the User table
        User_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        // A
        A: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // B
        B: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // C
        question3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // D
        question4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // E
        question5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // F
        question6: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // G
        question7: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // H
        question8: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // I
        question9: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // J
        question10: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // K
        question11: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // L
        question12: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // M
        question13: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // N
        question14: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // O
        question15: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // P
        question16: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Q
        question17: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // R
        question18: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // S
        question19: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // T
        question20: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // U
        question21: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // V
        question22: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // W
        question23: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // X
        question24: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Y
        question25: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Z
        question26: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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