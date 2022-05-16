// import all models
// this file imports the User model and exports an object with it as a property

const User = require('./User');
const Quiz = require('./Quiz');

module.exports = { User, Quiz };