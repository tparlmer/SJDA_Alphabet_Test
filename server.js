// require express
const express = require('express');
const path = require('path');
const session = require('express-session');

// instatiate the server
const app = express();
const PORT = process.env.PORT || 3001;

// require sequelize
// setup from config connection.js file
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Setup sess for hashing and passwords
 const sess = {
secret: "Super secret secret",
cookie: {},
resave: false,
 saveUninitialized: true,
store: new SequelizeStore({
 db: sequelize,
}),
};

 app.use(session(sess));

// set up helpers.js for formatting time and date (timestamps)
const helpers = require("./utils/helpers");

//const hbs = exphbs.create({ helpers });

// call handlebars
//app.engine("handlebars", hbs.engine);
//app.set("view engine", "handlebars");

//NEED TO SET UP res.render ROUTE

// call express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/public")));
//set view engine to ejs
app.set('view engine', 'ejs');

//index page

app.get('/', function(req, res) {
  res.render('pages/login');
});
app.get('/startquiz/', function(req, res) {
  res.render('pages/startquiz');
});
app.get('/dashboard/', function(req, res) {
  res.render('pages/dashboard');
});


// node reference to controllers folder
app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
