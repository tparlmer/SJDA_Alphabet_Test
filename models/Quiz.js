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
        letter1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter B
        letter2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter C
        letter3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter D
        letter4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter E
        letter5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter F
        letter6: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer6: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter G
        letter7: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer7: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter H
        letter8: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer8: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter I
        letter9: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer9: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter J
        letter10: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer10: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter K
        letter11: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer11: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter L
        letter12: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer12: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter M
        letter13: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer13: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter N
        letter14: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer14: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter O
        letter15: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer15: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter P
        letter16: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer16: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter Q
        letter17: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer17: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter R
        letter18: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer18: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter S
        letter19: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer19: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter T
        letter20: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer20: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter U
        letter21: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer21: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter V
        letter22: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer22: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter W
        letter23: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer23: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter X
        letter24: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer24: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter Y
        letter25: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer25: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Letter Z
        letter26: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Answer
        answer26: {
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