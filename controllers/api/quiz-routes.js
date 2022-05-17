// this file governs the routing for the Quiz model

const router = require('express').Router();
const { Quiz } = require('../../models')

// TODO: Add CRUD operations for Quiz routes

// GET request can send data to the frontend, but cannot collect it
// GET /api/quiz
router.get('/', (req, res) => {
    // gets quizzes of every user in the database
    console.log("test GET api/quiz")
    res.json();
})

// GET /api/quiz/1
router.get('/:id', (req, res) => {
    // gets a specific quiz
    // figure out how to tell database that the student has completed a specific quiz
    console.log("test GET api/quiz/id")
    res.send();
})

// POST /api/quiz
// add ID for POST route??
router.post('/', (req, res) => {
    // creates a quiz in the quiz table (this will be a row of results)
    // take variable where you stored the quiz results on the frontend
    // returns something back to the frontend
    // GOAL - GET JSON FROM FRONTEND
    console.log("test POST api/quiz");
    res.json(req.body);
})

// must export rotuer for the file/ routes to be readable - like a return statement in a function
module.exports = router;