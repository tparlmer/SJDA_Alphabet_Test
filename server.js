// require express
const express = require('express');
const path = require('path');

// instatiate the server
const app = express();
const PORT = process.env.PORT || 3001;

// require sequelize
// setup from config connection.js file
const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')//(session.Store);

// Setup sess for hashing and passwords
// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// set up helpers.js for formatting time and date (timestamps)
// const helpers = require("./utils/helpers");

// const hbs = exphbs.create({ helpers });

// call handlebars
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

//NEED TO SET UP res.render ROUTE

// call express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/")));
//set view engine to ejs
app.set('view engine', 'ejs');

//index page
app.get('/', function(req, res) {
  res.render('pages/index');
});
//app.engine

// node reference to controllers folder
app.use(require("./controllers/"));

app.listen(PORT, () => {
  console.log(`Port running on ${PORT}`)
})