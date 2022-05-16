const router = require('express').Router();
const quizRoutes = require('./quiz-routes');
const userRoutes = require('./user-routes');

router.use('/quiz', quizRoutes)
router.use('/users', userRoutes)

module.exports = router;