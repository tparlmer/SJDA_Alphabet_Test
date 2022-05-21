const sequelize = require('../config/connection');
const { Quiz } = require('../models');

const quizdata = [{
    questionA:'a',
    questionB:'b',
    questionC:'x',
    questionD:'x',
    questionE:'x',
    questionF:'x',
    questionG:'x',
    questionH:'x',
    questionI:'x',
    questionJ:'x',
    questionK:'x',
    questionL:'x',
    questionM:'x',
    questionN:'x',
    questionO:'x',
    questionP:'x',
    questionQ:'x',
    questionR:'x',
    questionS:'x',
    questionT:'x',
    questionU:'x',
    questionV:'x',
    questionW:'x',
    questionX:'x',
    questionY:'x',
    questionZ:'x',
    user_id:1
}]

const seedQuiz = () => Quiz.bulkCreate(quizdata, {individualHooks: true});

module.exports = seedQuiz;