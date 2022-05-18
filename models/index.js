// import all models
const Quiz = require('./Quiz');
const User = require('./User');

// create associations
User.hasMany(Quiz, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Quiz.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Quiz };
