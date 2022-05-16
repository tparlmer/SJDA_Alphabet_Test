const router = require('express').Router();
const quizRoutes = require('./quiz-routes');
const userRoutes = require('./user-routes');

// specifies routes for the api
router.use('/quiz', quizRoutes)
router.use('/users', userRoutes)

module.exports = router;