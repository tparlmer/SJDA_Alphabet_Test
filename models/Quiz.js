const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Quiz model
class Quiz extends Model {}

Quiz.init(
  {
    // Table Column definitions go here (see 13.1.5 for reference)
    // TODO: add all necessary values to store quiz data from frontend
    // This may be better designed with 1 column for responses per user?

    // TO DO
    // add letter and answer

    // primary key of the quiz
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Letter A
    questionA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter B
    questionB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter C
    questionC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter D
    questionD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter E
    questionE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter F
    questionF: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter G
    questionG: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter H
    questionH: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter I
    questionI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter J
    questionJ: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter K
    questionK: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter L
    questionL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter M
    questionM: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter N
    questionN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter O
    questionO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter P
    questionP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter Q
    questionQ: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter R
    questionR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter S
    questionS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter T
    questionT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter U
    questionU: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter V
    questionV: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter W
    questionW: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter X
    questionX: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter Y
    questionY: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Letter Z
    questionZ: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    // Table configuration options go here
    sequelize,
    // maybe timestamps should be false, we'll see
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "quiz",
  }
);

module.exports = Quiz;
