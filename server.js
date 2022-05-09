// require express

// instatiate the server
const app = express();
const PORT = process.env.PORT || 3001;

// require sequelize
    // setup from config connection.js file

// Setup sess for hashing and passwords
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));

// set up helpers.js for formatting time and date (timestamps)
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

// call handlebars

// call express

// node refernce to controllers folder
app.use(require('./controllers/'));

