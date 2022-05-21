const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {  
        firstname:'colin',
        lastname:'christoph',
        role: 'student',
        password:'abc' 
    },
    {  
        firstname:'craig',
        lastname:'lenovo',
        role: 'teacher',
        password:'abcd' 
    }
]


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;