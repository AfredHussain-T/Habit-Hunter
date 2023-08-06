const mongoose = require('mongoose');

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
    


}, {timestamps: true });


const Habit = mongoose.model('habits' , habitSchema);
module.exports = Habit;