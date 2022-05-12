// This controllers index.js imports the api folder and routes it using the express router, then exports the express router

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes)

module.exports = router;