const sequelize=require('../config/connection')
const { User, } = require('../models');

const userdata =[
    {   
        firstName:'colin',
        lastName:'christoph',
        grade: '12',
        password:'abc' 
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;