// Importing the express and express router
const express= require('express');
const router = express.Router();
// Importing the home controller to make use of the functions created in it
const homeCont = require('../controllers/homeController');

// creating a route to display the home page view
router.get('/' , homeCont.homeView);

// creating a router for routing all the habit related routes through the routes present in habitroutes file
router.use('/habit' , require('./habitroutes'))

module.exports = router;