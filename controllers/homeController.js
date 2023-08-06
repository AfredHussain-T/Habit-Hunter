const Habit = require('../models/habits');

module.exports.homeView = async function(req,res){
    let Habits = await Habit.find({}); 
    res.render('home', {
        allHabits: Habits
    });
}