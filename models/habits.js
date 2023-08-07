const mongoose = require('mongoose');

// Creating a schema for our habit data
const habitSchema = new mongoose.Schema({
    habit: {
        type: String,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required:true
    },
    time: {
        type: String,
        required:true
    },
    week : [{
        date: String,
        status: String,
        flag: {
            type: Boolean,
            default: false
        }
    }],
    

// Providing time stamps to store the created time of the habit
}, {timestamps: true });


const Habit = mongoose.model('habits' , habitSchema);
// Exporting the model
module.exports = Habit;