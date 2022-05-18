// this file governs the routing for the User model

const router = require('express').Router();
const { User, Quiz } = require('../../models')

// TODO: Add CRUD operations for User routes
// 13.1.6 as reference

// GET /api/users
router.get('/', (req, res) => {
    // This route is for grabbing all the users from the user table
    // filter out passwords
    User.findAll({
        attributes: { exclude: ['password'] }
      })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
// GET /api/users/1
    // This route is for grabbing a specific user with a user id
    // filter out passwords (protect this route)
    // const users = await User.findByPk({ include: Quizzes });

router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
     // include: [
       // {
       //   model: Quiz,
       //   attributes: ['id', 'title', 'quiz_url', 'created_at']
      //  },
     // ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// GET /api/users/1
    // This route is for grabbing a specific user with a user id
    // filter out passwords (protect this route)
    // const users = await User.findByPk({ include: Quizzes });

// POST /api/users
router.post('/', (req, res) => {
    // expects {firstname: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      grade: req.body.grade,
      password: req.body.password
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.body.firstname = dbUserData.firstname;
          req.session.lastname = dbUserData.lastname;
          req.session.loggedIn = true;
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
      console.log("meoww");
      res.send();
  });

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that name!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.firstname = dbUserData.firstname;
      req.session.lastname = dbUserData.lastname;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

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