// Importing the express and express router
const express= require('express');
const router = express.Router();
// Importing the habit controller to make use of the functions created in habit controller
const habitCont = require('../controllers/habitController')

// Creating  a route to create the habbit
router.post('/create' ,  habitCont.createHabit);

// Creating the route to show the weekly report of the habit
router.get('/weekly/:currHabit_id' , habitCont.showWeekly);

// Creating the route to update the daily status of all the habits that are present int DB.
router.post('/status/:habitId/:weekId' , habitCont.dailyStatus);

// Creating the route to update the weekly status of particular habit that are present int DB.
router.post('/weeklyStatus/:day_id/:habit_Id' , habitCont.weeklyStatus);

// Creating a route to delete the habit from DB
router.get('/delete/:deleteID' , habitCont.deleteHabit);



module.exports = router;