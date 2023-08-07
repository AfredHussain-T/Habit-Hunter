//  Importing the habit module
const Habit = require('../models/habits');

// Sending the data of Habit module to home page.
module.exports.homeView = async function(req,res){
    let Habits = await Habit.find({}); 
    res.render('home', {
        title: "Habit Hunter",
        allHabits: Habits
    });
}