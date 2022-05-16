// this file governs the routing for the User model

const router = require('express').Router();
const { User } = require('../../models')

// TODO: Add CRUD operations for User routes
// 13.1.6 as reference

// GET /api/users
router.get('/', (req, res) => {
    // This route is for grabbing all the users from the user table
    // filter out passwords
    // const users = await User.findAll({ include: Quizzes });
    res.send();
    console.log("hello world");
})

// GET /api/users/1
router.get('/:id', (req, res) => {
    // This route is for grabbing a specific user with a user id
    // filter out passwords (protect this route)
    // const users = await User.findByPk({ include: Quizzes });
})

// POST /api/users
router.post('/', (req, res) => {
    // This route is for creating a new user in the user table
})

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // This route is for modyfing a specific user with a specific user id in the user table
})

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    // This route deletes a specific user in the user table
})

// must export rotuer for the file/ routes to be readable - like a return statement in a function
module.exports = router;