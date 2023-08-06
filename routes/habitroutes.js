const express= require('express');
const router = express.Router();
const habitCont = require('../controllers/habitController')


router.post('/create' ,  habitCont.createHabit);
router.get('/list' , habitCont.showAllHabits);
router.get('/weekly/:currHabit_id' , habitCont.showWeekly);
router.post('/status/:habitId/:weekId' , habitCont.dailyStatus);
router.post('/weeklyStatus/:day_id/:habit_Id' , habitCont.weeklyStatus);
router.get('/delete/:deleteID' , habitCont.deleteHabit);



module.exports = router;