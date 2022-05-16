// import all models
// this file imports the User model and exports an object with it as a property

const User = require('./User');
const Quiz = require('./Quiz');

User.hasMany(Quiz, {
    foreignKey: 'user_id';
})

Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });


module.exports = { User, Quiz };