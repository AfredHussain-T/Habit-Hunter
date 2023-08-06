const Habit = require('../models/habits');

module.exports.createHabit = async function (req, res) {
    try {
        let days = [];
        for (let i = 0; i < 7; i++) {
            const currDate = new Date();
            currDate.setDate(currDate.getDate() - i);
            const newDate = currDate.toDateString();
            days.unshift({ date: newDate, status: "pending" });
        }
        let newHabit = await Habit.create({
            habit: req.body.habit,
            category: req.body.category,
            time: req.body.time,
            week: days
        })
        res.redirect('back');
    } catch (error) {
        console.log('There is an error while creating a habit: ', error);
    }
}

// To list down all the habits
module.exports.showAllHabits = async function (req, res) {
    try {
        let allHabits = await Habit.find({});
        res.render('habit', {
            allHabits: allHabits
        })
    } catch (error) {
        console.log('error while getting the habit list : ', error);
        res.redirect('back');
    }
}


// To show the weekly status of a habit
module.exports.showWeekly = async function (req, res) {
    try {
        let curHabit = await Habit.findById(req.params.currHabit_id);
        console.log(curHabit);

        let weekdays = curHabit.week;
        let currLastDate = new Date(weekdays[6].date);
        let currDate = new Date();
        currDate.setDate(currDate.getDate());

        let changeInTime = currDate.getTime() - currLastDate.getTime();
        let updateDatesBy = Math.floor(changeInTime / (24 * 3600 * 1000));
        console.log(updateDatesBy);
        if (updateDatesBy > 0) {
            weekdays.splice(0, updateDatesBy);
            for (let days = updateDatesBy - 1; days >= 0; days--) {
                const date = new Date();
                date.setDate(date.getDate() - days);
                const insertDate = date.toDateString();
                weekdays.push({ date: insertDate, status: "pending" });
            }
        }
        curHabit.week = weekdays;
        curHabit.save();

        res.render('weeklyReport', {
            habit: curHabit
        });
    } catch (error) {
        console.log('There is an error in fetch weekly report of the habit', error);
        res.redirect('back');
    }
}

module.exports.dailyStatus = async function (req, res) {
    try {
        let currHabit = await Habit.findById(req.params.habitId);

        let flag = currHabit.week[6].flag;
        if (currHabit.week[6].status == "pending") {
            currHabit.week[6].status = "done";
            currHabit.week[6].flag = true;

        }
        else if (currHabit.week[6].status == "done" && flag == true) {
            currHabit.week[6].status = "not-done";

        }
        else {
            currHabit.week[6].status = "pending";
            currHabit.week[6].flag = false;
        }
        console.log(flag);
        currHabit.save();
        res.redirect('back');
    } catch (error) {
        console.log('error in changing the status', error);
        res.redirect('back');
    }
}


module.exports.weeklyStatus = async function (req, res) {
    let currHabit = await Habit.findById(req.params.habit_Id);
    let day_id = req.params.day_id;

    for (let day = 0; day < currHabit.week.length; day++) {
        if (day_id === currHabit.week[day].id) {
            let flag = currHabit.week[day].flag;
            if (currHabit.week[day].status == "pending") {
                currHabit.week[day].status = "done";
                currHabit.week[day].flag = true;

            }
            else if (currHabit.week[day].status == "done" && flag == true) {
                currHabit.week[day].status = "not-done"
            }
            else {
                currHabit.week[day].status = "pending";
                currHabit.week[day].flag = false;
            }
            console.log(flag);

        }
    }
    currHabit.save();
    res.redirect('back');
}


module.exports.deleteHabit = async function (req, res) {
    try {
        let delhabit = await Habit.findByIdAndDelete(req.params.deleteID);
        res.redirect('back');
    } catch (error) {
        console.log('There is an error in removing habit ', error);
        res.redirect('back');
    }
}