// this file governs the routing for the Quiz model

const router = require("express").Router();
const { Quiz } = require("../../models");


// GET /api/quiz
// This route is to get saved quiz data 
router.get("/", (req, res) => {
  res.json();
 // console.log('req.query',req.query);

 /* Quiz.findAll({
    where: { user_id: req.query.id },  
  })
  .then((dbUserData) => {
    console.log('dbUserData',dbUserData);
   res.json(dbUserData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  }); */
});


// GET /api/quiz/1
router.get("/:id", (req, res) => {
  
  console.log('req.query',req.params.id);
  var reqid = req.params.id;

  Quiz.findAll({
    where: { user_id: reqid},  
  })
  .then((dbUserData) => {
    console.log('dbUserData',dbUserData);
   res.json(dbUserData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

});

// POST /api/quiz
// add ID for POST route??
router.post("/", (req, res) => {
  console.log(req.body);
  const quizAnswers= req.body.quizData;
  const user_id = req.body.user_id
  // Quiz.bulkCreate([
  //   {
  //     letter: req.body.letter,
  //   },
  //   {
  //     answer: req.body.answer,
  //   },
  // ]);

 const quizObject= {}

quizObject.user_id= user_id
 console.log(quizAnswers);
 for (let i = 0; i < quizAnswers.length; i++){
   console.log(i);
   quizObject["question"+ quizAnswers[i].letter.toUpperCase()] = quizAnswers[i].answer
 }


 console.log({quizObject});
 
 Quiz.create(quizObject).then(data => {
   console.log(data);
 })
 
 // creates a quiz in the quiz table (this will be a row of results)
  // take variable where you stored the quiz results on the frontend
  // returns something back to the frontend
  // GOAL - GET JSON FROM FRONTEND
  console.log("test POST api/quiz");
  res.json(req.body);
});

// must export rotuer for the file/ routes to be readable - like a return statement in a function
module.exports = router;
