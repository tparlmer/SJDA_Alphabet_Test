const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { TestWatcher } = require('jest');

class User extends Model {
    //Checks password per user
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Define table columns and configuration (https://sequelize.org/docs/v6/core-concepts/model-basics/)
User.init(
    {
        // Table Column definitions go here (see 13.1.5 for reference)
        // other potential values:
            //password
            //email
            //id
        // I want to review the function of primaryKey and autoIncrement
        // User table has MANY quizzes (one to many)
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },    
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     is: ["teacher","student"]
            // }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1,5]
            }
          }
        },
    {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
    
          async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          }
        },
        // Table configuration options go here
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;