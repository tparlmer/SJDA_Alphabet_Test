// this file governs the routing for the Quiz model

const router = require('express').Router();
const { Quiz } = require('../../models')

// TODO: Add CRUD operations for Quiz routes

// GET /api/quiz
router.get('/', (req, res) => {
    // gets quizzes of every user in the database
    res.json()
})

// GET /api/quiz/1
router.get('/:id', (req, res) => {
    // gets a specific quiz
})

// POST /api/quiz
router.post('/', (req, res) => {
    // creates a quiz in the quiz table (this will be a row of results)
})

// must export rotuer for the file/ routes to be readable - like a return statement in a function
module.exports = router;