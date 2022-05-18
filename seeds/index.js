const seedUsers = require('./user-seeds');
//const seedUsers = require('./25-word-list');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  //await seed25-word-list();
  //console.log('--------------');
  process.exit(0);
};

seedAll();