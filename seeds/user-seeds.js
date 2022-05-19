const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {  
        firstname:'colin',
        lastname:'christoph',
        grade: '12',
        password:'abc' 
    },
    {  
        firstname:'craig',
        lastname:'lenovo',
        grade: '12',
        password:'abcd' 
    }
]


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;