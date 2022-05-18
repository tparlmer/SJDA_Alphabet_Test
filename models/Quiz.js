const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Quiz model
class Quiz extends Model {}

Quiz.init(
    {
        // Table Column definitions go here (see 13.1.5 for reference)
        // TODO: add all necessary values to store quiz data from frontend
        // This may be better designed with 1 column for responses per user?
        
        // TO DO
        // add letter and answer

        // foreign key that relates to the primary key in the User table
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // Letter A
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter B
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter C
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter D
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter E
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter F
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter G
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter H
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter I
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter J
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter K
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter L
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter M
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter N
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter O
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter P
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter Q
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter R
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter S
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter T
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter U
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter V
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter W
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter X
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter Y
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter Z
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer: {
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