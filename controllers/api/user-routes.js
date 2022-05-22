// this file governs the routing for the User model

const router = require("express").Router();
const { User, Quiz } = require("../../models");

// TODO: Add CRUD operations for User routes
// 13.1.6 as reference

// GET /api/users
router.get("/", (req, res) => {
  // This route is for grabbing all the users from the user table
  // filter out passwords
   console.log('req.path',req.query);
  var whereQuery = {};

  if(req.query.firstname) {
    whereQuery.firstname = req.query.firstname;
  }
  if(req.query.lastname) {
    whereQuery.lastname = req.query.lastname;
  }

   User.findAll({
     include: [{
       model: Quiz
     }],
    attributes: { exclude: ["password"] },
    where: whereQuery,
  })
  .then((dbUserData) => res.json(dbUserData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET /api/users/1
// This route is for grabbing a specific user with a user id
// filter out passwords (protect this route)
// const users = await User.findByPk({ include: Quizzes });

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    // include: [
    // {
    //   model: Quiz,
    //   attributes: ['id', 'title', 'quiz_url', 'created_at']
    //  },
    // ]
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// GET /api/users/1
// This route is for grabbing a specific user with a user id
// filter out passwords (protect this route)
// const users = await User.findByPk({ include: Quizzes });

// POST /api/users
router.post("/", (req, res) => {
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    role: req.body.role,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.firstname = dbUserData.firstname;
        req.session.lastname = dbUserData.lastname;
        req.session.role = dbUserData.role;
        req.session.loggedIn = true;
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  console.log("meoww");
  res.send();
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that name!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.firstname = dbUserData.firstname;
      req.session.lastname = dbUserData.lastname;
      req.session.role = dbUserData.role;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log('You are now logged out')
    });
  }
  else {
    res.status(404).end();
  }
});
//Saving PUT and Delete Routes for a later date
// PUT /api/users/1
// router.put("/:id", (req, res) => {
//   // This route is for modyfing a specific user with a specific user id in the user table
// });

// // DELETE /api/users/1
// router.delete("/:id", (req, res) => {
//   // This route deletes a specific user in the user table
// });

// must export rotuer for the file/ routes to be readable - like a return statement in a function
module.exports = router;
